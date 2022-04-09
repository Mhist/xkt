const { withBase } = require("vitepress")

module.exports = {
  title: '亚东 VitePress',
  description: '前端知识体系',
  base: '/',
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/public/favicon.ico' }],
    // ['link', { rel: 'icon', type: 'image/svg+xml', href: '/path/to/icon.svg' }], for svg
  ],
}