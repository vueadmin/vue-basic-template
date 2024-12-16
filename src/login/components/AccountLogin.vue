<script setup lang="ts">
import type { LoginParams, LoginResponse } from '@/axios/system/system'
import { postLogin } from '@/axios/system/system.api'
import { Lock, User } from '@element-plus/icons-vue'
import { useLocalStorage } from '@vueuse/core'
import { sha256 } from 'js-sha256'
import { reactive } from 'vue'

const loginForm = reactive({
  username: '测试',
  password: '123456',
})

async function onLogin() {
  const loginParams: LoginParams = {
    username: loginForm.username,
    password: sha256(loginForm.password),
    clientType: 'operator',
  }
  const loginRes = await postLogin(loginParams) as unknown as LoginResponse
  if (loginRes.code === 200) {
    useLocalStorage('UserToken', loginRes.data.token)
  }
}
</script>

<template>
  <el-form :model="loginForm" status-icon label-width="auto">
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
