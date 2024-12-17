# MCP Manager
The MPC Manager is a protocol for sharing MCP settings between different MCP clients. A Model Context Protocol Protocol, if you will.

## Overview
The MCP Manager is a Visual Studio Code (VSCode) extension built on top of a CLI tool that aims to simplify the management Model Context Protocol (MCP) configurations that various clients (like VSCode extensions, Claude Desktop, undoubtable many more on the way) use to define and instantiate them.

## How It Works

### Scenario 1
I want to freeze Cline's current settings so that I can share them with my team.

#### CLI Method
1. CD into the directory where I want to save my settings.
2. Run `mcp freeze` to generate a JSON file containing the current settings.
3. Created a seperate .env file that contains any sensitive information (like API keys) that I don't want to share.
4. commit the JSON file
5. Store the JSON file locally so I can share them across projects

#### VSCode Method
1. Open the command palette (Ctrl+Shift+P)
2. Run `MCP: Freeze Settings`
4. The extension will generate a JSON file containing the current settings and prompt me to create an accompanying .env file for sensitive information in the project root
5. Commit the JSON file
6. Store the JSON file locally so I can share them across projects

### Scenario 2

I want to use the settings from a previous project

#### CLI Method
1. CD into the directory where I want to apply the settings.
2. Run `mcp list` to see available settings files across all projects/clients
3. Run `mcp info <some-slug>` to see a list of all the servers that settings file employs
4. Run `mcp apply <some-slug>` to apply the settings file, replacing any project-specific params with the current project-specific params (like project root paths, repo, etc.)
5. If there is an accompanying .env file, run `mcp inject <path-to-env-file>` to load the sensitive information.

#### VSCode Method
1. Open the command palette (Ctrl+Shift+P)
2. Run `MCP: Apply Settings`
3. The extension will prompt me to select a settings file from a list of available settings files across all projects/clients.

### Scenario 3

I want to manage another client other than the default Cline/Roo extension (Claude Desktop for example)

#### CLI Method
1. CD into the directory where I want to apply the settings.
2. Run `mcp list-clients` to see available clients (like Claude Desktop, Cline/Roo)
3. Run `mcp info <some-slug>` to see a list of all the servers that settings file employs
4. Run `mcp apply <some-slug> --client <some-client-name>` to apply the settings file
5. Or run `mcp apply <some-slug> --all-clients` to apply the settings file to all clients
6. If there is an accompanying .env file, run `mcp inject <path-to-env-file> --all-clients` to load the sensitive information.

#### VSCode Method
1. Open the command palette (Ctrl+Shift+P)
2. Run `MCP: Apply Settings`
3. The extension will prompt me to select a settings file from a list of available settings files across all projects/clients.
4. The extension will also prompt me to select which client I want to apply the settings to.
5. The extension will also prompt me to select whether I want to apply the settings to all clients or just one.
6. If there is an accompanying .env file, run `MCP: Inject Environment Variables` to load the sensitive information.

## Requirements

1. should notify or update each extension's settings file using an adapter pattern to decouple the manager's generic templates from the possibly-different extension formats
2. should allow for machine-specific settings to account for windows/linux/wsl path differences etc
3. should be designed as a vscode extension to ensure maximum compatibility and user base
4. should be easy for third-party developers to choose to add their formats to the manager's adapter pattern
5. should be designed CLI-first, with vscode integration being secondary
6. should be the option to run a local discoverable mcp-manager server to manage settings across multiple machines
7. server should be containerize to allow for easy deployment and scaling