import type { Router } from 'vue-router'
import { useStorage } from '@vueuse/core'

export function createRouterGuards(router: Router) {
  const USER_TOKEN = useStorage('UserToken', '')

  router.beforeEach(async (to, _from, next) => {
    if (USER_TOKEN.value === '' && to.name !== 'Login') {
      return next({ name: 'Login' })
    }

    next()
  })
}
