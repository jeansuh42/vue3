import { createApp } from 'vue'
import App from './App.vue'
import fetch from '~/plugins/fetch'
import lazyLoad from '~/plugins/lazyLoad'
import store from '~/store'

createApp(App)
  .use(fetch)
  .use(lazyLoad)
  .use(store)
  .mount('#app')