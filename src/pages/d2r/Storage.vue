<template>
  <div class="wrap">
    <div v-if="loading.global" class="fullscreen non-selectable">
      <q-inner-loading showing size="xs">
        <q-spinner-ball size="xl" color="red" />
      </q-inner-loading>
    </div>
    <div class="lt-md">
      <div class="row items-center">
        <q-icon name="inventory_2" class="q-ma-sm" size="20px" color="title" />
        <div class="font-title q-ml-xs text-uppercase font-kodia q-dark">{{$t('d2r.storage.title')}}</div>
      </div>
      <q-separator class="q-mb-sm" />
    </div>
    <div class="relative-position q-pb-lg">
      <div v-if="loading.account" class="loading">
        <q-inner-loading showing size="xs">
          <q-spinner-ball size="xl" color="red" />
        </q-inner-loading>
      </div>
      <div class="q-pa-md text-h6 text-weight-bold row justify-start items-center q-col-gutter-x-md">
        <div class="row items-center">
          <q-checkbox keep-color color="title" size="lg" v-model="selected.account" dense
            :disable="d2rAccounts.length === 0" />
        </div>
        <div class="font-kodia text-title">
          {{$t('d2r.storage.account.title')}}
        </div>
        <div class="gt-sm q-px-lg"></div>
        <q-space class="lt-md" />
        <div class="q-gutter-x-sm" v-if="d2rAccounts.filter(a => a.selected === true).length > 0">
          <q-btn icon="delete_sweep" push size="12px" color="grey-7" text-color="grey-10" padding="xs"
            @click="deleteShow('account', d2rAccounts.filter(a => a.selected === true).map(a => a.aid))" />
        </div>
      </div>
      <div class="row justify-start q-col-gutter-md q-pa-md">
        <div class="col-6 col-xl-2 col-lg-3 col-sm-4">
          <q-card class="bg-transparent grid-btn add cursor-pointer non-selectable" v-ripple
            @click="d2rDialogShow('account')">
            <q-img :ratio="20/13" :src="require('@/assets/images/d2r/null.png')" />
            <q-card-actions>
              <span class="text-transparent">add</span>
            </q-card-actions>
            <q-icon name="add" size="md" class="absolute-center text-title" />
            <div>
              <q-badge v-if="d2rAccounts.length === 0" class="blinking" color="yellow"
                style="padding:10px;margin:-10px -100px" text-color="black" multi-line floating>
                <q-icon name="arrow_downward" />{{$t('d2r.storage.help.addAccount')}}
              </q-badge>
            </div>
          </q-card>
        </div>
        <div class="col-6 col-xl-2 col-lg-3 col-sm-4 relative-position grid-wrap" v-for="a in d2rAccounts" :key="a.aid"
          :class="[a.aid === aid ? 'selected' : '']">
          <q-card class="grid-btn non-selectable">
            <q-img :ratio="20/13" :src="require('@/assets/images/d2r/account.png')" :img-style="accountStyle"
              @click="selectCard('account', a.aid)" class="cursor-pointer" v-ripple>
              <div class="text-body ellipsis absolute-bottom text-center title">{{a.name}}</div>
            </q-img>
            <q-separator />
            <q-card-actions align="right">
              <q-checkbox size="sm" keep-color color="title" v-model="a.selected" dense />
              <q-space />
              <q-btn flat dense round size="sm" color="grey-7" icon="delete" @click="deleteShow('account', a.aid)" />
              <q-btn flat dense round size="sm" color="title" icon="edit" @click="d2rDialogShow('account', a)" />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
    <div v-if="aid !== null" class="relative-position q-pb-lg">
      <div v-if="loading.character" class="loading">
        <q-inner-loading showing size="xs">
          <q-spinner-ball size="xl" color="red" />
        </q-inner-loading>
      </div>
      <div>
        <q-separator class="separator" />
      </div>
      <div class="q-pa-md text-h6 text-weight-bold row justify-start items-center q-col-gutter-x-md">
        <div class="row items-center">
          <q-checkbox keep-color color="title" size="lg" v-model="selected.character" dense
            :disable="d2rCharacters.length === 0" />
        </div>
        <div class="font-kodia text-title">
          {{$t('d2r.storage.character.title')}}
        </div>
        <div class="gt-sm q-px-lg"></div>
        <q-space class="lt-md" />
        <div class="q-gutter-x-sm" v-if="d2rCharacters.filter(c => c.selected === true).length > 0">
          <q-btn icon="delete_sweep" push size="12px" color="grey-7" text-color="grey-10" padding="xs"
            @click="deleteShow('character', d2rCharacters.filter(c => c.selected === true).map(c => c.cid))" />
        </div>
      </div>
      <div class="row justify-start q-col-gutter-md q-pa-md">
        <div class="col-6 col-xl-2 col-lg-3 col-sm-4">
          <q-card flat class="bg-transparent grid-btn add cursor-pointer non-selectable" v-ripple
            @click="d2rDialogShow('character')">
            <q-img :ratio="20/13" :src="require('@/assets/images/d2r/null.png')" />
            <q-card-actions>
              <span class="text-transparent">add</span>
            </q-card-actions>
            <q-icon name="add" size="md" class="absolute-center text-title" />
            <div>
              <q-badge v-if="d2rCharacters.length === 0" class="blinking" color="yellow"
                style="padding:10px;margin:-10px -100px" text-color="black" multi-line floating>
                <q-icon name="arrow_downward" />{{$t('d2r.storage.help.addCharacter')}}
              </q-badge>
            </div>
          </q-card>
        </div>
        <div class="col-6 col-xl-2 col-lg-3 col-sm-4 relative-position grid-wrap" v-for="c in d2rCharacters"
          :key="c.cid" :class="c.cid === cid ? 'selected' : ''">
          <q-card class="grid-btn non-selectable">
            <q-img :ratio="20/13" :src="require(`@/assets/images/d2r/classes/face/${c.clsid}.png`)"
              @click="selectCard('character', c.cid)" class="cursor-pointer" v-ripple>
              <div class="text-body ellipsis absolute-bottom text-center title">{{c.name}}</div>
            </q-img>
            <q-card-actions align="right">
              <q-checkbox keep-color color="title" size="sm" v-model="c.selected" dense />
              <q-space />
              <q-btn flat dense round size="sm" color="grey-7" icon="delete" @click="deleteShow('character', c.cid)" />
              <q-btn flat dense round size="sm" color="title" icon="edit" @click="d2rDialogShow('character', c)" />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
    <div v-if="cid !== null" class="relative-position">
      <div v-if="loading.item" class="loading">
        <q-inner-loading showing size="xs">
          <q-spinner-ball size="xl" color="red" />
        </q-inner-loading>
      </div>
      <div class="q-pt-lg">
        <q-separator class="separator" />
      </div>
      <div class="q-pa-md text-h6 text-weight-bold row justify-start items-center q-col-gutter-x-md">
        <div class="row items-center">
          <q-checkbox keep-color color="title" size="lg" v-model="selected.item" dense
            :disable="d2rItems.length === 0" />
        </div>
        <div class="font-kodia text-title">
          {{$t('d2r.storage.item.title')}}
        </div>
        <q-space class="lt-md" />
        <div class="gt-sm q-px-lg"></div>
        <div class="q-gutter-x-sm" v-if="d2rItems.filter(i => i.selected === true).length > 0">
          <q-btn icon="delete_sweep" push size="12px" color="grey-7" text-color="grey-10" padding="xs"
            @click="deleteShow('item', d2rItems.filter(i => i.selected === true).map(i => i.iid))" />
          <q-btn icon="app_registration" push size="12px" color="brown-5" padding="xs"
            @click="tradeShow(d2rItems.filter(i => i.selected === true).map(i => i.iid))" />
        </div>
      </div>
      <div class="row justify-start q-col-gutter-md q-pa-md relative-position">
        <div class="col-6 col-xl-2 col-lg-3 col-sm-4">
          <q-card flat class="bg-transparent grid-btn add cursor-pointer non-selectable" v-ripple
            @click="d2rDialogShow('item')">
            <q-img :ratio="20/13" :src="require('@/assets/images/d2r/null.png')" />
            <q-card-actions>
              <span class="text-transparent">add</span>
            </q-card-actions>
            <q-icon name="add" size="md" class="absolute-center text-title" />
            <div>
              <q-badge v-if="d2rItems.length === 0" class="blinking" color="yellow"
                style="padding:10px;margin:-10px -100px" text-color="black" multi-line floating>
                <q-icon name="arrow_downward" />{{$t('d2r.storage.help.addItem')}}
              </q-badge>
            </div>
          </q-card>
        </div>
        <div class="col-6 col-xl-2 col-lg-3 col-sm-4 relative-position grid-wrap" v-for="i in d2rItems" :key="i.iid"
          :class="[i.trading === 2 ? 'finished' : '']">
          <q-card class="grid-btn non-selectable">
            <q-img :ratio="20/13" :src="decodeURIComponent(i.thumbnail)" class="cursor-pointer" v-ripple
              @click="d2rDialogShow('item', i)">
              <template #error>
                <div class="text-body ellipsis absolute-bottom text-center title">{{i.name}}</div>
              </template>
              <div class="text-body ellipsis absolute-bottom text-center title">{{i.name}}</div>
            </q-img>
            <q-card-actions align="right">
              <q-checkbox keep-color color="title" size="sm" v-model="i.selected" dense />
              <q-space />
              <q-btn flat dense round size="sm" color="grey-7" icon="delete" @click="deleteShow('item', i.iid)" />
              <q-btn v-if="i.trading === 0" flat dense round size="sm" color="brown-5" icon="app_registration"
                @click="tradeShow(i.iid)" />
              <q-btn v-if="i.trading === 1 &&i.pid !== null" flat dense round size="sm" color="primary"
                icon="north_east" :to="{name:'d2r-read', params:{sec:i.sec, pid:i.pid}}" />
            </q-card-actions>
          </q-card>
        </div>
        <div class="row justify-between full-width">
          <div class="row justify-start"></div>
          <div class="row justify-center">
            <q-pagination :disable="loading.item" v-model="page" color="title" :max="pagination.rowsNumber || 1"
              :max-pages="5" :ellipses="false" :boundary-numbers="false" direction-links boundary-links @input="go" />
          </div>
          <div class="row justify-end">
          </div>
        </div>
      </div>
    </div>
    <d2r-confirm v-model="deleteConfirm" icon="delete" color="negative" :message="deleteMessage" @cancel="deleteCancel"
      @confirm="deleteProcess" />
    <d2r-confirm v-model="tradeConfirm" icon="app_registration" color="brown-5" :message="tradeMessage"
      @cancel="tradeCancel" @confirm="tradeProcess" />
    <q-dialog v-model="d2rDialog" :persistent="loading.item" :transition-show="$q.screen.gt.xs ? 'scale' : 'slide-up'"
      :transition-hide="$q.screen.gt.xs ? 'scale' : 'slide-down'" @before-hide="d2rDialogBeforeHide"
      @hide="d2rDialogHide" :maximized=" d2rDialogType === 'item' && $q.screen.lt.sm">
      <d2r-item v-if="d2rDialogType === 'item'" :cid="cid" :iid="d2rItemInfo.iid" @cancel="d2rDialog = false"
        @process="d2rDialogProcess" @error="d2rDialogError" @persistent="d2rDialogPersistent" />
      <q-card v-else :class="$q.screen.gt.sm ? 'dialog-card' : ''" bordered>
        <q-form @submit="d2rDialogProcess" class="column">
          <template v-if="d2rDialogType === 'account'">
            <q-card-section class="col">
              <q-input v-model="d2rAccountInfo.name" color="d2r" :label="$t('d2r.storage.account.name')"
                :hint="$t('d2r.storage.account.rule')"
                :rules="[val => valid(val) || $t('d2r.storage.account.invalid') ]" maxlength="16"
                :disable="loading.item" outlined dense :autofocus="$q.screen.gt.sm" no-error-icon />
            </q-card-section>
          </template>
          <template v-else-if="d2rDialogType === 'character'">
            <q-card-section>
              <q-input v-model="d2rCharacterInfo.name" color="d2r" :label="$t('d2r.storage.character.name')"
                :hint="$t('d2r.storage.character.rule')"
                :rules="[val => valid(val) || $t('d2r.storage.character.invalidName') ]" maxlength="16"
                :disable="loading.item" outlined dense :autofocus="$q.screen.gt.sm" no-error-icon />
            </q-card-section>
            <q-card-section class="col">
              <q-select :transition-show="$q.screen.lt.md ? 'slide-up' : 'none'"
                :transition-hide="$q.screen.lt.md ? 'slide-down' : 'none'" menu-self="center left" color="grey-8"
                v-model="d2rCharacterInfo.clsid" :options="d2rClassOptions" :label="$t('d2r.storage.character.class')"
                dropdown-icon="keyboard_arrow_down"
                :rules="[val => val !== null && d2rClass.map(c => c.id).includes(val) || $t('d2r.storage.character.selectClass') ]"
                dense outlined emit-value map-options no-error-icon>
                <template v-slot:option="scope">
                  <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
                    <q-item-section avatar>
                      <q-avatar size="60px" rounded>
                        <q-img :ratio="1" :src="require(`@/assets/images/d2r/classes/face/${scope.opt.value}.png`)" />
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>
                        {{scope.opt.label}}
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
            </q-card-section>
          </template>
          <q-card-actions class="col-1" align="right">
            <q-btn push color="d2r" :loading="loading.item" :label="dialogBtnLabel" type="submit">
              <template v-slot:loading>
                <q-spinner-facebook />
              </template>
            </q-btn>
            <q-btn push color="grey-8" :disable="loading.item" :label="$t('btn.cancel')" v-close-popup />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'

  const d2rConfirm = () => import(/* webpackChunkName: "d2r-storage" */ '@/components/d2r/Confirm')
  const d2rItem = () => import(/* webpackChunkName: "d2r-storage" */ '@/components/d2r/Item')

  function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

  export default {
    name: 'd2r-storage',
    props: {
      aid: {
        type: String,
        default: null
      },
      cid: {
        type: String,
        default: null
      }
    },
    components: {
      'd2r-confirm': d2rConfirm,
      'd2r-item': d2rItem
    },
    data() {
      return {
        loading: {
          global: false,
          account: false,
          character: false,
          item: false
        },
        d2rDialog: false,
        d2rDialogType: 'account',
        dialogBtnLabel: this.$t('d2r.storage.btn.add'),
        d2rAccounts: [],
        d2rAccountInfo: {
          aid: null,
          name: null,
          selected: false
        },
        deleteType: null,
        deleteId: [],
        deleteMessage: null,
        deleteConfirm: false,
        tradeId: [],
        tradeMessage: null,
        tradeConfirm: false,
        d2rCharacters: [],
        d2rCharacterInfo: {
          cid: null,
          name: null,
          clsid: null,
          selected: false
        },
        d2rItems: [],
        d2rItemInfo: {
          iid: null,
          name: null,
          thumbnail: null,
          selected: false
        },
        pagination: {
          page: 1,
          rowsPerPage: this.$q.screen.lt.md ? 7 : 11
        },
        page: Number(this.$route.query.page) || 1,
        selected: {
          account: false,
          character: false,
          item: false
        }
      }
    },
    created() {
      if (this.d2rClass.length === 0)
        this.$i18n.mergeLanguageAsync('class').then(() => {
          this.setD2RClass(this.$t('classData'))
        })

      this.getAccounts()

      if (this.aid)
        this.getCharacters()

      if (this.cid)
        this.getItems()
    },
    computed: {
      ...mapGetters({
        d2rClass: 'getD2RClass'
      }),
      routeName() {
        return this.$route.name
      },
      d2rClassOptions() {
        return this.d2rClass.map(c => ({ value: c.id, label: c.name }))
      },
      accountStyle() {
        return { 'filter': `contrast(0) opacity(0.3) sepia(${getRandomInt(0, 100)}) hue-rotate(${getRandomInt(0, 360)}deg)` }
      }
    },
    watch: {
      '$route': function (to, from) {
        if (to.params.aid !== from.params.aid) {
          this.selected.character = false
          this.getCharacters()
          this.d2rItems = []
        }
      },
      '$route.query.page': function (val, old) {
        if (val !== old) {
          const page = Number(val) || 1
          if (page && this.cid) {
            this.page = page
            this.selected.item = false
            this.getItems()
          }
        }
      },
      'selected.account': function (val) {
        this.d2rAccounts.forEach(a => a.selected = val)
      },
      'selected.character': function (val) {
        this.d2rCharacters.forEach(c => c.selected = val)
      },
      'selected.item': function (val) {
        this.d2rItems.forEach(i => i.selected = val)
      }
    },
    methods: {
      ...mapActions({
        setD2RClass: 'setD2RClass'
      }),
      getAccounts() {
        const vm = this
        this.loading.account = true
        let tempAccounts = []
        this.axios
          .get('/d2r/storage/accounts')
          .then(function (response) {
            tempAccounts = response.data
          })
          .catch(function () { })
          .then(function () {
            vm.d2rAccounts = tempAccounts
            vm.loading.account = false
          })
      },
      getCharacters() {
        const vm = this
        this.loading.character = true
        let tempCharacters = []
        this.axios
          .get('/d2r/storage/characters', {
            params: {
              aid: this.aid
            }
          })
          .then(function (response) {
            tempCharacters = response.data
          })
          .catch(function () { })
          .then(function () {
            vm.d2rCharacters = tempCharacters
            vm.loading.character = false
          })
      },
      getItems() {
        const vm = this
        this.loading.item = true
        let tempItems = []
        this.axios
          .get('/d2r/storage/items', {
            params: {
              cid: this.cid,
              page: this.page,
              limit: this.pagination.rowsPerPage
            }
          })
          .then(function (response) {
            if (vm.page !== 1 && response.data.items.length === 0)
              vm.go(1)

            tempItems = response.data
          })
          .catch(function () { })
          .then(function () {
            vm.d2rItems = []
            vm.d2rItems = tempItems.items
            vm.pagination.rowsNumber = tempItems.rowsNumber
            vm.loading.item = false
          })
      },
      valid(val) {
        const exp1 = RegExp('([a-zA-Z]+).*([a-zA-Z]+)')
        const exp2 = RegExp('^[a-zA-Z0-9\\!\\@\\$\\^\\&\\(\\)\\_\\+\\`\\~\\-\\=\\[\\]\\{\\}\\.]{2,16}$')
        return val !== null && exp1.test(val) && exp2.test(val)
      },
      d2rDialogShow(t, obj) {
        this.d2rDialogType = t
        if (obj) {
          this.dialogBtnLabel = this.$t('d2r.storage.btn.modify')

          if (this.d2rDialogType === 'account') {
            this.d2rAccountInfo.aid = obj.aid
            this.d2rAccountInfo.name = obj.name
          }
          else if (this.d2rDialogType === 'character') {
            this.d2rCharacterInfo.cid = obj.cid
            this.d2rCharacterInfo.name = obj.name
            this.d2rCharacterInfo.clsid = obj.clsid
          }
          else if (this.d2rDialogType === 'item')
            this.d2rItemInfo.iid = obj.iid
        }
        else
          this.dialogBtnLabel = this.$t('d2r.storage.btn.add')

        this.d2rDialog = true
      },
      d2rDialogBeforeHide() {
        this.d2rAccountInfo.aid = null
        this.d2rAccountInfo.name = null
        this.d2rCharacterInfo.cid = null
        this.d2rCharacterInfo.name = null
        this.d2rCharacterInfo.clsid = null
        this.d2rItemInfo.iid = null
        this.d2rItemInfo.name = null
        this.d2rItemInfo.thumbnail = null
      },
      d2rDialogHide() {
        this.loading.account = false
        this.loading.character = false
        this.loading.item = false
      },
      d2rDialogClose() {
        this.timer1 = setTimeout(() => {
          this.d2rDialog = false
        }, 100)
      },
      d2rDialogProcess(info) {
        const vm = this
        if (this.d2rDialogType === 'account') {
          this.loading.account = true
          this.axios
            .post('/d2r/storage/postaccount', {
              aid: this.d2rAccountInfo.aid,
              name: encodeURIComponent(this.d2rAccountInfo.name)
            }).then(function (response) {
              if (vm.d2rAccountInfo.aid !== null) {
                const findAccount = vm.d2rAccounts.find(a => a.aid === response.data.aid)
                if (findAccount)
                  findAccount.name = response.data.name
              }
              else {
                vm.d2rAccounts.unshift(response.data)
                vm.selectCard(vm.d2rDialogType, response.data.aid)
              }

              vm.d2rDialogClose()
            })
            .catch(function () {
              vm.loading.account = false
            })
            .then(function () { })
        }
        else if (this.d2rDialogType === 'character') {
          this.loading.character = true
          this.axios
            .post('/d2r/storage/postcharacter', {
              aid: this.aid,
              cid: this.d2rCharacterInfo.cid,
              name: encodeURIComponent(this.d2rCharacterInfo.name),
              clsid: this.d2rCharacterInfo.clsid
            }).then(function (response) {
              if (vm.d2rCharacterInfo.cid !== null) {
                const findCharacter = vm.d2rCharacters.find(c => c.cid === response.data.cid)
                if (findCharacter) {
                  findCharacter.name = response.data.name
                  findCharacter.clsid = response.data.clsid
                }
              }
              else {
                vm.d2rCharacters.unshift(response.data)
                vm.selectCard(vm.d2rDialogType, response.data.cid)
              }

              vm.d2rDialogClose()
            })
            .catch(function () {
              vm.loading.character = false
            })
            .then(function () { })
        }
        else if (this.d2rDialogType === 'item') {
          this.loading.item = true
          if (this.d2rItemInfo.iid !== null) {
            const findItem = this.d2rItems.find(i => i.iid === this.d2rItemInfo.iid)
            if (findItem) {
              findItem.name = info.items.name
              findItem.thumbnail = info.items.thumbnail
            }
          }
          else {
            if (this.page === 1) {
              if (this.d2rItems.length >= this.pagination.rowsPerPage)
                this.d2rItems.splice(this.pagination.rowsPerPage - 1, 1)

              this.pagination.rowsNumber = Math.ceil(info.listCount / this.pagination.rowsPerPage)
              this.d2rItems.unshift(info.items)
            }
            else
              this.go(1)
          }

          vm.d2rDialogClose()
        }
      },
      d2rDialogError() {
        this.d2rDialogClose()
      },
      d2rDialogPersistent(val) {
        this.loading.item = val
      },
      selectCard(t, id) {
        const query = t === 'character' && !this.$route.query.page ? { page: 1 } : {}
        this.$router.push({ name: `d2r-storage-${t}`, params: { [`${t.charAt(0)}id`]: id }, query: query }).catch(() => { })
      },
      deleteShow(t, id) {
        this.deleteType = t

        const isArray = Array.isArray(id)
        if (isArray)
          this.deleteId = [...this.deleteId, ...id]
        else
          this.deleteId.push(id)

        this.deleteMessage = this.$t(`d2r.storage.message.delete${t.charAt(0).toUpperCase() + t.slice(1)}${isArray ? 'List' : ''}`)
        this.deleteConfirm = true
      },
      deleteCancel() {
        this.deleteType = null
        this.deleteId = []
        this.deleteMessage = null
        this.deleteConfirm = false
      },
      deleteProcess() {
        const target = this[`d2r${this.deleteType.charAt(0).toUpperCase() + this.deleteType.slice(1)}s`]

        if (this.deleteId.length > 0) {
          const vm = this
          this.loading.global = true
          this.axios
            .post(`/d2r/storage/delete${this.deleteType}`, {
              [`${this.deleteType.charAt(0)}id`]: encodeURIComponent(JSON.stringify(this.deleteId))
            }).then(function () {
              const deleteList = target.filter(t => vm.deleteId.includes(t[`${vm.deleteType.charAt(0)}id`]))
              deleteList.forEach(d => {
                d.deleted = true
              })

              vm.loading.global = false

              this.timer2 = setTimeout(() => {
                deleteList.forEach(d => {
                  if (target.indexOf(d) !== -1)
                    target.splice(target.indexOf(d), 1)
                })

                vm.selected[vm.deleteType] = false

                if (vm.deleteId.includes(vm.aid))
                  vm.$router.push({ name: 'd2r-storage' }).catch(() => { })
                else if (vm.deleteId.includes(vm.cid))
                  vm.$router.push({ name: 'd2r-storage-account', params: { aid: vm.aid } }).catch(() => { })
                else if (vm.deleteType === 'item' && vm.d2rItems.length === 0)
                  vm.go(1)

                vm.deleteCancel()
              }, 400)
            })
            .catch(function () {
              vm.loading.global = false
            })
            .then(function () { })
        }
      },
      tradeShow(id) {
        const isArray = Array.isArray(id)
        if (isArray)
          this.tradeId = [...this.tradeId, ...id]
        else
          this.tradeId.push(id)

        this.tradeMessage = this.$t(`d2r.storage.message.tradeItem${isArray ? 'List' : ''}`)
        this.tradeConfirm = true
      },
      tradeCancel() {
        this.tradeId = []
        this.tradeMessage = null
        this.tradeConfirm = false
      },
      tradeProcess() {
        if (this.tradeId.length > 0) {
          const vm = this
          this.loading.item = true
          this.axios
            .post(`/d2r/storage/registtrade`, {
              iid: encodeURIComponent(JSON.stringify(this.tradeId))
            }).then(function (response) {
              response.data.update.forEach(u => {
                const findItem = vm.d2rItems.find(i => i.iid === u.iid)

                if (findItem) {
                  findItem.trading = 1
                  findItem.pid = u.pid
                  findItem.sec = u.sec
                }
              })

              const msgType = vm.tradeId.length === response.data.update.length ? 'positive' : vm.tradeId.length === response.data.error.length ? 'negative' : 'warning'
              vm.$q.notify({
                type: msgType,
                color: msgType,
                message: vm.$t(`d2r.storage.message.${msgType === 'positive' ? 'successRegist' : msgType === 'negative' ? 'failedRegist' : 'someFailed'}`)
              })

            })
            .catch(function () {
            })
            .then(function () {
              vm.loading.item = false
              vm.tradeCancel()
            })
        }
      },
      go(page) {
        this.$router.push({ path: this.$route.path, query: { page: page } }).catch(() => { })
      }
    },
    beforeDestroy() {
      clearTimeout(this.timer1)
      clearTimeout(this.timer2)
    }
  }
