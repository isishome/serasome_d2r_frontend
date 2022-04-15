<template>
  <div id="app">
    <q-layout view="hHh lpR lfr" v-if="!independent">
      <q-header class="q-dark q-py-xs text-grey-5 text-weight-bold font-kodia" elevated>
        <q-toolbar class="row justify-start items-center q-col-gutter-x-sm">
          <!-- toolbar 1 -->
          <div class="row justify-start">
            <q-btn dense flat class="lt-lg" @click="drawer = !drawer">
              <q-icon name="fas fa-bars" size="16px" />
            </q-btn>
            <q-btn @click="home" flat class="gt-md">
              <q-avatar flat class="text-d2r d2r-logo-b" icon="fas fa-star-of-david" size="lg" />
              <div class="column q-ml-sm">
                <div class="d2r-flame text-h5">DIABLO<span class="text-h6 vertical-top">®</span> II
                </div>
                <div class="text-left d2r-sub-title text-caption">Resurrected</div>
              </div>
            </q-btn>
          </div>
          <!-- toolbar 2 -->
          <div class="gt-md">
            <q-tabs class="title-size" switch-indicator active-color="title" align="left">
              <q-route-tab v-for="sec in section" :to="{name:'d2r-bbs', params:{sec:sec.value}, query:{page:1}}"
                :key="sec.name">
                <q-icon :name="sec.icon" class="q-ma-sm" size="20px" />
                <div class="text-h7">{{sec.label}}</div>
              </q-route-tab>
              <q-route-tab :to="{name:'d2r-knowledge'}">
                <q-icon name="fas fa-book" class="q-ma-sm" size="20px" />
                <div class="text-h7">{{$t('d2r.knowledge.title')}}</div>
              </q-route-tab>
              <q-route-tab v-if="signStatus" :to="{name:'d2r-storage'}">
                <q-icon name="inventory_2" class="q-ma-sm" size="20px" />
                <div class="text-h7">{{$t('d2r.storage.title')}}</div>
              </q-route-tab>
            </q-tabs>
          </div>

          <div class="col lt-lg absolute-center">
            <q-btn @click="home" flat dense class="row justify-center items-center" size="22px">
              <q-avatar flat class="text-d2r d2r-logo-b" icon="fas fa-star-of-david" size="30px" />
              <div class="q-ml-sm q-pt-xs lt-lg gt-xs">
                <span class="d2r-flame">DIA II-R</span>
              </div>
              <div class="q-ml-sm q-pt-xs lt-sm">
                <span class="d2r-flame">D2R</span>
              </div>
            </q-btn>
          </div>
          <!-- toolbar 3 -->
          <div class="col row justify-end items-center q-gutter-x-sm">
            <q-btn dense flat padding="0" :to="{name:'d2r-knowledge-part', params:{ section:'Items', part:'Cube' }}">
              <q-avatar size="sm" rounded>
                <img :src="require('@/assets/images/d2r/items/cube.png')">
              </q-avatar>
              <span class="gt-lg q-ml-xs">{{$t('d2r.cube')}}</span>
            </q-btn>
            <q-btn dense flat padding="0" :to="{name:'d2r-knowledge-part', params:{ section:'Items', part:'Rune' }}">
              <q-avatar size="sm" rounded>
                <img :src="require('@/assets/images/d2r/items/rune.png')">
              </q-avatar>
              <span class="gt-lg q-ml-xs">{{$t('d2r.rune')}}</span>
            </q-btn>
            <q-btn dense flat class="gt-md" @click="goSeras">
              <q-avatar size="30px">
                <img src="@/assets/images/seras.svg" />
              </q-avatar>
              <span class="gt-lg q-ml-xs">SS</span>
            </q-btn>
            <q-btn v-if="signStatus" dense flat class="gt-md" :to="{name:'d2r-account'}">
              <q-icon name="settings" size="xs" />
              <span class="gt-lg q-ml-xs">{{$t('d2r.account.title')}}</span>
            </q-btn>
            <q-btn dense flat :disable="processSignOut" class="gt-md" @click="sign">
              <q-icon :name="signStatus ? 'fas fa-sign-out-alt' : 'fas fa-user-circle'" size="20px" />
              <span class="gt-lg q-ml-xs">{{ signStatus ? $t('signOut.title') : $t('signIn.title') }}</span>
            </q-btn>
            <q-btn-dropdown class="gt-md" dense dropdown-icon="language" no-icon-animation size="md"
              content-style="background-color:rgba(20,20,20,1) !important;box-shadow: 0 0 4px 0 rgba(200,200,200,0.6)">
              <q-list class="text-grey-7" separator>
                <q-item dense v-for="(option, index) in options" :key="index" clickable v-close-popup
                  @click="lang = option.value" :active="lang === option.value"
                  active-class="text-grey-2 text-weight-bold">
                  <q-item-section>
                    <q-item-label>{{option.label}}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            <q-input dark v-if="$route.name !== 'd2r-search'" dense standout outlined color="yellow-10"
              :label="$t('btn.search')" v-model="text" input-class="text-left" input-style="width:50vw"
              class="col-3 q-ml-md gt-lg" @keyup.enter="search" :error="text.length > 20" hide-bottom-space
              no-error-icon>
              <template v-slot:append>
                <q-icon v-if="text === ''" name="search" />
                <q-icon v-else name="close" class="cursor-pointer" @click="text = ''" />
              </template>
            </q-input>
            <div>
              <q-toggle dense v-model="$q.dark.mode" @input="toggleDark" color="grey-7" size="sm"
                icon-color="blue-grey-10" icon="fas fa-adjust" />
            </div>
          </div>
        </q-toolbar>
      </q-header>
      <q-drawer no-swipe-open no-swipe-close no-swipe-backdrop v-model="drawer" side="left" behavior="mobile"
        class="font-kodia" content-class="d2r-drawer" :width="240" elevated>
        <q-scroll-area class="fit">
          <q-list>
            <q-item>
              <q-item-section>
                <q-select dense outlined separator emit-value map-options color="title" behavior="menu" v-model="lang"
                  :options="options" popup-content-class="font-kodia"
                  popup-content-style="box-shadow:inset 0 0 1px 0 rgba(150,150,150,1); opacity:.9"
                  :label="$t('language')" />
              </q-item-section>
            </q-item>
            <template v-if="!$q.platform.is.cordova">
              <q-item v-if="$route.name !== 'd2r-search'">
                <q-item-section>
                  <q-input dense standout outlined :label="$t('btn.search')" color="title" v-model="text"
                    input-class="text-left" @keyup.enter="search" :error="text.length > 20" hide-bottom-space
                    no-error-icon>
                    <template v-slot:append>
                      <q-icon v-if="text === ''" name="search" />
                      <q-icon v-else name="close" class="cursor-pointer" @click="text = ''" />
                    </template>
                  </q-input>
                </q-item-section>
              </q-item>
              <q-item active-class="none" @click="goSeras" clickable>
                <q-item-section avatar>
                  <q-avatar size="30px">
                    <img src="@/assets/images/seras.svg" style="width:30px !important;" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  SeraSome
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item active-class="bg-teal-4" @click="sign" clickable>
                <q-item-section avatar>
                  <q-icon size="24px" :name="signStatus ? 'fas fa-sign-out-alt' : 'fas fa-user-circle'" />
                </q-item-section>
                <q-item-section>
                  {{ signStatus ? $t('signOut.title') : $t('signIn.title') }}
                </q-item-section>
              </q-item>
            </template>
            <q-separator />
            <template v-if="signStatus">
              <q-item :to="{name:'d2r-account'}">
                <q-item-section avatar>
                  <q-icon size="24px" name="settings" />
                </q-item-section>
                <q-item-section>
                  {{$t('d2r.account.title')}}
                </q-item-section>
              </q-item>
              <q-separator />
            </template>
            <q-expansion-item v-if="$q.platform.is.cordova" exact default-opened
              exact-active-class="active text-transparent">
              <template v-slot:header>
                <q-item-section avatar>
                  <q-icon size="20px" name="fas fa-book" />
                </q-item-section>
                <q-item-section>
                  {{$t('d2r.knowledge.title')}}
                </q-item-section>
              </template>
              <q-item v-for="tab in list" :key="tab.value" :inset-level="0.5"
                :to="{name:'d2r-knowledge-section', params:{ section:tab.value }}" active-class="active">
                <q-item-section avatar>
                  <q-icon size="20px" :name="tab.icon" />
                </q-item-section>
                <q-item-section>
                  {{tab.name}}
                </q-item-section>
              </q-item>
            </q-expansion-item>
            <q-expansion-item v-else exact default-opened :to="{name:'d2r-main'}"
              exact-active-class="active text-transparent">
              <template v-slot:header>
                <q-item-section avatar>
                  <q-icon size="24px" name="fas fa-star-of-david" class="text-d2r d2r-logo-w" />
                </q-item-section>
                <q-item-section>
                  D2R
                </q-item-section>
              </template>
              <q-item v-for="sec in section" :key="sec.value" :inset-level="0.5"
                :to="{name:'d2r-bbs', params:{ sec:sec.value }, query:{ page:1 }}" active-class="active">
                <q-item-section avatar>
                  <q-icon size="20px" :name="sec.icon" />
                </q-item-section>
                <q-item-section>
                  {{sec.label}}
                </q-item-section>
              </q-item>
              <q-item :inset-level="0.5" :to="{name:'d2r-knowledge'}" active-class="active">
                <q-item-section avatar>
                  <q-icon size="20px" name="fas fa-book" />
                </q-item-section>
                <q-item-section>
                  {{$t('d2r.knowledge.title')}}
                </q-item-section>
              </q-item>
              <q-item v-if="signStatus" :inset-level="0.5" :to="{name:'d2r-storage'}" active-class="active">
                <q-item-section avatar>
                  <q-icon size="20px" name="inventory_2" />
                </q-item-section>
                <q-item-section>
                  {{$t('d2r.storage.title')}}
                </q-item-section>
              </q-item>
            </q-expansion-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>
      <q-page-container>
        <q-scroll-observer debounce="100" @scroll="onScroll" />
        <q-dialog v-if="d2rInfo" v-model="d2rInfo.beginner" transition-show="rotate" transition-hide="rotate"
          persistent>
          <q-card class="full-width non-selectable" bordered>
            <q-card-section class="no-padding">
              <q-toolbar class="glossy text-h7 text-weight-bold bg-title">
                <div>{{$t('d2r.beginner.title')}}</div>
              </q-toolbar>
            </q-card-section>
            <q-card-section class="no-padding" style="padding:10px !important;">
              <q-carousel keep-alive animated transition-prev="scale" transition-next="scale" v-model="step"
                ref="carousel" :height="carouselHeight" class="bg-transparent">
                <q-carousel-slide :name="1" class="no-scroll no-padding text-center">
                  <p>{{$t('d2r.beginner.welcome')}}</p>
                  <p>{{$t('d2r.beginner.notice')}}</p>
                </q-carousel-slide>
                <q-carousel-slide :name="2" class="no-scroll no-padding row justify-center">
                  <div class="col-12 col-sm-8">
                    <q-input ref="nickname" autofocus color="title" outlined v-model="basicInfo.nickname"
                      :label="$t('d2r.beginner.nickname')" :hint="$t('d2r.beginner.hint')" :error="basicInfo.error"
                      @input="enter()" :error-message="basicInfo.message" no-error-icon>
                      <template v-slot:append>
                        <q-icon v-if="!basicInfo.duplicate" name="check" color="green-6" />
                      </template>
                    </q-input>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="3" class="no-padding">
                  <q-uploader color="grey-6" class="full-width" ref="uploader" :disable="loading" accept="image/*"
                    :factory="postWithAvatar" :label="$t('d2r.account.avatar')" @added="added" @removed="removed"
                    @uploaded="complete" @failed="failed" @start="start" @finish="finish" hide-upload-btn bordered>
                    <template v-slot:list="scope">
                      <q-list separator>
                        <q-item v-for="file in scope.files" :key="file.name">
                          <q-item-section>
                            <q-item-label class="full-width ellipsis">
                              {{ file.name }}
                            </q-item-label>
                            <q-item-label caption>
                              Status: {{ file.__status }}
                            </q-item-label>
                            <q-item-label caption>
                              {{ file.__sizeLabel }} / {{ file.__progressLabel }}
                            </q-item-label>
                          </q-item-section>
                          <q-item-section v-if="file.__img" thumbnail>
                            <img :src="file.__img.src" style="width:40px;height: 40px;">
                          </q-item-section>
                          <q-item-section top side>
                            <q-btn size="12px" flat dense round icon="delete" @click="scope.removeFile(file)" />
                          </q-item-section>
                        </q-item>
                      </q-list>
                    </template>
                  </q-uploader>
                </q-carousel-slide>
                <template v-slot:control>
                  <q-carousel-control position="bottom-right" :offset="[18, 4]"
                    class="q-gutter-xs row q-px-xs justify-between items-center full-width corousel-control">
                    <div>
                      <q-btn v-if="step !== 1" dense glossy padding="0 10px" color="grey-1" text-color="black"
                        :label="$t('d2r.beginner.prev')" @click="$refs.carousel.previous()" />
                    </div>
                    <div class="row justify-end q-gutter-x-sm">
                      <div v-if="step === 2">
                        <q-btn v-if="checkValidate && basicInfo.duplicate" dense glossy padding="0 10px" :ripple="false"
                          color="green-8" :label="$t('d2r.beginner.check')" @click="checkDuplicate()" />
                      </div>
                      <div v-if="step !== 3">
                        <q-btn dense glossy padding="0 10px" :ripple="false" color="grey-8"
                          :label="$t('d2r.beginner.next')" @click="next()" />
                      </div>
                      <div v-else>
                        <q-btn dense glossy padding="0 10px" color="green-6" text-color="white" icon="done"
                          :label="$t('d2r.beginner.submit')" @click="onSubmit()" />
                      </div>
                    </div>
                  </q-carousel-control>
                </template>
              </q-carousel>
            </q-card-section>
          </q-card>
        </q-dialog>
        <router-view name="carousel" />
        <div :class="['row q-mx-sm', $q.screen.lt.md ? 'q-mt-sm' : 'q-mt-lg']">
          <div class="gt-sm col row justify-end" :style="`padding:${isKnowledge ? '70px' : '0'} 6px 0 0`">
            <adsense v-if="noAD === false && $q.screen.gt.sm === true && isProduction === true && isKnowledge === false"
              data-ad-client="ca-pub-5110777286519562" data-ad-slot="4948790020" width="160px" height="600px"
              horizontal="right" :key="`al-${key}`">
            </adsense>
          </div>
          <q-page class="col-xl-7 col-lg-8 col-md-10 col-12">
            <router-view />
          </q-page>
          <div class="gt-sm col column items-start q-gutter-y-sm"
            :style="`padding:${isKnowledge ? '70px' : '0'} 0 0 6px`">
            <div style="position: fixed;">
              <template>
                <adsense v-if="$q.screen.gt.sm === true && isProduction === true && noAD === false"
                  data-ad-client="ca-pub-5110777286519562" data-ad-slot="9654321794" width="160px" height="600px"
                  horizontal="left" :key="`ar1-${key}`">
                </adsense>
              </template>
            </div>
          </div>
        </div>
        <div class="platform-ios-only" style="padding-bottom: 12vh;"></div>
        <q-page-sticky v-if="$route.meta.progress" style="z-index: 1;" expand position="top" class="desktop-only">
          <q-linear-progress :value="progress" color="d2r" size="xs" />
        </q-page-sticky>
        <q-page-scroller position="bottom-left" :scroll-offset="150" :offset="[0, 0]"
          style="position: absolute;z-index: 2;">
          <q-btn push
            :style="$q.screen.gt.lg ? 'left:22vw;bottom:20px' : $q.screen.gt.md ? 'left:13vw;bottom:20px' : 'left:10px;bottom:30px'"
            round size="md" icon="keyboard_arrow_up" color="d2r" />
        </q-page-scroller>
      </q-page-container>
      <q-footer v-if="$q.screen.gt.sm" class="ss-footer row justify-between items-center q-dark" height-hint="56">
        <div class="col-4 gt-sm"></div>
        <div class="col q-ma-none col-md-4 row justify-center items-center q-gutter-x-xs text-caption">
          <q-avatar size="md">
            <img src="@/assets/images/d2r.png" />
          </q-avatar>
          <div class="row justify-start items-center q-gutter-x-xs">
            <div class="lt-sm font-kodia">D2R</div>
            <div class="gt-xs font-kodia">Diablo® II Resurrected</div>
            <div>by SeraSome @2022</div>
            <div class="absolute-right q-mr-lg row items-center">
              <a class="mailto" href="mailto:serasomething@gmail.com">{{$t('d2r.mailto')}}</a>
            </div>
          </div>
        </div>
        <div class="col gt-sm row justify-end q-ma-sm">
        </div>
      </q-footer>
    </q-layout>
    <router-view name="independent" v-else />
    <d2r-zoom :images="images"></d2r-zoom>
  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'
  const d2rZoom = () => import(/* webpackChunkName: "d2r-common" */ '@/components/d2r/Zoom')

  export default {
    name: 'app',
    components: {
      'd2r-zoom': d2rZoom
    },
    data() {
      return {
        isProduction: process.env.NODE_ENV === 'production',
        scrollTop: 0,
        progress: 0,
        loading: false,
        drawer: false,
        basicInfo: {
          nickname: null,
          error: false,
          duplicate: true,
          message: '',
          fileList: []
        },
        text: '',
        processSignOut: false,
        lang: this.$q.cookies.has(process.env.VUE_APP_LANGUAGE_NAME) ? this.$q.cookies.get(process.env.VUE_APP_LANGUAGE_NAME) : this.$q.lang.getLocale().substring(0, 2) || 'ko',
        options: [
          { label: '한국어', value: 'ko' },
          { label: 'ENGLISH', value: 'en' }
        ],
        key: 0,
        step: 1
      }
    },
    created() {
      this.checkStatus()
      const cookieIsDark = this.$q.cookies.has(process.env.VUE_APP_D2R_DARK_NAME) ? this.$q.cookies.get(process.env.VUE_APP_D2R_DARK_NAME) : true
      this.$q.dark.set(cookieIsDark)
    },
    watch: {
      '$route': function (to, old) {
        if (to !== old && old.name !== null) {
          this.checkStatus()
          this.key++
        }
      },
      lang: function (val, old) {
        if (val !== old) {
          this.$q.cookies.set(process.env.VUE_APP_LANGUAGE_NAME, val, { path: '/', expires: '7300d' })
          document.location.reload()
        }
      }
    },
    computed: {
      ...mapGetters({
        signStatus: 'getSignStatus',
        section: 'getSection',
        d2rInfo: 'getD2RInfo',
        images: 'getD2RImages',
        independent: 'getIndependent',
        noAD: 'getNoAD',
        isKnowledge: 'getIsKnowledge'
      }),
      list() {
        return this.$t('d2r.knowledge.list')
      },
      checkValidate() {
        return /^[0-9a-zA-Z]{1,32}$/mi.test(this.basicInfo.nickname || '')
      },
      carouselHeight() {
        const sm = this.$q.screen.lt.md
        return sm ? [0, '130px', '130px', '170px', '200px'][this.step] : [0, '90px', '140px', '190px'][this.step]
      }
    },
    methods: {
      ...mapActions({
        setSignStatus: 'setSignStatus',
        setBeginner: 'setBeginner',
        setD2RInfo: 'setD2RInfo'
      }),
      checkStatus() {
        const vm = this
        if (this.signStatus === null) {
          this.axios
            .get('/seras/account/signstatus',
              {
                params: {
                  t: Date.now()
                }
              })
            .then(function (response) {
              vm.setSignStatus(response.data.status)
            })
            .catch(function () { })
            .then(function () { })
        }
      },
      onScroll(info) {
        let winHeight = window.innerHeight
        this.scrollTop = info.position
        let scrollPercent = this.scrollTop / (document.body.offsetHeight - winHeight) || 0
        let scrollPercentRounded = Math.round(scrollPercent * 100) / 100
        this.progress = scrollPercentRounded
      },
      toggleDark() {
        this.$q.cookies.set(process.env.VUE_APP_D2R_DARK_NAME, !this.$q.dark.isActive, { path: '/', expires: '7300d' })
        this.$q.dark.set(!this.$q.dark.isActive)
      },
      home() {
        if (this.$q.platform.is.cordova)
          return
        else if (this.$router.currentRoute.name === 'd2r-main')
          document.location.reload()
        else
          this.$router.push({ name: 'd2r-main' }).catch(() => { })

      },
      search() {
        if (this.text.trim() !== '' && this.text.trim().length <= 20)
          this.$router.push({ name: 'd2r-search', params: { text: this.text } }).catch(() => { })
      },
      sign() {
        const vm = this
        if (this.signStatus === true) {
          this.processSignOut = true
          this.axios
            .get('/d2r/account/signout')
            .then(function (response) {
              vm.setD2RInfo(response.data)
            })
            .catch(function () { })
            .then(function () {
              vm.processSignOut = false
              document.location.reload()
            })
        } else
          document.location.href = process.env.VUE_APP_URL.concat('/sign?d2r')
      },
      check() {
        if (this.checkValidate === false) {
          this.basicInfo.error = true
          this.basicInfo.message = this.$t('d2r.beginner.invalid')
          return false
        }
        else if (this.basicInfo.duplicate === true) {
          this.basicInfo.error = true
          this.basicInfo.message = this.$t('d2r.beginner.requireCheck')
          return false
        }

        this.basicInfo.error = false
        return true
      },
      checkDuplicate() {
        const vm = this
        this.loading = true
        this.axios
          .get('/d2r/account/nickname', {
            params: {
              nickname: encodeURIComponent(this.basicInfo.nickname)
            }
          })
          .then(function (response) {
            const status = response.data.result !== 0
            vm.basicInfo.duplicate = status
            vm.basicInfo.error = status
            vm.basicInfo.message = response.data.result > 0 ? vm.$t('d2r.beginner.inUse') : response.data.result === -1 ? vm.$t('d2r.beginner.reserved') : vm.basicInfo.message
          })
          .catch(function () { })
          .then(function () {
            vm.loading = false
          })
      },
      enter() {
        this.basicInfo.duplicate = true
        this.check()
      },
      next() {
        if (this.step === 2) {
          if (this.check() === true)
            this.$refs.carousel.next()
          else {
            this.$refs.nickname.focus()
          }
        }
        else
          this.$refs.carousel.next()
      },
      added(files) {
        const exists = this.basicInfo.fileList.map(f => f.name)
        const addFiles = (files.filter(f => !exists.includes(f.name)))
        this.basicInfo.fileList = [...this.basicInfo.fileList, ...addFiles]
      },
      removed(files) {
        const exists = this.basicInfo.fileList.map(f => f.name)
        const filter = files.filter(f => exists.includes(f.name))
        filter.forEach(f => {
          if (f.__img) {
            const findIndex = this.basicInfo.fileList.findIndex(fi => fi.__img.src === f.__img.src)

            if (findIndex !== -1)
              this.basicInfo.fileList.splice(findIndex, 1)
          }
        })
      },
      onSubmit() {
        if (this.basicInfo.fileList.length > 0)
          this.$refs.uploader.upload()
        else
          this.post()
      },
      postWithAvatar() {
        return {
          url: `${this.axios.defaults.baseURL}/d2r/account/insert`,
          method: 'POST',
          withCredentials: true,
          formFields: [
            {
              'name': 'basicInfo',
              'value': encodeURIComponent(JSON.stringify({
                nickname: this.basicInfo.nickname
              }))
            }
          ]
        }
      },
      post() {
        const vm = this
        this.loading = true
        this.axios
          .post('/d2r/account/insert', {
            basicInfo: encodeURIComponent(JSON.stringify({
              nickname: this.basicInfo.nickname
            }))
          }).then(function (response) {
            vm.complete({
              xhr: {
                response: JSON.stringify(response.data)
              }
            })
          })
          .catch(function () { })
          .then(function () {
            vm.loading = false
          })
      },
      complete(info) {
        this.setD2RInfo(JSON.parse(info.xhr.response))
        this.$router.go()
      },
      failed(info) {
        this.$q.notify({
          type: 'negative',
          color: 'negative',
          message: this.$t('d2r.account.message.failed').concat(' (', info.xhr.response, ')')
        })
      },
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      },
      goSeras() {
        document.location.href = process.env.VUE_APP_URL
      }
    },
    beforeDestroy() {
      clearTimeout(this.timer)
    }
  }
</script>
<style scoped>
  .d2r-flame {
    font-size: 27px;
    font-weight: bolder !important;
    text-shadow: 1px 1px 1px rgb(0, 0, 0), 0 0 3px rgb(251, 255, 0), 0 -1px 5px rgb(255, 136, 0), 0 -3px 10px rgb(255, 38, 0);
    color: #000000 !important;
  }

  .d2r-sub-title {
    font-weight: 500 !important;
    font-size: 16px;
    line-height: 16px;
    color: rgb(240, 156, 0);
    text-shadow: 0 0 1px rgb(251, 255, 0), 0 -1px 2px rgb(255, 136, 0), 0 -3px 8px rgb(255, 38, 0);
  }

  .text-h7 {
    font-size: 1em;
  }

  .corousel-control a {
    text-decoration: none;
  }
</style>