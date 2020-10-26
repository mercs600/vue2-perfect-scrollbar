import { createApp, h } from 'vue'
import App from './App.vue'
import Vue2PerfectScrollbar from '../src'
import '../src/style.css'

const app = createApp({
  render: () => h(App)
})

app.use(Vue2PerfectScrollbar, {
  name: 'scroll'
})

app.mount('#app')
