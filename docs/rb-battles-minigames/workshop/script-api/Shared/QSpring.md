# QSpring

A physical model of a spring, useful in many applications. Properties only evaluate upon index making this model good for lazy applications.

(The "Q" stands for "Quenty", the author of this module.)

Also see [Spring](https://iron-stag-games.github.io/rb-battles-minigames/workshop/script-api/Shared/Spring).

https://quenty.github.io/NevermoreEngine/api/Spring/

```lua
local QSpring = require(ReplicatedStorage.SharedModules.QSpring)
```

## Methods

### new

Creates a new `Spring`.

```lua
Spring.new(initial: number?, clock: (() -> number)?): Spring
```

#### Properties

##### spring.Clock

The precise time function.

```lua
spring.Clock: () -> number
```

##### spring.Damper / spring.d

The `Spring` damper with a value of `[0, 1]`.

```lua
spring.Damper: number
-- or
spring.d: number
```

##### spring.Speed / spring.s

The `Spring` speed with a value of `[0, inf)`.

```lua
spring.Speed: number
-- or
spring.s: number
```

##### spring.Target / spring.t

The `Spring` target.

```lua
spring.Target: number | Vector3
-- or
spring.t: number | Vector3
```

##### spring.Value / spring.Position / spring.p

The `Spring` value at the current time.

```lua
spring.Value: number | Vector3
-- or
spring.Position: number | Vector3
-- or
spring.p: number | Vector3
```

##### spring.Velocity / spring.v

The `Spring` velocity at the current time.

```lua
spring.Velocity: number | Vector3
-- or
spring.v: number | Vector3
```

#### Methods

##### spring.Impulse

Impulses the `Spring` with a change in velocity.

Equivalent to `spring.Velocity += velocity`.

```lua
spring:Impulse(velocity: number | Vector3): ()
```

##### spring.TimeSkip

Skips forwards in time.

```lua
spring:TimeSkip(delta: number): ()
```