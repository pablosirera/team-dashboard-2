import { ROUTES_NAMES } from '@/core/constants/routes'

export const commentsRoutes = [
  {
    path: 'comments',
    name: ROUTES_NAMES.COMMENTS,
    component: () => import('../pages/CommentsPages.vue'),
  },
]
