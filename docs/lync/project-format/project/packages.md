# Packages

Packages are shortcuts to GitHub repository releases which are automatically downloaded to the project root, and kept up to date when specified.

They are mapped to the project using Instance Definitions' `$path` key.

Releases typically contain a [Project](/lync/project-format/project/project-file), but there are no content limitations.

::: tip
Complex expressions in property fields may not be supported by other tools, so when releasing Packages made with Lync, avoid using math, non constructor functions, and Enums.

Simple expressions like `Color3.new(0, 0, 0)` are easy for other tools to interpret without using a Luau VM.
:::

## Syntax

::: info Keys
- `package`: string
	- The GitHub repository release.
    - Formatted as `Namespace/Repository` or `Namespace/Repository@ReleaseTag`.
	- If no release tag is specified, the package will be automatically updated each time the project is loaded.
- `type`: string
    - The expected release format.
    - Must be `repo`, `zip`, `lua`, `luau`, `rbxm`, or `rbxmx`.
:::

## Example

```json
"Pronghorn": {
	"$path": { "package": "Iron-Stag-Games/Pronghorn", "type": "repo" }
}
```