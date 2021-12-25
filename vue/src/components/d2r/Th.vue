<template>
  <q-th :key="$vnode.key" :props="props" @click="sorting" :style="isSort ? 'font-weight: 900 !important;' : ''">
    <slot></slot>
  </q-th>
</template>
<script>
  export default {
    name: 'd2r-th',
    props: {
      props: {
        type: Object,
        default: function () {
          return {
            header: true,
            cols: [],
            colsMap: {}
          }
        }
      }
    },
    data() {
      return {
      }
    },
    computed: {
      isSort() {
        return this.props.colsMap[this.$vnode.key] && this.props.colsMap[this.$vnode.key].sortable && this.props.colsMap[this.$vnode.key].sortable === true
      }
    },
    created() {
    },
    methods: {
      sorting() {
        if (this.isSort) {
          this.$emit('sort', { 'sortBy': this.$vnode.key })
        }
      }
    }
  }
</script>
<style scoped></style>