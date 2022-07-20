# rota人事管理项目(文档输出)

## 项目UE
[薪e福-人事管理](http://pubweb.sino.sz/PRD/BizmateUE/temp/renshi/#g=1&p=%E5%91%98%E5%B7%A5%E6%A1%A3%E6%A1%88)

## 代码规范

[代码规范](https://yadong.vercel.app/zrkj/dev/rotaData.html)

## 思维导图嵌入

<iframe id="embed_dom" name="embed_dom" frameborder="0" style="display:block;width:100%; height:500px;" src="https://www.processon.com/embed/62c675f8f346fb075d399056"></iframe>

[人事管理(薪e福)在线思维导图预览](https://www.processon.com/embed/62c675f8f346fb075d399056)


[思维导图xmind格式-薪e福-人事管理](http://119.91.213.59:8888/down/QYQ61sAv0Xt7)


[思维导图svg格式-薪e福-人事管理](http://119.91.213.59:8888/down/ydPI8EdJI3aF)

## 运行启动
1. 花名册项目地址：[https://git.sinosun.com/product/bizmate/ace/frontend/h5/rota](https://git.sinosun.com/product/bizmate/ace/frontend/h5/rota)

2. 启动问题

* git clone with ssh方式:[git@git.sinosun.com.cn:product/bizmate/ace/frontend/h5/rota.git](git@git.sinosun.com.cn:product/bizmate/ace/frontend/h5/rota.git)

* 需要添加ssh-keys: [配置流程](https://git.sinosun.com/help/ssh/README#generate-an-ssh-key-pair)


3. 个人用户名及邮箱

```
git config user.name
```
输出：SINO\jiangyadong

```
git config user.email
```
输出：yadong.jiang@sinosun.com.cn

4. 统一vscode基础配置 setting.json  

```
{
    "editor.tabSize": 4,
    "editor.formatOnSave": false,
    "prettier.tabWidth": 4,
    "prettier.singleQuote": true,
    "files.associations": {
        "*.js": "javascript",
        "*.vue": "vue",
        "*.ftl": "ftl"
    },
    "fileheader.configObj": {
        "autoAdd":false
    },
    "fileheader.customMade": {
        "Author": "dingfeng",
        "Description": ""
    },
    "fileheader.cursorMode": {
        "description": "",
        "param": ""
    },
    "git.ignoreWindowsGit27Warning": true,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "typescript.updateImportsOnFileMove.enabled": "always",
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[json]": {
        "editor.defaultFormatter": "vscode.json-language-features"
    },
    "[jsonc]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascriptreact]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "editor.suggestSelection": "first",
    "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
    "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features"
    },
    "git.showPushSuccessNotification": true,
    "git.alwaysSignOff": true,
    "git.allowNoVerifyCommit": true,
    "git.allowForcePush": true,
    "python.showStartPage": false,
    "[less]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "workbench.editorAssociations": {
        "*.ipynb": "jupyter-notebook"
    },
    "[css]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "terminal.integrated.scrollback": 1000000,
    "git.enableSmartCommit": true,
    "extensions.ignoreRecommendations": true,
    "terminal.integrated.bellDuration": 10000,
    "terminal.integrated.confirmOnExit": true,
    "terminal.integrated.cursorBlinking": true,
    "[vue]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "diffEditor.ignoreTrimWhitespace": false,
    "security.workspace.trust.untrustedFiles": "open",
    "notebook.cellToolbarLocation": {
        "default": "right",
        "jupyter-notebook": "left"
    },
    "window.zoomLevel": -1
}

```

5. 配置镜像源

```
npm config edit
```
```
npm_registry=http://10.0.5.26:8081/repository/sinosun-front-npm-group/
sass_binary_site=http://10.0.5.26:8081/repository/sinosun-front-npm-raw-proxy/
```

6. 固定vue[版本号](https://juejin.cn/post/7000396951392878628)

* 安装项目依赖后，出现不兼容问题
![npm run dev后出现ts1005等问题](https://files.catbox.moe/rc6eu7.png)

* 需要固定vue版本号,最新的vue版本升级为2.7会导致不兼容问题

固定vue版本号为：2.6.11之后，出现编译版本号不匹配的问题
![出现编译版本号不匹配的问题](https://files.catbox.moe/ubu4km.jpg)

解决方案：
```
npm i vue-template-compiler@2.6.11 --save
```

7. 固定版本号(指定develop分支，暂不涉及)

第一步：
根据文档对应 tag，根据tag拉取 vue-fix 分支
本地拉取对应分支代码 切换到vue-fix分支
第二步：
删除项目 node_modules 
删除 package-lock.json
第三步：
修改 版本号  version 项目最新tag号上面加1  
eg: 3.0.2 -> 3.0.3
修改 package.json 中 vue版本 固定为2.6.12

执行 npm i 安装
安装完成之后 执行npm run build 打包 打包出来即可

所有一切 做完之后 合并分支到 develop

    vue-template-compiler 2.6.12
    vue 2.6.12
    vue-loader 15.9.5

8. 运行成功
![rota运行成功界面](https://files.catbox.moe/y1zo7n.jpg)


## 结构目录
```
rota
├─ .babelrc.js                               babelrc配置文件
├─ .editorconfig                             EditorConfig帮助开发人员在不同的编辑器和IDE之间定义和维护一致的编码样式 
├─ .eslintrc.js                              在团队协作中，为避免低级 Bug、产出风格统一的代码，会预先制定编码规范。使用 Lint 工具和代码风格检测工具，则可以辅助编码规范执行，有效控制代码质量。
├─ .git                                      git文件及其内部包含的信息
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  ├─ master
│  │     │  └─ xxt
│  │     └─ remotes
│  │        └─ origin
│  │           └─ HEAD
│  ├─ objects
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-e14f3690c91f2261743453baefe87fde6d2f3709.idx
│  │     └─ pack-e14f3690c91f2261743453baefe87fde6d2f3709.pack
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  ├─ master
│     │  └─ xxt
│     ├─ remotes
│     │  └─ origin
│     │     └─ HEAD
│     └─ tags
├─ .gitignore                               git忽略文件                    
├─ assets                                   静态资源文件夹
│  ├─ font                                  字体文件夹
│  │  └─ sinosun-number.ttf
│  └─ img                                   图片文件夹                                    
│     ├─ attach                             附加图片文件夹(对附加图片需要添加txt说明，注意文件编码格式，防止乱码)
│     │  ├─ animation.gif
│     │  ├─ file_compress.png
│     │  ├─ file_excel.png
│     │  ├─ file_music.png
│     │  ├─ file_pdf.png
│     │  ├─ file_ppt.png
│     │  ├─ file_txt.png
│     │  ├─ file_video.png
│     │  ├─ file_word.png
│     │  └─ 图片说明.txt
│     ├─ bg_sxt_gjj.png
│     ├─ bg_sxt_sbk.png
│     ├─ bg_sxt_sfz.png
│     ├─ bg_sxt_sfz2.png
│     ├─ bg_sxt_xlz.png
│     ├─ bg_sxt_xwz.png
│     ├─ bg_sxt_yhk.png
│     ├─ Black@2x.png
│     ├─ btn_sxt_add.png
│     ├─ chose-no.svg
│     ├─ chose-yes.svg
│     ├─ icon-down@2x.png
│     ├─ icon_salary_edit.svg
│     ├─ icon_toast_send.svg
│     ├─ icon_tuozhuai@2x.png
│     ├─ img_defpage_nocontent@3x.png
│     ├─ img_defpage_nopermission@3x.png
│     ├─ img_salary_successful.png
│     ├─ line_upload@2x.png
│     ├─ pho_peo_biyezhengshu@3x.png
│     ├─ pic_bankcard_up@3x.png
│     ├─ pic_edu_stu@3x.png
│     ├─ pic_idcard_front@3x.png
│     └─ pic_idcard_reverse@3x.png
├─ bankConfig                             
│  ├─ apiUrlConfig.js
│  ├─ commonConfig.js
│  ├─ pageConfig.js
│  ├─ patch
│  │  └─ index.less
│  ├─ platformSupport.ts
│  ├─ routerConfig
│  │  ├─ index.js
│  │  └─ router
│  │     ├─ dimission.js
│  │     ├─ employmentmanager.js
│  │     ├─ inductionManager.js
│  │     ├─ laborContract.js
│  │     ├─ redeploy.js
│  │     └─ roster.js
│  └─ WebJSBridgeImpl.js
├─ build
│  ├─ custom-theme.js
│  ├─ globals.js
│  ├─ utils.js
│  ├─ webpack.base.config.js
│  ├─ webpack.build.config.js
│  ├─ webpack.dev.config.js
│  ├─ webpack.entry.config.js
│  ├─ webpack.plugin.loader.js
│  └─ webpack.theme.config.js
├─ config
│  ├─ config.js
│  └─ index.js
├─ debug.log
├─ deploy.py
├─ make-package.sh
├─ mock
│  ├─ demoData
│  │  ├─ commonDemo.js
│  │  ├─ contract.js
│  │  ├─ dimission.js
│  │  ├─ employmentmanager.js
│  │  ├─ index.js
│  │  ├─ inductionManager.js
│  │  ├─ redeploy.js
│  │  └─ roster.js
│  └─ index.js
├─ package.json
├─ patches
│  └─ @riophae+vue-treeselect+0.4.0.patch
├─ postcss.config.js
├─ README.md
├─ src
│  ├─ app.vue
│  ├─ baseView
│  │  ├─ baseApp.vue
│  │  ├─ baseRouter.vue
│  │  └─ baseScroll.vue
│  ├─ components
│  │  ├─ CalcTableHeight
│  │  │  └─ index.vue
│  │  ├─ importExe
│  │  │  ├─ importExe.scss
│  │  │  └─ importExe.vue
│  │  ├─ importMultiple
│  │  │  ├─ importMultiple.scss
│  │  │  └─ importMultiple.vue
│  │  ├─ mixins
│  │  │  └─ table
│  │  │     └─ index.vue
│  │  ├─ roster
│  │  │  ├─ choseRoster.vue
│  │  │  └─ index.scss
│  │  ├─ SnAvatar
│  │  │  ├─ index.jsx
│  │  │  └─ index.scss
│  │  ├─ SnIcon
│  │  │  ├─ index.jsx
│  │  │  └─ index.scss
│  │  ├─ SnRowItem
│  │  │  ├─ index.jsx
│  │  │  └─ index.scss
│  │  ├─ SnRowItemDown
│  │  │  ├─ index.scss
│  │  │  └─ index.vue
│  │  ├─ SnSteps
│  │  │  └─ index.vue
│  │  └─ steps
│  │     └─ Steps.vue
│  ├─ elements.js
│  ├─ external
│  │  ├─ js
│  │  │  ├─ jszip.min.js
│  │  │  ├─ Sortable.min.js
│  │  │  ├─ text-encoding
│  │  │  │  ├─ encoding-indexes.js
│  │  │  │  └─ encoding.js
│  │  │  └─ xlsx.min.js
│  │  └─ template
│  │     └─ adminTemplate.xls
│  ├─ index.html
│  ├─ lib
│  │  ├─ adapter
│  │  │  └─ index.js
│  │  ├─ contacts
│  │  │  └─ index.js
│  │  ├─ event.js
│  │  ├─ Export2Excel.js
│  │  ├─ FileUtil.ts
│  │  ├─ globalEnum.js
│  │  ├─ netAdapter
│  │  │  └─ index.js
│  │  └─ setup.js
│  ├─ mock
│  │  ├─ inductionManager.js
│  │  └─ roster.js
│  ├─ model
│  │  ├─ AddPayslipInfoRequest.ts
│  │  ├─ employ
│  │  │  └─ ContractBase.ts
│  │  ├─ GetPayslipDetaillResponseResult.ts
│  │  ├─ GetUserPayslipDetailResponseResult.ts
│  │  ├─ ListUserPayslipInfoResponseResult.ts
│  │  ├─ PayslipBase.ts
│  │  ├─ PayslipDetail.ts
│  │  └─ SendUser.ts
│  ├─ router
│  │  └─ baseRouter.js
│  ├─ service
│  │  ├─ Api.ts
│  │  ├─ ApiUrl.ts
│  │  ├─ Common.ts
│  │  ├─ CommonApi.ts
│  │  ├─ Contract.ts
│  │  ├─ Dimission.ts
│  │  ├─ Employmentmanager.ts
│  │  ├─ InductionApi.ts
│  │  ├─ netConfig.ts
│  │  ├─ Redeploy.ts
│  │  ├─ RosterApi.ts
│  │  └─ userApi.ts
│  ├─ shims-tsx.d.ts
│  ├─ shims-vue.d.ts
│  ├─ style
│  │  ├─ baseTheme.scss
│  │  ├─ common.scss
│  │  ├─ element-variables.scss
│  │  ├─ element.scss
│  │  ├─ global.scss
│  │  ├─ hairLine.scss
│  │  ├─ index.scss
│  │  ├─ mixins.scss
│  │  ├─ reset.scss
│  │  └─ var.scss
│  ├─ themes
│  │  ├─ ChangSha
│  │  │  └─ style
│  │  │     ├─ index.less
│  │  │     └─ var.less
│  │  ├─ default
│  │  │  └─ style
│  │  │     ├─ index.less
│  │  │     └─ var.less
│  │  ├─ index.js
│  │  ├─ themeMap.js
│  │  └─ WuLuMuQi
│  │     └─ style
│  │        ├─ index.less
│  │        └─ var.less
│  ├─ thirdparty
│  │  ├─ rosters.xlsx
│  │  ├─ templateExcel.xlsx
│  │  └─ 劳动合同导入模板.xlsx
│  ├─ utils
│  │  ├─ commonUtil.js
│  │  ├─ enum.js
│  │  ├─ Excel.js
│  │  ├─ FileUtils.ts
│  │  ├─ imgBase64Map.js
│  │  ├─ localForage.js
│  │  ├─ patchIE.js
│  │  ├─ StringUtils.ts
│  │  ├─ themeLoader.js
│  │  ├─ uaUtil.js
│  │  └─ upload.js
│  └─ views
│     ├─ dimission
│     │  ├─ dimission.js
│     │  ├─ dimission.vue
│     │  ├─ index.html
│     │  ├─ index.scss
│     │  ├─ store
│     │  │  └─ index.js
│     │  └─ view
│     │     └─ handleResignation
│     │        ├─ handleResignation.vue
│     │        └─ index.scss
│     ├─ employ
│     │  ├─ addEmploy
│     │  │  ├─ index.scss
│     │  │  └─ index.vue
│     │  ├─ components
│     │  │  ├─ SnContract
│     │  │  │  └─ index.vue
│     │  │  ├─ SnEducation
│     │  │  │  └─ index.vue
│     │  │  ├─ SnMaterial
│     │  │  │  └─ index.vue
│     │  │  ├─ SnMaterialDetail
│     │  │  │  └─ index.vue
│     │  │  └─ SnWorkExperience
│     │  │     └─ index.vue
│     │  └─ detailPage
│     │     ├─ index.scss
│     │     └─ index.vue
│     ├─ employmentmanager
│     │  ├─ employmentmanager.html
│     │  ├─ employmentmanager.js
│     │  ├─ employmentmanager.scss
│     │  ├─ employmentmanager.vue
│     │  ├─ store
│     │  │  └─ index.js
│     │  └─ view
│     │     └─ handleformal
│     │        ├─ index.scss
│     │        └─ index.vue
│     ├─ inductionManager
│     │  ├─ inductionManager.html
│     │  ├─ inductionManager.js
│     │  ├─ store
│     │  │  └─ index.js
│     │  └─ view
│     │     ├─ addInduction
│     │     │  ├─ index.scss
│     │     │  └─ index.vue
│     │     ├─ inductionDetail
│     │     │  ├─ index.scss
│     │     │  └─ index.vue
│     │     └─ inductionManager
│     │        ├─ index.scss
│     │        └─ index.vue
│     ├─ laborContract
│     │  ├─ index.html
│     │  ├─ index.scss
│     │  ├─ laborContract.js
│     │  ├─ laborContract.vue
│     │  ├─ store
│     │  │  └─ index.js
│     │  └─ view
│     │     ├─ contractRenewal
│     │     │  ├─ contractRenewal.vue
│     │     │  └─ index.scss
│     │     ├─ contractSigning
│     │     │  ├─ contractSigning.vue
│     │     │  └─ index.scss
│     │     ├─ detail
│     │     │  ├─ detail.vue
│     │     │  └─ index.scss
│     │     └─ importStaffData
│     │        ├─ importStaffData.vue
│     │        └─ index.scss
│     ├─ redeploy
│     │  ├─ index.html
│     │  ├─ index.scss
│     │  ├─ redeploy.js
│     │  ├─ redeploy.vue
│     │  ├─ store
│     │  │  └─ index.js
│     │  └─ view
│     │     └─ handleRedeploy
│     │        ├─ handleRedeploy.vue
│     │        └─ index.scss
│     └─ roster
│        ├─ index.html
│        ├─ index.js
│        ├─ index.scss
│        ├─ index.vue
│        ├─ store
│        │  └─ index.js
│        └─ view
│           ├─ components
│           │  └─ Steps.vue
│           ├─ detail
│           │  ├─ index.scss
│           │  └─ index.vue
│           ├─ importStaffData
│           │  ├─ index.scss
│           │  └─ index.vue
│           └─ personnelChangeDetail
│              ├─ index.scss
│              └─ index.vue
├─ tsconfig.json
└─ tslint.json

```

## 项目结构及流程图pdf

* [lib库结构与使用](http://119.91.213.59:8888/down/Xd2K1uqnV8cP)

* [前端项目结构流程图](http://119.91.213.59:8888/down/fK2LCM0rpP8n)

## 核心流程

### 平台支持类，兼容多平台

::: info
rota/bankConfig/platformSupport.ts文件
:::


```
/*
 * @Autor: miaoju
 * @Description: 平台支持类, 主要是 浏览器Jsbridge、网络请求支持, 用于处理mPaaS、tmf等不同平台兼容支持
 */

const { BridgeAdapter, MPaaSJSBridgeImpl } = require("../src/lib/adapter");
import WebJSBridgeImpl from "./WebJSBridgeImpl.js";
const { NetAdapter, MPaaSNetImpl } = require("../src/lib/netAdapter");
import { getBrowserType, BROWSER_TYPE } from "@sinosun/lib/lib/Utils/uaUtil";
(window as any).DOMAIN_URL_KEY = `YQT_DOMAIN`;
(window as any).PRODUCT_NAME = `bizmate`;
// 当前所属环境 默认webview
if (process.env.CURRENT_ENV === "weboa") {
	(window as any).PRODUCT_NAME = `weboa`;
}
const browserType = getBrowserType();
let baseUrl = "/bizmate/static";
let baseStaticUrl = ``;
// 当前所属环境 默认webview
if (process.env.CURRENT_ENV === "weboa") {
	baseUrl = "/weboa";
	baseStaticUrl = `/bizmate/static/rota/pages/`;
}
// 设置静态资源 源路径
(window as any).BASE_URL = baseUrl;
(window as any).BASE_STATIC_URL = baseStaticUrl;
class PlatformSupport {
	constructor() {}

	// 加载所有svg
	installSvg() {
		const requireAll = (context) => context.keys().map(context);
		const req = (require as any).context("assets/img", true, /\.svg$/);
		requireAll(req);
	}

	/**
	 * 安装jsbridge平台支持
	 */
	installJsBridgeImpl() {
		// 当前所属环境 默认webview
		if (process.env.CURRENT_ENV === "weboa") {
			BridgeAdapter.setJsBridgeImpl(new WebJSBridgeImpl());
			return;
		}
		// 安装mPaaS 的jsbridge
		if (browserType === BROWSER_TYPE.MPASS) {
			BridgeAdapter.setJsBridgeImpl(new MPaaSJSBridgeImpl());
		}
		//纯web浏览器
		if (browserType === BROWSER_TYPE.WEB) {
			BridgeAdapter.setJsBridgeImpl(new WebJSBridgeImpl());
		}
	}

	/**
	 * 安装网络请求平台支持
	 */
	installNetImpl() {
		const encryptConfig = {
			openBSL: false,
			encrypt: true,
			keyType: 1,
		};
		// 当前所属环境 默认webview
		if (process.env.CURRENT_ENV === "weboa") {
			encryptConfig.openBSL = false;
			encryptConfig.encrypt = false;
			NetAdapter.setEncryptConfig(encryptConfig);
			return;
		}
		// web 版本不需要bsl
		if (browserType === BROWSER_TYPE.WEB) {
			encryptConfig.openBSL = false;
			encryptConfig.encrypt = false;
		}
		NetAdapter.setEncryptConfig(encryptConfig);
		// 安装mPaaS 的NetApi
		if (browserType === BROWSER_TYPE.MPASS) {
			NetAdapter.setNetImpl(new MPaaSNetImpl());
		}
	}
	/**
	 * @description: 安装通用配置
	 * 项目不需要前置配置和第三方跳转的可以注释掉 installConfig内部代码
	 * @param {*}
	 */
	installConfig() {
		const commonConfig = require("./commonConfig").default;
		return commonConfig
			.initConfig(browserType)
			.then(() => {
				console.log(`Common_Config is loaded!`);
			})
			.catch((err) => {
				console.log(`Common_Config is failed!`, err);
			});
	}
}
const platformSupport = new PlatformSupport();
export default platformSupport;

```


### 类方法的调用

::: info
rota/src/lib/setup.js文件
:::

```
import platformSupport from "bankConfig/platformSupport";

platformSupport.installSvg();
platformSupport.installJsBridgeImpl();
platformSupport.installNetImpl();
platformSupport.installConfig();

```

### BaseView文件夹

* baseApp.vue  组件依赖

```
<script lang="ts">
import "sslib/setup";
import BaseApp from "@sinosun/lib/lib/BaseView/baseApp";

export default {
    extends: BaseApp
}
</script>
```

https://cn.vuejs.org/v2/api/#extends

* baseRouter.vue 路由页baseRouter组件依赖
* baseScroll.vue (app页面滚动title栏变色基础依赖)



### 路由文件

::: info
vue项目优化之按需加载组件-使用webpack require.ensure与import
:::

![webpack require.ensure项目优化](https://files.catbox.moe/fhqaiw.png)

```
const Employ = r => require.ensure([], () => r(require('@/views/employ/addEmploy/index')), 'employ');
const EditEmploy = r => require.ensure([], () => r(require('@/views/employ/addEmploy/index')), 'employ');
const Roster = r => require.ensure([], () => r(require('@/views/roster/index.vue')), 'roster');
const RosterDetail = r => require.ensure([], () => r(require('@/views/roster/view/detail/index.vue')), 'roster');
const PersonnelChangeDetail = r => require.ensure([], () => r(require('@/views/roster/view/personnelChangeDetail/index.vue')), 'roster');
const  ImportStaffData= r => require.ensure([], () => r(require('@/views/roster/view/importStaffData/index.vue')), 'roster');
```

::: tip
路由基础汇总与导出
:::

![路由基础汇总与导出](https://files.catbox.moe/ou8nun.png)

![根据文件路径查找引入router.config的地方](https://files.catbox.moe/ai3i7m.png)

![babelrc文件中](https://files.catbox.moe/694ydw.png)

::: tip
[@babel/plugin-syntax-dynamic-import的用法](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import/)
:::



## 处理项目启动后进入默认路由的问题

项目启动时，默认对应的端口号为8080 
项目初始启动时，入口为
```
http://10.2.25.83:8080/pages/index.html#/roster
```

::: tip
对于上图中同级的router.js文件如何保证：roster的优先级最高呢？

```
指定entry对象的index的键(属性)：对应的js文件即可，与文件是否命名为index无关。
```
![](https://files.catbox.moe/mbg5np.png)

:::

[自定义staff-http://10.2.25.83:8080/pages/index.html#/staff](http://10.2.25.83:8080/pages/index.html#/staff)
```



let entrys = {
    index:'@/views/staff/staff.js',
    // index: '@/views/roster/index.js',
    inductionManager: '@/views/inductionManager/inductionManager.js',
    employmentmanager: '@/views/employmentmanager/employmentmanager.js',
    dimissionIndex: '@/views/dimission/dimission.js',
    redeployIndex: '@/views/redeploy/redeploy.js',
    laborContractIndex: '@/views/laborContract/laborContract.js',
};
module.exports = entrys;
```
## service及views

views-
* roster: 员工档案（）
* employ：员工档案(暂时没有使用，在webpack入口配置文件中未涉及)
* inductionManager: 入职管理
* employmentmanager：转正管理
* redeploy:调动管理
* dimission:离职管理
* laborContract: 劳动合同管理

路径：rota\src\views

```
 views
│     ├─ dimission
│     │  ├─ dimission.js
│     │  ├─ dimission.vue
│     │  ├─ index.html
│     │  ├─ index.scss
│     │  ├─ store
│     │  │  └─ index.js
│     │  └─ view
│     │     └─ handleResignation
│     │        ├─ handleResignation.vue
│     │        └─ index.scss
│     ├─ employ
│     │  ├─ addEmploy
│     │  │  ├─ index.scss
│     │  │  └─ index.vue
│     │  ├─ components
│     │  │  ├─ SnContract
│     │  │  │  └─ index.vue
│     │  │  ├─ SnEducation
│     │  │  │  └─ index.vue
│     │  │  ├─ SnMaterial
│     │  │  │  └─ index.vue
│     │  │  ├─ SnMaterialDetail
│     │  │  │  └─ index.vue
│     │  │  └─ SnWorkExperience
│     │  │     └─ index.vue
│     │  └─ detailPage
│     │     ├─ index.scss
│     │     └─ index.vue
│     ├─ employmentmanager
│     │  ├─ employmentmanager.html
│     │  ├─ employmentmanager.js
│     │  ├─ employmentmanager.scss
│     │  ├─ employmentmanager.vue
│     │  ├─ store
│     │  │  └─ index.js
│     │  └─ view
│     │     └─ handleformal
│     │        ├─ index.scss
│     │        └─ index.vue
│     ├─ inductionManager
│     │  ├─ inductionManager.html
│     │  ├─ inductionManager.js
│     │  ├─ store
│     │  │  └─ index.js
│     │  └─ view
│     │     ├─ addInduction
│     │     │  ├─ index.scss
│     │     │  └─ index.vue
│     │     ├─ inductionDetail
│     │     │  ├─ index.scss
│     │     │  └─ index.vue
│     │     └─ inductionManager
│     │        ├─ index.scss
│     │        └─ index.vue
│     ├─ laborContract
│     │  ├─ index.html
│     │  ├─ index.scss
│     │  ├─ laborContract.js
│     │  ├─ laborContract.vue
│     │  ├─ store
│     │  │  └─ index.js
│     │  └─ view
│     │     ├─ contractRenewal
│     │     │  ├─ contractRenewal.vue
│     │     │  └─ index.scss
│     │     ├─ contractSigning
│     │     │  ├─ contractSigning.vue
│     │     │  └─ index.scss
│     │     ├─ detail
│     │     │  ├─ detail.vue
│     │     │  └─ index.scss
│     │     └─ importStaffData
│     │        ├─ importStaffData.vue
│     │        └─ index.scss
│     ├─ redeploy
│     │  ├─ index.html
│     │  ├─ index.scss
│     │  ├─ redeploy.js
│     │  ├─ redeploy.vue
│     │  ├─ store
│     │  │  └─ index.js
│     │  └─ view
│     │     └─ handleRedeploy
│     │        ├─ handleRedeploy.vue
│     │        └─ index.scss
│     ├─ roster
│     │  ├─ index.html
│     │  ├─ index.js
│     │  ├─ index.scss
│     │  ├─ index.vue
│     │  ├─ store
│     │  │  └─ index.js
│     │  └─ view
│     │     ├─ components
│     │     │  └─ Steps.vue
│     │     ├─ detail
│     │     │  ├─ index.scss
│     │     │  └─ index.vue
│     │     ├─ importStaffData
│     │     │  ├─ index.scss
│     │     │  └─ index.vue
│     │     └─ personnelChangeDetail
│     │        ├─ index.scss
│     │        └─ index.vue
│     └─ staff
│        ├─ index.html
│        ├─ index.scss
│        ├─ staff.js
│        ├─ staff.vue
│        ├─ store
│        │  └─ index.js
│        └─ view
```

::: warning
![](https://files.catbox.moe/yu6zlq.png)

* 项目按照功能划分，文件夹为功能名，主要包括vue的基础模板形式，将scss文件提出到单独的scss文件，通过 ```<style src="./index.scss" lang="scss"></style>```形式引入。

* 内部含有子级view时，按照嵌套形式，顶层view一般包括index.scss文件，xxx.js文件，xxx.vue文件，以及vuex，其中xxx.js文件功能是对整个功能文件进行整合。

```
import Vue from "vue";
import App from "@/app.vue";
import { RosterRouter } from "routerConfig";
import Router from "vue-router";
import "@/router/baseRouter.js";
import "./index.scss";

import store from "./store";
console.log(`window.location.href_new Router ------>`, window.location.href);
import ThemeLoader from "@/utils/themeLoader";

const initVue = () => {
	const router = new Router({ routes: RosterRouter });

	const EventBus = new Vue();
	// 混合全局控制 进行后退按钮控制 内部路由的事件监听必须放在created之后
	Vue.mixin({
		created() {
			this.$EventBus = EventBus;
		},
	});

	new Vue({
		router,
		store,
		render: (h) => h(App),
	}).$mount("#app");
};

ThemeLoader.load().then(() => {
	// mPaaS 解决首页带参数跳转问题 需要在Router 实例化之前处理
	initVue();
});
```
:::


## service接口相关

| 基本流程      | 操作路径 |
| :---        |    :----:   | 
| 统一管理前缀      | /bankConfig/apiUrlConfig       | 
| 统一管理url   | /service/ApiUrl.ts        |

```
│  ├─ service
│  │  ├─ Api.ts                     基础api类封装，其他功能api通过class类语法继承与增强
│  │  ├─ ApiUrl.ts                  统一管理url
│  │  ├─ Common.ts                  // 获取企业最高管理员信息，文件上传
│  │  ├─ CommonApi.ts               // 文件上传
│  │  ├─ Contract.ts                // 劳动合同管理接口
│  │  ├─ Dimission.ts
│  │  ├─ Employmentmanager.ts
│  │  ├─ InductionApi.ts
│  │  ├─ netConfig.ts
│  │  ├─ Redeploy.ts
│  │  ├─ RosterApi.ts
│  │  └─ userApi.ts
```

::: warning

* 导出的时候通过new关键字导出一个 **new RosterApi**
* 用ts文件书写

```
import Api from "./Api";
import { ROSTER_API_URL,COMMON_API_URL } from "./ApiUrl";

class RosterApi extends Api {
	constructor() {
		super();
	}
	//查询员工档案列表
	searchEmployee(params: object) {
		const url = ROSTER_API_URL.SEARCH_EMPLOYEE;
		const errorMessage = `查询员工档案列表失败`;
		return this.dealResultPromise(url, params, `Post`, errorMessage);
	}
	// 新增员工档案
	addEmployee(params: object) {
		const url = ROSTER_API_URL.ADD_EMPLOYEE;
		const errorMessage = `新增员工档案失败`;
		return this.dealResultPromise(url, params, `Post`, errorMessage);
	}
	// 批量预新增员工档案
	batchAddEmployeePreCheck(params: object) {
		const url = ROSTER_API_URL.BATCH_ADD_EMPLOYEE_PRECHECK;
		const errorMessage = `批量预新增员工档案失败`;
		return this.dealResultPromise(url, params, `Post`, errorMessage);
	}
	// 批量新增员工档案
	batchAddEmployee(params: object) {
		const url = ROSTER_API_URL.BATCH_ADD_EMPLOYEE;
		const errorMessage = `批量新增员工档案失败`;
		return this.dealResultPromise(url, params, `Post`, errorMessage);
	}

	// 查询用户员工档案详情
	queryEmployeeDetail(params: object) {
		const url = ROSTER_API_URL.QUERY_EMPLOYEE_DETAIL;
		const errorMessage = `查询用户详情失败`;
		return this.dealResultPromise(url, params, `Get`, errorMessage);
	}



    //更新员工档案
	updateEmployee(params: object) {
		const url = ROSTER_API_URL.UPDATE_EMPLOYEE;
		const errorMessage = `更新员工档案失败`;
		return this.dealResultPromise(url, params, `Post`, errorMessage);
	}
    //搜索人事异动管理列表
	searchChangesEmployee(params: object) {
		const url = ROSTER_API_URL.SEARCH_CHANGES_EMPLOYEE;
		const errorMessage = `搜索人事异动管理列表失败`;
		return this.dealResultPromise(url, params, `Get`, errorMessage);
	}
    // 导出数据
	exportEmployee(params: object) {
		const url = ROSTER_API_URL.EXPORT_EMPLOYEE;
		const errorMessage = `导出员工档案失败`;
		return this.dealResultPromise(url, params, `Post`, errorMessage);
	}
	// 导出数据，后端导出
	exportEmployeeFile(params: object) {
		const url = ROSTER_API_URL.EXPORT_EMPLOYEE_FILE;
		const errorMessage = `导出员工档案失败`;
		return this.dealResultPromise(url, params, `Post`, errorMessage);
	}
	// 查询待入职详情
	getWaitEntryInfo(params: object) {
		const url = ROSTER_API_URL.QUERY_WAIT_ENTRY_INFO;
		const errorMessage = `查询待入职详情失败`;
		return this.dealResultPromise(url, params, `Get`, errorMessage);
	}
	// 查询基础数据
	getDictData(params: object) {
		const url = ROSTER_API_URL.GET_DICT_DATA;
		const errorMessage = `查询基础数据失败`;
		return this.dealResultPromise(url, params, `Get`, errorMessage);
	}
	// 部门查询
	getDepartmentTree(params: object) {
		const url = COMMON_API_URL.GET_DEPARTMENT_TREE;
		const errorMessage = `查询基础数据失败`;
		return this.dealResultPromise(url, params, `Get`, errorMessage);
	}
	// 岗位查询
	listRole(params: object) {
		const url = COMMON_API_URL.QUERY_LIST_ROLE;
		const errorMessage = `查询基础数据失败`;
		return this.dealResultPromise(url, params, `Get`, errorMessage);
	}
}

export default new RosterApi();
```

:::

## 模拟数据Mock.js

[https://github.com/nuysoft/Mock](https://github.com/nuysoft/Mock)  
[http://mockjs.com/](http://mockjs.com/)

项目文件路径：rota/mock

```
├─ mock
│  ├─ demoData                         功能demo-MOCK   主要函数：returnResData
│  │  ├─ commonDemo.js
│  │  ├─ contract.js
│  │  ├─ dimission.js
│  │  ├─ employmentmanager.js
│  │  ├─ index.js
│  │  ├─ inductionManager.js
│  │  ├─ redeploy.js
│  │  └─ roster.js
│  └─ index.js                          主要函数：getSuccess
```

::: warning
returnResData主要用于单独的功能demo中，

```
const returnResData = data => {
	return data;
};
```

:::


::: warning

getSuccess主要用于返回包括状态码以及结果信息状态的功能，

```
const getSuccess = (data = {}) => {  
    return {    
        resultCode: 0,    
        resultMessage: "ok",    
        result: data    
    }    
}
```

:::


## 与后端对接及API相关配置

* 打开[http://apieditor.sino.sz:28080/#](http://apieditor.sino.sz:28080/#)查看接口文档  (内网环境)

* 导入yaml文件，文件路径：[person6-yaml文件](https://git.sinosun.com/product/bizmate/ace/mgmt/-/blob/develop/2.%E6%80%BB%E4%BD%93%E8%AE%BE%E8%AE%A1/%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/%E7%94%A8%E6%88%B7%E6%9C%8D%E5%8A%A1/%E4%BA%BA%E4%BA%8B%E7%AE%A1%E7%90%86/personal6.yaml)

时间：2022年7月13日 10：10：00 
当前yaml文件内容参考：
```
swagger: "2.0"
info:
  description: "人事管理操作接口说明"
  version: "1.0.0"
  title: "personnel management API"
basePath: "/"
tags:
  - name: "archives-manage"
    description: "员工档案管理相关API"
  - name: "entry-manage"
    description: "入职管理相关API"
  - name: "formal-manage"
    description: "转正管理相关API"
  - name: "move-manage"
    description: "调动管理相关API"
  - name: "quit-manage"
    description: "离职管理相关API"
  - name: "contract-manage"
    description: "合同管理相关API"
  - name: "serviceapi"
    description: "服务间API"
  - name: "statistic-manage"
    description: "统计管理API"
  - name: "approval-manage"
    description: "审批管理API"
schemes:
  - "https"
consumes:
  - "application/json"
produces:
  - "application/json"
paths:
  /addEmployee:
    post:
      tags:
        - "archives-manage"
      summary: "新增员工档案。keycloak权限[app_role:user]"
      operationId: "addEmployee"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "新增员工档案请求参数"
          required: true
          schema:
            $ref: "#/definitions/AddEmployeeRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseAddWaitEmployeeResponse"
  /addEmployee/applyFrontCheck:
    post:
      tags:
        - "approval-manage"
      summary: "新增员工档案前置检查。keycloak权限[app_role:user]"
      operationId: "addEmployeeApplyFrontCheck"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "新增员工档案请求参数"
          required: true
          schema:
            $ref: "#/definitions/AddEmployeeRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseApplyFrontCheckResult"
  /addWaitEmployee:
    post:
      tags:
        - "entry-manage"
      summary: "新增待入职。keycloak权限[app_role:user]"
      operationId: "addWaitEmployee"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "新增待入职请求参数"
          required: true
          schema:
            $ref: "#/definitions/AddWaitEmployeeRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseAddWaitEmployeeResponse"
  /addWaitEmployee/applyFrontCheck:
    post:
      tags:
        - "approval-manage"
      summary: "新增待入职前置检查。keycloak权限[app_role:user]"
      operationId: "addWaitEmployeeApplyFrontCheck"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "新增待入职请求参数"
          required: true
          schema:
            $ref: "#/definitions/AddWaitEmployeeRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseApplyFrontCheckResult"
  /batchAddEmployee:
    post:
      tags:
        - "archives-manage"
      summary: "批量新增员工档案。keycloak权限[app_role:user]"
      operationId: "batchAddEmployee"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "批量新增员工档案请求参数"
          required: true
          schema:
            $ref: "#/definitions/BatchAddEmployeeRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponse"
  /batchAddEmployeePreCheck:
    post:
      tags:
        - "archives-manage"
      summary: "批量新增员工档案预检查。keycloak权限[app_role:user]"
      operationId: "batchAddEmployeePreCheck"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "批量新增员工档案请求参数"
          required: true
          schema:
            $ref: "#/definitions/BatchAddEmployeeRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseBatchAddEmployeeCheckResponse"
  /checkContractNum:
    post:
      tags:
        - "contract-manage"
      summary: "校验合同编号是否存在。keycloak权限[app_role:user]"
      operationId: "checkContractNum"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "校验合同编号是否存在的请求参数"
          required: true
          schema:
            $ref: "#/definitions/CheckContractNumRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseCheckContractNumResponse"
  /employeeChangeStatistic:
    post:
      tags:
        - "statistic-manage"
      summary: "员工异动统计查询。keycloak权限[app_role:SERVICE_ROLE_default]"
      operationId: "employeeChangeStatistic"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "员工异动统计查询"
          required: true
          schema:
            $ref: "#/definitions/EmployeeChangeRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseEmployeeChangeResponse"
  /employeeCountStatistic:
    post:
      tags:
        - "statistic-manage"
      summary: "员工数统计查询。keycloak权限[app_role:SERVICE_ROLE_default]"
      operationId: "employeeCountStatistic"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "搜索员工档案请求参数"
          required: true
          schema:
            $ref: "#/definitions/EmployeeCountRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseEmployeeCountResponse"
  /exportEmployee:
    post:
      tags:
        - "archives-manage"
      summary: "导出员工档案（列表）。keycloak权限[app_role:user]"
      operationId: "exportEmployee"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "导出员工档案请求参数"
          required: true
          schema:
            $ref: "#/definitions/SearchEmployeeRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseExportEmployeeResponse"
  /exportEmployeeFile:
    post:
      tags:
        - "archives-manage"
      summary: "导出员工档案（文件）。keycloak权限[app_role:user]"
      operationId: "exportEmployeeFile"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "导出员工档案请求参数"
          required: true
          schema:
            $ref: "#/definitions/SearchEmployeeRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseExportEmployeeResponse"
  /getUserContractList:
    post:
      tags:
        - "contract-manage"
      summary: "查询用户的合同列表。keycloak权限[app_role:user]"
      operationId: "getUserContractList"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "查询用户的合同列表的请求参数"
          required: true
          schema:
            $ref: "#/definitions/GetUserContractListRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseGetUserContractListResponse"
  /getWaitEntryInfo:
    get:
      tags:
        - "entry-manage"
      summary: "查询待入职详情。keycloak权限[app_role:user]"
      operationId: "getWaitEntryInfo"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - name: "orgId"
          in: "query"
          description: "企业ID"
          required: true
          type: "string"
        - name: "recordId"
          in: "query"
          description: "入职记录ID"
          required: true
          type: "string"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseGetWaitEntryInfoResponse"
  /getWillExpireContractNumber:
    post:
      tags:
        - "contract-manage"
      summary: "查询即将到期的合同数目。keycloak权限[app_role:user]"
      operationId: "getWillExpireContractNumber"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "查询即将到期的合同数目的请求参数"
          required: true
          schema:
            $ref: "#/definitions/GetWillExpireContractRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseGetWillExpireContractResponse"
  /handTransferUser:
    post:
      tags:
        - "move-manage"
      summary: "办理人员调动。keycloak权限[app_role:user]"
      operationId: "handTransferUser"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "办理人员调动的请求参数"
          required: true
          schema:
            $ref: "#/definitions/HandleTransferUserRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponse"
  /handTransferUser/applyFrontCheck:
    post:
      tags:
        - "approval-manage"
      summary: "办理人员调动前置检查。keycloak权限[app_role:user]"
      operationId: "handTransferUserApplyFrontCheck"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "办理人员调动的请求参数"
          required: true
          schema:
            $ref: "#/definitions/HandleTransferUserRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseApplyFrontCheckResult"
  /handleFormalUser:
    post:
      tags:
        - "formal-manage"
      summary: "办理人员转正。keycloak权限[app_role:user]"
      operationId: "handleFormalUser"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "办理人员转正的请求参数"
          required: true
          schema:
            $ref: "#/definitions/HandleFormalUserRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponse"
  /handleFormalUser/applyFrontCheck:
    post:
      tags:
        - "approval-manage"
      summary: "办理人员转正前置检查。keycloak权限[app_role:user]"
      operationId: "handleFormalUserApplyFrontCheck"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "办理人员转正的请求参数"
          required: true
          schema:
            $ref: "#/definitions/HandleFormalUserRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseApplyFrontCheckResult"
  /handleOrAbandonEntry:
    post:
      tags:
        - "entry-manage"
      summary: "办理或者放弃入职。keycloak权限[app_role:user]"
      operationId: "handleOrAbandonEntry"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "办理或者放弃入职的请求参数"
          required: true
          schema:
            $ref: "#/definitions/HandleOrAbandonEntryRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponse"
  /handleOrAbandonEntry/applyFrontCheck:
    post:
      tags:
        - "approval-manage"
      summary: "办理或者放弃入职前置检查。keycloak权限[app_role:user]"
      operationId: "handleOrAbandonEntryApplyFrontCheck"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "办理或者放弃入职的请求参数"
          required: true
          schema:
            $ref: "#/definitions/HandleOrAbandonEntryRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseApplyFrontCheckResult"
  /handleQuitUser:
    post:
      tags:
        - "quit-manage"
      summary: "办理人员离职。keycloak权限[app_role:user]"
      operationId: "handleQuitUser"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "办理人员离职的请求参数"
          required: true
          schema:
            $ref: "#/definitions/HandleQuitUserRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponse"
  /handleQuitUser/applyFrontCheck:
    post:
      tags:
        - "approval-manage"
      summary: "办理人员离职前置检查。keycloak权限[app_role:user]"
      operationId: "handleQuitUserApplyFrontCheck"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "办理人员离职的请求参数"
          required: true
          schema:
            $ref: "#/definitions/HandleQuitUserRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseApplyFrontCheckResult"
  /importContractList:
    post:
      tags:
        - "contract-manage"
      summary: "导入合同。keycloak权限[app_role:user]"
      operationId: "importContractList"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "签订合同的请求参数"
          required: true
          schema:
            $ref: "#/definitions/ImportContractListRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponse"
  /listContractByCondition:
    post:
      tags:
        - "contract-manage"
      summary: "根据条件查询合同信息。keycloak权限[app_role:user]"
      operationId: "listContractByCondition"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "根据条件查询合同信息的请求参数"
          required: true
          schema:
            $ref: "#/definitions/ListContractByConditionRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseListContractByConditionResponse"
  /onJobEmployeeAgeDistributeStatistic:
    post:
      tags:
        - "statistic-manage"
      summary: "在职员工年龄分布统计查询。keycloak权限[app_role:SERVICE_ROLE_default]"
      operationId: "onJobEmployeeAgeDistributeStatistic"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "在职员工年龄分布统计查询的请求参数"
          required: true
          schema:
            $ref: "#/definitions/OnJobEmployeeDistributeStatisticRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseOnJobEmployeeAgeDistributeStatisticResponse"
  /onJobEmployeeDistributeStatistic:
    post:
      tags:
        - "statistic-manage"
      summary: "在职员工状态分布统计查询。keycloak权限[app_role:SERVICE_ROLE_default]"
      operationId: "onJobEmployeeDistributeStatistic"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "在职员工状态分布统计查询的请求参数"
          required: true
          schema:
            $ref: "#/definitions/OnJobEmployeeDistributeStatisticRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseOnJobEmployeeDistributeStatisticResponse"
  /onJobEmployeeEducationDistributeStatistic:
    post:
      tags:
        - "statistic-manage"
      summary: "在职员学历分布统计查询。keycloak权限[app_role:SERVICE_ROLE_default]"
      operationId: "onJobEmployeeEducationDistributeStatistic"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "在职员工学历分布统计查询的请求参数"
          required: true
          schema:
            $ref: "#/definitions/OnJobEmployeeDistributeStatisticRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseOnJobEmployeeEducationDistributeStatisticResponse"
  /preImportContractCheck:
    post:
      tags:
        - "contract-manage"
      summary: "导入合同前预检查。keycloak权限[app_role:user]"
      operationId: "preImportContractCheck"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "导入合同前预检查的请求参数"
          required: true
          schema:
            $ref: "#/definitions/PreImportContractCheckRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponsePreImportContractCheckResponse"
  /queryEmployeeDetail:
    get:
      tags:
        - "archives-manage"
      summary: "查询员工详细信息。keycloak权限[app_role:user]"
      operationId: "queryEmployeeDetail"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - name: "orgId"
          in: "query"
          description: "企业id"
          required: true
          type: "string"
        - name: "employeeId"
          in: "query"
          description: "employeeId"
          required: true
          type: "string"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseEmployeeDetailResponse"
  /queryQuitDetail:
    get:
      tags:
        - "quit-manage"
      summary: "查询离职详情。keycloak权限[app_role:user]"
      operationId: "queryQuitDetail"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - name: "orgId"
          in: "query"
          description: "企业ID"
          required: true
          type: "string"
        - name: "recordId"
          in: "query"
          description: "离职记录ID"
          required: true
          type: "string"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseQuitDetailResponse"
  /queryTransferDetail:
    get:
      tags:
        - "move-manage"
      summary: "查询调动详情。keycloak权限[app_role:user]"
      operationId: "queryTransferDetail"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - name: "orgId"
          in: "query"
          description: "企业ID"
          required: true
          type: "string"
        - name: "recordId"
          in: "query"
          description: "调动记录ID"
          required: true
          type: "string"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseTransferDetailResponse"
  /searchChangesEmployee:
    get:
      tags:
        - "archives-manage"
      summary: "搜索人事变动管理列表。keycloak权限[app_role:user]"
      operationId: "searchChangesEmployee"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - name: "orgId"
          in: "query"
          description: "企业id"
          required: true
          type: "string"
        - name: "employeeId"
          in: "query"
          description: "employeeId"
          required: true
          type: "string"
        - name: "pageNum"
          in: "query"
          description: "页码"
          required: false
          type: "integer"
          format: "int32"
        - name: "pageSize"
          in: "query"
          description: "分页大小"
          required: false
          type: "integer"
          format: "int32"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseSearchChangesEmployeeResponse"
  /searchEmployee:
    post:
      tags:
        - "archives-manage"
      summary: "搜索员工档案。keycloak权限[app_role:user]"
      operationId: "searchEmployee"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "搜索员工档案请求参数"
          required: true
          schema:
            $ref: "#/definitions/SearchEmployeeRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseSearchEmployeeResponse"
  /searchEmployeeService:
    post:
      tags:
        - "serviceapi"
      summary: "搜索员工档案。keycloak权限[app_role:SERVICE_ROLE_default]"
      operationId: "searchEmployeeService"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "搜索员工档案请求参数"
          required: true
          schema:
            $ref: "#/definitions/SearchEmployeeRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseSearchEmployeeResponse"
  /searchFormalEmployee:
    post:
      tags:
        - "formal-manage"
      summary: "搜索转正管理列表。keycloak权限[app_role:user]"
      operationId: "searchFormalEmployee"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "新增用户字段分组请求参数"
          required: true
          schema:
            $ref: "#/definitions/SearchFormalEmployeeRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseSearchFormalEmployeeResponse"
  /searchMoveEmployee:
    post:
      tags:
        - "move-manage"
      summary: "搜索调动管理列表。keycloak权限[app_role:user]"
      operationId: "searchMoveEmployee"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "新增用户字段分组请求参数"
          required: true
          schema:
            $ref: "#/definitions/SearchMoveEmployeeRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseSearchMoveEmployeeResponse"
  /searchQuitEmployee:
    post:
      tags:
        - "quit-manage"
      summary: "搜索离职管理列表。keycloak权限[app_role:user]"
      operationId: "searchQuitEmployee"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "新增用户字段分组请求参数"
          required: true
          schema:
            $ref: "#/definitions/SearchQuitEmployeeRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseSearchQuitEmployeeResponse"
  /searchWaitEmployee:
    post:
      tags:
        - "entry-manage"
      summary: "搜索入职管理列表。keycloak权限[app_role:user]"
      operationId: "searchWaitEmployee"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "新增用户字段分组请求参数"
          required: true
          schema:
            $ref: "#/definitions/SearchWaitEmployeeRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseSearchWaitEmployeeResponse"
  /signContract:
    post:
      tags:
        - "contract-manage"
      summary: "签订合同。keycloak权限[app_role:user]"
      operationId: "signContract"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "签订合同的请求参数"
          required: true
          schema:
            $ref: "#/definitions/SignContractRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseSignContractResponse"
  /updateEmployee:
    post:
      tags:
        - "archives-manage"
      summary: "更新员工档案。keycloak权限[app_role:user]"
      operationId: "updateEmployee"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "更新员工档案请求参数"
          required: true
          schema:
            $ref: "#/definitions/UpdateEmployeeRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponse"
  /updateEmployee/applyFrontCheck:
    post:
      tags:
        - "approval-manage"
      summary: "更新员工档案前置检查。keycloak权限[app_role:user]"
      operationId: "updateEmployeeApplyFrontCheck"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "更新员工档案请求参数"
          required: true
          schema:
            $ref: "#/definitions/UpdateEmployeeRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponseApplyFrontCheckResult"
  /uploadContractFile:
    post:
      tags:
        - "contract-manage"
      summary: "上传合同的附件(合同附件全量修改)。keycloak权限[app_role:user]"
      operationId: "uploadContractFile"
      consumes:
        - "application/json"
      produces:
        - "application/json"
      parameters:
        - in: "body"
          name: "request"
          description: "上传合同的附件的请求参数"
          required: true
          schema:
            $ref: "#/definitions/UploadContractFileRequest"
      responses:
        "200":
          description: "response of 200"
          schema:
            $ref: "#/definitions/ApiResponse"
definitions:
  AddEmployeeRequest:
    type: "object"
    required:
      - "idNumber"
      - "idType"
      - "mobile"
      - "name"
      - "operator"
      - "orgId"
      - "staffStatus"
    properties:
      accumulationNo:
        type: "string"
        description: "公积金账号"
      age:
        type: "string"
        description: "年龄"
      birthday:
        type: "integer"
        format: "int64"
        description: "出生日期"
      certificatesFiles:
        type: "array"
        description: "个人证件照"
        items:
          type: "string"
      childrenNum:
        type: "integer"
        format: "int32"
        description: "子女数量"
      coverStrategy:
        type: "string"
        description: "覆盖策略 COVER 删除已有的，USE_OLD 使用已有的"
      degreeFiles:
        type: "array"
        description: "学位证书"
        items:
          type: "string"
      departmentId:
        type: "string"
        description: "部门Id"
      educationExpInfos:
        type: "array"
        description: "教育经历"
        items:
          $ref: "#/definitions/EducationExpInfo"
      educationFiles:
        type: "array"
        description: "学历证书"
        items:
          type: "string"
      email:
        type: "string"
        description: "邮箱"
      emergencyContactMobile:
        type: "string"
        description: "紧急联系人手机号"
      emergencyContactName:
        type: "string"
        description: "紧急联系人"
      employeeNo:
        type: "string"
        description: "工号"
      entryFiles:
        type: "array"
        description: "入职材料"
        items:
          $ref: "#/definitions/OperateFile"
      formalDate:
        type: "integer"
        format: "int64"
        description: "转正日期"
      formalFileList:
        type: "array"
        description: "转正材料"
        items:
          $ref: "#/definitions/OperateFile"
      gender:
        type: "string"
        description: "性别 (MALE:男性 FEMALE:女性)"
      idFiles:
        type: "array"
        description: "身份证"
        items:
          type: "string"
      idNumber:
        type: "string"
        description: "证件号码"
      idType:
        type: "string"
        description: "证件类型,ID_CARD=身份证,PASSPORT=护照,PERMANENT_RESIDENT_ID_CARD=中华人民\
          共和国外国人永久居留身份证,HONGKONG_MACAO_TAIWAN_CARD=港澳台居民通行证,TEMPORARY_ID_CARD=临时身份\
          证,CHINA_OTHER_CARD=中国居民其他证件,FOREIGN_OTHER_CARD=外国公民其他证件"
      inductionDate:
        type: "integer"
        format: "int64"
        description: "入职日期"
      linkAddress:
        description: "联系地址"
        $ref: "#/definitions/AddressInfo"
      maritalStatus:
        type: "string"
        description: "婚姻情况"
      mobile:
        type: "string"
        description: "手机号"
      name:
        type: "string"
        description: "用户姓名"
      nation:
        type: "string"
        description: "民族"
      operator:
        type: "string"
        description: "操作人的bizMateId"
      orgId:
        type: "string"
        description: "企业Id"
      otherFiles:
        type: "array"
        description: "其他证书"
        items:
          type: "string"
      phone:
        type: "string"
        description: "用户座机"
      planInductionDate:
        type: "integer"
        format: "int64"
        description: "预计入职日期"
      politic:
        type: "string"
        description: "政治面貌"
      postId:
        type: "string"
        description: "岗位Id"
      quitFiles:
        type: "array"
        description: "离职证明"
        items:
          $ref: "#/definitions/OperateFile"
      registeredAddress:
        description: "户籍所在地"
        $ref: "#/definitions/AddressInfo"
      registeredType:
        type: "string"
        description: "户口性质"
      remark:
        type: "string"
        description: "备注"
      socialInsuranceNo:
        type: "string"
        description: "社保账号"
      staffStatus:
        type: "integer"
        format: "int32"
        description: "员工状态  1待入职，2放弃入职 3试用，4正式，5已离职"
      staffType:
        type: "integer"
        format: "int32"
        description: "员工类型  1全职 ，2兼职 ，3实习 ，4劳务派遣 ，5外包 ，6退休返聘 ，7其他"
      trialDuration:
        type: "integer"
        format: "int32"
        description: "试用期"
      wagesBank:
        type: "string"
        description: "开户行"
      wagesNo:
        type: "string"
        description: "工资卡号"
      workExpInfos:
        type: "array"
        description: "工作经历"
        items:
          $ref: "#/definitions/WorkExpInfo"
    description: "添加员工档案请求参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.AddEmployeeRequest"
  AddressInfo:
    type: "object"
    properties:
      detailAddress:
        type: "string"
        description: "详细信息"
      firstAddressCode:
        type: "string"
        description: "一级code"
      firstAddressName:
        type: "string"
        description: "一级名称"
      secondAddressCode:
        type: "string"
        description: "二级code"
      secondAddressName:
        type: "string"
        description: "二级名称"
      thirdAddressCode:
        type: "string"
        description: "三级code"
      thirdAddressName:
        type: "string"
        description: "三级名称"
    description: "地址信息"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.AddressInfo"
  EducationExpInfo:
    type: "object"
    properties:
      education:
        type: "string"
        description: "学历"
      graduateInstitutions:
        type: "string"
        description: " 毕业院校"
      graduateTime:
        type: "integer"
        format: "int64"
        description: "毕业时间:10位Linux时间戳精确到秒"
      profession:
        type: "string"
        description: "专业"
    description: "教育经历信息"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.EducationExpInfo"
  OperateFile:
    type: "object"
    required:
      - "fileName"
      - "fileUrl"
    properties:
      fileName:
        type: "string"
        description: "附件名称"
      fileUrl:
        type: "string"
        description: "附件url"
    description: "附件信息"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.OperateFile"
  WorkExpInfo:
    type: "object"
    properties:
      witness:
        type: "string"
        description: "证明人"
      witnessMobile:
        type: "string"
        description: "证明人联系电话"
      workEndTime:
        type: "integer"
        format: "int64"
        description: "工作结束时间:10位Linux时间戳精确到秒"
      workOrgName:
        type: "string"
        description: "工作单位"
      workPost:
        type: "string"
        description: " 岗位"
      workStartTime:
        type: "integer"
        format: "int64"
        description: "工作开始时间:10位Linux时间戳精确到秒"
    description: "工作经历信息"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.WorkExpInfo"
  AddWaitEmployeeResponse:
    type: "object"
    required:
      - "employeeId"
    properties:
      employeeId:
        type: "string"
        description: "员工ID"
      orgId:
        type: "string"
        description: "企业Id"
    description: "添加待入职返回"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.AddWaitEmployeeResponse"
  ApiResponse:
    type: "object"
    properties:
      bid:
        type: "string"
      result:
        type: "object"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ApiResponse"
  ApiResponseAddWaitEmployeeResponse:
    type: "object"
    properties:
      bid:
        type: "string"
      result:
        $ref: "#/definitions/AddWaitEmployeeResponse"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ApiResponse<com.sinosun.bizmate.ace.backend.personnelmgmt.model.AddWaitEmployeeResponse>"
  ApiResponseApplyFrontCheckResult:
    type: "object"
    properties:
      bid:
        type: "string"
      result:
        $ref: "#/definitions/ApplyFrontCheckResult"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ApiResponse<com.sinosun.bizmate.ace.backend.businessreview.model.ApplyFrontCheckResult>"
  ApplyFrontCheckResult:
    type: "object"
    required:
      - "optCode"
    properties:
      optCode:
        type: "integer"
        format: "int32"
        description: "检查结果，0表示正确"
    description: "业务前置检查响应参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.businessreview.model.ApplyFrontCheckResult"
  AddWaitEmployeeRequest:
    type: "object"
    required:
      - "idNumber"
      - "idType"
      - "mobile"
      - "name"
      - "operator"
      - "orgId"
      - "planInductionDate"
    properties:
      age:
        type: "string"
        description: "年龄"
      birthday:
        type: "integer"
        format: "int64"
        description: "出生日期"
      coverStrategy:
        type: "string"
        description: "覆盖策略 COVER 删除已有的，USE_OLD 使用已有的"
      departmentId:
        type: "string"
        description: "入职部门Id"
      educationExpInfos:
        type: "array"
        description: "教育经历"
        items:
          $ref: "#/definitions/EducationExpInfo"
      employeeNo:
        type: "string"
        description: "员工号"
      entryFiles:
        type: "array"
        description: "入职材料"
        items:
          $ref: "#/definitions/OperateFile"
      gender:
        type: "string"
        description: "性别 (MALE:男性 FEMALE:女性)"
      idNumber:
        type: "string"
        description: "证件号码"
      idType:
        type: "string"
        description: "证件类型,ID_CARD=身份证,PASSPORT=护照,\" +\n            \"PERMANENT_RESIDENT_ID_CARD=中\
          华人民共和国外国人永久居留身份证,\" +\n            \"HONGKONG_MACAO_TAIWAN_CARD=港澳台居民通行证\
          ,\" +\n            \"TEMPORARY_ID_CARD=临时身份证,CHINA_OTHER_CARD=中国居民其他证件,\"\
          \ +\n            \"FOREIGN_OTHER_CARD=外国公民其他证件"
      mobile:
        type: "string"
        description: "手机号"
      name:
        type: "string"
        description: "用户姓名"
      operator:
        type: "string"
        description: "操作人的bizMateId"
      orgId:
        type: "string"
        description: "企业Id"
      planInductionDate:
        type: "integer"
        format: "int64"
        description: "预计入职日期"
      postId:
        type: "string"
        description: "入职岗位Id"
      staffType:
        type: "integer"
        format: "int32"
        description: "员工类型  1全职 ，2兼职 ，3实习 ，4劳务派遣 ，5外包 ，6退休返聘 ，7其他"
    description: "添加待入职请求参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.AddWaitEmployeeRequest"
  BatchAddEmployeeRequest:
    type: "object"
    required:
      - "addEmployeeRequests"
    properties:
      addEmployeeRequests:
        type: "array"
        description: "员工档案列表"
        items:
          $ref: "#/definitions/AddEmployeeRequest"
        maxItems: 1000
        minItems: 1
    description: "添加员工档案请求参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.BatchAddEmployeeRequest"
  ApiResponseBatchAddEmployeeCheckResponse:
    type: "object"
    properties:
      bid:
        type: "string"
      result:
        $ref: "#/definitions/BatchAddEmployeeCheckResponse"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ApiResponse<com.sinosun.bizmate.ace.backend.personnelmgmt.model.BatchAddEmployeeCheckResponse>"
  BatchAddEmployeeCheckResponse:
    type: "object"
    required:
      - "checkAddEmployeeResponses"
    properties:
      checkAddEmployeeResponses:
        type: "array"
        description: "检查结果列表"
        items:
          $ref: "#/definitions/CheckAddEmployeeResponse"
        maxItems: 1000
        minItems: 1
    description: "添加员工档案预检查返回"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.BatchAddEmployeeCheckResponse"
  CheckAddEmployeeResponse:
    type: "object"
    required:
      - "idNumber"
      - "idType"
      - "mobile"
      - "name"
      - "operator"
      - "orgId"
      - "staffStatus"
    properties:
      accumulationNo:
        type: "string"
        description: "公积金账号"
      age:
        type: "string"
        description: "年龄"
      birthday:
        type: "integer"
        format: "int64"
        description: "出生日期"
      certificatesFiles:
        type: "array"
        description: "个人证件照"
        items:
          type: "string"
      checkResult:
        type: "string"
        description: "检查结果 (TRUE:正确 ERROR:错误)"
      checkResultMark:
        type: "string"
        description: "检查结果描述"
      childrenNum:
        type: "integer"
        format: "int32"
        description: "子女数量"
      coverStrategy:
        type: "string"
        description: "覆盖策略 COVER 删除已有的，USE_OLD 使用已有的"
      degreeFiles:
        type: "array"
        description: "学位证书"
        items:
          type: "string"
      departmentId:
        type: "string"
        description: "部门Id"
      educationExpInfos:
        type: "array"
        description: "教育经历"
        items:
          $ref: "#/definitions/EducationExpInfo"
      educationFiles:
        type: "array"
        description: "学历证书"
        items:
          type: "string"
      email:
        type: "string"
        description: "邮箱"
      emergencyContactMobile:
        type: "string"
        description: "紧急联系人手机号"
      emergencyContactName:
        type: "string"
        description: "紧急联系人"
      employeeNo:
        type: "string"
        description: "工号"
      entryFiles:
        type: "array"
        description: "入职材料"
        items:
          $ref: "#/definitions/OperateFile"
      formalDate:
        type: "integer"
        format: "int64"
        description: "转正日期"
      formalFileList:
        type: "array"
        description: "转正材料"
        items:
          $ref: "#/definitions/OperateFile"
      gender:
        type: "string"
        description: "性别 (MALE:男性 FEMALE:女性)"
      idFiles:
        type: "array"
        description: "身份证"
        items:
          type: "string"
      idNumber:
        type: "string"
        description: "证件号码"
      idType:
        type: "string"
        description: "证件类型,ID_CARD=身份证,PASSPORT=护照,PERMANENT_RESIDENT_ID_CARD=中华人民\
          共和国外国人永久居留身份证,HONGKONG_MACAO_TAIWAN_CARD=港澳台居民通行证,TEMPORARY_ID_CARD=临时身份\
          证,CHINA_OTHER_CARD=中国居民其他证件,FOREIGN_OTHER_CARD=外国公民其他证件"
      inductionDate:
        type: "integer"
        format: "int64"
        description: "入职日期"
      linkAddress:
        description: "联系地址"
        $ref: "#/definitions/AddressInfo"
      maritalStatus:
        type: "string"
        description: "婚姻情况"
      mobile:
        type: "string"
        description: "手机号"
      name:
        type: "string"
        description: "用户姓名"
      nation:
        type: "string"
        description: "民族"
      operator:
        type: "string"
        description: "操作人的bizMateId"
      orgId:
        type: "string"
        description: "企业Id"
      otherFiles:
        type: "array"
        description: "其他证书"
        items:
          type: "string"
      phone:
        type: "string"
        description: "用户座机"
      planInductionDate:
        type: "integer"
        format: "int64"
        description: "预计入职日期"
      politic:
        type: "string"
        description: "政治面貌"
      postId:
        type: "string"
        description: "岗位Id"
      quitFiles:
        type: "array"
        description: "离职证明"
        items:
          $ref: "#/definitions/OperateFile"
      registeredAddress:
        description: "户籍所在地"
        $ref: "#/definitions/AddressInfo"
      registeredType:
        type: "string"
        description: "户口性质"
      remark:
        type: "string"
        description: "备注"
      socialInsuranceNo:
        type: "string"
        description: "社保账号"
      staffStatus:
        type: "integer"
        format: "int32"
        description: "员工状态  1待入职，2放弃入职 3试用，4正式，5已离职"
      staffType:
        type: "integer"
        format: "int32"
        description: "员工类型  1全职 ，2兼职 ，3实习 ，4劳务派遣 ，5外包 ，6退休返聘 ，7其他"
      trialDuration:
        type: "integer"
        format: "int32"
        description: "试用期"
      wagesBank:
        type: "string"
        description: "开户行"
      wagesNo:
        type: "string"
        description: "工资卡号"
      workExpInfos:
        type: "array"
        description: "工作经历"
        items:
          $ref: "#/definitions/WorkExpInfo"
    description: "添加员工档案请求参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.CheckAddEmployeeResponse"
  CheckContractNumRequest:
    type: "object"
    required:
      - "contractNum"
      - "orgId"
    properties:
      contractNum:
        type: "string"
        description: "合同编号"
      orgId:
        type: "string"
        description: "企业Id"
    description: "校验合同编号是否存在的请求参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.CheckContractNumRequest"
  ApiResponseCheckContractNumResponse:
    type: "object"
    properties:
      bid:
        type: "string"
      result:
        $ref: "#/definitions/CheckContractNumResponse"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ApiResponse<com.sinosun.bizmate.ace.backend.personnelmgmt.model.CheckContractNumResponse>"
  CheckContractNumResponse:
    type: "object"
    properties:
      contractNumExist:
        type: "boolean"
        description: "合同编号是否存在：true存在,false不存在"
    description: "校验合同编号是否存在的请求参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.CheckContractNumResponse"
  EmployeeChangeRequest:
    type: "object"
    required:
      - "endDate"
      - "orgId"
      - "startDate"
      - "typeLists"
    properties:
      endDate:
        type: "integer"
        format: "int64"
        description: "结束时间，11位时间戳"
      orgId:
        type: "string"
        description: "企业id"
      startDate:
        type: "integer"
        format: "int64"
        description: "开始时间，11位时间戳"
      typeLists:
        type: "array"
        description: "异动类型: 1 新进 2 离职 3 流动 4 进出"
        items:
          type: "integer"
          format: "int32"
        maxItems: 2147483647
        minItems: 1
    description: "员工数统计查询请求"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.EmployeeChangeRequest"
  ApiResponseEmployeeChangeResponse:
    type: "object"
    properties:
      bid:
        type: "string"
      result:
        $ref: "#/definitions/EmployeeChangeResponse"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ApiResponse<com.sinosun.bizmate.ace.backend.personnelmgmt.model.EmployeeChangeResponse>"
  EmployeeChangeResponse:
    type: "object"
    properties:
      orgId:
        type: "string"
        description: "企业id"
      typeStatistics:
        type: "array"
        description: "类型统计列表"
        items:
          $ref: "#/definitions/TypeStatistic"
    description: "员工数统计返回"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.EmployeeChangeResponse"
  MonthCountInfo:
    type: "object"
    properties:
      count:
        type: "integer"
        format: "int32"
        description: "员工数"
      month:
        type: "integer"
        format: "int64"
        description: "月度"
      upRate:
        type: "number"
        format: "double"
        description: "增长率"
    description: "月度信息"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.MonthCountInfo"
  TypeStatistic:
    type: "object"
    properties:
      monthCountInfos:
        type: "array"
        description: "月度信息列表"
        items:
          $ref: "#/definitions/MonthCountInfo"
      type:
        type: "integer"
        format: "int32"
        description: "员工数类型：1 待入职 2 入职 3 试用 4 正式 5 离职 6 在职 异动类型 1 新进 2 离职 3 流动 4 进\
          出"
    description: "类型统计列表"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.TypeStatistic"
  EmployeeCountRequest:
    type: "object"
    required:
      - "endDate"
      - "orgId"
      - "startDate"
      - "typeLists"
    properties:
      endDate:
        type: "integer"
        format: "int64"
        description: "结束时间，11位时间戳"
      orgId:
        type: "string"
        description: "企业id"
      startDate:
        type: "integer"
        format: "int64"
        description: "开始时间，11位时间戳"
      typeLists:
        type: "array"
        description: "员工数类型：1 待入职 2 入职 3 试用 4 正式 5 离职 6 在职"
        items:
          type: "integer"
          format: "int32"
        maxItems: 2147483647
        minItems: 1
    description: "员工数统计查询请求"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.EmployeeCountRequest"
  ApiResponseEmployeeCountResponse:
    type: "object"
    properties:
      bid:
        type: "string"
      result:
        $ref: "#/definitions/EmployeeCountResponse"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ApiResponse<com.sinosun.bizmate.ace.backend.personnelmgmt.model.EmployeeCountResponse>"
  EmployeeCountResponse:
    type: "object"
    properties:
      orgId:
        type: "string"
        description: "企业id"
      typeStatistics:
        type: "array"
        description: "类型统计列表"
        items:
          $ref: "#/definitions/TypeStatistic"
    description: "员工数统计返回"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.EmployeeCountResponse"
  SearchEmployeeRequest:
    type: "object"
    required:
      - "orgId"
    properties:
      departmentIds:
        type: "array"
        description: "部门Id列表"
        items:
          type: "string"
      inductionDateEnd:
        type: "integer"
        format: "int64"
        description: "入职结束日期"
      inductionDateStart:
        type: "integer"
        format: "int64"
        description: "入职开始日期"
      orgId:
        type: "string"
        description: "企业Id"
      pageNum:
        type: "integer"
        format: "int32"
        description: "页码"
      pageSize:
        type: "integer"
        format: "int32"
        description: "分页大小"
      postIds:
        type: "array"
        description: "岗位Id列表"
        items:
          type: "string"
      searchKey:
        type: "string"
        description: "搜索字段（仅支持姓名和工号和手机号）"
      staffStatusList:
        type: "array"
        description: "员工状态列表"
        items:
          type: "integer"
          format: "int32"
      staffTypes:
        type: "array"
        description: "员工类型列表"
        items:
          type: "integer"
          format: "int32"
    description: "搜索用户请求参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.SearchEmployeeRequest"
  ApiResponseExportEmployeeResponse:
    type: "object"
    properties:
      bid:
        type: "string"
      result:
        $ref: "#/definitions/ExportEmployeeResponse"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ApiResponse<com.sinosun.bizmate.ace.backend.personnelmgmt.model.ExportEmployeeResponse>"
  EmployeeDetailResponse:
    type: "object"
    required:
      - "employeeId"
      - "idNumber"
      - "idType"
      - "mobile"
      - "name"
      - "operator"
      - "orgId"
      - "staffStatus"
    properties:
      abandonReason:
        type: "string"
        description: "放弃入职原因"
      accumulationNo:
        type: "string"
        description: "公积金账号"
      age:
        type: "string"
        description: "年龄"
      birthday:
        type: "integer"
        format: "int64"
        description: "出生日期"
      certificatesFiles:
        type: "array"
        description: "个人证件照"
        items:
          type: "string"
      childrenNum:
        type: "integer"
        format: "int32"
        description: "子女数量"
      coverStrategy:
        type: "string"
        description: "覆盖策略 COVER 删除已有的，USE_OLD 使用已有的"
      degreeFiles:
        type: "array"
        description: "学位证书"
        items:
          type: "string"
      departmentId:
        type: "string"
        description: "部门Id"
      departmentName:
        type: "string"
        description: "部门名称"
      educationExpInfos:
        type: "array"
        description: "教育经历"
        items:
          $ref: "#/definitions/EducationExpInfo"
      educationFiles:
        type: "array"
        description: "学历证书"
        items:
          type: "string"
      email:
        type: "string"
        description: "邮箱"
      emergencyContactMobile:
        type: "string"
        description: "紧急联系人手机号"
      emergencyContactName:
        type: "string"
        description: "紧急联系人"
      employeeId:
        type: "string"
        description: "employeeId"
      employeeNo:
        type: "string"
        description: "工号"
      entryFiles:
        type: "array"
        description: "入职材料"
        items:
          $ref: "#/definitions/OperateFile"
      formalDate:
        type: "integer"
        format: "int64"
        description: "转正日期"
      formalEvaluate:
        type: "string"
        description: "转正评价信息"
      formalFileList:
        type: "array"
        description: "转正材料"
        items:
          $ref: "#/definitions/OperateFile"
      formalReport:
        type: "string"
        description: "转正述职信息"
      gender:
        type: "string"
        description: "性别 (MALE:男性 FEMALE:女性)"
      idFiles:
        type: "array"
        description: "身份证"
        items:
          type: "string"
      idNumber:
        type: "string"
        description: "证件号码"
      idType:
        type: "string"
        description: "证件类型,ID_CARD=身份证,PASSPORT=护照,PERMANENT_RESIDENT_ID_CARD=中华人民\
          共和国外国人永久居留身份证,HONGKONG_MACAO_TAIWAN_CARD=港澳台居民通行证,TEMPORARY_ID_CARD=临时身份\
          证,CHINA_OTHER_CARD=中国居民其他证件,FOREIGN_OTHER_CARD=外国公民其他证件"
      inductionDate:
        type: "integer"
        format: "int64"
        description: "入职日期"
      linkAddress:
        description: "联系地址"
        $ref: "#/definitions/AddressInfo"
      maritalStatus:
        type: "string"
        description: "婚姻情况"
      mobile:
        type: "string"
        description: "手机号"
      name:
        type: "string"
        description: "用户姓名"
      nation:
        type: "string"
        description: "民族"
      operator:
        type: "string"
        description: "操作人的bizMateId"
      orgId:
        type: "string"
        description: "企业Id"
      otherFiles:
        type: "array"
        description: "其他证书"
        items:
          type: "string"
      phone:
        type: "string"
        description: "用户座机"
      planInductionDate:
        type: "integer"
        format: "int64"
        description: "预计入职日期"
      politic:
        type: "string"
        description: "政治面貌"
      postId:
        type: "string"
        description: "岗位Id"
      postName:
        type: "string"
        description: "岗位名称"
      quitDate:
        type: "integer"
        format: "int64"
        description: "离职日期"
      quitFiles:
        type: "array"
        description: "离职证明"
        items:
          $ref: "#/definitions/OperateFile"
      registeredAddress:
        description: "户籍所在地"
        $ref: "#/definitions/AddressInfo"
      registeredType:
        type: "string"
        description: "户口性质"
      remark:
        type: "string"
        description: "备注"
      socialInsuranceNo:
        type: "string"
        description: "社保账号"
      staffStatus:
        type: "integer"
        format: "int32"
        description: "员工状态  1待入职，2放弃入职 3试用，4正式，5已离职"
      staffType:
        type: "integer"
        format: "int32"
        description: "员工类型  1全职 ，2兼职 ，3实习 ，4劳务派遣 ，5外包 ，6退休返聘 ，7其他"
      trialDuration:
        type: "integer"
        format: "int32"
        description: "试用期"
      wagesBank:
        type: "string"
        description: "开户行"
      wagesNo:
        type: "string"
        description: "工资卡号"
      workExpInfos:
        type: "array"
        description: "工作经历"
        items:
          $ref: "#/definitions/WorkExpInfo"
    description: "用户详细信息返回"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.EmployeeDetailResponse"
  ExportEmployeeResponse:
    type: "object"
    properties:
      downloadUrl:
        type: "string"
        description: "文件下载地址"
      employeeDetailResponseList:
        type: "array"
        description: "用户详情列表"
        items:
          $ref: "#/definitions/EmployeeDetailResponse"
      fileName:
        type: "string"
        description: "报表文件名称"
    description: "导出用户返回结果"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ExportEmployeeResponse"
  GetUserContractListRequest:
    type: "object"
    required:
      - "employeeId"
      - "orgId"
    properties:
      employeeId:
        type: "string"
        description: "employeeId"
      orgId:
        type: "string"
        description: "企业Id"
    description: "查询用户的合同列表的请求参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.GetUserContractListRequest"
  ApiResponseGetUserContractListResponse:
    type: "object"
    properties:
      bid:
        type: "string"
      result:
        $ref: "#/definitions/GetUserContractListResponse"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ApiResponse<com.sinosun.bizmate.ace.backend.personnelmgmt.model.GetUserContractListResponse>"
  ContractFile:
    type: "object"
    required:
      - "contractFileName"
      - "contractFileUrl"
    properties:
      contractFileName:
        type: "string"
        description: "合同附件名称"
      contractFileUrl:
        type: "string"
        description: "合同附件url"
    description: "合同的附件信息"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ContractFile"
  ContractInfo:
    type: "object"
    properties:
      contractFiles:
        type: "array"
        description: "合同附件"
        items:
          $ref: "#/definitions/ContractFile"
      contractId:
        type: "string"
        description: "合同ID"
      contractNum:
        type: "string"
        description: "合同编号"
      contractPeriod:
        type: "integer"
        format: "int32"
        description: "合同期限:0无,1(1个月),2(3个月),3(6个月),4(1年),5(2年),6(3年),7(5年),8(10年)"
      contractStatus:
        type: "integer"
        format: "int32"
        description: "合同状态:1正常,2已到期,3已解除"
      contractType:
        type: "integer"
        format: "int32"
        description: "合同类型:1固定期限劳动合同,2无固定期限劳动合同,3实习协议,4劳务协议,5劳务派遣合同,6返聘协议，7短期劳动合同\
          ,8其它"
      employeeId:
        type: "string"
        description: "员工ID"
      endTime:
        type: "integer"
        format: "int64"
        description: "合同结束时间:10位Linux时间戳精确到秒"
      orgId:
        type: "string"
        description: "企业Id"
      startTime:
        type: "integer"
        format: "int64"
        description: "合同起始时间:10位Linux时间戳精确到秒"
    description: "合同基本信息"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ContractInfo"
  GetUserContractListResponse:
    type: "object"
    properties:
      contractInfoList:
        type: "array"
        description: "合同列表信息"
        items:
          $ref: "#/definitions/ContractInfo"
    description: "查询用户的合同列表的响应结果"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.GetUserContractListResponse"
  ApiResponseGetWaitEntryInfoResponse:
    type: "object"
    properties:
      bid:
        type: "string"
      result:
        $ref: "#/definitions/GetWaitEntryInfoResponse"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ApiResponse<com.sinosun.bizmate.ace.backend.personnelmgmt.model.GetWaitEntryInfoResponse>"
  GetWaitEntryInfoResponse:
    type: "object"
    properties:
      age:
        type: "string"
        description: "年龄"
      birthday:
        type: "integer"
        format: "int64"
        description: "出生日期"
      departmentId:
        type: "string"
        description: "部门Id"
      departmentName:
        type: "string"
        description: "部门名称"
      educationExpInfoList:
        type: "array"
        description: "教育经历"
        items:
          $ref: "#/definitions/EducationExpInfo"
      employeeNo:
        type: "string"
        description: "工号"
      entryFiles:
        type: "array"
        description: "入职材料"
        items:
          $ref: "#/definitions/OperateFile"
      gender:
        type: "string"
        description: "性别(MALE:男性 FEMALE:女性)"
      idNumber:
        type: "string"
        description: "证件号码"
      idType:
        type: "string"
        description: "证件类型,ID_CARD=身份证,PASSPORT=护照,PERMANENT_RESIDENT_ID_CARD=中华人民\
          共和国外国人永久居留身份证,HONGKONG_MACAO_TAIWAN_CARD=港澳台居民通行证,TEMPORARY_ID_CARD=临时身份\
          证,CHINA_OTHER_CARD=中国居民其他证件,FOREIGN_OTHER_CARD=外国公民其他证件"
      mobile:
        type: "string"
        description: "用户手机"
      name:
        type: "string"
        description: "用户姓名"
      planInductionDate:
        type: "integer"
        format: "int64"
        description: "预计入职日期"
      postId:
        type: "string"
        description: "岗位Id"
      postName:
        type: "string"
        description: "岗位名称"
      recordId:
        type: "string"
        description: "记录ID"
      staffType:
        type: "integer"
        format: "int32"
        description: "员工类型  1全职 ，2兼职 ，3实习 ，4劳务派遣 ，5外包 ，6退休返聘 ，7其他"
    description: "根据条件查询合同信息的请求参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.GetWaitEntryInfoResponse"
  GetWillExpireContractRequest:
    type: "object"
    required:
      - "orgId"
    properties:
      orgId:
        type: "string"
        description: "企业Id"
    description: "查询即将到期的合同数目的请求参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.GetWillExpireContractRequest"
  ApiResponseGetWillExpireContractResponse:
    type: "object"
    properties:
      bid:
        type: "string"
      result:
        $ref: "#/definitions/GetWillExpireContractResponse"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ApiResponse<com.sinosun.bizmate.ace.backend.personnelmgmt.model.GetWillExpireContractResponse>"
  GetWillExpireContractResponse:
    type: "object"
    properties:
      willExpireContractNumber:
        type: "integer"
        format: "int32"
        description: "即将到期的合同数量"
    description: "查询即将到期的合同的结果响应"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.GetWillExpireContractResponse"
  HandleTransferUserRequest:
    type: "object"
    required:
      - "employeeId"
      - "moveDate"
      - "operator"
      - "orgId"
    properties:
      employeeId:
        type: "string"
        description: "员工ID"
      moveDate:
        type: "integer"
        format: "int64"
        description: "调动生效日期:10位Linux时间戳精确到秒"
      moveFileList:
        type: "array"
        description: "调动材料列表"
        items:
          $ref: "#/definitions/OperateFile"
      moveReason:
        type: "string"
        description: "调动原因"
      newDepartmentId:
        type: "string"
        description: "调动后部门ID"
      newPostId:
        type: "string"
        description: "调动后岗位ID"
      oldDepartmentId:
        type: "string"
        description: "原部门ID"
      oldPostId:
        type: "string"
        description: "原岗位ID"
      operator:
        type: "string"
        description: "操作人的bizMateId"
      orgId:
        type: "string"
        description: "企业Id"
      remark:
        type: "string"
        description: "备注"
    description: "办理人员调动的请求参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.HandleTransferUserRequest"
  HandleFormalUserRequest:
    type: "object"
    required:
      - "actualFormalDate"
      - "employeeId"
      - "operator"
      - "orgId"
    properties:
      actualFormalDate:
        type: "integer"
        format: "int64"
        description: "实际转正日期:10位Linux时间戳精确到秒"
      employeeId:
        type: "string"
        description: "员工ID"
      formalEvaluate:
        type: "string"
        description: "转正评价信息"
      formalFileList:
        type: "array"
        description: "转正材料"
        items:
          $ref: "#/definitions/OperateFile"
      formalReport:
        type: "string"
        description: "转正述职信息"
      operator:
        type: "string"
        description: "操作人的bizMateId"
      orgId:
        type: "string"
        description: "企业Id"
      remark:
        type: "string"
        description: "备注"
    description: "办理人员转正的请求参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.HandleFormalUserRequest"
  HandleOrAbandonEntryRequest:
    type: "object"
    required:
      - "operateType"
      - "operator"
      - "orgId"
      - "recordId"
    properties:
      abandonReason:
        type: "string"
        description: "放弃原因(放弃入职时必填):1=个人原因,2=工作不感兴趣,3=原公司留任,4=薪资不满意,5=工作地点不满意,6=其他"
      operateType:
        type: "integer"
        format: "int32"
        description: "操作类型：2确认入职,3放弃入职"
      operator:
        type: "string"
        description: "操作人的bizMateId"
      orgId:
        type: "string"
        description: "企业Id"
      recordId:
        type: "string"
        description: "入职记录ID"
      remark:
        type: "string"
        description: "备注"
      updateEmployeeRequest:
        description: "更新人员档案请求参数:办理入职的时候必填,放弃入职的时候不传"
        $ref: "#/definitions/UpdateEmployeeRequest"
    description: "办理或者放弃入职的请求参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.HandleOrAbandonEntryRequest"
  UpdateEmployeeRequest:
    type: "object"
    required:
      - "employeeId"
      - "idNumber"
      - "idType"
      - "mobile"
      - "name"
      - "operator"
      - "orgId"
      - "staffStatus"
    properties:
      abandonReason:
        type: "string"
        description: "放弃入职原因"
      accumulationNo:
        type: "string"
        description: "公积金账号"
      age:
        type: "string"
        description: "年龄"
      birthday:
        type: "integer"
        format: "int64"
        description: "出生日期"
      certificatesFiles:
        type: "array"
        description: "个人证件照"
        items:
          type: "string"
      childrenNum:
        type: "integer"
        format: "int32"
        description: "子女数量"
      coverStrategy:
        type: "string"
        description: "覆盖策略 COVER 删除已有的，USE_OLD 使用已有的"
      degreeFiles:
        type: "array"
        description: "学位证书"
        items:
          type: "string"
      departmentId:
        type: "string"
        description: "部门Id"
      educationExpInfos:
        type: "array"
        description: "教育经历"
        items:
          $ref: "#/definitions/EducationExpInfo"
      educationFiles:
        type: "array"
        description: "学历证书"
        items:
          type: "string"
      email:
        type: "string"
        description: "邮箱"
      emergencyContactMobile:
        type: "string"
        description: "紧急联系人手机号"
      emergencyContactName:
        type: "string"
        description: "紧急联系人"
      employeeId:
        type: "string"
        description: "employeeId"
      employeeNo:
        type: "string"
        description: "工号"
      entryFiles:
        type: "array"
        description: "入职材料"
        items:
          $ref: "#/definitions/OperateFile"
      formalDate:
        type: "integer"
        format: "int64"
        description: "转正日期"
      formalEvaluate:
        type: "string"
        description: "转正评价信息"
      formalFileList:
        type: "array"
        description: "转正材料"
        items:
          $ref: "#/definitions/OperateFile"
      formalReport:
        type: "string"
        description: "转正述职信息"
      gender:
        type: "string"
        description: "性别 (MALE:男性 FEMALE:女性)"
      idFiles:
        type: "array"
        description: "身份证"
        items:
          type: "string"
      idNumber:
        type: "string"
        description: "证件号码"
      idType:
        type: "string"
        description: "证件类型,ID_CARD=身份证,PASSPORT=护照,PERMANENT_RESIDENT_ID_CARD=中华人民\
          共和国外国人永久居留身份证,HONGKONG_MACAO_TAIWAN_CARD=港澳台居民通行证,TEMPORARY_ID_CARD=临时身份\
          证,CHINA_OTHER_CARD=中国居民其他证件,FOREIGN_OTHER_CARD=外国公民其他证件"
      inductionDate:
        type: "integer"
        format: "int64"
        description: "入职日期"
      linkAddress:
        description: "联系地址"
        $ref: "#/definitions/AddressInfo"
      maritalStatus:
        type: "string"
        description: "婚姻情况"
      mobile:
        type: "string"
        description: "手机号"
      name:
        type: "string"
        description: "用户姓名"
      nation:
        type: "string"
        description: "民族"
      operator:
        type: "string"
        description: "操作人的bizMateId"
      orgId:
        type: "string"
        description: "企业Id"
      otherFiles:
        type: "array"
        description: "其他证书"
        items:
          type: "string"
      phone:
        type: "string"
        description: "用户座机"
      planInductionDate:
        type: "integer"
        format: "int64"
        description: "预计入职日期"
      politic:
        type: "string"
        description: "政治面貌"
      postId:
        type: "string"
        description: "岗位Id"
      quitDate:
        type: "integer"
        format: "int64"
        description: "离职日期"
      quitFiles:
        type: "array"
        description: "离职证明"
        items:
          $ref: "#/definitions/OperateFile"
      registeredAddress:
        description: "户籍所在地"
        $ref: "#/definitions/AddressInfo"
      registeredType:
        type: "string"
        description: "户口性质"
      remark:
        type: "string"
        description: "备注"
      socialInsuranceNo:
        type: "string"
        description: "社保账号"
      staffStatus:
        type: "integer"
        format: "int32"
        description: "员工状态  1待入职，2放弃入职 3试用，4正式，5已离职"
      staffType:
        type: "integer"
        format: "int32"
        description: "员工类型  1全职 ，2兼职 ，3实习 ，4劳务派遣 ，5外包 ，6退休返聘 ，7其他"
      trialDuration:
        type: "integer"
        format: "int32"
        description: "试用期"
      wagesBank:
        type: "string"
        description: "开户行"
      wagesNo:
        type: "string"
        description: "工资卡号"
      workExpInfos:
        type: "array"
        description: "工作经历"
        items:
          $ref: "#/definitions/WorkExpInfo"
    description: "更新待入职请求参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.UpdateEmployeeRequest"
  HandleQuitUserRequest:
    type: "object"
    required:
      - "employeeId"
      - "operator"
      - "orgId"
      - "quitDate"
      - "quitType"
    properties:
      employeeId:
        type: "string"
        description: "员工ID"
      operator:
        type: "string"
        description: "操作人的bizMateId"
      orgId:
        type: "string"
        description: "企业Id"
      quitDate:
        type: "integer"
        format: "int64"
        description: "离职日期:10位Linux时间戳精确到秒"
      quitFileList:
        type: "array"
        description: "离职材料列表"
        items:
          $ref: "#/definitions/OperateFile"
      quitReason:
        type: "string"
        description: "离职原因"
      quitType:
        type: "integer"
        format: "int32"
        description: "离职类型:1主动离职,2被动离职,3退休"
      remark:
        type: "string"
        description: "备注"
    description: "办理人员离职的请求参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.HandleQuitUserRequest"
  ImportContractListRequest:
    type: "object"
    required:
      - "signContractRequestList"
    properties:
      signContractRequestList:
        type: "array"
        description: "签订合同列表信息"
        items:
          $ref: "#/definitions/SignContractRequest"
    description: "导入合同的请求参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ImportContractListRequest"
  SignContractRequest:
    type: "object"
    required:
      - "contractPeriod"
      - "employeeId"
      - "orgId"
      - "startTime"
    properties:
      contractFiles:
        type: "array"
        description: "合同附件"
        items:
          $ref: "#/definitions/ContractFile"
      contractNum:
        type: "string"
        description: "合同编号"
      contractPeriod:
        type: "integer"
        format: "int32"
        description: "合同期限:0无,1(1个月),2(3个月),3(6个月),4(1年),5(2年),6(3年),7(5年),8(10年)"
      contractType:
        type: "integer"
        format: "int32"
        description: "合同类型:1固定期限劳动合同,2无固定期限劳动合同,3实习协议,4劳务协议,5劳务派遣合同,6返聘协议，7短期劳动合同\
          ,8其它"
      employeeId:
        type: "string"
        description: "员工ID"
      endTime:
        type: "integer"
        format: "int64"
        description: "合同结束时间:10位Linux时间戳精确到秒"
      orgId:
        type: "string"
        description: "企业Id"
      startTime:
        type: "integer"
        format: "int64"
        description: "合同起始时间:10位Linux时间戳精确到秒"
    description: "签订合同的请求参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.SignContractRequest"
  ListContractByConditionRequest:
    type: "object"
    required:
      - "orgId"
      - "signStatus"
    properties:
      contractNum:
        type: "string"
        description: "合同编号"
      contractStatus:
        type: "integer"
        format: "int32"
        description: "合同状态:1正常,2已到期,3已解除"
      contractType:
        type: "integer"
        format: "int32"
        description: "合同类型:1固定期限劳动合同,2无固定期限劳动合同,3实习协议,4劳务协议,5劳务派遣合同,6返聘协议，7短期劳动合同\
          ,8其它"
      departmentIds:
        type: "array"
        description: "部门ID列表"
        items:
          type: "string"
      endTime:
        type: "integer"
        format: "int64"
        description: "到期日结束时间:10位Linux时间戳精确到秒"
      nameOrEmployeeNo:
        type: "string"
        description: "姓名或员工号"
      orgId:
        type: "string"
        description: "企业Id"
      pageNum:
        type: "integer"
        format: "int32"
        description: "当前页"
      pageSize:
        type: "integer"
        format: "int32"
        description: "每页显示条数"
      signStatus:
        type: "integer"
        format: "int32"
        description: "签订状态:0全部,1未签订,2已签订"
      sortField:
        type: "integer"
        format: "int32"
        description: "排序字段：0 入职日期,1合同起始日,2合同到期日,不传则默认是0"
      sortFieldOrder:
        type: "integer"
        format: "int32"
        description: "升降序：1升序,2降序,不传则默认是1"
      staffStatus:
        type: "array"
        description: "员工状态:3试用,4正式,5已离职"
        items:
          type: "integer"
          format: "int32"
      startTime:
        type: "integer"
        format: "int64"
        description: "到期日起始时间:10位Linux时间戳精确到秒"
    description: "根据条件查询合同信息的请求参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ListContractByConditionRequest"
  ApiResponseListContractByConditionResponse:
    type: "object"
    properties:
      bid:
        type: "string"
      result:
        $ref: "#/definitions/ListContractByConditionResponse"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ApiResponse<com.sinosun.bizmate.ace.backend.personnelmgmt.model.ListContractByConditionResponse>"
  EmployeeContractInfo:
    type: "object"
    required:
      - "idNumber"
      - "idType"
    properties:
      departmentId:
        type: "string"
        description: "部门Id"
      departmentName:
        type: "string"
        description: "部门名称"
      employeeId:
        type: "string"
        description: "员工id"
      employeeNo:
        type: "string"
        description: "工号"
      formalDate:
        type: "integer"
        format: "int64"
        description: "转正日期"
      gender:
        type: "string"
        description: "性别 (MALE:男性 FEMALE:女性)"
      idNumber:
        type: "string"
        description: "证件号码"
      idType:
        type: "string"
        description: "证件类型,ID_CARD=身份证,PASSPORT=护照,\" +\n            \"PERMANENT_RESIDENT_ID_CARD=中\
          华人民共和国外国人永久居留身份证,\" +\n            \"HONGKONG_MACAO_TAIWAN_CARD=港澳台居民通行证\
          ,\" +\n            \"TEMPORARY_ID_CARD=临时身份证,CHINA_OTHER_CARD=中国居民其他证件,\"\
          \ +\n            \"FOREIGN_OTHER_CARD=外国公民其他证件"
      inductionDate:
        type: "integer"
        format: "int64"
        description: "入职日期"
      lastedContractInfo:
        description: "最新的合同信息"
        $ref: "#/definitions/ContractInfo"
      mobile:
        type: "string"
        description: "手机号"
      name:
        type: "string"
        description: "用户姓名"
      orgId:
        type: "string"
        description: "企业Id"
      postId:
        type: "string"
        description: "岗位Id"
      postName:
        type: "string"
        description: "岗位名称"
      quitDate:
        type: "integer"
        format: "int64"
        description: "离职日期"
      staffStatus:
        type: "integer"
        format: "int32"
        description: "员工状态  1待入职，2放弃入职 3试用，4正式，5已离职"
      staffType:
        type: "integer"
        format: "int32"
        description: "员工类型  1全职 ，2兼职 ，3实习 ，4劳务派遣 ，5外包 ，6退休返聘 ，7其他"
      wagesNo:
        type: "string"
        description: "工资卡号"
    description: "员工合同信息"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.EmployeeContractInfo"
  ListContractByConditionResponse:
    type: "object"
    properties:
      employeeContractInfoList:
        type: "array"
        items:
          $ref: "#/definitions/EmployeeContractInfo"
      pageNum:
        type: "integer"
        format: "int32"
        description: "当前页码"
      pageSize:
        type: "integer"
        format: "int32"
        description: "每页查询数量"
      pages:
        type: "integer"
        format: "int32"
        description: "总页码"
      total:
        type: "integer"
        format: "int32"
        description: "总数量"
    description: "根据条件查询合同信息的响应结果"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ListContractByConditionResponse"
  OnJobEmployeeDistributeStatisticRequest:
    type: "object"
    required:
      - "orgId"
    properties:
      orgId:
        type: "string"
        description: "企业id"
    description: "在职员工分布统计查询的请求参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.OnJobEmployeeDistributeStatisticRequest"
  ApiResponseOnJobEmployeeAgeDistributeStatisticResponse:
    type: "object"
    properties:
      bid:
        type: "string"
      result:
        $ref: "#/definitions/OnJobEmployeeAgeDistributeStatisticResponse"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ApiResponse<com.sinosun.bizmate.ace.backend.personnelmgmt.model.OnJobEmployeeAgeDistributeStatisticResponse>"
  OnJobEmployeeAgeDistributeStatisticResponse:
    type: "object"
    properties:
      result:
        type: "array"
        description: "在职员工年龄统计"
        items:
          $ref: "#/definitions/OnJobEmployeeAgeStatistic"
    description: "在职员工年龄分布统计查询的结果响应"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.OnJobEmployeeAgeDistributeStatisticResponse"
  OnJobEmployeeAgeStatistic:
    type: "object"
    properties:
      employeeCount:
        type: "integer"
        format: "int64"
        description: "员工人数"
      type:
        type: "integer"
        format: "int32"
        description: "员工年龄段类型： 1(18-25岁) 2(26-30岁) 3(31-35岁) 4(36-40岁) 5(41-45岁) 6(45-50岁\
          ) 7(50以上)  8其它"
    description: "在职员工年龄统计"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.OnJobEmployeeAgeStatistic"
  ApiResponseOnJobEmployeeDistributeStatisticResponse:
    type: "object"
    properties:
      bid:
        type: "string"
      result:
        $ref: "#/definitions/OnJobEmployeeDistributeStatisticResponse"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ApiResponse<com.sinosun.bizmate.ace.backend.personnelmgmt.model.OnJobEmployeeDistributeStatisticResponse>"
  OnJobEmployeeDistributeStatisticResponse:
    type: "object"
    properties:
      result:
        type: "array"
        items:
          $ref: "#/definitions/OnJobEmployeeTypeStatistic"
    description: "在职员工状态分布统计查询的结果响应"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.OnJobEmployeeDistributeStatisticResponse"
  OnJobEmployeeTypeStatistic:
    type: "object"
    properties:
      employeeCount:
        type: "integer"
        format: "int64"
        description: "员工人数"
      type:
        type: "integer"
        format: "int32"
        description: "员工数类型：3 试用 4 正式"
    description: "在职员工类型统计"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.OnJobEmployeeTypeStatistic"
  ApiResponseOnJobEmployeeEducationDistributeStatisticResponse:
    type: "object"
    properties:
      bid:
        type: "string"
      result:
        $ref: "#/definitions/OnJobEmployeeEducationDistributeStatisticResponse"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ApiResponse<com.sinosun.bizmate.ace.backend.personnelmgmt.model.OnJobEmployeeEducationDistributeStatisticResponse>"
  OnJobEmployeeEducationDistributeStatisticResponse:
    type: "object"
    properties:
      result:
        type: "array"
        description: "在职员工年龄统计"
        items:
          $ref: "#/definitions/OnJobEmployeeEducationStatistic"
    description: "在职员工年龄分布统计查询的结果响应"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.OnJobEmployeeEducationDistributeStatisticResponse"
  OnJobEmployeeEducationStatistic:
    type: "object"
    properties:
      employeeCount:
        type: "integer"
        format: "int64"
        description: "员工人数"
      type:
        type: "integer"
        format: "int32"
        description: "员工学历类型： 1博士 2硕士 3本科 4大专 5高中 6中技 7中职  8中专 9初中 10小学 11其它"
    description: "在职员学历统计"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.OnJobEmployeeEducationStatistic"
  PreImportContractCheck:
    type: "object"
    required:
      - "mobile"
      - "name"
      - "startTime"
    properties:
      contractFiles:
        type: "array"
        description: "合同附件"
        items:
          $ref: "#/definitions/ContractFile"
      contractNum:
        type: "string"
        description: "合同编号"
      contractPeriod:
        type: "integer"
        format: "int32"
        description: "合同期限:0无,1(1个月),2(3个月),3(6个月),4(1年),5(2年),6(3年),7(5年),8(10年)"
      contractType:
        type: "integer"
        format: "int32"
        description: "合同类型:1固定期限劳动合同,2无固定期限劳动合同,3实习协议,4劳务协议,5劳务派遣合同,6返聘协议，7短期劳动合同\
          ,8其它"
      endTime:
        type: "integer"
        format: "int64"
        description: "合同结束时间:10位Linux时间戳精确到秒"
      mobile:
        type: "string"
        description: "手机号"
      name:
        type: "string"
        description: "姓名"
      startTime:
        type: "integer"
        format: "int64"
        description: "合同起始时间:10位Linux时间戳精确到秒"
    description: "导入合同前预检查信息"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.PreImportContractCheck"
  PreImportContractCheckRequest:
    type: "object"
    required:
      - "orgId"
      - "preImportContractChecks"
    properties:
      orgId:
        type: "string"
        description: "企业Id"
      preImportContractChecks:
        type: "array"
        description: "预检查信息"
        items:
          $ref: "#/definitions/PreImportContractCheck"
    description: "导入合同前预检查的请求参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.PreImportContractCheckRequest"
  ApiResponsePreImportContractCheckResponse:
    type: "object"
    properties:
      bid:
        type: "string"
      result:
        $ref: "#/definitions/PreImportContractCheckResponse"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ApiResponse<com.sinosun.bizmate.ace.backend.personnelmgmt.model.PreImportContractCheckResponse>"
  EmployeePreImportCheck:
    type: "object"
    properties:
      employeeId:
        type: "string"
        description: "员工ID"
      employeeNo:
        type: "string"
        description: "工号"
      name:
        type: "string"
        description: "用户姓名"
      orgId:
        type: "string"
        description: "企业Id"
      preCheckResult:
        description: "预检查结果信息"
        $ref: "#/definitions/PreCheckResult"
      preImportContractCheck:
        description: "导入合同前预检查信息"
        $ref: "#/definitions/PreImportContractCheck"
    description: "员工合同导入预检查信息"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.EmployeePreImportCheck"
  PreCheckResult:
    type: "object"
    properties:
      failReason:
        type: "string"
        description: "失败原因"
      flag:
        type: "integer"
        format: "int32"
        description: "检查结果:1成功,2失败"
    description: "预检查结果信息"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.PreCheckResult"
  PreImportContractCheckResponse:
    type: "object"
    properties:
      employeePreImportCheckList:
        type: "array"
        items:
          $ref: "#/definitions/EmployeePreImportCheck"
    description: "导入合同前预检查的响应结果"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.PreImportContractCheckResponse"
  ApiResponseEmployeeDetailResponse:
    type: "object"
    properties:
      bid:
        type: "string"
      result:
        $ref: "#/definitions/EmployeeDetailResponse"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ApiResponse<com.sinosun.bizmate.ace.backend.personnelmgmt.model.EmployeeDetailResponse>"
  ApiResponseQuitDetailResponse:
    type: "object"
    properties:
      bid:
        type: "string"
      result:
        $ref: "#/definitions/QuitDetailResponse"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ApiResponse<com.sinosun.bizmate.ace.backend.personnelmgmt.model.QuitDetailResponse>"
  QuitDetailResponse:
    type: "object"
    required:
      - "idNumber"
      - "idType"
      - "realQuitDate"
    properties:
      departmentId:
        type: "string"
        description: "部门Id"
      departmentName:
        type: "string"
        description: "部门名称"
      employeeId:
        type: "string"
        description: "员工id"
      employeeNo:
        type: "string"
        description: "工号"
      formalDate:
        type: "integer"
        format: "int64"
        description: "转正日期"
      gender:
        type: "string"
        description: "性别 (MALE:男性 FEMALE:女性)"
      idNumber:
        type: "string"
        description: "证件号码"
      idType:
        type: "string"
        description: "证件类型,ID_CARD=身份证,PASSPORT=护照,\" +\n            \"PERMANENT_RESIDENT_ID_CARD=中\
          华人民共和国外国人永久居留身份证,\" +\n            \"HONGKONG_MACAO_TAIWAN_CARD=港澳台居民通行证\
          ,\" +\n            \"TEMPORARY_ID_CARD=临时身份证,CHINA_OTHER_CARD=中国居民其他证件,\"\
          \ +\n            \"FOREIGN_OTHER_CARD=外国公民其他证件"
      inductionDate:
        type: "integer"
        format: "int64"
        description: "入职日期"
      mobile:
        type: "string"
        description: "手机号"
      name:
        type: "string"
        description: "用户姓名"
      orgId:
        type: "string"
        description: "企业Id"
      postId:
        type: "string"
        description: "岗位Id"
      postName:
        type: "string"
        description: "岗位名称"
      probationQuit:
        type: "integer"
        format: "int32"
        description: "是否试用期离职（0 否 1 是）"
      quitDate:
        type: "integer"
        format: "int64"
        description: "离职日期"
      quitFileList:
        type: "array"
        description: "离职材料列表"
        items:
          $ref: "#/definitions/OperateFile"
      quitReason:
        type: "string"
        description: "离职原因"
      quitType:
        type: "integer"
        format: "int32"
        description: "离职类型（1主动离职2被动离职3退休"
      realQuitDate:
        type: "integer"
        format: "int64"
        description: "实际离职日期:10位Linux时间戳精确到秒"
      remark:
        type: "string"
        description: "备注"
      staffStatus:
        type: "integer"
        format: "int32"
        description: "员工状态  1待入职，2放弃入职 3试用，4正式，5已离职"
      staffType:
        type: "integer"
        format: "int32"
        description: "员工类型  1全职 ，2兼职 ，3实习 ，4劳务派遣 ，5外包 ，6退休返聘 ，7其他"
      wagesNo:
        type: "string"
        description: "工资卡号"
    description: "调动详情响应结果"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.QuitDetailResponse"
  ApiResponseTransferDetailResponse:
    type: "object"
    properties:
      bid:
        type: "string"
      result:
        $ref: "#/definitions/TransferDetailResponse"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ApiResponse<com.sinosun.bizmate.ace.backend.personnelmgmt.model.TransferDetailResponse>"
  TransferDetailResponse:
    type: "object"
    required:
      - "idNumber"
      - "idType"
      - "moveDate"
    properties:
      departmentId:
        type: "string"
        description: "部门Id"
      departmentName:
        type: "string"
        description: "部门名称"
      employeeId:
        type: "string"
        description: "员工id"
      employeeNo:
        type: "string"
        description: "工号"
      formalDate:
        type: "integer"
        format: "int64"
        description: "转正日期"
      gender:
        type: "string"
        description: "性别 (MALE:男性 FEMALE:女性)"
      idNumber:
        type: "string"
        description: "证件号码"
      idType:
        type: "string"
        description: "证件类型,ID_CARD=身份证,PASSPORT=护照,\" +\n            \"PERMANENT_RESIDENT_ID_CARD=中\
          华人民共和国外国人永久居留身份证,\" +\n            \"HONGKONG_MACAO_TAIWAN_CARD=港澳台居民通行证\
          ,\" +\n            \"TEMPORARY_ID_CARD=临时身份证,CHINA_OTHER_CARD=中国居民其他证件,\"\
          \ +\n            \"FOREIGN_OTHER_CARD=外国公民其他证件"
      inductionDate:
        type: "integer"
        format: "int64"
        description: "入职日期"
      mobile:
        type: "string"
        description: "手机号"
      moveDate:
        type: "integer"
        format: "int64"
        description: "调动生效日期:10位Linux时间戳精确到秒"
      moveFileList:
        type: "array"
        description: "调动材料列表"
        items:
          $ref: "#/definitions/OperateFile"
      moveReason:
        type: "string"
        description: "调动原因"
      name:
        type: "string"
        description: "用户姓名"
      newDepartmentId:
        type: "string"
        description: "调动后部门ID"
      newDepartmentName:
        type: "string"
        description: "调动后部门名称"
      newPostId:
        type: "string"
        description: "调动后岗位ID"
      newPostName:
        type: "string"
        description: "调动后岗位名称"
      oldDepartmentId:
        type: "string"
        description: "原部门ID"
      oldDepartmentName:
        type: "string"
        description: "原部门名称"
      oldPostId:
        type: "string"
        description: "原岗位ID"
      oldPostName:
        type: "string"
        description: "原岗位名称"
      orgId:
        type: "string"
        description: "企业Id"
      postId:
        type: "string"
        description: "岗位Id"
      postName:
        type: "string"
        description: "岗位名称"
      quitDate:
        type: "integer"
        format: "int64"
        description: "离职日期"
      remark:
        type: "string"
        description: "备注"
      staffStatus:
        type: "integer"
        format: "int32"
        description: "员工状态  1待入职，2放弃入职 3试用，4正式，5已离职"
      staffType:
        type: "integer"
        format: "int32"
        description: "员工类型  1全职 ，2兼职 ，3实习 ，4劳务派遣 ，5外包 ，6退休返聘 ，7其他"
      wagesNo:
        type: "string"
        description: "工资卡号"
    description: "调动详情响应结果"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.TransferDetailResponse"
  ApiResponseSearchChangesEmployeeResponse:
    type: "object"
    properties:
      bid:
        type: "string"
      result:
        $ref: "#/definitions/SearchChangesEmployeeResponse"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ApiResponse<com.sinosun.bizmate.ace.backend.personnelmgmt.model.SearchChangesEmployeeResponse>"
  ChangesEmployeeBaseInfo:
    type: "object"
    required:
      - "idNumber"
      - "idType"
    properties:
      changeDate:
        type: "integer"
        format: "int64"
        description: "变动日期"
      departmentId:
        type: "string"
        description: "部门Id"
      departmentName:
        type: "string"
        description: "部门名称"
      detail:
        type: "string"
        description: "变动详情"
      employeeId:
        type: "string"
        description: "员工id"
      employeeNo:
        type: "string"
        description: "工号"
      formalDate:
        type: "integer"
        format: "int64"
        description: "转正日期"
      gender:
        type: "string"
        description: "性别 (MALE:男性 FEMALE:女性)"
      idNumber:
        type: "string"
        description: "证件号码"
      idType:
        type: "string"
        description: "证件类型,ID_CARD=身份证,PASSPORT=护照,\" +\n            \"PERMANENT_RESIDENT_ID_CARD=中\
          华人民共和国外国人永久居留身份证,\" +\n            \"HONGKONG_MACAO_TAIWAN_CARD=港澳台居民通行证\
          ,\" +\n            \"TEMPORARY_ID_CARD=临时身份证,CHINA_OTHER_CARD=中国居民其他证件,\"\
          \ +\n            \"FOREIGN_OTHER_CARD=外国公民其他证件"
      inductionDate:
        type: "integer"
        format: "int64"
        description: "入职日期"
      mobile:
        type: "string"
        description: "手机号"
      name:
        type: "string"
        description: "用户姓名"
      orgId:
        type: "string"
        description: "企业Id"
      postId:
        type: "string"
        description: "岗位Id"
      postName:
        type: "string"
        description: "岗位名称"
      quitDate:
        type: "integer"
        format: "int64"
        description: "离职日期"
      reason:
        type: "string"
        description: "变动原因"
      staffStatus:
        type: "integer"
        format: "int32"
        description: "员工状态  1待入职，2放弃入职 3试用，4正式，5已离职"
      staffType:
        type: "integer"
        format: "int32"
        description: "员工类型  1全职 ，2兼职 ，3实习 ，4劳务派遣 ，5外包 ，6退休返聘 ，7其他"
      type:
        type: "integer"
        format: "int32"
        description: "变动类型（1入职2转正3调动4离职）"
      wagesNo:
        type: "string"
        description: "工资卡号"
    description: "搜索用户请求基本信息"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ChangesEmployeeBaseInfo"
  SearchChangesEmployeeResponse:
    type: "object"
    required:
      - "pageNum"
      - "pageSize"
      - "pages"
      - "total"
    properties:
      employeeBaseInfos:
        type: "array"
        description: "用户基本信息列表"
        items:
          $ref: "#/definitions/ChangesEmployeeBaseInfo"
      orgId:
        type: "string"
        description: "企业Id"
      pageNum:
        type: "integer"
        format: "int32"
        description: "当前页码"
      pageSize:
        type: "integer"
        format: "int32"
        description: "每页查询数量"
      pages:
        type: "integer"
        format: "int32"
        description: "总页码"
      total:
        type: "integer"
        format: "int32"
        description: "总数量"
    description: "搜索人事异动管理用户返回结果"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.SearchChangesEmployeeResponse"
  ApiResponseSearchEmployeeResponse:
    type: "object"
    properties:
      bid:
        type: "string"
      result:
        $ref: "#/definitions/SearchEmployeeResponse"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ApiResponse<com.sinosun.bizmate.ace.backend.personnelmgmt.model.SearchEmployeeResponse>"
  EmployeeBaseInfo:
    type: "object"
    required:
      - "idNumber"
      - "idType"
    properties:
      departmentId:
        type: "string"
        description: "部门Id"
      departmentName:
        type: "string"
        description: "部门名称"
      employeeId:
        type: "string"
        description: "员工id"
      employeeNo:
        type: "string"
        description: "工号"
      formalDate:
        type: "integer"
        format: "int64"
        description: "转正日期"
      gender:
        type: "string"
        description: "性别 (MALE:男性 FEMALE:女性)"
      idNumber:
        type: "string"
        description: "证件号码"
      idType:
        type: "string"
        description: "证件类型,ID_CARD=身份证,PASSPORT=护照,\" +\n            \"PERMANENT_RESIDENT_ID_CARD=中\
          华人民共和国外国人永久居留身份证,\" +\n            \"HONGKONG_MACAO_TAIWAN_CARD=港澳台居民通行证\
          ,\" +\n            \"TEMPORARY_ID_CARD=临时身份证,CHINA_OTHER_CARD=中国居民其他证件,\"\
          \ +\n            \"FOREIGN_OTHER_CARD=外国公民其他证件"
      inductionDate:
        type: "integer"
        format: "int64"
        description: "入职日期"
      mobile:
        type: "string"
        description: "手机号"
      name:
        type: "string"
        description: "用户姓名"
      orgId:
        type: "string"
        description: "企业Id"
      postId:
        type: "string"
        description: "岗位Id"
      postName:
        type: "string"
        description: "岗位名称"
      quitDate:
        type: "integer"
        format: "int64"
        description: "离职日期"
      staffStatus:
        type: "integer"
        format: "int32"
        description: "员工状态  1待入职，2放弃入职 3试用，4正式，5已离职"
      staffType:
        type: "integer"
        format: "int32"
        description: "员工类型  1全职 ，2兼职 ，3实习 ，4劳务派遣 ，5外包 ，6退休返聘 ，7其他"
      wagesNo:
        type: "string"
        description: "工资卡号"
    description: "搜索用户请求基本信息"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.EmployeeBaseInfo"
  SearchEmployeeResponse:
    type: "object"
    required:
      - "pageNum"
      - "pageSize"
      - "pages"
      - "total"
    properties:
      employeeBaseInfos:
        type: "array"
        description: "用户基本信息列表"
        items:
          $ref: "#/definitions/EmployeeBaseInfo"
      orgId:
        type: "string"
        description: "企业Id"
      pageNum:
        type: "integer"
        format: "int32"
        description: "当前页码"
      pageSize:
        type: "integer"
        format: "int32"
        description: "每页查询数量"
      pages:
        type: "integer"
        format: "int32"
        description: "总页码"
      total:
        type: "integer"
        format: "int32"
        description: "总数量"
    description: "搜索用户请求参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.SearchEmployeeResponse"
  SearchFormalEmployeeRequest:
    type: "object"
    required:
      - "orgId"
    properties:
      departmentIds:
        type: "array"
        description: "部门Id列表"
        items:
          type: "string"
      inductionDateEnd:
        type: "integer"
        format: "int64"
        description: "入职结束日期"
      inductionDateStart:
        type: "integer"
        format: "int64"
        description: "入职开始日期"
      orgId:
        type: "string"
        description: "企业Id"
      pageNum:
        type: "integer"
        format: "int32"
        description: "页码"
      pageSize:
        type: "integer"
        format: "int32"
        description: "分页大小"
      planFormalEndDate:
        type: "integer"
        format: "int64"
        description: "计划转正日期结束时间:10位Linux时间戳精确到秒"
      planFormalStartDate:
        type: "integer"
        format: "int64"
        description: "计划转正日期开始时间:10位Linux时间戳精确到秒"
      postIds:
        type: "array"
        description: "岗位Id列表"
        items:
          type: "string"
      searchKey:
        type: "string"
        description: "搜索字段（仅支持姓名和工号和手机号）"
      staffStatusList:
        type: "array"
        description: "员工状态列表"
        items:
          type: "integer"
          format: "int32"
      staffTypes:
        type: "array"
        description: "员工类型列表"
        items:
          type: "integer"
          format: "int32"
    description: "搜索转正管理用户请求参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.SearchFormalEmployeeRequest"
  ApiResponseSearchFormalEmployeeResponse:
    type: "object"
    properties:
      bid:
        type: "string"
      result:
        $ref: "#/definitions/SearchFormalEmployeeResponse"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ApiResponse<com.sinosun.bizmate.ace.backend.personnelmgmt.model.SearchFormalEmployeeResponse>"
  FormalEmployeeBaseInfo:
    type: "object"
    required:
      - "idNumber"
      - "idType"
    properties:
      departmentId:
        type: "string"
        description: "部门Id"
      departmentName:
        type: "string"
        description: "部门名称"
      employeeId:
        type: "string"
        description: "员工id"
      employeeNo:
        type: "string"
        description: "工号"
      formalDate:
        type: "integer"
        format: "int64"
        description: "转正日期"
      gender:
        type: "string"
        description: "性别 (MALE:男性 FEMALE:女性)"
      idNumber:
        type: "string"
        description: "证件号码"
      idType:
        type: "string"
        description: "证件类型,ID_CARD=身份证,PASSPORT=护照,\" +\n            \"PERMANENT_RESIDENT_ID_CARD=中\
          华人民共和国外国人永久居留身份证,\" +\n            \"HONGKONG_MACAO_TAIWAN_CARD=港澳台居民通行证\
          ,\" +\n            \"TEMPORARY_ID_CARD=临时身份证,CHINA_OTHER_CARD=中国居民其他证件,\"\
          \ +\n            \"FOREIGN_OTHER_CARD=外国公民其他证件"
      inductionDate:
        type: "integer"
        format: "int64"
        description: "入职日期"
      mobile:
        type: "string"
        description: "手机号"
      name:
        type: "string"
        description: "用户姓名"
      orgId:
        type: "string"
        description: "企业Id"
      planFormalDate:
        type: "integer"
        format: "int64"
        description: "计划转正日期:10位Linux时间戳精确到秒"
      postId:
        type: "string"
        description: "岗位Id"
      postName:
        type: "string"
        description: "岗位名称"
      quitDate:
        type: "integer"
        format: "int64"
        description: "离职日期"
      recordId:
        type: "string"
        description: "记录id"
      staffStatus:
        type: "integer"
        format: "int32"
        description: "员工状态  1待入职，2放弃入职 3试用，4正式，5已离职"
      staffType:
        type: "integer"
        format: "int32"
        description: "员工类型  1全职 ，2兼职 ，3实习 ，4劳务派遣 ，5外包 ，6退休返聘 ，7其他"
      trialDuration:
        type: "integer"
        format: "int32"
        description: "试用期"
      wagesNo:
        type: "string"
        description: "工资卡号"
    description: "搜索用户请求基本信息"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.FormalEmployeeBaseInfo"
  SearchFormalEmployeeResponse:
    type: "object"
    required:
      - "pageNum"
      - "pageSize"
      - "pages"
      - "total"
    properties:
      employeeBaseInfos:
        type: "array"
        description: "用户基本信息列表"
        items:
          $ref: "#/definitions/FormalEmployeeBaseInfo"
      orgId:
        type: "string"
        description: "企业Id"
      pageNum:
        type: "integer"
        format: "int32"
        description: "当前页码"
      pageSize:
        type: "integer"
        format: "int32"
        description: "每页查询数量"
      pages:
        type: "integer"
        format: "int32"
        description: "总页码"
      total:
        type: "integer"
        format: "int32"
        description: "总数量"
    description: "搜索转正管理用户返回结果"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.SearchFormalEmployeeResponse"
  SearchMoveEmployeeRequest:
    type: "object"
    required:
      - "orgId"
    properties:
      departmentIds:
        type: "array"
        description: "部门Id列表"
        items:
          type: "string"
      inductionDateEnd:
        type: "integer"
        format: "int64"
        description: "入职结束日期"
      inductionDateStart:
        type: "integer"
        format: "int64"
        description: "入职开始日期"
      moveDateEnd:
        type: "integer"
        format: "int64"
        description: "调动生效日期开始时间"
      moveDateStart:
        type: "integer"
        format: "int64"
        description: "调动生效日期开始时间"
      newDepartments:
        type: "array"
        description: "调动后部门"
        items:
          type: "string"
      oldDepartments:
        type: "array"
        description: "原部门"
        items:
          type: "string"
      orgId:
        type: "string"
        description: "企业Id"
      pageNum:
        type: "integer"
        format: "int32"
        description: "页码"
      pageSize:
        type: "integer"
        format: "int32"
        description: "分页大小"
      postIds:
        type: "array"
        description: "岗位Id列表"
        items:
          type: "string"
      searchKey:
        type: "string"
        description: "搜索字段（仅支持姓名和工号和手机号）"
      staffStatusList:
        type: "array"
        description: "员工状态列表"
        items:
          type: "integer"
          format: "int32"
      staffTypes:
        type: "array"
        description: "员工类型列表"
        items:
          type: "integer"
          format: "int32"
    description: "搜索调动管理用户请求参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.SearchMoveEmployeeRequest"
  ApiResponseSearchMoveEmployeeResponse:
    type: "object"
    properties:
      bid:
        type: "string"
      result:
        $ref: "#/definitions/SearchMoveEmployeeResponse"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ApiResponse<com.sinosun.bizmate.ace.backend.personnelmgmt.model.SearchMoveEmployeeResponse>"
  MoveEmployeeBaseInfo:
    type: "object"
    required:
      - "idNumber"
      - "idType"
    properties:
      departmentId:
        type: "string"
        description: "部门Id"
      departmentName:
        type: "string"
        description: "部门名称"
      employeeId:
        type: "string"
        description: "员工id"
      employeeNo:
        type: "string"
        description: "工号"
      formalDate:
        type: "integer"
        format: "int64"
        description: "转正日期"
      gender:
        type: "string"
        description: "性别 (MALE:男性 FEMALE:女性)"
      idNumber:
        type: "string"
        description: "证件号码"
      idType:
        type: "string"
        description: "证件类型,ID_CARD=身份证,PASSPORT=护照,\" +\n            \"PERMANENT_RESIDENT_ID_CARD=中\
          华人民共和国外国人永久居留身份证,\" +\n            \"HONGKONG_MACAO_TAIWAN_CARD=港澳台居民通行证\
          ,\" +\n            \"TEMPORARY_ID_CARD=临时身份证,CHINA_OTHER_CARD=中国居民其他证件,\"\
          \ +\n            \"FOREIGN_OTHER_CARD=外国公民其他证件"
      inductionDate:
        type: "integer"
        format: "int64"
        description: "入职日期"
      mobile:
        type: "string"
        description: "手机号"
      moveDate:
        type: "integer"
        format: "int64"
        description: "调动生效日期"
      moveReason:
        type: "string"
        description: "调动原因"
      name:
        type: "string"
        description: "用户姓名"
      newDepartment:
        type: "string"
        description: "调动后部门"
      newPost:
        type: "string"
        description: "调动后岗位"
      oldDepartment:
        type: "string"
        description: "原部门"
      oldPost:
        type: "string"
        description: "原岗位"
      orgId:
        type: "string"
        description: "企业Id"
      postId:
        type: "string"
        description: "岗位Id"
      postName:
        type: "string"
        description: "岗位名称"
      quitDate:
        type: "integer"
        format: "int64"
        description: "离职日期"
      recordId:
        type: "string"
        description: "记录id"
      remark:
        type: "string"
        description: "备注"
      staffStatus:
        type: "integer"
        format: "int32"
        description: "员工状态  1待入职，2放弃入职 3试用，4正式，5已离职"
      staffType:
        type: "integer"
        format: "int32"
        description: "员工类型  1全职 ，2兼职 ，3实习 ，4劳务派遣 ，5外包 ，6退休返聘 ，7其他"
      wagesNo:
        type: "string"
        description: "工资卡号"
    description: "搜索用户请求基本信息"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.MoveEmployeeBaseInfo"
  SearchMoveEmployeeResponse:
    type: "object"
    required:
      - "pageNum"
      - "pageSize"
      - "pages"
      - "total"
    properties:
      employeeBaseInfos:
        type: "array"
        description: "用户基本信息列表"
        items:
          $ref: "#/definitions/MoveEmployeeBaseInfo"
      orgId:
        type: "string"
        description: "企业Id"
      pageNum:
        type: "integer"
        format: "int32"
        description: "当前页码"
      pageSize:
        type: "integer"
        format: "int32"
        description: "每页查询数量"
      pages:
        type: "integer"
        format: "int32"
        description: "总页码"
      total:
        type: "integer"
        format: "int32"
        description: "总数量"
    description: "搜索调动管理用户返回结果"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.SearchMoveEmployeeResponse"
  SearchQuitEmployeeRequest:
    type: "object"
    required:
      - "orgId"
    properties:
      departmentIds:
        type: "array"
        description: "部门Id列表"
        items:
          type: "string"
      inductionDateEnd:
        type: "integer"
        format: "int64"
        description: "入职结束日期"
      inductionDateStart:
        type: "integer"
        format: "int64"
        description: "入职开始日期"
      orgId:
        type: "string"
        description: "企业Id"
      pageNum:
        type: "integer"
        format: "int32"
        description: "页码"
      pageSize:
        type: "integer"
        format: "int32"
        description: "分页大小"
      postIds:
        type: "array"
        description: "岗位Id列表"
        items:
          type: "string"
      probationQuits:
        type: "array"
        description: "是否试用期离职（0 否 1 是）"
        items:
          type: "integer"
          format: "int32"
      quitDateEnd:
        type: "integer"
        format: "int64"
        description: "离职日期结束时间"
      quitDateStart:
        type: "integer"
        format: "int64"
        description: "离职日期开始时间"
      quitTypes:
        type: "array"
        description: "离职类型（1主动离职2被动离职3退休"
        items:
          type: "integer"
          format: "int32"
      searchKey:
        type: "string"
        description: "搜索字段（仅支持姓名和工号和手机号）"
      staffStatusList:
        type: "array"
        description: "员工状态列表"
        items:
          type: "integer"
          format: "int32"
      staffTypes:
        type: "array"
        description: "员工类型列表"
        items:
          type: "integer"
          format: "int32"
    description: "搜索离职管理用户请求参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.SearchQuitEmployeeRequest"
  ApiResponseSearchQuitEmployeeResponse:
    type: "object"
    properties:
      bid:
        type: "string"
      result:
        $ref: "#/definitions/SearchQuitEmployeeResponse"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ApiResponse<com.sinosun.bizmate.ace.backend.personnelmgmt.model.SearchQuitEmployeeResponse>"
  QuitEmployeeBaseInfo:
    type: "object"
    required:
      - "idNumber"
      - "idType"
    properties:
      departmentId:
        type: "string"
        description: "部门Id"
      departmentName:
        type: "string"
        description: "部门名称"
      employeeId:
        type: "string"
        description: "员工id"
      employeeNo:
        type: "string"
        description: "工号"
      formalDate:
        type: "integer"
        format: "int64"
        description: "转正日期"
      gender:
        type: "string"
        description: "性别 (MALE:男性 FEMALE:女性)"
      idNumber:
        type: "string"
        description: "证件号码"
      idType:
        type: "string"
        description: "证件类型,ID_CARD=身份证,PASSPORT=护照,\" +\n            \"PERMANENT_RESIDENT_ID_CARD=中\
          华人民共和国外国人永久居留身份证,\" +\n            \"HONGKONG_MACAO_TAIWAN_CARD=港澳台居民通行证\
          ,\" +\n            \"TEMPORARY_ID_CARD=临时身份证,CHINA_OTHER_CARD=中国居民其他证件,\"\
          \ +\n            \"FOREIGN_OTHER_CARD=外国公民其他证件"
      inductionDate:
        type: "integer"
        format: "int64"
        description: "入职日期"
      mobile:
        type: "string"
        description: "手机号"
      name:
        type: "string"
        description: "用户姓名"
      orgId:
        type: "string"
        description: "企业Id"
      postId:
        type: "string"
        description: "岗位Id"
      postName:
        type: "string"
        description: "岗位名称"
      probationQuit:
        type: "integer"
        format: "int32"
        description: "是否试用期离职（0 否 1 是）"
      quitDate:
        type: "integer"
        format: "int64"
        description: "离职日期"
      quitReason:
        type: "string"
        description: "离职原因"
      quitType:
        type: "integer"
        format: "int32"
        description: "离职类型（1主动离职2被动离职3退休"
      recordId:
        type: "string"
        description: "记录id"
      staffStatus:
        type: "integer"
        format: "int32"
        description: "员工状态  1待入职，2放弃入职 3试用，4正式，5已离职"
      staffType:
        type: "integer"
        format: "int32"
        description: "员工类型  1全职 ，2兼职 ，3实习 ，4劳务派遣 ，5外包 ，6退休返聘 ，7其他"
      wagesNo:
        type: "string"
        description: "工资卡号"
    description: "搜索用户请求基本信息"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.QuitEmployeeBaseInfo"
  SearchQuitEmployeeResponse:
    type: "object"
    required:
      - "pageNum"
      - "pageSize"
      - "pages"
      - "total"
    properties:
      employeeBaseInfos:
        type: "array"
        description: "用户基本信息列表"
        items:
          $ref: "#/definitions/QuitEmployeeBaseInfo"
      orgId:
        type: "string"
        description: "企业Id"
      pageNum:
        type: "integer"
        format: "int32"
        description: "当前页码"
      pageSize:
        type: "integer"
        format: "int32"
        description: "每页查询数量"
      pages:
        type: "integer"
        format: "int32"
        description: "总页码"
      total:
        type: "integer"
        format: "int32"
        description: "总数量"
    description: "搜索离职管理用户返回结果"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.SearchQuitEmployeeResponse"
  SearchWaitEmployeeRequest:
    type: "object"
    required:
      - "orgId"
    properties:
      departmentIds:
        type: "array"
        description: "部门Id列表"
        items:
          type: "string"
      inductionDateEnd:
        type: "integer"
        format: "int64"
        description: "入职结束日期"
      inductionDateStart:
        type: "integer"
        format: "int64"
        description: "入职开始日期"
      orgId:
        type: "string"
        description: "企业Id"
      pageNum:
        type: "integer"
        format: "int32"
        description: "页码"
      pageSize:
        type: "integer"
        format: "int32"
        description: "分页大小"
      planInductionDateEnd:
        type: "integer"
        format: "int64"
        description: "预计入职结束日期"
      planInductionDateStart:
        type: "integer"
        format: "int64"
        description: "预计入职开始日期"
      postIds:
        type: "array"
        description: "岗位Id列表"
        items:
          type: "string"
      searchKey:
        type: "string"
        description: "搜索字段（仅支持姓名和工号和手机号）"
      staffStatusList:
        type: "array"
        description: "员工状态列表"
        items:
          type: "integer"
          format: "int32"
      staffTypes:
        type: "array"
        description: "员工类型列表"
        items:
          type: "integer"
          format: "int32"
    description: "搜索入职管理用户请求参数"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.SearchWaitEmployeeRequest"
  ApiResponseSearchWaitEmployeeResponse:
    type: "object"
    properties:
      bid:
        type: "string"
      result:
        $ref: "#/definitions/SearchWaitEmployeeResponse"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ApiResponse<com.sinosun.bizmate.ace.backend.personnelmgmt.model.SearchWaitEmployeeResponse>"
  SearchWaitEmployeeResponse:
    type: "object"
    required:
      - "pageNum"
      - "pageSize"
      - "pages"
      - "total"
    properties:
      employeeBaseInfos:
        type: "array"
        description: "用户基本信息列表"
        items:
          $ref: "#/definitions/WaitEmployeeBaseInfo"
      orgId:
        type: "string"
        description: "企业Id"
      pageNum:
        type: "integer"
        format: "int32"
        description: "当前页码"
      pageSize:
        type: "integer"
        format: "int32"
        description: "每页查询数量"
      pages:
        type: "integer"
        format: "int32"
        description: "总页码"
      total:
        type: "integer"
        format: "int32"
        description: "总数量"
    description: "搜索入职管理用户返回结果"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.SearchWaitEmployeeResponse"
  WaitEmployeeBaseInfo:
    type: "object"
    required:
      - "idNumber"
      - "idType"
    properties:
      departmentId:
        type: "string"
        description: "部门Id"
      departmentName:
        type: "string"
        description: "部门名称"
      employeeId:
        type: "string"
        description: "员工id"
      employeeNo:
        type: "string"
        description: "工号"
      formalDate:
        type: "integer"
        format: "int64"
        description: "转正日期"
      gender:
        type: "string"
        description: "性别 (MALE:男性 FEMALE:女性)"
      idNumber:
        type: "string"
        description: "证件号码"
      idType:
        type: "string"
        description: "证件类型,ID_CARD=身份证,PASSPORT=护照,\" +\n            \"PERMANENT_RESIDENT_ID_CARD=中\
          华人民共和国外国人永久居留身份证,\" +\n            \"HONGKONG_MACAO_TAIWAN_CARD=港澳台居民通行证\
          ,\" +\n            \"TEMPORARY_ID_CARD=临时身份证,CHINA_OTHER_CARD=中国居民其他证件,\"\
          \ +\n            \"FOREIGN_OTHER_CARD=外国公民其他证件"
      inductionDate:
        type: "integer"
        format: "int64"
        description: "入职日期"
      mobile:
        type: "string"
        description: "手机号"
      name:
        type: "string"
        description: "用户姓名"
      orgId:
        type: "string"
        description: "企业Id"
      planInductionDate:
        type: "integer"
        format: "int64"
        description: "预计入职日期"
      postId:
        type: "string"
        description: "岗位Id"
      postName:
        type: "string"
        description: "岗位名称"
      quitDate:
        type: "integer"
        format: "int64"
        description: "离职日期"
      recordId:
        type: "string"
        description: "记录id"
      staffStatus:
        type: "integer"
        format: "int32"
        description: "员工状态  1待入职，2放弃入职 3试用，4正式，5已离职"
      staffType:
        type: "integer"
        format: "int32"
        description: "员工类型  1全职 ，2兼职 ，3实习 ，4劳务派遣 ，5外包 ，6退休返聘 ，7其他"
      wagesNo:
        type: "string"
        description: "工资卡号"
    description: "搜索用户请求基本信息"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.WaitEmployeeBaseInfo"
  ApiResponseSignContractResponse:
    type: "object"
    properties:
      bid:
        type: "string"
      result:
        $ref: "#/definitions/SignContractResponse"
      resultCode:
        type: "integer"
        format: "int32"
      resultMessage:
        type: "string"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.ApiResponse<com.sinosun.bizmate.ace.backend.personnelmgmt.model.SignContractResponse>"
  SignContractResponse:
    type: "object"
    properties:
      contractId:
        type: "string"
        description: "合同ID"
    description: "签订合同的响应结果"
    x-java-class: "com.sinosun.bizmate.ace.backend.personnelmgmt.model.SignContractResponse"
  UploadContractFileRequest:
    type: "object"
    required:
      - "contractFiles"
      - "contractId"
      - "orgId"
    properties:
      contractFiles:
        type: "array"
        description: "合同附件"
        items:
          $ref: "#/definitions/ContractFile"
      contractId:
        type: "string"
        description: "合同ID"
      orgId:
        type: "string"
        description: "企业Id"
    description: "上传合同的附件的请求参数"


```

* 复制文件内容到第一步的在线网址即可查看对应的在线API文档

![api接口-人事数据部分截图](https://files.catbox.moe/xfsto5.png)

## API操作与验证

### Api前缀配置

文件路径：rota\bankConfig\apiUrlConfig.js

```
/*
 * @Description:
 * @FilePath: \weboah5d:\gitCode\notice\bankConfig\apiUrlConfig.js
 */

let prefix = 'bizmate';
if (process.env.CURRENT_ENV === 'weboa') {
    prefix = 'weboa';
}

export const basePrefix = `/${prefix}/basedata/v1`;
export const userPrefix = `/${prefix}/user/v1`;
export const rosterPrefix = `/${prefix}/personnelmgmt/v1`;
export const presignPrefix = `/${prefix}/presign/v1`;
// 人事数据统计接口前缀(jiangyadong)
export const statisticsPrefix = `/${prefix}/statistics/v1`;

```

### API-url配置

文件路径：rota\src\service\ApiUrl.ts 

[在线小写转大写工具：](https://www.bejson.com/convert/camel_underscore/)
```
import {
	basePrefix,
	userPrefix,
	rosterPrefix,
	presignPrefix,
	statisticsPrefix
} from "../../bankConfig/apiUrlConfig";

export const STATISTICS_API_URL = {
	EMPLOYEE_CHANGE_STATISTIC: `${statisticsPrefix}/employeeChangeStatistic`, //员工异动统计查询
	EMPLOYEE_COUNT_STATISTIC: `${statisticsPrefix}/employeeCountStatistic`, //员工数统计查询
	ON_JOB_EMPLOYEE_AGE_DISTRIBUTE_STATISTIC: `${statisticsPrefix}/onJobEmployeeAgeDistributeStatistic`, //在职员工年龄分布统计查询
	ON_JOB_EMPLOYEE_DISTRIBUTE_STATISTIC: `${statisticsPrefix}/onJobEmployeeDistributeStatistic`, //在职员工状态分布统计查询
	ON_JOB_EMPLOYEE_EDUCATION_DISTRIBUTE_STATISTIC: `${statisticsPrefix}/onJobEmployeeEducationDistributeStatistic`, //在职员学历分布统计查询
}

```

### API函数定义

文件路径：rota\src\service\StatisticsApi.ts

```
/**
 * @author 江亚东
 * 人事管理数据统计 Api接口调用层
 */
// 默认导入文件
import Api from "./Api";
import { STATISTICS_API_URL } from "./ApiUrl";

class StatisticsApi extends Api {
	constructor() {
		super();
	}
	//员工异动统计查询
	employeeChangeStatistic(params: object) {
		const url = STATISTICS_API_URL.EMPLOYEE_CHANGE_STATISTIC;
		const errorMessage = `查询员工异动统计失败`;
		return this.dealResultPromise(url, params, `Post`, errorMessage);
	}
	//员工数统计查询
	employeeCountStatistic(params: object) {
		const url = STATISTICS_API_URL.EMPLOYEE_COUNT_STATISTIC;
		const errorMessage = `查询员工数统计失败`;
		return this.dealResultPromise(url, params, `Post`, errorMessage);
	}
	//在职员工年龄分布统计查询
	onJobEmployeeAgeDistributeStatistic(params: object) {
		const url = STATISTICS_API_URL.ON_JOB_EMPLOYEE_AGE_DISTRIBUTE_STATISTIC;
		const errorMessage = `查询在职员工年龄分布统计失败`;
		return this.dealResultPromise(url, params, `Post`, errorMessage);
	}
		// 在职员工状态分布统计查询
	onJobEmployeeDistributeStatistic(params: object) {
		const url = STATISTICS_API_URL.ON_JOB_EMPLOYEE_DISTRIBUTE_STATISTIC;
		const errorMessage = `查询在职员工状态分布统计失败`;
		return this.dealResultPromise(url, params, `Post`, errorMessage);
	}
	//在职员学历分布统计查询
	onJobEmployeeEducationDistributeStatistic(params: object) {
		const url = STATISTICS_API_URL.ON_JOB_EMPLOYEE_EDUCATION_DISTRIBUTE_STATISTIC;
		const errorMessage = `查询在职员学历分布统计失败`;
		return this.dealResultPromise(url, params, `Post`, errorMessage);
	}




}

export default new StatisticsApi();


```

### API页面引入与使用

文件路径： rota\src\views\statisticicsApi.tss\statistics.vue

```
import StatisticsApi from "@/service/StatisticsApi";

methods:{
	// 调用 员工数统计查询接口 
    getStaffNum() {
        StatisticsApi.employeeCountStatistic(params).then((res) =>{
          const { resultCode,result} = res
          if(resultCode == 0) {
              console.log("----------------员工数统计的接口",result)
          }
        });
    },
}


```

## 双Y轴(柱状图，折线图)配置项

```
 echartsOption: {
        color: colors,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
          formatter: function (params) {
            var relVal = params[0].name;

            let marker = [
              '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#2fc25b;"></span>',
              '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#3ba1ff;"></span>',
            ];
            for (var i = 0; i < params.length; i++) {
              if (params[i].seriesName === "员工数") {
                relVal +=
                  "<br/>" +
                  marker[i] +
                  params[i].seriesName +
                  " : " +
                  params[i].value +
                  "人";
              }
              if (params[i].seriesName === "增长率") {
                relVal +=
                  "<br/>" +
                  marker[i] +
                  params[i].seriesName +
                  " : " +
                  params[i].value +
                  "%";
              }
            }
            return relVal;
          },
        },
        grid: {
          right: "20%",
        },
        toolbox: {
          feature: {
            // dataView: { show: true, readOnly: false },
            // restore: { show: true },
            // saveAsImage: { show: true }
          },
        },
        // legend: {
        //   data: ["员工数", "增长率"],
        // },
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true,
            },
            // prettier-ignore
            data: ['2022/01', '2022/02', '2022/03', '2022/04', '2022/05', '2022/06', '2022/07', '2022/08', '2022/09', '2022/10', '2022/11', '2022/12'],
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "增长率 (%)",
            position: "right",
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[1],
              },
            },
            axisLabel: {
              formatter: "{value}",
            },
          },
          {
            type: "value",
            name: "",
            position: "right",
            alignTicks: true,
            offset: 80,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[0],
              },
            },
            axisLabel: {
              formatter: "{value}",
            },
          },
          {
            type: "value",
            name: "员工数 (人)",
            position: "left",
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[0],
              },
            },
            axisLabel: {
              formatter: "{value}",
            },
          },
        ],
        series: [
          {
            name: "增长率",
            type: "bar",
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20],
          },
          {
            name: "员工数",
            type: "line",
            yAxisIndex: 2,
            data: [240, 0, 100, 250, 350, 500, 400],
          },
         
        ],
      }, // echarts的options数据

```

## 
















