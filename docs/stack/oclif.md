# Table of Contents
- docs/manifest.md
- docs/promote.md
- docs/pack.md
- docs/upload.md
- docs/help.md
- docs/readme.md
- docs/generate.md
- docs/init.md

## File: docs/manifest.md

- Extension: .md
- Language: markdown
- Size: 550 bytes
- Created: 2024-12-17 07:11:59
- Modified: 2024-12-17 07:11:59

### Code

```markdown
# `oclif manifest`

Generates plugin manifest json (oclif.manifest.json).

- [`oclif manifest [PATH]`](#oclif-manifest-path)

## `oclif manifest [PATH]`

Generates plugin manifest json (oclif.manifest.json).

```
USAGE
  $ oclif manifest [PATH] [--jit]

ARGUMENTS
  PATH  [default: .] Path to plugin.

FLAGS
  --[no-]jit  Append commands from JIT plugins in manifest.

DESCRIPTION
  Generates plugin manifest json (oclif.manifest.json).
```

_See code: [src/commands/manifest.ts](https://github.com/oclif/oclif/blob/4.16.5/src/commands/manifest.ts)_

```

## File: docs/promote.md

- Extension: .md
- Language: markdown
- Size: 1483 bytes
- Created: 2024-12-17 07:11:59
- Modified: 2024-12-17 07:11:59

### Code

```markdown
# `oclif promote`

Promote CLI builds to a S3 release channel.

- [`oclif promote`](#oclif-promote)

## `oclif promote`

Promote CLI builds to a S3 release channel.

```
USAGE
  $ oclif promote --channel <value> -r <value> --sha <value> --version <value> [-d] [--dry-run]
    [--ignore-missing] [--indexes] [-m] [-a <value>] [-t <value>] [-w] [--xz]

FLAGS
  -a, --max-age=<value>  [default: 86400] Cache control max-age in seconds.
  -d, --deb              Promote debian artifacts.
  -m, --macos            Promote macOS pkg.
  -r, --root=<value>     (required) [default: .] Path to the oclif CLI project root.
  -t, --targets=<value>  Comma-separated targets to promote (e.g.: linux-arm,win32-x64).
  -w, --win              Promote Windows exe.
      --channel=<value>  (required) [default: stable] Channel to promote to.
      --dry-run          Run the command without uploading to S3 or copying versioned tarballs/installers to channel.
      --ignore-missing   Ignore missing tarballs/installers and continue promoting the rest.
      --indexes          Append the promoted urls into the index files.
      --sha=<value>      (required) 7-digit short git commit SHA of the CLI to promote.
      --version=<value>  (required) Semantic version of the CLI to promote.
      --[no-]xz          Also upload xz.

DESCRIPTION
  Promote CLI builds to a S3 release channel.
```

_See code: [src/commands/promote.ts](https://github.com/oclif/oclif/blob/4.16.5/src/commands/promote.ts)_

```

## File: docs/pack.md

- Extension: .md
- Language: markdown
- Size: 4854 bytes
- Created: 2024-12-17 07:11:59
- Modified: 2024-12-17 07:11:59

### Code

```markdown
# `oclif pack`

Package an oclif CLI into installable artifacts.

- [`oclif pack deb`](#oclif-pack-deb)
- [`oclif pack macos`](#oclif-pack-macos)
- [`oclif pack tarballs`](#oclif-pack-tarballs)
- [`oclif pack win`](#oclif-pack-win)

## `oclif pack deb`

Pack CLI into debian package.

```
USAGE
  $ oclif pack deb -r <value> [-z gzip|none|xz|zstd] [--prune-lockfiles | -t <value>]

FLAGS
  -r, --root=<value>          (required) [default: .] Path to oclif CLI root.
  -t, --tarball=<value>       Optionally specify a path to a tarball already generated by NPM.
  -z, --compression=<option>  Override the default compression used by dpkg-deb.
                              <options: gzip|none|xz|zstd>
      --prune-lockfiles       remove lockfiles in the tarball.

DESCRIPTION
  Pack CLI into debian package.

  Add a pretarball script to your package.json if you need to run any scripts before the tarball is created.

FLAG DESCRIPTIONS
  -z, --compression=gzip|none|xz|zstd  Override the default compression used by dpkg-deb.

    For more details see the `-Zcompress-type` section at https://man7.org/linux/man-pages/man1/dpkg-deb.1.html
```

_See code: [src/commands/pack/deb.ts](https://github.com/oclif/oclif/blob/4.16.5/src/commands/pack/deb.ts)_

## `oclif pack macos`

Pack CLI into macOS .pkg

```
USAGE
  $ oclif pack macos -r <value> [--prune-lockfiles | -t <value>] [--targets <value>]

