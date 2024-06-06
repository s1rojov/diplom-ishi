import { RouteRecordRaw } from 'vue-router';
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login page',
    component: () => import('src/views/auth/index.vue'),
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'HR',
        component: () => import('src/views/hr/index.vue'),
        children: [
          {
            path: 'dashboard',
            name: 'Dashboard',
            component: () =>
              import('src/views/hr/childrens/dashboard/index.vue'),
          },
          {
            path: 'leadership',
            name: 'Leadership',
            component: () =>
              import('src/views/hr/childrens/leadership/index.vue'),
          },
          {
            path: 'division',
            name: 'Division',
            component: () => import('src/views/hr/childrens/division/index.vue'),
          },
          {
            path: 'department',
            name: 'Department',
            component: () =>
              import('src/views/hr/childrens/department/index.vue'),
          },
          // {
          //   path: 'direction',
          //   name: 'Direction',
          //   component: () =>
          //     import('src/views/hr/childrens/direction/index.vue'),
          // },
          // {
          //   path: 'kafedra',
          //   name: 'Kafedra',
          //   component: () => import('src/views/hr/childrens/kafedra/index.vue'),
          // },
          // {
          //   path: 'position',
          //   name: 'Position hr',
          //   component: () =>
          //     import('src/views/hr/childrens/position/index.vue'),
          // },
        ],
      },
      {
        path: 'admin',
        name: 'Admin',
        component: () => import('src/views/admin/index.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
