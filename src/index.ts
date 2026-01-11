#!/usr/bin/env node

import * as fs from 'node:fs';
import * as path from 'node:path';
import { intro, outro, text, select, confirm, spinner, isCancel, cancel } from '@clack/prompts';
import pc from 'picocolors';
import gradient from 'gradient-string';
import { templates } from './templates';

const VERSION = '0.1.0';
const zenithGradient = gradient(['#3b82f6', '#06b6d4', '#22d3ee']);

// Basic branding
const LOGO_COMPACT = `  ${pc.bold(zenithGradient('⚡ ZENITH'))} ${pc.dim('- Create Plugin')}`;

function showHelp() {
    console.log(`
${LOGO_COMPACT}

Usage:
  create-zenith-plugin <plugin-name> [options]

Options:
  --template <type>      Scaffold template (theme, content, utility) [default: utility]
  --include-example      Include example files [default: false]
  --overwrite            Overwrite existing directory [default: false]
  --help, -h             Show help
  --version, -v          Show version
`);
}

async function main() {
    const args = process.argv.slice(2);

    if (args.includes('--help') || args.includes('-h')) {
        showHelp();
        process.exit(0);
    }

    if (args.includes('--version') || args.includes('-v')) {
        console.log(`zenith-create-plugin v${VERSION}`);
        process.exit(0);
    }

    intro(zenithGradient('Zenith Plugin Creator'));

    // Parse arguments
    let pluginName = args.find(a => !a.startsWith('-'));
    const templateArg = args.find(a => a.startsWith('--template='))?.split('=')[1] ||
        (args.indexOf('--template') !== -1 ? args[args.indexOf('--template') + 1] : undefined);

    const includeExample = args.includes('--include-example');
    const overwrite = args.includes('--overwrite');

    // Interactive flow for missing/invalid data
    if (!pluginName) {
        const name = await text({
            message: 'What is the name of your plugin?',
            placeholder: 'firebase',
            validate: (value) => {
                if (!value) return 'Plugin name is required';
                if (/[^a-zA-Z0-9_-]/.test(value)) return 'Invalid characters in plugin name';
            }
        });
        if (isCancel(name)) return handleCancel();
        pluginName = name as string;
    }

    let template = templateArg;
    if (!template || !['theme', 'content', 'utility'].includes(template)) {
        const selected = await select({
            message: 'Select a scaffolding template:',
            options: [
                { value: 'utility', label: 'Utility (Generic stub)', hint: 'Recommended for most plugins' },
                { value: 'theme', label: 'Theme (TailwindCSS / theming examples)' },
                { value: 'content', label: 'Content (Markdown / CMS examples)' }
            ]
        });
        if (isCancel(selected)) return handleCancel();
        template = selected as string;
    }

    // Target directory logic: Always in CWD
    const targetDir = path.resolve(process.cwd(), pluginName);

    if (fs.existsSync(targetDir) && !overwrite) {
        const shouldOverwrite = await confirm({
            message: `Directory "${pluginName}" already exists. Overwrite?`,
            initialValue: false
        });
        if (isCancel(shouldOverwrite) || !shouldOverwrite) return handleCancel();
    }

    const s = spinner();
    s.start(`Scaffolding ${pc.cyan(pluginName)}...`);

    try {
        // Create folders
        fs.mkdirSync(targetDir, { recursive: true });
        fs.mkdirSync(path.join(targetDir, 'utils'), { recursive: true });

        // Write files
        fs.writeFileSync(path.join(targetDir, 'index.ts'), templates.index(pluginName, template));
        fs.writeFileSync(path.join(targetDir, 'types.ts'), templates.types());
        fs.writeFileSync(path.join(targetDir, 'README.md'), templates.readme(pluginName, template as string));

        if (includeExample) {
            const exampleDir = path.join(targetDir, 'example', template);
            fs.mkdirSync(exampleDir, { recursive: true });
            fs.writeFileSync(path.join(exampleDir, 'demo.ts'), templates.example(pluginName, template));
        }

        s.stop(`Plugin ${pc.green(pluginName)} scaffolded successfully!`);

        outro(`Next steps:
  1. cd ${pluginName}
  2. Implement your logic in setup(ctx)
  3. Import and use in zenith.config.ts`);

    } catch (err) {
        s.stop('Failed to scaffold plugin');
        console.error(pc.red(err instanceof Error ? err.message : String(err)));
        process.exit(1);
    }
}

function handleCancel() {
    cancel('Operation cancelled.');
    process.exit(0);
}

main().catch(err => {
    console.error(pc.red(err instanceof Error ? err.message : String(err)));
    process.exit(1);
});