FLAGS
  -r, --root=<value>     (required) [default: .] Path to oclif CLI root.
  -t, --tarball=<value>  Optionally specify a path to a tarball already generated by NPM.
      --prune-lockfiles  remove lockfiles in the tarball.
      --targets=<value>  Comma-separated targets to pack (e.g.: darwin-x64,darwin-arm64).

DESCRIPTION
  Pack CLI into macOS .pkg

  Add a pretarball script to your package.json if you need to run any scripts before the tarball is created.
```

_See code: [src/commands/pack/macos.ts](https://github.com/oclif/oclif/blob/4.16.5/src/commands/pack/macos.ts)_

## `oclif pack tarballs`

Package oclif CLI into tarballs.

```
USAGE
  $ oclif pack tarballs -r <value> [--parallel] [--prune-lockfiles] [-l <value>] [-t <value>] [--xz]

FLAGS
  -l, --tarball=<value>  Optionally specify a path to a tarball already generated by NPM.
  -r, --root=<value>     (required) [default: .] Path to oclif CLI root.
  -t, --targets=<value>  Comma-separated targets to pack (e.g.: linux-arm,win32-x64).
      --parallel         Build tarballs in parallel.
      --prune-lockfiles  remove lockfiles in the tarball.
      --[no-]xz          Also build xz.

DESCRIPTION
  Package oclif CLI into tarballs.

  This can be used to create oclif CLIs that use the system node or that come preloaded with a node binary.

  Add a pretarball script to your package.json if you need to run any scripts before the tarball is created.
```

_See code: [src/commands/pack/tarballs.ts](https://github.com/oclif/oclif/blob/4.16.5/src/commands/pack/tarballs.ts)_

## `oclif pack win`

Create windows installer from oclif CLI

```
USAGE
  $ oclif pack win -r <value> [--defender-exclusion checked|unchecked|hidden] [--prune-lockfiles | -t <value>]
    [--targets <value>]

FLAGS
  -r, --root=<value>                 (required) [default: .] Path to oclif CLI root.
  -t, --tarball=<value>              Optionally specify a path to a tarball already generated by NPM.
      --defender-exclusion=<option>  [default: checked] Set to "checked" or "unchecked" to set the default value for the
                                     checkbox.  Set to "hidden" to hide the option (will let defender do its thing).
                                     <options: checked|unchecked|hidden>
      --prune-lockfiles              remove lockfiles in the tarball.
      --targets=<value>              Comma-separated targets to pack (e.g.: win32-x64,win32-x86,win32-arm64).

DESCRIPTION
  Create windows installer from oclif CLI

  You need to have 7zip, nsis (makensis), and grep installed on your machine in order to run this command.

  This command will produce unsigned installers unless you supply WINDOWS_SIGNING_PASS (prefixed with the name of your
  executable, e.g. OCLIF_WINDOWS_SIGNING_PASS) in the environment and have set the windows.name and windows.keypath
  properties in your package.json's oclif property.

  Add a pretarball script to your package.json if you need to run any scripts before the tarball is created.

FLAG DESCRIPTIONS
  --defender-exclusion=checked|unchecked|hidden

    Set to "checked" or "unchecked" to set the default value for the checkbox.  Set to "hidden" to hide the option (will
    let defender do its thing).

    There is no way to set a hidden checkbox with "true" as a default...the user can always allow full security
```

_See code: [src/commands/pack/win.ts](https://github.com/oclif/oclif/blob/4.16.5/src/commands/pack/win.ts)_

```

## File: docs/upload.md

- Extension: .md
- Language: markdown
- Size: 2401 bytes
- Created: 2024-12-17 07:11:59
- Modified: 2024-12-17 07:11:59

### Code

```markdown
# `oclif upload`

Upload installable CLI artifacts to AWS S3.

- [`oclif upload deb`](#oclif-upload-deb)
- [`oclif upload macos`](#oclif-upload-macos)
- [`oclif upload tarballs`](#oclif-upload-tarballs)
- [`oclif upload win`](#oclif-upload-win)

## `oclif upload deb`

Upload deb package built with `pack deb`.

```
USAGE
  $ oclif upload deb -r <value> [--dry-run]

FLAGS
  -r, --root=<value>  (required) [default: .] Path to oclif CLI root.
      --dry-run       Run the command without uploading to S3.

DESCRIPTION
  Upload deb package built with `pack deb`.
```

_See code: [src/commands/upload/deb.ts](https://github.com/oclif/oclif/blob/4.16.5/src/commands/upload/deb.ts)_

## `oclif upload macos`

Upload macos installers built with `pack macos`.

```
USAGE
  $ oclif upload macos -r <value> [--dry-run] [-t <value>]

FLAGS
  -r, --root=<value>     (required) [default: .] Path to oclif CLI root.
  -t, --targets=<value>  Comma-separated targets to upload (e.g.: darwin-x64,darwin-arm64).
      --dry-run          Run the command without uploading to S3.

