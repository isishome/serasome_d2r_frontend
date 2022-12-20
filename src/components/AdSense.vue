<script setup>
import { ref, shallowReadonly, onMounted } from 'vue'
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
    default: 'vertical'
  },
  dataAdtest: {
    type: String,
    default: 'on'
  },
  dataFullWidthResponsive: {
    type: String,
    default: 'false'
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
  if (props.dataAdtest === 'off' && window.adsbygoogle) {
    const adsbygoogle = window.adsbygoogle || []
    adsbygoogle.push({})
  }
}

const styleSize = ref('width:100%;min-height:100px')
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

  styleSize.value = props.dataAdFormat !== 'auto' ? `width:${adWidth.value};height:${adHeight.value}` : 'width:100%;min-height:100px'
}

onMounted(() => {
  setSize()
  const adsenseUrl = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${props.dataAdClient}`

  const findScript = document.head.querySelectorAll(`script[src="${adsenseUrl}"]`)

  if (findScript.length > 0)
    onWindowLoad()
  else {
    const adsenseScript = document.createElement('script')
    adsenseScript.setAttribute('src', adsenseUrl)
    adsenseScript.setAttribute('crossorigin', 'anonymous')
    adsenseScript.addEventListener('load', onWindowLoad)
    document.head.appendChild(adsenseScript)
  }
})
</script>

<template>
  <div class="full-width" :style="`position:${fixed ? 'fixed' : ''};text-align:${horizontal}`">
    <ins class="adsbygoogle box" :data-ad-client="dataAdClient" :data-ad-slot="dataAdSlot"
      :data-ad-format="dataAdFormat" :data-adtest="dataAdtest" :data-full-width-responsive="dataFullWidthResponsive"
      :style="dataFullWidthResponsive === 'true' ? 'display:block' : `display:inline-block;${styleSize}`"></ins>
  </div>
</template>

<style scoped>
.box::before {
  position: absolute;
  content: 'AD';
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: .2;
}
</style>