<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'
import { RootRoute } from '@/router'
import { useSystemStore } from '@/store/modules/systemStore/systemStore'
import { ref } from 'vue'

// 直接查找名为 'Home' 的路由
const RootRouteItem = RootRoute.find(item => item.name === 'Home') as RouteRecordRaw

// 直接获取子路由
const menus = RootRouteItem.children || []

// 默认
const activeIndex = ref('/dashboard')
const systemStore = useSystemStore()
const userInfo = JSON.parse(systemStore.userInfo)
</script>

<template>
  <div class="header">
    <div class="header-title">
      <span>知识产权管理系统</span>
    </div>
    <div class="header-menu">
      <el-menu router :default-active="activeIndex" mode="horizontal" :ellipsis="false">
        <el-menu-item v-for="menu in menus" :key="menu.path" :index="menu.path">
          {{ menu.meta?.title }}
        </el-menu-item>
      </el-menu>
      <el-avatar :src="userInfo.avatar" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  box-sizing: border-box;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header-title {
    font-size: 2rem;
    color: #165dff;
    font-weight: 700;
    font-style: italic;
    user-select: none;
  }

  .header-menu {
    display: flex;
    align-items: center;
    gap: 2rem;

    :deep(.el-menu--horizontal.el-menu) {
      border-bottom: none;
    }

    :deep(.el-menu-item) {
      border-bottom: none;
      font-size: 1rem;
      user-select: none;
    }

    :deep(.el-menu-item:hover) {
      background-color: #fff;
    }

    :deep(.el-menu-item:focus) {
      background-color: #fff;
    }

    :deep(.el-menu-item.is-active, .el-menu-item.is-active:hover, .el-menu-item.is-active:focus) {
      border-bottom: none;
    }
  }
}
</style>
