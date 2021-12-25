import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from '@/lang/ko'
import { Cookies } from 'quasar'
const numberFormats = {
  'ko': {
    currency: {
      style: 'currency',
      currency: 'KRW',
      currencyDisplay: '₩'
    }
  },
  'en': {
    currency: {
      style: 'currency',
      currency: 'USD',
      currencyDisplay: '$'
    }
  },
  'zh': {
    currency: {
      style: 'currency',
      currency: 'CNY',
      currencyDisplay: '¥'
    }
  }
}
const loadedLanguages = ['ko'] // our default language that is preloaded
const loadedServices = []

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'ko', // set locale
  fallbackLocale: 'en',
  messages,
  numberFormats,
  objectNotation: true
})

i18n.setI18nLanguage = function (lang) {
  i18n.locale = lang
  document.querySelector('html').setAttribute('lang', lang)
  Cookies.set(process.env.VUE_APP_LANGUAGE_NAME, lang, { path: '/', expires: '7300d' })
  return lang
}

i18n.loadLanguageAsync = function (lang) {
  // If the same language
  if (i18n.locale === lang) {
    return Promise.resolve(i18n.setI18nLanguage(lang))
  }

  // If the language was already loaded
  if (loadedLanguages.includes(lang)) {
    return Promise.resolve(i18n.setI18nLanguage(lang))
  }

  // If the language hasn't been loaded yet
  return import(/* webpackChunkName: "lang-[request]" */ `@/lang/${lang.replace(/-[A-Z]{2}/gim, '')}.js`).then(
    messages => {
      i18n.setLocaleMessage(lang, messages.default[lang])
      loadedLanguages.push(lang)
      return i18n.setI18nLanguage(lang)
    }
  )
}

i18n.mergeLanguageAsync = function (service) {
  // If the service was already loaded
  if (loadedServices.includes(i18n.locale.concat('-', service))) {
    return Promise.resolve(i18n.setI18nLanguage(i18n.locale))
  }

  // If the service hasn't been loaded yet
  return import(/* webpackChunkName: "lang-service-[request]" */ `@/lang/${service}.${i18n.locale.replace(/-[A-Z]{2}/gim, '')}.js`).then(
    messages => {
      i18n.setLocaleMessage(i18n.locale, { ...i18n.messages[i18n.locale], ...messages.default[i18n.locale] })
      loadedServices.push(i18n.locale.concat('-', service))
      return i18n.setI18nLanguage(i18n.locale)
    }
  )
}

export default i18n