# Makefile

有了上面的知识，其实你已经可以在 linux 下运行你大一写的绝大多数程序了（单文件）。但是这学期的程设实验怎么可能只写一个文件呢（~~也许大佬可以 Orz~~）。如果要编译一个复杂的项目，输入太多命令显然很麻烦，因此就有了 makefile 的诞生。

在 makefile 中定义很多程序编译规则，在终端命令行下敲击一个 make 命令，这时 make 程序，会跑到当前目录下找寻 makefile 文件，按照 makefile 中已经规划好的编译顺序和规则，完成整个项目的编译。

## 编写 makefile

```makefile
目标对象名称：依赖对象名称
【Tab键】 为了生成对象所执行的命令
```

比如我们可以对刚刚的 hello world 编写一个 makefile。

```makefile
main: hello_world.cpp
        g++ hello_world.cpp -o hello
```

## 运行 makefile

保存后，在命令行运行

```bash
make
```

可以看到 makefile 实际上将刚刚手动的命令又执行了一遍，生成了可执行文件`hello`。

学会使用 makefile 对于你项目的编译和构建是很有帮助的。
