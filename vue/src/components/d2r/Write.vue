<template>
  <div class="d2r-write">
    <q-form class="no-wrap column q-gutter-y-sm" @submit="onSubmit">
      <div class="row justify-start q-gutter-x-sm">
        <div class="col col-md-3 col-lg-3">
          <q-select borderless dense emit-value no-error-icon hide-bottom-space map-options
            class="col-12 col-lg-3 input-place q-px-sm" color="grey-5" v-model="writeInfo.classify"
            :options="classifies" :label="$t('d2r.bbs.classify')" behavior="menu"
            :rules="[val => val && val !== null || '']" />
        </div>
        <div v-if="writeInfo.classify === 'give'" class="col col-md-3 col-lg-3">
          <q-checkbox :label="$t('d2r.bbs.quiz')" v-model="writeInfo.quiz.enable" />
        </div>
      </div>
      <q-separator v-if="writeInfo.quiz.enable" />
      <q-slide-transition>
        <div v-if="writeInfo.quiz.enable" class="row justify-start q-gutter-x-sm">
          <div class="col-8 col-sm-9">
            <q-input dense borderless hide-bottom-space no-error-icon class="q-px-sm input-place quiz" color="grey-5"
              :disable="processPosting" maxlength="80" type="text" :label="$t('d2r.bbs.question')"
              v-model="writeInfo.quiz.question" :rules="[val => val && val.trim() !== '' || '']" />
          </div>
          <div class="col col-sm">
            <q-input dense borderless hide-bottom-space no-error-icon class="q-px-sm input-place quiz" color="grey-5"
              :disable="processPosting" maxlength="20" type="text" :label="$t('d2r.bbs.answer')"
              v-model="writeInfo.quiz.answer" :rules="[val => val && val.trim() !== '' || '']" />
          </div>
        </div>
      </q-slide-transition>
      <q-slide-transition>
        <div v-if="writeInfo.quiz.enable">
          <q-input dense borderless hide-bottom-space no-error-icon class="q-px-sm input-place quiz" color="grey-5"
            :disable="processPosting" maxlength="100" type="text" :label="$t('d2r.bbs.reward')"
            v-model="writeInfo.quiz.reward" :rules="[val => val && val.trim() !== '' || '']" />
        </div>
      </q-slide-transition>
      <q-separator />
      <div>
        <q-input dense borderless hide-bottom-space no-error-icon class="q-px-sm input-place" color="grey-5"
          :disable="processPosting" maxlength="200" type="text" :label="$t('post.title')" v-model="writeInfo.title"
          :rules="[val => val && val.trim() !== '' || '']" />
      </div>
      <div class="input-place">
        <editor-menu-bar ref="editor" class="editor-menu-bar" :editor="editor"
          v-slot="{ commands, isActive, getMarkAttrs, getNodeAttrs }">
          <q-toolbar class="row justify-between items-start" v-show="processPosting === false">
            <div class="row justify-start q-gutter-x-md">
              <div>
                <q-btn flat dense size="sm" icon="format_bold" :class="{ 'is-active': isActive.bold() }"
                  @click="commands.bold" />
                <q-btn flat dense size="sm" icon="format_italic" :class="{ 'is-active': isActive.italic() }"
                  @click="commands.italic" />
                <q-btn flat dense size="sm" icon="strikethrough_s" :class="{ 'is-active': isActive.strike() }"
                  @click="commands.strike" />
                <q-btn flat dense size="sm" icon="format_underlined" :class="{ 'is-active': isActive.underline() }"
                  @click="commands.underline" />
                <q-btn flat dense size="sm" icon="texture" :class="{ 'is-active': isActive.code() }"
                  @click="commands.code" />
                <q-btn flat dense size="sm" label="h1"
                  :class="{ 'is-active': isActive.heading({ level: 1 }), 'text-weight-bolder':true}"
                  @click="commands.heading({ level: 1 })" />
                <q-btn flat dense size="sm" label="h2"
                  :class="{ 'is-active': isActive.heading({ level: 2 }), 'text-weight-bolder':true}"
                  @click="commands.heading({ level: 2 })" />
                <q-btn flat dense size="sm" label="h3"
                  :class="{ 'is-active': isActive.heading({ level: 3 }), 'text-weight-bolder':true}"
                  @click="commands.heading({ level: 3 })" />
              </div>
              <div>
                <q-btn flat dense size="sm" icon="format_align_left"
                  :class="{ 'is-active': isActive.alignment({ align: 'left' }) }"
                  @click="commands.alignment({ align: 'left' })" />
                <q-btn flat dense size="sm" icon="format_align_center"
                  :class="{ 'is-active': isActive.alignment({ align: 'center' }) }"
                  @click="commands.alignment({ align: 'center' })" />
                <q-btn flat dense size="sm" icon="format_align_right"
                  :class="{ 'is-active': isActive.alignment({ align: 'right' }) }"
                  @click="commands.alignment({ align: 'right' })" />
                <q-btn flat dense size="sm" icon="format_align_justify"
                  :class="{ 'is-active': isActive.alignment({ align: 'justify' }) }"
                  @click="commands.alignment({ align: 'justify' })" />
              </div>
              <div>
                <q-btn flat dense size="sm" icon="format_quote" :class="{ 'is-active': isActive.blockquote() }"
                  @click="commands.blockquote" />
                <q-btn flat dense size="sm" icon="border_horizontal" @click="commands.horizontal_rule" />
                <q-btn flat dense size="sm" icon="format_list_numbered"
                  :class="{ 'is-active': isActive.ordered_list() }" @click="commands.ordered_list" />
                <q-btn flat dense size="sm" icon="format_list_bulleted" :class="{ 'is-active': isActive.bullet_list() }"
                  @click="commands.bullet_list" />
              </div>
              <div>
                <q-btn flat dense size="sm" icon="link" @click="addLink(commands.link, getMarkAttrs('link'))" />
                <q-btn flat dense size="sm" icon="image" @click="addImage(commands.image)" />
                <q-btn flat dense size="sm" icon="code" :class="{ 'is-active': isActive.ccb() }">
                  <q-popup-proxy ref="codeBlockProxy" :breakpoint="599">
                    <q-list :dark="false" class="bg-grey-1">
                      <q-item :dark="false" dense clickable
                        v-for="opt in isActive.ccb() ? removeWithOptions : codeBlock.options" :key="opt.value"
                        :class="opt.value === 'remove' ? 'bg-red-12 text-white' : ''"
                        @click="codeBlock.class = opt; $refs.codeBlockProxy.hide();codeBlockUpdate(commands.ccb, getNodeAttrs('ccb'), opt)">
                        <q-item-section>
                          <q-item-label>{{opt.label}}
                          </q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-popup-proxy>
                </q-btn>
              </div>
            </div>
            <div>
              <q-btn flat dense size="sm" icon="undo" @click="commands.undo" />
              <q-btn flat dense size="sm" icon="redo" @click="commands.redo" />
            </div>
          </q-toolbar>
        </editor-menu-bar>
        <q-scroll-area class="contents editor-contents no-padding q-mt-sm" :thumb-style="thumbStyle">
          <label ref="contentLabel" class="contents-label">{{$t('post.contents')}}</label>
          <editor-content spellcheck="false" :editor="editor" class="q-pa-sm full-height textarea" />
        </q-scroll-area>
      </div>
      <q-list separator v-if="sec !== 'trade'">
        <q-item dense class="input-place">
          <q-item-section side>
            <q-radio dense :disable="getYoutubeId(writeInfo.youtube) === null" v-model="writeInfo.thumb"
              :val="writeInfo.youtube" size="xs" />
          </q-item-section>
          <q-item-section>
            <q-input borderless dense hide-bottom-space no-error-icon color="grey-5" :disable="processPosting"
              type="text" v-model="writeInfo.youtube" :label="$t('post.youtubeUrl')"
              :rules="[val => (!val || val.trim() === '' || getYoutubeId(val) !== null) || '']" @input="validYoutube" />
          </q-item-section>
        </q-item>
      </q-list>
      <div class="input-place">
        <q-uploader class="full-width bg-transparent" color="grey-10" ref="uploader" :disable="processPosting"
          :accept="limitFileCnt !== -1 ? 'image/*' : '.exe, .zip, .tar, .jar, .7z, .rar, .bat, .cmd, .hwp, .txt, .doc, .docx, .ppt, .pptx, .xls, .xlss, image/*, video/*, audio/*'"
          :factory="postWihtUpload"
          :label="limitFileCnt !== -1 ? `attach image (10m * ${limitFileCnt})` : 'attach file (10m)'" @added="added"
          @removed="removed" @uploaded="complete" @failed="failed" @start="start" @finish="finish" flat multiple
          hide-upload-btn batch>
          <template v-slot:list="scope">
            <q-list separator>
              <q-item dense v-for="file in scope.files" :key="file.name">
                <q-item-section side v-if="file.__img">
                  <q-radio dense v-if="file.__img" v-model="writeInfo.thumb" :val="file.name" size="xs" color="d2r" />
                </q-item-section>
                <q-item-section v-if="file.__img" style="width:10%" thumbnail>
                  <q-img :src="file.__img.src" width="100%" :ratio="3/2" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>
                    {{ file.name }}
                  </q-item-label>
                  <q-item-label caption>
                    Status: {{ file.__status }}
                  </q-item-label>
                  <q-item-label caption>
                    {{ file.__sizeLabel }} / {{ file.__progressLabel }}
                  </q-item-label>
                </q-item-section>
                <q-item-section top side>
                  <q-btn v-if="file.__img" size="md" flat round dense icon="link"
                    @click="copyThumbnail(file.__img.src)" />
                  <q-btn size="md" flat round dense icon="delete" @click="scope.removeFile(file)" />
                </q-item-section>
              </q-item>
            </q-list>
          </template>
        </q-uploader>
      </div>
      <div v-if="pid && writeInfo.files.length > 0" class="full-width scroll" style="max-height: 25vh;">
        <q-list bordered separator class="q-pa-sm">
          <template v-for="file in writeInfo.files">
            <q-item dense v-if="file.deleted !== true" :key="file.fid" class="input-place">
              <q-item-section v-if="file.type === 'image'" side>
                <q-radio dense v-model="writeInfo.thumb" :val="file.origin" size="xs" color="d2r" />
              </q-item-section>
              <q-item-section v-if="file.type === 'image'" thumbnail>
                <img :src="file.path">
              </q-item-section>
              <q-item-section class="gt-xs">
                <q-item-label class="ellipsis">
                  {{file.origin}}
                </q-item-label>
              </q-item-section>
              <q-item-section top side>
                <q-btn v-if="file.type === 'image'" flat round dense icon="link" @click="copyThumbnail(file.path)" />
                <q-btn size="md" flat round dense icon="delete" @click="deleteFile(file)" />
              </q-item-section>
            </q-item>
          </template>
        </q-list>
      </div>
      <div class="row justify-end q-gutter-x-sm">
        <div>
          <q-btn dense push class="bg-d2r" text-color="grey-4" :loading="loading" type="submit"
            :label="pid ? $t('btn.modify') :$t('btn.posting')" />
        </div>
        <div>
          <q-btn dense push class="bg-grey-10" text-color="grey-4" :disable="loading" :label="$t('btn.cancel')"
            :to="pid !== null ? {name:'d2r-read', params:{sec:sec, pid:pid}} : {name:'d2r-bbs', params:{sec:sec}}" />
        </div>
      </div>
    </q-form>
    <ss-prompt :dark="$q.dark.isActive" no-persistent v-model="add.linkPop" :title="$t('post.link')" :contents="add.url"
      :rules="add.rules" @ok="setLink" @cancel="cancelPrompt" color="grey-5" />
    <ss-prompt :dark="$q.dark.isActive" no-persistent v-model="add.imagePop" :title="$t('post.image')"
      :contents="add.url" :rules="add.rules" @ok="setImage" @cancel="cancelPrompt" color="grey-5" />
  </div>
