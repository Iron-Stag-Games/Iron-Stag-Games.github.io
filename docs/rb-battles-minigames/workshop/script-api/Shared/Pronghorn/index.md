# Pronghorn

The core module responsible for running the game.

https://iron-stag-games.github.io/pronghorn/

```lua
local Pronghorn = require(ReplicatedStorage.SharedModules.Pronghorn)
```

## Properties

### DeferredComplete

Whether or not game modules have completed loading. The value returned by `Get()` changes to `true` once loading has completed, and will remain as such thereafter.

You will need to check its value on `Script`s with the `RunContext == Client` before those `Script`s can safely require client modules. Not necessary for all other scenarios.

```lua
Pronghorn.DeferredComplete: New.TrackedVariable<boolean>
```
::: danger
Do not use Pronghorn.DeferredComplete:Set(...). This will break the game.
:::