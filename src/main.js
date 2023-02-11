import { createApp } from 'vue'
import { Quasar, Cookies, Notify } from 'quasar'
import quasarLang from 'quasar/lang/ko-KR'
import { router } from './router'
import { i18n } from './i18n'
import { instance } from './axios'
import { createPinia } from 'pinia'
import { updateMeta } from '@/common/meta'
import App from './App.vue'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

// Create pinia object
const pinia = createPinia()

// Update Meta
updateMeta()

createApp(App).provide('axios', instance).use(router).use(pinia).use(i18n).use(Quasar, {
  plugins: { Cookies, Notify }, // import Quasar plugins and add here
  lang: quasarLang
}).mount('#app')
