import type { BaseDataType, DataResponseType, DictAllResponse, DictBatchResponse } from './dictStore.d'
import { getDictAll, postDictBatch } from '@/axios/index' // 确保你有这个 API 方法
import { defineStore } from 'pinia'

export const useDictStore = defineStore('dict', {
  state: () => ({
    dictData: {} as DataResponseType,
  }),
  actions: {
    setDictData(data: DataResponseType) {
      this.dictData = data
    },
    async fetchDictData() {
      const res = await getDictAll() as unknown as DictAllResponse
      // 提取全部字典字段
      const categories = res.data.map((item: BaseDataType) => item.value)
      // 手动加入字典
      const manual = ['country', 'tech_maturity', 'region', 'technical_category', 'TRL']
      // 合并字典
      const allCategories = [...categories, ...manual]
      const resBatch = await postDictBatch({ categories: allCategories }) as unknown as DictBatchResponse
      this.setDictData(resBatch.data)
    },
  },
})
