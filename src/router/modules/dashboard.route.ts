import type { RouteRecordRaw } from 'vue-router'

const importPath = {
  dashboard: () => import('@/views/Dashboard/index.vue'),
}

const DashboardRoute: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: importPath.dashboard,
    meta: {
      title: '工作台',
    },
  },
]

export default DashboardRoute
