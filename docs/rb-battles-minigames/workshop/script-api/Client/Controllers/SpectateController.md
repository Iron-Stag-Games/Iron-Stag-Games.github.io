# SpectateController

The controller responsible for minigame spectating.

```lua
local SpectateController = require(ReplicatedStorage.ClientModules.Controllers.SpectateController)
```

## Methods

### GetCurrentSpectatee

Returns the current `Player` being spectated, if any.

```lua
SpectateController:GetCurrentSpectatee(): Player?
```

## Events

### SpectateeChanged

Fires when the `Player` being spectated changes.

```lua
SpectateController.SpectateeChanged: New.Event<Player?>
```