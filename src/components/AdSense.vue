<script setup>
import { ref, shallowReadonly, onMounted, onUnmounted, nextTick } from 'vue'
import { useQuasar } from 'quasar'

const props = defineProps({
  dataAdClient: {
    type: String,
    required: true
  },
  dataAdSlot: {
    type: String,
    required: true
  },
  dataAdFormat: {
    type: String,
    default: null
  },
  dataAdtest: {
    type: String,
    default: 'on'
  },
  dataFullWidthResponsive: {
    type: String,
    default: null
  },
  width: {
    type: String,
    default: '160px'
  },
  height: {
    type: String,
    default: '600px'
  },
  fixed: {
    type: Boolean,
    default: false
  },
  random: {
    type: Boolean,
    default: false
  },
  horizontal: {
    type: String,
    default: "center"
  }
})

const $q = useQuasar()

const adWidth = ref('')
const adHeight = ref('')
const randomSize = shallowReadonly([
  { width: '120px', height: '240px' },
  { width: '120px', height: '600px' },
  { width: '160px', height: '600px' },
  { width: '250px', height: '250px' },
  { width: '250px', height: '360px' },
  { width: '240px', height: '400px' },
  { width: '300px', height: '250px' },
  { width: '300px', height: '600px' },
  { width: '336px', height: '280px' }
])

const onWindowLoad = () => {
  if (props.dataAdtest === 'off')
    (window.adsbygoogle || []).push({})
}

const setSize = () => {
  if (props.random === true) {
    const selectedRandomSize = randomSize[Math.floor(Math.random() * ($q.screen.gt.lg ? 9 : $q.screen.gt.md ? 6 : 3))]
    adWidth.value = selectedRandomSize.width
    adHeight.value = selectedRandomSize.height
  }
  else {
    adWidth.value = props.width
    adHeight.value = props.height
  }
}

onMounted(() => {
  setSize()
  if (document.readyState !== 'complete')
    window.addEventListener("load", onWindowLoad)
  else {
    nextTick(() => {
      onWindowLoad()
    })
  }
})

onUnmounted(() => {
  window.removeEventListener("load", onWindowLoad)
})
</script>

<template>
  <div class="full-width" :style="`position:${fixed ? 'fixed' : ''};text-align:${horizontal}`">
    <ins class="adsbygoogle box" :data-ad-client="dataAdClient" :data-ad-slot="dataAdSlot"
      :data-ad-format="dataAdFormat" :data-adtest="dataAdtest" :data-full-width-responsive="dataFullWidthResponsive"
      :style="`display:inline-block;width:${adWidth};height:${adHeight}`"></ins>
  </div>
</template>

<style scoped>


.box::after {
  position: absolute;
  content: 'AD';
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: .2;
}
</style>