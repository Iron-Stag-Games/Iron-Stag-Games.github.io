# What is Lync?

Lync is a file sync tool for Roblox created to meet the needs of the dev community and to improve maintainability over similar tools.

## Why Lync?

### Version Control

Roblox version control is opaque and often unreliable. With [Git](https://git-scm.com/), the industry standard for version control, you can precisely track changes made to your project.

Integrate with version control services like [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/), [Bitbucket](https://bitbucket.org/), and many more to enable collaborative editing.

### Fully Managed Workflows

Unlike [the upcoming built-in Open Cloud file sync feature](https://devforum.roblox.com/t/what-we-announced-at-rdc-2023/2585405), Lync deals with more than just scripts - all in-game content can be synced: scripts, models, and properties.

### External Text Editors

The Roblox Studio editor is slow and has a limited feature set. Lync allows you to edit files on your OS using your preferred text editor or IDE.

- [Sublime Text](https://www.sublimetext.com/)
- [VS Code](https://code.visualstudio.com/) (Recommended)

VS Code in particular has a wide array of extensions available for use with Lync.

- [filiptibell/roblox-ui](https://github.com/filiptibell/roblox-ui)
- [JohnnyMorganz/luau-lsp](https://github.com/JohnnyMorganz/luau-lsp) (Recommended)
- [JohnnyMorganz/StyLua](https://github.com/JohnnyMorganz/StyLua)
- [Kampfkarren/roblox-lua-autofills](https://github.com/Kampfkarren/roblox-lua-autofills)
- [Kampfkarren/selene](https://github.com/Kampfkarren/selene) (Recommended)

### Cross Compilation

If Luau isn't your flavor, you may choose a different programming language by using a cross compiler.

- [Haxe](https://haxe.org/)
- [MoonScript](https://moonscript.org/)
- [roblox-ts](https://roblox-ts.com/)

### Exclusive Features

Lync offers additional built-in tools for power users to expand their capabilities in Roblox.

- [**Packages**](/lync/project-format/project-json/packages) - Download Git repositories and insert their contents into the project.
- [**Automated Downloads**](/lync/project-format/project-json/automated-downloads) - Download a list of sources into the project.
- [**Automated Jobs**](/lync/project-format/project-json/automated-jobs) - Run scripts based on file system event criteria.
