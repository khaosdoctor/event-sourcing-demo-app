import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import services from './plugins/services'

Vue.config.productionTip = false

Vue.use(services)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
