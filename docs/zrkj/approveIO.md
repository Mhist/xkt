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

## 开关接口（当前时间：2022-07-29 9：00：00）
```
swagger: "2.0"
info:
  description: "业务复核开关接口说明"
  version: "1.0.0"
  title: "业务复核开关"
basePath: "/"
tags:
- name: "businessReviewSwitch"
  description: "业务复核开关"
schemes:
- "https"
consumes:
- "application/json"
produces:
- "application/json"
paths:
  /getOptSwitch:
    get:
      tags:
      - "operation-switch"
      summary: "查询本企业下本服务模块功能操作开关状态。keyclock权限[app_role:user,service_role]"
      operationId: "getOptSwitch"
      consumes:
      - "application/json"
      produces:
      - "application/json"
      parameters:
      - name: "companyId"
        in: "query"
        description: "企业ID"
        required: true
        type: "string"
      - name: "moduleId"
        in: "query"
        description: "模块ID"
        required: true
        type: "integer"
        format: "int64"
      - name: "optIdentifier"
        in: "query"
        description: "功能操作唯一标识"
        required: true
        type: "string"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseOperationSwitchInfo"
  /listModuleOperationSwitch:
    get:
      tags:
      - "operation-switch"
      summary: "查询本企业下本服务模块所有功能操作（带分组树和开关状态）。keyclock权限[service_role]"
      operationId: "listModuleOperationSwitch"
      consumes:
      - "application/json"
      produces:
      - "application/json"
      parameters:
      - name: "companyId"
        in: "query"
        description: "企业ID"
        required: true
        type: "string"
      - name: "moduleId"
        in: "query"
        description: "模块ID"
        required: true
        type: "integer"
        format: "int64"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseOperationModuleInfo"
  /modifyModuleOperationSwitchs:
    post:
      tags:
      - "operation-switch"
      summary: "批量编辑本服务模块功能操作项开关。keyclock权限[service_role]"
      operationId: "modifyModuleOperationSwitchs"
      consumes:
      - "application/json"
      produces:
      - "application/json"
      parameters:
      - in: "body"
        name: "modifyModuleOperationSwitchsRequest"
        description: "批量编辑本服务模块功能操作项开关请求参数"
        required: true
        schema:
          $ref: "#/definitions/ModifyModuleOperationSwitchsRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponse"
definitions:
  ApiResponse:
    type: "object"
    properties:
      result:
        type: "object"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.businessreview.model.ApiResponse"
  ApiResponseOperationSwitchInfo:
    type: "object"
    properties:
      result:
        $ref: "#/definitions/OperationSwitchInfo"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.businessreview.model.ApiResponse<com.sinosun.bizmate.ace.backend.businessreview.model.operation.OperationSwitchInfo>"
  OperationSwitchInfo:
    type: "object"
    properties:
      detail:
        type: "string"
        description: "功能操作描述"
      groupId:
        type: "integer"
        format: "int64"
        description: "功能操作所在分组ID"
      isReview:
        type: "integer"
        format: "int32"
        description: "复核开关（0：不需要复核；1：需要复核）"
      optId:
        type: "integer"
        format: "int64"
        description: "功能操作ID"
      optIdentifier:
        type: "string"
        description: "功能操作唯一标识"
      optName:
        type: "string"
        description: "功能操作名称"
      sortOrder:
        type: "integer"
        format: "int64"
        description: "功能操作分组下排序"
    description: "功能操作信息，带开关"
    x-java-class: "com.sinosun.bizmate.ace.backend.businessreview.model.operation.OperationSwitchInfo"
  ApiResponseOperationModuleInfo:
    type: "object"
    properties:
      result:
        $ref: "#/definitions/OperationModuleInfo"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.businessreview.model.ApiResponse<com.sinosun.bizmate.ace.backend.businessreview.model.operation.OperationModuleInfo>"
  OperationModuleInfo:
    type: "object"
    properties:
      childModuleInfoList:
        type: "array"
        description: "孩子分组列表"
        items:
          $ref: "#/definitions/OperationModuleInfo"
      groupId:
        type: "integer"
        format: "int64"
        description: "功能操作分组ID"
      groupName:
        type: "string"
        description: "功能操作分组名称"
      operationSwitchInfoList:
        type: "array"
        description: "叶子节点数据，功能操作（带开关）列表"
        items:
          $ref: "#/definitions/OperationSwitchInfo"
      parentGroupId:
        type: "integer"
        format: "int64"
        description: "功能操作分组ID,当前分组为服务级分组时，该值为-1"
      sortOrder:
        type: "integer"
        format: "int64"
        description: "分组排序"
    description: "功能操作模块信息"
    x-java-class: "com.sinosun.bizmate.ace.backend.businessreview.model.operation.OperationModuleInfo"
  ModifyModuleOperationSwitchsRequest:
    type: "object"
    required:
    - "companyId"
    - "modifyOperationSwitchList"
    - "moduleId"
    - "userId"
    properties:
      companyId:
        type: "string"
        description: "操作人企业id"
      modifyOperationSwitchList:
        type: "array"
        description: "操作人企业id"
        items:
          $ref: "#/definitions/ModifyOperationSwitch"
      moduleId:
        type: "integer"
        format: "int64"
        description: "模块ID"
      userId:
        type: "string"
        description: "操作人id"
    description: "批量编辑本服务模块功能操作项开关请求参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.businessreview.model.operation.ModifyModuleOperationSwitchsRequest"
  ModifyOperationSwitch:
    type: "object"
    required:
    - "isReview"
    - "optId"
    properties:
      isReview:
        type: "integer"
        format: "int32"
        description: "是否开启复核，0关闭，1开启"
      optId:
        type: "integer"
        format: "int64"
        description: "功能操作id"
    description: "功能操作项开关设置"
    x-java-class: "com.sinosun.bizmate.ace.backend.businessreview.model.operation.ModifyOperationSwitch"


```

