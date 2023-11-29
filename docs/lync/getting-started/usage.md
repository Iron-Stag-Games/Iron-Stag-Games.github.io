# Usage

## Command Line Arguments
- `LYNC HELP` - Displays the list of available arguments.
- `LYNC CONFIG` - Opens the config file.
- `LYNC SERVE project.json? REMOTE?` - Syncs the project.
- `LYNC OPEN project.json? REMOTE?` - Syncs the project and opens it in Roblox Studio.
- `LYNC BUILD project.json?` - Builds the project to file.
- `LYNC FETCH project.json?` - Downloads the list of sources in the project file.

`project.json?` - The project file to read from and serve.


`REMOTE?` - Connect to the project's 'remoteAddress' instead of the localhost.

::: warning
`REMOTE` is unimplemented!
:::

### Live Sync

The `SERVE` and `OPEN` modes start live sync.

`OPEN` functions the same as `SERVE`, except it also opens the project in Roblox Studio.

Connect to the session through the Roblox Studio plugin.

### Build to File

The `BUILD` mode executes building the project to a place (or model) file.

This works without having Roblox Studio installed and without an internet connection.

### Fetch Downloads

The `FETCH` mode downloads the list of sources in the project file.

See [lync/project-json/automated-downloads](/lync/project-format/project-json/automated-downloads).

## Studio Plugin

### Lync Client Widget
The **Lync Client** widget is used to interface with an active live sync session.

When using the `OPEN` mode, the plugin will attempt to connect automatically.

- **Sync** / **Pause** / **Resume** - Toggles live sync.
- **Server Port** - Used only when the default port isn't available for live sync.
- **Save Script** / **Revert Script** - When live sync is enabled, the open script in Roblox Studio can be saved to disk, or reverted to its linked file's contents.

### Playtest Sync
When **Playtest Sync** is enabled from the toolbar, file changes are synced during a singleplayer or multiplayer test session.

Only the Roblox server-side (i.e., not client-side) will sync changes.

### Save Terrain
The **Save Terrain** toolbar button is used to snapshot a [TerrainRegion](https://create.roblox.com/docs/reference/engine/classes/TerrainRegion) for use inside a project.

Activating it opens a file save dialog.

### Unsaved Models Widget
A cube icon will appear in the bottom right corner of the viewport whenever a synced model is modified.

Clicking on the icon opens the **Unsaved Models** widget which displays a list of all modified synced models.

You can choose to **Ignore** the changes or **Save** them, which opens a file save dialog.

The cube icon will go away when all modified models have been ignored or saved.
