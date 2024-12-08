import type { ResultEnum } from '@/enums/httpEnum'
import { ErrorPageNameMap } from '@/enums/pageEnum'
import router from '@/router'
import { ElMessage } from 'element-plus'

/**
 * 根据名字跳转路由
 * @param pageName
 * @param isReplace
 * @param windowOpen
 */
export function routerTurnByName(pageName: string, isReplace?: boolean, windowOpen?: boolean) {
  if (windowOpen) {
    const path = fetchPathByName(pageName, 'href')
    openNewWindow(path)
    return
  }
  if (isReplace) {
    router.replace({
      name: pageName,
    })
    return
  }
  router.push({
    name: pageName,
  })
}

/**
 * 新开页面
 * @param url
 */
export function openNewWindow(url: string) {
  return window.open(url, '_blank')
}

/**
 * 根据名称获取路由信息
 * @param pageName
 */
export function fetchPathByName(pageName: string, p?: string) {
  try {
    const pathData = router.resolve({
      name: pageName,
    })
    return p ? (pathData as any)[p] : pathData
  }
  catch (error: unknown) {
    if (typeof error === 'object' && error !== null && 'message' in error) {
      ElMessage.error((error as { message: string }).message)
    }
    else {
      ElMessage.error('An unknown error occurred')
    }
  }
}

/**
 * 错误页重定向
 * @param code 错误代码
 * @returns 如果重定向成功则返回 true，否则返回 false
 */
export function redirectErrorPage(code: ResultEnum): boolean {
  if (!code)
    return false
  const pageName = ErrorPageNameMap.get(code)
  if (!pageName)
    return false
  routerTurnByName(pageName)
  return true
}
