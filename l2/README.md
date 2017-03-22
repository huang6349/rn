RN调用原生方法 - Android版
===

* 用 Android studio 打开项目，选择项目目录下的android\build.gradle文件

* 创建一个类并继承ReactContextBaseJavaModule，我们需要在这个类中编写我们的原生方法

* 创建一个类并实现ReactPackage，我们需要将我们的原生方法注册到NativeModule列表中

* 在MainApplication中注册我们自己定义的ReactPackage类

* 在RN中调用原生模块