</template>
<script>
  import { copyToClipboard, scroll } from 'quasar'
  import { mapGetters } from 'vuex'
  import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
  import {
    Bold,
    Italic,
    Strike,
    Underline,
    Code,
    Heading,
    Blockquote,
    HorizontalRule,
    ListItem,
    OrderedList,
    BulletList,
    History,
    HardBreak
  } from 'tiptap-extensions'

  const Prompt = () => import(/* webpackChunkName: "group-component" */ '@/components/d2r/Prompt')
  import CustomLink from '@/plugin/tiptap/CustomLink'
  import Alignment from '@/plugin/tiptap/Alignment'
  import CustomImage from '@/plugin/tiptap/CustomImage'
  import CustomCodeBlock from '@/plugin/tiptap/CustomCodeBlock'

  const {
    getScrollTarget,
    setScrollPosition
  } = scroll

  // takes an element object
  function scrollToElement(el, duration) {
    const target = getScrollTarget(el)
    const offset = el.offsetTop
    duration = duration || 0
    setScrollPosition(target, offset, duration)
  }

  export default {
    name: 'd2r-write',
    props: {
      sec: {
        type: String,
        required: true
      },
      pid: {
        type: String,
        deafult: null
      }
    },
    components: {
      'ss-prompt': Prompt,
      EditorContent,
      EditorMenuBar
    },
    data() {
      return {
        loading: false,
        editor: new Editor({
          content: null,
          extensions: [
            new Bold(),
            new Italic(),
            new Strike(),
            new Underline(),
            new Code(),
            new Heading({ levels: [1, 2, 3] }),
            new Blockquote(),
            new HorizontalRule(),
            new ListItem(),
            new OrderedList(),
            new BulletList(),
            new CustomLink(),
            new Alignment(),
            new CustomImage(),
            new CustomCodeBlock(),
            new History(),
            new HardBreak()
          ],
          onFocus: () => {
            this.$refs.contentLabel.classList.add('focused')
          },
          onBlur: () => {
            if (this.checkContents())
              this.$refs.contentLabel.classList.remove('focused')
          },
          onUpdate: ({ getHTML }) => {
            this.writeInfo.contents = getHTML()
            this.checkContents()
          }
        }),
        routeName: null,
        fullScreen: false,
        processPosting: false,
        loadFailed: false,
        limitFileSize: 10485760,
        limitFileCnt: -1,
        writeInfo: {
          classify: null,
          pid: this.pid,
          title: null,
          contents: null,
          youtube: '',
          thumb: null,
          files: [],
          fileList: [],
          blobList: [],
          deleteList: [],
          owner: false,
          quiz: {
            enable: false,
            question: null,
            answer: null,
            reward: null,
          }
        },
        add: {
          url: null,
          commands: null,
          rules: null,
          linkPop: false,
          imagePop: false
        },
        codeBlock: {
          class: '',
          options: [
            { label: 'Javascript', value: 'javascript' },
            { label: 'HTML', value: 'html' },
            { label: 'CSS', value: 'css' },
            { label: 'DOS', value: 'dos' },
            { label: 'Bash', value: 'bash' },
            { label: 'Auto', value: 'auto' }
          ]
        }
      }
    },
    computed: {
      ...mapGetters({
        section: 'getSection',
        d2rInfo: 'getD2RInfo',
        authority: 'getAuthority'
      }),
      isSelectionEmpty() {
        return this.editor.view.state.selection.empty;
      },
      classifies() {
        const findClassifies = this.section.filter(s => s.value === this.sec).length > 0 ? this.section.filter(s => s.value === this.sec)[0].classifies : []
        return findClassifies.filter(c => c.auth <= this.d2rInfo.grade)
      },
      removeWithOptions() {
        return [...this.codeBlock.options, { label: 'Remove', value: 'remove' }]
      }
    },
    watch: {
      loading: function (val) {
        this.$emit('persistent', val)
      }
    },
    created() {
      if (this.pid) {
        const vm = this
        this.loading = true

        this.axios
          .get('/d2r/board/cont', {
            params: {
              sec: this.sec,
              pid: this.pid
            }
          }).then(function (response) {
            if (response.data) {
              vm.writeInfo.classify = response.data.classify
              vm.writeInfo.quiz = response.data.quiz || vm.writeInfo.quiz
              vm.writeInfo.title = response.data.title
              vm.editor.setContent(response.data.contents, true)
              vm.editor.focus('end')
              vm.writeInfo.youtube = response.data.youtube
              vm.writeInfo.thumb = response.data.thumb
              vm.writeInfo.files = response.data.files
              vm.writeInfo.owner = response.data.owner

              if (vm.writeInfo.owner === false) {
                vm.$q.notify({
                  type: 'negative',
                  color: 'negative',
                  message: vm.$t('d2r.message.noPermission')
                })
                vm.$router.go(-1)
              }
            }
          })
          .catch(function () { })
          .then(function () {
            vm.loading = false
            if (vm.writeInfo.owner === false && vm.authority(vm.sec, 'write') === false) {
              vm.$q.notify({
                type: 'negative',
                color: 'negative',
                message: vm.$t('d2r.message.noPermission')
              })
              vm.$router.replace(vm.$route.path.replace(/write/i, 'read')).catch(() => { })
            }
          })
      }
    },
    methods: {
      checkContents() {
        const result = !this.writeInfo.contents || this.writeInfo.contents.replace(/\s/gi, '').replace(/<\/?p>/gi, '') === ''

        if (result)
          this.$refs.contentLabel.classList.add('invalid')
        else
          this.$refs.contentLabel.classList.remove('invalid')

        return result
      },
      onSubmit() {
        if (this.checkContents()) {
          this.editor.focus()
          scrollToElement(this.$refs.editor.$el)
          return
        }
        else {
          if (this.writeInfo.fileList.length > 0)
            this.$refs.uploader.upload()
          else
            this.post()
        }
      },
      added(files) {
        const exists = this.writeInfo.fileList.map(f => f.name)
        const addFiles = (files.filter(f => !exists.includes(f.name)))
        addFiles.forEach(f => {
          if (f.__img) {
            this.editor.commands.image({ 'src': f.__img.src, 'name': f.name })
            this.editor.commands.hard_break()
            this.writeInfo.blobList.push({ 'blob': f.__img.src, 'name': f.name })

            if (this.writeInfo.thumb === null)
              this.writeInfo.thumb = f.name
          }
        })
        this.writeInfo.fileList = [...this.writeInfo.fileList, ...addFiles]
      },
      removed(files) {
        const exists = this.writeInfo.fileList.map(f => f.name)
        const filter = files.filter(f => exists.includes(f.name))
        filter.forEach(f => {
          if (f.__img) {
            const findIndex = this.writeInfo.fileList.findIndex(fi => fi.__img.src === f.__img.src)
            const findBlobIndex = this.writeInfo.blobList.findIndex(b => b.blob === f.__img.src)

            if (findIndex !== -1) {
              const newContents = this.writeInfo.contents.replace(new RegExp(`<(\\w+)\\s[^>]*src=\\"${f.__img.src}\\"[^>]*>`, 'igm'), '')
              this.writeInfo.fileList.splice(findIndex, 1)
              this.editor.setContent(newContents, true)

              if (this.writeInfo.thumb === f.name) {
                if (this.writeInfo.fileList.length > 0)
                  this.writeInfo.thumb = this.writeInfo.fileList[0].name
                else
                  this.writeInfo.thumb = null
              }
            }

            if (findBlobIndex !== -1)
              this.writeInfo.blobList.splice(findBlobIndex, 1)
          }
        })
      },
      copyThumbnail(thumbnailSrc) {
        copyToClipboard(thumbnailSrc)
          .then(() => {
            this.$q.notify({
              type: 'positive',
              color: 'positive',
              message: this.$t('post.message.successClipboard')
            })
          })
          .catch(() => {
            this.$q.notify({
              type: 'negative',
              color: 'negative',
              message: this.$t('post.message.failedClipboard')
            })
          })
      },
      addLink(commands, attrs) {
        if (!this.isSelectionEmpty) {
          this.add.commands = commands
          this.rules = [val => (!val || new RegExp('^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)$', 'i').test(val)) || this.$t('post.message.invalidLink')]
          this.add.url = attrs.href
          this.add.linkPop = true
        }
      },
      setLink(url) {
        if (this.add.commands !== null)
          this.add.commands({ href: url === '' ? null : url })

        this.cancelPrompt()
      },
      addImage(commands) {
        this.add.commands = commands
        this.add.rules = [val => new RegExp('^(blob:)?https?:\\/\\/(?:localhost|(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6})\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)$', 'i').test(val) || this.$t('post.message.invalidImage')]
        this.add.imagePop = true
      },
      setImage(src) {
        if (this.add.commands !== null) {
          const findBlob = this.writeInfo.blobList.find(b => b.blob === src)
          this.add.commands({ 'src': src, 'name': findBlob ? findBlob.name : '' })
          this.add.commands.hard_break()
        }

        this.cancelPrompt()
      },
      cancelPrompt() {
        this.add.url = null
        this.add.commands = null
        this.add.rules = []
        this.add.linkPop = false
        this.add.imagePop = false
      },
      codeBlockUpdate(command, attrs, selected) {
        if (attrs.value === selected.value)
          return
        else if (attrs.value !== selected.value && selected.value !== 'remove')
          command(selected)
        else
          command()
      },
      validYoutube() {
        const youtubeId = this.getYoutubeId(this.writeInfo.youtube)
        if (youtubeId !== null && this.writeInfo.thumb === null)
          this.writeInfo.thumb = this.writeInfo.youtube
      },
      deleteFile(file) {
        const findIndex = this.writeInfo.files.findIndex(f => f.fid === file.fid)

        if (findIndex !== -1) {
          const newContents = this.writeInfo.contents.replace(file.path, 'remove_image').replace(new RegExp('<(\\w+)\\s[^>]*src=\\"remove_image\\"[^>]*>', 'igm'), '')
          file.deleted = true
          this.writeInfo.deleteList.push(file.fid)
          this.writeInfo.files.splice(findIndex, 1)
          this.editor.setContent(newContents, true)

          if (this.writeInfo.thumb === file.origin)
            this.writeInfo.thumb = null
        }
      },
      postWihtUpload() {
        return {
          url: `${this.axios.defaults.baseURL}/d2r/board/write`,
          method: 'POST',
          withCredentials: true,
          formFields: [
            {
              'name': 'sec',
              'value': encodeURIComponent(this.sec)
            },
            {
              'name': 'classify',
              'value': encodeURIComponent(this.writeInfo.classify)
            },
            {
              'name': 'pid',
              'value': this.writeInfo.pid
            },
            {
              'name': 'quiz',
              'value': encodeURIComponent(JSON.stringify(this.writeInfo.quiz))
            },
            {
              'name': 'title',
              'value': encodeURIComponent(this.writeInfo.title)
            },
            {
              'name': 'contents',
              'value': encodeURIComponent(this.writeInfo.contents)
            },
            {
              'name': 'youtube',
              'value': encodeURIComponent(this.writeInfo.youtube)
            },
            {
              'name': 'thumb',
              'value': encodeURIComponent(this.writeInfo.thumb)
            },
            {
              'name': 'deleteList',
              'value': encodeURIComponent(JSON.stringify(this.writeInfo.deleteList))
            }
          ]
        }
      },
      post() {
        const vm = this
        this.loading = true
        this.axios
          .post('/d2r/board/write', {
            sec: this.sec,
            classify: encodeURIComponent(this.writeInfo.classify),
            pid: this.writeInfo.pid,
            quiz: encodeURIComponent(JSON.stringify(this.writeInfo.quiz)),
            title: encodeURIComponent(this.writeInfo.title),
            contents: encodeURIComponent(this.writeInfo.contents),
            youtube: encodeURIComponent(this.writeInfo.youtube),
            thumb: encodeURIComponent(this.writeInfo.thumb),
            deleteList: encodeURIComponent(JSON.stringify(this.writeInfo.deleteList))
          }).then(function () {
            vm.complete()
          })
          .catch(function () { })
          .then(function () {
            vm.loading = false
          })
      },
      complete() {
        this.$router.push({ name: 'd2r-bbs', params: { sec: this.sec }, query: { page: this.$route.query.page || 1 } }).catch(() => { })
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
      }
    }
  }
