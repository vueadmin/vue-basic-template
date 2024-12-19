<script setup lang="ts">
import type { LoginParams, LoginResponse } from '@/axios/system/system'
import { postLogin } from '@/axios/system/system.api'
import { useSystemStore } from '@/store/modules/systemStore/systemStore' // 导入 Pinia Store
import { Lock, User } from '@element-plus/icons-vue'
import { sha256 } from 'js-sha256'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const loginForm = reactive({
  username: 'ops_user01',
  password: 'P@ssw0rd123',
})

const router = useRouter() // 引入 Vue Router 实例
const systemStore = useSystemStore() // 实例化 Pinia Store

async function onLogin() {
  const loginParams: LoginParams = {
    username: loginForm.username,
    password: sha256(loginForm.password),
    clientType: 'operator',
  }
  const loginRes = await postLogin(loginParams) as unknown as LoginResponse
  if (loginRes.code === 200) {
    systemStore.userInfo = JSON.stringify(loginRes.data) // 将用户数据存储到 Pinia
    systemStore.token = loginRes.data.token // 保存 token
    router.push({ path: '/dashboard' })
  }
}
</script>

<template>
  <el-form :model="loginForm">
    <el-form-item prop="username">
      <el-input
        v-model="loginForm.username"
        :prefix-icon="User"
        autocomplete="off"
        placeholder="请输入用户名"
      />
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        v-model="loginForm.password"
        type="password"
        :prefix-icon="Lock"
        autocomplete="off"
        placeholder="请输入密码"
      />
    </el-form-item>
    <el-form-item>
      <el-checkbox label="记住账号" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onLogin">
        登录
      </el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>
.el-input {
  height: 36px;
}
.el-button {
  width: 100%;
  height: 36px;
}
</style>
