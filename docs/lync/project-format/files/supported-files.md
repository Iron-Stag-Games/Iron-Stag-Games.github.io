# Supported Files
Different file types are synced into the place in different forms.

All forms of Roblox content can be stored on the filesystem and synced.

::: info Supported Files
| Concept | File Extension | Roblox ClassName |
|-|-|-|
| Folders | any directory | [Folder](https://create.roblox.com/docs/reference/engine/classes/Folder)
| Scripts | `LUA`/`LUAU` | [LuaSourceContainer](https://create.roblox.com/docs/reference/engine/classes/LuaSourceContainer) * |
| Models | `RBXM`/`RBXMX` | Varies |
| JSON Tables | `JSON` | [ModuleScript](https://create.roblox.com/docs/reference/engine/classes/ModuleScript) |
| YAML Tables | `YAML` | [ModuleScript](https://create.roblox.com/docs/reference/engine/classes/ModuleScript) |
| TOML Tables | `TOML` | [ModuleScript](https://create.roblox.com/docs/reference/engine/classes/ModuleScript) |
| Text Document | `TXT` | [StringValue](https://create.roblox.com/docs/reference/engine/classes/StringValue) |
| Localization Table | `CSV` | [LocalizationTable](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable) |
| Child Projects | `*.Project.JSON` | Varies |
| Meta Files | `*.Meta.JSON` | Varies |
| JSON Models | `*.Model.JSON` | Varies |
| Excel Tables | `*.Excel.JSON` | [ModuleScript](https://create.roblox.com/docs/reference/engine/classes/ModuleScript) |

\* Can be [ModuleScript](https://create.roblox.com/docs/reference/engine/classes/ModuleScript), [Script](https://create.roblox.com/docs/reference/engine/classes/Script), or [LocalScript](https://create.roblox.com/docs/reference/engine/classes/LocalScript) depending on the script run context directive.

See [project-format/files/script-directives](/lync/project-format/files/script-directives).
:::
