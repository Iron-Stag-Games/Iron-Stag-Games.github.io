# Math

A module which contains math methods that are frequently used in minigames.

```lua
local Math = require(ReplicatedStorage.SharedModules.Utils.Math)
```

## Methods

### AngleBetweenVec3_Radians

Returns the angle in radians between two `Vector3`s.

```lua
Math.AngleBetweenVec3_Radians(vecA: Vector3, vecB: Vector3): number
```

### ~~AxisToCF~~

Generally useless for minigames.

Uncompresses a `Vector3` provided by `Math.CFToAxis(...)` into a rotation `CFrame`.

```lua
Math.AxisToCF(axis: Vector3): CFrame
```

### ~~CFCLerp~~

Linear interpolation between two `CFrame`s with alpha clamped to `[0, 1]`.

```lua
Math.CFCLerp(start: CFrame, goal: CFrame, alpha: number): CFrame
```
::: tip
Redundant - Please use `CFrame:Lerp(..., math.clamp(..., 0, 1))` instead.
:::

### ~~CFToAxis~~

Generally useless for minigames.

Compresses a `CFrame`'s rotation into a `Vector3` by multiplying its unit `Vector3` axis by its rotation angle in radians. Decompressed with `Math.AxisToCF(...)`.

```lua
Math.CFToAxis(cf: CFrame): Vector3
```

### ~~CLerp~~

Linear interpolation between two `number`s with alpha clamped to `[0, 1]`.

```lua
Math.CLerp(start: number, goal: number, alpha: number): number
```
::: tip
Redundant - Please use `math.map(math.clamp(..., 0, 1), 0, 1, ...)` instead.
:::

### DegreeCLerp

Linear interpolation between angles in degrees with alpha clamped to `[0, 1]`.

```lua
Math.DegreeCLerp(start: number, goal: number, alpha: number): number
```

### DistanceXZ

Returns the XZ distance of two `Vector3`s.

```lua
Math.DistanceXZ(vec1: Vector3, vec2: Vector3): number
```

### GetVecXZ

Returns the `Vector3` without the Y component.

```lua
Math.GetVecXZ(vec: Vector3): Vector3
```

### GetVecXZUnit

Returns the unit vector of a `Vector3` while ignoring the Y component.

```lua
Math.GetVecXZUnit(vec: Vector3): Vector3
```
::: warning
Will return `nan, nan, nan` if the provided `Vector3`'s XZ components are both `0`.
:::

### IsPointInBlock

Checks if the given point is within the `Part`'s extents.

```lua
Math.IsPointInBlock(position: Vector3, block: Part): boolean
```

### ~~Lerp~~

Linear interpolation between two values which support `T + T` and `T * number` operations, such as `number`s, `Vector2`s, or `Vector3`s.

```lua
Math.Lerp(value1: T, value2: T, alpha: number): T
```
::: tip
Redundant - Please use `math.map(...)`, `Vector2:Lerp(...)`, or `Vector3:Lerp(...)` instead.
:::

### ScaleCFPos

Multiplies a `CFrame`'s XYZ components.

```lua
Math.ScaleCFPos(cf: CFrame, scale: number): CFrame
```

### Slerp

Returns a unit `Vector3` interpolation using a circular curve.

```lua
Math.Slerp(vStart: Vector3, vEnd: Vector3, alpha: number): Vector3
```

### ~~Vec2LengthSquared~~

Returns the squared sum of the XY components for a `Vector2`.

```lua
Math.Vec2LengthSquared(vec: Vector2): number
```
::: danger
Misleading Name - This method returns a sum of components, not length/magnitude.
:::

### ~~Vec3LengthSquared~~

Returns the squared sum of the XYZ components for a `Vector3`.

```lua
Math.Vec3LengthSquared(vec: Vector3): number
```
::: danger
Misleading Name - This method returns a sum of components, not length/magnitude.
:::

### VecAxisAngle

Rotates the given `Vector3` along an axis in radians.

```lua
Math.VecAxisAngle(srcVec: Vector3, axisVec: Vector3, angle: number): Vector3
```

### ~~VecCLerp~~

Linear interpolation between two `Vector3`s with alpha clamped to `[0, 1]`.

```lua
Math.VecCLerp(start: Vector3, goal: Vector3, alpha: number): Vector3
```
::: tip
Redundant - Please use `Vector3:Lerp(..., math.clamp(..., 0, 1))` instead.
:::

### VecDeadzone

Sets the XYZ components of a `Vector3` which have an absolute value below a specified threshold to `0`.

```lua
Math.VecDeadzone(vec: Vector3, deadzone: number): Vector3
```

### VecXZLength

Returns the magnitude of a `Vector3` while ignoring the Y component.

```lua
Math.VecXZLength(vec: Vector3): number
```

### ~~VecXZLengthSquared~~

Returns the squared sum of the XZ components for a `Vector3`.

```lua
Math.VecXZLengthSquared(vec: Vector3): number
```
::: danger
Misleading Name - This method returns a sum of components, not length/magnitude.
:::

### ~~ZenoLerp~~

Linear interpolation between two `number`s with an added tolerance parameter.

```lua
Math.ZenoLerp(value1: number, value2: number, alpha: number, epsilon: number): number
```
::: danger
Misleading Name - This method uses linear interpolation, not easing.
:::
::: tip
Redundant - Please use `math.map(...)` instead.
:::