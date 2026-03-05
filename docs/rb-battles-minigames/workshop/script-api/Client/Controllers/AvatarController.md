# AvatarController

```lua
local AvatarController = require(ReplicatedStorage.ClientModules.Controllers.AvatarController)
```

## Types

```lua
export type AbilityName = "Dive" | "DoubleJump" | "Roll" | "WallSlide"
```

## Methods

### ActivateBootModifiers

Toggles modifiers for the local player's equipped Boots. Yields until the local character spawns, or until 5 seconds has passed.

```lua
AvatarController:ActivateBootModifiers(state: boolean): ()
```

### AreControlsEnabled

Returns whether or not player controls are enabled.

```lua
AvatarController:AreControlsEnabled(): boolean
```

### DisableAllAbilities

Calls the `Disable()` method on all local player abilities.

```lua
AvatarController:DisableAllAbilities(): ()
```

### DisableControls

Disables the local player's controls and creates a lock to be removed later by calling `AvatarController:EnableControls(...)`.

```lua
AvatarController:DisableControls(lockName: string): ()
```

### DisableJumping

Disables the local character's jump and creates a lock to be removed later by calling `AvatarController:EnableJumping(...)`.

```lua
AvatarController:DisableJumping(lockName: string): ()
```

### DisableSkyDiveAnimation

Disables the local player's `"Skydive"` animation during freefall.

```lua
AvatarController:DisableSkyDiveAnimation(): ()
```

### DisableWalkingFootstepSFX

Disables the looped sound which plays when the local character is in the `HumanoidState.Running` state.

```lua
AvatarController:DisableWalkingFootstepSFX(): ()
```

### EnableAllAbilities

Calls the `Enable()` method on all local player abilities.

```lua
AvatarController:EnableAllAbilities(): ()
```

### EnableControls

Removes a lock created by calling `AvatarController:DisableControls(...)`. The local players's controls will be enabled if no other locks exist.

```lua
AvatarController:EnableControls(lockName: string): ()
```

### EnableJumping

Removes a lock created by calling `AvatarController:DisableJumping(...)`. The local character's jump will be enabled if no other locks exist.

```lua
AvatarController:EnableJumping(lockName: string): ()
```

### EnableSkyDiveAnimation

Enables the local player's `"Skydive"` animation during freefall.

```lua
AvatarController:EnableSkyDiveAnimation(): ()
```

### EnableWalkingFootstepSFX

Enables the looped sound which plays when the local character is in the `HumanoidState.Running` state.

```lua
AvatarController:EnableWalkingFootstepSFX(): ()
```

### GetAbility

Returns the API for an ability.

```lua
AvatarController:GetAbility(abilityName: AbilityName): unknown
```

### GetAnimationLength

Returns the length of the `AnimationTrack` of an `AvatarController`-made animation. Yields until the `AnimationTrack` has loaded.

```lua
AvatarController:GetAnimationLength(animationName: string): number
```

### GetAnimationTrack

Returns the `AnimationTrack` of an `AvatarController`-made animation.

```lua
AvatarController:GetAnimationTrack(animationName: string): AnimationTrack?
```

### GetControlsArray_DiveRoll

Returns an array of `Enum.KeyCode`s which activate the `"DiveRoll"` ability.

```lua
AvatarController:GetControlsArray_DiveRoll(): {Enum.KeyCode}
```

### GetControlsArray_WallJumpCancel

Returns an array of `Enum.KeyCode`s which activate jumping.

```lua
AvatarController:GetControlsArray_WallJumpCancel(): {Enum.KeyCode}
```

### GetControlsTable_DiveRoll

Returns a table with keys of `Enum.KeyCode`s which activate the `"DiveRoll"` ability.

```lua
AvatarController:GetControlsTable_DiveRoll(): {[Enum.KeyCode]: boolean}
```

### HandleJumpButton

Attempts to make the local character jump.

```lua
AvatarController:HandleJumpButton(): ()
```

### IsJumpingEnabled

Returns whether or not the local character's jump is enabled.

```lua
AvatarController:IsJumpingEnabled(): boolean
```

### IsPlaying

Returns whether or not the `AnimationTrack` for an `AvatarController`-made animation is currently playing. Returns `false` if the `AnimationTrack` hasn't loaded.

```lua
AvatarController:IsPlaying(animationName: string): boolean
```

### ListenForJump

Calls the provided listener function whenever the local character successfully jumps. Can be removed later by calling `AvatarController:StopListeningForJump(...)`.

```lua
AvatarController:ListenForJump(id: any, listenerFunction: () -> ()): ()
```

### LockCameraRotation_Gamepad

Toggles whether or not `KeyCode.Thumbstick2` can rotate the camera.

```lua
AvatarController:LockCameraRotation_Gamepad(enable: boolean): ()
```

### PlayAnimation

Plays the `AnimationTrack` of an `AvatarController`-made animation. Yields until the `AnimationTrack` has loaded.

```lua
AvatarController:PlayAnimation(animationName: string, fadeTime: number?, weight: number?, speed: number?): ()
```

### RemoveDeathEffects

Removes effects created by `AvatarController:ShowDeathEffects()` and allows for its next call.

```lua
AvatarController:RemoveDeathEffects(): ()
```

### ResetSkyDiveTime

Resets the freefall timer for the local player's `"Skydive"` animation.

```lua
AvatarController:ResetSkyDiveTime(): ()
```

### SetAnimationSpeed

Sets the speed of the `AnimationTrack` of an `AvatarController`-made animation. Yields until the `AnimationTrack` has loaded.

```lua
AvatarController:SetAnimationSpeed(animationName: string, speed: number?): ()
```

### SetAnimationTimePosition

Sets the time position for the `AnimationTrack` of an `AvatarController`-made animation. Yields until the `AnimationTrack` has loaded.

```lua
AvatarController:SetAnimationTimePosition(animationName: string, timePosition: number): ()
```

### SetAnimationWeight

Sets the weight of the `AnimationTrack` of an `AvatarController`-made animation. Yields until the `AnimationTrack` has loaded.

```lua
AvatarController:SetAnimationWeight(animationName: string, weight: number?): ()
```

### SetCharacterTransparency

Sets the `LocalTransparencyModifier` of each local character limb and `Accessory` handles.

```lua
AvatarController:SetCharacterTransparency(transparency: number): ()
```

### SetJumpAnimationEnabled

Toggles the local character jump animation.

```lua
AvatarController:SetJumpAnimationEnabled(enable: boolean): ()
```

### ShowDeathEffects

Fades in vignette, desaturation, and blur effects. Cannot be overlapped.

```lua
AvatarController:ShowDeathEffects(): ()
```

### StopAnimation

Stops the `AnimationTrack` of an `AvatarController`-made animation. Yields until the `AnimationTrack` has loaded.

```lua
AvatarController:StopAnimation(animationName: string, fadeTime: number?): ()
```

### StopHandlingJumpButton

Stops the local character from auto-jumping until the local player's next jump input.

```lua
AvatarController:StopHandlingJumpButton(): ()
```

### StopListeningForJump

Removes a jump listener function created by calling `AvatarController:ListenForJump(...)`.

```lua
AvatarController:StopListeningForJump(id: any): ()
```