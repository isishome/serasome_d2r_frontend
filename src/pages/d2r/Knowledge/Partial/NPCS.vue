<template>
  <div class="full-width">
    <d2r-tap-panel v-if="$route.params.part" :part="$route.params.part">
      <template #tabs>
        <q-tab :ripple="false" content-class="no-padding" v-for="(act, index) in acts" :key="act" :name="act"
          @click="swapPart(act)">
          <q-img :width="$q.screen.lt.sm ? '80px' : '110px'" :ratio="1"
            :src="require(`@/assets/images/d2r/maps/${act.toLowerCase()}/thumbnail.jpg`)" />
          <div class="ellipsis absolute-center title font-kodia">{{`${$t('d2r.knowledge.maps.act')}
            ${char[index]}`}}
          </div>
        </q-tab>
      </template>
      <template #panels>
        <q-tab-panel v-for="(act, index) in acts" :key="act" :name="act" class="no-scroll word-wrap non-selectable"
          :class="$q.screen.lt.sm ? 'q-px-sm' : 'q-px-lg'">
          <div class="q-mb-md  font-kodia text-weight-bold text-title"
            :class="$q.screen.lt.sm ? 'text-center text-h5' : 'text-left q-ml-md text-h4'">
            {{`${$t('d2r.knowledge.maps.act')} ${char[index]}`}}</div>
          <component :is="partComponent">
          </component>
        </q-tab-panel>
      </template>
    </d2r-tap-panel>
  </div>
</template>
<script>
  const d2rTapPanel = () => import(/* webpackChunkName: "d2r-tap-panel" */ '@/components/d2r/TapPanel')

  export default {
    components: {
      'd2r-tap-panel': d2rTapPanel
    },
    data() {
      return {
        acts: ['Act1', 'Act2', 'Act3', 'Act4', 'Act5'],
        char: ['I', 'II', 'III', 'IV', 'V'],
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
        else if (this.$route.params.section === 'NPCS')
          this.$router.replace({ name: 'd2r-knowledge-part', params: { section: 'NPCS', part: 'Act1' } }).catch(() => { })
      },
      load() {
        this.loading = true
        this.partComponent = () => import(/* webpackChunkName: "d2r-knowledge-npcs" */ `./NPCS/${this.$route.params.part}`)
          .catch(() => {
            this.$router.replace({ name: 'pnf', params: { '0': this.$route.path } }).catch(() => { })
            return false
          })
      },
      swapPart(val) {
        this.$router.push({ name: 'd2r-knowledge-part', params: { section: 'NPCS', part: val } }).catch(() => { })
      }
    }
  }
</script>
<style scoped>
</style>