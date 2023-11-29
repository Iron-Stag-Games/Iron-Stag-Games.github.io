# What is Lync?

Lync is a file sync tool for Roblox created to meet the needs of the dev community and to improve maintainability over similar tools.

## Why Lync?

### Version Control

Roblox version control is opaque and often unreliable. With [Git](https://git-scm.com/), the industry standard for version control, you can precisely track changes made to your project.

Integrate with version control services to enable collaborative development.

::: info Version Control Services
- [GitHub](https://github.com/) *(Recommended)*
- [Bitbucket](https://bitbucket.org/)
- [GitLab](https://about.gitlab.com/)
:::

### External Text Editors

The Roblox Studio editor is slow and has a limited feature set. Lync allows you to edit files on your OS using your preferred text editor or IDE.

::: info Text Editors
- [VS Code](https://code.visualstudio.com/) *(Recommended)*
- [Sublime Text](https://www.sublimetext.com/)
:::

### Fully Managed Workflows

Unlike [the upcoming built-in Open Cloud file sync feature](https://devforum.roblox.com/t/what-we-announced-at-rdc-2023/2585405), Lync deals with more than just scripts - all in-game content can be synced: scripts, models, and properties.

See [lync/project-format/files/filetypes](/lync/project-format/files/filetypes).

### Automation

Lync offers additional built-in tools for power users to expand their capabilities in Roblox.

- [**Packages**](/lync/project-format/project-json/packages) - Download Git repositories and insert their contents into the project.
- [**Automated Downloads**](/lync/project-format/project-json/automated-downloads) - Download a list of sources into the project.
- [**Automated Jobs**](/lync/project-format/project-json/automated-jobs) - Run scripts based on file system event criteria.

### Community Tooling

::: info Language Servers and Linters
- [JohnnyMorganz/luau-lsp](https://github.com/JohnnyMorganz/luau-lsp)
- [filiptibell/tooling-language-server](https://github.com/filiptibell/tooling-language-server)
- [Kampfkarren/roblox-lua-autofills](https://github.com/Kampfkarren/roblox-lua-autofills)
- [~~NightrainsRbx/RobloxLsp~~](https://github.com/NightrainsRbx/RobloxLsp) *(Abandoned)*
- [selene](https://kampfkarren.github.io/selene/)
:::

::: info Script Formatting
- [darklua](https://darklua.com/)
- [JohnnyMorganz/StyLua](https://github.com/JohnnyMorganz/StyLua)
:::

::: info Documentation Generators
- [Moonwave](https://eryn.io/moonwave/)
:::

::: info Cross Compilers
- [Haxe](https://haxe.org/)
- [MoonScript](https://moonscript.org/)
- [roblox-pyc](https://robloxpyc.gitbook.io/roblox-pyc/)
- [roblox-ts](https://roblox-ts.com/)
:::

::: info Other
- [filiptibell/roblox-ui](https://github.com/filiptibell/roblox-ui)
:::
