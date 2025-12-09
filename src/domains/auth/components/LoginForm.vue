<script setup lang="ts">
import BaseInput from '@core/components/BaseInput.vue'
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'submit', payload: { email: string; password: string }): void
}>()

const email = ref<string>('')
const password = ref<string>('')

const handleSubmit = () => {
  emit('submit', { email: email.value, password: password.value })
}
</script>

<template>
  <form class="space-y-4" @submit.prevent="handleSubmit">
    <BaseInput v-model="email" label="Email" type="email" placeholder="tu@email.com" required />

    <BaseInput
      v-model="password"
      label="Password"
      type="password"
      placeholder="••••••••"
      required
    />

    <button
      type="submit"
      class="w-full rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
    >
      Entrar
    </button>
  </form>
</template>
