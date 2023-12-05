# Lync Executable

The Lync executable can start a live sync session, build to file, and fetch downloads.

## Command Line Arguments

::: info Command Line Arguments
- `LYNC HELP` - Displays the list of available arguments.
- `LYNC CONFIG` - Opens the config file.
- `LYNC SERVE project.json? REMOTE?` - Syncs the project.
- `LYNC OPEN project.json? REMOTE?` - Builds, syncs, and opens the project in Roblox Studio.
- `LYNC BUILD project.json?` - Builds the project to file.
- `LYNC FETCH project.json?` - Downloads the list of sources in the project file.

`project.json?` - The project file to read from and serve.

`REMOTE?` - Connect to the project's `remoteAddress` instead of the localhost.
:::

::: danger UNAVAILABLE
`REMOTE` is unimplemented.
:::

## Live Sync

The `SERVE` and `OPEN` modes start live sync.

`OPEN` functions the same as `SERVE`, except it also builds the project and opens it in Roblox Studio.

Connect to the session through the Roblox Studio plugin.

## Build to File

The `BUILD` mode builds the project to a place (or model) file.

This mode works without having Roblox Studio installed and without an internet connection.

## Fetch Downloads

The `FETCH` mode downloads the list of sources in the project file.

See [project-format/project/automated-downloads](/lync/project-format/project/automated-downloads).
