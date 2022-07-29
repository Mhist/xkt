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

在此处通过

![](https://files.catbox.moe/5w8l8g.png)

 F12控制台--location.href = "以下网址"
[https://bizmatedev.sinosun.com:17280/bizmate/static/approval/approval/apply.html?templetType=1047&title=%E7%89%88%E6%9C%AC%E5%8F%91%E5%B8%83%E7%94%B3%E8%AF%B7&appletUAId=268435457&ismain=1#/](https://bizmatedev.sinosun.com:17280/bizmate/static/approval/approval/apply.html?templetType=1047&title=%E7%89%88%E6%9C%AC%E5%8F%91%E5%B8%83%E7%94%B3%E8%AF%B7&appletUAId=268435457&ismain=1#/)


根据业务模板代码 1046~1050将以上网址进行相应的进行替换

![](https://files.catbox.moe/16rgoj.jpg)

例如：转正管理  templateType = 1048

```
https://bizmatedev.sinosun.com:17280/bizmate/static/approval/approval/apply.html?templetType=1048&title=%E7%89%88%E6%9C%AC%E5%8F%91%E5%B8%83%E7%94%B3%E8%AF%B7&appletUAId=268435457&ismain=1#/

```

![](https://files.catbox.moe/753blx.jpg)


## 填写基本的模板信息

填写好必填项目后，
![填写好必填项目](https://files.catbox.moe/zgz4eg.png)

选择审批人，抄送人，
![选择审批人弹窗](https://files.catbox.moe/2lkwdc.png)


点击提交按钮，查看请求接口的参数（载荷）
![提交后的载荷](https://files.catbox.moe/x0xcpd.png)


此处content较长，先截取下来，每个模板对应的conent内容长度依照具体页面而定。



```
content: "{\"displayValue\":{\"handleFormalInductionDate\":\"2022/07/29\",\"handleFormalPero\":\"20220221月\",\"handleFormalDate\":\"2022/07/29\",\"handleFormalTrueDate\":\"2022/07/29\",\"applyUserName\":\"18827637106\",\"applyOgrName\":\"未分组\"},\"handleFormalName\":\"江测试\",\"handleFormalDepartment\":\"\",\"handleFormalPost\":\"\",\"handleFormalInductionDate\":1659024000,\"handleFormalPero\":\"20220221\",\"handleFormalDate\":1659024000,\"handleFormalTrueDate\":1659024000,\"handleFormalWorkMes\":\"\",\"handleFormaleValuate\":\"\",\"visibleValue\":{}}"

```

转义字符可以通过在线处理[https://www.toolscat.com/json/format](https://www.toolscat.com/json/format)

```
content: {
    "displayValue": {
        "handleFormalInductionDate": "2022/07/29",
        "handleFormalPero": "20220221月",
        "handleFormalDate": "2022/07/29",
        "handleFormalTrueDate": "2022/07/29",
        "applyUserName": "18827637106",
        "applyOgrName": "未分组"
    },
    "handleFormalName": "江测试",
    "handleFormalDepartment": "",
    "handleFormalPost": "",
    "handleFormalInductionDate": 1659024000,
    "handleFormalPero": "20220221",
    "handleFormalDate": 1659024000,
    "handleFormalTrueDate": 1659024000,
    "handleFormalWorkMes": "",
    "handleFormaleValuate": "",
    "visibleValue": {
        
    }
}
```



##  参照新增待入职模板表单 走一遍流程

![新增待入职模板表单](https://files.catbox.moe/mi6ndc.png)


提交表单后的返回内容：

![新增待入职模板内容](https://files.catbox.moe/o5wifa.png)

这一部分的content同样较长，先截取到这里

```
content: "{\"displayValue\":{\"addRosterDate\":\"2022/07/29 周五\",\"applyUserName\":\"18827637106\",\"applyOgrName\":\"未分组\"},\"addRosterName\":\"江测试\",\"addRosterPhone\":\"18827637105\",\"addRosterCardType\":\"身份证\",\"addRosterIDcard\":\"422101199802212222\",\"addRosterDepartMent\":\"\",\"addRosterRole\":\"\",\"addRosterDate\":1659024000,\"visibleValue\":{}}"
copyToNames: []
copyToUaIds: []
copyToUsers: []
cpyTempletId: "338971632984064"
flowId: null
name: "18827637106的版本发布申请"
nextApprovalName: "18827637106"
nextUaId: "4462471054346@bizmatetest"
pid: 0
publicKeyId: "339120597884928"
sign: "q-YAjCmp7wcykm9rGGqtNGz4940H2xTiYXoIMLMyvJxT2eOl9pZnJkhxAlgYIjNgsUDyUW68q7uTIRsyPNHbGA=="
summary: "{\"listData\":{\"姓名\":\"江测试\",\"入职部门\":\"无\",\"入职岗位\":\"无\",\"预计入职日期\":\"2022/07/29 周五\"}}"
templetType: 1046
userId: "4462471054346@bizmatetest"
userIdList: []
userName: "18827637106"

```

通过在线工具处理[https://www.toolscat.com/json/format](https://www.toolscat.com/json/format)

```
content: {
    "displayValue": {
        "addRosterDate": "2022/07/29 周五",
        "applyUserName": "18827637106",
        "applyOgrName": "未分组"
    },
    "addRosterName": "江测试",
    "addRosterPhone": "18827637105",
    "addRosterCardType": "身份证",
    "addRosterIDcard": "422101199802212222",
    "addRosterDepartMent": "",
    "addRosterRole": "",
    "addRosterDate": 1659024000,
    "visibleValue": {
        
    }
}copyToNames: [
    
]copyToUaIds: [
    
]copyToUsers: [
    
]cpyTempletId: "338971632984064"flowId: nullname: "18827637106的版本发布申请"nextApprovalName: "18827637106"nextUaId: "4462471054346@bizmatetest"pid: 0publicKeyId: "339120597884928"sign: "q-YAjCmp7wcykm9rGGqtNGz4940H2xTiYXoIMLMyvJxT2eOl9pZnJkhxAlgYIjNgsUDyUW68q7uTIRsyPNHbGA=="summary: {
    "listData": {
        "姓名": "江测试",
        "入职部门": "无",
        "入职岗位": "无",
        "预计入职日期": "2022/07/29 周五"
    }
}templetType: 1046userId: "4462471054346@bizmatetest"userIdList: [
    
]userName: "18827637106"

```


与前面提到的这一段代码进行对应


:::warning

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

:::

















