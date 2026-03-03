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

## Methods

### Children

Parents all children to an instance.

```lua
New.Children(parent: Instance, children: {Instance}?): ()
```

### Event

Creates and returns an `Event`.

```lua
New.Event(): New.Event<...any>
```

#### Connect

#### DisconnectAll

#### Fire

#### Once

#### Wait

### QueuedEvent

Creates and returns a `QueuedEvent`.

```lua
New.QueuedEvent(): New.Event<...any>
```

#### Connect

#### DisconnectAll

#### Fire

#### Once

#### Wait

### TrackedVariable

Creates and returns a `TrackedVariable`.

```lua
New.TrackedVariable(): New.TrackedVariable<any>
```

#### Connect

#### DisconnectAll

#### Get

#### Once

#### Set

#### Wait

#### WaitFor

Unimplemented.

```lua
trackedVariable:WaitFor(value: T, timeout: number?): (boolean, T, T)
```
::: danger
Calling this function will throw an error.
:::

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