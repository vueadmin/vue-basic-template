<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router'
import { RootRoute } from '@/router'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// 默认
const menus = ref<RouteRecordRaw[]>([])
const activeIndex = ref('/dashboard')

// 无子路由的名单
const ChildrenRoute: string[] = ['/trademark', '/patent', '/academic-platform', '/sharing-technological-innovation']
if (ChildrenRoute.includes(route.path)) {
  // 直接查找名为 'Home' 的路由
  const RootRouteItem = RootRoute.find(item => item.name === 'Home') as RouteRecordRaw
  // 获取元素路由
  const routeItem = RootRouteItem.children?.find(item => item.path === route.path) as RouteRecordRaw
  menus.value = routeItem.children || []
}
</script>

<template>
  <el-menu router :default-active="activeIndex">
    <el-menu-item v-for="menu in menus" :key="menu.path" :index="menu.path">
      {{ menu.meta?.title }}
    </el-menu-item>
  </el-menu>
</template>
