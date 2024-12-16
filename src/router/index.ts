import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import Login from '@/login/index.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const RootRoute: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Root',
    component: Layout,
    meta: {
      title: '知识产权运营后台',
    },
    children: [],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
]

export const mergeRouter: Array<RouteRecordRaw> = [
  ...RootRoute,
]

const router = createRouter({
  history: createWebHashHistory(''),
  routes: mergeRouter,
  strict: true,
})

export function setupRouter(app: App) {
  app.use(router)
}

export default router
