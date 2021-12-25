<template>
  <div class="font-kodia relative-position" @contextmenu.prevent>
    <q-inner-loading size="xs" :showing="showing" class="loading">
      <q-spinner-ball size="xl" color="red" />
    </q-inner-loading>
    <div class="tree-name" :style="titleBack">
      <div class="row justify-between items-center word-keep">
        <div class="col-1"></div>
        <div class="col row justify-center q-gutter-sm">
          <div v-for="(i,idx) in info.name.split(' ')" :key="idx" class="first-letter">
            {{i}}</div>
        </div>
        <div class="col-1 text-right relative-position" style="z-index: 2;">
          <q-btn v-if="Object.values(this.treePoints).reduce((a, b) => a + b, 0) > 0" :tree-points="treePoints"
            :size="$q.platform.is.mobile ? '7px' : '10px'" padding="2px" push dense unelevated color="red-10"
            class="text-weight-bold" @click="reset">
            <q-icon name="close" />
          </q-btn>
        </div>
      </div>
    </div>
    <div class="tree">
      <img :src="src" class="img no-pointer-events" />
      <slot></slot>
    </div>
    <div class="tree-name tree-bottom" :style="bottomBack">
      <div v-if="$q.platform.is.mobile" class="row justify-center items-center q-gutter-y-xs relative-position"
        :class="$q.screen.lt.sm ? 'q-gutter-x-xs' : 'q-gutter-x-md'" style="z-index: 2;">
        <div>
          <q-checkbox dark dense size="xs" v-model="mobile.max" color="title" :label="lang.max" />
        </div>
        <div>
          <q-checkbox dark dense size="xs" v-model="mobile.remove" color="title" :label="lang.back" />
        </div>
        <div>
          <q-checkbox dark dense size="xs" v-model="mobile.info" color="title" :label="lang.info" />
        </div>
        <div class="col-12">
          <q-separator />
        </div>
        <div class="col-12"></div>
      </div>
      <div class="row justify-center items-center" :class="$q.screen.gt.sm ? ' q-gutter-x-sm' : 'q-gutter-x-xs'">
        <div>{{points}}</div>
        <div v-for="(r,idx) in lang.remain.split(' ')" :key="idx" class="first-letter">
          {{r}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'

  export default {
    name: 'd2r-tree',
    props: {
      clsId: {
        type: String,
        default: ''
      },
      info: {
        type: Object,
        default: function () {
          return {}
        }
      },
      title: {
        type: String,
        default: ''
      },
      lang: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    data() {
      return {
        tab: 'combat',
        loaded: 0,
        showing: true,
        mobile: {
          max: false,
          remove: false,
          info: false
        },
        treePoints: {}
      }
    },
    computed: {
      ...mapGetters({
        points: 'getSkillsPoints'
      }),
      titleBack() {
        return `background-image:linear-gradient(to bottom, rgba(0,0,0,.4), rgba(0,0,0,.1), rgba(10,10,10,.4)),url('${require('@/assets/images/d2r/skills/title.jpg')}')`
      },
      bottomBack() {
        return `background-image:linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,.7), rgba(10,10,10,1)),url('${require('@/assets/images/d2r/skills/title.jpg')}')`
      },
      src() {
        return require(`@/assets/images/d2r/skills/${this.clsId}/${this.info.id}/back.jpg`)
      }
    },
    watch: {
      loaded: function (val, old) {
        if (val !== old && val === this.info.skills.length) {
          this.showing = false
          this.$emit('complete')
        }
      }
    },
    created() {
      if (this.info.skills.length === 0) {
        this.showing = false
        this.$emit('complete')
      }
    },
    methods: {
      reset() {
        this.mobile.max = false
        this.mobile.remove = false
        this.mobile.info = false

        if (this.$children) {
          this.$children.forEach(c => {
            if (c.points && c.points > 0) {
              c.choice(-1000)
            }
          })
        }
      }
    }
  }
</script>
<style scoped>
  .tree-name {
    position: relative;
    max-width: 589px;
    font-size: 1.3em;
    line-height: 1.5em;
    color: rgb(230, 230, 230);
    text-align: center;
    padding: 10px;
    box-shadow: inset 0 0 10px 5px rgb(0, 0, 0), 0 0 0 1px rgb(119, 82, 2), 0 0 0 3px rgb(0, 0, 0), 0 0 0 5px rgb(40, 40, 40);
    background-size: cover !important;
  }

  .tree-bottom {
    font-weight: bold;
    color: rgb(97, 112, 131);
    box-shadow: inset 0 0 10px 5px rgb(0, 0, 0), 0 0 0 2px rgb(46, 27, 0), 0 0 0 3px rgb(0, 0, 0), 0 0 0 5px rgb(40, 40, 40);
    text-shadow: none;
  }

  .tree-name:lang(en)::first-letter {
    font-size: 1.2em;
  }

  @media screen and (max-width:599px) {
    .tree-name {
      font-size: 1em;
      line-height: 2em;
    }
  }

  @media screen and (max-width:320px) {
    .tree-name {
      font-size: .6em;
    }
  }

  .tree {
    position: relative;
    max-width: 589px;
    line-height: 0;
    box-shadow: 0 0 0 1px rgb(0, 0, 0), 0 0 0 2px rgb(46, 27, 0), 0 0 0 3px rgb(0, 0, 0), 0 0 0 5px rgb(40, 40, 40);
  }

  .img {
    width: 100%;
  }

  .body--light .img {
    filter: brightness(2);
    -webkit-filter: brightness(2);
  }

  .body--light .tree-name::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: rgba(255, 255, 255, .1) !important;
  }

  .first-letter:lang(en)::first-letter {
    font-size: 1.2em;
  }

  .loading {
    z-index: 3;
  }
</style>