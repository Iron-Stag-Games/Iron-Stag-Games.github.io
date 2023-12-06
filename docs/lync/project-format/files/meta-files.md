# Meta Files

Meta Files attach additional data to a file or directory.

They are used in scenarios where it would be desirable to change the properties of something which otherwise cannot be changed from the filesystem.

## Syntax

::: info File Name
- `*.Meta.JSON` - For files.
- `Init.Meta.JSON` - For directories.
:::
::: info Keys
- `className`: string *(Optional)*
	- Usable only with directories.
- `properties`: {[string]: any} *(Optional)*
	- Functions as `instance[property] = value`.
- `attributes`: {[string]: any} *(Optional)*
	- Functions as `instance:SetAttribute(attribute, value)`.
- `tags`: {string} *(Optional)*
	- Functions as `CollectionService:AddTag(instance, tag)`
:::

## Examples

### Example 1

The most common use case is changing the ClassName of a directory.

If your project has a directory and you want to change its ClassName, you will create a `Init.Meta.JSON` inside it with:
```json
{
	"className": "Configuration"
}
```

### Example 2

Another use case is changing the properties of a Model File (`RBXM`/`RBXMX`). Because the file is encoded, it cannot have its properties changed directly.

If your project has `{example}.RBXM` (which contains a single [Part](https://create.roblox.com/docs/reference/engine/classes/Part)) and you want to make it a different color, you would create a `{example}.Meta.JSON` next to it with:
```json
{
	"properties": {
		"Color": [ "Color3.fromRGB(82, 132, 145)" ]
	}
}
```
