<template>
  <div class="bg-grey-2 q-pa-sm" :style="$q.screen.gt.xs ? 'height:700px' : ''">
    <q-form class="full-height no-padding no-margin column q-col-gutter-y-xs" @submit="onSubmit">
      <div class="col-1">
        <q-input :dark="false" dense hide-bottom-space no-error-icon class="q-px-sm" color="grey-5"
          :disable="processPosting" maxlength="200" type="text" :label="$t('d2r.storage.item.name')"
          v-model="writeInfo.name" :rules="[val => val && val.trim() !== '' || '']" />
      </div>
      <div class="col-3 input-place full-width ">
        <q-uploader :dark="false" text-color="black" class="full-width bg-transparent" color="transparent"
          ref="uploader" :disable="processPosting"
          :accept="limitFileCnt !== -1 ? 'image/*' : '.exe, .zip, .tar, .jar, .7z, .rar, .bat, .cmd, .hwp, .txt, .doc, .docx, .ppt, .pptx, .xls, .xlss, image/*, video/*, audio/*'"
          :factory="postWihtUpload"
          :label="limitFileCnt !== -1 ? `attach image (10m * ${limitFileCnt})` : 'attach file (10m)'" @added="added"
          @removed="removed" @uploaded="complete" @failed="failed" @start="start" @finish="finish" bordered flat
          hide-upload-btn batch>
          <template #header="scope">
            <div class="q-pa-sm row justify-between items-center q-gutter-x-sm">
              <div class="col text-caption">
                {{$t('d2r.storage.upload.title')}}
              </div>
              <template v-if="writeInfo.files.length > 0">
                <q-separator vertical inset color="grey-5" />
                <div class="col-1 text-center">
                  <q-avatar size="sm" rounded>
                    <img :src="writeInfo.files[0].path" />
                  </q-avatar>
                </div>
              </template>
              <template v-if="scope.canAddFiles">
                <q-separator vertical inset color="grey-5" />
                <div class="col-1 text-center">
                  <q-btn icon="add" padding="xs" size="sm" flat class="bg-grey-10" color="grey-4">
                    <q-uploader-add-trigger />
                  </q-btn>
                </div>
              </template>
            </div>
          </template>
          <template #list="scope">
            <q-list :dark="false" separator :style="$q.screen.lt.sm ? 'height:40px' : ''" class="scroll">
              <q-item :dark="false" dense v-for="file in scope.files" :key="file.name">
                <q-item-section v-if="file.__img" style="width:10%" thumbnail>
                  <q-img :src="file.__img.src" width="100%" :ratio="3/2" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="ellipsis text-grey-10 q-py-xs">
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
      <div class="col-1">
        <q-input :dark="false" dense hide-bottom-space no-error-icon class="q-px-sm" color="grey-5"
          :disable="processPosting" maxlength="200" type="text" :label="$t('d2r.storage.item.tradeTitle')"
          v-model="writeInfo.title" />
      </div>
      <div class="col-6 input-place column">
        <editor-menu-bar ref="editor" class="editor-menu-bar" :editor="editor"
          v-slot="{ commands, isActive, getMarkAttrs, getNodeAttrs }">
          <q-toolbar class="row justify-between items-start text-grey-10" v-show="processPosting === false">
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
                  <q-popup-proxy ref="codeBlockProxy" :breakpoint="0">
                    <q-select menu-self="top left" color="grey-8" :value="codeBlock.class"
                      :options="isActive.ccb() ? removeWithOptions : codeBlock.options"
                      @input="val => codeBlockUpdate(commands.ccb, getNodeAttrs('ccb'), val)" label="Code Language Type"
                      dropdown-icon="keyboard_arrow_down" style="width:200px" dense outlined map-options no-error-icon>
                      <template v-slot:option="{ itemProps, itemEvents, opt, selected }">
                        <q-item v-bind="itemProps" v-on="itemEvents"
                          :class="opt.value === 'remove' ? 'bg-red-12 text-white' : ''"
                          @click="selected = opt; $refs.codeBlockProxy.hide()">
                          <q-item-section>
                            <q-item-label>{{opt.label}}
                            </q-item-label>
                          </q-item-section>
                        </q-item>
                      </template>
                    </q-select>
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
        <q-scroll-area class="col contents editor-contents no-padding q-mt-sm" :thumb-style="thumbStyle">
          <label ref="contentLabel" class="contents-label">{{$t('d2r.storage.item.tradeContents')}}</label>
          <editor-content spellcheck="false" :editor="editor" class="q-pa-sm full-height textarea" />
        </q-scroll-area>
      </div>
      <div class="col-1 row justify-end q-gutter-x-sm">
        <div>
          <q-btn dense push class="bg-grey-10 text-grey-4" :loading="loading" type="submit"
            :label="iid ? $t('btn.modify') :$t('btn.posting')" />
        </div>
        <div>
          <q-btn dense push class="bg-grey-8 text-grey-4" :disable="loading" :label="$t('btn.cancel')"
            @click="$emit('cancel')" />
        </div>
      </div>
    </q-form>
    <ss-prompt no-persistent v-model="add.linkPop" :title="$t('post.link')" :contents="add.url" :rules="add.rules"
      @ok="setLink" @cancel="cancelPrompt" color="grey-5" />
    <ss-prompt no-persistent v-model="add.imagePop" :title="$t('post.image')" :contents="add.url" :rules="add.rules"
      @ok="setImage" @cancel="cancelPrompt" color="grey-5" />
  </div>
