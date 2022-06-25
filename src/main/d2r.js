import Vue from 'vue'
import App from '@/app/D2R.vue'
import '@/quasar'
import i18n from '@/setup/i18n-setup'
import mixin from '@/setup/mixin'
import VueRouter from 'vue-router'
import routes from '@/router/d2r'
import routesCordova from '@/router/cordova'
import store from '@/store/d2r'
import axios from 'axios'
import { Quasar, Notify, Cookies, Loading, Platform } from 'quasar'

const Adsense = () => import(/* webpackChunkName: "d2r" */ '@/components/etc/AdSense')

const lang = Cookies.has(process.env.VUE_APP_LANGUAGE_NAME) ? Cookies.get(process.env.VUE_APP_LANGUAGE_NAME) : Quasar.lang.getLocale().substring(0, 2) || 'ko'

// Axios -------------------------------------------------------------------------------------------------------------------------------------------------
let axiosObject = axios.create({
  baseURL: `${process.env.VUE_APP_BE_HOST ? process.env.VUE_APP_BE_HOST : window.location.protocol.concat('//', window.location.hostname, ':', process.env.VUE_APP_BE_PORT)}`,
  timeout: 180000,
  withCredentials: true
})

axiosObject.interceptors.request.use((config) => {
  config.headers.common['Accept-Language'] = lang
  return config
})

axiosObject.interceptors.response.use((response) => {
  const statusCode = typeof (response) === 'object' ? response.status : null;

  if (statusCode === 202)
    store.dispatch('setBeginner', true)

  if (statusCode === 203) {
    Notify.create({
      type: 'negative',
      color: 'negative',
      message: i18n.t('system.message.unavailableService')
    })

    router.push({ name: 'd2r-main' }).catch(() => { })
    return
  }

  return response
}, (error) => {
  const statusCode = typeof (error.response) === 'object' ? error.response.status : null;
  let msg = i18n.t('system.message.occurErrorRequest')

  if (typeof (error.response) === 'object' && error.response && error.response.data && typeof (error.response.data) === 'string')
    msg = error.response.data
  else if (error.message && typeof (error.message) === 'string')
    msg = error.message

  Notify.create({
    type: 'negative',
    color: 'negative',
    message: msg
  })

  if (statusCode === 401) {
    store.dispatch('setSignStatus', false)
    document.location.href = process.env.VUE_APP_URL.concat('/sign?d2r')
  }

  return Promise.reject(error);
})
// Axios -------------------------------------------------------------------------------------------------------------------------------------------------

// Vue Router --------------------------------------------------------------------------------------------------------------------------------------------
const router = new VueRouter({
  //mode: 'history',
  routes: Platform.is.cordova ? routesCordova : routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      const isTopScroll = to.matched.find(route => route.meta.topScroll === true)
      setTimeout(() => {
        if (isTopScroll)
          resolve({ x: 0, y: 0 })
        else if (savedPosition)
          resolve(savedPosition)
        else
          resolve()
      }, 100)
    })
  }
})

router.onError((error) => {
  if (error.name === 'ChunkLoadError') {
    window.location.reload()
  }
})

router.beforeEach((to, from, next) => {
  Loading.hide()
  i18n.loadLanguageAsync(lang).then(() => next())
})

router.beforeEach((to, from, next) => {
  const d2rInfo = store.getters.getD2RInfo

  if (d2rInfo === null && !Platform.is.cordova) {
    axiosObject
      .get('/d2r/account/info')
      .then(function (response) {
        store.dispatch('setD2RInfo', response.data)
      })
      .catch(function () { })
      .then(function () {
        next()
      })
  }
  else
    next()
})

router.beforeEach((to, from, next) => {
  const findTitle = to.matched.find(route => route.meta.title)
  document.title = findTitle ? findTitle.meta.title : process.env.VUE_APP_D2R_TITLE

  const findIndependent = to.matched.find(route => route.meta.independent)
  if (findIndependent && !findIndependent.components.independent) {
    findIndependent.components.independent = findIndependent.components.default
    delete findIndependent.components.default
  }
  store.dispatch('setIndependent', findIndependent !== undefined)

  store.dispatch('setIsKnowledge', to.matched.some(route => route.name.indexOf('d2r-knowledge') !== -1))

  if (store.getters.getPageScroller !== true)
    store.dispatch('setPageScroller', true)

  const preventScroll = to.matched.some(route => route.meta.preventScroll)
  document.body.style.overflow = preventScroll ? 'hidden' : ''

  const findNoAD = to.matched.find(route => route.meta.noAD)
  store.dispatch('setNoAD', findNoAD !== undefined)

  next()
})
// Vue Router --------------------------------------------------------------------------------------------------------------------------------------------

// ThumbStyle --------------------------------------------------------------------------------------------------------------------------------------------
Vue.prototype.thumbStyle = {
  right: '4px',
  backgroundColor: '#777777',
  width: '3px',
  transform: 'scaleY(0.96)',
  opacity: 0.5,
  zIndex: 3000
}
// ThumbStyle --------------------------------------------------------------------------------------------------------------------------------------------

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.prototype.axios = axiosObject
Vue.component('adsense', Adsense)

Vue.mixin(mixin)
new Vue({
  render: h => h(App),
  router,
  i18n,
  store
}).$mount('#app')