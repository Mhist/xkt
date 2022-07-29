# 复核的基本流程

# 找到对应的入、转、调、离逻辑分支

(全局搜索)：快速定位 ctrl+shift+f

关键词：
1. submitForm
2. rescode == 0 
3. 80210043

![](https://files.catbox.moe/r640fo.png)

# 需要走复核统一错误码 : 80102008（时间：2022-07-29 16：46）

## 加逻辑分支

```
	// 去复核的开关打开了，需要走申请
	if (resultCode === 80210043) {
		this.reviewApply(params);
	} 

```

## 导入插件函数

 在添加逻辑的同一个vue文件的script对象中
 
```
import ReviewApplyPlugin from "@/plugins/reviewApply.js";

```

## 建审查申请方法 reviewApply

    在添加逻辑的同一个vue文件的method对象中reviewApply方法

```
reviewApply(execParams) {
			// 审批表单显示的content数据
			let contentJson = {
				"displayValue": {
					"addRosterDate": dateFormat("YYYY/mm/dd", new Date(execParams.planInductionDate * 1000)),
				},
				"addRosterName": execParams.name,
				"addRosterPhone": execParams.mobile,
				"addRosterCardType": execParams.idType,
				"addRosterIDcard": execParams.idNumber,
				"addRosterDepartMent": execParams.departmentId,
				"addRosterRole": execParams.postId,
				"addRosterDate": execParams.planInductionDate,
				"addRosterDetailUrl": "http://10.2.25.127:8080/pages/inductionManager.html#/inductionDetail",
				"_execBisReviewInfoMethod":"/personelmgmt/v1/getBisReviewInfo",
			}
			let approvalBisData = execParams
			let summary = {
                    listData: {
                        姓名: "张三十",
                        手机号: "18694063736",
                    },
                };

			let reviewApplyParam = {
				execMethod: 'addWaitEmployee',
				execReqParam: execParams,
				approvalContent: contentJson,
				approvalBisData: approvalBisData,
				businessTitle: "新增待入职",
				templateType : "1046",
				summary: summary,
				service: InductionApi,
				callback: () => {
									this.importDialog = {
										isVisit: false,
										buttonLoading: false,
										isChecked: true
									}
								},
			}

			ReviewApplyPlugin.apply(reviewApplyParam);
		},	


```

## 进入weboa界面用于测试模板信息

1. 通过网址进入

[](https://bizmatedev.sinosun.com:17280/weboa/main/pages/oaindex.html#/appletList/apply1001?appId=268435493)

2. ![](https://files.catbox.moe/x8s0op.png)

3. 例如点击请假申请

![](https://files.catbox.moe/7ro0lc.png)

在此处通过 F12控制台--location.href = "以下网址"
[https://bizmatedev.sinosun.com:17280/bizmate/static/approval/approval/apply.html?templetType=1047&title=%E7%89%88%E6%9C%AC%E5%8F%91%E5%B8%83%E7%94%B3%E8%AF%B7&appletUAId=268435457&ismain=1#/](https://bizmatedev.sinosun.com:17280/bizmate/static/approval/approval/apply.html?templetType=1047&title=%E7%89%88%E6%9C%AC%E5%8F%91%E5%B8%83%E7%94%B3%E8%AF%B7&appletUAId=268435457&ismain=1#/)


根据业务模板代码 1046~1050将以上网址进行相应的进行替换

![](https://files.catbox.moe/16rgoj.jpg)

例如：转正管理  templateType = 1048

```
https://bizmatedev.sinosun.com:17280/bizmate/static/approval/approval/apply.html?templetType=1048&title=%E7%89%88%E6%9C%AC%E5%8F%91%E5%B8%83%E7%94%B3%E8%AF%B7&appletUAId=268435457&ismain=1#/

```

![](https://files.catbox.moe/753blx.jpg)








