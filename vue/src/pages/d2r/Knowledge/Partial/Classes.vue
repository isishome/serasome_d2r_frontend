<template>
  <div class="full-width">
    <d2r-tap-panel v-if="$route.params.part" :part="$route.params.part">
      <template #tabs>
        <q-tab :ripple="false" content-class="no-padding" v-for="cls in d2rClass" :key="cls.id"
          :name="upperCase(cls.id)" @click="swapPart(upperCase(cls.id))">
          <q-img :width="$q.screen.lt.sm ? '80px' : '110px'" :ratio="1"
            :src="require(`@/assets/images/d2r/classes/face/${cls.id}.png`)" />
          <div class="text-body ellipsis absolute-bottom title font-kodia">{{cls.name}}
          </div>
        </q-tab>
      </template>
      <template #panels>
        <q-tab-panel v-for="cls in d2rClass" :key="cls.id" :name="upperCase(cls.id)"
          class="no-scroll word-wrap non-selectable" :class="$q.screen.lt.sm ? 'q-px-sm' : 'q-px-lg'">
          <div class="q-mb-md font-kodia text-weight-bold text-title text-center"
            :class="$q.screen.lt.sm ? 'text-h5' : 'text-h4'">
            {{cls.name}}</div>
          <div class="row justify-center">
            <img :src="require(`@/assets/images/d2r/classes/${cls.id}.png`)" style="height:calc(8vw + 100px);" />
          </div>
          <component :is="partComponent">
          </component>
        </q-tab-panel>
      </template>
    </d2r-tap-panel>
  </div>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'

  export default {
    data() {
      return {
        loading: false,
        partComponent: null,
        show: true,
        show2: false
      }
    },
    computed: {
      ...mapGetters({
        d2rClass: 'getD2RClass'
      })
    },
    watch: {
      '$route': function (to, from) {
        if (to.params.section === from.params.section && to.params.part !== from.params.part)
          this.init()
      },
      partComponent: function (val, old) {
        if (val !== old)
          this.loading = false
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        if (this.$route.params.part)
          this.load()
        else if (this.$route.params.section === 'Classes')
          this.$router.replace({ name: 'd2r-knowledge-part', params: { section: 'Classes', part: 'Amazon' } }).catch(() => { })
      },
      load() {
        this.loading = true
        this.partComponent = () => import(/* webpackChunkName: "d2r-knowledge-classes" */ `./Classes/${this.$route.params.part}`)
      },
      swapPart(val) {
        this.$router.push({ name: 'd2r-knowledge-part', params: { section: 'Classes', part: val } }).catch(() => { })
      },
      upperCase(val) {
        return val.charAt(0).toUpperCase() + val.slice(1)
      }
    }
  }
</script>
<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }

  .fade-enter,
  .fade-leave-to

  /* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
  }
</style>