<script setup lang="ts">
import { getVerificationCode } from '@/axios/system/system.api'
import { Lock, User } from '@element-plus/icons-vue'
import { onMounted, reactive } from 'vue'

const loginForm = reactive({
  username: '',
  phonecode: '',
})

async function onLogin() {
  await getVerificationCode()
}

onMounted(async () => {
  await getVerificationCode()
})
</script>

<template>
  <el-form :model="loginForm" status-icon label-width="auto">
    <el-form-item prop="username">
      <el-input
        v-model="loginForm.username"
        :prefix-icon="User"
        autocomplete="off"
        placeholder="请输入手机号"
      />
    </el-form-item>
    <el-form-item prop="password" style="width: 400px;">
      <div style="display: flex; width: 400px;">
        <el-input
          v-model="loginForm.phonecode"
          type="password"
          :prefix-icon="Lock"
          autocomplete="off"
          placeholder="请输入验证码"
        />
        <el-button style="width: 120px; margin-left: 6px;">
          发送验证码
        </el-button>
      </div>
    </el-form-item>
    <el-form-item>
      <el-checkbox label="记住手机号" />
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
