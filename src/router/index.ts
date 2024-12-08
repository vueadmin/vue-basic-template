import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

import { createRouter, createWebHashHistory } from 'vue-router'

const RootRoute: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Root',
    component: Layout,
    meta: {
      title: 'Root',
    },
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
