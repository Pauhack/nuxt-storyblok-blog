import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5841717f = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages_about_index" */))
const _677db586 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages_blog_index" */))
const _579807d8 = () => interopDefault(import('..\\pages\\blog\\_postId\\index.vue' /* webpackChunkName: "pages_blog__postId_index" */))
const _d4829f30 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _5841717f,
    name: "about"
  }, {
    path: "/blog",
    component: _677db586,
    name: "blog"
  }, {
    path: "/blog/:postId",
    component: _579807d8,
    name: "blog-postId"
  }, {
    path: "/",
    component: _d4829f30,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
