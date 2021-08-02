import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

// tslint:disable-next-line: array-type
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
  // 用户中心
  {
    path: '/userCenter',
    name: 'userCenter',
    component: () => import(/* webpackChunkName: "userCenter" */ '../views/user/userCenter/userCenter.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
