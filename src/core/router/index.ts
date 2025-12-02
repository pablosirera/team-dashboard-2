import { createRouter, createWebHistory } from 'vue-router'
import { authRoutes } from '@/domains/auth/router'
import { settingsRoutes } from '@/domains/settings/router'
import { usersRoutes } from '@/domains/users/router'
import { dashboardRoutes } from '@/domains/dashboard/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...dashboardRoutes, ...usersRoutes, ...settingsRoutes, ...authRoutes],
})

export default router
