# 包管理器换源

新手刚接触Linux时一定会对诸如 `apt`、 `yum` 一类的包管理器赞不绝口：只需要一个命令就可以解决繁琐的软件依赖和系统路径等问题，同时也会为默认软件源令人窒息的速度而痛苦不已。好在国内很多机构对官方源做了镜像，切换到这些镜像源就可以大大提升包管理器的下载速度。下面以 `Ubuntu` 为例介绍为包管理器换源的方法。

## 图形界面配置

在 `系统设置 -> 软件和更新 -> 选择下载服务器`手动选择列出的镜像源。也可以点击 `自动选择`，系统会自动运行测试并选择最快的源。

## 手动更改

这里不建议直接百度/谷歌“Ubuntu如何更换软件源”，因为不同发行版、不同版本号使用的源可能并不相同，盲目换源可能会造成一些兼容性问题，而搜索引擎直接检索到的教程发布时间可能比较久远，因此不一定适合你。

比较推荐的办法是访问国内主流的镜像站官网，阅读它们的使用说明，根据你的发行版和版本号选择不同的源。这里列举一些国内常用的镜像站：

+ [阿里巴巴开源镜像站](https://developer.aliyun.com/mirror/ubuntu?spm=a2c6h.13651102.0.0.3e221b11VgD6SZ)
+ [清华大学开源镜像站](https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/)
+ [上海交通大学Linux用户组软件源镜像服务](https://mirrors.sjtug.sjtu.edu.cn/docs/ubuntu)

## 使用脚本换源

对于非图形界面的系统，可以利用开源脚本自动选择最快的源并一键更换。

### 安装和使用

安装脚本：

```shell
pip install apt-select
```

自动选择源（国家选项以中国为例）：

```shell
apt-select --country CN
```

测试完成后将在当前目录下生成一个 `sources.list` 文件，其中存有当前环境下最快的源的信息。

备份原先的软件源列表并替换为新的列表：

```shell
sudo cp /etc/apt/sources.list /etc/apt/sources.list.backup && \
sudo mv sources.list /etc/apt/
```

更多信息见该项目[主页](https://github.com/jblakeman/apt-select)。

### 更新软件源信息和所有软件

更新软件源：

```shell
apt update
```

更新所有软件：

```shell
apt upgrade
```

注意：如果你的系统镜像比较老，该操作可能需要很久。如果不想等待可以暂时跳过该步骤。

## 总结

以上是 `Ubuntu` 系统的换源方法。如果你使用的是其他发行版，相信你看了以上教程后可以举一反三。