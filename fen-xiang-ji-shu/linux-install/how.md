# How

这里描述真机安装kubuntu的方法。

## 安装

下面的步骤可以配合网上的其他教程一起食用，它们有图片更直观；如有冲突，以下面的为准。

1. 从上述官网上下载安装包，推荐下载LTS版本；

2. 准备一块空的 4GB+ U盘，使用 UltraISO 将刚刚下载的ISO文件烧录进去，制作成启动U盘（可以自行上网搜索如何使用UltraISO制作启动U盘；UltraISO是付费软件，有开源替代可以尝试）；

3. 在Windows系统分区所在硬盘上分出50~100GB空闲空间（Windows操作方式：Win徽标+X打开磁盘管理，找到一个有空闲空间的分区，右击分区-压缩卷），然后放着，无需格式化和建立新分区；

4. 插上U盘重启，进入BIOS，从U盘启动；

5. 点击Install，选择 minimal install, custom install，注意语言尽量选English，进入分区界面；

6. 这一步比较重要，不要搞错了——对第3步分出来的空闲空间建立新分区，格式选择 ext4，mount point 选择 /；找到唯一的EFI分区，将其标号填入最下面的 bootloader 安装位置中；如果其他教程还要你单独分出 /home，直接无视；

7. 按照提示一直点下一步就行了，完成后重启，能看到选择OS的界面就算成功。

## 配置

安装完成后，推荐进行下面的配置（每一项都可以单独找到一篇网上的教程）：

- 如果有Nvidia独显，需要安装显卡驱动：打开 additional drivers，选择Nvidia私有驱动；

- 安装中文输入法：推荐搜狗；

- 打开 system-settings 一通乱调，怎么舒服怎么来；

- 最后，如果你对颜值有要求，可以做一下美化，毕竟颜值是第一生产力（超大声）：
  
  - kde plasma 个性化：theme, icon, 各种 widgets 都可以在网上找到
  
  - 终端模拟器 konsole 的配色和透明度设置

附上我自己最终的效果图：

![](https://cdn.jsdelivr.net/gh/starreeze123/blogimage@main/tech--linux-install--my.jpg)

## 第三方软件推荐

几个开源软件：

- grub-customizer：自定义选择操作系统的界面和逻辑；

- tilda：下拉式终端，方便又美观；

- fish：交互式 shell，比 bash 好用多了；

- thefuck：自动纠正命令错误；

- tlp：先进的电源管理模块，可以显著提升笔记本续航，能够比Windows 更持久；

- vscode：最强代码编辑器，谁用谁知道；

- wine：高效运行windows程序的兼容层；

- uengine/anbox：高效运行android程序的兼容层；

- 星火应用商店 (spark store)：提供了大量国产软件的适配和移植。

最后，一些国产软件也提供了Linux版本（星火应用商店里面都有，可直接安装）：

- QQ：[QQ Linux版-新不止步·乐不设限](https://im.qq.com/linuxqq/index.shtml)

- 微信：有UOS版，适配得不是很完美，可以考虑用wine

- 腾讯会议：[下载中心-腾讯会议 (tencent.com)](https://meeting.tencent.com/download/)

- WPS：[WPS Office 2019 for Linux-支持多版本下载_WPS官方网站](https://www.wps.cn/product/wpslinux)

## 总结

就我个人来说，Linux 真机环境已经用了近3年了，基本没出过什么问题，无广告无更新长续航真香。现在，我打开Windows的唯一用途就是打游戏了（*A computer is like air conditioning* 还真没说错）。

推荐尝试一下。