</script>
<style scoped>
  .d2r-write {
    padding: 1em 1em 2em 1em;
    box-shadow: 0 0 0 1px rgba(45, 45, 45, 1);
    background-color: rgba(12, 12, 12, 1) !important;
    border-radius: 4px;
  }

  .body--light .d2r-write {
    box-shadow: 0 0 0 1px rgba(200, 200, 200, 1);
    background-color: rgba(245, 245, 245, 1) !important;
  }

  @keyframes wiggle {
    0% {
      margin-left: -4px;
    }

    25% {
      margin-left: 3px;
    }

    50% {
      margin-left: -3px;
    }

    75% {
      margin-left: 2px;
    }

    100% {
      margin-left: 0;
    }
  }

  .input-place {
    background-color: rgba(45, 45, 45, 0.3);
    border: solid 1px transparent;
    border-radius: 4px;
    position: relative;
  }

  .editor-menu-bar {
    position: sticky;
    position: -webkit-sticky;
    top: 77px;
    z-index: 1;
    background-color: #fafafa !important;
    border-radius: 4px;
  }

  .body--dark .editor-menu-bar {
    background-color: #202020 !important;
  }

  @media screen and (max-width:1439px) {
    .editor-menu-bar {
      top: 58px !important;
    }
  }

  .body--light .input-place {
    background-color: rgba(200, 200, 200, 0.3);
  }

  .quiz {
    background-color: rgba(122, 92, 35, 0.3) !important;
  }

  .editor-menu-bar .is-active {
    background-color: rgba(255, 0, 0, 0.3);
  }

  .editor-contents {
    height: calc(60vh - 30px) !important;
    padding: 12px 8px;
  }

  .contents-label {
    position: absolute;
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.4s;
    left: 8px;
    top: 4px;
  }

  .body--light .contents-label {
    color: rgba(0, 0, 0, 0.7);
  }

  .contents-label.focused {
    top: -4px;
    font-size: 0.8em;
  }

  .contents-label.invalid {
    color: #C10015;
    animation: wiggle 0.2s linear 1 alternate;
  }

  .textarea {
    color: #FFFFFF;
  }

  .body--light .textarea {
    color: #000000;
  }
</style>