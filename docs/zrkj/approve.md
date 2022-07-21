# 二期需求


## sp5提测计划

提测计划：
开发周期：7.19 ~ 7.28 周四 并完成自测
7.29 周五 提测sit
8.10 周三 发布生产


## sp4提测计划(时间更新，按照sp5需求)
![二期需求提测计划](https://files.catbox.moe/b471jq.jpg)

1. 设置人事各业务开启复核
2. 新增员工，入转，调动，离职申请、审批

## 设置人事各业务开启复核

![ue-人事管理设置(审批开关)](https://files.catbox.moe/xs04w3.jpg)

### weboa配置：

1. 路由配置 

文件路径：weboa\src\pages\index\views\rotamgr\router\index.js

```
/*
 * @Author: dingfeng
 * @Description: 人事管理 路由
 */

// 布局
import Layout from '@/pages/index/views/rotamgr/components/Layout';

const routes = {
    path: '/rotamgr',
    name: 'rotamgr',
    component: Layout,
    children: [
        {
            path: 'dossier',
            name: 'dossier',
        },
        {
            path: 'induction',
            name: 'induction',
        },
        {
            path: 'worker',
            name: 'worker',
        },
        {
            path: 'transfer',
            name: 'transfer',
        },
        {
            path: 'leave',
            name: 'leave',
        },
        {
            path: 'contract',
            name: 'contract',
        },
        {
            path: 'statistics',
            name: 'statistics',
        },
        {
            path: 'approvalSet', //人事管理-审批设置
            name: 'approvalSet', //人事管理-审批设置
        },
    ],
};
export default routes;

```

2. menu.json配置

文件路径： weboa\src\pages\index\menu.json

```
{
        "menuId": "5",
        "moduleName": "rotamgr",
        "menuName": "人事管理",
        "isShow": true,
        "needQueryAuthoirty": false,
        "routerPath": "/rotamgr",
        "defaultMenuId": "5-1",
        "menuList": [
            {
                "appId": "22222222",
                "menuId": "5-7",
                "menuName": "人事数据统计",
                "routerPath": "/rotamgr/statistics",
                "isShow": true,
                "isLink": true,
                "authCode": "",
                "authName": "人事数据统计",
                "linkUrl": "http://10.2.25.83:8080/pages/index.html#/statistics"
            },
            {
                "appId": "22222222",
                "menuId": "5-8",
                "menuName": "人事管理设置",
                "routerPath": "/rotamgr/approvalSet",
                "isShow": true,
                "isLink": true,
                "authCode": "",
                "authName": "人事管理设置",
                "linkUrl": "http://10.2.25.85:8080/pages/index.html#/approvalSet"
            }
        ]
}

{
        "menuId": "6",
        "moduleName": "management",
        "menuName": "设置",
        "isShow": true,
        "needQueryAuthoirty": false,
        "routerPath": "/management",
        "defaultMenuId": "6-1",
        "menuList": [
            {
                "menuId": "6-3",
                "menuName": "组织架构管理",
                "routerPath": "/management/organize",
                "isShow": true,
                "isLink": true,
                "authCode": "2_-1_departmentMgr,2_-1_postMgr",
                "authName": "部门管理,岗位管理"
            },
            {
                "menuId": "6-4",
                "menuName": "审批流程设置",
                "routerPath": "/management/flowMgr",
                "isShow": true,
                "isLink": true,
                "authCode": "2_-1_departmentMgr,2_-1_postMgr",
                "authName": "部门管理,岗位管理",
                "linkUrl":"http://10.2.25.83:8085/pages/index.html#/"
            }
        ]
    }

```

## 新增员工，入转，调动，离职申请、审批（人事管理加审批功能）

*** 参考： notice公告的审批流程代码：

从发布按钮：

::: warning

```
//发布公告
        addPublish(annId = '') {
            let publishParam = {
                annIdList: [annId],
                companyId: this.userInfo.cpyId,
                operSource: 2,
                channelId: this.channelId,
                rangeList: this.rangeList,
            };
            this.loading = true;
            noticeApi
                .addPublish(publishParam)
                .then((result) => {
                    if (result && 0 === result.resultCode) {
                        SnToast('发布成功', 'middle');
                        this.pubSuccessBack();
                    } else if (result.resultCode === 80102008) {
                        // 暂无公告发布权限
                        // 去显示申请确认弹窗
                        this.$refs.modalRemark.init({
                            isShow: true,
                            content: `编辑后的内容尚未生效，是否向上级领导申请，审批同意后该编辑内容即生效`,
                            confirm: ({ remark, approver, pid }) => {
                                this.approver = approver;
                                this.saveBisReviewInfo(publishParam, remark, pid);
                            },
                        });
                    } else {
                        SnToast(result.resultDesc);
                    }
                })
                .finally(() => {
                    this.loading = false;
                });
        },

         //预存公告信息
        saveBisReviewInfo(item, remark = '', pid) {
            let that = this;
            let contentJson = {
                announcementTitle: that.localPubJson.title,
                announcementRange: that.localPubJson.annPubScopeName,
                announcementDetail: {
                    label: '公告详情',
                    url: `${
                        window.COMPLETE_URL || ''
                    }/bizmate/static/notice/pages/index.html#/noticedetail?isApply=true&annId=${
                        item.annIdList[0]
                    }&annPubScopeArr=${that.localPubJson.annPubScopeName}`,
                },
                remark,
            };
            let json = {
                needApprovalInfo: {
                    needApprovalBisInfo: JSON.stringify(contentJson),
                },
                needExecuteBisData: JSON.stringify({
                    execMethod: 'notice.addPublish',
                    execReqParam: item,
                }),
            };
            this.loading = true;
            noticeApi
                .saveBisReviewInfo(json)
                .then((res) => {
                    if (res.result && res.resultCode === 0) {
                        //跳转审批
                        that.goToApply(JSON.parse(res.result.needSignApprovalBisInfo), pid);
                    }
                })
                .finally(() => {
                    this.loading = false;
                });
        },

        // 公告发布走审批
        goToApply(item, pid) {
            let that = this;
            let { needApprovalBisInfo } = item;
            let { announcementTitle, announcementRange } = JSON.parse(needApprovalBisInfo);
            // 调用审批api携带数据
            const params = {
                content: item,
                summary: {
                    listData: {
                        公告标题: announcementTitle,
                        发布范围: announcementRange,
                    },
                },
                templateType: 1027,
                commitTo: this.approver,
                pid,
            };
            window.ExternalApi.apply(params)
                .then((res) => {
                    if (res.isSuccess()) {
                        SnToast({
                            message: '提交成功',
                        });
                        that.pubSuccessBack();
                    } else if (res.resultDesc) {
                        SnToast(res.resultDesc)
                    } else {
                        SnToast('申请失败');
                    }
                })
                .catch(() => {
                    SnToast('申请失败');
                });
        },
        //公告发布成功后返回
        pubSuccessBack() {
            this.$route.meta.isSubmited = true;
            setTimeout(() => {
                this.clearVuexData();
                // 群公告进来 需要跳转到群公告 不是企业公告
                if (!!this.gId && this.gId != '0') {
                    this.$router.push({
                        path: '/group',
                        query: {
                            gId: this.gId,
                        },
                    });
                } else if (!this.pageFrom) {
                    this.goBack();
                } else {
                    this.$router.goBack();
                }
            }, 1000);
        },
```
:::


子组件modal选择框逻辑

::: warning

```
     async init(options = {}) {
            const _options = {
                isShow: false,
                title: '',
                content: '',
                placeholder: '备注(选填)',
                confirmButtonText: '提交申请',
                isCancelBtn: true,
                maxlength: 200,
                confirm: () => {},
                cancel: () => {},
            };
            // 查询业务是否设置了固定审批流程   
            var fixResObj = await window.ExternalApi.getFixFlowClassList('1027');
            if (fixResObj) {
                if (fixResObj.pid) {
                    if (fixResObj?.currentUserInfo) {
                        this.approver = fixResObj?.currentUserInfo;
                        this.$emit('update:approver', this.approver);
                    }
                    this.pid = fixResObj.pid;
                    this.$emit('update:pid', this.pid);
                } else if (fixResObj.errorMsg) {
                    this.errorMsg = fixResObj.errorMsg;
                }
            }
            this.options = Object.assign({}, _options, options);
        },

```

:::


父组件涉及的API: 

1.  noticeApi.saveBisReviewInfo(json)    // 配置json文件,其中参数为：
    
    ```
           let contentJson = {
                announcementTitle: that.localPubJson.title,
                announcementRange: that.localPubJson.annPubScopeName,
                announcementDetail: {
                    label: '公告详情',
                    url: `${
                        window.COMPLETE_URL || ''
                    }/bizmate/static/notice/pages/index.html#/noticedetail?isApply=true&annId=${
                        item.annIdList[0]
                    }&annPubScopeArr=${that.localPubJson.annPubScopeName}`,
                },
                remark,
            };


            let  json = {
                needApprovalInfo: {
                    needApprovalBisInfo: JSON.stringify(contentJson),
                },  
                needExecuteBisData: JSON.stringify({
                    execMethod: 'notice.addPublish',
                    execReqParam: item,
                }),
            };


    ```
