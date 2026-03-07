# SoundController

The controller responsible for playing local sound effects and music.

```lua
local SoundController = require(ReplicatedStorage.ClientModules.Controllers.SoundController)
```

## Methods

### PlayMusic

Changes the currently playing music to the specified ID with the given properties. Music will be affected by the "Music Volume" setting.

```lua
SoundController:PlayMusic(assetId: number | string, properties: {[keyof<Sound>]: any}): ()
```

### PlaySound

Creates and returns a new `Sound` with the specified ID and configuration. This `Sound` will be affected by the "Effect Volume" setting.

```lua
SoundController:PlaySound(soundId: number | string, soundConfig: {Parent: Instance?, Position: Vector3?}?, shouldKeep: boolean?, trackingId: any?): Sound
```

### StopMusic

Fades out the currently playing music and returns the fade `Tween`.

```lua
SoundController:StopMusic(): Tween
```

### StopSound

Stops and optionally destroys a `Sound` registered to the given tracking ID created by calling `SoundController:PlaySound(...)`. Does nothing if the tracking ID is invalid.

```lua
SoundController:StopSound(trackingId: any, destroySound: boolean): ()
```