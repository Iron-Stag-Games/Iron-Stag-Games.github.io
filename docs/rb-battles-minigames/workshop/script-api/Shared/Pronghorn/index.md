# Pronghorn

The core module responsible for running the game.

https://iron-stag-games.github.io/pronghorn/

```lua
local Pronghorn = require(ReplicatedStorage.SharedModules.Pronghorn)
```

## Properties


### ~~Importing~~

Internal variable. Useless for minigames.

```lua
Pronghorn.Importing: New.TrackedVariable<boolean>
```
::: danger
Do not use Pronghorn.Importing:Set(...). This will break the game.
:::

### ~~Imported~~

Internal variable. Useless for minigames.

```lua
Pronghorn.Imported: New.TrackedVariable<boolean>
```
::: danger
Do not use Pronghorn.Imported:Set(...). This will break the game.
:::

### DeferredComplete

Whether or not game modules have completed loading. The value returned by `Get()` changes to `true` once loading has completed, and will remain as such thereafter.

You will need to check its value on `Script`s with the `RunContext == Client` before those `Script`s can safely require client modules. Not necessary for all other scenarios.

```lua
Pronghorn.DeferredComplete: New.TrackedVariable<boolean>
```
::: danger
Do not use Pronghorn.DeferredComplete:Set(...). This will break the game.
:::

### ~~ModuleStatus~~

Internal variable. Useless for minigames.

```lua
Pronghorn.ModuleStatus: {[ModuleScript]: New.TrackedVariable<number>}
```
::: danger
Do not use Pronghorn.ModuleStatus[...]:Set(...). This will break the game.
:::