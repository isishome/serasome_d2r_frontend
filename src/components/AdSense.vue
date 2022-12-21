<script setup>
import { computed, onMounted } from 'vue'

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
  }
})

const boxStyle = computed(() => props.dataFullWidthResponsive === 'true' ? 'display:block' : `display:inline-block;width:${props.width};height:${props.height}`)

onMounted(() => {
  const adsbygoogle = window.adsbygoogle || []
  const scriptURL = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
  const findScript = document.body.querySelectorAll(`script[src="${scriptURL}"]`)
  if (findScript.length > 0)
    adsbygoogle.push({})
  else {
    const newScript = document.createElement('script')
    newScript.setAttribute('src', scriptURL)
    newScript.setAttribute('crossorigin', 'anonymous')
    newScript.setAttribute('defer', 'true')
    newScript.addEventListener('load', () => {
      adsbygoogle.push({})
    })
    document.body.appendChild(newScript)
  }
})
</script>

<template>
  <ins class="adsbygoogle box" :data-ad-client="dataAdClient" :data-ad-slot="dataAdSlot" :data-ad-format="dataAdFormat"
    :data-adtest="dataAdtest" :data-full-width-responsive="dataFullWidthResponsive" :style="boxStyle"></ins>
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