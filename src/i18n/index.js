import { nextTick } from 'vue'
import { createI18n } from 'vue-i18n'
import { instance } from '@/axios'
import ko from './locales/ko'

const services = []
const sections = []

export const i18n = createI18n({
  legacy: false,
  locale: 'ko',
  messages: {
    ko
  }
})

export function setI18nLanguage(locale) {
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
  } else {
    i18n.global.locale.value = locale
  }
  instance.defaults.headers.common['Accept-Language'] = locale
  document.querySelector('html').setAttribute('lang', locale)
}

export async function loadLocaleMessages(locale) {
  if (!i18n.global.availableLocales.includes(locale)) {
    console.log(locale)
    const messages = await import(`./locales/${locale}.json`)

    i18n.global.setLocaleMessage(locale, messages.default)
  }

  return nextTick()
}

export function mergeMessages(service) {
  return new Promise((resolve, reject) => {
    const locale = i18n.global.locale.value
    if (!services.includes(`${locale}-${service}`)) {
      import(`./locales/${service}.${locale.replace(/-[A-Z]{2}/gim, '')}.json`)
        .then((messages) => {
          i18n.global.mergeLocaleMessage(locale, messages.default)
          services.push(`${locale}-${service}`)
          setI18nLanguage(locale)
          resolve()
        })
        .catch((err) => {
          reject(err)
        })
    }
    else {
      setI18nLanguage(locale)
      resolve()
    }
  })
}

export function mergeSection(section, val) {
  return new Promise((resolve, reject) => {
    const locale = i18n.global.locale.value
    if (!sections.includes(`${locale}-${section}-${val}`)) {
      import(`./locales/${section}/${val}.${locale.replace(/-[A-Z]{2}/gim, '')}.json`)
        .then((messages) => {
          i18n.global.mergeLocaleMessage(locale, messages.default)
          sections.push(`${locale}-${section}-${val}`)
          setI18nLanguage(locale)
          resolve()
        })
        .catch((err) => {
          reject(err)
        })
    }
    else {
      setI18nLanguage(locale)
      resolve()
    }
  })
}