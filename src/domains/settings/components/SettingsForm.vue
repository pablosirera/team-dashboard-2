<script setup lang="ts">
import { reactive } from 'vue'

interface Settings {
  firstName: string
  lastName: string
  notificationEmail: string
  language: string
  theme: string
  weeklySummary: boolean
}

const settings = reactive<Settings>({
  firstName: 'Pablo',
  lastName: 'Sirera',
  notificationEmail: 'notificaciones@example.com',
  language: 'es',
  theme: 'light',
  weeklySummary: true,
})

const resetForm = () => {
  settings.firstName = 'Pablo'
  settings.lastName = 'Sirera'
  settings.notificationEmail = 'notificaciones@example.com'
  settings.language = 'es'
  settings.theme = 'light'
  settings.weeklySummary = true
}

defineExpose({
  resetForm,
  settings,
})
</script>

<template>
  <form
    class="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    @submit.prevent
  >
    <div class="grid gap-6 md:grid-cols-2">
      <div>
        <label for="firstName" class="text-sm font-medium text-slate-700">Nombre</label>
        <input
          id="firstName"
          v-model="settings.firstName"
          type="text"
          class="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-slate-400 focus:ring-2 focus:ring-slate-200 focus:outline-none"
          placeholder="Tu nombre"
        />
      </div>
      <div>
        <label for="lastName" class="text-sm font-medium text-slate-700">Apellidos</label>
        <input
          id="lastName"
          v-model="settings.lastName"
          type="text"
          class="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-slate-400 focus:ring-2 focus:ring-slate-200 focus:outline-none"
          placeholder="Tus apellidos"
        />
      </div>
    </div>

    <div>
      <label for="notificationEmail" class="text-sm font-medium text-slate-700">
        Email de notificaciones
      </label>
      <input
        id="notificationEmail"
        v-model="settings.notificationEmail"
        type="email"
        class="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-slate-400 focus:ring-2 focus:ring-slate-200 focus:outline-none"
        placeholder="tucorreo@example.com"
      />
      <p class="mt-1 text-xs text-slate-500">Recibe alertas y recordatorios en este correo.</p>
    </div>

    <div class="grid gap-6 md:grid-cols-2">
      <div>
        <label for="language" class="text-sm font-medium text-slate-700">Idioma</label>
        <select
          id="language"
          v-model="settings.language"
          class="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-slate-400 focus:ring-2 focus:ring-slate-200 focus:outline-none"
        >
          <option value="es">Español</option>
          <option value="en">Inglés</option>
          <option value="pt">Portugués</option>
        </select>
      </div>

      <div>
        <p class="text-sm font-medium text-slate-700">Tema</p>
        <div class="mt-3 space-y-2 rounded-xl border border-slate-200 p-4">
          <label class="flex cursor-pointer items-center gap-3">
            <input
              v-model="settings.theme"
              type="radio"
              value="light"
              class="h-4 w-4 text-slate-900 focus:ring-slate-500"
            />
            <span class="text-sm text-slate-700">Claro</span>
          </label>
          <label class="flex cursor-pointer items-center gap-3">
            <input
              v-model="settings.theme"
              type="radio"
              value="dark"
              class="h-4 w-4 text-slate-900 focus:ring-slate-500"
            />
            <span class="text-sm text-slate-700">Oscuro</span>
          </label>
        </div>
      </div>
    </div>

    <label class="flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 p-4">
      <input
        v-model="settings.weeklySummary"
        type="checkbox"
        class="mt-1 h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-500"
      />
      <span>
        <span class="block text-sm font-medium text-slate-900">Recibir resumen semanal</span>
        <span class="text-sm text-slate-500">Te enviaremos un resumen cada lunes.</span>
      </span>
    </label>

    <div class="flex justify-end">
      <button
        type="submit"
        class="rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
      >
        Guardar ajustes
      </button>
    </div>
  </form>
</template>
