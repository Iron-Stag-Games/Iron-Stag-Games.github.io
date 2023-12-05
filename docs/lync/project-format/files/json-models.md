# JSON Models

JSON Models describe a simple set of Instances.

Unlike Model Files (`RBXM`/`RBXMX`\;) their data is limited to that which can be assigned by a script (e.g., no [MeshPart](https://create.roblox.com/docs/reference/engine/classes/MeshPart) data.)

## Syntax

::: info File Name
- `*.Model.JSON`
:::
::: info Keys
- `name`: string *(Optional)*
- `className`: string *(Optional)*
- `properties`: {[string]: any} *(Optional)*
	- Functions as `instance[property] = value`.
- `attributes`: {[string]: any} *(Optional)*
	- Functions as `instance:SetAttribute(attribute, value)`.
- `tags`: {string} *(Optional)*
	- Functions as `CollectionService:AddTag(instance, tag)`
- `children`: {Instance} *(Optional)*
:::

## Example

A JSON Model describing a [Model](https://create.roblox.com/docs/reference/engine/classes/Model) containing a small green [Part](https://create.roblox.com/docs/reference/engine/classes/Part) and a [RemoteEvent](https://create.roblox.com/docs/reference/engine/classes/RemoteEvent) would be written as a file named `{example}.Model.JSON` with:
```json
{
    "name": "Money",
	"className": "Model",
	"children": [
		{
			"className": "Part",
			"properties": {
				"BrickColor": [ "BrickColor.new(\"Bright green\")" ],
				"Size": [ "Vector3.new(1, 0.4, 2)" ]
			}
		},
		{
			"name": "CollectMoney",
			"className": "RemoteEvent"
		}
	]
}
```
