<script setup lang="ts">
import SettingsForm from '@/components/SettingsForm.vue'
import { ref } from 'vue'

const formRef = ref<InstanceType<typeof SettingsForm> | null>(null)
</script>

<template>
  <section class="space-y-8">
    <header>
      <h1 class="text-3xl font-semibold text-slate-900">Ajustes</h1>
      <p class="text-slate-600">Configura las preferencias de la cuenta y de la aplicación.</p>
    </header>

    <pre>
      {{ formRef?.settings }}
    </pre>

    <button
      class="rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
      @click="formRef?.resetForm()"
    >
      Resetear formulario
    </button>

    <SettingsForm ref="formRef" />
  </section>
</template>
