<script setup>
import { useQuasar } from 'quasar'

const $q = useQuasar()
const darkName = import.meta.env.VITE_APP_D2R_DARK_NAME
//const isDark = $q.cookies.has(darkName) ? $q.cookies.get(darkName).toString() === 'true' : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
const isDark = $q.cookies.has(darkName) ? $q.cookies.get(darkName).toString() === 'true' : true
$q.dark.set(isDark)
document.documentElement.style.setProperty('color-scheme', isDark ? 'dark' : 'light')

if (import.meta.env.PROD) {
  console.log('google tag')
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());

  gtag('config', 'G-DCMMV6W5LP');
}
</script>
<template>
  <router-view />
</template>