DESCRIPTION
  Upload macos installers built with `pack macos`.
```

_See code: [src/commands/upload/macos.ts](https://github.com/oclif/oclif/blob/4.16.5/src/commands/upload/macos.ts)_

## `oclif upload tarballs`

Upload an oclif CLI to S3.

```
USAGE
  $ oclif upload tarballs -r <value> [--dry-run] [-t <value>] [--xz]

FLAGS
  -r, --root=<value>     (required) [default: .] Path to oclif CLI root.
  -t, --targets=<value>  Comma-separated targets to upload (e.g.: linux-arm,win32-x64).
      --dry-run          Run the command without uploading to S3.
      --[no-]xz          Also upload xz.

DESCRIPTION
  Upload an oclif CLI to S3.
```

_See code: [src/commands/upload/tarballs.ts](https://github.com/oclif/oclif/blob/4.16.5/src/commands/upload/tarballs.ts)_

## `oclif upload win`

Upload windows installers built with `pack win`.

```
USAGE
  $ oclif upload win -r <value> [--dry-run] [--targets <value>]

FLAGS
  -r, --root=<value>     (required) [default: .] Path to oclif CLI root.
      --dry-run          Run the command without uploading to S3.
      --targets=<value>  Comma-separated targets to pack (e.g.: win32-x64,win32-x86,win32-arm64).

DESCRIPTION
  Upload windows installers built with `pack win`.
```

_See code: [src/commands/upload/win.ts](https://github.com/oclif/oclif/blob/4.16.5/src/commands/upload/win.ts)_

```

## File: docs/help.md

- Extension: .md
- Language: markdown
- Size: 459 bytes
- Created: 2024-12-17 07:11:59
- Modified: 2024-12-17 07:11:59

### Code

```markdown
# `oclif help`

Display help for oclif.

- [`oclif help [COMMAND]`](#oclif-help-command)

## `oclif help [COMMAND]`

Display help for oclif.

```
USAGE
  $ oclif help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for oclif.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/6.2.17/src/commands/help.ts)_

```

## File: docs/readme.md

- Extension: .md
- Language: markdown
- Size: 1826 bytes
- Created: 2024-12-17 07:11:59
- Modified: 2024-12-17 07:11:59

### Code

```markdown
# `oclif readme`

Adds commands to README.md in current directory.

