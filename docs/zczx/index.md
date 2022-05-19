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

### 1.1.3 路由跳转

```
this.$mRouter.push({route:this.$mRoutesConfig.main,query:{a:1}})
```

### 1.1.4 两行三列电表

```
<view class="lessee-bottom flex-row">
					<view class="flex-col flex-1 align-center justify-between">
						<view class="item-detail">
							{{lesseeInfo.monthBillDate}}
						</view>
						<view class="item">
							每月账单日
						</view>
					</view>
					<view class="flex-col flex-1 align-center justify-between">
						<view class="item-detail">
							{{lesseeInfo.ammeterStart}}
						</view>
						<view class="item">
							电表起始码
						</view>
					</view>
					<view class="flex-col flex-1 align-center justify-between">
						<view class="item-detail">
							{{lesseeInfo.waterStart}}
						</view>
						<view class="item">
							水表起始码
						</view>
					</view>
				</view>
```

```
// 租户信息板块
				lesseeInfo:{
					avatar:this.$mAssetsPath.lesseeInfoAvatar,
					name: '当代MOMA·历峰',
					date:'2022-01-01至2023-01-10',
					monthBillDate:"30646",
					ammeterStart:'59088.00',
					waterStart:'59088.00'

				}
```

```
.lessee-bottom{
margin: 78rpx 30rpx 0 30rpx;
width: 642rpx;
height: 92rpx;
}

.lessee-item {
font-size: 26rpx;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #6A4125;
line-height: 36rpx;
}

.lessee-item-detail {
font-size: 40rpx;
font-family: DINAlternate-Bold, DINAlternate;
font-weight: bold;
color: #6A4125;
line-height: 48rpx;
}
```
