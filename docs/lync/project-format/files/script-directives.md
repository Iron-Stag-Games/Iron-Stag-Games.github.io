# Script Directives
Add Script Directives to the top of your script to control its [RunContext](https://create.roblox.com/docs/reference/engine/enums/RunContext) or to disable it.
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
