import type { LoginResponse } from '@/axios/system/system'
import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

export const useSystemStore = defineStore('system', {
  state: () => ({
    user: null as LoginResponse['data'] | null,
    token: useLocalStorage('UserToken', ''),
  }),
  actions: {
    setUser(data: LoginResponse['data']) {
      this.user = data
    },
    clearUser() {
      this.user = null
      this.token = ''
    },
  },
})
