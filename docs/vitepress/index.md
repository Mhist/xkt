# vitepress 配置踩坑指南

## 导航栏配置

嵌套导航栏

```
const nav = [
  {
    text: "开始",
    link: 'start.html',
    items: [
      {
        text: "java",
        link: 'java/index.html',
      }
    ]
  },
  {
    text: "vue3",
    link: 'vue3/xiaotuxian.html',
  },
]
export default nav
```

::: danger nested nav
设置嵌套链接 请用 items 代替 children
:::

## 集成 element-plus 自定义组件

[集成 element-plus 自定义组件](https://segmentfault.com/a/1190000041599324#item-3-9)

## 哔哩哔哩嵌入 vitepress
