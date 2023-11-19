import Vue from 'vue'
import VueRouter from 'vue-router'
import Routers from './modules/index'

Vue.use(VueRouter)

const routes = [...Routers]

const router = new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router
