import { ROUTES_NAMES } from '@/core/constants/routes'

export const catsRoutes = [
  {
    path: 'cats',
    name: ROUTES_NAMES.CATS,
    component: () => import('../pages/CatsPages.vue'),
  },
]
