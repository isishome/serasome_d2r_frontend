<template>
  <div class="q-pa-sm">
    <q-toolbar class="title no-margin">
      <q-toolbar-title>
        <div class="title-text font-kodia">
          {{$t('d2r.main.recentPosts')}}
        </div>
      </q-toolbar-title>
    </q-toolbar>
    <d2r-summary :data="lastest" more @more-click="more" @item-click="boardItem" blank="blank.png"
      :loading="loading.lastest" />
    <q-toolbar class="title">
      <q-toolbar-title>
        <div class="title-text font-kodia">
          {{$t('d2r.main.topPosts')}}
        </div>
      </q-toolbar-title>
    </q-toolbar>
    <d2r-summary :data="top" @item-click="boardItem" blank="blank.png" :loading="loading.top" />
    <template v-if="signStatus">
      <q-toolbar class="title">
        <q-toolbar-title>
          <div class="title-text font-kodia">
            {{$t('d2r.main.storage')}}
          </div>
        </q-toolbar-title>
      </q-toolbar>
      <d2r-summary :data="storage" @item-click="storageItem" blank="account.png" :loading="loading.storage" />
    </template>
    <div style="padding-bottom: 6vh;"></div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  const d2rSummary = () => import(/* webpackChunkName: "d2r-summary" */ '@/components/d2r/Summary')

  export default {
    name: 'd2r-layout',
    data() {
      return {
        loading: {
          lastest: true,
          top: true,
          storage: true
        },
        lastest: [],
        top: [],
        storage: []
      }
    },
    components: {
      'd2r-summary': d2rSummary
    },
    created() {
      this.getLastest()
      this.getTop()
      if (this.signStatus)
        this.getStorage()
    },
    computed: {
      ...mapGetters({
        signStatus: 'getSignStatus'
      })
    },
    methods: {
      getLastest() {
        const vm = this
        let tempLastest = []
        this.axios
          .get('/d2r/board/lastest').then(function (response) {
            tempLastest = response.data
          })
          .catch(function () { })
          .then(function () {
            vm.lastest = tempLastest
            vm.loading.lastest = false
          })
      },
      getTop() {
        const vm = this
        let tempTop = []
        this.axios
          .get('/d2r/board/top').then(function (response) {
            tempTop = response.data
          })
          .catch(function () { })
          .then(function () {
            vm.top = tempTop
            vm.loading.top = false
          })
      },
      getStorage() {
        const vm = this
        let tempStorage = []
        this.axios
          .get('/d2r/storage/summary').then(function (response) {
            tempStorage = response.data
          })
          .catch(function () { })
          .then(function () {
            vm.storage = tempStorage
            vm.loading.storage = false
          })
      },
      more(sec) {
        this.$router.push({ name: 'd2r-bbs', params: { 'sec': sec } }).catch(() => { })
      },
      boardItem(item) {
        this.$router.push({ name: 'd2r-read', params: { 'sec': item.sec, 'pid': item.pid } }).catch(() => { })
      },
      storageItem(item) {
        if (item.aid && item.cid)
          this.$router.push({ name: 'd2r-storage-character', params: { 'aid': item.aid, 'cid': item.cid } }).catch(() => { })
        else if (item.aid)
          this.$router.push({ name: 'd2r-storage-account', params: { 'aid': item.aid } }).catch(() => { })
      }
    }
  }
</script>
<style scoped>
  .title {
    margin-top: 30px;
    padding: 10px;
    min-height: 40px;
    border-radius: 10px;
    color: #b89d5c;
    background-color: rgba(80, 0, 0, 0.8);
    box-shadow: 1px 1px 0 0 rgba(200, 0, 0, 0.5) inset;
  }

  .body--light .title {
    color: #ffffff;
    background-color: rgba(50, 50, 50, 0.8);
    box-shadow: 1px 1px 0 0 rgba(200, 200, 200, 0.5) inset;
  }

  .title-text::before {
    content: '\e8de';
    font-family: 'Material Icons';
    vertical-align: middle;
    margin-right: 5px;
  }

  .title-text {
    font-size: 16px;
    font-weight: bold;
  }
</style>