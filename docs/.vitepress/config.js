const { withBase } = require("vitepress")
import nav from './nav'
import sidebar from './sidebar'
module.exports = {
  title: '亚东 前端知识体系',
  description: '前端知识体系',
  base: '/',
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/public/favicon.ico' }],
    // ['link', { rel: 'icon', type: 'image/svg+xml', href: '/path/to/icon.svg' }], for svg
  ],
  themeConfig: {
    // 展示搜索框
    themeConfig: {
      algolia: {
        apiKey: 'your_api_key',
        indexName: 'index_name'
      }
    },
    nav: nav,
    // 侧边栏
    sidebar: {
      '/': sidebar,
    }
  },
}




