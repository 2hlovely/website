Copy from [Hugo Research Group Theme](https://github.com/HugoBlox/hugo-blox-builder)

详细教程看[文档](https://docs.hugoblox.com)，可能需要翻墙

#### 安装环境
#### Windows

```bat
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
iwr -useb get.scoop.sh | iex
```
```bat
scoop install git go hugo-extended nodejs
```
##### Mac

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

brew update && brew upgrade

brew install git golang hugo node

export PATH=$PATH:/usr/local/go/bin

```


#### 编辑

直接编辑 content 文件夹内容,下列内容 可以在 example 分支查看对应例子，主分支包含不全。


<!-- -  alumni  毕业生目录，无需修改 -->
-  authors 作者目录所有人员都在此为维护，快捷创建命令为 
```bash
hugo new content/authors/firstname-lastname
```
- contact 联系页面 编辑 contact.md 文件控制显示
- course 课程信息，可以放一些老师们的开课信息，没有快捷创建命令，可以参考例子
- event 活动页面 团队组内活动，快捷创建命令为
```bash
hugo new --kind event content/event/<name>
```
- people 成员目录管理，可以控制团队成员页面显示哪些类别的成员
- post 新闻内容，快捷创建命令
```
hugo new --kind post content/post/<title>
```

- project 项目内容管理， 项目是一系列 publication、 event等集合
```
hugo new --kind project content/project/<title>

```
- publication 出版物管理
```
hugo new --kind publication content/publication/<title>
```
- slides 幻灯片管理

```
hugo new --kind slide content/slides/<title>
```