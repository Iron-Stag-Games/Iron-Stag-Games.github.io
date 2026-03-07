# RoundController

The controller responsible for loading, running, and stopping minigames.

```lua
local RoundController = require(ReplicatedStorage.ClientModules.Controllers.RoundController)
```

## Methods

### GetCurrentMap

Returns the `Instance` of the current minigame's map, if a minigame is active.

```lua
RoundController:GetCurrentMap(): any?
```

### GetCurrentRoundInfo

Returns the information about the current minigame, if one is active.

```lua
RoundController:GetCurrentRoundInfo(): {Name: string, Settings: {[unknown]: unknown}}?
```

### GetPlayers

Returns an array of all players currently in the round.

```lua
RoundController:GetPlayers(): {Player}
```

### HasRoundStarted

Returns whether or not the round has started.

```lua
RoundController:HasRoundStarted(): boolean
```

### IsLocalPlayerInRound

Returns whether or not the local player is in the round.

```lua
RoundController:IsLocalPlayerInRound(): boolean
```

### IsPlayerInRound

Returns whether or not the given player is in the round.

```lua
RoundController:IsPlayerInRound(player: Player): boolean
```