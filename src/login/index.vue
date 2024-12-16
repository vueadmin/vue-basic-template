<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { ref } from 'vue'

import AccountLogin from './components/AccountLogin.vue'
import CodeLogin from './components/CodeLogin.vue'

const activeName = ref<string>('username')
const imageConfig = {
  loginLT: { top: '36px', left: '340px', rotation: '0deg', width: '480px', height: '330px' },
  loginLB: { bottom: '100px', left: '200px', rotation: '0deg', width: '480px', height: '330px' },
  loginRT: { top: '100px', right: '300px', rotation: '0deg', width: '480px', height: '330px' },
  loginRB: { bottom: '100px', right: '200px', rotation: '0deg', width: '480px', height: '330px' },
}
const styles: Record<string, CSSProperties> = {
  loginLT: {
    position: 'absolute',
    top: imageConfig.loginLT.top,
    left: imageConfig.loginLT.left,
    transform: `rotate(${imageConfig.loginLT.rotation})`,
    width: imageConfig.loginLT.width,
    height: imageConfig.loginLT.height,
  },
  loginLB: {
    position: 'absolute',
    bottom: imageConfig.loginLB.bottom,
    left: imageConfig.loginLB.left,
    transform: `rotate(${imageConfig.loginLB.rotation})`,
    width: imageConfig.loginLB.width,
    height: imageConfig.loginLB.height,
  },
  loginRT: {
    position: 'absolute',
    top: imageConfig.loginRT.top,
    right: imageConfig.loginRT.right,
    transform: `rotate(${imageConfig.loginRT.rotation})`,
    width: imageConfig.loginRT.width,
    height: imageConfig.loginRT.height,
  },
  loginRB: {
    position: 'absolute',
    bottom: imageConfig.loginRB.bottom,
    right: imageConfig.loginRB.right,
    transform: `rotate(${imageConfig.loginRB.rotation})`,
    width: imageConfig.loginRB.width,
    height: imageConfig.loginRB.height,
  },
}
</script>

<template>
  <div class="login">
    <img src="@/assets/images/login/login_lt.png" :style="styles.loginLT">
    <img src="@/assets/images/login/login_lb.png" :style="styles.loginLB">
    <img src="@/assets/images/login/login_rt.png" :style="styles.loginRT">
    <img src="@/assets/images/login/login_rb.png" :style="styles.loginRB">
    <div class="login-card">
      <div class="card">
        <div class="login-card-title">
          登录
        </div>
        <div class="login-card-name">
          知识产权管理系统-运营端
        </div>
        <div class="login-card-form">
          <el-tabs v-model="activeName">
            <el-tab-pane label="账号登录" name="username">
              <AccountLogin />
            </el-tab-pane>
            <el-tab-pane label="验证码登录" name="code" disabled>
              <CodeLogin />
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  user-select: none;
  width: 100vw;
  height: 100vh;
  background-image: url("@/assets/images/login/login_bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .login-card {
    width: 576px;
    height: 636px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    .card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 400px;
      color: #333;
      .login-card-title {
        font-size: 36px;
        font-weight: 700;
        margin-bottom: 16px;
      }
      .login-card-name {
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 32px;
      }
      .login-card-form {
        :deep(.el-tabs__nav-wrap::after) {
          background-color: #fff;
        }
      }
    }
  }
}
</style>
