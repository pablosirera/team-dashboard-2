import { ROUTES_NAMES } from '@/core/constants/routes'

export const usersRoutes = [
  {
    path: 'users',
    name: ROUTES_NAMES.USERS,
    component: () => import('@users/pages/UsersPage.vue'),
  },
  {
    path: 'users/:id',
    name: ROUTES_NAMES.USER_DETAIL,
    component: () => import('@users/pages/UserDetailPage.vue'),
  },
]
