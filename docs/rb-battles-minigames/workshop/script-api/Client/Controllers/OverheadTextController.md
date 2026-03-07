# OverheadTextController

The controller responsible for displaying character nametag, rank, and status labels.

```lua
local OverheadTextController = require(ReplicatedStorage.ClientModules.Controllers.OverheadTextController)
```

## Methods

### ShowAllOtherPlayers

Toggles character labels for other characters.

```lua
OverheadTextController:ShowAllOtherPlayers(state: boolean): ()
```

### ShowOverheadLocally

Toggles character labels for the local character.

```lua
OverheadTextController:ShowOverheadLocally(state: boolean): ()
```