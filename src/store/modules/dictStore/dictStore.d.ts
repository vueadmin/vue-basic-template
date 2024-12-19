// 基础数据类型定义
export interface BaseDataType {
  label: string // 标签
  value: string // 值
}

// 带描述的基础数据类型
export interface BaseDataDescType extends BaseDataType {
  desc?: string // 描述，非必需
}

// 带子元素的基础数据类型
export interface TreeChildDataType extends BaseDataType {
  children?: BaseDataType[] // 子元素，非必需
}

// 类别数据类型，支持多级嵌套
export interface CategoryType extends TreeChildDataType {
  children?: TreeChildDataType[] // 子元素
}

// TRL 数据类型，支持子元素和描述
export interface TRLType extends TreeChildDataType {
  children: (BaseDataDescType | TreeChildDataType)[] // 支持描述和子元素
}

// 数据响应类型
export interface DataResponseType {
  [key: string]: BaseDataType[] // 使用索引签名处理重复属性
  technical_category: CategoryType[]
  country: CategoryType[]
  region: TreeChildDataType[]
  tech_maturity: TreeChildDataType[]
  TRL: TRLType[]
}

// 基础请求返回类型
export interface BaseResponse {
  code: number
  message: string
  timestamp: number
  executeTime: number
}

// 字典全部请求返回类型
export interface DictAllResponse extends BaseResponse {
  data: BaseDataType[] // 字典数据
}

// 字典批量请求返回类型
export interface DictBatchResponse extends BaseResponse {
  data: DataResponseType // 字典批量数据
}
