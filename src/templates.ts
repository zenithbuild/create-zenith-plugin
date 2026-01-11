export const templates = {
  index: (name: string, template: string) => `import { ZenithPlugin } from "@zenith/core";

export const plugin: ZenithPlugin = {
  name: "${name}",
  template: "${template}", // scaffolding hint, not restrictive
  options: {},
  setup(ctx) {
    // Stub only; user implements plugin functionality here
    console.log("Setup called for ${name} of template ${template}");
  }
};
`,
  types: () => `export interface PluginOptions {
  // scaffold options for plugin, to be implemented by contributor
}
`,
  readme: (name: string, template: string) => {
    const camelName = name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    return `# ⚡ Zenith ${name.charAt(0).toUpperCase() + name.slice(1)} Plugin

[![Zenith Ecosystem](https://img.shields.io/badge/Zenith-Ecosystem-blue?style=for-the-badge&logo=zenith)](https://github.com/zenithbuild/zenith)
[![Template: ${template}](https://img.shields.io/badge/Template-${template}-cyan?style=for-the-badge)](https://github.com/zenithbuild/create-zenith-plugin)

> [!TIP]
> **Welcome to your new Zenith plugin!** This scaffold provides a robust starting point for building powerful extensions for the Zenith ecosystem. 

---

## 📖 Introduction

The **${name}** plugin for Zenith is designed to [Describe the purpose of your plugin here]. 

Scaling your Zenith application is easier with a well-structured plugin system. This plugin follows the **${template}** scaffolding pattern, making it ideal for [mention common use case for this template].

### Core Features:
- 🚀 **High Performance**: Optimized for Zenith's lightning-fast runtime.
- 🛠️ **Easy Integration**: Hooks directly into the Zenith lifecycle.
- 🧩 **Extensible**: Designed to be shared and extended.

---

## ⚙️ Installation

To use this plugin, simply import it into your \`zenith.config.ts\`:

\`\`\`ts
import { plugin as ${camelName} } from "./plugins/${name}";

export default {
  // ... your other config
  plugins: [
    ${camelName}({
      /* configuration options here */
    })
  ]
};
\`\`\`

---

## 🛠️ Configuration

Configuration is handled via the \`options\` object passed to the plugin function.

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| \`apiKey\` | \`string\` | \`undefined\` | Your service API key (required) |
| \`debug\` | \`boolean\` | \`false\` | Enable verbose logging |

> [!IMPORTANT]
> Ensure you implement the \`PluginOptions\` interface in \`types.ts\` to provide full Type Safety for your users!

---

## 🚀 Usage

This plugin exposes [features/hooks/commands]. Here is how you can use them:

### Runtime Example
\`\`\`ts
// Logic implemented in index.ts setup(ctx)
\`\`\`

---

## 🎨 Examples

### Basic Setup
[Provide a simple example of how to use the plugin]

### Advanced Usage
[Demonstrate more complex scenarios or experimental features]

---

## 🤝 Contributing

We love contributions! If you're looking to help out:
1. **Fork** the repository.
2. **Create** a feature branch (\`git checkout -b feature/amazing-feature\`).
3. **Commit** your changes (\`git commit -m 'Add some amazing feature'\`).
4. **Push** to the branch (\`git push origin feature/amazing-feature\`).
5. **Open** a Pull Request.

> [!NOTE]
> Please ensure your code follows the existing style and includes relevant tests.

---

## 🩺 Troubleshooting & FAQ

**Q: Plugin is not loading?**  
A: Check if you have correctly exported the \`plugin\` object in \`index.ts\`.

**Q: State is not syncing?**  
A: Ensure you are using the \`ctx\` context provided in \`setup(ctx)\` correctly.

**DX Tip**: Use \`console.log\` inside \`setup\` to verify the plugin lifecycle events are firing as expected!

---

*Scaffolded with [create-zenith-plugin](https://github.com/zenithbuild/create-zenith-plugin)*
    `;
  },
  example: (name: string, template: string) => `// Example usage of the ${name} plugin (${template} template)
// This file is purely for demonstration.
`
};
