import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store, //store : store 과 같은 의미의 축약형
}).$mount('#app')
