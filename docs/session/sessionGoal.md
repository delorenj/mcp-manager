# Goal

Let's implement the base of the CLI tool. We will start by creating a simple command that lists all the mcp servers running on the local machine.

## Requirements

1. Utilize Node.js for the implementation using Oclif CLI framework.
2. The command should be named `list`.
3. The command should output the list of MCP servers in JSON format.
4. Implement a function to fetch the list of MCP servers from the local machine.
5. The list command is tested with a mock data set.

## Acceptance Criteria

1. I run `mcpm list` and see a list of all running MCP servers in JSON format.
2. I run `npm test` and all tests pass, including the unit tests for the `list` command.
3. The code is clean, well-documented, and follows best practices.
4. I run `mcpm help` and see the list command listed under commands.

Also, be sure to include a README.md file with instructions on how to install and use the CLI tool.

AND CREATE/UPDATE the sessionProgress.md file in the session folder.