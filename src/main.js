import Vue from 'vue'
import App from './App.vue'

import ToastPlugin from './plugin/myToast.js'
Vue.use(ToastPlugin)

new Vue({
  el: '#app',
  render: h => h(App)
})
