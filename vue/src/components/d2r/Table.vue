<template>
  <div :class="tableClass">
    <q-table class="no-padding" :columns="columns" :data="data" row-key="index"
      card-container-class="bg-transparent non-selectable" card-class="bg-transparent non-selectable table-card"
      table-class="no-scroll" :grid="grid" :pagination.sync="paginationClone" :loading="loading" no-data-label
      @request="onRequest" separator="none" square hide-pagination flat :hide-header="!columns || columns.length === 0">
      <template v-if="this.$scopedSlots.top" #top="props">
        <slot name="top" :props="props"></slot>
      </template>
      <template v-if="this.$scopedSlots.header" #header="props">
        <slot name="header" :props="props"></slot>
      </template>
      <template v-if="this.$scopedSlots['top-right']" #top-right>
        <slot name="top-right"></slot>
      </template>
      <template #body="props">
        <slot name="body" :props="props"></slot>
      </template>
      <template #item="props">
        <slot name="item" :props="props">
        </slot>
      </template>
      <template #no-data>
        <div class="full-width row flex-center q-gutter-sm">
          <span>
            {{noData}}
          </span>
        </div>
      </template>
      <template #loading>
        <div class="non-selectable">
          <q-inner-loading showing size="xs">
            <q-spinner-ball size="xl" color="red" />
          </q-inner-loading>
        </div>
      </template>
    </q-table>
    <div v-if="mode === 'default'">
      <div class="full-width">
        <slot name="search"></slot>
      </div>
      <div class="row justify-between full-width">
        <div class="row justify-start"></div>
        <div class="row justify-center">
          <slot name="pagination"></slot>
        </div>
        <div class="row justify-end">
        </div>
      </div>
    </div>
    <div class="lt-md bg-transparent" style="height:2vh"></div>
  </div>
</template>
<script>
  export default {
    name: 'd2r-table',
    props: {
      columns: {
        type: Array,
        default: function () {
          return []
        }
      },
      data: {
        type: Array,
        required: true,
        default: function () {
          return []
        }
      },
      pagination: {
        type: Object,
        required: true,
        default: function () {
          return {}
        }
      },
      mode: {
        type: String,
        default: 'default'
      },
      tableClass: {
        type: String,
        default: null
      },
      grid: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        loading: false,
        paginationClone: { ...this.pagination }
      }
    },
    watch: {
      loading: function (val) {
        document.body.style.overflow = val === true ? 'hidden' : ''
      }
    },
    computed: {
      noData() {
        return this.$t('table.noData')
      }
    },
    mounted() {
      this.onRequest({
        pagination: this.paginationClone
      })
    },
    methods: {
      onRequest(props) {
        this.loading = true
        this.$emit('request', { pagination: props.pagination, done: this.done })
      },
      done() {
        this.loading = false
      }
    }
  }
</script>
<style scoped>
  .table-card {
    padding: 12px;
    overflow-x: hidden !important;
    color: red;
  }

  .body--light .table-card {
    color: rgba(50, 50, 50, 1) !important;
  }

  .body--dark .table-card {
    color: #DDDDDD !important;
  }
</style>