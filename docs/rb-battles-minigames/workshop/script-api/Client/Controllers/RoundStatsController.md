# RoundStatsController

The controller responsible for reading minigame leaderboard stats.

```lua
local RoundStatsController = require(ReplicatedStorage.ClientModules.Controllers.RoundStatsController)
```

## Methods

### GetCategories

Returns an array of the current stat titles.

```lua
RoundStatsController:GetCategories(): {string}
```

### GetStat

Returns the stat at a given index for a given player.

```lua
RoundStatsController:GetStat(player: Player, index: number): number
```

### GetTeamStat

Returns the sum of a stat at a given index for all players within a team.

```lua
RoundStatsController:GetTeamStat(teamName: Player, index: number): number
```