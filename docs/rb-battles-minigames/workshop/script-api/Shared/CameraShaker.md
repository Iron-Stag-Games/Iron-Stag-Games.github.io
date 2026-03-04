# CameraShaker

A module that applies realistic camera shake effects.

https://github.com/Sleitnick/RbxCameraShaker

```lua
local CameraShaker = require(ReplicatedStorage.SharedModules.CameraShaker)
```

## Constructors

### new

Creates and returns a `CameraShaker`.

```lua
CameraShaker.new(renderPriority: number, callback: (cf: CFrame) -> ()): CameraShaker
```

#### Methods

##### cameraShaker.Shake

Applies a shake effect once.

```lua
cameraShaker:Shake(shakeInstance)
```

##### cameraShaker.ShakeOnce

Applies a custom shake effect once.

```lua
cameraShaker:ShakeOnce(magnitude, roughness, fadeInTime, fadeOutTime, posInfluence, rotInfluence)
```

##### cameraShaker.ShakeSustain

Applies a shake effect coninuously.

```lua
cameraShaker:ShakeSustain(shakeInstance)
```

##### cameraShaker.Start

Starts the `CameraShaker`.

```lua
cameraShaker:Start(): ()
```

##### cameraShaker.StartShake

Applies a custom shake effect continuously.

```lua
cameraShaker:StartShake(magnitude, roughness, fadeInTime, posInfluence, rotInfluence)
```

##### cameraShaker.Stop

Stops the `CameraShaker`.

```lua
cameraShaker:Stop(): ()
```

##### cameraShaker.StopSustained

Stops all sustained shakes with an optional fade out time.

```lua
cameraShaker:StopSustained(duration: number?): ()
```

##### cameraShaker.Update

Skips forward in time.

```lua
cameraShaker:Update(dt: number): ()
```