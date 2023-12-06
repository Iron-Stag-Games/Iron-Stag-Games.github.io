# Automated Jobs

Automated Jobs execute shell commands based on sets of file system event criteria.

They are typically used to generate or modify other files when triggered, but there are no limitations to what can be executed in the shell.

## Syntax

::: info Keys
- `globPath`: string
	- The glob path trigger.
- `on`: \{string}
	- An array of event triggers.
	- Must contain `start`, `add`, `addDir`, `change`, `unlink`, or `unlinkDir`.
- `commandName`: string
	- The name of the shell command in the Lync config file to execute.
:::

## Example

Lync config:
```json
"JobCommands": {
	"ExportMesh": "echo Hello World!"
}
```

Project:
```json
"jobs": [
	{
		"globPath": "/**/*.blend",
		"on": [ "add", "change" ],
		"commandName": "ExportMesh"
	}
]
```
