::: warning
This page is under construction.
:::

# AvatarController

```lua
local AvatarController = require(ReplicatedStorage.ClientModules.Controllers.AvatarController)
```

## Methods

### ActivateBootModifiers

```lua
AvatarController:ActivateBootModifiers(state: boolean): ()
```

### AreControlsEnabled

```lua
AvatarController:AreControlsEnabled(): boolean
```

### DisableAllAbilities

```lua
AvatarController:DisableAllAbilities(): ()
```

### DisableControls

```lua
AvatarController:DisableControls(lockName: string): ()
```

### DisableJumping

```lua
AvatarController:DisableJumping(lockName: string): ()
```

### DisableSkyDiveAnimation

```lua
AvatarController:DisableSkyDiveAnimation(): ()
```

### DisableWalkingFootstepSFX

```lua
AvatarController:DisableWalkingFootstepSFX(): ()
```

### EnableAllAbilities

```lua
AvatarController:EnableAllAbilities(): ()
```

### EnableControls

```lua
AvatarController:EnableControls(lockName: string): ()
```

### EnableJumping

```lua
AvatarController:EnableJumping(lockName: string): ()
```

### EnableSkyDiveAnimation

```lua
AvatarController:EnableSkyDiveAnimation(): ()
```

### EnableWalkingFootstepSFX

```lua
AvatarController:EnableWalkingFootstepSFX(): ()
```

### GetAbility

```lua
AvatarController:GetAbility(abilityName: string): unknown
```

### GetAnimationLength

```lua
AvatarController:GetAnimationLength(animationName: string): number
```

### GetAnimationTrack

```lua
AvatarController:GetAnimationTrack(animationName: string): AnimationTrack?
```

### GetControlsArray_DiveRoll

```lua
AvatarController:GetControlsArray_DiveRoll(): {Enum.KeyCode}
```

### GetControlsArray_WallJumpCancel

```lua
AvatarController:GetControlsArray_WallJumpCancel(): {Enum.KeyCode}
```

### GetControlsTable_DiveRoll

```lua
AvatarController:GetControlsTable_DiveRoll(): {[Enum.KeyCode]: boolean}
```

### HandleJumpButton

```lua
AvatarController:HandleJumpButton(): ()
```

### IsJumpingEnabled

```lua
AvatarController:IsJumpingEnabled(): boolean
```

### IsPlaying

```lua
AvatarController:IsPlaying(animationName: string): boolean
```

### ListenForJump

```lua
AvatarController:ListenForJump(id: any, listenerFunction: () -> ()): ()
```

### LockCameraRotation_Gamepad

```lua
AvatarController:LockCameraRotation_Gamepad(enable: boolean): ()
```

### PlayAnimation

```lua
AvatarController:PlayAnimation(animationName: string, fadeTime: number?, weight: number?, speed: number?): ()
```

### RemoveDeathEffects

```lua
AvatarController:RemoveDeathEffects(): ()
```

### ResetSkyDiveTime

```lua
AvatarController:ResetSkyDiveTime(): ()
```

### SetAnimationSpeed

```lua
AvatarController:SetAnimationSpeed(animationName: string, speed: number?): ()
```

### SetAnimationTimePosition

```lua
AvatarController:SetAnimationTimePosition(animationName: string, timePosition: number): ()
```

### SetAnimationWeight

```lua
AvatarController:SetAnimationWeight(animationName: string, weight: number?): ()
```

### SetCharacterTransparency

```lua
AvatarController:SetCharacterTransparency(transparency: number): ()
```

### SetJumpAnimationEnabled

```lua
AvatarController:SetJumpAnimationEnabled(enable: boolean): ()
```

### ShowDeathEffects

```lua
AvatarController:ShowDeathEffects(): ()
```

### StopAnimation

```lua
AvatarController:StopAnimation(animationName: string, fadeTime: number?): ()
```

### StopHandlingJumpButton

```lua
AvatarController:StopHandlingJumpButton(): ()
```

### StopListeningForJump

```lua
AvatarController:StopListeningForJump(id: any): ()
```