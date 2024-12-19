<script setup>
import { useDictStore } from '@/store/modules/dictStore/dictStore'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const locale = zhCn
// 引入并使用字典 store
const dictStore = useDictStore()
// 调用 fetchDictData 方法
dictStore.fetchDictData()
</script>

<template>
  <div id="app">
    <el-config-provider :locale="locale">
      <router-view />
    </el-config-provider>
  </div>
</template>
