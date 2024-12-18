<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'
import { RootRoute } from '@/router'
import { useSystemStore } from '@/store/modules/systemStore/systemStore'
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// 获取当前路由
const route = useRoute()
const router = useRouter()

// 引用全局变量
const systemStore = useSystemStore()
const userInfo = JSON.parse(systemStore.userInfo)

// 初始化响应式变量
const activeHeaderPath = ref<string>(route.path)
const activeAsidePath = ref<string>('')
const menus = ref<RouteRecordRaw[]>([])

// 定义Header菜单
const HeaderMenus = computed(() => {
  const rootRouteItem = RootRoute.find(item => item.name === 'Home') as RouteRecordRaw
  return rootRouteItem.children || []
})

// 有路由的名单
const ChildrenRoute: string[] = ['/intellectual-property', '/academic', '/sharing-technological-innovation']

// 初始化菜单
function initMenus(path: string) {
  const rootRouteItem = RootRoute.find(item => item.name === 'Home') as RouteRecordRaw
  const routeItem = rootRouteItem.children?.find(item => item.path === path) as RouteRecordRaw
  menus.value = routeItem.children || []
}

function onSelectHeaderMenu(path: string) {
  activeHeaderPath.value = path
  initMenus(path)
}

function onSelectAsideMenu(path: string, parse: string[]) {
  activeAsidePath.value = path

  const { value: headerPath } = activeHeaderPath
  const routePath = `${headerPath}/${parse.join('/')}`
  if (router.getRoutes().some(route => route.path === routePath)) {
    router.push({ path: routePath })
  }
}

onMounted(() => {
  // 检查当前路径是否在有子路由名单中，并初始化菜单
  if (ChildrenRoute.includes(route.matched[1].path)) {
    onSelectHeaderMenu(route.matched[1].path)
  }
})
</script>

<template>
  <div class="container">
    <div class="header">
      <div class="header-title">
        <span>知识产权管理系统</span>
      </div>
      <div class="header-menu">
        <el-menu
          router :default-active="activeHeaderPath" mode="horizontal" :ellipsis="false"
          @select="onSelectHeaderMenu"
        >
          <el-menu-item v-for="menu in HeaderMenus" :key="menu.path" :index="menu.path">
            {{ menu.meta?.title }}
          </el-menu-item>
        </el-menu>
        <el-avatar :src="userInfo.avatar" />
      </div>
    </div>
    <div class="content">
      <div class="aside">
        <el-menu :default-active="activeAsidePath" @select="onSelectAsideMenu">
          <template v-if="activeHeaderPath === '/intellectual-property'">
            <el-sub-menu v-for="menu in menus" :key="menu.path" :index="menu.path">
              <template #title>
                <span>{{ menu.meta?.title }}</span>
              </template>
              <el-menu-item v-for="item in menu.children" :key="item.path" :index="item.path">
                {{ item.meta?.title }}
              </el-menu-item>
            </el-sub-menu>
          </template>
          <template v-else>
            <el-menu-item v-for="menu in menus" :key="menu.path" :index="menu.path">
              {{ menu.meta?.title }}
            </el-menu-item>
          </template>
        </el-menu>
      </div>
      <div class="main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$header-height: 4.5rem;
$aside-width: 200px;

$header-bg-color: #cbe1f1;
$aside-bg-color: #fff;
$main-bg-color: #eef5fe;

.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f0f1f2;

  .header {
    width: 100vw;
    height: $header-height;
    background-color: #fff;
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

  .content {
    display: flex;

    .aside {
      width: $aside-width;
      height: calc(100vh - #{$header-height} - 1rem);
      background-color: #fff;
      margin-top: .5rem;
      margin-left: .5rem;
    }

    .main {
      width: calc(100vw - #{$aside-width} - 1.5rem);
      height: calc(100vh - #{$header-height} - 1rem);
      background-color: #fff;
      margin-top: .5rem;
      margin-left: .5rem;
    }
  }
}
</style>
