# 学习nodepad项目源码

## 1.nodepad项目
* 项目地址：[https://git.sinosun.com/product/bizmate/ace/frontend/h5/notepad](https://git.sinosun.com/product/bizmate/ace/frontend/h5/notepad)

* 项目ui：[https://bizmatesit.sinosun.com:17380/bizmate/static/docs/platform/index.html#/./sinosun-ui/foreword](https://bizmatesit.sinosun.com:17380/bizmate/static/docs/platform/index.html#/./sinosun-ui/foreword)

```
├─notepad-master
|       ├─notepad-master
|       |       ├─.babelrc.js
|       |       ├─.editorconfig
|       |       ├─.eslintignore
|       |       ├─.eslintrc.js
|       |       ├─.gitignore
|       |       ├─.prettierignore
|       |       ├─.prettierrc
|       |       ├─.stylelintrc.js
|       |       ├─deploy.py
|       |       ├─make-package.sh
|       |       ├─package-lock.json
|       |       ├─package.json
|       |       ├─postcss.config.js
|       |       ├─problems.md
|       |       ├─README.md
|       |       ├─tree.md
|       |       ├─tsconfig.json
|       |       ├─tslint.json
|       |       ├─src
|       |       |  ├─App.vue
|       |       |  ├─index.html
|       |       |  ├─utils
|       |       |  |   ├─cache.js
|       |       |  |   ├─commonUtil.js
|       |       |  |   ├─filters.js
|       |       |  |   ├─index.js
|       |       |  |   ├─themeLoader.js
|       |       |  |   └uaUtil.js
|       |       |  ├─themes
|       |       |  |   ├─index.js
|       |       |  |   ├─themeMap.js
|       |       |  |   ├─WuLuMuQi
|       |       |  |   |    ├─style
|       |       |  |   |    |   ├─index.less
|       |       |  |   |    |   └var.less
|       |       |  |   |    ├─img
|       |       |  |   |    |  └list-bg.png
|       |       |  |   ├─default
|       |       |  |   |    ├─style
|       |       |  |   |    |   ├─index.less
|       |       |  |   |    |   └var.less
|       |       |  |   ├─ChangSha
|       |       |  |   |    ├─style
|       |       |  |   |    |   ├─index.less
|       |       |  |   |    |   └var.less
|       |       |  |   |    ├─img
|       |       |  |   |    |  └list-bg.png
|       |       |  ├─styles
|       |       |  |   ├─index.less
|       |       |  |   └transition.less
|       |       |  ├─service
|       |       |  |    ├─Api.ts
|       |       |  |    ├─ApiUrl.ts
|       |       |  |    ├─netConfig.ts
|       |       |  |    └notes.ts
|       |       |  ├─router
|       |       |  |   └baseRouter.js
|       |       |  ├─plugins
|       |       |  |    ├─drawPicture.js
|       |       |  |    ├─upload.js
|       |       |  |    └watchKeyboard.js
|       |       |  ├─pages
|       |       |  |   ├─index
|       |       |  |   |   ├─index.js
|       |       |  |   |   ├─store
|       |       |  |   |   |   └index.js
|       |       |  |   |   ├─router
|       |       |  |   |   |   └index.js
|       |       |  |   |   ├─components
|       |       |  |   |   |     ├─Share
|       |       |  |   |   |     |   ├─Share.less
|       |       |  |   |   |     |   └Share.vue
|       |       |  |   |   |     ├─List
|       |       |  |   |   |     |  ├─List.less
|       |       |  |   |   |     |  └List.vue
|       |       |  |   |   |     ├─Edit
|       |       |  |   |   |     |  ├─Edit.less
|       |       |  |   |   |     |  └Edit.vue
|       |       |  |   |   |     ├─Add
|       |       |  |   |   |     |  ├─Add.less
|       |       |  |   |   |     |  └Add.vue
|       |       |  ├─lib
|       |       |  |  ├─setup.js
|       |       |  |  ├─netAdapter
|       |       |  |  |     └index.js
|       |       |  |  ├─common
|       |       |  |  |   └cache.js
|       |       |  |  ├─adapter
|       |       |  |  |    └index.js
|       |       |  ├─dictionary
|       |       |  |     └index.js
|       |       |  ├─comp
|       |       |  |  ├─index.js
|       |       |  |  ├─Notepad
|       |       |  |  |    ├─index
|       |       |  |  |    |   ├─index.less
|       |       |  |  |    |   └index.vue
|       |       |  |  |    ├─components
|       |       |  |  |    |     ├─index.js
|       |       |  |  |    |     ├─toolbar
|       |       |  |  |    |     |    ├─index.less
|       |       |  |  |    |     |    └index.vue
|       |       |  |  |    |     ├─title
|       |       |  |  |    |     |   ├─index.less
|       |       |  |  |    |     |   └index.vue
|       |       |  |  |    |     ├─share
|       |       |  |  |    |     |   ├─index.less
|       |       |  |  |    |     |   └index.vue
|       |       |  |  |    |     ├─save
|       |       |  |  |    |     |  ├─index.less
|       |       |  |  |    |     |  └index.vue
|       |       |  |  |    |     ├─recorder
|       |       |  |  |    |     |    ├─index.less
|       |       |  |  |    |     |    └index.vue
|       |       |  |  |    |     ├─modules
|       |       |  |  |    |     |    ├─counter
|       |       |  |  |    |     |    |    └index.js
|       |       |  |  |    |     |    ├─audio
|       |       |  |  |    |     |    |   └index.js
|       |       |  |  |    |     ├─formats
|       |       |  |  |    |     |    ├─customBtn
|       |       |  |  |    |     |    |     └index.js
|       |       |  |  |    |     |    ├─custom-1
|       |       |  |  |    |     |    |    └index.js
|       |       |  |  ├─Guide
|       |       |  |  |   ├─index.less
|       |       |  |  |   └index.vue
|       |       |  |  ├─ErrorPages
|       |       |  |  |     └404.vue
|       |       |  ├─baseView
|       |       |  |    ├─baseApp.vue
|       |       |  |    ├─baseRouter.vue
|       |       |  |    └baseScroll.vue
|       |       ├─mock
|       |       |  ├─notes.js
|       |       |  ├─data
|       |       |  |  ├─common.js
|       |       |  |  ├─index.js
|       |       |  |  └notes.js
|       |       ├─config
|       |       |   ├─config.js
|       |       |   └index.js
|       |       ├─build
|       |       |   ├─custom-theme.js
|       |       |   ├─utils.js
|       |       |   ├─webpack.base.config.js
|       |       |   ├─webpack.build.config.js
|       |       |   ├─webpack.dev.config.js
|       |       |   ├─webpack.dll.config.js
|       |       |   ├─webpack.entry.config.js
|       |       |   ├─webpack.plugin.loader.js
|       |       |   └webpack.theme.config.js
|       |       ├─bankConfig
|       |       |     ├─commonConfig.js
|       |       |     ├─pageConfig.js
|       |       |     ├─platformSupport.ts
|       |       |     ├─routerConfig
|       |       |     |      ├─index.js
|       |       |     |      ├─router
|       |       |     |      |   └notes.js
|       |       |     ├─patch
|       |       |     |   └index.less
|       |       ├─assets
|       |       |   ├─img
|       |       |   |  ├─audio-wrap-bg.png
|       |       |   |  ├─guide-notes.svg
|       |       |   |  ├─icon-add.svg
|       |       |   |  ├─icon-audio.svg
|       |       |   |  ├─icon-check-active.svg
|       |       |   |  ├─icon-check.svg
|       |       |   |  ├─icon-more.svg
|       |       |   |  ├─icon-picture.svg
|       |       |   |  ├─icon-save.svg
|       |       |   |  ├─icon-share.svg
|       |       |   |  ├─icon-stop.svg
|       |       |   |  ├─img_defpage_nocontent@3x.png
|       |       |   |  ├─list-bg.png
|       |       |   |  ├─share
|       |       |   |  |   ├─share-bizmate.svg
|       |       |   |  |   ├─share-copy.svg
|       |       |   |  |   ├─share-download.svg
|       |       |   |  |   ├─share-more.svg
|       |       |   |  |   └share-wechat.svg
|       |       |   ├─font
|       |       |   |  └sinosun-number.ttf
```

