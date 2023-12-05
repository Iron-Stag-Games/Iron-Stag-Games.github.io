# Excel Tables

Excel Tables specify a range of cells from an Excel Spreadsheet (`XLSX`/`XLS`) to translate into a [ModuleScript](https://create.roblox.com/docs/reference/engine/classes/ModuleScript).

The resulting table can be formatted in multiple ways.

## Syntax

::: info File Name
- `*.Excel.JSON`
:::
::: info Keys
- `spreadsheet`: string
	- A relative path to the associated Excel Spreadsheet.
- `ref`: string
	- The 2D range with which to pull data from. Formatted as `sheetName!rowColumn:rowColumn`, e.g. `Sheet1!A1:C3`. It can also be a [named range](https://support.microsoft.com/en-us/office/create-a-named-range-from-selected-cells-in-a-worksheet-fd8905ed-1130-4cca-9bb0-ad02b7e594fd), which allows the range to be modified from inside the Excel worksheet.
- `hasHeader`: boolean
	- Whether or not the first row should be used as keys for nesting elements in the translated Excel Table.
- `numColumnKeys`: number
	- Defines by how many columns each entry should be nested.
:::

## Examples

### Example 1

Given an Excel Spreadsheet named `Economy.xlsx` containing the following cells in a sheet named `Pets`;
| | A | B | C | D | E | F |
|-|-|-|-|-|-|-|
| 1 | PetID | Name | Area | Deluxe | Rarity | Power |
| 2 | Starter_Cat | Cat | 1 | 0 | 0 | 5 |
| 3 | Starter_Dog | Dog | 1 | 0 | 0 | 5 |
| 4 | Starter_Bunn | Bunny | 1 | 0 | 0 | 5 |

... and an Excel Table file named `Pets.Excel.JSON` containing the following;
```json
{
	"spreadsheet": "Economy.xlsx",
	"ref": "Pets!A1:F4",
	"hasHeader": true,
	"numColumnKeys": 1
}
```
... the following table will appear in Roblox as a [ModuleScript](https://create.roblox.com/docs/reference/engine/classes/ModuleScript) named `Pets`:
```lua
return {
	Starter_Cat = {
		Name = "Cat",
		Area = 1,
		Deluxe = 0,
		Rarity = 0,
		Power = 5,
	},
	Starter_Dog = {
		Name = "Dog",
		Area = 1,
		Deluxe = 0,
		Rarity = 0,
		Power = 5,
	},
	Starter_Bunn = {
		Name = "Bunny",
		Area = 1,
		Deluxe = 0,
		Rarity = 0,
		Power = 5,
	}
}
```
::: tip
It's important to format tables in ways that are easy for you to use. When tables are organized with keys instead of indices, you will be able to access these entries directly (e.g., `Pets[uniquePetId]`.)
:::

### Example 2

Given an Excel Spreadsheet named `Players.xlsx` containing the following cells in a sheet named `Sheet1`;
| | C | D | E | F |
|-|-|-|-|-|
| 4 | Name | Foo | Bar | Baz |
| 5 | Alfa | 512 | 64 | 8 |
| 6 | Bravo | 256 | | 4 |
| 7 | Charlie | 128 | 16 | 2 |

... and an Excel Table file named `Leaderboard.Excel.JSON` containing the following;
```json
{
    "spreadsheet": "Players.xlsx",
    "ref": "Sheet1!C4:F7",
    "hasHeader": true,
    "numColumnKeys": 0
}
```
... the following table will appear in Roblox as a [ModuleScript](https://create.roblox.com/docs/reference/engine/classes/ModuleScript) named `Leaderboard`:
```lua
return {
	{
		Name = "Alfa",
		Foo = 512,
		Bar = 64,
		Baz = 8,
	},
	{
		Name = "Bravo",
		Foo = 256,
		Bar = nil,
		Baz = 4,
	},
	{
		Name = "Charlie",
		Foo = 128,
		Bar = 16,
		Baz = 2,
	},
}
```
