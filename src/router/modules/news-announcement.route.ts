import type { RouteRecordRaw } from 'vue-router'

const importPath = {
  NewsAnnouncement: () => import('@/views/NewsAnnouncement/index.vue'),
}

const NewsAnnouncementRoute: Array<RouteRecordRaw> = [
  {
    path: '/news-announcement',
    name: 'NewsAnnouncement',
    component: importPath.NewsAnnouncement,
    meta: {
      title: '新闻公告',
    },
  },
]

export default NewsAnnouncementRoute
