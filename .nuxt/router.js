import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0df4c988 = () => interopDefault(import('..\\pages\\editor\\index.vue' /* webpackChunkName: "pages/editor/index" */))
const _cf93afbc = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _baea51f4 = () => interopDefault(import('..\\pages\\settings\\index.vue' /* webpackChunkName: "pages/settings/index" */))
const _24f0bfdd = () => interopDefault(import('..\\pages\\article\\_id.vue' /* webpackChunkName: "pages/article/_id" */))
const _05546585 = () => interopDefault(import('..\\pages\\profile\\_username.vue' /* webpackChunkName: "pages/profile/_username" */))
const _00455d49 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/editor",
    component: _0df4c988,
    name: "editor"
  }, {
    path: "/login",
    component: _cf93afbc,
    name: "login"
  }, {
    path: "/settings",
    component: _baea51f4,
    name: "settings"
  }, {
    path: "/article/:id?",
    component: _24f0bfdd,
    name: "article-id"
  }, {
    path: "/profile/:username?",
    component: _05546585,
    name: "profile-username"
  }, {
    path: "/",
    component: _00455d49,
    name: "index"
  }, {
    path: "/register",
    component: _cf93afbc,
    name: "register"
  }, {
    path: "/editor/:id",
    component: _0df4c988,
    name: "article-editor"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
