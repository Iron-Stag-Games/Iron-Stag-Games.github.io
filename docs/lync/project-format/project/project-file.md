# Project File

Lync projects define the Instance tree inside Roblox, as well as configuring the behavior for building to file, sourcemaps, [Automated Downloads](/lync/project-format/project/automated-downloads), [Automated Jobs](/lync/project-format/project/automated-jobs), and more.

## Syntax

::: info File Name
- `Default.Project.JSON`
	- The default project to load when running Lync without the project file argument.
- `*.Project.JSON`
	- For non-default projects.
:::
::: info Keys
- `name`: string *(Optional)*
	- The name of the project for informational purposes.
- `port`: number
	- The network port to serve the project on when using `SERVE` and `OPEN` modes.
- `experienceId`: number
	- The experience ID to use in `OPEN` mode.
- `placeId`: number
	- The place ID to use in `OPEN` mode.
- `collisionGroups`: string *(Optional)*
	- The path to a file that stores collision group data.
- `globIgnorePaths`: {string} *(Optional)*
	- An array of glob paths to ignore when mapping the project.
- `sourcemapEnabled`: {RBXM: boolean, RBXMX: boolean} *(Optional)*
	- Controls which types of Model Files (`RBXM`/`RBXMX`) are parsed during sourcemap generation.
- `sources`: Object *(Optional)*
	- See [project-format/project/automated-downloads](/lync/project-format/project/automated-downloads).
- `jobs`: Object *(Optional)*
	- See [project-format/project/automated-jobs](/lync/project-format/project/automated-jobs).
- `tree`: Object
	- The root Instance.
:::

### Example

```json
{
	"name": "Example Project",
	"port": 34873,
	"experienceId": 0,
	"placeId": 0,
	"collisionGroups": "collisionGroups.json",
	"globIgnorePaths": [ "ignoredDirectory/**" ],
	"sourcemapEnabled": {
		"RBXM": true,
		"RBXMX": true
	},
	"sources": { ... },
	"jobs": { ... },

	"tree": {
		...
	}
}
```

## Instance Definitions

::: info Keys
- `$className`: string *(Optional)*
	- Has no effect when `$path` is specified.
- `$clearOnSync`: boolean *(Optional)*
	- When `true`, the associated Instance and its descendants will be destroyed in Studio when performing sync operations.
	- Useful for clearing unmapped content when modifications are made outside your active live sync session.
- `$path`: (string | Object) *(Optional)*
	- A path to a file or directory that overrides the Instance Definition.
	- Use `"$path": { "optional": "..." }` when the file or directory could possibly be non-existant.
	- Use `"$path": { "package": "...", "type": "..." }` for [Packages](/lync/project-format/project/packages).
- `$properties`: {[string]: any} *(Optional)*
	- Functions as `instance[property] = value`.
- `$attributes`: {[string]: any} *(Optional)*
	- Functions as `instance:SetAttribute(attribute, value)`.
- `$tags`: {string} *(Optional)*
	- Functions as `CollectionService:AddTag(instance, tag)`.
:::

### Values

Values not storable in JSON, like `Enum`, `Color3`, `Vector3` and so on, should be represented as a single Lua string wrapped inside an array (e.g., `[ "Value" ]`.)


### Example

```json
"Wood Brick": {
	"$className": "Part",
	"$properties": {
		"Color": [ "Color3.fromRGB(132, 66, 4)" ],
		"Material": [ "Enum.Material.Wood" ],
		"Transparency": 0,
		"Position": [ "Vector3.new(0, 10, 0)" ],
		"Anchored": true
	},
	"$attributes": {
		"ExampleAttribute": true
	},
	"$tags": [ "ExampleTag1", "ExampleTag2", "ExampleTag3" ]
}
```

## Terrain

::: info Keys
- `$terrainRegion`: {[1]: string, [2]: Lua, [3]: boolean} *(Optional)*
	- Functions as `Terrain:PasteRegion(region, corner, pasteEmptyCells)`.
- `$terrainMaterialColors`: {[string]: Lua} *(Optional)*
	- Functions as `Terrain:SetMaterialColor(material, value)`.
:::

### Example

```json
"Workspace": {
	"Terrain": {
		"$terrainRegion": [ "Assets/TerrainRegion.rbxm", [ "Vector3int16.new(-32000, -32000, -32000)" ], true ],
		"$terrainMaterialColors": {
			"Grass": [ "Color3.new(0, 0.5, 0)" ]
		}
	}
}
```