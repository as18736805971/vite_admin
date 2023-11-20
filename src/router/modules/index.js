export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('@/views/demo/index.vue')
  }
]
