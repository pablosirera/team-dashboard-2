<script setup lang="ts">
import { NavLink } from '@core/types/Navigation'

interface BaseSidebarProps {
  navLinks: NavLink[]
  currentUser?: string
}

withDefaults(defineProps<BaseSidebarProps>(), {
  currentUser: 'Invitado',
})
</script>

<template>
  <aside class="flex w-64 flex-col border-r border-slate-200 bg-white">
    <div class="px-6 py-5">
      <p class="text-lg font-semibold tracking-tight text-slate-900">Team Dashboard</p>
      <p class="text-sm text-slate-500">Administra tu equipo</p>
    </div>

    <nav class="mt-4 space-y-1 px-2">
      <RouterLink
        v-for="item in navLinks"
        :key="item.to"
        v-slot="{ isActive }"
        :to="item.to"
        class="block rounded-lg px-3 py-2 text-sm font-medium transition"
        :class="isActive ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'"
      >
        <div class="flex items-center gap-3">
          <component
            :is="item.icon"
            class="h-5 w-5"
            :class="isActive ? 'text-slate-900' : 'text-slate-400'"
          />
          <span>{{ item.label }}</span>
        </div>
      </RouterLink>
    </nav>

    <div class="mt-auto border-t border-slate-200 px-6 py-4">
      <p class="text-xs font-semibold tracking-wide text-slate-400 uppercase">Usuario</p>
      <p class="text-sm font-medium text-slate-900">{{ currentUser }}</p>
    </div>
  </aside>
</template>
