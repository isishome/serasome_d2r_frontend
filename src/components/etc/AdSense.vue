<template>
  <div class="full-width" :style="`position:${fixed ? 'fixed' : ''};text-align:${horizontal}`">
    <ins ref="adbox" class="adsbygoogle" :data-ad-client="dataAdClient" :data-ad-slot="dataAdSlot"
      :data-ad-format="dataAdFormat" :data-full-width-responsive="dataFullWidthResponsive"
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
      dataAdFormat: {
        type: String,
        default: null
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
    },
    data() {
      return {
        tempWidth: '',
        tempHeight: '',
        randomSize: [
          { width: '120px', height: '240px' },
          { width: '120px', height: '600px' },
          { width: '160px', height: '600px' },
          { width: '250px', height: '250px' },
          { width: '250px', height: '360px' },
          { width: '240px', height: '400px' },
          { width: '300px', height: '250px' },
          { width: '300px', height: '600px' },
          { width: '336px', height: '280px' }
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
          const selectedRandomSize = this.randomSize[Math.floor(Math.random() * (this.$q.screen.gt.lg ? 9 : this.$q.screen.gt.md ? 6 : 3))]
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