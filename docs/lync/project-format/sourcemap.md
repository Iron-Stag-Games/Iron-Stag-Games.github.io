# Sourcemap

The Sourcemap is an automatically generated file that serves as a layout of the project for other tools to utilize.

This file cannot be deleted and should be ignored unless you're a tool developer.

## Syntax

::: info File Name
- `sourcemap.json`
:::
::: info Keys
- `name`: string
- `className`: string
- `filePaths`: \{string}
	- The list of files that have an effect on the Instance.
- `children`: \{Instance}
:::

## Example

```json
{
	"name": "Example Place",
	"className": "DataModel",
	"filePaths": [
		"default.project.json"
	],
	"children": [
		{
			"name": "Workspace",
			"className": "Workspace",
			"children": []
        }
    ],
    ...
}
```