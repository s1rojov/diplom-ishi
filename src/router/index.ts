import { route } from 'quasar/wrappers';
import {
  // createMemoryHistory,
  createRouter,
  // createWebHashHistory,
  createWebHistory,
} from 'vue-router';

import routes from './routes';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  // const createHistory = process.env.SERVER
  //   ? createMemoryHistory
  //   : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

  const Router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(_to, _from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { top: 0 };
      }
    }
  });

  // token uchun
  // Router.beforeEach((to, _, next) => {
  //   const isAuthenticated: any = getItem('Authorization');
  //   if (to.path !== '/login' && !isAuthenticated) {
  //     next({ name: 'Login' });
  //   } else if (to.meta.public && !!isAuthenticated) {
  //     next({ name: 'hr' });
  //   } else if (to.path === '' && isAuthenticated) {
  //     next({ name: 'hr' });
  //   } else {
  //     next();
  //   }
  // });

  return Router;
});
