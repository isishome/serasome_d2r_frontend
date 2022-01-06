<template>
  <div class="full-width">
    <d2r-tap-panel v-if="$route.params.part" :part="$route.params.part">
      <template #tabs>
        <q-tab :ripple="false" content-class="no-padding" v-for="act in acts" :key="act" :name="act"
          @click="swapPart(act)">
          <q-img :width="$q.screen.lt.sm ? '80px' : '110px'" :ratio="1"
            :src="require(`@/assets/images/d2r/quests/${act.toLowerCase()}/thumbnail.jpg`)" />
          <div class="absolute-center title font-kodia word-keep" style="white-space: normal;">{{act.indexOf('Secret')
            !== -1 ? $t(`d2r.knowledge.maps.${act.toLowerCase()}`) :
            `${$t('d2r.knowledge.maps.act')}`}}
          </div>
        </q-tab>
      </template>
      <template #panels>
        <q-tab-panel v-for="act in acts" :key="act" dark :name="act" class="no-scroll word-wrap non-selectable"
          :class="$q.screen.lt.sm ? 'q-px-sm' : 'q-px-lg'">
          <div class="q-mb-md  font-kodia text-weight-bold text-title"
            :class="$q.screen.lt.sm ? 'text-center text-h5' : 'text-left q-ml-md text-h4'">
            {{act.indexOf('Secret') !== -1 ? $t(`d2r.knowledge.maps.${act.toLowerCase()}`) :
            `${$t('d2r.knowledge.maps.act')}`}}
          </div>
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
        acts: ['Act', 'Secret1', 'Secret2', 'Secret3'],
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
        else if (this.$route.params.section === 'Quests')
          this.$router.replace({ name: 'd2r-knowledge-part', params: { section: 'Quests', part: 'Act' } }).catch(() => { })
      },
      load() {
        this.loading = true
        this.partComponent = () => import(/* webpackChunkName: "d2r-knowledge-quests" */ `./Quests/${this.$route.params.part}`)
      },
      swapPart(val) {
        this.$router.push({ name: 'd2r-knowledge-part', params: { section: 'Quests', part: val } }).catch(() => { })
      }
    }
  }
</script>
<style scoped>
</style>