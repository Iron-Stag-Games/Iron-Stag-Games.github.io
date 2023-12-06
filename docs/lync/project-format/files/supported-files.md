# Supported Files

Different file types are synced into the place in different forms.

All forms of Roblox content can be stored on the filesystem and synced.

::: info Supported Files
| Concept | File Extension | ClassName |
|-|-|-|
| Directories | any directory | [Folder](https://create.roblox.com/docs/reference/engine/classes/Folder)
| [Scripts](/lync/project-format/files/scripts) | `LUA`/`LUAU` | [LuaSourceContainer](https://create.roblox.com/docs/reference/engine/classes/LuaSourceContainer) * |
| Model Files | `RBXM`/`RBXMX` | Varies |
| JSON Tables | `JSON` | [ModuleScript](https://create.roblox.com/docs/reference/engine/classes/ModuleScript) |
| YAML Tables | `YAML` | [ModuleScript](https://create.roblox.com/docs/reference/engine/classes/ModuleScript) |
| TOML Tables | `TOML` | [ModuleScript](https://create.roblox.com/docs/reference/engine/classes/ModuleScript) |
| Plain Text | `TXT` | [StringValue](https://create.roblox.com/docs/reference/engine/classes/StringValue) |
| Localization Table | `CSV` | [LocalizationTable](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable) |
| [Child Projects](/lync/project-format/project/project-file) | `*.Project.JSON` | Varies |
| [Meta Files](/lync/project-format/files/meta-files) | `*.Meta.JSON` | Varies |
| [JSON Models](/lync/project-format/files/json-models) | `*.Model.JSON` | Varies |
| [Excel Tables](/lync/project-format/files/excel-tables) | `*.Excel.JSON` | [ModuleScript](https://create.roblox.com/docs/reference/engine/classes/ModuleScript) |

\* Can be [ModuleScript](https://create.roblox.com/docs/reference/engine/classes/ModuleScript), [Script](https://create.roblox.com/docs/reference/engine/classes/Script), or [LocalScript](https://create.roblox.com/docs/reference/engine/classes/LocalScript) depending on the Directives present.

See [project-format/files/scripts#script-directives](/lync/project-format/files/scripts#script-directives).
:::
