# Vim

在这里首先要介绍是一个强大的编辑器：**_vim_**，传说中的**编辑器之神**，与 Emacs, **其他编辑器**三分天下

对于 **vim**，很多人都经历了『从入门到放弃』的痛苦过程（~~俺也一样~~）。不过这个编辑器之后将一直伴随我们的学习、工作生涯的。这里我首先介绍下一些简单的操作（~~毕竟很多人第一次用甚至都不会退出~~），再列举了一些学习流程和学习资料

## 打开并编辑

```bash
vim hello_world.cpp
```

你会发现什么都做不了，甚至都退出不了，可以摸索下。

按下`i`键，发现窗口左下角出现了`-- INSERT --`，表示进入了插入模式，这时候也就可以编辑了。我们可以写一个 C++的 hello world。

```c++
#include <iostream>
using namespace std;

int main(){
    cout << "Hello World" << endl;
    return 0;
}
```

如果你是 `Tab` 键缩进选手，你会发现此时的 `Tab` 缩进不是 4 个空格，这个细节日后可能会让你在 windows 下移植到 linux 的代码变得你不认识的样子。同时，如果你试图用 Visual Studio 编辑，然后放到 linux 下，可能还会遇到 GBK 和 utf-8 编码的问题。不用惊慌，这些问题都有人已经遇到过，也给出了解决方法。同学们如果在网上找不到解决方案，也可以在 Issue 中提出。

## 保存并退出

言归正传，写完程序后怎么保存呢？同样是按下 `q`，退出插入模式，键入 `:x` 即可保存并退出。如果没有进行编辑，可以用 `:q` 退出。若要放弃编辑的内容，可以用 `:q!`。

## 查看文件内容

保存完后，可以使用 cat 命令查看 `hello_world.cpp` 文件内容 (catenate)

```bash
cat hello_world.cpp
```

![查看文件内容](https://tsunaou.github.io/linux_guide/images/6.png)

可以看到 hello world 的程序编写完毕。

## Vim 的学习流程

为了掌握 Vim，我们需要掌握

- Vim 的基本编辑
- Vim 的高级编辑（如自定义配置文件）
- Vim 的扩展使用（如插件使用）

首先，ICS 课程中专门介绍了关于 Vim 的使用：[Configuring vim](https://nju-projectn.github.io/ics-pa-gitbook/ics2019/0.4.html)。该介绍较为笼统，作为一个引子希望同学们在网上能够自己寻找 Vim 的教程学习。

为了熟悉 Vim 的基本操作，我们可以选择交互式的教材。

- vimtutor: 在终端中输入

  ```bash
  $ vimtutor
  ```

  发现进入了一个教程页面。原来 Vim 也知道大家上手难，特地准备了一个供大家学习的工具。

- [openvim.com](https://www.openvim.com/): 在线模拟 vim 交互学习
- [Command List](https://catswhocode.com/vim-commands/): 不熟练 vim 时经常会忘记命令。可以保持一份命令列表供经常查询。

> [!Note|style:flat|label:缓一缓]
>
> 当熟悉上面的操作后，可以等多写一些代码熟练 Vim 后再往下学习，这样可以事半功倍

Vim 的高级操作，当大家熟悉 Vim 了以后，可以在网上寻找到许多人关于 Vim 高级操作的分享。举例言之

- [注释多行代码](https://blog.csdn.net/xiajun07061225/article/details/8488210)
- [一键编译运行](https://blog.csdn.net/controlfate/article/details/7617563)
- [配置文件入门](https://www.ruanyifeng.com/blog/2018/09/vimrc.html)

许多 Linux 系统中预装了 vi 命令，一个简化的 vim。功能虽然不如 vim 全，但使用方法一样。目前较流行的 Vim 版本有

- [vim-8](https://www.vim.org/)：原版 vim，目前到第八版
- [neovim](https://github.com/neovim/neovim)：新的开源的 vim fork 版本，更新频繁，倒逼原版 vim 更新
- [macvim](https://github.com/macvim-dev/macvim)：macos 系统带 GUI 的 vim

同时，也有许多 vim 的一站式配置解决方案

- [amix/vimrc](https://github.com/amix/vimrc)
- [spf13](https://github.com/spf13/spf13-vim)

大家可以通过这些项目了解好的 Vim 插件，并通过阅读插件的 Readme 学习插件的使用。
