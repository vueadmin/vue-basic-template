import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

export const useSystemStore = defineStore('system', {
  state: () => ({
    userInfo: useLocalStorage('UserInfo', ''),
    token: useLocalStorage('UserToken', ''),
  }),
  actions: {
    clearUserInfo() {
      this.userInfo = ''
      this.token = ''
    },
  },
})
