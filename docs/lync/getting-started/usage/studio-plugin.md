# Studio Plugin

The Studio plugin interfaces with an active live sync session in order to sync content.

When using the `OPEN` mode, the plugin will attempt to connect automatically.

## Lync Client Widget

The **Lync Client** widget is used to control an active live sync session.

- **Sync** / **Pause** / **Resume** - Toggles live sync.
- **Server Port** - Used only when the default port isn't available for live sync.
- **Unsaved files list** - A list of all modified synced objects. You can choose to **Ignore** changes, **Revert** to the linked file's contents, or **Save** the changes to disk.

## Playtest Sync

When **Playtest Sync** is enabled from the toolbar, file changes are synced during a singleplayer or multiplayer test session.

Only the Roblox server-side (i.e., not client-side) will sync changes.

## Save Terrain

The **Save Terrain** toolbar button is used to snapshot a [TerrainRegion](https://create.roblox.com/docs/reference/engine/classes/TerrainRegion) for use inside a project.

Activating it opens a file save dialog.
