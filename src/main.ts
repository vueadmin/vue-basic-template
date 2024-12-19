import { setupElementUI } from '@/plugins'
import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router/index'
import { setupStore } from './store/index'

import '@unocss/reset/tailwind.css'
import 'element-plus/dist/index.css'

async function appInit() {
  const app = createApp(App)

  // 注册全局 Element Plus 组件
  setupElementUI(app)

  // 挂载状态管理
  setupStore(app)

  // 挂载路由
  setupRouter(app)

  // 路由准备就绪后挂载APP实例
  await router.isReady()

  app.mount('#app')
}

appInit()
