# Installation
There are three ways to install Lync:
::: details Aftman
```bash
aftman add --global Iron-Stag-Games/Lync
```
:::
::: details Manually
Download [the latest release asset](https://github.com/Iron-Stag-Games/Lync/releases/latest) and extract the binary to wherever is most convenient.

* **Windows** - It's recommended that you modify your `Path` system environment variable so you can run the tool with simply `LYNC`.
:::
::: details Building from Source
* **Windows** - Launch `Compile_Lync.bat` from the repository root.
:::

The Roblox Studio plugin installs automatically each time a live sync session is started.

## Auto Updates
Lync has the ability to automatically download and install new releases. Your configuration is preserved when updating.

This feature is disabled by default.

* To enable auto updates, run `LYNC CONFIG` and set `AutoUpdate` to `true`.
* To change the update repository, run `LYNC CONFIG` and modify `AutoUpdate_Repo`.

## Lune Dependency for Building to File
[Lune](https://lune-org.github.io/docs/getting-started/1-installation) must be installed for building to file. You must specify the path to your Lune installation in the config file. To do this, run `LYNC CONFIG` and modify `Path_Lune`.
