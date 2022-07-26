## 接口

1. 查询本企业下本服务模块功能操作开关状态。keyclock权限
接口名：/getOptSwitch
请求方式：get
请求参数：
        * companyId 企业Id
        * moduledId 模块Id
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
接口名：/listModuleOperationSwitch
请求方式：get
请求参数：
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
接口名：/modifyModuleOperationSwitchs
请求方式：post
请求参数：modifyModuleOperationSwitchsRequest:Object
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