<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const search = computed<string>({
  get() {
    return route.query.search as string ?? ''
  },
  set(search: string) {
    router.replace({ query: { search } })
  },
})
</script>

<template>
  <h2>AboutView</h2>
  <label>
    Search: <input v-model.trim="search" maxlength="20">
  </label>
</template>
