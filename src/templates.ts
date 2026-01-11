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
  readme: (name: string) => `# ${name} Plugin

A Zenith plugin scaffolded with \`zenith-create-plugin\`.

## Installation

Import the plugin in your \`zenith.config.ts\`:

\`\`\`ts
import { plugin as ${name} } from "./zenith-plugins/${name}";

export default {
  // ...
  plugins: [
    ${name}({
      /* options */
    })
  ]
};
\`\`\`
`,
  example: (name: string, template: string) => `// Example usage of the ${name} plugin (${template} template)
// This file is purely for demonstration.
`
};
