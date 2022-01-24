import Vue from 'vue'

import './styles/quasar.sass'
import 'quasar/dist/quasar.ie.polyfills'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import { Quasar, Notify, Cookies } from 'quasar'

Notify.setDefaults({
  timeout: 2000
})

Vue.use(Quasar, {
  config: {},
  plugins: {
    Notify,
    Cookies
  }
})