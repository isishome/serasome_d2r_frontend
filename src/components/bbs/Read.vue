<script setup>
import { defineAsyncComponent, reactive, ref, computed, inject, nextTick, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/stores'
import { useI18n } from 'vue-i18n'
import { useQuasar } from 'quasar'
import { parsDateTime, getYoutubeId } from '@/common'

const Confirm = defineAsyncComponent(() => import('@/components/bbs/Confirm.vue'))
const Comments = defineAsyncComponent(() => import('@/components/bbs/Comments.vue'))
const AdSense = defineAsyncComponent(() => import('@/components/AdSense.vue'))

const props = defineProps({
  sec: {
    type: String,
    required: true
  },
  pid: {
    type: String,
    required: true
  },
  filter: {
    type: Object,
    default: () => { }
  }
})

// module variables
const axios = inject('axios')
const route = useRoute()
const router = useRouter()
const store = useStore()
const { t } = useI18n()
const $q = useQuasar()

// environment variables
const isProduction = import.meta.env.PROD

// common variables
const loading = ref(false)
const screen = computed(() => $q.screen)
const Prism = window.Prism
Prism.disableWorkerMessageHandler = true

// about intersection
const io = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target)
      const img = new Image()
      img.src = entry.target.dataset.src
      img.onload = () => {
        entry.target.replaceWith(img)
        store.addImage({ 'element': img, 'src': img.src })
      }
    }
  })
})

const co = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      Prism.highlightElement(entry.target)
      observer.unobserve(entry.target)
    }
  })
})

const intersactionImage = (info) => {
  info.contents = info.contents.replace(/(<img[^>]+)(src)([^>]+>)/gmi, '$1 class="io-img" src="/images/d2r_og.jpg" data-src$3')
}

// about post
const data = reactive({})
const contentsObj = ref(null)
const commentsObj = ref(null)
const comments = reactive([])
const pagination = reactive({
  baseRegDate: null,
  all: false,
  limit: 5
})
const confirm = reactive({
  type: null,
  show: false,
  icon: null,
  color: 'd2r',
  textColor: 'white',
  message: null
})
const answer = ref(null)
const reward = reactive({
  show: false,
  contents: null
})
const count = ref(5)
const current = ref(0)
const key = ref(0)

const secInfo = computed(() => store.getSecInfo(props.sec))
const contents = computed(() => data.contents ? data.contents.replace(/<p><\/p>/gi, '<p><br><p>') : '')
const classifyName = computed(() => store.getClassifyName)
const authority = computed(() => store.getAuthority)
const noAD = computed(() => store.noAD)

const isQuiz = computed(() => data.sec === 'trade' && data.classify === 'give' && data.quiz && data.quiz.enable === true)
const currentText = computed(() => current.value !== 0 ? current.value : t('btn.close'))

const getCont = () => {
  loading.value = true
  axios
    .get('/d2r/board/cont', {
      params: {
        sec: props.sec,
        pid: props.pid
      }
    }).then((response) => {
      intersactionImage(response.data)
      Object.assign(data, response.data)
      document.title = `${data.title} - ${document.title}`

      nextTick(() => {
        const images = contentsObj.value.querySelectorAll('.io-img')
        images.forEach((el) => { el.onload = () => { io.observe(el) } })
        const codes = contentsObj.value.querySelectorAll('pre code')
        codes.forEach((el) => { el.onload = () => { co.observe(el) } })
      })
    })
    .catch(() => {
      loading.value = false
    })
    .then(() => {
      getComments()
    })
}

const getComments = () => {
  axios
    .get('/d2r/comments/list', {
      params: {
        pid: props.pid,
        limit: pagination.limit,
        baseRegDate: pagination.baseRegDate || null
      }
    }).then((response) => {
      const cids = comments.map(d => d.cid)
      comments.unshift(...response.data.comments.filter(c => cids.includes(c.cid) === false))
      pagination.baseRegDate = comments.length > 0 ? comments[0].reg_date : null
      pagination.all = response.data.listCount - comments.length
    })
    .catch(() => { })
    .then(() => {
      loading.value = false
    })
}

const showConfirm = (type) => {
  confirm.type = type
  confirm.icon = type === 'delete' ? 'delete' : 'check_circle_outline'
  confirm.color = type === 'delete' ? 'negative' : 'green'
  confirm.message = type === 'delete' ? t('d2r.bbs.message.deletePost') : t('d2r.bbs.message.finishTran')
  confirm.show = true
}

