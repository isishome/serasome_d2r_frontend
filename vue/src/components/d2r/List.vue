<template>
  <div class="d2r-list" v-show="!(mode === 'search' && data.length === 0)">
    <div class="row justify-between items-center q-gutter-x-xs" :class="mode === 'default' ? 'lt-md' : ''">
      <div class="row items-center">
        <q-icon :name="secInfo.icon" class="q-ma-sm" size="20px" color="title" />
        <div class="font-title q-ml-xs text-uppercase font-kodia">{{secInfo.label}}</div>
      </div>
    </div>
    <d2r-table table-class="q-pa-sm" ref="table" :pagination.sync="pagination"
      :columns="columns[sec] || columns.default" :data="data" :mode="mode" :grid="$q.screen.lt.lg" @request="request">
      <template v-if="mode === 'default'" #top-right>
        <div class="row justify-end q-gutter-x-md" :class="[$q.screen.gt.sm ? '' : 'no-margin']">
          <div v-if="sec === 'trade'">
            <q-checkbox dense v-model=" filter.finish" val="d2r" class="text-caption" :label="$t('d2r.bbs.finish')"
              size="xs" color="d2r" />
          </div>
          <div v-if="signStatus">
            <q-checkbox dense v-model="filter.mine" val="d2r" class="text-caption" :label="$t('d2r.bbs.mine')" size="xs"
              color="d2r" />
          </div>
        </div>
      </template>
      <template #search>
        <q-form :class="[$q.screen.gt.xs ? 'justify-end' : 'justify-center']"
          class="q-py-md row items-start q-gutter-sm" @submit="search">
          <div class="col-xs-12 col-sm-4 col-md-3 col-lg-2">
            <q-select :disable="loading" color="amber-8" class="bg-transparent" v-model="filter.filterBy"
              :options="filter.options" :label="$t('d2r.bbs.filterBy')" behavior="menu" dense emit-value no-error-icon
              hide-bottom-space map-options outlined options-cover options-dense />
          </div>
          <div class="col-xs-12 col-sm-4 col-md-3 col-lg-2">
            <q-input :disable="loading" v-model="filter.filter" :label="$t('d2r.bbs.filter')" color="amber-8" standout
              :rules="[ val => /^(\s*|[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9\s]{2,20})$/.test(val)|| $t('search.message.invalidWord') ]"
              dense no-error-icon clearable>
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
        </q-form>
      </template>
      <template #header="{props}">
        <q-tr class="text-center text-title">
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            <template v-if="col.label">{{ col.label }}</template>
            <q-icon v-else :name="col.icon" />
          </q-th>
        </q-tr>
      </template>
      <template #body="{props}">
        <q-tr class="cursor-pointer text-center" @click="rowClick(props.row.pid)"
          :class="[props.row.status === 'FIN' ? 'finish' : '']">
          <q-td>
            <q-chip dense square color="transparent" :class="['text-weight-bold', props.row.classify]">
              {{classifyName(sec, props.row.classify)}}
              <q-icon v-if="props.row.status === 'FIN'" name="check_circle_outline" class="absolute-center finish-icon"
                size="xl" />
            </q-chip>
          </q-td>
          <q-td>
            <q-img :ratio="20/13" style="width:80px" :src="parsThumbnail(props.row.thumbnail)" spinner-color="d2r">
              <template #error>
                <q-img no-default-spinner :ratio="2/1" :src="require('@/assets/images/d2r/blank.png')"
                  class="absolute-center" />
              </template>
            </q-img>
          </q-td>
          <q-td key="title" class="table-row">
            <span :class="`${props.row.classify}-title`"
              v-html="parsSearch(['title', 'titleWithContents'], props.row.title)"></span>
          </q-td>
          <q-td>
            {{props.row.cmt || 0}}
          </q-td>
          <q-td class="text-title">
            <div class="row items-center q-gutter-x-xs">
              <q-avatar rounded color="title" text-color="white" class="q-mr-xs" size="30px">
                <q-img v-if="props.row.avatar" :src="props.row.avatar" :ratio="1">
                  <template #error>
                    <div class="bg-d2r absolute-center">
                      {{props.row.writer.toUpperCase().substring(0,1)}}
                    </div>
                  </template>
                </q-img>
                <template v-else>{{props.row.writer.toUpperCase().substring(0,1)}}</template>
              </q-avatar>
              <div v-html="parsSearch(['writer'], props.row.writer)"></div>
            </div>
          </q-td>
          <q-td>
            <div class="row no-wrap items-center q-gutter-x-xs">
              <q-avatar v-if="isNew(props.row.upd_date)" color="red-14" size="4px" />
              <div>
                {{parsDateTime(props.row.upd_date)}}
              </div>
            </div>
          </q-td>
          <q-td>
            {{isView(props.row.seq)}}
          </q-td>
        </q-tr>
      </template>
      <template #item="{props}">
        <div class="q-pa-sm col-xs-6 col-sm-4">
          <q-card @click="rowClick(props.row.pid)" :class="props.row.status === 'FIN' ? 'finish' : ''">
            <q-card-section class="no-padding absolute-top-left" style="z-index:1;left:-10px;opacity: 0.9;">
              <q-chip square size="xs" style="padding:10px 6px"
                :class="['row justify-center items-center text-caption shadow-1 text-weight-bold classify-chip', props.row.classify]">
                <div class="lt-sm">
                  {{classifyName(sec, props.row.classify).substring(0,4)}}
                </div>
                <div class="gt-xs">
                  {{classifyName(sec, props.row.classify)}}
                </div>
                <q-icon v-if="props.row.status === 'FIN'" name="check_circle_outline"
                  class="absolute-center finish-icon" size="md" />
              </q-chip>
            </q-card-section>
            <q-card-section class="no-padding absolute-top-right" style="z-index:1;right:-10px;opacity: 0.9;">
              <q-chip square icon="far fa-eye" size="xs" style="padding:10px 6px" color="title" text-color="black"
                class="row justify-center items-center text-caption shadow-1 text-weight-bold"
                :label="isView(props.row.seq)" />
            </q-card-section>
            <q-img :src="parsThumbnail(props.row.thumbnail)" ratio="1"
              :style="$q.screen.lt.sm ? 'height:80px' : 'height:100px'">
              <template #error>
                <q-img no-default-spinner :ratio="2/1" :src="require('@/assets/images/d2r/blank.png')"
                  class="absolute-center" />
              </template>
            </q-img>
            <q-card-section :class="$q.screen.lt.sm ? 'q-py-xs q-px-sm' : 'q-pa-sm'">
              <div class="row justify-start no-wrap q-gutter-x-xs">
                <div class="ellipsis text-caption" :class="`${props.row.classify}-title`"
                  v-html="parsSearch(['title', 'titleWithContents'], props.row.title)"></div>
                <div class="text-caption text-amber-8 text-weight-bold" v-if="props.row.cmt">
                  [{{isView(props.row.cmt)}}]
                </div>
              </div>
            </q-card-section>
            <q-card-section :class="$q.screen.lt.sm ? 'q-py-xs q-px-sm' : 'q-pa-sm'">
              <div class="text-caption row justify-end no-wrap items-center text-title">
                <q-avatar rounded color="title" text-color="white" class="q-mr-xs" size="16px">
                  <q-img v-if="props.row.avatar" :src="props.row.avatar" width="100%" :ratio="1">
                    <template #error>
                      <div class="bg-d2r absolute-center">
                        {{props.row.writer.toUpperCase().substring(0,1)}}
                      </div>
                    </template>
                  </q-img>
                  <template v-else>{{props.row.writer.toUpperCase().substring(0,1)}}</template>
                </q-avatar>
                <div class="ellipsis" v-html="parsSearch(['writer'], props.row.writer)"></div>
              </div>
              <div class="text-caption row justify-end no-wrap items-center q-gutter-x-xs">
                <q-avatar v-if="isNew(props.row.upd_date)" color="red-14" size="4px" />
                <div>
                  {{parsDateTime(props.row.upd_date)}}
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </template>
      <template #pagination>
        <q-pagination :disable="loading" v-model="pagination.page" color="title" :max="pagination.rowsNumber"
          :max-pages="5" :ellipses="false" :boundary-numbers="false" direction-links boundary-links />
      </template>
    </d2r-table>
    <q-page-sticky v-if="mode !== 'search' && authority(sec, 'write')" position="bottom-right" :offset="[0, 0]"
      style="z-index: 2;">
      <q-btn push
        :style="$q.screen.gt.lg ? 'right:22vw;bottom:20px' : $q.screen.gt.md ? 'right:13vw;bottom:20px' : 'right:10px;bottom:30px'"
        round size="md" icon="add" color="grey-4" text-color="d2r" :to="`${sec}/write`" :disable="loading" />
    </q-page-sticky>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  const d2rTable = () => import(/* webpackChunkName: "d2r-table" */ '@/components/d2r/Table')
  export default {
    name: 'd2r-list',
    props: {
      sec: {
        type: String,
        required: true
      },
      filter: {
        type: Object,
        default: function () {
          return {}
        }
      },
      mode: {
        type: String,
        default: 'default'
      }
    },
    components: {
      'd2r-table': d2rTable
    },
    data() {
      return {
        loading: false,
        pagination: {
          page: Number(this.$route.query.page) || 1,
          rowsPerPage: 20,
          rowsNumber: 0
        },
        columns: {
          'default':
            [
              { name: 'classify', align: 'center', label: this.$t('d2r.bbs.classify'), headerStyle: 'width:100px;' },
              { name: 'thumbnail', align: 'center', headerStyle: 'width:80px;' },
              { name: 'title', align: 'center', label: this.$t('d2r.bbs.title') },
              { name: 'comments', align: 'center', icon: 'fas fa-comment-dots', headerStyle: 'width:80px;' },
              { name: 'writer', align: 'center', label: this.$t('d2r.bbs.writer'), headerStyle: 'width:180px;' },
              { name: 'regDate', align: 'center', label: this.$t('d2r.bbs.regDate'), headerStyle: 'width:110px;' },
              { name: 'view', align: 'center', label: this.$t('d2r.bbs.view'), headerStyle: 'width:100px;' }
            ]
        },
        data: [],
        filterText: this.filter.filter
      }
    },
    created() {
      if (!this.$route.query.page && this.mode !== 'search')
        this.$router.replace({ name: this.$route.name, query: { page: 1 } }).catch(() => { })
    },
    computed: {
      ...mapGetters({
        signStatus: 'getSignStatus',
        section: 'getSection',
        getSecInfo: 'getSecInfo',
        classifyName: 'getClassifyName',
        authority: 'getAuthority'
      }),
      secInfo() {
        return this.getSecInfo(this.sec)
      }
    },
    watch: {
      'filter.finish': function (val, old) {
        if (val !== old)
          this.search()
      },
      'filter.mine': function (val, old) {
        if (val !== old)
          this.search()
      },
      sec: function () {
        this.filter.mine = false
        this.filter.filterBy = 'titleWithContents'
        this.filter.filter = null
        this.go()
      },
      '$route.query.page': function (val, old) {
        if (!((!old && val === '1') || (!val && old === '1')))
          this.go(Number(val))
      },
      'pagination.page': function (val) {
        this.$router.push({ name: 'd2r-bbs', params: { sec: this.sec }, query: { page: val } }).catch(() => { })
      }
    },
    methods: {
      parsThumbnail(thumbnail) {
        return decodeURIComponent(thumbnail) === 'null' ? require('@/assets/images/d2r/blank.png') : decodeURIComponent(thumbnail)
      },
      parsSearch(filterBy, val) {
        if (filterBy.includes(this.filter.filterBy) && this.filterText !== null && typeof (val) === 'string')
          val = val.replace(new RegExp(`${this.filterText}`, 'gi'), `<span class='search-block'>${this.filterText}</span>`)

        return val
      },
      parsCardThumb(thumbnail) {
        return decodeURIComponent(thumbnail) === 'null' ? require('@/assets/images/d2r/blank.png') : decodeURIComponent(thumbnail)
      },
      search() {
        this.go(1)
      },
      go(page) {
        this.pagination.page = page || 1
        if (this.$refs.table)
          this.$refs.table.onRequest({ pagination: this.pagination })
      },
      request({ pagination, done }) {
        const vm = this
        this.loading = true
        this.filterText = this.filter.filter
        const requestSec = this.sec
        let tempData = []
        this.axios
          .get('/d2r/board/list', {
            params: {
              mode: this.mode,
              sec: this.sec,
              page: pagination.page,
              limit: this.pagination.rowsPerPage,
              finish: this.filter.finish,
              mine: this.filter.mine,
              filterBy: this.filter.filterBy,
              filter: encodeURIComponent(this.filter.filter),
              t: Date.now()
            }
          }).then(function (response) {
            if (requestSec === vm.sec) {
              window.scrollTo(0, 0)
              tempData = response.data.list
              vm.pagination.rowsNumber = response.data.rowsNumber
            }
          })
          .catch(function () { })
          .then(function () {
            vm.data = tempData
            done()
            vm.loading = false
            vm.pagination.page = pagination.page
          })
      },
      rowClick(pid) {
        this.$router.push({ name: 'd2r-read', params: { sec: this.sec, pid: pid }, query: { page: this.$route.query.page || 1 } }).catch(() => { })
      }
    }
  }
