import type { RouteRecordRaw } from 'vue-router'

const importPath = {
  // 技术创新需求
  TechnologyInnovationRequirements: () => import('@/views/SharingTechnologicalInnovation/TechnologyInnovationRequirements/index.vue'),
  // 科技成果转化
  TechnologyTransfer: () => import('@/views/SharingTechnologicalInnovation/TechnologyTransfer/index.vue'),
}

const SharingTechnologicalInnovationRoute: Array<RouteRecordRaw> = [
  {
    path: '/sharing-technological-innovation',
    name: 'SharingTechnologicalInnovation',
    meta: {
      title: '共享技术创新',
    },
    children: [
      {
        path: 'technology-innovation-requirements',
        name: 'AcademicArticles',
        component: importPath.TechnologyInnovationRequirements,
        meta: {
          title: '技术创新需求',
        },
      },
      {
        path: 'technology-transfer',
        name: 'TechnologyTransfer',
        component: importPath.TechnologyTransfer,
        meta: {
          title: '科技成果转化',
        },
      },
    ],
  },
]

export default SharingTechnologicalInnovationRoute
