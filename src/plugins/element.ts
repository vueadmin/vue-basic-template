import type { App } from 'vue'

import ElementPlus from 'element-plus'

export function setupElementUI(app: App<Element>) {
  app.use(ElementPlus)
}
