<script setup lang="ts">
import BaseCard from '@core/components/BaseCard.vue'
import type { Metrics } from '../types/Metrics'

defineProps<{
  metrics: Metrics
}>()
</script>

<template>
  <div class="grid gap-6 md:grid-cols-2">
    <BaseCard>
      <p class="text-sm font-medium tracking-wide text-slate-400 uppercase">Número de usuarios</p>
      <p class="mt-3 text-4xl font-semibold text-slate-900">{{ metrics.totalUsers }}</p>
      <p class="mt-1 text-sm text-slate-500">Usuarios registrados en la plataforma.</p>
    </BaseCard>

    <BaseCard>
      <p class="text-sm font-medium tracking-wide text-slate-400 uppercase">Actividad</p>
      <div class="mt-4 grid grid-cols-2 gap-4">
        <div>
          <p class="text-xs tracking-wide text-slate-500 uppercase">Activos</p>
          <p class="mt-1 text-3xl font-semibold text-emerald-600">{{ metrics.activeUsers }}</p>
        </div>
        <div>
          <p class="text-xs tracking-wide text-slate-500 uppercase">Inactivos</p>
          <p class="mt-1 text-3xl font-semibold text-rose-500">{{ metrics.inactiveUsers }}</p>
        </div>
      </div>
      <p class="mt-3 text-sm text-slate-500">Basado en la actividad de los últimos 30 días.</p>
    </BaseCard>
  </div>
</template>
