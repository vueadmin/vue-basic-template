import type { LoginParams } from './system'
import { http } from '@/axios/http'
import { RequestHttpEnum } from '@/enums/httpEnum'
import { httpErrorHandle } from '@/utils'

// 获取图形验证码 GET
export async function getVerificationCode() {
  try {
    const res = await http(RequestHttpEnum.GET)('/system/security/verification/code')
    return res
  }
  catch {
    httpErrorHandle()
  }
}

// 发送短信验证码 POST
export async function sendSmsCode(data: any) {
  try {
    const res = await http(RequestHttpEnum.POST)('/system/security/send/sms', data)
    return res
  }
  catch {
    httpErrorHandle()
  }
}

// 短信验证码登录 POST
export async function smsLogin(data: any) {
  try {
    const res = await http(RequestHttpEnum.POST)('/system/security/login/phone', data)
    return res
  }
  catch {
    httpErrorHandle()
  }
}

// 系统登录
export async function postLogin(data: LoginParams) {
  try {
    const res = await http(RequestHttpEnum.POST)(
      '/system/security/login',
      data,
    )
    return res
  }
  catch {
    httpErrorHandle()
  }
}
