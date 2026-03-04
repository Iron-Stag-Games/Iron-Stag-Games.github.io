# Spring

Tweens the properties of `Instance`s based on a physical spring model.

Also see [QSpring](https://iron-stag-games.github.io/rb-battles-minigames/workshop/script-api/Shared/QSpring).

https://github.com/Fraktality/spr

```lua
local Spring = require(ReplicatedStorage.SharedModules.Spring)
```

## Methods

### stop

Stops tweening an `Instance`'s properties, or a single property if provided.

```lua
Spring.stop(instance: Instance, property: string?): ()
```

### target

Tweens the properties of an `Instance`.

```lua
Spring.target(instance: Instance, dampingRatio: number, frequency: number, properties: {[string]: any})
```