- [`oclif readme`](#oclif-readme)

## `oclif readme`

Adds commands to README.md in current directory.

```
USAGE
  $ oclif readme --output-dir <value> --readme-path <value> [--aliases] [--dry-run] [--nested-topics-depth
    <value> --multi] [--plugin-directory <value>] [--repository-prefix <value>] [--tsconfig-path <value>] [--version
    <value>]

FLAGS
  --[no-]aliases                 Include aliases in the command list.
  --dry-run                      Prints the generated README without modifying the file.
  --multi                        Create a different markdown page for each topic.
  --nested-topics-depth=<value>  Max nested topics depth for multi markdown page generation. Use with --multi enabled.
  --output-dir=<value>           (required) [default: docs] Output directory for multi docs.
  --plugin-directory=<value>     Plugin directory to generate README for. Defaults to the current directory.
  --readme-path=<value>          (required) [default: README.md] Path to the README file.
  --repository-prefix=<value>    A template string used to build links to the source code.
  --tsconfig-path=<value>        [default: tsconfig.json] Path to the tsconfig file
  --version=<value>              Version to use in readme links. Defaults to the version in package.json.

DESCRIPTION
  Adds commands to README.md in current directory.

  The readme must have any of the following tags inside of it for it to be replaced or else it will do nothing:
  # Usage
  <!-- usage -->
  # Commands
  <!-- commands -->
  # Table of contents
  <!-- toc -->

  Customize the code URL prefix by setting oclif.repositoryPrefix in package.json.
```

_See code: [src/commands/readme.ts](https://github.com/oclif/oclif/blob/4.16.5/src/commands/readme.ts)_

```

## File: docs/generate.md

- Extension: .md
- Language: markdown
- Size: 3848 bytes
- Created: 2024-12-17 07:11:59
- Modified: 2024-12-17 07:11:59

### Code

```markdown
# `oclif generate`

Generate a new CLI

- [`oclif generate NAME`](#oclif-generate-name)
- [`oclif generate command NAME`](#oclif-generate-command-name)
- [`oclif generate hook NAME`](#oclif-generate-hook-name)

## `oclif generate NAME`

Generate a new CLI

```
USAGE
  $ oclif generate NAME [--author <value>] [--bin <value>] [--description <value>] [--license <value>]
    [--module-type CommonJS|ESM] [--name <value>] [--owner <value>] [--package-manager npm|yarn|pnpm] [--repository
    <value>] [-n] [-d <value>] [-y]

ARGUMENTS
  NAME  Directory name of new project.

FLAGS
  -d, --output-dir=<value>        Directory to build the CLI in.
  -n, --dry-run                   Print the files that would be created without actually creating them.
  -y, --yes                       Use defaults for all prompts. Individual flags will override defaults.
      --author=<value>            Supply answer for prompt: Author
      --bin=<value>               Supply answer for prompt: Command bin name the CLI will export
      --description=<value>       Supply answer for prompt: Description
      --license=<value>           Supply answer for prompt: License
      --module-type=<option>      Supply answer for prompt: Select a module type
                                  <options: CommonJS|ESM>
      --name=<value>              Supply answer for prompt: NPM package name
      --owner=<value>             Supply answer for prompt: Who is the GitHub owner of repository
                                  (https://github.com/OWNER/repo)
      --package-manager=<option>  Supply answer for prompt: Select a package manager
                                  <options: npm|yarn|pnpm>
      --repository=<value>        Supply answer for prompt: What is the GitHub name of repository
                                  (https://github.com/owner/REPO)

DESCRIPTION
  Generate a new CLI

  This will generate a fully functional oclif CLI that you can build on. It will prompt you for all the necessary
  information to get started. If you want to skip the prompts, you can pass the --yes flag to accept the defaults for
  all prompts. You can also pass individual flags to set specific values for prompts.

  Head to oclif.io/docs/introduction to learn more about building CLIs with oclif.

EXAMPLES
  Generate a new CLI with prompts for all properties

    $ oclif generate my-cli

  Automatically accept default values for all prompts

    $ oclif generate my-cli --yes

  Supply answers for specific prompts

    $ oclif generate my-cli --module-type CommonJS --author "John Doe"

  Supply answers for specific prompts and accept default values for the rest

    $ oclif generate my-cli --module-type CommonJS --author "John Doe" --yes
```

_See code: [src/commands/generate.ts](https://github.com/oclif/oclif/blob/4.16.5/src/commands/generate.ts)_

## `oclif generate command NAME`

Add a command to an existing CLI or plugin.

```
USAGE
  $ oclif generate command NAME [--commands-dir <value>] [--force]

ARGUMENTS
  NAME  name of command

FLAGS
  --commands-dir=<value>  [default: src/commands] The directory to create the command in.
  --force                 Overwrite existing files.

DESCRIPTION
  Add a command to an existing CLI or plugin.
```

_See code: [src/commands/generate/command.ts](https://github.com/oclif/oclif/blob/4.16.5/src/commands/generate/command.ts)_

## `oclif generate hook NAME`

Add a hook to an existing CLI or plugin.

```
USAGE
  $ oclif generate hook NAME [--event <value>] [--force]

ARGUMENTS
  NAME  Name of hook (snake_case).

FLAGS
  --event=<value>  [default: init] Event to run hook on.
  --force          Overwrite existing files.

DESCRIPTION
  Add a hook to an existing CLI or plugin.
```

_See code: [src/commands/generate/hook.ts](https://github.com/oclif/oclif/blob/4.16.5/src/commands/generate/hook.ts)_

```

## File: docs/init.md

- Extension: .md
- Language: markdown
- Size: 1530 bytes
- Created: 2024-12-17 07:11:59
- Modified: 2024-12-17 07:11:59

### Code

```markdown
# `oclif init`

Initialize a new oclif CLI

- [`oclif init`](#oclif-init)

## `oclif init`

Initialize a new oclif CLI

```
USAGE
  $ oclif init [--bin <value>] [--module-type ESM|CommonJS] [--package-manager npm|yarn|pnpm]
    [--topic-separator colons|spaces] [-d <value>] [-y]

FLAGS
  -d, --output-dir=<value>        Directory to initialize the CLI in.
  -y, --yes                       Use defaults for all prompts. Individual flags will override defaults.
      --bin=<value>               Supply answer for prompt: Command bin name the CLI will export
      --module-type=<option>      Supply answer for prompt: Select a module type
                                  <options: ESM|CommonJS>
      --package-manager=<option>  Supply answer for prompt: Select a package manager
                                  <options: npm|yarn|pnpm>
      --topic-separator=<option>  Supply answer for prompt: Select a topic separator
                                  <options: colons|spaces>

DESCRIPTION
  Initialize a new oclif CLI

  This will add the necessary oclif bin files, add oclif config to package.json, and install @oclif/core and ts-node.

EXAMPLES
  Initialize a new CLI in the current directory

    $ oclif init

  Initialize a new CLI in a different directory

    $ oclif init --output-dir "/path/to/existing/project"

  Supply answers for specific prompts

    $ oclif init --topic-separator colons --bin mycli
```

_See code: [src/commands/init.ts](https://github.com/oclif/oclif/blob/4.16.5/src/commands/init.ts)_

```
