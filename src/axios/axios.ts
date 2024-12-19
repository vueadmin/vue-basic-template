import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { useSystemStore } from '@/store/modules/systemStore/systemStore'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.DEV ? import.meta.env.VITE_DEV_PATH : import.meta.env.VITE_PRO_PATH,
  timeout: 3000,
})

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const systemStore = useSystemStore()
    const userInfo = JSON.parse(systemStore.userInfo)
    config.headers[userInfo.tokenName] = userInfo.tokenValue
    return config
  },
  (error: AxiosError) => {
    Promise.reject(error)
  },
)

// 响应拦截器
axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    return Promise.resolve(res.data)
  },
  (err: AxiosResponse) => {
    Promise.reject(err)
  },
)

export default axiosInstance