2. window.ExternalApi.apply(params)      // 调用审批api

    ```
         const params = {
                content: item,
                summary: {
                    listData: {
                        公告标题: announcementTitle,
                        发布范围: announcementRange,
                    },
                },
                templateType: 1027,
                commitTo: this.approver,
                pid,
            };

    ```

3.  noticeApi.addPublish(publishParam)   // 发布公告

    ```
    let publishParam = {
                    annIdList: [annId],
                    companyId: this.userInfo.cpyId,
                    operSource: 2,
                    channelId: this.channelId,
                    rangeList: this.rangeList,
                };
    ```

子组件涉及的API: 

1. window.ExternalApi.getFixFlowClassList('1027')  // 参数为父组件审批Api 中的参数键值对：  templateType: 1027,


![二期需求理解](https://files.catbox.moe/uv4o68.png)




## ue需求评审会待总结

人事管理页面开关：初始默认关闭（开启：走审批流程，类型补丁，关闭：不走审批流程，提交表单，接口正常，返回生效数据）

开启后，提交表单默认走自由审批流程（有弹窗，需要选择审批人的流程）


自由流程不用卡权限   ？？？  不太理解

根据业务类型，（右侧弹窗，选择业务申请，入职管理等字样），审批模板（getTemplateInfo???）


summary:摘要，可以填一些内容，空也无影响

有权限的人才能看到 入转调离？  是table页面还是审批按钮开关界面？


## 前后端对接小会待总结


不合理的讨论：开关是否开启的依据
formytpe：      不合理
服务名_接口名：  有些共用了同样的服务名_接口名，在新需求情况下，无法区分


人事管理审批：开关界面，
接口数量：2个
接口一功能：检测页面的开关打开情况
接口二功能：将打开的开关的opidentifier，将开关打开的情况告诉后端数据库

![操作id](https://files.catbox.moe/d6whzn.png)

会议中的   复合组件  名词  不太理解？？？


### 基本流程

1.用户在入职管理，转正管理，调动管理，离职管理功能中，提交表单后
2.检测对应的特定功能，例如入职管理的审批功能开关是否打开
3.如果未打开，不走审批流程，如果打开，则调用预保存接口（文冬，冬胜）



## 公告整体流程（串联）

xmind文件：本地路径：'c:\Users\PC\Desktop\三方业务走审批流
程(参照notice项目总结).xmind'


