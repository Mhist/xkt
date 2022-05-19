# 众采在线

# 2022-05-09 入职

1. 蓝湖： 18827637106@163.com
2. 项目：uniapp

# 东楚物管小程序

## 1.1 常用代码片段

### 1.1.1 微信分享

export default 内

```
// #ifdef MP-WEIXIN
		onShareAppMessage(){
			return {
				from:"menu"
			}
		},
		onShareTimeline(){},
		// #endif
```

### 1.1.2 定义及引用图片

config 下 assets.config.js 内配置

```
 indexHeadLogo:  PATH + '/img/index/fixed-logo.png',
```

在页面 data 属性中定义

```
indexHeadLogo:  this.$mAssetsPath.indexHeadLogo,
```

通过动态绑定在页面中引用
