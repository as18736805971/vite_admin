import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import '@/utils/config'
import '@/style/index.scss'
import '@/style/element-variables.scss'
import 'virtual:svg-icons-register'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
