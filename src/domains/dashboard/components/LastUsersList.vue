<script setup lang="ts">
import BaseCard from '@core/components/BaseCard.vue'
import { User } from '@core/types/User'
import { RouterLink } from 'vue-router'

defineProps<{
  users: User[] | readonly User[]
}>()
</script>

<template>
  <BaseCard>
    <div class="flex items-center justify-between">
      <div>
        <p class="text-sm font-medium tracking-wide text-slate-400 uppercase">Últimos usuarios</p>
        <p class="text-lg font-semibold text-slate-900">Actividad reciente</p>
      </div>
      <RouterLink
        to="/users"
        class="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50"
      >
        Ver todos
      </RouterLink>
    </div>

    <ul class="mt-6 divide-y divide-slate-100">
      <li v-for="user in users" :key="user.id" class="flex items-center justify-between py-3">
        <div>
          <p class="font-medium text-slate-900">{{ user.name }}</p>
          <p class="text-sm text-slate-500">{{ user.role }}</p>
        </div>
        <div class="text-right">
          <p
            class="text-xs font-semibold tracking-wide uppercase"
            :class="
              user.status === 'Activa' || user.status === 'Activo'
                ? 'text-emerald-600'
                : 'text-rose-500'
            "
          >
            {{ user.status }}
          </p>
          <p class="text-xs text-slate-400">{{ user.joinedAt }}</p>
        </div>
      </li>
    </ul>
  </BaseCard>
</template>
