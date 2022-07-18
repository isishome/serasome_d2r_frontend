import Vue from 'vue'

import 'quasar/dist/quasar.css'
import '@quasar/extras/material-icons/material-icons.css'
import { Quasar, Notify, Cookies } from 'quasar'

Vue.use(Quasar, {
  config: {},
  plugins: {
    Notify,
    Cookies
  }
})