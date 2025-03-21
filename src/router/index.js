import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { Quasar, Cookies } from 'quasar'
import { instance } from '@/axios'
import { useStore } from '@/stores'
import { supportLanguages, setI18nLanguage, loadLocaleMessages } from '@/i18n'
import { pascalCase } from '@/common'

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
  const isKnowledge = to.matched.some(route => route.name && route.name.indexOf('knowledge') !== -1)
  const isBbs = to.matched.some(route => route.name && route.name.indexOf('bbs') !== -1)

  let title = 'Sera\'s Diablo® II Resurrected'

  if (isKnowledge)
    title = `${pascalCase(to.params.section)}${to.params.part ? ' : ' + pascalCase(to.params.part) : ''} | Sera\'s Diablo® II Resurrected`
  else if (isBbs)
    title = `${pascalCase(to.params.sec)} | Sera\'s Diablo® II Resurrected`

  document.title = title

  const ogTitle = document.createElement('meta')
  ogTitle.setAttribute('property', 'og:title')
  ogTitle.setAttribute('content', title)

  const oldOgTitle = document.head.querySelector('meta[property="og:title"]')
  if (oldOgTitle === null)
    document.head.appendChild(ogTitle)
  else
    oldOgTitle.replaceWith(ogTitle)

  const descList = to.matched.filter(r => r.meta && r.meta.description)
  const desc = to.meta.desc || descList.length > 0 ? descList[0].meta.description : 'Sera\'s Diablo® II Resurrected'
  const description = document.createElement('meta')
  description.setAttribute('name', 'description')
  description.setAttribute('content', desc)

  const oldDescription = document.head.querySelector('meta[name="description"]')
  if (oldDescription === null)
    document.head.appendChild(description)
  else
    oldDescription.replaceWith(description)

  const ogDescription = document.createElement('meta')
  ogDescription.setAttribute('property', 'og:description')
  ogDescription.setAttribute('content', desc)

  const oldOgDescription = document.head.querySelector('meta[property="og:description"]')
  if (oldOgDescription === null)
    document.head.appendChild(ogDescription)
  else
    oldOgDescription.replaceWith(ogDescription)

  const canonicalLink = document.createElement('link')
  canonicalLink.setAttribute('rel', 'canonical')
  canonicalLink.setAttribute('href', `${location.origin}${to.path}`)

  const oldCanonicalLink = document.head.querySelector('link[rel="canonical"]')
  if (oldCanonicalLink === null)
    document.head.appendChild(canonicalLink)
  else
    oldCanonicalLink.replaceWith(canonicalLink)

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