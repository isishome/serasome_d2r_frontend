<script setup>
import { defineAsyncComponent, reactive, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const List = defineAsyncComponent(() => import('@/components/bbs/List.vue'))
const Read = defineAsyncComponent(() => import('@/components/bbs/Read.vue'))
const Write = defineAsyncComponent(() => import('@/components/bbs/Write.vue'))

defineProps({
  sec: {
    type: String,
    default: 'news'
  },
  pid: {
    type: String,
    default: null
  }
})

const route = useRoute()
const routeName = computed(() => route.name)
const { t } = useI18n()

const filter = reactive({
  finish: false,
  mine: false,
  filterBy: 'titleWithContents',
  filter: null,
  options: [
    { label: t('d2r.bbs.titleWithContents'), value: 'titleWithContents' },
    { label: t('d2r.bbs.title'), value: 'title' },
    { label: t('d2r.bbs.writer'), value: 'writer' }
  ]
})

const reset = () => {
  filter.finish = false
  filter.mine = false
  filter.filterBy = 'titleWithContents'
  filter.filter = null
}

</script>
<template>
  <div>
    <Read v-if="routeName === 'd2r-read'" :sec="sec" :pid="pid" :filter="filter" />
    <Write v-else-if="['d2r-write', 'd2r-modify'].includes(routeName)" :sec="sec" :pid="pid" />
    <List v-else :sec="sec" :filter="filter" @reset="reset" />
    <div class="bg-transparent q-py-lg"></div>
  </div>
</template>