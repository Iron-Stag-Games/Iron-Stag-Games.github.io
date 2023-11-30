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
