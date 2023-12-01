# What is Lync?

Lync is a file sync tool for Roblox created to meet the needs of the dev community and to improve maintainability over similar tools.

## Why Lync?

### Version Control

Roblox version control is opaque and often unreliable. With [Git](https://git-scm.com/), the industry standard for version control, you can precisely track changes made to your project.

Integrate with repository hosting services to enable collaborative development.

::: info Repository Hosting Services
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

See [project-format/files/supported-files](/lync/project-format/files/supported-files).

### Automation

Lync offers additional built-in tools for power users to automate aspects of the project.

- [**Packages**](/lync/project-format/project-file/packages) - Download GitHub repositories and insert their contents into the project.
- [**Automated Downloads**](/lync/project-format/project-file/automated-downloads) - Download a list of sources into the project.
- [**Automated Jobs**](/lync/project-format/project-file/automated-jobs) - Run scripts based on file system event criteria.

### Future Proofed

The live sync feature is designed to keep functioning after Roblox updates.

Lync uses Roblox plugin API to sync content. Similar file sync tools rely on parsing the Roblox binary format, and they stop working whenever a new Instance or Enum gets added to Roblox.

::: warning
Does not apply to `OPEN` and `BUILD` modes, which rely on [Lune](https://lune-org.github.io/docs) to build a place file.

See [getting-started/installation](/lync/getting-started/installation#lune-dependency-for-building-to-file).
:::

### Open Source

Lync is written in [Node.js](https://nodejs.org/) and compiled with [pkg](https://github.com/vercel/pkg).

As is the case with most thirdparty Roblox tooling, its source is publicly available and can be modified if needed.

## Games Made With Lync
::: info Games Made With Lync
- [Claw Machine Simulator - Fund For Games](https://www.roblox.com/games/8875360163)
- [ExoTech - Iron Stag Games](https://www.roblox.com/games/7634484468)
- [RB Battles - RB Battles Games](https://www.roblox.com/games/5036207802)
- [Traitor Town - Traitor Town](https://www.roblox.com/games/255236425)
- NDA title - RB Battles PVP
- NDA title - Fund For Games
:::
