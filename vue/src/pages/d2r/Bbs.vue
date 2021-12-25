<template>
  <div>
    <d2r-read v-if="routeName === 'd2r-read'" :sec="sec" :pid="pid" :filter="filter" />
    <d2r-write v-else-if="['d2r-write', 'd2r-modify'].includes(routeName)" :sec="sec" :pid="pid" />
    <d2r-list v-else :sec="sec" :filter="filter" />
    <div class="bg-transparent q-py-lg"></div>
  </div>
</template>
<script>
  const d2rList = () => import(/* webpackChunkName: "d2r-bbs" */ '@/components/d2r/List')
  const d2rRead = () => import(/* webpackChunkName: "d2r-bbs" */ '@/components/d2r/Read')
  const d2rWrite = () => import(/* webpackChunkName: "d2r-bbs" */ '@/components/d2r/Write')

  export default {
    name: 'Bbs',
    props: {
      sec: {
        type: String,
        default: 'news'
      },
      pid: {
        type: String,
        default: null
      }
    },
    components: {
      'd2r-list': d2rList,
      'd2r-read': d2rRead,
      'd2r-write': d2rWrite
    },
    data() {
      return {
        filter: {
          finish: false,
          mine: false,
          filterBy: 'titleWithContents',
          filter: null,
          options: [
            { label: this.$t('d2r.bbs.titleWithContents'), value: 'titleWithContents' },
            { label: this.$t('d2r.bbs.title'), value: 'title' },
            { label: this.$t('d2r.bbs.writer'), value: 'writer' }
          ]
        }
      }
    },
    computed: {
      routeName() {
        return this.$route.name
      }
    }
  }
</script>