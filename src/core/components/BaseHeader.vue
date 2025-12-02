<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <header>
    <h1 class="text-3xl font-semibold text-slate-900">{{ title }}</h1>
    <p class="text-slate-600">{{ description }}</p>
  </header>
</template>
