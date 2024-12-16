import {
  ContentTypeEnum,
  RequestHttpEnum,
} from '../enums/httpEnum'
import axiosInstance from './axios'

export function get(url: string, params?: object) {
  return axiosInstance({
    url,
    method: RequestHttpEnum.GET,
    params,
  })
}

export function post(url: string, data?: object, headersType?: string) {
  return axiosInstance({
    url,
    method: RequestHttpEnum.POST,
    data,
    headers: {
      'Content-Type': headersType || ContentTypeEnum.JSON,
    },
  })
}

export function patch(url: string, data?: object, headersType?: string) {
  return axiosInstance({
    url,
    method: RequestHttpEnum.PATCH,
    data,
    headers: {
      'Content-Type': headersType || ContentTypeEnum.JSON,
    },
  })
}

export function put(url: string, data?: object, headersType?: ContentTypeEnum) {
  return axiosInstance({
    url,
    method: RequestHttpEnum.PUT,
    data,
    headers: {
      'Content-Type': headersType || ContentTypeEnum.JSON,
    },
  })
}

export function del(url: string, params?: object) {
  return axiosInstance({
    url,
    method: RequestHttpEnum.DELETE,
    params,
  })
}

// 获取请求函数，默认get
export function http(type?: RequestHttpEnum) {
  switch (type) {
    case RequestHttpEnum.GET:
      return get

    case RequestHttpEnum.POST:
      return post

    case RequestHttpEnum.PATCH:
      return patch

    case RequestHttpEnum.PUT:
      return put

    case RequestHttpEnum.DELETE:
      return del

    default:
      return get
  }
}