</script>
<style>
  .search-block {
    background-color: rgb(231, 231, 231);
    color: rgb(0, 0, 0);
  }
</style>
<style scoped>
  .d2r-list {
    padding: 1em 1em 2em 1em;
    border-radius: 4px;
  }

  .body--light .d2r-list {
    box-shadow: 0 0 0 1px rgba(200, 200, 200, 1);
    background-color: rgba(245, 245, 245, 1);
  }

  .body--dark .d2r-list {
    box-shadow: 0 0 0 1px rgba(45, 45, 45, 1);
    background-color: rgba(5, 5, 5, 1) !important;
  }

  .q-card {
    border: solid 1px #333333;
  }

  .body--dark .q-card {
    background-color: rgba(100, 100, 100, 0.1) !important;
  }

  .body--light .q-card {
    border-color: rgba(180, 180, 180, 1) !important;
  }

  .body--dark tbody tr {
    background-color: rgba(14, 14, 10, .5);
  }

  .body--dark tbody tr:hover {
    background-color: rgba(22, 22, 22, 1) !important;
  }

  .body--light tbody tr:nth-child(even) {
    background-color: rgb(255, 255, 255, .4) !important;
  }

  .body--dark tbody tr:nth-child(even) {
    background-color: rgb(10, 10, 4, .5);
  }

  tbody td {
    border-top: solid 1px rgba(22, 22, 22, 1);
    border-right: solid 1px rgba(22, 22, 22, 1);
    font-size: 1em;
    line-height: 1.8em;
  }

  .body--light tbody td {
    border-top-color: rgba(200, 200, 200, .3);
    border-right-color: rgba(200, 200, 200, .3);
  }

  tbody td:first-child {
    border-left: solid 1px rgba(22, 22, 22, 1);
  }

  .body--light td:first-child {
    border-left-color: rgba(200, 200, 200, .3);
  }

  tbody tr:last-child td {
    border-bottom: solid 1px rgba(22, 22, 22, 1);
  }

  .body--light tr:last-child td {
    border-bottom-color: rgba(200, 200, 200, .3);
  }

  thead th {
    font-weight: bold !important;
    font-size: 1.2em !important;
    font-family: 'Kodia';
  }

  .table-row {
    text-align: left;
    word-break: break-all;
    white-space: inherit;
    font-weight: bold;
    text-overflow: ellipsis;
  }

  .notice {
    background-color: #880000 !important;
    color: #dddddd !important;
  }

  .sell {
    color: rgb(2, 90, 206) !important;
  }

  .buy {
    color: rgb(0, 134, 63) !important;
  }

  .give {
    color: rgb(255, 94, 0) !important;
  }

  @media screen and (max-width:1439px) {
    .body--dark .classify-chip {
      box-shadow: inset 0 0 4px 1px rgba(100, 100, 100, 1);
    }
  }

  .notice-title {
    color: #FFFFFF;
    text-shadow:
      -2px -2px 0 #880000,
      2px -2px 0 #880000,
      -2px 2px 0 #880000,
      2px 2px 0 #880000;
  }

  .body--light .notice-title {
    color: #880000;
    font-weight: bold;
    text-shadow: none !important;
  }

  .finish {
    opacity: .4;
  }

  .finish-icon {
    color: rgba(150, 250, 150, 1);
    opacity: 0.9;
    z-index: 1;
  }
</style>