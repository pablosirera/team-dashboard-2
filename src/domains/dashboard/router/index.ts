import { ROUTES_NAMES } from '@/core/constants/routes'
import HomePage from '@dashboard/pages/HomePage.vue'

export const dashboardRoutes = [
  {
    path: '',
    redirect: 'dashboard',
  },
  {
    path: 'dashboard',
    name: ROUTES_NAMES.DASHBOARD,
    component: HomePage,
  },
]
