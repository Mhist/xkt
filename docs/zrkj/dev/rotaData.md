# 薪e福(人事管理)

##  需求描述

	| 优先级     | 需求名 	| 描述      | 提测计划 |

   ```
    * 3-高     
    * 人事管理数据统计需求(企业侧)  
    * 企业人事管理中的人事信息统计
    * 开发周期 7.11-7.15(周五并完成自测) 7.18周一提测sit 7.21周四发布uat  最迟7.29发布生产 
   ```

   ```
    * 3-高     
    * 人事管理数据统计需求(银行侧)  
    * 企业人事管理中的人事信息统计
    * 开发周期 7.18-7.21(周五并完成自测) 7.21周一提测sit 7.28周四发布uat  最迟7.29发布生产 
   ```



##  相关问题
 - 流程：[基于研发流程pdf](http://119.91.213.59:8888/down/rtsgP4YPtnXS) 
 - UE测试流程对接： UE评审 已经评审完了              
 - UI地址及查看权限：薪e福-人事管理-数据统计   UI现在还没有 我们前端需要先开发整体功能 后面细调UI 
 - 开发分支名： 基于xxt分支，分支名或分支名要求  分支名字 xxt-2


 ## 2022/07/11 UE评审会
 - 饼图的相关定义，默认按照现在详细分类
 - 增长率：可能会有超过100%，负值的情况，以及月末，当前日期为基准计算增长率的歧义问题，（UE端负责人与人事沟通需求，最迟2022/07/22给出结果）基于100% 五等份的问题，涉及数据量过大或过小的问题，以常规~echarts4.9.0处理路基为准，涉及双y轴的问题
 - 感叹号图标的说明文字：以详细还是完整计算规则描述，代码结构需要可配置
 - 银行侧：企业列表---企业---具体企业的人事数据统计（等UE,预计最晚今日下午出来）

 ## 代码规范

 - 公司内部规范指南：https://bizmatesit.sinosun.com:17380/bizmate/static/docs/platform/index.html#/./sinosun-ui/standard
 - css命名 ：[BFM命名](https://juejin.cn/post/6844903672162304013)
 - JS功能代码注释：
 - vscode代码片段：用户名，时间等信息(文件头部注释举例如下)
   

::: warning

/** @Author       : licheng
* @Description  : 
* @Date         : 2021-06-09 14:52:23
* @LastEditors  : licheng
* @LastEditTime : 2021-06-16 23:25:51
* @FilePath     : \payslipmgr\src\views\payslip\store\index.js*/

:::

## 参考考勤项目的代码（暂存）
```
<!--
 * @Autor: dingfeng
 * @Description: 按天考勤统计
 * @FilePath: \attendance\src\pages\attendance\components\managedaily\index.vue
-->
<template>
	<div class="page-mangedaily">
		<!--list-->
		<div class="list">
			<div class="flex-filter-con">
				<div class="flex-daily">
					<div class="select-day-con" @click="onDateTimeClick">
						<span class="select-day">
							<SnDatetimePicker
								ref="DateTimePicker"
								v-model="selectDay"
								placeholder="--/--/--"
								@change="onChange"
							/>
						</span>
						<SnIcon type="down" />
					</div>
				</div>
				<span v-if="!isPC" class="atten_url" @click="opendetail"
					>打卡明细</span
				>
			</div>
			<div class="item-content">
				<div class="loading-con" v-show="loadingFlag">
					<SnLoading
						:spinning="true"
						:turn="true"
						size="default"
						tip="数据加载中..."
					/>
				</div>
				<div class="item-con" v-if="!loadingFlag">
					<div class="circle-con">
						<div class="circle circle-pc" v-if="isPC">
							<div
								class="chart-container"
								ref="chartContainer"
							></div>
							<div class="circleContent">
								<div class="atten_count">
									<countup
										:start-val="0"
										:end-val="attendByDayData.clockNum || 0"
									>
									</countup>
									<span class="attend-number"
										>/{{
											attendByDayData.attUserNum || 0
										}}</span
									>
								</div>
								<div class="person">
									<span class="atten_detail"
										>打卡人数/应打卡人数</span
									>
								</div>
								<div class="go-detail">
									<span
										class="atten_url-1"
										@click="opendetail"
										>打卡明细</span
									>
								</div>
							</div>
						</div>
						<div class="circle circle-app" v-else>
							<div
								class="chart-container"
								ref="chartContainer"
							></div>
							<div class="circleContent">
								<div class="atten_count">
									<countup
										:start-val="0"
										:end-val="attendByDayData.clockNum || 0"
									>
									</countup>
									<span class="attend-number"
										>/{{
											attendByDayData.attUserNum || 0
										}}</span
									>
								</div>
								<div class="person">
									<span class="atten_detail"
										>打卡人数/应打卡人数</span
									>
								</div>
							</div>
						</div>
					</div>

					<div
						class="attend-statistic-con"
						v-if="attendByDayData.attStatisticsInfoList"
					>
						<div v-if="!today" class="attend-statistic-other">
							<div class="flexbox">
								<div
									class="flexbox-item"
									v-for="(i,
									index) in attendByDayData.attStatisticsInfoList"
									:key="index"
								>
									<div
										v-if="i.type == 4"
										class="state"
										@click="opendailydetail(i)"
									>
										<p
											:class="
												'attentype attentype' + i.type
											"
										>
											{{ i.userNum || 0 }}
										</p>
										<span class="manage-title">{{
											transStatis(i.type)
										}}</span>
									</div>
									<div
										v-if="i.type == 5"
										class="state"
										@click="opendailydetail(i)"
									>
										<p
											:class="
												'attentype attentype' + i.type
											"
										>
											{{ i.userNum || 0 }}
										</p>
										<span class="manage-title">{{
											transStatis(i.type)
										}}</span>
									</div>
									<div
										v-if="i.type == 2"
										class="state"
										@click="opendailydetail(i)"
									>
										<p
											:class="
												'attentype attentype' + i.type
											"
										>
											{{ i.userNum || 0 }}
										</p>
										<span class="manage-title">{{
											transStatis(i.type)
										}}</span>
									</div>
									<div
										v-if="
											i.type == 1 ||
												i.type == 3 ||
												i.type == 6
										"
										class="state"
										@click="opendailydetail(i)"
									>
										<p
											v-if="i.type == 3"
											:class="
												'attentype attentype' + i.type
											"
										>
											<!-- :disabled="true" -->
											<SnPopover
												v-model="attenPopover"
												class="placement-top"
												message="考勤范围外打卡"
												placement="top"
												:closeable="false"
											>
												<span
													class="attentype-number"
													@click.stop="
														attenPopoverClick
													"
												>
													{{ i.userNum || 0 }}
												</span>
											</SnPopover>
										</p>
										<p
											v-else
											:class="
												'attentype attentype' + i.type
											"
										>
											{{ i.userNum || 0 }}
										</p>
										<span class="manage-title">{{
											transStatis(i.type)
										}}</span>
									</div>
								</div>
							</div>
						</div>
						<div v-else class="attend-statistic-today">
							<div class="flexbox">
								<div
									class="flexbox-item"
									v-for="(i,
									index) in attendByDayData.attStatisticsInfoList"
									:key="index"
								>
									<div
										v-if="i.type == 7"
										class="state"
										@click="opendailydetail(i)"
									>
										<p
											:class="
												'attentype attentype' + i.type
											"
										>
											{{ i.userNum || 0 }}
										</p>
										<span class="manage-title">{{
											transStatis(i.type)
										}}</span>
									</div>
									<div
										v-if="i.type == 4"
										class="state"
										@click="opendailydetail(i)"
									>
										<p
											:class="
												'attentype attentype' + i.type
											"
										>
											{{ i.userNum || 0 }}
										</p>
										<span class="manage-title">{{
											transStatis(i.type)
										}}</span>
									</div>
									<div
										v-if="i.type == 6 || i.type == 3"
										class="state"
										@click="opendailydetail(i)"
									>
										<p
											v-if="i.type == 3"
											:class="
												'attentype attentype' + i.type
											"
										>
											<!-- :disabled="true" -->
											<SnPopover
												v-model="attenPopover"
												class="placement-top"
												message="考勤范围外打卡"
												placement="top"
												:closeable="false"
											>
												<span
													class="attentype-number"
													@click.stop="
														attenPopoverClick
													"
												>
													{{ i.userNum || 0 }}
												</span>
											</SnPopover>
										</p>
										<p
											v-else
											:class="
												'attentype attentype' + i.type
											"
										>
											{{ i.userNum || 0 }}
										</p>
										<span class="manage-title">{{
											transStatis(i.type)
										}}</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<SnListItem
						class="mangedaily-tips-item"
						value-class="text-center"
						:border="false"
					>
						<span class="text-tip"
							>同一个人可能存在多个考勤状态</span
						>
					</SnListItem>
					<div class="day-tips-item">
						<span class="text-tip"
							>日统计不计算没有考勤组的人员</span
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import "./index.less";
import common from "@/pages/common/common";
import ClockMgrService from "@/service/ClockMgr";
import Countup from "@/comp/Countup/Countup.vue";
import {
	isPC,
	getCssVarValue,
	getStorage,
	setStorage
} from "@/utils/commonUtil";
import {
	SnToast,
	SnPopover,
	SnListItem,
	SnLoading,
	SnDatetimePicker,
	SnIcon
} from "sinosun-ui";

// 引入 ECharts 主模块
import echarts from "echarts";

import { imgBase64Map } from "@/utils/imgBase64Map";
const imgBase64MapJson = isPC() ? imgBase64Map[`pc`] : imgBase64Map[`app`];
import baseRouter from "@/baseView/baseRouter";
export default {
	extends: baseRouter,
	components: {
		Countup,
		SnListItem,
		SnLoading,
		SnDatetimePicker,
		SnIcon,
		SnPopover
	},
	data() {
		return {
			isPC: isPC(),
			// 切换路由页面需要重新注册按钮
			exportexcel: {
				name: "导出报表",
				iconNormalBase64: imgBase64MapJson["path_1_6"],
				menuId: "but_1_1",
				type: 2,
				func: () => {
					this.$router.push({
						path: `/exportexcel`
					});
				}
			},
			nativeInfo: {}, //存储APP返回的数据
			netWorkInfo: {}, //网络信息
			locationInfo: {}, //地理位置信息
			selectDay: "", //选择时间控件
			attenStateList: [], //返回的考勤数据
			circleChart: null, // chart对象
			echartsOption: {
				color: [
					getCssVarValue(`chart-color-1`),
					getCssVarValue(`chart-color-2`)
				],
				/* 位置布局 */
				grid: {
					top: "0%",
					left: "0%",
					right: "0%",
					bottom: "0%",
					containLabel: true
				},
				series: [
					{
						type: "pie",
						silent: true,
						legendHoverLink: false,
						hoverAnimation: false,
						label: {
							show: false
						},
						radius: ["90%", "100%"],
						labelLine: {
							show: false
						},
						data: []
					}
				]
			}, // echarts的options数据
			attendByDayData: {}, // 当天考勤组数据
			today: false, // 是否是今天
			multiStateUserNum: 0, //存在多个考勤状态的人数
			loadingFlag: true, // 加载中提示
			attenPopover: false // 气泡显示
		};
	},
	watch: {
		selectDay(val) {
			if (val) {
				this.getGroupAttendInfoByDay();
			}
		}
	},
	created() {
		this.dataInit();
	},
	activated() {
		// 从权限回来需要重新加载数据
		if (this.$route.query.backPermission) {
			this.selectDay = "";
			this.dataInit();
		}
	},
	methods: {
		// 回退
		onBack() {
			// 退出应用
			this.goBack();
		},
		/**
		 * @description: 获取title栏注册按钮
		 * @param {type}
		 */
		getMenuList() {
			return [this.exportexcel];
		},
		// 数据初始化  从APP获取数据
		dataInit() {
			this.getUserInfo();
		},
		// 获取个人信息
		getUserInfo() {
			NativeSupportApi.getCurrentUserInfo().then(result => {
				if (result) {
					result.UAId = result.UAId || result.bizMateId || ``;
					this.nativeInfo = result;
					let attenPopoverStr = `attenDailyPopoverNumber_${result.cpyId}_${result.UAId}`;
					let attenPopoverNumber = getStorage(attenPopoverStr) || 0;
					if (!attenPopoverNumber) {
						this.attenPopover = true;
						setStorage(attenPopoverStr, 1);
					}
					this.setDay();
				}
			});
		},
		// 掉起日历
		onDateTimeClick() {
			this.$refs.DateTimePicker.onClick();
		},
		// 气泡弹框控制
		attenPopoverClick() {
			this.attenPopover = !this.attenPopover;
		},
		// 设置当前日期
		setDay() {
			//返回考勤信息之后设置日期,当前日期前一天
			if (this.$route.query && this.$route.query.selectDay) {
				this.selectDay = this.$route.query.selectDay;
			} else {
				const selectDay = new Date().format("yyyy/MM/dd");
				this.selectDay = selectDay;
				this.selectDayComp = selectDay;
			}
		},
		// 选择日期时间回调
		onChange(val) {
			console.log("selectDay == ", this.selectDay);
			const date = new Date(val);
			const now = new Date();
			if (date.getTime() < now.getTime()) {
				this.selectDay = val;
			} else {
				SnToast("不能选择未来的统计日期");
			}
		},
		//子组件时间选择控件操作emit回来的值处理
		//日历控件传回的是13位时间戳
		selectDayFun(data) {
			this.selectDateComp = new Date(data).format("yyyy-MM-dd");
			this.selectDay = new Date(data).format("yyyy/MM/dd");
			this.changeDateTimeSelect(false);
		},
		// 打开日考勤详情
		opendetail() {
			// 数据加载中 不跳转
			if (this.loadingFlag) {
				return;
			}
			this.$router.push({
				name: "managedailydetail",
				query: {
					selectDay: this.selectDay + "",
					statisList: JSON.stringify(
						this.attendByDayData.attStatisticsInfoList || []
					)
				}
			});
		},
		// 打开日考勤详情 单个type
		opendailydetail(item) {
			let selectType = -1;
			if (item.userNum && item.userNum > 0) {
				if (item && item.type) {
					selectType = item.type;
				}
				this.$router.push({
					path: "/managedailydetail",
					query: {
						selectDay: this.selectDay + "",
						statisList: JSON.stringify(
							this.attendByDayData.attStatisticsInfoList || []
						),
						selectType: selectType
					}
				});
			} else {
				switch (item.type) {
					case 2: //漏卡
						SnToast("没有人漏掉打卡哦!");
						break;
					case 4: //迟到
						SnToast("大家都很准时哦!");
						break;
					case 5: //早退
						SnToast("没有人早退");
						break;
					case 1: //缺勤
						SnToast("没有人缺勤");
						break;
					case 3: //外勤
						SnToast("没有人在考勤范围外打卡");
						break;
					case 6: //正常
						SnToast("没有人正常打卡");
						break;
					case 7: //未打卡
						SnToast("没有人未打卡");
						break;
				}
			}
		},
		// 获取考勤组日数据
		getGroupAttendInfoByDay() {
			this.loadingFlag = true;
			let startTime = common.formatTimeHour(
				Date.parse(new Date(this.selectDay)) / 1000
			);
			let data = {
				queriedDate: startTime
			};
			ClockMgrService.getGroupAttendInfoByDay(data)
				.then(result => {
					this.loadingFlag = false;
					let resultData = result || {};
					this.attendByDayData = resultData;
					if (
						this.attendByDayData.clockNum &&
						this.attendByDayData.clockNum != 0
					) {
						this.echartsOption.series[0].data[0] = Number(
							this.attendByDayData.clockNum
						);
						this.echartsOption.series[0].data[1] = Number(
							this.attendByDayData.attUserNum
						);
					} else {
						this.attendByDayData.clockNum = 0;
						this.echartsOption.series[0].data[0] = Number(
							this.attendByDayData.clockNum
						);
						this.echartsOption.series[0].data[1] = Number(
							this.attendByDayData.attUserNum || 1
						);
					}
					this.$nextTick(() => {
						this.initEcharts();
					});
					if (
						resultData.multiStateUserNum &&
						resultData.multiStateUserNum > 0
					) {
						this.multiStateUserNum = resultData.multiStateUserNum;
					} else {
						this.multiStateUserNum = 0;
					}

					if (resultData.isToday && resultData.isToday == 1) {
						this.today = true;
					} else {
						this.today = false;
					}
				})
				.catch(err => {
					err = err || {};
					// 无权限
					if (err.resultCode === 80104119) {
						// 进入无权限页面
						this.openPermission({
							isRouter: true,
							data: {
								pageBackFlag: true,
								permissionText: `考勤数据统计查看`,
								bisCodes: `2_268435475_attendStatistics`
							}
						});
					}
					this.loadingFlag = false;
					console.log(
						`ClockMgrService.getGroupAttendInfoByDay @@Error ------>`,
						err
					);
				});
		},
		// 初始化charts
		initEcharts() {
			let circleChart = echarts.init(this.$refs.chartContainer);
			this.setOption(circleChart);
		},
		// 设置chart数据
		setOption(circleChart) {
			if (circleChart) {
				circleChart.setOption(this.echartsOption);
			}
		},
		// 返回打卡类型
		transStatis(type) {
			return common.transStatis(type);
		}
	}
};
</script>

```

::: warning

echarts4.9.0使用整合版

```
<div class="chart-container" ref="chartContainer"></div>

// 引入 ECharts 主模块
import echarts from "echarts";

echartsOption: {
				color: [
					color: [
					getCssVarValue(`chart-color-1`),
					getCssVarValue(`chart-color-2`)
				],
				],
				/* 位置布局 */
				grid: {
					top: "0%",
					left: "0%",
					right: "0%",
					bottom: "0%",
					containLabel: true
				},
				series: [
					{
						type: "pie",
						silent: true,
						legendHoverLink: false,
						hoverAnimation: false,
						label: {
							show: false
						},
						radius: ["90%", "100%"],
						labelLine: {
							show: false
						},
						data: []
					}
				]
			}, // echarts的options数据



methods:{
	// 初始化charts
		initEcharts() {
			let circleChart = echarts.init(this.$refs.chartContainer);
			this.setOption(circleChart);
		},
    // 设置chart数据
		setOption(circleChart) {
			if (circleChart) {
				circleChart.setOption(this.echartsOption);
			}
		},
}

  mounted() {
    this.$nextTick(() => {
    
		  this.initEcharts(); //初始化的时候去调初始化echarts的方法
			
    });
  },



```




:::


## 自定义图标的使用

![分析页感叹号 clamation-circle图标的使用流程](https://files.catbox.moe/hl8vzq.png)