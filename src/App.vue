<script setup lang="ts">
import { RouterView } from 'vue-router'
import { HomeIcon, UserGroupIcon, Cog6ToothIcon } from '@heroicons/vue/24/outline'
import BaseSidebar from '@core/components/BaseSidebar.vue'
import { NavLink } from '@core/types/Navigation'

const navLinks: NavLink[] = [
  { label: 'Home', to: '/dashboard', icon: HomeIcon },
  { label: 'Usuarios', to: '/users', icon: UserGroupIcon },
  { label: 'Ajustes', to: '/settings', icon: Cog6ToothIcon },
]

const currentUser = 'Pablo Sirera'
</script>

<template>
  <div class="flex min-h-screen bg-slate-50 text-slate-900">
    <BaseSidebar :nav-links="navLinks" :current-user="currentUser" />

    <main class="flex-1 p-8">
      <RouterView />
    </main>
  </div>
</template>
