<script setup lang="ts">
import { useAuth } from '@/core/composables/useAuth'
import { ROUTES_NAMES } from '@/core/constants/routes'
import BaseInput from '@core/components/BaseInput.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const { login } = useAuth()
const email = ref<string>('')
const password = ref<string>('')

const handleSubmit = () => {
  login()
  router.push({ name: ROUTES_NAMES.DASHBOARD })
}
</script>

<template>
  <section class="flex min-h-[60vh] flex-col items-center justify-center">
    <div class="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div class="mb-6 text-center">
        <p class="text-sm tracking-wide text-slate-400 uppercase">Team Dashboard</p>
        <h1 class="mt-2 text-2xl font-semibold text-slate-900">Iniciar sesión</h1>
        <p class="text-sm text-slate-500">Ingresa tus credenciales para continuar</p>
      </div>

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
    </div>
  </section>
</template>
