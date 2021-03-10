module.exports = {
  router: {
    linkActiveClass: 'active',
    middleware: 'authorized',
    extendRoutes(routes, resolve) {
      routes.push(...[
        {
          name: 'register',
          path: '/register',
          component: resolve(__dirname, 'pages/login/index.vue')
        },
        {
          name: 'article-editor',
          path: '/editor/:id',
          component: resolve(__dirname, 'pages/editor/index.vue')
        }
      ])
    }
  },
  server: {
    host: '0.0.0.0',
    port: '8080'
  },
  plugins: [
    '~/plugins/request.js'
  ]
}