<template>
  <div>
    <q-card v-if="data" class="read-card">
      <q-card-section class="row justify-between items-center text-weight-bold">
        <div>
          <q-chip class="lt-md" size="md" square :icon="secInfo.icon" color="transparent" text-color="grey-6">
            {{secInfo.label}}
          </q-chip>
        </div>
        <q-chip class="glossy" square size="sm" color="grey-4" text-color="black" icon="article">
          {{classifyName(sec, data.classify)}}
        </q-chip>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div style="word-break: break-all;" :class="$q.screen.gt.sm ? 'text-h5' : 'text-h6'">
          {{data.title}}</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="text-subtitle2 text-title">
          <q-avatar rounded color="title" text-color="white" class="q-mr-xs" size="30px">
            <q-img v-if="data.avatar" :src="data.avatar" :ratio="1">
              <template #error>
                <div class="bg-d2r absolute-center">
                  {{data.writer.substr(0,1)}}
                </div>
              </template>
            </q-img>
            <template v-else>{{data.writer.substr(0,1)}}</template>
          </q-avatar>
          {{data.writer}}
        </div>
        <div class="text-right text-subtitle2 row justify-end items-center q-gutter-x-md">
          <div class="row justify-end items-center">
            <q-icon name="visibility" class="q-mr-xs" />{{data.seq}}
          </div>
          <div class="row justify-end items-center">
            <q-icon name="schedule" class="q-mr-xs" />{{parsDateTime(data.upd_date)}}
          </div>
        </div>
      </q-card-section>
      <q-separator inset />
      <!-- <q-card-section class="no-padding row justify-center items-center">
        <div class="q-pt-xs">
          <adsense v-if="$q.platform.is.cordova !== true && $q.platform.is.mobile === true && !noAD && isProduction"
            data-ad-client="ca-pub-5110777286519562" data-ad-slot="7643637446" width="300px" height="50px"
            :key="`acm-${key}`">
          </adsense>
          <adsense v-if="$q.platform.is.cordova !== true && $q.platform.is.desktop === true && !noAD && isProduction"
            data-ad-client="ca-pub-5110777286519562" data-ad-slot="7180603013" width="728px" height="90px"
            :key="`acd-${key}`">
          </adsense>
        </div>
      </q-card-section> -->
      <q-card-section class="read-contents">
        <div v-if="data && data.youtube">
          <q-video :ratio="16/9" :src="`https://www.youtube.com/embed/${getYoutubeId(data.youtube)}?rel=0`" />
        </div>
        <p v-if="data" ref="contents" class="word-wrap contents" v-html="contents">
        </p>
      </q-card-section>
      <template v-if="isQuiz">
        <q-separator inset />
        <q-card-section class="q-mb-lg q-gutter-y-sm column items-start">
          <div class="text-h6">{{$t('d2r.bbs.quiz')}}</div>
          <q-form @submit="submit" class="full-width">
            <div class="text-subtitle1 text-right q-mb-xs">{{data.quiz.question}}</div>
            <div v-if="data.status === 'FIN'" class="text-body1 text-right">{{$t('d2r.bbs.answer')}} : <span
                class="text-title">{{data.quiz.answer}}</span></div>
            <div v-else class="row justify-end items-center q-col-gutter-x-sm text-right">
              <div class="col-9 col-sm-4 col-md-3">
                <q-input dense borderless hide-bottom-space no-error-icon class="q-px-sm input-place quiz"
                  color="grey-5" :disable="loading" maxlength="20" type="text" :label="$t('d2r.bbs.answer')"
                  v-model="answer" :rules="[val => val && val.trim() !== '' || '']" />
              </div>
              <div>
                <q-btn dense padding="0 10px" type="submit" color="title" text-color="black"
                  :label="$t('d2r.bbs.btn.submit')" />
              </div>
            </div>
          </q-form>
        </q-card-section>
      </template>
      <q-separator />
      <q-card-actions class="row justify-between">
        <div class="row justify-end q-gutter-x-sm">
          <q-btn v-if="authority(sec, 'delete') || data.owner === true" dense push class="bg-grey-5 text-grey-10"
            :disable="loading" :label="$t('btn.delete')" @click="showConfirm('delete')" />
          <q-btn
            v-if="(authority(sec, 'delete') || data.owner === true) && sec === 'trade' && data.classify !== 'notice'"
            dense push class="bg-grey-9 text-grey-4" :disable="loading" :label="$t('btn.finish')"
            @click="showConfirm('finish')" />
        </div>
        <div class="row justify-end q-gutter-x-sm">
          <q-btn v-if="authority(sec, 'delete') || data.owner === true" dense push class="bg-grey-5 text-grey-10"
            :disable="loading" :label="$t('btn.modify')"
            :to="{name:'d2r-write', params:{sec:sec,pid:pid}, query:{page:$route.query.page || 1}}" />
          <q-btn dense push class="bg-grey-9 text-grey-4" :disable="loading" :label="$t('btn.list')"
            :to="{name:'d2r-bbs', params:{sec:sec}, query:{page:$route.query.page || 1}}" />
        </div>
      </q-card-actions>

      <q-card-section class="comments-wrap row justify-between items-center">
        <d2r-comments ref="comments" v-if="data.classify !== 'notice'" :loading="loading" :data="comments"
          :authority="authority(sec, 'comments')" :owner="data.owner" :all="pagination.all" @process="processComments"
          @all="getList" @refresh="refresh" />
      </q-card-section>
    </q-card>
    <d2r-confirm v-model="confirm.show" :icon="confirm.icon" :color="confirm.color" :text-color="confirm.textColor"
      :message="confirm.message" @cancel="cancelConfirm" @confirm="processConfirm" />
    <q-dialog persistent :content-class="$q.screen.lt.md ? 'full-width' : ''" v-model="reward.show">
      <q-card class="reward">
        <q-card-section class="bg-title text-h5 text-black">
          {{$t('d2r.bbs.message.right')}}
        </q-card-section>
        <q-card-section class="word-wrap row justify-center items-center text-weight-bold text-h6">
          {{reward.contents}}
        </q-card-section>
        <q-card-section class="no-padding overflow-hidden">
          <adsense v-if="!noAD && isProduction" data-ad-client="ca-pub-5110777286519562" data-ad-slot="4748983001"
            width="300px" height="250px" :key="`ac-${key}`">
          </adsense>
        </q-card-section>
        <q-card-actions class="row justify-end q-pa-md">
          <q-btn dense :disable="loading || current !== 0" text-color="grey-10" color="grey-5" :label="currentText"
            @click="closeReward" style="min-width:50px" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import hljs from 'highlight.js/lib/core'
  import javascript from 'highlight.js/lib/languages/javascript'
  import html from 'highlight.js/lib/languages/xml'
  import css from 'highlight.js/lib/languages/css'
  import dos from 'highlight.js/lib/languages/dos'
  import bash from 'highlight.js/lib/languages/bash'
  hljs.registerLanguage('javascript', javascript)
  hljs.registerLanguage('html', html)
  hljs.registerLanguage('css', css)
  hljs.registerLanguage('dos', dos)
  hljs.registerLanguage('bash', bash)
  import '@/assets/styles/vs2015.css'

  const d2rConfirm = () => import(/* webpackChunkName: "d2r-confirm" */ '@/components/d2r/Confirm')
  const d2rComments = () => import(/* webpackChunkName: "d2r-comments" */ '@/components/d2r/Comments')

  const zoomImages = []

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target)
        zoomImages.push({ 'element': entry.target, 'src': entry.target.src })
        const img = new Image()
        img.src = entry.target.dataset.src
        img.onload = () => {
          entry.target.replaceWith(img)
        }
      }
    })
  })

  const co = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        hljs.highlightElement(entry.target)
        observer.unobserve(entry.target)
      }
    })
  })

  export default {
    name: 'd2r-read',
    props: {
      sec: {
        type: String,
        required: true
      },
      pid: {
        type: String,
        required: true
      }
    },
    components: {
      'd2r-confirm': d2rConfirm,
      'd2r-comments': d2rComments
    },
    data() {
      return {
        isProduction: process.env.NODE_ENV === 'production',
        loading: false,
        data: null,
        comments: [],
        pagination: {
          baseRegDate: null,
          all: false,
          limit: 5
        },
        confirm: {
          type: null,
          show: false,
          icon: null,
          color: 'd2r',
          textColor: 'white',
          message: null
        },
        answer: null,
        reward: {
          show: false,
          contents: null
        },
        count: 5,
        current: 0,
        key: 0
      }
    },
    computed: {
      ...mapGetters({
        section: 'getSection',
        getSecInfo: 'getSecInfo',
        classifyName: 'getClassifyName',
        authority: 'getAuthority',
        noAD: 'getNoAD'
      }),
      secInfo() {
        return this.getSecInfo(this.sec)
      },
      contents() {
        return this.data.contents ? this.data.contents.replace(/<p><\/p>/gi, '<p><br><p>') : ''
      },
      viewContents() {
        let dom = document.createElement('contents')
        dom.innerHTML = this.data.contents
        dom.querySelectorAll('pre code').forEach((el) => {
          hljs.highlightElement(el)
        })
        return dom.innerHTML.replace(/<p><\/p>/gi, '<p><br><p>')
      },
      isQuiz() {
        return this.data.sec === 'trade' && this.data.classify === 'give' && this.data.quiz && this.data.quiz.enable === true
      },
      currentText() {
        return this.current !== 0 ? this.current : this.$t('btn.close')
      }
    },
    created() {
      const vm = this
      this.loading = true

      this.axios
        .get('/d2r/board/cont', {
          params: {
            sec: this.sec,
            pid: this.pid
          }
        }).then(function (response) {
          vm.intersactionImage(response.data)
          vm.data = response.data
          document.title = (vm.$route.meta.title || document.title)
          document.title = document.title.concat(' - ', vm.data.title)

          vm.$nextTick(() => {
            const images = vm.$refs.contents.querySelectorAll('.io-img')
            images.forEach((el) => io.observe(el))
            const codes = vm.$refs.contents.querySelectorAll('pre code')
            codes.forEach((el) => co.observe(el))
            vm.setImages(zoomImages)
          })
        })
        .catch(function () { })
        .then(function () {
          vm.getList()
        })
    },
    methods: {
      ...mapActions({
        setImages: 'setD2RImages'
      }),
      intersactionImage(info) {
        info.contents = info.contents.replace(/(<img[^>]+)(src)([^>]+>)/gmi, '$1 class="io-img" src="/images/d2r_og.jpg" data-src$3')
      },
      getList() {
        const vm = this
        this.loading = true

        this.axios
          .get('/d2r/comments/list', {
            params: {
              pid: this.pid,
              limit: this.pagination.limit,
              baseRegDate: this.pagination.baseRegDate || null
            }
          }).then(function (response) {
            const cids = vm.comments.map(d => d.cid)
            vm.comments = response.data.comments.filter(c => cids.includes(c.cid) === false).concat(vm.comments)
            vm.pagination.baseRegDate = vm.comments.length > 0 ? vm.comments[0].reg_date : null
            vm.pagination.all = response.data.listCount > vm.comments.length
          })
          .catch(function () { })
          .then(function () {
            vm.loading = false
          })
      },
      showConfirm(type) {
        this.confirm.type = type
        this.confirm.icon = type === 'delete' ? 'delete' : 'check_circle_outline'
        this.confirm.color = type === 'delete' ? 'd2r' : 'green'
        this.confirm.message = type === 'delete' ? this.$t('d2r.bbs.message.deletePost') : this.$t('d2r.bbs.message.finishTran')
        this.confirm.show = true
      },
      cancelConfirm() {
        this.confirm.type = null
        this.confirm.show = false
      },
      processConfirm() {
        const vm = this
        vm.loading = true
        this.axios
          .post(`/d2r/board/${this.confirm.type}`, {
            pid: this.pid
          }).then(function () {
            vm.$q.notify({
              type: 'positive',
              color: 'positive',
              message: vm.$t(`d2r.bbs.message.success${vm.confirm.type.charAt(0).toUpperCase() + vm.confirm.type.slice(1)}`)
            })
            vm.$router.push({ name: 'd2r-bbs', params: { sec: vm.sec }, query: { page: vm.$route.query.page } }).catch(() => { })
          })
          .catch(function () { })
          .then(function () {
            vm.loading = false
          })
      },
      processComments(info, isDesktop) {
        this.loading = true
        const vm = this
        this.axios
          .post(`/d2r/comments/${info.mode}`, {
            pid: this.pid,
            cid: info.cid,
            pcid: info.pcid,
            tcid: info.tcid,
            contents: encodeURIComponent(info.contents),
            secret: info.secret
          }).then(function (response) {
            vm.complete(response.data, isDesktop)
          })
          .catch(function () {
          })
          .then(function () {
            vm.loading = false
          })
      },
      complete(info, isDesktop) {
        if (info) {
          switch (info.mode) {
            case 'leave':
              this.comments.push(info)
              break
            case 'delete':
            case 'modify': {
              let findComment = null

              if (info.pcid) {
                const findTarget = this.comments.find(c => c.cid === info.pcid)

                if (findTarget)
                  findComment = findTarget.replies.find(c => c.cid === info.cid)
              }
              else
                findComment = this.comments.find(c => c.cid === info.cid)

              if (findComment) {
                findComment.contents = info.contents
                findComment.secret = info.secret
                findComment.name = info.name
                findComment.upd_date = info.upd_date
                findComment.delete = info.delete
              }
              break
            }
            case 'reply':
              if (info.pcid) {
                const findTarget = this.comments.find(c => c.cid === info.pcid)

                if (findTarget)
                  findTarget.replies.push(info)
              }
              break
          }

          if (isDesktop)
            this.$refs.comments.resetDesktop()
          else
            this.$refs.comments.reset()
        }
      },
      refresh() {
        this.comments = []
        if (this.pagination.all === false)
          this.pagination.baseRegDate = Date.now()
        else
          this.pagination.baseRegDate = null

        this.getList()
      },
      submit() {
        const vm = this
        this.loading = true

        this.axios
          .get('/d2r/board/answer', {
            params: {
              sec: this.sec,
              pid: this.pid,
              answer: this.answer
            }
          }).then(function (response) {
            if (response && response.data !== '') {
              vm.reward.contents = response.data
              vm.reward.show = true
              vm.current = vm.count
              vm.rewardCount()
              vm.$nextTick(() => {
                vm.key++
              })
            } else {
              vm.$q.notify({
                type: 'negative',
                color: 'negative',
                message: vm.$t('d2r.bbs.message.wrong')
              })
            }
          })
          .catch(function () { })
          .then(function () {
            vm.loading = false
          })
      },
      rewardCount() {
        const vm = this
        setTimeout(() => {
          if (vm.current > 0) {
            vm.current--
            vm.rewardCount()
          }
        }, 1000)
      },
      closeReward() {
        this.reward.show = false
      }
    }
  }
</script>
<style scoped>
  .read-card {
    box-shadow: 0 0 0 1px rgba(45, 45, 45, 1);
    background-color: rgba(5, 5, 5, 1) !important;
    border-radius: 4px;
    position: relative;
  }

  .body--light .read-card {
    box-shadow: 0 0 0 1px rgba(220, 220, 220, 1);
    background-color: rgba(245, 245, 245, 1) !important;
  }

  .read-card .q-card__section {
    padding: 10px 20px;
  }

  .read-card .read-contents {
    min-height: calc(80vh - 220px);
  }

  .read-card hr {
    background-color: rgba(100, 100, 100, 0.4);
  }

  .body--light .read-card hr {
    background-color: rgba(100, 100, 100, 0.1);
  }

  .input-place {
    background-color: rgba(122, 92, 35, 0.3) !important;
    border: solid 1px transparent;
    border-radius: 4px;
    position: relative;
  }

  .reward {
    width: 500px;
  }

  @media screen and (max-width:599px) {
    .contents {
      font-size: 1em !important;
      line-height: 1.4em !important;
    }

    .comments-wrap {
      padding: 0 !important;
    }
  }
</style>