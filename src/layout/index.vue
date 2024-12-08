<script lang="ts" setup>
import Aside from './components/aside.vue'
</script>

<template>
  <div class="container">
    <div class="header" />
    <div class="content">
      <div class="aside">
        <Aside />
      </div>
      <div class="main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$header-height: 50px;
$aside-width: 200px;

$header-bg-color: #cbe1f1;
$aside-bg-color: #fff;
$main-bg-color: #eef5fe;

.container {
  display: flex;
  flex-direction: column;

  .header {
    width: 100vw;
    height: $header-height;
    background-color: $header-bg-color;
  }

  .content {
    display: flex;

    .aside {
      width: $aside-width;
      height: calc(100vh - #{$header-height});
      background-color: $aside-bg-color;
    }

    .main {
      width: calc(100vw - #{$aside-width});
      height: calc(100vh - #{$header-height});
      background-color: $main-bg-color;
    }
  }
}
</style>
