# Linux 搭建

## 在 windows 运行 Linux 系统

如果你的电脑是轻薄本甚至是 surface 的话，要运行虚拟机也许有点费力，体验也不是很好。这时候，微软又出现了，你可以安装 WSL(windows subsystem linux)。WSL 提供了在 Windows 下模拟 Linux 系统的方式，就写 c++代码来说，是基本可以替代虚拟机的。

### 安装 WSL

从 Microsoft Store 安装需要的 ubuntu 版本，具体安装步骤可以去知乎或者简书搜索，并不难。

### vscode 连接 wsl

vscode 提供了 Remote-wsl 插件，安装了以后，可以连接到 wsl,就能进入 wsl 的文件系统，在和 Linux 几乎相同的环境中愉快地编写代码了(windows 和 wsl 的插件不是互相通用的，要在 wsl 中重新安装需要的插件，也不是很麻烦)。
