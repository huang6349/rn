学习配置环境和初始化项目
===

Install
-------
[安装依赖]

```bash
$ npm install -g yarn react-native-cli
```

Init
-------
[初始化]

```bash
$ react-native init 项目名称
```

Reload from git clone
-------
[git clone 下来的项目重新安装依赖]

```bash
$ yarn install
```

Run
-------
[运行]

```bash
$ react-native run-android | react-native run-ios
```

running on device
-------
[在设备上运行]

* 首先确保你的电脑和手机设备在同一个Wi-Fi环境下。
* 在设备上运行你的React Native应用。和打开其它App一样操作。
* 你应该会看到一个“红屏”错误提示。这是正常的，下面的步骤会解决这个报错。
* 摇晃设备，或者运行adb shell input keyevent 82，可以打开开发者菜单。
* 点击进入Dev Settings。
* 点击Debug server host for device。
* 输入你电脑的IP地址和端口号（譬如10.0.1.1:8081）。在Mac上，你可以在系统设置/网络里找查询你的IP地址。在Windows上，打开命令提示符并输入ipconfig来查询你的IP地址。在Linux上你可以在终端中输入ifconfig来查询你的IP地址。
* 回到开发者菜单然后选择Reload JS。

Links
-------
[相关教程文章链接]

* [搭建开发环境](http://reactnative.cn/docs/0.42/getting-started.html)
