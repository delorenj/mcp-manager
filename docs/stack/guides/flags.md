# Flags in oclif

Flag options are non-positional arguments passed to the command. Flags can either be option flags which take an argument, or boolean flags which do not. An option flag must have an argument.

## Basic Usage

Here's a basic example of how to use flags in a command:

```typescript
import {Command, Flags} from '@oclif/core'

export class MyCLI extends Command {
  static flags = {
    // Boolean flag that can be passed as --force or -f
    force: Flags.boolean({
      char: 'f',
      description: 'Force the operation',
      required: false,
    }),

    // String flag that requires a value
    file: Flags.string({
      char: 'i',
      description: 'Input file to process',
      required: true,
    }),

    // Optional number flag with a default value
    count: Flags.integer({
      char: 'n',
      description: 'Number of times to repeat',
      default: 1,
    }),
  }

  async run() {
    const {flags} = await this.parse(MyCLI)

    if (flags.force) console.log('Force flag is set')
    if (flags.file) console.log(`Processing file: ${flags.file}`)
    console.log(`Will repeat ${flags.count} times`)
  }
}
```

## Common Flag Options

Flags can have various options to customize their behavior:

- `char`: Single character alias (e.g., '-f' for '--force')
- `description`: Help text for the flag
- `required`: Whether the flag must be provided
- `default`: Default value if flag is not specified
- `multiple`: Allow flag to be specified multiple times
- `options`: Restrict values to a predefined set
- `hidden`: Hide from help output
- `env`: Use value from environment variable

## Flag Types

oclif provides several built-in flag types:

- `Flags.string()`: String values
- `Flags.boolean()`: True/false flags
- `Flags.integer()`: Integer numbers
- `Flags.float()`: Floating point numbers
- `Flags.enum()`: Values from a fixed set of options
- `Flags.custom()`: Custom validation and parsing

## Command Usage Examples

```bash
# Using boolean flag
$ mycli --force

# Using string flag
$ mycli --file=input.txt

# Using both
$ mycli --force --file=input.txt

# Using short form
$ mycli -f -i input.txt

# Multiple flags can be combined
$ mycli -fi input.txt

# With number flag
$ mycli --count 5 --file input.txt
```

## Custom Flag Example

Here's an example of a custom flag that validates file paths:

```typescript
import {Command, Flags} from '@oclif/core'
import * as fs from 'fs'

const fileFlag = Flags.custom({
  char: 'f',
  description: 'File path that must exist',
  parse: async (file) => {
    if (!fs.existsSync(file)) {
      throw new Error(`File not found: ${file}`)
    }
    return file
  },
})

export class FileCommand extends Command {
  static flags = {
    file: fileFlag({
      required: true,
    }),
  }

  async run() {
    const {flags} = await this.parse(FileCommand)
    console.log(`Processing valid file: ${flags.file}`)
  }
}
```

## Best Practices

1. Always provide clear descriptions for your flags
2. Use short character aliases for common flags
3. Consider environment variable fallbacks for configuration flags
4. Group related flags using the helpGroup option
5. Make flags required only when absolutely necessary
6. Provide sensible default values when possible
7. Use custom flags to enforce complex validation rules

Remember that flags are a key part of your CLI's interface - they should be intuitive, well-documented, and follow consistent patterns across your commands.
