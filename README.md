# ⚡ create-zenith-plugin

<div align="center">
  <img src="https://raw.githubusercontent.com/zenithbuild/zenith/main/assets/logos/logo.png" alt="Zenith Logo" width="160" />
  <h2>The Zero-Friction Zenith Plugin Scaffolder</h2>
  
  [![npm version](https://img.shields.io/npm/v/create-zenith-plugin.svg?style=for-the-badge&color=3b82f6)](https://www.npmjs.com/package/create-zenith-plugin)
  [![Zenith Ecosystem](https://img.shields.io/badge/Zenith-Project-cyan?style=for-the-badge&logo=zenith)](https://github.com/zenithbuild/zenith)
</div>

---

## 🚀 Overview

**`create-zenith-plugin`** is a lightning-fast, zero-friction CLI designed to jumpstart your Zenith plugin development. Our philosophy is simple: **One step, zero questions.** 

No more nested directory hell or confusing configuration steps. Just run the command, select a template, and start coding your next breakthrough.

---

## 🛠️ Installation & Usage

You don't even need to install it globally. Run it directly with your favorite package manager:

### Using Bun (Recommended)
```bash
bunx create-zenith-plugin <plugin-name>
```

### Using npx
```bash
npx create-zenith-plugin <plugin-name>
```

---

## ✨ Key Features

- 🎯 **One-Step Scaffolding**: Automatically creates a folder in your current directory with everything you need.
- 📂 **Zero-Wrapper Principle**: No more `zenith-plugins/` parent folders unless you explicitly want them.
- ⚡ **Professional Templates**: Choose between **Utility**, **Theme**, or **Content** patterns.
- 📖 **Comprehensive READMEs**: Every generated plugin comes with its own professional, documentation-ready README.
- 🧩 **Type Safety**: Full TypeScript support out of the box.

---

## 📂 Generated Structure

When you run `create-zenith-plugin my-plugin`, you get:

```text
my-plugin/
├── index.ts        # Main logic & setup hook
├── types.ts        # Typed configuration options
├── utils/          # Empty helper directory
└── README.md       # Professional documentation
```

---

## 🎨 Scaffolding Templates

| Template | Focus | Best For |
| :--- | :--- | :--- |
| **Utility** | Generic Stub | Logic-heavy plugins, API integrations |
| **Theme** | Styling | TailwindCSS extensions, Design systems |
| **Content** | Rendering | Markdown parsers, CMS connectors |

---

## 🤝 Contributing

Coming Soon!

---

## 🩺 Troubleshooting

**Q: Command not found?**  
A: Ensure you are using `bunx` or `npx`. If you want it globally, run `npm install -g create-zenith-plugin`.

**Q: Directory already exists?**  
A: The CLI will prompt you to overwrite. Use `--overwrite` to skip the prompt.

---

*Built with ❤️ for the [Zenith Ecosystem](https://github.com/zenithbuild/zenith)*
