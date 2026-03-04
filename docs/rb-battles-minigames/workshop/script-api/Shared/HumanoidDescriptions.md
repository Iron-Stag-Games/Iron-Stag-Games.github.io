# HumanoidDescriptions

A single-method module that `pcall`s `Players:GetHumanoidDescriptionFromUserIdAsync(...)` and caches its return value.

```lua
local HumanoidDescriptions = require(ReplicatedStorage.SharedModules.HumanoidDescriptions)
```

## Methods

### GetHumanoidDescriptionFromUserId

`pcall`s `Players:GetHumanoidDescriptionFromUserIdAsync(...)` and caches its return value.

```lua
HumanoidDescriptions:GetHumanoidDescriptionFromUserId(userId: number): HumanoidDescription
```