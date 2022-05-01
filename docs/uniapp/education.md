# uni-app 实战在线教育类 app 开发

## 解压密码：9471fbc17998c49c1380d3457ed01cb1

## 编号：1126 微信 itspcool [资源](https://www.ukoou.com/fetch_zip_passwd/create)

## [api 文档](http://dishaxy.dishait.cn/doc_uniappedu#001)

## 项目总览图

![uniap在线教育实战课程 ](https://www.uniapper.com/wp-content/uploads/2021/10/076b9318be594246829df6b39e5243a3.webp)

## 1.项目目录搭建

### 1.1 基于 uniapp-uni 基本结构搭建

### 1.2 引入 animate.css 动画库

- [animate css 动画库](https://animate.style/)
- 使用方式：
  1. `npm install animate.css --save`
  2. 在 App.vue 文件中引入 ` @import 'animate.css';`
  3. 在 dom 元素中添加对应的类名，以此为例 `<view class="main-bg-color animate__animated animate__bounce">123</view>`

### 1.3 引入 自定义图标库

- [自定义图标 css 动画库](https://www.iconfont.cn/)
- 使用方式：

  1. 在网站上选择需要的图标后加入购物车，最后汇总到项目中，采用 font-class 方式下载到本地，解压缩下载的文件夹，只保留 `iconfont.css`,`iconfont.ttf`
  2. 将上述文件放置于 common 文件夹下，并修改`iconfont.css`引入`iconfont.ttf`的路径
  3. 在 APP.vue 文件中引入`common`文件夹下的`iconfont.css`的文件即可
  4. 在具体 DOM 元素中的使用，例如：`<text class="iconfont icon-shouye" style="width: 200px;height: 200px;">123</text>` 需要带上<b>iconfont</b>前缀

### 1.4 底部 tab 栏图标（81\*81）

注意：path 不需要加'/'代表根路径，直接 pages 开头即可，不然会出现显示正常，但是无法切换路由及页面的情况

```
{
	"pages": [{
		"path": "pages/tabbar/index/index",
		"style": {

		}
	}    ,{
            "path" : "pages/tabbar/study/study",
            "style" :
            {
                "navigationBarTitleText": "学习",
                "enablePullDownRefresh": false
            }

        }
        ,{
            "path" : "pages/tabbar/mine/mine",
            "style" :
            {
                "navigationBarTitleText": "我的",
                "enablePullDownRefresh": false
            }

        }
    ],
	"globalStyle": {
		"navigationBarTextStyle": "black",
		"navigationBarTitleText": "uniapp在线教育",
		"navigationBarBackgroundColor": "#F8F8F8",
		"backgroundColor": "#F8F8F8",
		"app-plus": {
			"background": "#efeff4"
		}
	},
	"tabBar": {
		"color": "#7A7775",
		"selectedColor": "#3cc51f",
		"borderStyle": "black",
		"backgroundColor": "#ffffff",
		"list": [{
			"pagePath": "pages/tabbar/index/index",
			"iconPath": "static/tabbar/home.png",
			"selectedIconPath": "static/tabbar/homeSel.png",
			"text": "首页"
		}, {
			"pagePath": "pages/tabbar/study/study",
			"iconPath": "static/tabbar/study.png",
			"selectedIconPath": "static/tabbar/studySel.png",
			"text": "学习"
		},
		{
			"pagePath": "pages/tabbar/mine/mine",
			"iconPath": "static/tabbar/mine.png",
			"selectedIconPath": "static/tabbar/mineSel.png",
			"text": "我的"
		}]
	}

}

```

### 1.5 分割线组件，通过 prop 设置样式

[Vue 系列： 如何通过组件的属性 props 设置样式](https://www.cnblogs.com/strinkbug/p/5768871.html)

```
<template>
	<view>
		<view class="line" :style="{width: '100%', height: Height + 'rpx'}">

		</view>
	</view>
</template>

<script>
	export default {
		name:"devide-line",
		data() {
			return {

			};
		},
		props:{
			Height:String
		}
	}
</script>

<style>
.line {
	width: 100%;

	background-color: #dddddd;
}
</style>
```

使用组件

```
<devide-line :Height='height'></devide-line>
<script>
	export default {
		data() {
			return {
				height:'30',
			}
		},

	}
</script>
```

### 1.6 课程列表

价格下划线样式

```
text-decoration: line-through;
```

## 2.登录功能

### 2.1 绑定手机号

```
// setTimeout(()=>{
						//    uni.redirectTo({
						//    	url:'../tabbar/mine/mine'
						//    })
						// },1500)
						setTimeout(()=>{
							uni.switchTab({
								url:'../tabbar/mine/mine'
							})
						},1500)
```

对于跳转到 tabbar 下的页面，跳转需要 SwitchTab

### 2.2 过滤器过滤 html 标签

```
filters:{
			formatType(k) {
				return opt[k];
			},
			formatDesc(k){
				return k.replace(/<[^>]+>/g, '');
			}
		}
```
