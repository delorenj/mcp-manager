# MCP Manager
## Product Requirements Document
Version 1.0.0

## Executive Summary
MCP Manager is a protocol and toolset for sharing Model Context Protocol (MCP) settings between different MCP clients. It consists of a CLI tool with a Visual Studio Code extension interface, designed to simplify the management and sharing of MCP configurations across various clients such as VSCode extensions and Claude Desktop.

## Problem Statement
Currently, MCP configurations are siloed within individual clients, making it difficult to:
- Share configurations across team members
- Maintain consistent settings across different projects
- Handle sensitive information securely
- Manage settings across multiple MCP clients
- Deal with machine-specific configurations

## Product Goals
1. Provide a unified way to manage MCP configurations across different clients
2. Enable secure sharing of configurations within teams
3. Simplify the process of applying configurations across projects
4. Support machine-specific settings adaptations
5. Offer both CLI and GUI (VSCode) interfaces

## Technical Requirements

### Core Functionality
1. MCP Server Management
   - Track and manage MCP server connections
   - Handle connection lifecycle (connect, disconnect, reconnect)
   - Monitor server health and connection status
   - Support parallel server connections
   - Log server connection events

2. Configuration Management
   - Freeze current MCP settings to JSON format
   - Generate separate .env files for sensitive information
   - List available settings across projects/clients
   - Apply settings from existing configurations
   - Support for multiple client adapters
   - Handle machine-specific settings variations

2. Client Support
   - Implement adapter pattern for client compatibility
   - Support multiple client types (VSCode extensions, Claude Desktop, etc.)
   - Allow easy integration of new client types
   - Maintain client-specific setting formats

3. Architecture
   - CLI-first design
   - VSCode extension as secondary interface
   - Optional local discoverable server component
   - Containerized server deployment
   - Adapter pattern for client format compatibility

### User Interfaces

#### Command Line Interface (CLI)
Required Commands:
- `mcp status` - Show status of all configured MCP servers
- `mcp connect <server>` - Connect to specific MCP server
- `mcp disconnect <server>` - Disconnect from specific MCP server
- `mcp freeze` - Generate JSON configuration file
- `mcp list` - Show available settings files
- `mcp info <slug>` - Display server information
- `mcp apply <slug>` - Apply settings file
- `mcp apply <slug> --client <name>` - Apply to specific client
- `mcp apply <slug> --all-clients` - Apply to all clients
- `mcp inject <env-file>` - Load sensitive information
- `mcp list-clients` - Show available clients

#### VSCode Extension
Required Commands:
- `MCP: Freeze Settings`
- `MCP: Apply Settings`
- `MCP: Inject Environment Variables`

### Security Requirements
1. Sensitive information management
   - Separate storage of sensitive data in .env files
   - Secure handling of API keys and credentials
   - Environment variable injection mechanism

2. Access Control
   - Local configuration storage
   - Secure sharing mechanisms
   - Protected server access (if using server component)

## System Architecture

### Components
1. Core CLI Tool
   - Configuration management engine
   - Client adapters
   - File system operations
   - Environment variable handling

2. VSCode Extension
   - Command palette integration
   - Settings management interface
   - Configuration visualization
   - Client selection interface

3. Optional Server Component
   - Configuration synchronization
   - Multi-machine support
   - Container deployment support
   - Discovery service

### Configuration Storage Format

#### Path Configuration
```json
{
  "paths": {
    "windows": {
      "root": "C:\\Users\\username\\project",
      "data": "${root}\\data",
      "temp": "%TEMP%\\mcp-manager"
    },
    "wsl": {
      "root": "/home/username/project",
      "data": "${root}/data",
      "temp": "$TMPDIR/mcp-manager"
    },
    "mappings": [
      {
        "windows": "C:\\Program Files\\Common Files",
        "wsl": "/mnt/c/Program Files/Common Files"
      }
    ]
  }
}
```

#### Environment Detection
```json
{
  "environment": {
    "platform": "auto|windows|wsl|linux|macos",
    "pathStyle": "auto|windows|posix",
    "caseSensitive": true,
    "pathMappingStrategy": "auto|manual|disabled"
  }
}
```

### Integration Points
1. Client Adapters
   - Standardized adapter interface
   - Format conversion utilities
   - Client-specific settings handling
   - Extension points for third-party clients

2. Configuration Storage
   - Local file system integration
   - Version control system compatibility
   - Environment variable management
   - Cross-platform path handling

## Development Requirements

### Platform Support
1. Cross-Platform Capabilities
   - Native Windows support
   - Native Linux support
   - WSL compatibility with path translation
   - macOS support (recommended)
   
2. Path Management
   - Automatic path translation between Windows and WSL formats
   - Handling of platform-specific path separators
   - Support for UNC paths in Windows/WSL environments
   - Cross-platform configuration sharing capabilities
   - Runtime path resolution based on current environment
   
3. Path Handling Specifications
   - Abstract path representation in configuration files
   - Environment-specific path mappings
   - Root path detection and normalization
   - Relative path support with flexible base directories
   - Path variable expansion (e.g., %APPDATA%, $HOME)
   - Network path handling (UNC, \\wsl$, etc.)
   - Case sensitivity management
   - Symlink and junction point support
   
4. Path Translation Layer
   - Bidirectional Windows ↔ WSL path translation
   - Configurable path mapping rules
   - Custom path resolution hooks
   - Path validation and sanitization
   - Error handling for invalid or inaccessible paths
   - Caching of frequently accessed paths
   - Path watcher support for real-time updates

### Technology Stack
- Node.js (recommended for CLI and VSCode extension)
- Docker (for containerized server)
- TypeScript (recommended for type safety)

### Third-Party Integration
1. Developer Documentation
   - Adapter pattern implementation guide
   - Configuration format specifications
   - API documentation
   - Integration examples

2. Extension Points
   - Client adapter interface
   - Custom setting format support
   - Server integration options
   - Environment variable handling

## Future Considerations
1. Additional Client Support
   - Web-based clients
   - Mobile applications
   - Custom IDE integrations

2. Enhanced Features
   - Configuration versioning
   - Team sharing workflows
   - Automated synchronization
   - Backup and restore capabilities

## Success Metrics
1. Technical Metrics
   - Number of supported clients
   - Configuration application success rate
   - Server response time (if applicable)
   - Error rate in settings application

2. User Metrics
   - Time saved in configuration management
   - Number of active users
   - Number of third-party integrations
   - User satisfaction ratings

## Timeline and Milestones
1. Phase 1: Core CLI Tool
   - Basic configuration management
   - Essential commands implementation
   - Local file system operations

2. Phase 2: VSCode Extension
   - Command palette integration
   - Basic UI implementation
   - Settings visualization

3. Phase 3: Client Adapters
   - Initial client support
   - Adapter pattern implementation
   - Documentation for third-party integration

4. Phase 4: Server Component (Optional)
   - Basic server functionality
   - Container support
   - Multi-machine synchronization