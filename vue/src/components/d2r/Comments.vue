<template>
  <div class="full-width">
    <q-separator v-if="data.length > 0" class="separator-1" />
    <q-list padding class="rounded-borders full-width bg-transparent text-grey-5">
      <template v-if="data.length > 0 || authority">
        <q-item-label header class="row justify-between">
          <div class="col lt-sm"></div>
          <div class="text-h6">{{$t('d2r.comments.title')}}</div>
          <div class="col text-right">
            <q-btn dense flat :disable="loading" icon="refresh" @click=" $emit('refresh')" />
          </div>
        </q-item-label>
        <q-separator class="separator-1" />
        <q-item-label header class="no-padding">
          <div class="row justify-center q-py-lg">
            <q-btn class="text-weight-bold" :disable="loading" v-if="all === true" :label="$t('d2r.comments.all')"
              @click=" $emit('all')" flat />
          </div>
        </q-item-label>
      </template>
      <q-item v-if="loading === true" class="row justify-center">
        <q-spinner-dots color="grey-6" size="4em" />
      </q-item>
      <template v-for="(c, index) in data">
        <q-separator v-if="index !== 0" :key="`cs_${c.cid}`" class="separator-2" />
        <q-item :key="`ci_${c.cid}`" :class="[$q.screen.lt.sm ? 'q-pa-sm' : 'q-pa-md']">
          <q-item-section>
            <q-item-label class="row justify-between items-center">
              <div class="row justify-start items-center q-gutter-x-sm">
                <q-avatar class="bg-grey-10" size="md">
                  <q-icon v-if="c.secret === true && c.owner === false && owner === false" name="lock"
                    color="amber-8" />
                  <q-img v-else :src="c.avatar" :ratio="1" />
                </q-avatar>
                <div>
                  <div class="text-name">{{c.name}}</div>
                  <div class="text-time row justify-start items-center q-gutter-x-xs">
                    <q-avatar v-if="isNew(c.upd_date)" color="red-14" size="4px" />
                    <div>{{parsDateTime(c.upd_date)}}</div>
                    <div v-if="c.modify">({{$t('d2r.comments.modify')}})</div>
                  </div>
                </div>
              </div>
              <div v-if="signStatus" class="row justify-end">
                <div v-if="(c.secret === false || c.owner === true) && c.delete === false"
                  class="lt-sm row justify-end q-gutter-x-md">
                  <q-btn dense push round icon="more_vert" size="sm" padding="6px" color="grey-10" text-color="grey-7"
                    @click="show('change', c)" />
                </div>
                <div class="gt-xs row justify-end q-gutter-x-sm">
                  <q-btn v-if="c.owner === true && c.delete === false" :disable="loading" dense push
                    :label="$t('btn.delete')" size="12px" padding="6px" color="grey-10" text-color="grey-5"
                    @click="show('delete', c)" />
                  <q-btn v-if="c.owner === true && c.delete === false" :disable="loading" dense push
                    :label="$t('btn.modify')" size="12px" padding="6px" color="grey-9" text-color="grey-4"
                    @click="show('modify', c)" />
                  <q-btn v-if="c.delete === false && (c.secret === false || c.owner === true || c.reply)"
                    :disable="loading" dense push :label="$t('btn.reply')" size="12px" padding="6px" color="grey-8"
                    text-color="grey-3" @click="show('reply', c)" />
                </div>
              </div>
            </q-item-label>
            <q-item-label class="q-pt-sm">
              <q-input class="col" input-class="no-padding no-scroll comments-text" v-model="c.contents" dark dense
                readonly borderless autogrow>
                <template #prepend>
                  <div class="full-height">
                    <q-icon v-if="c.secret === true && (c.owner === true || owner === true)" name="lock" size="14px"
                      color="amber-8" class="" style="padding-top:5px" />
                  </div>
                </template>
              </q-input>
            </q-item-label>
          </q-item-section>
        </q-item>
        <template v-for="r in c.replies">
          <q-separator :key="`ccs_${c.cid}_${r.cid}`" class="separator-3" />
          <q-item :key="`cci_${c.cid}_${r.cid}`" :class="['reply', $q.screen.lt.sm ? 'q-pa-sm' : 'q-pa-md']">
            <q-item-section side top class="no-padding">
              <q-avatar :size="$q.screen.lt.sm ? 'sm' : 'lg'" color="transparent" text-color="grey-8">L
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label class="row justify-between items-center">
                <div class="row justify-start items-center q-gutter-x-sm">
                  <q-avatar class="bg-grey-10" size="md">
                    <q-icon v-if="r.secret === true && r.owner === false && owner === false && r.towner !== true"
                      name="lock" color="amber-8" />
                    <q-img v-else :src="r.avatar" :ratio="1" />
                  </q-avatar>
                  <div>
                    <div class="text-name">{{r.name}}</div>
                    <div class="text-time row justify-start items-center q-gutter-x-xs">
                      <q-avatar v-if="isNew(r.upd_date)" color="red-14" size="4px" />
                      <div>{{parsDateTime(r.upd_date)}}</div>
                      <div v-if="r.modify">({{$t('d2r.comments.modify')}})</div>
                    </div>
                  </div>
                </div>
                <div v-if="signStatus" class="row justify-end">
                  <div v-if="(r.secret === false || r.owner === true) && r.delete === false"
                    class="lt-sm row justify-end q-gutter-x-md">
                    <q-btn dense push round icon="more_vert" size="sm" padding="6px" color="grey-10" text-color="grey-7"
                      @click="show('change', r)" />
                  </div>
                  <div class="gt-xs row justify-end q-gutter-x-sm">
                    <q-btn v-if="r.owner === true && r.delete === false" :disable="loading" dense push
                      :label="$t('btn.delete')" size="12px" padding="6px" color="grey-10" text-color="grey-5"
                      @click="show('delete', r)" />
                    <q-btn v-if="r.owner === true && r.delete === false" :disable="loading" dense push
                      :label="$t('btn.modify')" size="12px" padding="6px" color="grey-9" text-color="grey-4"
                      @click="show('modify', r)" />
                    <q-btn v-if="r.delete === false && (r.secret === false || r.owner === true || c.reply)"
                      :disable="loading" dense push :label="$t('btn.reply')" size="12px" padding="6px" color="grey-8"
                      text-color="grey-3" @click="show('reply', r)" />
                  </div>
                </div>
              </q-item-label>
              <q-item-label class="q-pt-sm">
                <q-input class="col" input-class="no-padding no-scroll comments-text" v-model="r.contents" dark dense
                  readonly borderless autogrow>
                  <template #prepend>
                    <div class="full-height">
                      <q-icon v-if="r.secret === true && (r.owner === true || owner === true || r.towner === true)"
                        name="lock" size="14px" color="amber-8" style="padding-top:5px" />
                    </div>
                  </template>
                </q-input>
              </q-item-label>
            </q-item-section>
          </q-item>
        </template>
      </template>
      <q-separator v-if="data.length > 0" class="separator-1" />
      <q-item class="no-padding q-mt-md column items-center">
        <div>
          <q-btn v-if="signStatus && authority" class="lt-sm" :disable="loading" dense push :label="$t('btn.leave')"
            size="md" padding="xs" color="grey-5" text-color="grey-10" @click="show('leave')" />
        </div>
        <q-form class="fit" autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false">
          <q-input :disable="loading" v-if="signStatus" color="grey-9" bg-color="transparent d2r-comments"
            class="gt-xs full-width" v-model="desktop.contents" type="textarea" :input-style="{'min-height':'140px'}"
            style="border-color: transparent;" :error="desktop.error"
            :error-message="$t('d2r.comments.message.invalidContents')" :hint="$t('d2r.comments.contentsHint')"
            maxlength="500" :label="$t('d2r.comments.contents')" spellcheck="false" flat outlined standout no-error-icon
            clearable autogrow>
            <template v-slot:append>
              <div class="absolute-bottom-right q-mr-md q-mb-md">
                <q-toggle :disable="loading" v-model="desktop.secret" size="md" unchecked-icon="lock_open"
                  color="amber-8" checked-icon="lock" />
                <q-btn :disable="loading" dense push color="grey-5" text-color="grey-10" :label="$t('btn.regist')"
                  @click="processDesktop" />
              </div>
            </template>
            <template v-slot:counter>
              {{info.contents ? info.contents.length : 0 }} / 500
            </template>
          </q-input>
        </q-form>
      </q-item>
    </q-list>
    <q-dialog v-if="signStatus" ref="dialog" v-model="dialog" :position="$q.screen.lt.sm ? 'bottom' : 'standard'"
      @before-hide="hide">
      <q-card v-if="info.mode === 'change'" class="comments-card" dark>
        <q-card-section class=" row items-center no-wrap">
          <div class="row justify-end q-gutter-x-md full-width">
            <q-btn v-if="info.owner === true && info.delete === false" :disable="loading" dense push icon="delete"
              size="md" color="grey-10" text-color="grey-7" @click="swap('delete')" />
            <q-btn v-if="info.owner === true && info.delete === false" :disable="loading" dense push icon="edit"
              size="md" color="grey-9" text-color="grey-6" @click="swap('modify')" />
            <q-btn v-if="info.delete === false && (info.secret === false || info.owner === true || c.reply)"
              :disable="loading" dense push icon="reply" size="md" color="grey-8" text-color="grey-5"
              @click="swap('reply')" />
          </div>
        </q-card-section>
      </q-card>
      <q-card v-else-if="['leave', 'modify', 'reply'].includes(info.mode)" dark class="comments-card">
        <q-card-section class="row items-center no-wrap">
          <q-form class="fit" autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false">
            <q-input :disable="loading" :autofocus="$q.screen.gt.xs" color="grey-6" bg-color="grey-4 d2r-comments2"
              class="full-width comments-contents" v-model="info.contents" type="textarea"
              :input-style="{'height':'140px','resize':'none','margin-top':'10px'}" style="border-color: transparent;"
              :error="info.error" :error-message="$t('d2r.comments.message.invalidContents')"
              :hint="$t('d2r.comments.contentsHint')" maxlength="500" :label="commentLabel"
              @input="info.error = check(info.contents)" flat no-error-icon outlined>
              <template v-slot:append>
                <q-icon v-if="info.contents && info.contents.length > 0" class="cursor-pointer absolute-top-right"
                  style="top:10px;right:10px" name="cancel" size="sm" dense flat @click="info.contents = null" />
              </template>
              <template v-slot:counter>
                {{info.contents ? info.contents.length : 0 }} / 500
              </template>
            </q-input>
          </q-form>
        </q-card-section>
        <q-card-actions class="no-padding">
          <div class="full-width row justify-end q-gutter-x-sm">
            <q-toggle :disable="loading" dense flat v-model="info.secret" size="lg" unchecked-icon="lock_open"
              color="grey-10" icon-color="amber-8" text-color="grey-10" checked-icon="lock" />
            <q-btn :disable="loading" size="10px" padding="xs" dense push color="grey-8" text-color="grey-4"
              :label="$t('btn.regist')" @click="process" />
          </div>
        </q-card-actions>
      </q-card>
      <q-card dark class="comments-card" v-else-if="info.mode === 'delete'">
        <q-card-section class="q-pa-sm row items-center">
          <div>
            <q-avatar icon="delete" size="md" color="red" text-color="white" />
          </div>
          <span class="col q-ml-sm text-grey-10">{{$t('d2r.comments.message.confirmDelete')}}</span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn :disable="loading" dense push :label="$t('btn.cancel')" size="md" padding="xs" color="grey-6"
            text-color="grey-10" v-close-popup />
          <q-btn :disable="loading" dense push :label="$t('btn.confirm')" size="md" padding="xs" color="grey-8"
            text-color="grey-4" @click="process('delete')" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'

  export default {
    name: 'd2r-comments',
    props: {
      data: {
        type: Array,
        required: true
      },
      authority: {
        type: Boolean,
        required: true
      },
      owner: {
        type: Boolean,
        required: true
      },
      all: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        dialog: false,
        desktop: {
          error: false,
          contents: null,
          secret: false
        },
        isSwap: false,
        info: {
          mode: 'leave',
          error: false,
          cid: null,
          pcid: null,
          tcid: null,
          contents: null,
          secret: false,
          owner: false,
          delete: false
        }
      }
    },
    watch: {
      'desktop.contents': function (val) {
        this.desktop.error = this.check(val)
        this.info.contents = val
      },
      'desktop.secret': function (val) {
        this.info.secret = val
      }
    },
    computed: {
      ...mapGetters({
        signStatus: 'getSignStatus'
      }),
      commentLabel() {
        return this.info.mode === 'reply' || (this.info.mode === 'modify' && this.info.cid !== this.info.pcid) ? this.$t('d2r.comments.replyContents') : this.$t('d2r.comments.contents')
      }
    },
    methods: {
      check(val) {
        const contents = val || ''
        return !(contents.trim() !== '' && /^[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9\s\r\n!@#$%^&*()_=\-+,.<>/?;':"~`{}[\]]{1,500}$/.test(contents))
      },
      hide() {
        if (this.isSwap !== true) {
          this.info.mode = 'leave'
          this.info.error = false
          this.info.cid = null
          this.info.pcid = null
          this.info.tcid = null
          this.info.contents = null
          this.info.secret = false
          this.info.owner = false
          this.info.delete = false
        }
        else
          this.isSwap = false
      },
      show(mode, info) {
        this.info.mode = mode
        if (mode === 'reply' && info && (info.pcid || info.cid)) {
          this.info.contents = null
          this.info.cid = null
          this.info.pcid = info.pcid || info.cid
          this.info.tcid = info.cid
          this.info.secret = info.tsecret || info.secret
        }
        else if (mode === 'modify' && info) {
          this.info.cid = info.cid
          this.info.contents = info.contents
          this.info.secret = info.secret
        }
        else if (mode === 'delete' && info) {
          this.info.cid = info.cid
          this.info.contents = 'delete'
        }
        else if (mode === 'change') {
          this.info.cid = info.cid
          this.info.pcid = info.pcid || info.cid
          this.info.tcid = info.cid
          this.info.contents = info.contents
          this.info.secret = info.tsecret || info.secret
          this.info.owner = info.owner
          this.info.delete = info.delete
        }

        this.dialog = true
      },
      swap(mode) {
        this.isSwap = true
        this.dialog = false
        this.timer = setTimeout(() => {
          this.show(mode, this.info)
        }, 200)
      },
      process() {
        this.info.error = this.check(this.info.contents)
        if (this.info.error === false)
          this.$emit('process', this.info)
      },
      processDesktop() {
        this.desktop.error = this.check(this.desktop.contents)
        if (this.desktop.error === false) {
          this.info.secret = this.desktop.secret
          this.$emit('process', this.info, true)
        }
      },
      reset() {
        this.dialog = false
      },
      resetDesktop() {
        this.desktop.error = false
        this.desktop.contents = null
        this.desktop.secret = false
      }
    },
    beforeDestroy() {
      clearTimeout(this.timer)
    }
  }
</script>
<style>
  .d2r-comments:before {
    border-color: #222222 !important;
  }

  .d2r-comments2:before {
    border-color: #AAAAAA !important;
  }

  .d2r-comments2 {
    padding: 0 2px 0 12px !important;
  }

  .comments-text {
    color: #bdbdbd !important;
  }

  .body--light .comments-text {
    color: #888888 !important;
  }
</style>
<style scoped>
  .separator-1 {
    background-color: #222222;
  }

  .separator-2 {
    background-color: #202020;
  }

  .separator-3 {
    background-color: #181818;
  }

  .body--light .separator-1 {
    background-color: #cccccc;
  }

  .body--light .separator-2 {
    background-color: #dddddd;
  }

  .body--light .separator-3 {
    background-color: #dfdfdf;
  }

  .comments-card {
    padding: 10px;
    background-color: rgba(200, 200, 200, 1) !important;
    width: 450px;
    box-shadow: inset 0 -2px 4px 2px rgba(0, 0, 0, 0.2);
  }

  .text-name {
    color: #bdbdbd;
    font-size: 0.8em;
    font-weight: bold;
  }

  .body--light .text-name {
    color: #888888 !important;
  }

  .text-time {
    color: #bdbdbd;
    font-size: 0.6em;
    opacity: 0.6;
  }

  .body--light .text-time {
    color: #888888 !important;
  }

  .text-target {
    font-size: 0.8em;
    font-weight: bold;
    opacity: 0.6;
    line-height: 2em;
  }

  .reply {
    background-color: rgba(50, 50, 50, .1);
  }

  .body--light .reply {
    background-color: rgba(200, 200, 200, .1);
  }
</style>