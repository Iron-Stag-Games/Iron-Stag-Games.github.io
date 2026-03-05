# SimpleUI

A module for displaying 3D text objects in the world.

```lua
local SimpleUI = require(ReplicatedStorage.SharedModules.SimpleUI)
```

## Methods

### CreateOverheadText

Spawns a 3D text object over the local character. Does not appear without first calling `Spring:Start()` after the local character respawns.

```lua
SimpleUI:CreateOverheadText(text: any?, color: Color3?, duration: number?, size: number?): ()
```

### CreateSideText

Spawns a 3D text object beside the local character. Does not appear without first calling `Spring:Start()` after the local character respawns.

```lua
SimpleUI:CreateSideText(text: any?, color: Color3?, duration: number?, size: number?): ()
```

### CreateWorldText

Spawns a 3D text object at a specified position. Does not require calling `Spring:Start()`.

```lua
SimpleUI:CreateWorldText(text: any?, color: Color3?, position: Vector3, duration: number?): ()
```

### Start

Starts tracking the local character and enables the use of `Spring:CreateOverheadText(...)` and `Spring:CreateSideText(...)`.

```lua
SimpleUI:Start(): ()
```

### Stop

Stops tracking the local character. Not required for minigame cleanup.

```lua
SimpleUI:Stop(): ()
```