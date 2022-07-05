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

5. 固定vue[版本号](https://juejin.cn/post/7000396951392878628)

* 安装项目依赖后，出现不兼容问题
![npm run dev后出现ts1005等问题](https://files.catbox.moe/rc6eu7.png)

* 需要固定vue版本号,最新的vue版本升级为2.7会导致不兼容问题

固定vue版本号为：2.6.11之后，出现编译版本号不匹配的问题
![出现编译版本号不匹配的问题](https://files.catbox.moe/ubu4km.jpg)

解决方案：
```
npm i vue-template-compiler@2.6.11 --save
```

6. 运行成功
![rota运行成功界面](https://files.catbox.moe/y1zo7n.jpg)
