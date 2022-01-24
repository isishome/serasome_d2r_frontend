<template>
  <div class="full-width" :style="`position:${fixed ? 'fixed' : ''};text-align:${horizontal}`">
    <ins ref="adbox" class="adsbygoogle" :data-ad-client="dataAdClient" :data-ad-slot="dataAdSlot"
      :data-adtest="dataAdtest" :data-ad-format="dataAdFormat" :data-full-width-responsive="dataFullWidthResponsive"
      :style="`display:inline-block;width:${tempWidth};height:${tempHeight}`"></ins>
  </div>
</template>
<script>
  export default {
    name: 'etc-adsense',
    props: {
      dataAdClient: {
        type: String,
        required: true
      },
      dataAdSlot: {
        type: String,
        required: true
      },
      dataAdtest: {
        type: String,
        default: 'off'
      },
      dataAdFormat: {
        type: String,
        default: 'auto'
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
    },
    data() {
      return {
        tempWidth: '',
        tempHeight: '',
        randomSize: [
          //{ width: '300px', height: '250px' },
          //{ width: '336px', height: '280px' },
          //{ width: '250px', height: '250px' },
          //{ width: '250px', height: '360px' },
          //{ width: '240px', height: '400px' },
          //{ width: '300px', height: '600px' },
          { width: '160px', height: '600px' },
          { width: '120px', height: '600px' },
          //{ width: '120px', height: '240px' }
        ]
      }
    },
    mounted() {
      this.setSize()
      if (document.readyState !== 'complete')
        window.addEventListener("load", this.onWindowLoad)
      else {
        this.$nextTick(() => {
          this.onWindowLoad()
        })
      }
    },
    methods: {
      onWindowLoad() {
        if (this.$refs.adbox && this.$refs.adbox.style.display && this.$refs.adbox.style.display === 'inline-block' && !this.$refs.adbox.hasChildNodes())
          (window.adsbygoogle || []).push({})
      },
      setSize() {
        if (this.random === true) {
          const selectedRandomSize = this.randomSize[Math.floor(Math.random() * this.randomSize.length)]
          this.tempWidth = selectedRandomSize.width
          this.tempHeight = selectedRandomSize.height
        }
        else {
          this.tempWidth = this.width
          this.tempHeight = this.height
        }
      }
    },
    unmounted() {
      window.removeEventListener("load", this.onWindowLoad)
    }
  }
</script>
<style scoped>

</style>