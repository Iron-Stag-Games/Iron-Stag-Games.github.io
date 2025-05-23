# What is Lync?

Lync is a file sync tool for Roblox.

It mimics the functionality of [Rojo](https://rojo.space/) with several major modifications. The two tools should be considered different flavors; Rojo being the default (and recommended!) tool, and Lync being the tool to use if it better suits your workflow.

[Submit an Issue or Suggestion](https://github.com/Iron-Stag-Games/Lync/issues)

::: warning ALPHA
Lync is currently in Alpha. Some features will be unavailable until Beta.

Any unavailable features have been documented as such.
:::

## Why Lync?

### Version Control

Roblox version control is opaque and often unreliable. With [Git](https://git-scm.com/), the industry standard for version control, you can precisely track changes made to your project.

Integrate with repository hosting services to enable collaborative development.

::: details Repository Hosting Services
- [GitHub](https://github.com/) *(Recommended)*
- [Bitbucket](https://bitbucket.org/)
- [GitLab](https://about.gitlab.com/)
:::

### External Text Editors

The Roblox Studio editor is slow and has a limited feature set. Lync allows you to edit files on your OS using your preferred text editor or IDE.

::: details Text Editors
- [VS Code](https://code.visualstudio.com/) *(Recommended)*
- [Sublime Text](https://www.sublimetext.com/)
:::

### Fully Managed Workflows

Unlike [the upcoming built-in Open Cloud file sync feature](https://devforum.roblox.com/t/what-we-announced-at-rdc-2023/2585405), Lync deals with more than just scripts - all in-game content can be synced: scripts, models, and properties.

See [project-format/files/supported-files](/lync/project-format/files/supported-files).

### Automation

Lync offers additional built-in tools for power users to automate aspects of the project.

- [Packages](/lync/project-format/project/packages)
- [Automated Downloads](/lync/project-format/project/automated-downloads)
- [Automated Jobs](/lync/project-format/project/automated-jobs)

### Future Proofed

The live sync feature is designed to keep functioning after Roblox updates.

Lync uses Roblox plugin API to sync content. Similar file sync tools rely on parsing the Roblox binary format, which has historically required developer intervention when Roblox releases new content.

### Open Source

Lync is written in [Node.js](https://nodejs.org/) and compiled with [pkg](https://github.com/vercel/pkg).

As is the case with most thirdparty Roblox tooling, its source is publicly available and can be modified if needed.

## Games Made With Lync

::: info Games Made With Lync
- [Claw Machine Simulator - RB Battles Games](https://www.roblox.com/games/6891812658)
- [ExoTech - Iron Stag Games](https://www.roblox.com/games/7634484468)
- [RB Battles - RB Battles Games](https://www.roblox.com/games/5036207802)
- [Traitor Town - Traitor Town](https://www.roblox.com/games/255236425)
:::
