import UsersPage from '@users/pages/UsersPage.vue'
import UserDetailPage from '@users/pages/UserDetailPage.vue'

export const usersRoutes = [
  {
    path: '/users',
    name: 'users',
    component: UsersPage,
  },
  {
    path: '/users/:id',
    name: 'user-detail',
    component: UserDetailPage,
  },
]
