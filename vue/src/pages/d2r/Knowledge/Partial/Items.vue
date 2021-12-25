<template>
  <div class="full-width">
    <d2r-tap-panel v-if="$route.params.part" :part="$route.params.part">
      <template #tabs>
        <q-tab :ripple="false" content-class="no-padding" v-for="s in sub" :key="s" :name="s" @click="swapPart(s)">
          <q-img :width="$q.screen.lt.sm ? '80px' : '110px'" :ratio="1"
            :src="require(`@/assets/images/d2r/items/${s.toLowerCase()}.png`)" />
          <div class="absolute-center font-kodia word-keep" style="white-space: normal;">
            {{$t(`d2r.knowledge.items.${s.toLowerCase()}`)}}
          </div>
        </q-tab>
      </template>
      <template #panels>
        <q-tab-panel v-for="s in sub" :key="s" :name="s" class="no-scroll word-wrap non-selectable"
          :class="$q.screen.lt.sm ? 'q-px-sm' : 'q-px-lg'">
          <div class="q-mb-md  font-kodia text-weight-bold text-title"
            :class="$q.screen.lt.sm ? 'text-center text-h5 word-keep' : 'text-left q-ml-md text-h4'">
            {{$t(`d2r.knowledge.items.${s.toLowerCase()}`)}}
          </div>
          <component :is="partComponent">
          </component>
        </q-tab-panel>
      </template>
    </d2r-tap-panel>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        sub: ['Cube', 'Rune', 'Craft'],
        loading: false,
        partComponent: null
      }
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
        else if (this.$route.params.section === 'Items')
          this.$router.replace({ name: 'd2r-knowledge-part', params: { section: 'Items', part: 'Cube' } }).catch(() => { })
      },
      load() {
        this.loading = true
        this.partComponent = () => import(/* webpackChunkName: "d2r-knowledge-items" */ `./Items/${this.$route.params.part}`)
      },
      swapPart(val) {
        this.$router.push({ name: 'd2r-knowledge-part', params: { section: 'Items', part: val } }).catch(() => { })
      }
    }
  }
</script>
<style scoped>
</style>