</script>
<style scoped>
  .wrap {
    font-size: 1em;
  }

  .loading {
    user-select: none;
    background-color: rgba(16, 16, 16, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 7000;
  }

  .body--light .loading {
    background-color: transparent;
  }

  .grid-wrap.selected::after {
    opacity: 1;
    content: '\e52d';
    font-family: 'Material Icons';
    font-size: 2em;
    position: absolute;
    top: 4px;
    left: 20px;
    background: linear-gradient(to bottom, #0099ff, #005070);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .grid-wrap.finished::after {
    opacity: 1;
    content: '\e92d';
    font-family: 'Material Icons';
    font-size: 2.4em;
    font-weight: bolder;
    position: absolute;
    top: 4px;
    left: 20px;
    background: linear-gradient(to bottom, rgba(150, 250, 150, 1), rgba(150, 250, 150, 0.5));
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .grid-btn {
    background: rgba(0, 0, 0, 0.6);
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 8px 2px rgb(0 0 0 / 20%);
    transition: background-color 0.1s;
  }

  .body--light .grid-btn {
    background: rgba(245, 245, 245, 1);
  }

  .grid-btn.add {
    background-color: transparent !important;
    box-shadow: none;
    border: dashed 1px rgba(184, 156, 91, 1);
  }

  .separator {
    background-color: rgba(184, 156, 91, 1);
  }


  .dialog-card {
    width: 300px;
    max-width: 70vw;
  }

  .blinking {
    animation: blink 1s ease-in-out infinite alternate;
    font-size: 1em;
    font-weight: bold;
    z-index: 1;
  }

  @keyframes blink {
    0% {
      opacity: 0.6;
      transform: translate(0, -50%);
    }

    100% {
      opacity: 1;
    }
  }

  .title {
    padding: 6px;
  }

  .body--light .q-img__content>div {
    background-color: rgba(0, 0, 0, .1) !important;
  }
</style>