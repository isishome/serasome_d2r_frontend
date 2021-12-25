<template>
  <div>
    <div class="lt-md">
      <div class="row items-center">
        <q-icon name="fas fa-book" class="q-ma-sm" size="20px" color="title" />
        <div class="font-title text-amber-8 q-ml-xs text-uppercase font-kodia">{{$t('d2r.knowledge.title')}}</div>
      </div>
      <q-separator class="q-mb-sm" />
    </div>
    <div class="know-wrap" :class="!leftTabs ? 'no-left-tabs' : ''">
      <div class="row justify-start bg-transparent" :class="$q.screen.lt.sm ? 'q-col-gutter-xs' : ''">
        <div v-for="tab in list" :key="tab.value" class="overflow-hidden col-4 col-sm font-kodia">
          <q-btn stack :dense="$q.screen.lt.sm" :size="$q.screen.lt.md ? 'sm' : 'md'" class="tab-btn full-width"
            :class="section === tab.value ? `active` : 'bg-knowledge'" @click="swapSection(tab.value)"
            :disable="loading">
            <q-icon class="gt-xs" :name="tab.icon" />
            <div>{{tab.name}}</div>
          </q-btn>
        </div>
      </div>
      <q-tab-panels class="bg-knowledge tab-panels" :class="!leftTabs ? 'no-left-tabs' : ''" v-model="section" animated
        vertical :transition-prev="$q.screen.lt.sm ? 'none' : 'jump-right'"
        :transition-next="$q.screen.lt.sm ? 'none' : 'jump-left'">
        <q-tab-panel v-for="tab in list" :key="tab.value" :name="tab.value"
          class="no-padding row justify-start items-start no-scroll">
          <component :is="sectionComponent" @no-left-tabs="leftTabs = false">
          </component>
        </q-tab-panel>
      </q-tab-panels>
    </div>
    <div style="height:10vh"></div>
  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'
  export default {
    props: {
      section: {
        type: String,
        default: null
      }
    },
    data() {
      return {
        list: this.$t('d2r.knowledge.list'),
        loading: false,
        sectionComponent: null,
        leftTabs: true
      }
    },
    computed: {
      ...mapGetters({
        d2rClass: 'getD2RClass'
      })
    },
    watch: {
      '$route': function (to, from) {
        if (to.params.section !== from.params.section)
          this.init()
      },
      sectionComponent: function (val, old) {
        if (val !== old)
          this.loading = false
      }
    },
    created() {
      if (this.d2rClass.length === 0)
        this.$i18n.mergeLanguageAsync('class').then(() => {
          this.setD2RClass(this.$t('classData'))
        })
    },
    mounted() {
      this.init()
    },
    methods: {
      ...mapActions({
        setD2RClass: 'setD2RClass'
      }),
      init() {
        if (this.section)
          this.load()
        else
          this.$router.replace({ name: 'd2r-knowledge-section', params: { section: 'Classes' } }).catch(() => { })
      },
      load() {
        this.leftTabs = true
        this.sectionComponent = () => import(/* webpackChunkName: "d2r-knowledge-main" */ `./Partial/${this.section}`)
      },
      swapSection(val) {
        this.$router.push({ name: 'd2r-knowledge-section', params: { section: val } }).catch(() => { })
      }
    }
  }
</script>
<style>
  .bg-knowledge {
    background-color: transparent !important;
  }

  .knowledge p {
    margin: 10px 0;
    line-height: 1.8em;
    word-break: keep-all;
    font-size: 1.2em;
    word-spacing: 3px;
    text-indent: 1em;
  }

  @media screen and (max-width:599px) {

    .knowledge p,
    .knowledge th,
    .knowledge td {
      font-size: 1em !important;
    }

    .knowledge .text-sub {
      font-size: 1.4em !important;
    }
  }
</style>
<style scoped>
  .tab-pannels {
    margin-left: 100px;
  }

  .know-wrap {
    margin-left: 122px;
    box-shadow: 1px 0 0 0 rgba(163, 106, 0, 0.4), -1px 0 0 0 rgba(163, 106, 0, 0.4), 0 1px 0 0 rgba(163, 106, 0, 0.4);
    border-radius: 10px;
  }

  .body--light .know-wrap {
    box-shadow: 1px 0 0 0 rgba(5, 5, 5, .2), -1px 0 0 0 rgba(5, 5, 5, .2), 0 1px 0 0 rgba(5, 5, 5, .2) !important;
  }

  .tab-panels {
    margin-left: -122px;
  }

  .no-left-tabs {
    margin-left: 0 !important;
  }

  .tab-btn {
    opacity: .3;
    padding: 4px 2px;
    background: linear-gradient(to bottom, rgba(70, 70, 70, .7) 10%, rgba(20, 20, 20, .7) 60%, rgba(0, 0, 0, 1)), url('/static/images/rough.jpg') repeat !important;
    box-shadow: inset 0 -1px 0 0 rgba(214, 139, 0, .7), inset 1px 1px 0 0 rgba(214, 139, 0, .7), inset 0 1px 0 0 rgba(214, 139, 0, .7), inset 0 0 1px 0 rgba(65, 44, 6, .7), inset 0 0 10px 3px rgba(0, 0, 0, 1);
    color: #b89c5b !important;
    font-weight: bold;
    font-size: 1em !important;
    border-radius: 10px 10px 0 0 !important;
  }

  .body--light .tab-btn {
    opacity: .5;
    background: linear-gradient(to bottom, rgba(185, 185, 185, .5) 10%, rgba(235, 235, 235, .5) 60%, rgba(245, 245, 245, 1)), url('/static/images/rough.jpg') repeat !important;
    box-shadow: inset 0 -1px 0 0 rgba(245, 245, 245, .7), inset 1px 1px 0 0 rgba(245, 245, 245, .7), inset 0 1px 0 0 rgba(245, 245, 245, .7), inset 0 0 1px 0 rgba(65, 44, 6, .7), inset 0 0 10px 3px rgba(0, 0, 0, 1);
    color: rgba(5, 5, 5, 1) !important;
  }

  .tab-btn.active {
    box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, .1);
    opacity: 1;
  }

  .body--light .tab-btn.active {
    box-shadow: inset 0 -1px 0 0 rgba(255, 255, 255, .1);
  }

  @media screen and (max-width:599px) {
    .know-wrap {
      margin-left: 0;
      box-shadow: 0 0 0 1px rgba(163, 106, 0, .4);
    }

    .body--light .know-wrap {
      box-shadow: none !important;
      box-shadow: 0 0 0 1px rgba(5, 5, 5, .2) !important;
    }

    .tab-panels {
      margin-left: 0;
    }

    .tab-btn {
      z-index: 1;
      padding: 4px !important;
      font-size: 1em !important;
      background-size: 80vw !important;
      border-radius: 4px !important;
      box-shadow: none;
      background: linear-gradient(to bottom, rgba(40, 40, 40, .7) 10%, rgba(20, 20, 20, .5) 80%, rgba(0, 0, 0, 1)), url('/static/images/rough.jpg') repeat !important;
    }

    .body--light .tab-btn {
      color: inherit !important;
      background: linear-gradient(to bottom, rgba(235, 235, 235, .5) 10%, rgba(150, 150, 150, .5) 80%, rgba(0, 0, 0, 1)), url('/static/images/rough.jpg') repeat !important;
    }
  }

  .bg-line {
    background-color: #212121;
  }
</style>