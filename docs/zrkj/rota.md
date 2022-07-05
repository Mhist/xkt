# 花名册项目(文档输出)

## 运行启动
1. 花名册项目地址：[https://git.sinosun.com/product/bizmate/ace/frontend/h5/rota](https://git.sinosun.com/product/bizmate/ace/frontend/h5/rota)

2. 启动问题
* git clone with ssh方式:[git@git.sinosun.com.cn:product/bizmate/ace/frontend/h5/rota.git](git@git.sinosun.com.cn:product/bizmate/ace/frontend/h5/rota.git)

    需要添加ssh-keys: [配置流程](https://git.sinosun.com/help/ssh/README#generate-an-ssh-key-pair)


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

7. 运行成功
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



