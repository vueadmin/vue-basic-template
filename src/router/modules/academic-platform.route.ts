import type { RouteRecordRaw } from 'vue-router'

const importPath = {
  AcademicPlatform: () => import('@/views/AcademicPlatform/index.vue'),
}

const AcademicPlatformRoute: Array<RouteRecordRaw> = [
  {
    path: '/academic',
    name: 'Academic',
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

export default AcademicPlatformRoute
