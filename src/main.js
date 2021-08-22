import { createApp } from 'vue'
import App from './App.vue'
import fetch from '~/plugins/fetch'

createApp(App)
  .use(fetch)
  .mount('#app')