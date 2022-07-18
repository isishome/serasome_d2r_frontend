<template>
  <div>
    <div class="q-mt-md">
      <div class="q-mb-sm q-px-md row justify-between items-center">
        <div class="col-12 col-md-6 row justify-start items-center">
          <q-icon name="search" size="xs" color="yellow-10" />
          <div class="font-title text-h6 text-grey-6 q-ml-sm">{{ $t('search.result') }}</div>
        </div>
        <q-input dense standout outlined color="yellow-10" :label="$t('search.title')" v-model="text"
          input-class="text-left" class="col-12 col-md-4" @keyup.enter="search"
          :rules="[val => check(val) || $t('search.message.invalidWord')]" maxlength="20" :autofocus="$q.screen.gt.xs"
          no-error-icon>
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon v-else name="close" class="cursor-pointer" @click="text = ''" />
          </template>
        </q-input>
      </div>
      <q-separator inset spaced />
      <div class="q-gutter-md">
        <div v-for="sec in section" :key="sec.sid">
          <d2r-list ref="list" :sec="sec.value" :filter="filter" mode="search" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
const d2rList = () => import(/* webpackChunkName: "d2r-search" */ '@/components/d2r/List')

export default {
  name: 'd2r-search',
  props: {
    filter: {
      type: Object,
      default: function () {
        return {
          finish: true,
          mine: false,
          filterBy: 'titleWithContents',
          filter: this.$route.params.text || ''
        }
      }
    }
  },
  components: {
    'd2r-list': d2rList
  },
  data() {
    return {
      text: this.$route.params.text || ''
    }
  },
  computed: {
    ...mapGetters({
      section: 'getSection'
    })
  },
  methods: {
    check(val) {
      return /^[가-힣a-zA-Z0-9\s]{2,20}$/.test(val)
    },
    search() {
      if (this.filter.filter !== this.text && this.check(this.text)) {
        this.filter.filter = this.text
        for (const l of this.$refs.list) {
          l.search()
        }
      }
    }
  }
}
</script>
<style scoped>
</style>