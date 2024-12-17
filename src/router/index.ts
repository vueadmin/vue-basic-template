import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import Login from '@/login/index.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

// 学术平台
import AcademicPlatformRoute from './modules/academic-platform.route'
// 工作台
import DashboardRoute from './modules/dashboard.route'
// 知识产权
import IntellectualPropertyRoute from './modules/intellectual-property.route'
// 新闻公告
import NewsAnnouncementRoute from './modules/news-announcement.route'
// 专利检索
import PatentSearchRoute from './modules/patent-search.route'
// 共享技术创新
import SharingTechnologicalInnovationRoute from './modules/sharing-technological-innovation.route'

import { createRouterGuards } from './router-guards'

export const RootRoute: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    meta: {
      title: '知识产权运营后台',
    },
    children: [
      ...DashboardRoute,
      ...IntellectualPropertyRoute,
      ...AcademicPlatformRoute,
      ...SharingTechnologicalInnovationRoute,
      ...PatentSearchRoute,
      ...NewsAnnouncementRoute,
    ],
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
  createRouterGuards(router)
}

export default router
