## 接口

1. 查询本企业下本服务模块功能操作开关状态。keyclock权限
* 接口名：/getOptSwitch
* 请求方式：get
* 请求参数：
  * companyId 企业Id
  *  moduledId 模块Id
  * optIdentifier 功能操作唯一标识
```
返回值：
{

    "result": {
        "detail": "string",
        "groupId": 0,
        "isReview": 0,
        "optId": 0,
        "optIdentifier": "string",
        "optName": "string",
        "sortOrder": 0
    },
    "resultCode": 0,
    "resultMessage": "string"
}
```

2. 查询本企业下本服务模块所有功能操作（带分组树和开关状态）
* 接口名：/listModuleOperationSwitch
* 请求方式：get
* 请求参数：
    * companyId 企业Id
    * moduledId 模块Id

```
返回值：
       {
  "result": {
    "childModuleInfoList": [
      null
    ],
    "groupId": 0,
    "groupName": "string",
    "operationSwitchInfoList": [
      {
        "detail": "string",
        "groupId": 0,
        "isReview": 0,
        "optId": 0,
        "optIdentifier": "string",
        "optName": "string",
        "sortOrder": 0
      }
    ],
    "parentGroupId": 0,
    "sortOrder": 0
  },
  "resultCode": 0,
  "resultMessage": "string"
}
```   

3. 批量编辑本服务模块功能操作项开关。keyclock权限
* 接口名：/modifyModuleOperationSwitchs
* 请求方式：post
* 请求参数：modifyModuleOperationSwitchsRequest:Object
```
请求参数：
    {

    "companyId": "string", 
    "modifyOperationSwitchList": [

        {
        "isReview": 0,
        "optId": 0
        }

    ], 
    "moduleId": 0, 
    "userId": "string"
    }

```

```
返回值：
    {
    "result": {}, 
    "resultCode": 0, 
    "resultMessage": "string"
    }
```   

## 自定义的有问题的mock数据

```
     let res = {
        childModuleInfoList: [],
        groupId: 110,
        groupName: "人事管理",
        operationSwitchInfoList: [
          {
            typeName: "入职管理设置",
            typeList: [
              {
                detail:
                  "开启审批后，新增待入职将需要进行审批，企业可设置新增待入职审批流程",
                groupId: 110,
                isReview: 0,
                optId: 1,
                optIdentifier: 11000,
                optName: "新增待入职审批",
                sortOrder: 0,
              },
              {
                detail:
                  "开启审批后，办理入职将需要进行审批，企业可设置办理入职审批流程",
                groupId: 110,
                isReview: 1,
                optId: 2,
                optIdentifier: 11001,
                optName: "办理入职审批",
                sortOrder: 1,
              },
            ],
          },
          {
            typeName: "转正管理设置",
            typeList: [
              {
                detail:
                  "开启转正管理审批后，办理转正将需要进行审批，企业可设置转正管理审批流程",
                groupId: 110,
                isReview: 0,
                optId: 3,
                optIdentifier: 11002,
                optName: "转正管理审批",
                sortOrder: 2,
              },
            ],
          },
          {
            typeName: "调动管理设置",
            typeList: [
              {
                detail:
                  "开启调动管理审批后，办理调动将需要进行审批，企业可设置调动管理审批流程",
                groupId: 110,
                isReview: 0,
                optId: 4,
                optIdentifier: 11003,
                optName: "调动管理审批",
                sortOrder: 3,
              },
            ],
          },
          {
            typeName: "离职管理设置",
            typeList: [
              {
                detail:
                  "开启离职管理审批后，办理离职将需要进行审批，企业可设置离职管理审批流程 ",
                groupId: 110,
                isReview: 0,
                optId: 5,
                optIdentifier: 11004,
                optName: "离职管理审批",
                sortOrder: 4,
              },
            ],
          },
        ],
        parentGroupId: -1,
        sortOrder: 0,
      };
      console.log(res, "自定义的res");
```

## 人事复核开关第二个接口后端的返回数据截图

![返回的数据截图一](https://files.catbox.moe/gg5w4u.png)
![返回的数据截图一](https://files.catbox.moe/z1c0r7.png)

等后端返回数据中

## 