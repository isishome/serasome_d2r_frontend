<template>
  <div v-show="indexZoomed !== void 0" class="q-pa-md">
    <div class="fixed-full image-gallery__blinder bg-black"
      :class="indexZoomed !== void 0 ? 'image-gallery__blinder--active' : void 0" @click="zoomImage()" />

    <q-img ref="refFull" class="image-gallery__image image-gallery__image-full fixed-center" :style="fullStyle"
      :class="indexZoomed !== void 0 ? 'image-gallery__image-full--active' : void 0" :src="imagesSrc[indexZoomed]"
      @load="imgLoadedResolve" @error="imgLoadedReject" @click="zoomImage()" />
  </div>
</template>
<script>
  import { morph } from 'quasar'

  export default {
    props: {
      images: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    data() {
      return {
        indexZoomed: void 0,
        imgLoaded: {
          promise: Promise.resolve(),
          resolve: () => { },
          reject: () => { }
        },
        imagesEl: this.images.map(i => i.element),
        imagesSrc: this.images.map(i => i.src),
        fullStyle: '',
      }
    },
    watch: {
      images: function (val) {
        this.imagesEl = val.map(i => i.element)
        this.imagesSrc = val.map(i => i.src)
        this.init()
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        const vm = this
        for (const [index, img] of this.imagesEl.entries()) {
          if (img.style.cursor !== 'zoom-in') {
            img.style.cursor = 'zoom-in'
            img.addEventListener('click', function () {
              vm.zoomImage(index)
            })
          }
          else
            continue
        }
      },
      imgLoadedResolve() {
        this.imgLoaded.resolve()
        if (this.indexZoomed !== void 0 && this.imagesEl[this.indexZoomed]) {
          const base = this.$q.screen.lt.sm ? 100 : 80
          const img = this.imagesEl[this.indexZoomed]
          const imgWidth = img.offsetWidth
          const imgHeight = img.offsetHeight
          const ratio = (imgWidth / imgHeight * base).toFixed(3)
          const rRatio = (imgHeight / imgWidth * base).toFixed(3)

          this.fullStyle = `width: ${base}vw;max-width: ${ratio}vh;height: ${rRatio}vw;max-height: ${base}vh`
        }
      },
      imgLoadedReject() {
        this.imgLoaded.reject()
      },
      zoomImage(index) {
        const { indexZoomed } = this

        this.imgLoaded.reject()

        const zoom = () => {
          if (index !== void 0 && index !== indexZoomed) {
            this.imgLoaded.promise = new Promise((resolve, reject) => {
              this.imgLoaded.resolve = () => {
                this.imgLoaded.resolve = () => { }
                this.imgLoaded.reject = () => { }

                resolve()
              }
              this.imgLoaded.reject = () => {
                this.imgLoaded.resolve = () => { }
                this.imgLoaded.reject = () => { }

                reject()
              }
            })

            this.cancel = morph({
              from: this.imagesEl[index],
              to: this.$refs.refFull.$el,
              onToggle: () => {
                this.indexZoomed = index
                this.imagesEl[index].style.opacity = 0.3
              },
              waitFor: this.imgLoaded.promise,
              duration: 400,
              hideFromClone: true,
              onEnd: end => {
                if (end === 'from' && this.indexZoomed === index)
                  this.indexZoomed = void 0
              }
            })
          }
        }

        if (
          indexZoomed !== void 0 &&
          (this.cancel === void 0 || this.cancel() === false)
        ) {
          morph({
            from: this.$refs.refFull.$el,
            to: this.imagesEl[indexZoomed],
            onToggle: () => {
              this.indexZoomed = void 0
              this.imagesEl[indexZoomed].style.opacity = 1
            },
            duration: 200,
            keepToClone: true,
            onEnd: zoom
          })
        }
        else {
          zoom()
        }
      }
    }
  }
</script>
<style scoped>
  .image-gallery__image {
    width: 150px;
    max-width: 20vw;
    cursor: pointer;
  }

  .image-gallery__image-full {
    z-index: 2002;
    pointer-events: none;
    cursor: zoom-out;
  }

  .image-gallery__image-full--active {
    pointer-events: all;
  }

  .image-gallery__blinder {
    opacity: 0;
    z-index: 2000;
    pointer-events: none;
    transition: opacity 0.3s ease-in-out;
  }

  .image-gallery__blinder--active {
    opacity: 0.6;
    pointer-events: all;
  }

  .image-gallery__blinder--active+div>.image-gallery__image {
    z-index: 2001;
  }
</style>