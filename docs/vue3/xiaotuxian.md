# 小兔鲜项目
[Home](/)
::: tip
* [接口](http://zhoushugang.gitee.io/erabbit-client-pc-document/api.html#u624bu673au9a8cu8bc1u7801u767bu5f550a3ca20id3du624bu673au9a8cu8bc1u7801u767bu5f553e203ca3e)
* [原型](https://app.mockplus.cn/run/prototype/QO7BCWlUKB/IWlj1dabSw/bDbUP3C5ec7?cps=collapse&ha=1&ps=1)
* [实例](http://erabbit.itheima.net/#/)
* [项目官方文档](https://zhoushugang.gitee.io/erabbit-client-pc-document/guide/01-intro.html)
:::

## 基于 vue3 的商城类 PC 端项目

- [VUE3.0](https://v3.cn.vuejs.org/)
- [VUE-CLI](https://cli.vuejs.org/)
- [AXIOS](https://www.axios-http.cn/)
- [VUE ROUTER+](https://router.vuejs.org/zh/introduction.html)
- [VUEX](https://vuex.vuejs.org/zh/index.html)
- [VUEX-pcrsistedState:npm上显示发布于6个月前 现在不支持](https://www.npmjs.com/package/vuex-persistedstate)
- [normalize.css(初始化样式)](http://necolas.github.io/normalize.css/)
- [@vueuse/core(组合 API 常用工具库)](https://vueuse.org/core/usewindowscroll/)
- [算法 Power Set](https://www.geeksforgeeks.org/power-set/)
- [dayjs(日期处理)](https://dayjs.gitee.io/docs/zh-CN/installation/installation)
- [vee-validate(表单校验)](https://vee-validate.logaretm.com/v4/)

## 组件的封装

- 轮播图组件
- 面包屑组件 render+createVnode
- 查看更多组件
- 骨架屏组件
- 复选框组件
- 单选框组件
- 对话框组件
- 消息提示组件 函数调用
- 消息确认组件 函数调用
- 分页组件
- 步骤条组件
- 时间线组件
- 标签页组件 render+jsx
- 城市选择组件

## 项目基本结构中的问题
[vite项目使用全局样式(less|scss)](https://www.jianshu.com/p/4dd7cb87eae3) <br>
原因：在使用less文件的公用样式时，每次都需要手动导入写路径，这样是比较繁琐，而且也容易出现路径错误的问题。

真正生效的设置：[真正生效的设置](https://blog.csdn.net/Mrceel/article/details/120520396)及其依赖项
```
 "less": "^4.1.2",
"style-resources-loader": "^1.5.0",
```
