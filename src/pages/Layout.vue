<script setup>
import { defineAsyncComponent, ref, computed, reactive, watch, inject } from 'vue'
import { useQuasar } from 'quasar'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/stores'
import { useI18n } from 'vue-i18n'

// components
const AdSense = defineAsyncComponent(() => import('@/components/AdSense.vue'))
const Zoom = defineAsyncComponent(() => import('@/components/Zoom.vue'))

// module variables
const $q = useQuasar()
const route = useRoute()
const router = useRouter()
const store = useStore()
const { t, tm, rt } = useI18n()
const axios = inject('axios')

// environment variables
const isProduction = import.meta.env.PROD
const darkName = import.meta.env.VITE_APP_D2R_DARK_NAME
const langName = import.meta.env.VITE_APP_LANGUAGE_NAME

// common variables
const images = computed(() => store.images)
const routeName = computed(() => route.name)
const screen = computed(() => $q.screen)
const signStatus = computed(() => store.signStatus)

// scroll & progress
const progress = ref(0)

const onScroll = (info) => {
  if (route.meta.progress) {
    const winHeight = window.innerHeight
    const position = info.position.top
    let scrollPercent = position / (document.body.offsetHeight - winHeight) || 0
    let scrollPercentRounded = Math.round(scrollPercent * 100) / 100
    progress.value = scrollPercentRounded
  }
}

// drawer
const leftDrawer = ref(false)
const rightDrawer = ref(false)

// globalization
const lang = ref($q.cookies.has(langName) ? $q.cookies.get(langName) : $q.lang.getLocale().substring(0, 2) || 'ko')
const options = reactive([
  { label: '한국어', value: 'ko' },
  { label: 'ENGLISH', value: 'en' }
])

const toggleLang = (val) => {
  $q.cookies.set(langName, val, { path: '/', expires: '7300d' })
  document.location.reload()
}

// section
const section = computed(() => store.getSection)

// dark mode
const isDark = computed(() => $q.dark.isActive)
const toggleDark = () => {
  $q.cookies.set(darkName, !$q.dark.isActive, { path: '/', expires: '7300d' })
  $q.dark.set(!$q.dark.isActive)
  document.documentElement.style.setProperty('color-scheme', $q.dark.isActive ? 'dark' : 'light')
  leftDrawer.value = false
}

// header method
const home = () => {
  if (routeName.value === 'd2r-main')
    document.location.reload()
  else
    router.replace({ path: '/' })
}
// adsense
const noAD = computed(() => store.noAD)
const key = ref(0)

// sign
const checkStatus = () => {
  if (signStatus.value === null) {
    axios
      .get('/seras/account/signstatus',
        {
          params: {
            t: Date.now()
          }
        })
      .then((response) => {
        store.setSignStatus(response.data.status)
      })
  }
}

// section
const isKnowledge = computed(() => routeName.value.indexOf('knowledge') !== -1)
store.setSectionList(tm('d2r.knowledge.list').map(l => ({ value: rt(l.value), label: rt(l.name) })))
const sectionList = computed(() => store.sectionList)
const _section = ref('')
const toSection = (val) => {
  router.push({ name: 'd2r-knowledge-section', params: { section: val } })
}

// part
const partList = computed(() => store.partList)
const _part = ref('')
const toPart = (val) => {
  router.push({ name: 'd2r-knowledge-part', params: { section: _section.value, part: val } })
}

watch(() => route.name, (val, old) => {
  if (val !== old && old !== null) {
    progress.value = 0
    checkStatus()
    key.value++
  }
}, {
  immediate: true
})

watch(() => route.params.sec, (val, old) => {
  if (val !== old && old !== null) {
    progress.value = 0
    checkStatus()
    key.value++
  }
}, {
  immediate: true
})

watch(() => route.params.section, (val, old) => {
  if (val !== old && old !== null) {
    _section.value = val
    key.value++
  }
}, {
  immediate: true
})

watch(() => route.params.part, (val, old) => {
  if (val !== old && old !== null) {
    _part.value = val
    key.value++
  }
}, {
  immediate: true
})
</script>

