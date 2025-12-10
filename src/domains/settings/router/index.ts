import { ROUTES_NAMES } from '@/core/constants/routes'

export const settingsRoutes = [
  {
    path: 'settings',
    name: ROUTES_NAMES.SETTINGS,
    component: () => import('@settings/pages/SettingsPage.vue'),
  },
]
