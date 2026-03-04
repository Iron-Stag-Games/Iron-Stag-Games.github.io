::: warning
This page is under construction.
:::

# New

A core module which includes several useful classes.

https://iron-stag-games.github.io/pronghorn/

```lua
local New = require(ReplicatedStorage.SharedModules.Pronghorn.New)
```

## Types
```lua
export type Callback<T...> = (T...) -> ()
export type Connection = {Disconnect: (self: Connection) -> ()}
export type Event<T...> = {
	Fire: (self: Event<T...>, T...) -> ();
	Connect: (self: Event<T...>, callback: Callback<T...>) -> (Connection);
	Once: (self: Event<T...>, callback: Callback<T...>) -> (Connection);
	Wait: (self: Event<T...>, timeout: number?) -> (boolean, T...);
	DisconnectAll: (self: Event<T...>) -> ();
}
export type TrackedVariable<T> = {
	Get: (self: TrackedVariable<T>) -> (T);
	Set: (self: TrackedVariable<T>, value: T) -> ();
	Connect: (self: TrackedVariable<T>, callback: Callback<T, T>) -> (Connection);
	Once: (self: TrackedVariable<T>, callback: Callback<T, T>) -> (Connection);
	Wait: (self: TrackedVariable<T>, timeout: number?) -> (boolean, T, T);
	WaitFor: (self: TrackedVariable<T>, value: T, timeout: number?) -> (boolean, T, T);
	DisconnectAll: (self: TrackedVariable<T>) -> ();
}
export type InstanceStream<T...> = {
	Instances: {Instance};
	Start: (self: InstanceStream<T...>, players: Player | {Player}, instances: {Instance}) -> (string);
	Listen: (self: InstanceStream<T...>, uid: string) -> (Event<T...>, Event<Instance>);
}
```

## Constructors

### Event

Creates and returns an `Event`.

```lua
New.Event(): New.Event<...any>
```

### QueuedEvent

Creates and returns a `QueuedEvent`.

```lua
New.QueuedEvent(): New.Event<...any>
```

### TrackedVariable

Creates and returns a `TrackedVariable`.

```lua
New.TrackedVariable(variable: T): New.TrackedVariable<T>
```
## Methods

### Children

Parents a group of `Instances` to an `Instance`.

```lua
New.Children(parent: Instance, children: {Instance}?): ()
```

### ServerInstanceStream

Starts an `InstanceStream` and returns its UID and any newly created `Instances`.

```lua
New.ServerInstanceStream(players: Player | {Player}, instances: {Instance}, exclusive: boolean?): (string, {[Player]: Instance}?, {[Player]: {any}}?)
```

### ClientInstanceStream

Listens to an `InstanceStream` and returns activity `Events`.

```lua
New.ClientInstanceStream(uid: string): (Event<...Instance?>, Event<Instance?>, Instance)
```

### event.Connect

### event.DisconnectAll

### event.Fire

### event.Once

### event.Wait

### queuedEvent.Connect

### queuedEvent.DisconnectAll

### queuedEvent.Fire

### queuedEvent.Once

### queuedEvent.Wait

### trackedVariable.Connect

### trackedVariable.DisconnectAll

### trackedVariable.Get

### trackedVariable.Once

### trackedVariable.Set

### trackedVariable.Wait

### trackedVariable.WaitFor

```lua
trackedVariable:WaitFor(value: T, timeout: number?): (boolean, T, T)
```