<template>
  <q-layout view="lHr lpR lFr">
    <q-header class="header q-py-sm">
      <q-toolbar :class="screen.gt.md ? 'q-px-xl' : ''">
        <div class="lt-lg func">
          <q-btn dense flat :ripple="false" @click="leftDrawer = !leftDrawer" icon="menu" />
        </div>
        <q-toolbar-title :shrink="screen.gt.md" class="no-padding q-mr-md row justify-center">
          <div class="row items-center cursor-pointer"
            :class="[screen.lt.lg ? 'justify-center' : '', !isDark ? 'light' : '']" @click="home">
            <q-icon flat class="text-secondary rotate-180 q-mr-xs text-title" name="align_vertical_center"
              size="24px" />
            <div class="gt-md font-kodia column items-center">
              <div class="text-h5 text-primary text-title" style="line-height:1">DIABLO® II</div>
              <div class="text-caption text-primary" style="line-height:1">Resurrected</div>
            </div>
            <div class="lt-lg font-kodia text-h4 text-primary text-title">D2R</div>
          </div>
        </q-toolbar-title>
        <div class="q-pl-xl gt-md row items-center justify-start q-gutter-x-sm nav font-kodia">
          <q-btn v-for="sec in section" :key="sec.name" type="a" :class="sec.value === route.params.sec ? 'active' : ''"
            :to="{ name: 'd2r-bbs', params: { sec: sec.value } }" :ripple="false" flat no-caps padding="0 5px"
            size="18px" :label="sec.label" />
          <div class="column justify-center items-start" style="height:56px">
            <q-btn type="a" :style="isKnowledge ? 'opacity:1' : ''"
              :to="{ name: 'd2r-knowledge-part', params:{ section:'classes', part:'amazon'} }" :ripple="false" flat
              no-caps padding="0 5px" size="18px" :label="t('d2r.knowledge.title')" />
            <template v-if="isKnowledge">
              <q-separator color="primary" class="full-width" />
              <q-btn-toggle flat dense v-model="_section" toggle-color="primary" class="section" padding="0 10px"
                :options="sectionList" @update:model-value="toSection" type="a" :ripple="false" />
            </template>
          </div>
        </div>
        <q-space class="gt-md" />
        <div class="row justify-end items-center func" :class="screen.gt.sm ? 'q-gutter-x-sm' : ''">
          <q-icon class="lt-lg" name="none" size="sm" />
          <q-btn class="gt-md" :ripple="false" dense flat icon="language">
            <q-menu anchor="bottom end" self="top end">
              <q-list separator bordered>
                <q-item dense v-for="(option, index) in options" :key="index" :clickable="lang !== option.value"
                  :v-close-popup="lang !== option.value" @click="toggleLang(option.value)"
                  :active="lang === option.value" active-class="text-primary">
                  <q-item-section>
                    <q-item-label>{{ option.label }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn class="gt-md" dense flat :ripple="false" @click="toggleDark"
            :icon="isDark ? 'light_mode' : 'dark_mode'" />
          <q-btn v-if="isKnowledge && partList.length > 1" class="lt-lg" dense flat :ripple="false"
            @click="rightDrawer = !rightDrawer" icon="assignment" />
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer no-swipe-open no-swipe-close no-swipe-backdrop overay v-model="leftDrawer" side="left" behavior="mobile"
      :width="240" elevated>
      <q-list class="font-kodia">
        <q-item>
          <q-item-section>
            <q-select dense outlined separator emit-value map-options color="primary" behavior="menu" v-model="lang"
              :options="options" popup-content-class="font-kodia" :label="t('language')"
              @update:model-value="toggleLang(lang)" />
          </q-item-section>
          <q-item-section side>
            <q-btn dense flat :ripple="false" @click="toggleDark" :icon="isDark ? 'light_mode' : 'dark_mode'" />
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item v-for="sec in section" :key="sec.value" :inset-level="0.5"
          :to="{ name: 'd2r-bbs', params: { sec: sec.value } }" active-class="text-primary">
          <q-item-section>
            {{ sec.label }}
          </q-item-section>
        </q-item>
        <q-expansion-item default-opened :header-inset-level="0.5" :label="t('d2r.knowledge.title')">
          <q-item :active="section.value === _section" v-for="section in sectionList" :key="section" :inset-level="1"
            :to="section.value !== _section ? { name: 'd2r-knowledge-section', params:{ section: section.value} } : null"
            active-class="text-primary">
            <q-item-section>
              {{ section.label }}
            </q-item-section>
          </q-item>
        </q-expansion-item>
      </q-list>
    </q-drawer>
    <q-drawer v-if="isKnowledge && partList.length > 1" no-swipe-open no-swipe-close no-swipe-backdrop overay
      v-model="rightDrawer" side="right" behavior="mobile" :width="240" elevated>
      <q-toolbar class="bg-primary q-pl-lg text-white shadow-2 font-kodia">
        <q-toolbar-title> {{ sectionList.find(s => s.value === _section).label }}</q-toolbar-title>
      </q-toolbar>
      <q-list class="font-kodia">
        <q-item v-for="part in partList" :key="part.value" :inset-level="0.5"
          :to="{ name: 'd2r-knowledge-part', params: { section: _section, part: part.value } }"
          active-class="text-primary">
          <q-item-section>
            {{ part.label }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <q-scroll-observer debounce="100" @scroll="onScroll" />
      <router-view name="carousel" />
      <div class="row knowledge-item">
        <div class="gt-md col row justify-end" style="padding:7px 6px 0 0">
          <div :class="isKnowledge && partList.length > 1 ? 'fixed' : ''">
            <AdSense v-if="!noAD && screen.gt.md" class="overflow-hidden" data-ad-client="ca-pub-5110777286519562"
              data-ad-slot="4948790020" :data-adtest="isProduction ? 'off' : 'on'"
              :width="screen.gt.md ? '160px' : '120px'" height="600px" horizontal="right" :key="`al-${key}`" />
          </div>
        </div>
        <q-page class="col-12 col-lg-8 col-xl-7">
          <div :class="screen.gt.sm ? 'q-pt-sm' : ''">
            <router-view />
          </div>
        </q-page>
        <div class="gt-md col row items-start" style="padding:7px 0 0 6px">
          <div class="fixed">
            <template v-if="isKnowledge && partList.length > 1">
              <div class="part word-keep">
                <div class="column no-wrap q-gutter-y-sm">
                  <q-btn type="a" v-for="part in partList" :key="part.value" dense flat
                    :class="_part === part.value ? 'active' : ''" @click="toPart(part.value)">
                    <q-img :src="part.img" :ratio="2" :height="`${600 / partList.length - 12}px`"
                      :data-class="part.label" />
                  </q-btn>
                </div>
              </div>
              <div class="q-mt-sm">
                <AdSense v-if="screen.gt.md && !noAD" data-ad-client="ca-pub-5110777286519562" data-ad-slot="3887197241"
                  :data-adtest="isProduction ? 'off' : 'on'" width="200px" height="200px" horizontal="left"
                  :key="`ar1-${key}`" />
              </div>
            </template>
            <AdSense v-else-if="screen.gt.md && !noAD" data-ad-client="ca-pub-5110777286519562"
              data-ad-slot="9654321794" :data-adtest="isProduction ? 'off' : 'on'"
              :width="screen.gt.md ? '160px' : '120px'" height="600px" horizontal="left" :key="`ar1-${key}`" />
          </div>
        </div>
      </div>
      <div class="platform-ios-only" style="padding-bottom: 12vh;"></div>
      <q-page-sticky style="z-index: 1;" expand position="top">
        <q-linear-progress :track-color="isDark ? 'grey-8' : 'grey-5'" :value="progress" animation-speed="400"
          color="primary" size="1px" />
      </q-page-sticky>
      <q-page-scroller position="bottom-left" :scroll-offset="150" :offset="[0, 0]"
        style="position: absolute;z-index: 4;">
        <q-btn push
          :style="screen.gt.lg ? 'left:22vw;bottom:20px' : screen.gt.md ? 'left:13vw;bottom:20px' : 'left:10px;bottom:30px'"
          round size="md" icon="keyboard_arrow_up" color="secondary" />
      </q-page-scroller>
    </q-page-container>
  </q-layout>
  <Zoom :images="images" />
</template>

<style scoped>
.header {
  background-color: rgba(255, 255, 255, .8);
  color: var(--q-dark-text) !important;
  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);
}

.body--dark .header::before {
  filter: saturate(10) brightness(1.2);
}

.body--dark .header {
  background-color: var(--q-dark-half);
}

.light {
  filter: contrast(0) brightness(0);
}

.nav:deep(.q-btn) {
  transition: opacity .5s ease;
  opacity: .5;
  position: relative;
}

@media (hover:hover) {
  .nav:deep(a:hover) {
    opacity: .8;
  }
}

.header:deep(.q-btn .q-focus-helper) {
  display: none;
}

.nav:deep(.active) {
  opacity: 1 !important;
}

.nav:deep(.active::after) {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: var(--q-primary);
}

.func:deep(.q-btn) {
  color: #888888;
}

@media (hover:hover) {
  .func:deep(.q-btn:hover) {
    filter: brightness(1.2);
  }
}

.text-title {
  letter-spacing: -2px;
  text-shadow: 0 1px 2px currentColor;
}

.section:deep(.q-btn) {
  opacity: 1;
}

.part {
  width: 200px;
  margin-top: 2px;
}

.part:deep(.q-btn) {
  padding: 2px;
  overflow: hidden;
  box-shadow: 0 0 0 1px var(--q-dark-cloud);
  border-radius: 0;
}

.body--dark .part:deep(.q-btn) {
  box-shadow: 0 0 0 1px var(--q-light-cloud);
}

.part:deep(.q-img) {
  filter: grayscale(100%);
  opacity: .6;
}

@media (hover:hover) {
  .part:deep(.q-img:hover) {
    filter: grayscale(0%);
    opacity: .8;
  }
}

.part:deep(.q-btn.active:after) {
  content: '';
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* width: 6px; */
  background: linear-gradient(45deg, var(--q-primary) 10%, transparent 10%) !important;
  box-shadow: inset 0 0 1px 0 var(--q-dark-page);
  position: absolute;
  z-index: 1;
}

.part:deep(.q-btn.active .q-img) {
  filter: grayscale(0%);
  opacity: 1;
}

.part:deep(.q-img::after) {
  position: absolute;
  content: attr(data-class);
  z-index: 1;
  left: 50%;
  bottom: 0;
  line-height: 1.2 !important;
  transform: translateX(-50%);
  color: var(--q-dark-page);
  font-weight: bold;
  text-shadow: 2px 0 2px var(--q-light-page), -2px 0 2px var(--q-light-page), 0 2px 2px var(--q-light-page), 0 -2px 2px var(--q-light-page);
  line-height: 1em;
}

.body--dark .part:deep(.q-img::after) {
  color: var(--q-light-page) !important;
  text-shadow: 2px 0 2px var(--q-dark-page), -2px 0 2px var(--q-dark-page), 0 2px 2px var(--q-dark-page), 0 -2px 2px var(--q-dark-page);
}
</style>