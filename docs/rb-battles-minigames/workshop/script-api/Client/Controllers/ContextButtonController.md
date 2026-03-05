::: warning
This page is under construction.
:::

# ContextButtonController

## Methods

### BindAction

```lua
ContextButtonController:BindAction(actionName: string, actionFunction: (state: Enum.UserInputState) -> (), mobileButtonData: {unknown}, inputArray: {Enum.UserInputType | Enum.KeyCode}): ()
```

### Hide

```lua
ContextButtonController:Hide(): ()
```

### IsBound

```lua
ContextButtonController:IsBound(actionName: string): {[unknown]: unknown}
```

### SetActionMobileButtonData

```lua
ContextButtonController:SetActionMobileButtonData(actionName: string, mobileButtonData: {unknown}): ()
```

### SetMobileButtonVisibility

```lua
ContextButtonController:SetMobileButtonVisibility(state: boolean): ()
```

### SetMobileJumpButtonVisible

```lua
ContextButtonController:SetMobileJumpButtonVisible(state: boolean): ()
```

### Show

```lua
ContextButtonController:Show(): ()
```

### TriggerAction

```lua
ContextButtonController:TriggerAction(actionName: string, inputStateType: Enum.UserInputState): ()
```

### UnbindAction

```lua
ContextButtonController:UnbindAction(actionName: string): ()
```