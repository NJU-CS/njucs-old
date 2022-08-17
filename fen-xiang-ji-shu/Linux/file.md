# 文件操作

现在，我们将在自己的工程目录下继续探索。本项目的工程目录为 `~/guide`

## 创建文件

使用 `touch` 命令创建文件

```bash
$ touch helloword.cpp
```

执行 `ls` 命令, 可以看到刚才新建的文件

```bash
$ ls
touch
```

## 复制文件

使用 `cp` 命令复制文件 (copy)，其中第一个参数为已经存在的文件，第二个参数为复制出来的文件的文件名或路径。

```bash
$ cp helloworld.cpp hiworld.cpp
# Same to: cp helloworld.cpp ./hiworld.cpp
$ mkdir folder
$ cp helloworld.cpp folder/another_world.cpp
```

## 移动和重命名文件

使用 `mv` 命令移动文件 (move)

```bash
$ mv hiworld.cpp tmp
# same to: mv hiworld folder/hiworld.cpp
```

运行 `tree` 命令查看结果

![tree 结果](https://tsunaou.github.io/linux_guide/images/3.png)

可以注意到，`hiworld.cpp` 被移动到目录 `folder` 中了。

实际上，`mv`命令的功能不只是移动，它还可以重命名。按照某些命名规范，`helloworld.cpp` 这个文件其实是不规范的，因为把单词连起来不利于阅读，我们可以使用`mv`命令对其重命名

```bash
$ mv helloworld.cpp hello_world.cpp
```

再次运行，会发现`helloworld.cpp`不见了，取而代之的是`hello_world.cpp`。

那么有小伙伴们可能会问了，Linux 下命令那么多，我哪里知道`mv`还有这种用法啊（等到大二上的 PA 会告诉你 STFM(~~Search The Fucking Manual~~)）。其实 linux 下还有个很有用的功能，叫做`man`（manual）

```bash
$ man mv
```

可以看到如下结果。只要能看到英文，很多时候一些命令的用法就会无师自通，是一个很强的工具。键入`q`即可退出。

![](https://tsunaou.github.io/linux_guide/images/4.png)

## 删除文件

实际上，`mv` 和 `cp` 以及接下来要提到的 `rm` 命令，不止可以针对文件，也可以针对目录。

删除之前，我们首先复制一下`folder`文件夹，然后就会发现系统报错 QAQ(~~不报点错还真的对不起秃掉的头~~)

```bash
$ cp folder folder_bak
cp: -r not specified; omitting directory 'folder'
```

这个报错的意思其实是说，要加上 `-r` 参数(Recursive)。什么意思呢？查阅手册

```bash
man cp
```

可以看到其实就是递归（~~递归可不止应用在汉诺塔和斐波那契~~）复制的意思。

![mv 手册](https://tsunaou.github.io/linux_guide/images/5.png)

于是输入如下命令，即可成功复制，然后就可以愉快地删除了。

```bash
cp -r folder folder_bak
```

使用 `rm` 命令删除文件, 输入 `y` 后回车确认删除

```bash
rm folder/hiworld.cpp
```

使用 `tree` 或者 `ls` 命令，可以看到`rm folder/hiworld.cpp`的确已经被删了。接下来我们大胆些，删除`fold_bak`目录，你可以尝试自己寻找合适的指令。

```bash
rm -rf folder
# -f: 不询问直接删除
```

> [!Danger|style:flat|label:"rm -rf"]
>
> - `rm -rf` 是个危险的指令！加上 `-f` 后，获得了省去了确认的便利，但是一旦选错目标，后果不堪设想！`rm` 命令删除的文件不能在回收站找回，一旦错删文件，后悔莫及！而 `rm -rf /` 更是传说中的“删库跑路”指令。
>
> - 这提醒我们
> 	1. 谨慎使用 `rm -f`，删除前确认删除文件/文件夹正确
> 	2. 做好重要文件备份以免丢失
>   3. 做好用户权限管理，以免删除重要系统文件
>   4. 使用安全的删除操作，比如移动到回收站，或使用 [trash-cli](https://www.ostechnix.com/trash-cli-command-line-trashcan-unix-like-systems/) 等删除工具
