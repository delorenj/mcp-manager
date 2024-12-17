import { expect, jest, describe, it, beforeEach } from '@jest/globals'
import List from './list.js'

describe('list command', () => {
  const mockSettings = {
    mcpServers: {
      'test-server': {
        command: 'node',
        args: ['server.js'],
        env: {
          PORT: '3000'
        }
      },
      'disabled-server': {
        command: 'python',
        args: ['server.py'],
        disabled: true
      }
    }
  }

  let mockReadFile: jest.SpyInstance;

    beforeEach(() => {
        jest.clearAllMocks();
        // Mock getSettingsPath to return a consistent path
        jest.spyOn(List, 'getSettingsPath').mockReturnValue('/mock/settings.json');
        mockReadFile = jest.spyOn(require('fs/promises'), 'readFile');
      });

  it('lists all configured MCP servers', async () => {
    // Setup mock for readFile
    mockReadFile.mockResolvedValue(JSON.stringify(mockSettings))

    // Create command instance
    const command = new List([], { } as any)
    const logSpy = jest.spyOn(command, 'log')

    // Run the command
    await command.run()

    // Verify the output
    const expectedOutput = [
      {
        name: 'test-server',
        command: 'node',
        args: ['server.js'],
        disabled: false,
        environment_variables: 1
      },
      {
        name: 'disabled-server',
        command: 'python',
        args: ['server.py'],
        disabled: true,
        environment_variables: 0
      }
    ]

    expect(logSpy).toHaveBeenCalledWith(JSON.stringify(expectedOutput, null, 2))
    expect(mockReadFile).toHaveBeenCalledWith('/mock/settings.json', 'utf-8')
    expect(List.getSettingsPath).toHaveBeenCalled();
  })

  it('handles errors gracefully', async () => {
    // Setup mock for readFile to simulate error
     mockReadFile.mockRejectedValue(new Error('File not found'));
    // Create command instance
    const command = new List([], { } as any)

    // Verify error handling
    await expect(command.run()).rejects.toThrow('Failed to list MCP servers: File not found')
     expect(List.getSettingsPath).toHaveBeenCalled();
  })
})