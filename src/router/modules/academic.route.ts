import type { RouteRecordRaw } from 'vue-router'

const importPath = {
  AcademicPlatform: () => import('@/views/AcademicPlatform/index.vue'),
}

const AcademicRoute: Array<RouteRecordRaw> = [
  {
    path: '/academic',
    name: 'Academic',
    redirect: '/academic/article',
    meta: {
      title: '学术平台',
    },
    children: [
      {
        path: 'article',
        name: 'AcademicArticle',
        component: importPath.AcademicPlatform,
        meta: {
          title: '学术文章',
        },
      },
    ],
  },
]

export default AcademicRoute
