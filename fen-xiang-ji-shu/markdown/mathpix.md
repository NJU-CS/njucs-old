# Mathpix+Markdown记录公式

Mathpix Mathpix是一款跨平台（Windows、macOS、Linux）的 OCR 工具，它能够识别复杂的数学公式，并将其转换为 LaTeX 语法。

当写课程笔记时，常常有大量公式需要记录。如果每个公式都要手敲的话，将要浪费大量时间，而Mathpix可以完美解决这个问题。只需要截图你需要记录的公式，几秒后Mathpix就可以将对应的Latex表达式复制到你的剪贴板，这时你就可以直接粘贴到md文件或者tex文件里面。下图是一个示例。

![Mathpix示例](https://kangkang-picbed.oss-cn-hangzhou.aliyuncs.com/img/share_skills/mathpix.gif)



## Mathpix下载

在[Mathpix官网](https://mathpix.com)下载安装包，之后傻瓜式安装就行，不再详细介绍。

## Mathpix增加使用次数

虽然Mathpix具有强大的识别公式的功能，但每个账户每月只能免费识别十次，即使使用教育邮箱注册也只有100次。这远远满足不了我们的使用需求。

一种办法便就是上万能的某宝或者某鱼，购买Mathpix账号以增加使用次数。

一种办法就是调用Mathpix api。Mathpix官方提供了公式识别的API给用户调用。每个账户每个月的前 1000 次调用免费；随后的第 1-100 千次，每次 0.004 美元；第 100- 300 千次，每次 0.002 美元。这样每个月就有1000次的免费识别公式的机会，已经可以满足大部分的需求。

另外，网上已经有很多项目将 Mathpix API封装为一个程序，这里简单介绍两个。

### MathpixCSharp

官网：https://itewqq.cn/mathpixcsharp-opensource-windows-client/

项目地址：https://github.com/itewqq/MathpixCsharp

说明：需要自己申请Mathpix api，每月免费识别公式次数1000次。然而申请API需要Visa卡，感兴趣的同学可以去银行申请一个，也不是特别麻烦。

### MathF

是一个人用爱发电的项目，可以不用申请Mathpix api即可使用。但好像已经挂掉了。。。

## PDF电子书的获取

Mathpix虽然也可以识别手写公式，但准确率并不如识别电子公式高。

当你做课程笔记时，电子公式可以从老师课件里面获取，但有时并不全。拍照教材上的公式再识别又过于麻烦。所以推荐对电子书上的公式进行识别。

电子书有以下获取渠道：

1. [南大计科共享资源计划](https://box.nju.edu.cn/d/ef8c112b1dfa422cb930/)：分享了学长学姐们的学习资料，包括课程笔记，往年卷，课件等，当然还有电子教材。
2. [鸠摩搜书](https://www.jiumosearch.com/)：是一个电子书搜索引擎，可以来快速的搜索到自己想要的电子书教材。
3. [Zlibrary](https://zh.z-lib.org/)：是世界上最大的电子书图书馆，你想要的电子书几乎都可以在这里找到。

