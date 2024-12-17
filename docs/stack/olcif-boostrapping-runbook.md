
```bash
# Create a new oclif TypeScript project
npx oclif generate cli-ts mcp-manager

# When prompted:
# - Select "TypeScript" for the template
# - Choose "ESM" for module type
# - Accept defaults for other options or customize as needed
```

Let me create an artifact to show the project structure we're aiming for:



Here's how to set up the TypeScript configuration and initial files:

1. First, create a new directory and initialize:
```bash
mkdir mcp-manager
cd mcp-manager
git init
```

2. Create a new Oclif TypeScript project:
```bash
npx oclif generate cli-ts mcp-manager
```

3. Your `package.json` should include these key dependencies:
```json
{
  "dependencies": {
    "@oclif/core": "^3.0.0",
    "@oclif/plugin-help": "^5.0.0",
    "@oclif/plugin-plugins": "^3.0.0"
  },
  "devDependencies": {
    "@types/node": "^18.0.0",
    "typescript": "^5.0.0",
    "ts-node": "^10.0.0",
    "@types/jest": "^29.0.0",
    "jest": "^29.0.0",
    "ts-jest": "^29.0.0"
  }
}
```

4. Configure TypeScript (`tsconfig.json`):
```json
{
  "compilerOptions": {
    "target": "es2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "declaration": true,
    "importHelpers": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  },
  "include": ["src/**/*"]
}
```

5. Create your first command in `src/commands/apply.ts`:
```typescript
import { Command, Flags } from '@oclif/core'

export default class Apply extends Command {
  static description = 'Apply MCP settings from a configuration file'

  static examples = ['<%= config.bin %> apply my-settings --client vscode']

  static flags = {
    client: Flags.string({
      char: 'c',
      description: 'specific client to apply settings to',
      required: false,
    }),
    'all-clients': Flags.boolean({
      description: 'apply to all clients',
      required: false,
    }),
  }

  static args = [{
    name: 'slug',
    required: true,
    description: 'configuration slug to apply',
  }]

  async run(): Promise<void> {
    const { args, flags } = await this.parse(Apply)
    // Implementation here
  }
}
```

6. Run the development version:
```bash
./bin/dev apply my-settings --client vscode
```

The key advantages of this setup are:

1. Full TypeScript support with proper typing
2. Command auto-discovery
3. Automatic help text generation
4. Built-in testing support
5. Plugin architecture that matches your adapter pattern needs