## 入转调离 复核组件校验接口（当前时间：2022-07-29 9：00：00）

```
swagger: "2.0"
info:
  description: "业务复核组件接口说明"
  version: "1.0.0"
  title: "业务复核组件"
basePath: "/"
tags:
- name: "businessReview"
  description: "业务复核组件"
schemes:
- "https"
consumes:
- "application/json"
produces:
- "application/json"
paths:
  /bisReviewCallback:
    post:
      tags:
      - "businessReview"
      summary: "审批授权回调.keyclock权限[service_role]"
      description: "审批授权回调"
      operationId: "bisReviewCallback"
      consumes:
      - "application/json"
      produces:
      - "application/json"
      parameters:
      - in: "body"
        name: "request"
        description: "审批授权回调请求参数"
        required: true
        schema:
          $ref: "#/definitions/BisReviewCallbackRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponse"
  /checkReview:
    get:
      tags:
      - "businessReview"
      summary: "业务校验.keyclock权限[app_role:user]"
      operationId: "checkReview"
      consumes:
      - "application/json"
      produces:
      - "application/json"
      parameters:
      - in: "body"
        name: "checkReviewRequest"
        description: "业务校验请求参数"
        required: true
        schema:
          $ref: "#/definitions/CheckReviewRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseCheckReviewResult"
  /getBisReviewInfo:
    get:
      tags:
      - "businessReview"
      summary: "查询预操作详情信息.keyclock权限[app_role:user]"
      operationId: "getBisReviewInfo"
      consumes:
      - "application/json"
      produces:
      - "application/json"
      parameters:
      - name: "reviewId"
        in: "query"
        description: "预操作记录id"
        required: true
        type: "string"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseGetBisReviewInfoResult"
  /saveBisReviewInfo:
    post:
      tags:
      - "businessReview"
      summary: "保存审批授权预操作信息.keyclock权限[app_role:user]"
      description: "保存审批授权预操作信息"
      operationId: "saveBisReviewInfo"
      consumes:
      - "application/json"
      produces:
      - "application/json"
      parameters:
      - name: "Authorization"
        in: "header"
        required: true
        type: "string"
      - in: "body"
        name: "request"
        description: "保存审批授权预操作信息请求参数"
        required: true
        schema:
          $ref: "#/definitions/SaveBisReviewInfoRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseSaveBisReviewInfoResult"
definitions:
  BisReviewCallbackInfo:
    type: "object"
    required:
    - "approvedResult"
    - "companyId"
    - "flowId"
    - "reviewId"
    properties:
      approvedResult:
        type: "integer"
        format: "int32"
        description: "审批结果: 1-审批通过, 2-审批拒绝,3-审批申请，4-申请撤回"
      companyId:
        type: "string"
        description: "企业Id"
      creator:
        type: "string"
        description: "操作人"
      flowId:
        type: "string"
        description: "审批流水号"
      needApprovalInfo:
        description: "待审批业务信息"
        $ref: "#/definitions/NeedApprovalInfo"
      reviewId:
        type: "string"
        description: "预操作信息记录唯一标识"
    description: "审批授权回调业务数据(签名明文数据,格式严格参照请求参数顺序)"
    x-java-class: "com.sinosun.bizmate.ace.backend.businessreview.model.BisReviewCallbackInfo"
  BisReviewCallbackRequest:
    type: "object"
    required:
    - "bisReviewCallbackInfo"
    - "signData"
    properties:
      bisReviewCallbackInfo:
        description: "审批授权回调明文数据:格式严格参照请求参数顺序"
        $ref: "#/definitions/BisReviewCallbackInfo"
      signData:
        type: "string"
        description: "审批授权回调签名密文数据:采用sm2带z值方式签名"
    description: "审批授权回调请求参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.businessreview.model.BisReviewCallbackRequest"
  NeedApprovalInfo:
    type: "object"
    required:
    - "needApprovalBisInfo"
    properties:
      needApprovalBisInfo:
        type: "string"
        description: "待审批业务信息"
      needExecuteBisData:
        type: "string"
        description: "待执行业务信息"
    description: "待审批信息"
    x-java-class: "com.sinosun.bizmate.ace.backend.businessreview.model.NeedApprovalInfo"
  ApiResponse:
    type: "object"
    properties:
      result:
        type: "object"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.businessreview.model.ApiResponse"
  CheckReviewRequest:
    type: "object"
    required:
    - "bisId"
    - "bizMateId"
    - "checkType"
    - "companyId"
    properties:
      bisData:
        type: "string"
        description: "待校验业务数据"
      bisId:
        type: "integer"
        format: "int32"
        description: "业务ID，即formType类型"
      bizMateId:
        type: "string"
        description: "操作人ID"
      checkType:
        type: "integer"
        format: "int32"
        description: "业务校验类型: 1-申请前置校验, 2-申请后置校验,3-审批前置校验，4-审批后置校验"
        minimum: 1
        maximum: 4
      companyId:
        type: "string"
        description: "企业Id"
    description: "业务校验请求参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.businessreview.model.CheckReviewRequest"
  ApiResponseCheckReviewResult:
    type: "object"
    properties:
      result:
        $ref: "#/definitions/CheckReviewResult"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.businessreview.model.ApiResponse<com.sinosun.bizmate.ace.backend.businessreview.model.CheckReviewResult>"
  CheckReviewResult:
    type: "object"
    required:
    - "checkCode"
    properties:
      checkCode:
        type: "integer"
        format: "int32"
        description: "检查结果，0表示正确"
    description: "业务校验响应参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.businessreview.model.CheckReviewResult"
  ApiResponseGetBisReviewInfoResult:
    type: "object"
    properties:
      result:
        $ref: "#/definitions/GetBisReviewInfoResult"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.businessreview.model.ApiResponse<com.sinosun.bizmate.ace.backend.businessreview.model.GetBisReviewInfoResult>"
  GetBisReviewInfoResult:
    type: "object"
    required:
    - "createTime"
    - "creator"
    - "expiredTime"
    - "needApprovalBisInfo"
    - "reviewId"
    - "serviceFlag"
    - "status"
    properties:
      approvedResult:
        type: "integer"
        format: "int32"
        description: "审批结果（0-待发起审批，1-审批通过，2-审批拒绝，3-审批申请，4-申请撤回）"
      createTime:
        type: "integer"
        format: "int64"
        description: "创建时间"
      creator:
        type: "string"
        description: "操作人"
      expiredTime:
        type: "integer"
        format: "int64"
        description: "过期时间"
      flowId:
        type: "string"
        description: "审批流程id"
      message:
        type: "string"
        description: "业务执行结果描述"
      needApprovalBisInfo:
        type: "string"
        description: "待审批业务信息"
      needExecuteBisData:
        type: "string"
        description: "待执行业务信息"
      reviewId:
        type: "string"
        description: "预操作记录id"
      serviceFlag:
        type: "string"
        description: "归属服务"
      status:
        type: "integer"
        format: "int32"
        description: "业务执行状态（0-待执行，1-执行成功，2-取消执行, 3-执行失败）"
    description: "查询预操作详情信息结果"
    x-java-class: "com.sinosun.bizmate.ace.backend.businessreview.model.GetBisReviewInfoResult"
  SaveBisReviewInfoRequest:
    type: "object"
    required:
    - "needApprovalInfo"
    - "needExecuteBisData"
    properties:
      creator:
        type: "string"
        description: "创建人"
      expiredTime:
        type: "integer"
        format: "int64"
        description: "过期时间：默认当前时间+30天"
      needApprovalInfo:
        description: "待审批信息"
        $ref: "#/definitions/NeedApprovalInfo"
      needExecuteBisData:
        type: "string"
        description: "待执行业务信息"
    description: "保存审批授权预操作信息请求参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.businessreview.model.SaveBisReviewInfoRequest"
  ApiResponseSaveBisReviewInfoResult:
    type: "object"
    properties:
      result:
        $ref: "#/definitions/SaveBisReviewInfoResult"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.businessreview.model.ApiResponse<com.sinosun.bizmate.ace.backend.businessreview.model.SaveBisReviewInfoResult>"
  SaveBisReviewInfoResult:
    type: "object"
    required:
    - "needSignApprovalBisInfo"
    properties:
      needSignApprovalBisInfo:
        type: "string"
        description: "可签名的审批明文信息"
    description: "保存审批授权预操作信息响应参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.businessreview.model.SaveBisReviewInfoResult"

```