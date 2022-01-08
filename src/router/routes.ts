import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/components/pages/Kusawasi'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/components/molecules/KuHome'),
      },
      {
        path: '/with-us',
        name: 'with-us',
        component: () => import('@/components/molecules/KuInfo'),
      },
      {
        path: '/help',
        name: 'help',
        component: () => import('@/components/molecules/KuHelp'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
