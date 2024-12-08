import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

export const mergeRouter: Array<RouteRecordRaw> = [

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