</template>
<script>
  import { copyToClipboard, scroll } from 'quasar'
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
    name: 'd2r-item',
    props: {
      cid: {
        type: String,
        default: null
      },
      iid: {
        type: String,
        default: null
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
            this.$refs.contentLabel.classList.remove('valid')
          },
          onBlur: () => {
            if (this.checkContents())
              this.$refs.contentLabel.classList.remove('focused')
            else
              this.$refs.contentLabel.classList.add('valid')
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
          name: null,
          title: null,
          contents: null,
          files: [],
          blobList: [],
          thumb: null,
          fileList: []
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
      isSelectionEmpty() {
        return this.editor.view.state.selection.empty;
      },
      removeWithOptions() {
        return [...this.codeBlock.options, { label: 'Remove', value: 'remove' }]
      }
    },
    created() {
      if (this.iid) {
        const vm = this
        this.loading = true

        this.axios
          .get('/d2r/storage/itemcont', {
            params: {
              iid: this.iid
            }
          }).then(function (response) {
            if (response.data) {
              vm.writeInfo.name = response.data.name
              vm.writeInfo.title = response.data.title
              vm.editor.setContent(response.data.contents, true)
              if (response.data.contents !== null)
                vm.$refs.contentLabel.classList.add('focused')
              vm.writeInfo.files = response.data.files
            }
          })
          .catch(function () {
            vm.$emit('error')
          })
          .then(function () {
            vm.loading = false
            if (vm.writeInfo.owner === false) {
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
      onSubmit() {
        if (this.writeInfo.iid === null && this.writeInfo.files.length === 0) {
          this.$q.notify({
            type: 'negative',
            color: 'negative',
            message: this.$t('d2r.storage.message.requiredImage')
          })
        }
        else if (this.writeInfo.contents !== null && this.writeInfo.contents.replace(/\s/gi, '').replace(/<\/?p>/gi, '') !== '' && this.checkContents()) {
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
      postWihtUpload() {
        return {
          url: `${this.axios.defaults.baseURL}/d2r/storage/postitem`,
          method: 'POST',
          withCredentials: true,
          formFields: [
            {
              'name': 'cid',
              'value': this.cid
            },
            {
              'name': 'iid',
              'value': this.iid
            },
            {
              'name': 'name',
              'value': encodeURIComponent(this.writeInfo.name)
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
              'name': 'thumb',
              'value': encodeURIComponent(this.writeInfo.thumb)
            }
          ]
        }
      },
      post() {
        const vm = this
        this.loading = true
        this.axios
          .post('/d2r/storage/postitem', {
            cid: this.cid,
            iid: this.iid,
            name: encodeURIComponent(this.writeInfo.name),
            title: encodeURIComponent(this.writeInfo.title),
            contents: encodeURIComponent(this.writeInfo.contents),
            thumb: encodeURIComponent(this.writeInfo.thumb)
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
        this.$emit('process', JSON.parse(info.xhr.response))
      },
      failed(info) {
        this.$q.notify({
          type: 'negative',
          color: 'negative',
          message: this.$t('d2r.storage.message.failed').concat(' (', info.xhr.response, ')')
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
    background-color: rgba(0, 0, 0, 0);
    border: solid 1px transparent;
    border-radius: 4px;
  }

  .editor-menu-bar .is-active {
    background-color: rgba(255, 0, 0, 0.3);
  }

  .editor-contents {
    padding: 12px 8px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }

  .contents-label {
    position: absolute;
    color: rgba(0, 0, 0, 0.87);
    transition: all 0.4s;
    left: 8px;
    top: 4px;
  }

  .contents-label.focused {
    color: rgba(0, 0, 0, 0.3) !important;
    top: -4px;
    font-size: 0.8em;
  }

  .contents-label.invalid {
    color: #C10015;
    animation: wiggle 0.2s linear 1 alternate;
  }

  .contents-label.valid {
    color: rgba(0, 0, 0, 0.6) !important;
  }

  .textarea {
    color: #000000;
  }
</style>