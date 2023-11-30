::: tip
Complex expressions in property fields may not be supported by other tools, so when releasing packages made with Lync, avoid using math, non constructor functions, and Enums.

Simple expressions like `Color3.new(0, 0, 0)` are easy for other tools to interpret without using a Luau VM.
:::
