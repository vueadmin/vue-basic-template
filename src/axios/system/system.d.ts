export interface LoginResponse {
  code: number
  message: string
  data: {
    account: string
    username: string
    name: string
    phone: string
    address: string
    email: string
    roles: string[]
    token: string
    tokenName: string
    tokenValue: string
    avatar: string
  }
  timestamp: number
  executeTime: number
}

export interface LoginParams {
  username: string
  password: string
  clientType: 'user' | 'operator'
}
