import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import Layout from '../layout/index.vue'

const RootRoute: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Root',
    component: Layout,
    meta: {
      title: '图书管理中心',
    },
    children: [
      ...routes,
    ],
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
