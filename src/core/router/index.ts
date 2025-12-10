import { createRouter, createWebHistory } from 'vue-router'
import { authRoutes } from '@/domains/auth/router'
import { settingsRoutes } from '@/domains/settings/router'
import { usersRoutes } from '@/domains/users/router'
import { dashboardRoutes } from '@/domains/dashboard/router'
import { commentsRoutes } from '@/domains/comments/router'
import BaseLayout from '../layout/BaseLayout.vue'
import AuthLayout from '../layout/AuthLayout.vue'
import { ROUTES_NAMES } from '../constants/routes'
import { useAuth } from '../composables/useAuth'
import { catsRoutes } from '@/domains/cats/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: BaseLayout,
      meta: {
        requiresAuth: true,
      },
      children: [
        ...dashboardRoutes,
        ...usersRoutes,
        ...settingsRoutes,
        ...commentsRoutes,
        ...catsRoutes,
      ],
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [...authRoutes],
    },
  ],
})

const { isAuthenticated } = useAuth()

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next({ name: ROUTES_NAMES.LOGIN })
  } else {
    next()
  }
})

export default router
