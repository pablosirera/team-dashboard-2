<script setup lang="ts">
import { useUsers } from '@core/composables/useUsers'
import type { Metrics } from '../types/Metrics'
import ActivityCards from '../components/ActivityCards.vue'
import LastUsersList from '../components/LastUsersList.vue'
import BaseHeader from '@core/components/BaseHeader.vue'

const metrics: Metrics = {
  totalUsers: 128,
  activeUsers: 102,
  inactiveUsers: 26,
}

const { state: users } = useUsers()
</script>

<template>
  <section class="space-y-8">
    <BaseHeader
      title="Resumen general"
      description="Datos actualizados con la actividad más reciente del equipo."
    />

    <ActivityCards :metrics="metrics" />

    <LastUsersList :users="users" />
  </section>
</template>
