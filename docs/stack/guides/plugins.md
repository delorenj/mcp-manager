# Plugins

Plugins are a great way to offer experimental functionality, allow users to extend your CLI, break up a CLI into modular components, or share functionality between CLIs.

Plugins can have commands or hooks just like a CLI. To add a plugin such as the [not-found plugin](https://github.com/oclif/plugin-not-found) plugin, first add it to your CLI with `yarn add @oclif/plugin-not-found`, then add the following to your `package.json`:

```json
{
  "name": "mycli",
  "version": "0.0.0",
  "dependencies": {
    "@oclif/core": "^3",
    "@oclif/plugin-help": "^6",
    "@oclif/plugin-not-found": "^3",
  }
  "oclif": {
    "plugins": [
      "@oclif/plugin-help",
      "@oclif/plugin-not-found"
    ]
  }
}
```

You can also use wildcards to include all plugins that match a pattern:

```json
{
  "name": "mycli",
  "version": "0.0.0",
  "dependencies": {
    "@oclif/core": "^3",
    "@oclif/plugin-help": "^6",
    "@oclif/plugin-not-found": "^3",
  }
  "oclif": {
    "plugins": [
      "@oclif/plugin-*",
    ]
  }
}
```

If you want users to be able to install their own plugins into your CLI, use the [plugins plugin](https://github.com/oclif/plugin-plugins).

Writing code for plugins is essentially the same as writing within a CLI. They can export 3 different types: commands, hooks, and other plugins.

Run `npx oclif generate mynewplugin` to create a plugin in a new directory. This will come with a sample commands called `hello` and `hello world`.
