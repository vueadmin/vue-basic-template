import type { RouteRecordRaw } from 'vue-router'

const importPath = {
  PatentSearch: () => import('@/views/PatentSearch/index.vue'),
}

const PatentSearchRoute: Array<RouteRecordRaw> = [
  {
    path: '/patent-search',
    name: 'PatentSearch',
    component: importPath.PatentSearch,
    meta: {
      title: '专利检索',
    },
  },
]

export default PatentSearchRoute
