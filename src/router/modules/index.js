export default [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
  }
];
