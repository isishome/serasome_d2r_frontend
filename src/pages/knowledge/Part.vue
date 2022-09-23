<script setup>
import { computed, shallowRef, defineAsyncComponent, watch } from 'vue'
import { useStore } from '@/stores';
import { useQuasar } from 'quasar'
import { pascalCase } from '@/common'

const props = defineProps({
  section: {
    type: String,
    required: true
  },
  part: {
    type: String,
    required: true
  }
})

const store = useStore()
const $q = useQuasar()

const screen = computed(() => $q.screen)
const section = props.section.toLowerCase()
const partList = computed(() => store.partList)
const partIsClass = computed(() => partList.value.find(p => p.value === props.part))
const partComponent = shallowRef(null)

const loadComponent = (s, p) => {
  switch (s) {
    case 'skills':
      partComponent.value = defineAsyncComponent(() => import('@/pages/knowledge/Skills.vue'))
      break
    case 'npcs':
      partComponent.value = defineAsyncComponent(() => import('@/pages/knowledge/Npcs.vue'))
      break
    case 'shrines':
      partComponent.value = defineAsyncComponent(() => import('@/pages/knowledge/Shrines.vue'))
      break
    default:
      partComponent.value = defineAsyncComponent(() => import(`@/pages/knowledge/${s}/${pascalCase(p)}.vue`))
  }
}

watch(() => props.part, (val) => {
  loadComponent(section, val)
})

loadComponent(section, props.part)
</script>
      
<template>
  <div v-if="partIsClass" class="column q-gutter-y-md">
    <div class="font-kodia text-center text-h4 text-weight-bold text-secondary q-pt-sm q-pb-xl word-keep">
      {{partIsClass.label}}
    </div>
    <div v-if="partIsClass.over" class="row justify-center">
      <img :src="partIsClass.over" :height="screen.lt.sm ? 160 : 250" />
    </div>
  </div>
  <component :is="partComponent" class="part-wrap"></component>
</template>
      
<style scoped>
.part-wrap {
  min-height: 436px;
}
</style>