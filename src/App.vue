<script setup>
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

const locale = zhCn
</script>

<template>
  <div id="app">
    <el-config-provider :locale="locale">
      <router-view />
    </el-config-provider>
  </div>
</template>
