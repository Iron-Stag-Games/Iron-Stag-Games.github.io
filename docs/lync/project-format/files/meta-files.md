# Meta Files
Meta Files attach additional data to a file or directory.

They are used in scenarios where it would be desirable to change the properties of something which otherwise cannot be changed from the filesystem.

## Syntax

### File Name
- `*.Meta.JSON` - For files.
- `Init.Meta.JSON` - For directories.

### Keys
- string `className` - Changes the ClassName. Usable only with directories.
- table `properties` - A map of properties to set on the Instance.

## Examples
The most common use case is changing the ClassName of a Folder.

If your project has a Folder and you want to change its ClassName, you will create a `Init.Meta.JSON` inside it with:
```json
{
	"className": "Configuration"
}
```

Another use case is changing the properties of a Model (`RBXM`/`RBXMX`). Because the file is encoded, it cannot have its properties changed directly.

If your project has `foo.RBXM` (which contains a single Part) and you want to make it a different color, you will create a `foo.Meta.JSON` next to it with:
```json
{
	"properties": {
		"Color": [ "Color3.fromRGB(82, 132, 145)" ]
	}
}
```