const cancelConfirm = () => {
  confirm.type = null
  confirm.show = false
}

const processConfirm = () => {
  loading.value = true
  axios
    .post(`/d2r/board/${confirm.type}`, {
      pid: props.pid
    }).then(() => {
      $q.notify({
        type: 'positive',
        color: 'positive',
        message: t(`d2r.bbs.message.success${confirm.type.charAt(0).toUpperCase() + confirm.type.slice(1)}`)
      })
      router.push({ name: 'd2r-bbs', params: { sec: props.sec }, query: { page: route.query.page } })
    })
    .catch(() => { })
    .then(() => {
      loading.value = false
    })
}

const processComments = (info, isDesktop) => {
  loading.value = true
  axios
    .post(`/d2r/comments/${info.mode}`, {
      pid: props.pid,
      cid: info.cid,
      pcid: info.pcid,
      tcid: info.tcid,
      contents: info.contents ? encodeURIComponent(info.contents.trim()) : null,
      secret: info.secret
    }).then((response) => {
      complete(response.data, isDesktop)
    })
    .catch(() => {
    })
    .then(() => {
      loading.value = false
    })
}

const complete = (info, isDesktop) => {
  if (info) {
    switch (info.mode) {
      case 'leave':
        comments.push(info)
        break
      case 'delete':
      case 'modify': {
        let findComment = null

        if (info.pcid) {
          const findTarget = comments.find(c => c.cid === info.pcid)

          if (findTarget)
            findComment = findTarget.replies.find(c => c.cid === info.cid)
        }
        else
          findComment = comments.find(c => c.cid === info.cid)

        if (findComment) {
          findComment.contents = info.contents
          findComment.secret = info.secret
          findComment.name = info.name
          findComment.upd_date = info.upd_date
          findComment.delete = info.delete
          findComment.modify = info.modify
        }
        break
      }
      case 'reply':
        if (info.pcid) {
          const findTarget = comments.find(c => c.cid === info.pcid)

          if (findTarget)
            findTarget.replies.push(info)
        }
        break
    }

    if (isDesktop)
      commentsObj.value.resetDesktop()
    else
      commentsObj.value.reset()
  }
}

const refresh = () => {
  comments.splice(0, comments.length)
  pagination.baseRegDate = pagination.all ? null : Date.now()
  getComments()
}

const submit = () => {
  loading.value = true

  axios
    .get('/d2r/board/answer', {
      params: {
        sec: props.sec,
        pid: props.pid,
        answer: answer.value
      }
    }).then((response) => {
      if (response && response.data !== '') {
        reward.contents = response.data
        reward.show = true
        current.value = count
        rewardCount()
        nextTick(() => {
          key++
        })
      } else {
        q.notify({
          type: 'negative',
          color: 'negative',
          message: t('d2r.bbs.message.wrong')
        })
      }
    })
    .catch(() => { })
    .then(() => {
      loading.value = false
    })
}

const rewardCount = () => {
  setTimeout(() => {
    if (current > 0) {
      current.value--
      rewardCount()
    }
  }, 1000)
}

const closeReward = () => {
  reward.show = false
}

onMounted(() => {
  getCont()
})
</script>

