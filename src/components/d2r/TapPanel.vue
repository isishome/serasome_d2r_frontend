<template>
  <div ref="tabsWrap" class="no-padding row justify-start items-start">
    <div class="overflow-hidden">
      <div :class="['tabs', show ? 'show' : 'hide']" :style="`margin-top:${marginTop}px;`">
        <q-tabs ref="tabs" dense vertical switch-indicator :value="part" @input="change" indicator-color="transparent"
          class="font-kodia full-width"
          :style="`max-height:100%;max-width:121px;${$q.screen.lt.sm ? 'font-size:0.7em' : 'font-size:1em'}`"
          active-color="transparent active">
          <slot name="tabs"></slot>
        </q-tabs>
      </div>
    </div>
    <div v-if="noWide === false" class="wide">
      <q-btn class="lt-sm" :class="['btn-wide', !show ? 'blur' : '']" push
        :icon="show ? 'keyboard_arrow_left' : 'keyboard_arrow_right'" size="14px" padding="3px 0" color="grey-8"
        text-color="black" @click="show = !show" style="position:fixed;" />
    </div>
    <q-separator v-if="noWide === false" vertical class="lt-sm separator" :class="[show ? 'show' : 'hide']" />
    <div ref="tabContents" class="col tab-contents">
      <q-tab-panels ref="panels" class="bg-transparent q-mt-md" :value="part" @input="change"
        :transition-prev="$q.screen.lt.sm ? 'none' : 'jump-down'"
        :transition-next="$q.screen.lt.sm ? 'none' : 'jump-up'" @transition="injectImg" animated vertical>
        <slot name="panels"></slot>
      </q-tab-panels>
    </div>
    <q-scroll-observer debounce="600" ref="observer" @scroll="onScroll" scroll-target="body" />
  </div>
</template>
<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'd2r-tap-panel',
    props: {
      part: {
        type: String,
        default: null
      },
      noWide: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: true,
        tabScrollTop: 0,
        tabsWrapHeight: 0,
        tabHeight: 0,
        marginTop: 0,
        thumbStyle: {
          right: '1px',
          borderRadius: '0',
          backgroundColor: '#855d00',
          width: '2px',
          transform: 'scaleY(0.96)',
          opacity: 0.8,
          zIndex: 30
        }
      }
    },
    mounted() {
      this.injectImg()
    },
    methods: {
      ...mapActions({
        setImages: 'setD2RImages'
      }),
      onScroll(info) {
        const contentsHeight = this.$refs.tabContents.clientHeight
        const target = this.$refs.tabsWrap
        const clientRect = target.getBoundingClientRect()
        const relativeTop = clientRect.top
        const scrolledTopLength = window.pageYOffset
        const contentHeight = contentsHeight - this.tabHeight < 0 ? 0 : contentsHeight - this.tabHeight
        const newPosition = info.position > contentHeight ? contentHeight : info.position
        this.tabScrollTop = scrolledTopLength + relativeTop
        this.tabsWrapHeight = this.$refs.tabsWrap ? this.$refs.tabsWrap.clientHeight : 0
        this.tabHeight = this.$refs.tabs ? this.$refs.tabs.$el.clientHeight : 0

        if (this.tabHeight + this.tabScrollTop > window.innerHeight) {
          let min = newPosition - (this.tabScrollTop + this.tabHeight - window.innerHeight)
          let max = this.tabsWrapHeight - this.tabHeight

          min = min > 0 ? min : 0
          max = max > 0 ? max : 0

          if (newPosition >= min && newPosition < max) {
            if (info.direction === 'down')
              this.marginTop = min
            else {
              if (newPosition < this.tabScrollTop)
                this.marginTop = 0
              else
                this.marginTop = newPosition - this.tabScrollTop + 54
            }
          }
          else
            this.marginTop = max
        }
        else
          this.marginTop = newPosition
      },
      change() {
        this.tabsWrapHeight = 0
        window.scrollTo(0, 0)
        this.$refs.observer.trigger(true)
      },
      injectImg() {
        try {
          if (this.$refs.panels.$children[0])
            this.setImages(this.$refs.panels.$children[0].$children.filter(c => c.image).map(i => { return { 'element': i.$el, 'src': i.src } }))
        }
        catch {
          // zoom image error
        }
      }
    }
  }
</script>
<style>
  .tabs .q-tab {
    margin: 4px 4px;
    box-shadow: inset 0 0 1px 1px #855d00;
    border-radius: 4px;
    font-weight: bold;
    font-size: 1em;
    letter-spacing: -1px;
    padding: 2px;
    background: rgba(10, 10, 10, 1);
  }

  .body--light .tabs .q-tab {
    background: #ffffff;
  }

  .tabs .q-tab>div {
    overflow: hidden;
  }

  .tabs .q-tab .q-img {
    filter: opacity(.6) grayscale(100%);
    -webkit-filter: opacity(.6) grayscale(100%);
  }

  .tabs .q-tab.active .q-img {
    filter: opacity(1) brightness(1.5) grayscale(0);
    -webkit-filter: opacity(1) brightness(1.5) grayscale(0);
  }

  @media screen and (max-width:599px) {
    .tabs .q-tab {
      font-size: 1em;
      letter-spacing: -1px;
    }
  }
</style>
<style scoped>
  .separator {
    background-color: rgba(163, 106, 0, .4);
  }

  .show {
    position: -webkit-sticky;
    position: sticky;
    transition: all .6s;
    max-width: 50vw;
  }

  @media screen and (max-width:599px) {
    .hide {
      transition: all .6s;
      max-width: 0;
    }
  }

  .wide {
    transition: all .6s;
    position: -webkit-sticky;
    position: sticky;
    z-index: 1;
    margin: 14px 3px 0 -3px;
  }

  .btn-wide {
    transition: all .6s;
    padding: 0;
    margin-left: -10px;
  }

  .blur {
    opacity: .3;
    color: #ffffff !important;
    margin-left: 0;
  }

  .ad-top,
  .ad-bot {
    background-color: rgba(15, 15, 15, 1);
    box-shadow: inset 0 0 0 1px rgba(184, 156, 91, .2);
    width: 100%;
    height: 200px;
    margin-right: -204px;
  }
</style>