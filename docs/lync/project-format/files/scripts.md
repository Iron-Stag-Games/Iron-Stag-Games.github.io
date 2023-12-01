# Scripts
Scripts can be formatted in a few different ways to change their representation in Roblox.

## Script Directives
Add Directives to the top of your script to change its ClassName, control its [RunContext](https://create.roblox.com/docs/reference/engine/enums/RunContext), or to disable it.
::: info Script Directives
| Directive | ClassName | RunContext | Behavior |
|-|-|-|-|
| None | [ModuleScript](https://create.roblox.com/docs/reference/engine/classes/ModuleScript) | - | None |
| `--@script` `--@script:legacy` | [Script](https://create.roblox.com/docs/reference/engine/classes/Script) | Legacy | Runs in legacy script containers dependent on the type of script. |
| `--@script:server` | [Script](https://create.roblox.com/docs/reference/engine/classes/Script) | Server | Runs on the server. |
| `--@script:client` | [Script](https://create.roblox.com/docs/reference/engine/classes/Script) | Client | Runs on the client. |
| `--@localscript` `--@script:localscript` | [LocalScript](https://create.roblox.com/docs/reference/engine/classes/LocalScript) | - | Runs in legacy script containers dependent on the type of script. |
| `--@disabled` | - | - | Determines whether the script will run or not. |
:::

## Init Scripts
Any file ending in `Init.LUA` or `{parent directory's name}.Init.LUA` will change its parent directory to a script with the contents of the file.

Like all directories, contents inside the parent directory will be parented to the script.
