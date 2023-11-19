import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import '@/utils/config'

import '@/style/element-variables.scss'
import '@/style/index.scss'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
