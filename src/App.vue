<script setup>
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const locale = zhCn
</script>

<template>
  <div id="app">
    <el-config-provider :locale="locale">
      <router-view />
    </el-config-provider>
  </div>
</template>
