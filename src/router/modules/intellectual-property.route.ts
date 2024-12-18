import type { RouteRecordRaw } from 'vue-router'

const importPath = {
  // 国内外商标管理
  TrademarkManage: () => import('@/views/IntellectualProperty/Trademark/Trademark/index.vue'),
  // 商标续展
  TrademarkRenewal: () => import('@/views/IntellectualProperty/Trademark/TrademarkRenewal/index.vue'),
  // 商标变更
  TrademarkAmendment: () => import('@/views/IntellectualProperty/Trademark/TrademarkAmendment/index.vue'),
  // 商标撤三
  ThreeYearNonUseCancellation: () => import('@/views/IntellectualProperty/Trademark/ThreeYearNonUseCancellation/index.vue'),
  // 商标异议无效
  TrademarkOpposition: () => import('@/views/IntellectualProperty/Trademark/TrademarkOpposition/index.vue'),
  // 商标驳回复审
  TrademarkRejection: () => import('@/views/IntellectualProperty/Trademark/TrademarkRejection/index.vue'),
  // 国内外专利管理
  PatentManage: () => import('@/views/IntellectualProperty/Patent/Patent/index.vue'),
  // 专利维权咨询
  PatentEnforcement: () => import('@/views/IntellectualProperty/Patent/PatentEnforcement/index.vue'),
  // 专利运营需求
  PatentOperations: () => import('@/views/IntellectualProperty/Patent/PatentOperations/index.vue'),
}

const IntellectualPropertyRoute: Array<RouteRecordRaw> = [
  {
    path: '/intellectual-property',
    name: 'IntellectualProperty',
    redirect: '/intellectual-property/trademark/manage',
    meta: {
      title: '知识产权',
    },
    children: [
      {
        path: 'trademark',
        name: 'Trademark',
        meta: {
          title: '商标管理',
        },
        children: [
          {
            path: 'manage',
            name: 'TrademarkManage',
            component: importPath.TrademarkManage,
            meta: {
              title: '国内外商标',
            },
          },
          {
            path: 'renewal',
            name: 'TrademarkRenewal',
            component: importPath.TrademarkRenewal,
            meta: {
              title: '商标续展',
            },
          },
          {
            path: 'amendment',
            name: 'TrademarkAmendment',
            component: importPath.TrademarkAmendment,
            meta: {
              title: '商标变更',
            },
          },
          {
            path: 'cancellation',
            name: 'ThreeYearNonUseCancellation',
            component: importPath.ThreeYearNonUseCancellation,
            meta: {
              title: '商标撤三',
            },
          },
          {
            path: 'opposition',
            name: 'TrademarkOpposition',
            component: importPath.TrademarkOpposition,
            meta: {
              title: '商标异议无效',
            },
          },
          {
            path: 'rejection',
            name: 'TrademarkRejection',
            component: importPath.TrademarkRejection,
            meta: {
              title: '商标驳回复审',
            },
          },
        ],
      },
      {
        path: '/patent',
        name: 'Patent',
        meta: {
          title: '专利管理',
        },
        children: [
          {
            path: 'manage',
            name: 'PatentManage',
            component: importPath.PatentManage,
            meta: {
              title: '国内外专利',
            },
          },
          {
            path: 'enforcement',
            name: 'PatentEnforcement',
            component: importPath.PatentEnforcement,
            meta: {
              title: '专利维权咨询',
            },
          },
          {
            path: 'operations',
            name: 'PatentOperations',
            component: importPath.PatentOperations,
            meta: {
              title: '专利运营需求',
            },
          },
        ],
      },
    ],
  },

]

export default IntellectualPropertyRoute
