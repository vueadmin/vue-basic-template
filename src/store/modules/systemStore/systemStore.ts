import type { LoginResponse } from '@/axios/system/system'
import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

export const useSystemStore = defineStore('system', {
  state: () => ({
    userInfo: null as LoginResponse['data'] | null,
    token: useLocalStorage('UserToken', ''),
  }),
  actions: {
    setUserInfo(data: LoginResponse['data']) {
      this.userInfo = data
    },
    clearUserInfo() {
      this.userInfo = null
      this.token = ''
    },
  },
})
