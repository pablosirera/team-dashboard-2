<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

const handleSubmit = () => {
  router.push('/dashboard')
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
        <label class="block">
          <span class="text-sm font-medium text-slate-700">Email</span>
          <input
            v-model="email"
            type="email"
            placeholder="tu@email.com"
            class="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-slate-400 focus:ring-2 focus:ring-slate-200 focus:outline-none"
            required
          />
        </label>

        <label class="block">
          <span class="text-sm font-medium text-slate-700">Password</span>
          <input
            v-model="password"
            type="password"
            placeholder="••••••••"
            class="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-slate-400 focus:ring-2 focus:ring-slate-200 focus:outline-none"
            required
          />
        </label>

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
