# Studio Plugin

The Studio plugin interfaces with an active live sync session in order to sync content.

When using the `OPEN` mode, the plugin will attempt to connect automatically.

## Lync Client Widget

The **Lync Client** widget is used to control an active live sync session.

- **Sync** / **Pause** / **Resume** - Toggles live sync.
- **Server Port** - Used only when the default port isn't available for live sync.
- **Save Script** / **Revert Script** - When live sync is enabled, the open script in Roblox Studio can be saved to disk, or reverted to its linked file's contents.

## Playtest Sync

When **Playtest Sync** is enabled from the toolbar, file changes are synced during a singleplayer or multiplayer test session.

Only the Roblox server-side (i.e., not client-side) will sync changes.

## Save Terrain

The **Save Terrain** toolbar button is used to snapshot a [TerrainRegion](https://create.roblox.com/docs/reference/engine/classes/TerrainRegion) for use inside a project.

Activating it opens a file save dialog.

## Unsaved Models Widget

A cube icon will appear in the bottom right corner of the viewport whenever a synced model is modified.

Clicking on the icon opens the **Unsaved Models** widget which displays a list of all modified synced models.

You can choose to **Ignore** the changes or **Save** them, which opens a file save dialog.

The cube icon will go away when all modified models have been ignored or saved.
