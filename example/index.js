import Vue from 'vue'
import App from './App.vue'
import Vue2PerfectScrollbar from '../src'

Vue.use(Vue2PerfectScrollbar, {
  name: 'v-scroll'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