<template>
  <div class="contents-wrap">
    <q-card v-if="data.title" class="contents-on">
      <q-card-section class="q-py-sm">
        <div class="font-kodia">
          {{screen.lt.md ? `${secInfo.label} > ` : ''}}{{classifyName(sec, data.classify)}}
        </div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div style="word-break: break-all;" :class="$q.screen.gt.sm ? 'text-h5' : 'text-h6'">
          {{data.title}}</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="text-subtitle2">
          <q-avatar rounded class="q-mr-xs avatar text-uppercase" size="30px">
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
      <q-card-section>
        <div v-if="data && data.youtube">
          <q-video :ratio="16/9" :src="`https://www.youtube.com/embed/${getYoutubeId(data.youtube)}?rel=0`" />
        </div>
        <p v-if="data.title" ref="contentsObj" class="word-wrap contents" v-html="contents">
        </p>
      </q-card-section>
      <template v-if="isQuiz">
        <q-separator inset />
        <q-card-section class="q-mb-lg q-gutter-y-sm column items-start">
          <div class="text-h6">{{t('d2r.bbs.quiz')}}</div>
          <q-form @submit="submit" class="full-width">
            <div class="text-subtitle1 text-right q-mb-xs">{{data.quiz.question}}</div>
            <div v-if="data.status === 'FIN'" class="text-body1 text-right">{{t('d2r.bbs.answer')}} :
              <span>{{data.quiz.answer}}</span>
            </div>
            <div v-else class="row justify-end items-center q-col-gutter-x-sm text-right">
              <div class="col-9 col-sm-4 col-md-3">
                <q-input dense borderless hide-bottom-space no-error-icon class="q-px-sm input-place quiz"
                  color="grey-5" :disable="loading" maxlength="20" type="text" :label="t('d2r.bbs.answer')"
                  v-model="answer" :rules="[val => val && val.trim() !== '' || '']" />
              </div>
              <div>
                <q-btn dense padding="0 10px" type="submit" text-color="black" :label="t('d2r.bbs.btn.submit')" />
              </div>
            </div>
          </q-form>
        </q-card-section>
      </template>
      <q-separator inset />
      <q-card-section class="row justify-between">
        <div class="row justify-end q-gutter-x-sm">
          <q-btn v-if="authority(sec, 'delete') || data.owner === true" dense unelevated color="secondary"
            :disable="loading" :label="t('btn.delete')" @click="showConfirm('delete')" />
          <q-btn
            v-if="(authority(sec, 'delete') || data.owner === true) && sec === 'trade' && data.classify !== 'notice'"
            dense unelevated class="bg-grey-9 text-grey-4" :disable="loading" :label="t('btn.finish')"
            @click="showConfirm('finish')" />
        </div>
        <div class="row justify-end q-gutter-x-sm">
          <q-btn v-if="authority(sec, 'delete') || data.owner === true" dense unelevated color="primary"
            :disable="loading" :label="t('btn.modify')"
            :to="{name:'d2r-modify', params:{ sec:sec, pid:pid }, query:{page:route.query.page || 1}}" />
          <q-btn dense outline :disable="loading" :label="t('btn.list')"
            :to="{name:'d2r-bbs', params:{sec:sec}, query:{page:route.query.page || 1}}" />
        </div>
      </q-card-section>
      <q-card-section v-if="!(data.classify === 'notice' || comments.length === 0)"
        class="row justify-between items-center">
        <Comments ref="commentsObj" v-if="data.classify !== 'notice'" :loading="loading" :data="comments"
          :authority="authority(sec, 'comments')" :owner="data.owner" :all="pagination.all" @process="processComments"
          @all="getComments" @refresh="refresh" />
      </q-card-section>
    </q-card>
    <Confirm v-model="confirm.show" :message="confirm.message" @cancel="cancelConfirm" @confirm="processConfirm" />
    <q-dialog persistent :content-class="$q.screen.lt.md ? 'full-width' : ''" v-model="reward.show">
      <q-card class="reward">
        <q-card-section class="bg-title text-h5 text-black">
          {{t('d2r.bbs.message.right')}}
        </q-card-section>
        <q-card-section class="word-wrap row justify-center items-center text-weight-bold text-h6">
          {{reward.contents}}
        </q-card-section>
        <q-card-section class="no-padding overflow-hidden">
          <AdSense v-if="!noAD && isProduction" data-ad-client="ca-pub-5110777286519562" data-ad-slot="4748983001"
            :data-adtest="isProduction ? 'off' : 'on'" width="300px" height="250px" :key="`ac-${key}`" />
        </q-card-section>
        <q-card-actions class="row justify-end q-pa-md">
          <q-btn dense :disable="loading || current !== 0" text-color="grey-10" color="grey-5" :label="currentText"
            @click="closeReward" style="min-width:50px" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<style scoped>
.io-img {
  filter: grayscale(1);
  opacity: .5;
  width: 100%;
  height: auto;
}

.contents-on:deep(>hr) {
  background-color: rgba(150, 150, 150, .2);
}

.body--dark .contents-on:deep(>hr) {
  background-color: rgba(100, 100, 100, .2) !important;
}

.input-place {
  background-color: rgba(122, 92, 35, 0.3) !important;
  border: solid 1px transparent;
  border-radius: 4px;
  position: relative;
}

.contents {
  min-height: 272px;
}
</style>