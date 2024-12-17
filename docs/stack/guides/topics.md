# Topics

As CLIs grow it can be useful to nest commands within topics. This is supported simply by placing command files in subdirectories. For example, with the Salesforce CLI they have a topic `sf config` with commands like `sf config set` and `sf config get`.

## Directory Structure Example

```
src/commands/
├── config/
│   ├── get.ts     # sf config get
│   └── set.ts     # sf config set
├── apps/
│   └── favorites/
│       ├── add.ts    # sf apps favorites add
│       └── remove.ts # sf apps favorites remove
```

## Customizing Help Descriptions

The help descriptions will be the description of the first command within a directory. If you'd like to customize the help description, add it to the `package.json` like so:

```json
{
  "oclif": {
    "topics": {
      "apps:favorites": {"description": "manage favorite apps"},
      "config": {"description": "manage configuration variables"}
    }
  }
}
```

## Best Practices

For UX reasons, it's generally recommended to not go more than 1 or 2 levels deep with topics, even for the largest CLIs. This keeps the command structure intuitive and easy to remember.

For example:

- Good: `mycli config set`
- Good: `mycli apps favorites list`
- Avoid: `mycli apps favorites categories subcategories list`

Keep your command hierarchy shallow and logical to provide the best user experience.
