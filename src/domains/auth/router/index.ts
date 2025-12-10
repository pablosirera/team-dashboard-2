import { ROUTES_NAMES } from '@/core/constants/routes'
import LoginPage from '@auth/pages/LoginPage.vue'

export const authRoutes = [
  {
    path: 'login',
    name: ROUTES_NAMES.LOGIN,
    component: LoginPage,
  },
]
