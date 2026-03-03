# CameraShaker

A module that applies realistic camera shake effects.

https://github.com/Sleitnick/RbxCameraShaker

```lua
local CameraShaker = require(ReplicatedStorage.SharedModules.CameraShaker)
```

## Methods

### new

Creates and returns a `CameraShaker`.

```lua
CameraShaker.new(renderPriority: number, callback: (cf: CFrame) -> ()): CameraShaker
```

#### Shake

Applies a shake effect once.

```lua
cameraShaker:Shake(shakeInstance)
```

#### ShakeOnce

Applies a custom shake effect once.

```lua
cameraShaker:ShakeOnce(magnitude, roughness, fadeInTime, fadeOutTime, posInfluence, rotInfluence)
```

#### ShakeSustain

Applies a shake effect coninuously.

```lua
cameraShaker:ShakeSustain(shakeInstance)
```

#### Start

Starts the `CameraShaker`.

```lua
cameraShaker:Start(): ()
```

#### StartShake

Applies a custom shake effect continuously.

```lua
cameraShaker:StartShake(magnitude, roughness, fadeInTime, posInfluence, rotInfluence)
```

#### Stop

Stops the `CameraShaker`.

```lua
cameraShaker:Stop(): ()
```

#### StopSustained

Stops all sustained shakes with an optional fade out time.

```lua
cameraShaker:StopSustained(duration: number?): ()
```

#### Update

Internal. Steps the `CameraShaker` by the provided delta time.

```lua
cameraShaker:Update(dt: number): ()
```