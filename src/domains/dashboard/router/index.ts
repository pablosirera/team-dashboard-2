import HomePage from '@dashboard/pages/HomePage.vue'

export const dashboardRoutes = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: HomePage,
  },
]
