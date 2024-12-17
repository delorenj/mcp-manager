# MCP Manager (mcpm)

A command-line interface tool for managing Model Context Protocol (MCP) servers on your local machine.

## Description

MCP Manager provides a set of commands to help you manage and interact with Model Context Protocol servers. It integrates with VSCode settings to configure and control MCP servers that enhance AI model capabilities.

## Installation

```bash
# Install globally
npm install -g mcp-manager

# Or use directly with npx
npx mcp-manager [command]
```

## Usage

```bash
# List all configured MCP servers
mcpm list

# Get help
mcpm help
```

## Development

### Prerequisites

- Node.js >= 18
- npm

### Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Build

```bash
npm run build
```

### Testing

Run the test suite:

```bash
npm test
```

## Project Structure

- `/src/commands` - CLI command implementations
- `/dist` - Compiled JavaScript output
- `/docs` - Project documentation

## License

ISC

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request