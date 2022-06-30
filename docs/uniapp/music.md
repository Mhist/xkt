# 开发音乐小程序遇到的问题

## 1.z-index 在微信小程序端的问题

![实际运行中的效果图](https://files.catbox.moe/rxgz3f.png)

原因及解决方案：同级的需要添加定位属性
参考链接：[小程序 z-index 层级问题 view 组件坑，z-index 失效](https://blog.csdn.net/qq_32858649/article/details/82735649)

## 2.设置 margin： 0 auto；与 margin-top 的冲突问题

![设置 margin： 0 auto；与 margin-top 的冲突问题](https://files.catbox.moe/5hcrdc.png)

这种情况是需要设置宽度的。
![设置宽度后](https://files.catbox.moe/6n6pbc.png)

## 3.小程序元素绝对定位，未给较高层级的 z-index 属性，会造成点击失效的问题

设置较高的 z-index 即可
