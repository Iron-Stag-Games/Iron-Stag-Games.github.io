# ContextButtonController

The controller responsible for binding local player inputs and managing mobile buttons.

```lua
local ContextButtonController = require(ReplicatedStorage.ClientModules.Controllers.ContextButtonController)
```

## Types

```lua
export type Action = {
	FunctionReference: (state: Enum.UserInputState) -> ();
	PositionIndex: number?;
	Button: typeof(ReplicatedStorage.UIs.ContextButtonsGui.Templates.CustomMobileButton)?;
	InputConnectionBegan: RBXScriptConnection?;
	InputConnectionEnded: RBXScriptConnection?;
}
```

## Methods

### BindAction

Binds an `Action` to the given name and optionally creates a mobile button.

```lua
ContextButtonController:BindAction(actionName: string, actionFunction: (state: Enum.UserInputState) -> (), mobileButtonData: {unknown}?, inputArray: {Enum.UserInputType | Enum.KeyCode}?): ()
```

### Hide

Hides all mobile buttons.

```lua
ContextButtonController:Hide(): ()
```

### IsBound

Returns the `Action` bound to the given name, if it exists.

```lua
ContextButtonController:IsBound(actionName: string): Action?
```

### SetActionMobileButtonData

Changes the position index, text, image, and colors of an `Action` bound to the given name, if it exists.

```lua
ContextButtonController:SetActionMobileButtonData(actionName: string, mobileButtonData: {unknown}): ()
```

### SetMobileJumpButtonVisible

Toggles the visibility of the mobile jump button.

```lua
ContextButtonController:SetMobileJumpButtonVisible(state: boolean): ()
```

### Show

Shows all mobile buttons.

```lua
ContextButtonController:Show(): ()
```

### TriggerAction

Triggers the `Action` bound to the given name, if it exists.

```lua
ContextButtonController:TriggerAction(actionName: string, inputStateType: Enum.UserInputState?): ()
```

### UnbindAction

Unbinds the `Action` bound to the given name, if it exists.

```lua
ContextButtonController:UnbindAction(actionName: string): ()
```