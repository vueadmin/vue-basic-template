<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goToAbout() {
  router.push('/about')
}
</script>

<template>
  <h2>HomeView</h2>
  <button @click="goToAbout">
    Go to About
  </button>
</template>
