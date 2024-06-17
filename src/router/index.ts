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
    },
  });

  // token uchun
  // Router.beforeEach((to, from, next) => {
  //   const data: any = sessionStorage.getItem('userInfo');
  //   const user = JSON.parse(data)
  //   if (to.name !== 'Login' && !user?.access) next({ name: 'Login' })
  //   else if (to.path === '') next({ name: 'Login' })
  //   else if (to.path === '' && user?.hr && user?.access) next({ name: 'Dashboard' })
  //   else if (to.path === '' && user?.employee && user?.access) next({ name: 'Private data' })
  //   else next()
  // });

  Router.beforeEach((to, from, next) => {
    const data = sessionStorage.getItem('userInfo');
    const user = data ? JSON.parse(data) : null;

    if (to.name !== 'Login' && (!user || !user.access)) {
      next({ name: 'Login' });
    } else if (to.path === '') {
      if (user?.hr && user?.access) {
        next({ name: 'Dashboard' });
      } else if (user?.employee && user?.access) {
        next({ name: 'Private data' });
      } else {
        next({ name: 'Login' });
      }
    } else {
      next();
    }
  });


  return Router;
});
