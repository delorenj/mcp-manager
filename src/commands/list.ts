import { Command } from '@oclif/core'
import { readFile } from 'fs/promises'
import { join } from 'path'
import { homedir } from 'os'

interface MCPSettings {
  mcpServers: {
    [key: string]: {
      command: string
      args: string[]
      env?: Record<string, string>
      disabled?: boolean
    }
  }
}

export default class List extends Command {
  static description = 'List all MCP servers configured on the local machine'

  static examples = [
    '<%= config.bin %> list',
  ]

  // Make this a static method so we can mock it in tests
  static getSettingsPath(): string {
    return join(
      homedir(),
      '.vscode-server/data/User/globalStorage/rooveterinaryinc.roo-cline/settings/cline_mcp_settings.json'
    )
  }

  async run(): Promise<void> {
    try {
      // Read and parse settings file
      const settingsContent = await readFile(List.getSettingsPath(), 'utf-8')
      const settings: MCPSettings = JSON.parse(settingsContent)

      // Format server information
      const servers = Object.entries(settings.mcpServers).map(([name, config]) => ({
        name,
        command: config.command,
        args: config.args,
        disabled: config.disabled ?? false,
        environment_variables: Object.keys(config.env || {}).length
      }))

      // Output in JSON format
      this.log(JSON.stringify(servers, null, 2))
    } catch (error) {
      // Throw error instead of using this.error to ensure proper error propagation in tests
      throw new Error(`Failed to list MCP servers: ${(error as Error).message}`)
    }
  }
}