import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { Quasar, Cookies } from 'quasar'
import { instance } from '@/axios'
import { useStore } from '@/stores'
import { supportLanguages, setI18nLanguage, loadLocaleMessages } from '@/i18n'
import { updateMeta } from '@/common/meta'

// sleep
const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

// Create Router
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    return new Promise(async (resolve) => {
      await sleep(200)
      resolve({ top: 0 })
    })
  }
})

router.beforeEach(async (to) => {
  updateMeta(to.path)

  let locale = Cookies.has(import.meta.env.VITE_APP_LANGUAGE_NAME) ? Cookies.get(import.meta.env.VITE_APP_LANGUAGE_NAME) : Quasar.lang.getLocale().substring(0, 2)
  if (!supportLanguages.includes(locale)) {
    locale = 'en'
    Cookies.set(import.meta.env.VITE_APP_LANGUAGE_NAME, locale, { path: '/', expires: '7300d' })
  }

  // load locale messages
  await loadLocaleMessages(locale)

  // set i18n language
  setI18nLanguage(locale)

  const store = useStore()

  store.setNoAD(to.meta.noAD === true)
  store.clearImages()

  if (store.info === null) {
    const response = await instance.get('/d2r/account/info')
    store.setInfo(response.data)
  }
})