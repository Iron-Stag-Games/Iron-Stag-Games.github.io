# Janitor

A module for tracking and cleaning up objects.

https://github.com/howmanysmall/Janitor

```lua
local Janitor = require(ReplicatedStorage.SharedModules.Janitor)
```

## Constructors

### new

Instantiates a new `Janitor` object.

```lua
Janitor.new()
```

#### Methods

##### janitor.Add

Adds an object to `Janitor` for later cleanup, where `MethodName` is the key of the method within the object which should be called at cleanup time. If the `MethodName` is `true` the object itself will be called instead. If passed an index it will occupy a namespace which can be `janitor:Remove(...)`d or overwritten. Returns the object.

```lua
janitor:Add(object: T, methodName: (string | true)?, index: number?): T
```

##### janitor.Cleanup

Calls each object's `MethodName` (or calls the object if `MethodName == true`) and removes them from the `Janitor`. Also clears the namespace.

This function is also called when you call a `Janitor` object (so it can be used as a destructor callback).

```lua
janitor:Cleanup(): ()
-- or
janitor(): ()
```

##### janitor.Destroy

Calls `janitor:Cleanup()` and renders the `Janitor` unusable.

```lua
janitor:Destroy(): ()
```

##### janitor.Get

Gets whatever object is stored with the given index, if it exists.

```lua
janitor:Get(index: number): any?
```

##### janitor.LinkToInstance

"Links" this `Janitor` to an `Instance`, such that the Janitor will `Cleanup` when the `Instance` is `Destroy`ed and garbage collected. A `Janitor` may only be linked to one `Instance` at a time, unless `AllowMultiple` is `true`. When called with a truthy `AllowMultiple` parameter, the `Janitor` will "link" the `Instance` without overwriting any previous links, and will also not be overwritable. When called with a falsy `AllowMultiple` parameter, the `Janitor` will overwrite the previous link which was also called with a falsy `AllowMultiple` parameter, if applicable.

```lua
janitor:LinkToInstance(object: Instance, allowMultiple: boolean?): {Connected: boolean, Connection: RBXScriptConnection}
```

##### janitor.LinkToInstances

Creates another `Janitor` and links several `Instance`s to it, which is then returned.

```lua
janitor:LinkToInstances(...: Instance): Janitor
```

##### janitor.Remove

Cleans up whatever object was set to this namespace by the 3rd parameter of `janitor:Add(...)`. Returns the same `Janitor` for chaining reasons.

```lua
janitor:Remove(index: number): janitor
```

## Methods

### Is

Determines if the passed object is a `Janitor`.

```lua
Janitor.Is(object: any): boolean
```