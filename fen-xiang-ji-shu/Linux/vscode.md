# Vscode

使用 Vim 写代码有时是一键让人头秃的事情。

在 dev-C++、Visual Studio、Xcode 这些 IDE（**集成开发环境**） 中，写完代码就可以 F5 直接运行了。但是在 Vim 这样的**代码编辑器** 中，直接写代码，然后敲出 gcc 编译无疑一件是痛苦的事 (没有代码补全、必须手动输入空格和回车以维持良好的代码风格、手动写 makefile 编译等)。

当然，配置一定的插件可以将 Vim 改造为一个简单的 IDE，但 Vim 的配置并没有那么简单，并且缺失一个好的 GUI 界面。

微软的 vscode 横空出现解决了这一难题。

## 什么是 vscode

vscode 是一款跨平台的**代码编辑器**，windows、linux、macos 下都可以安装，并且使用方法类似。vscode 提供了丰富的插件，且安装方非常简单（一键安装），这样你就可以搭建支持大量语言（c/c++、Java、python、markdown、latex 等）的轻量级 IDE 了。

## linux 下安装 vscode

从微软官网下载对应的 Linux 系统 vscode 安装包，在 ubuntu 中 ，下载完后，就可以用 dpkg 命令来安装了。(貌似 vscode 现在不提供 32 位 linux 系统的版本了，或许可以从网上下载之前的 32 位版本安装?)

## 安装 vscode 插件

Vscode 应用商店中有很多插件。对于写 C++代码，首先需要安装 C/C++插件。可以安装 C/C++ Project Generator 或者 Easy C++ Project 这种类型的插件，它能够帮你自动编写 makefile、建立含有 src、bin 和 include 文件夹的项目目录，你就可以写完代码后愉快地按下 run 或者 debug 就开始运行了。具体的插件安装和配置网上都有很多教程，大家可以主动搜索资料(~~其实是我太懒~~)。

## Vscode + ssh 远程开发

既然 vscode 这么好用，且我们已经可以通过 ssh 远程登录了，那能不能用本地的 vscode 编辑服务器端的内容呢？

答案是可以的。通过插件 `Remote - SSH`，可以直接从 vscode 连接到服务器进行工作。同样的，在 windows 上配置好 WSL，或是在 windows 或 macos 系统中安装好 Linux 虚拟机或 docker container，配置好 ssh，就可以在通过原系统里的 vscode 进行工作了。

具体怎么操作？还没来得及写，想实现的话上网搜索吧
