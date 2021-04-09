import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import {Toast} from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)
Vue.prototype.$msg = Toast
// vue实例可以做事件总线
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
