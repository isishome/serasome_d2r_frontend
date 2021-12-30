<template>
  <div class="full-width non-selectable no-touch">
    <d2r-tap-panel v-if="$route.params.part" :part="$route.params.part">
      <template #tabs>
        <q-tab :ripple="false" content-class="no-padding" v-for="cls in d2rClass" :key="cls.id"
          :name="upperCase(cls.id)" @click="swapPart(upperCase(cls.id))">
          <q-img :width="$q.screen.lt.sm ? '80px' : '110px'" :ratio="1"
            :src="require(`@/assets/images/d2r/classes/face/${cls.id}.png`)" />
          <div class="text-body ellipsis absolute-bottom title font-kodia">{{cls.name}}
          </div>
        </q-tab>
      </template>
      <template #panels>
        <q-tab-panel v-for="cls in d2rClass" :key="cls.id" :name="upperCase(cls.id)"
          class="no-scroll word-wrap non-selectable q-px-md">
          <div class="q-mb-md font-kodia text-weight-bold text-title text-center"
            :class="$q.screen.lt.sm ? 'text-h5' : 'text-h4'">
            {{cls.name}}</div>
          <div class="row justify-center items-center full-width">
            <img :src="require(`@/assets/images/d2r/classes/${cls.id}.png`)" style="height:calc(8vw + 100px);" />
          </div>
          <div class="row justify-center items-start q-col-gutter-lg">
            <template v-if="skillsData && !skillsData[cls.id].length">
              <div v-for="index in 3" :key="index" class="col-12 col-md-4 q-mt-lg">
                <q-img :src="require(`@/assets/images/d2r/skills/${cls.id}/${index-1}.jpg`)" :ratio="321/432" />
              </div>
            </template>
            <template v-else-if="skillsData">
              <div class="row justify-between items-end full-width relative-position">
                <ul class="desc font-kodia text-weight-bold col-12 col-md">
                  <li v-for="(d, idx) in skillsData.desc[$q.platform.is.mobile ? 'mobile' : 'desktop']" :key="idx"
                    class="row items-center text-caption text-weight-bold desc">
                    <div v-for="(k, idx1) in d.key" :key="`k${idx}_${idx1}`" class="row justify-center items-center">
                      <div>
                        <q-chip dense class="glossy" size="12px" color="grey-5" text-color="black">{{k}}</q-chip>
                      </div>
                      <div v-if="idx1 !== d.key.length" class="text-grey-6">
                        <q-icon name="add" color="grey-6" />
                      </div>
                    </div>
                    <div v-for="(i, idx2) in d.img" :key="`$i{idx}_${idx2}`" class="row justify-center items-center">
                      <div v-if="idx2 !== 0" class="text-grey-6">/</div>
                      <div>
                        <img :src="require(`@/assets/images/d2r/skills/${i}`)" />
                      </div>
                    </div>
                    <div class="row items-center q-gutter-x-sm">
                      <div v-if="!$q.platform.is.mobile">
                        <q-icon color="grey-6" name="east" />
                      </div>
                      <div class="word-keep">
                        {{d.text}}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="row justify-center q-col-gutter-md q-pt-sm">
                <div class="col-12 col-md-6 col-lg-4 row justify-center" v-for="tree in skillsData[cls.id]"
                  :key="tree.id">
                  <d2r-tree :info="tree" :cls-id="cls.id" :lang="skillsData.lang" @complete="complete">
                    <d2r-skill :ref="`${tree.id}_${skill.id}`" v-for="skill in tree.skills" :key="skill.id"
                      :cls-id="cls.id" :tree-id="tree.id" :info="skill" :data="data" :lang="skillsData.lang"
                      @choice="choice" />
                  </d2r-tree>
                </div>
              </div>
              <div v-if="existsData" class="full-width row justify-center items-center q-gutter-sm">
                <div class="col gt-sm"></div>
                <div>
                  <q-btn icon="share" color="red-10" :label="$t('d2r.knowledge.skills.btn.share')" @click="share"
                    :loading="loading" />
                </div>
                <div class="col-12 col-md text-left">
                  <q-input v-if="shareUrl !== ''" color="title" type="text" v-model="shareUrl"
                    @focus="(input) => input.target.select()" dense standout outlined hide-bottom-space no-error-icon>
                    <template v-slot:prepend>
                      <q-icon class="glossy" color="title" name="link" />
                    </template>
                  </q-input>
                </div>
              </div>
            </template>
          </div>
        </q-tab-panel>
      </template>
    </d2r-tap-panel>
  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'

  import { copyToClipboard } from 'quasar'

  const d2rTree = () => import(/* webpackChunkName: "d2r-knowledge-skills" */ '@/components/d2r/Tree')
  const d2rSkill = () => import(/* webpackChunkName: "d2r-knowledge-skills" */ '@/components/d2r/Skill')

  String.prototype.format = function () {
    var formatted = this
    for (var i = 0; i < arguments.length; i++) {
      var regexp = new RegExp('\\{' + i + '\\}', 'gi')
      formatted = formatted.replace(regexp, arguments[i])
    }
    return formatted
  };

  export default {
    components: {
      'd2r-tree': d2rTree,
      'd2r-skill': d2rSkill
    },
    data() {
      return {
        loading: false,
        show: true,
        show2: false,
        data: {},
        loaded: 0,
        existsData: false,
        shareUrl: ''
      }
    },
    computed: {
      ...mapGetters({
        d2rClass: 'getD2RClass',
        skillsData: 'getSkillsData',
        skill: 'getSkillsSkill',
        points: 'getSkillsPoints'
      }),
      sec() {
        return this.$route.params.section ? this.$route.params.section : null
      },
      cls() {
        return this.$route.params.part ? this.$route.params.part : null
      },
      sid() {
        return this.$route.params.sid ? this.$route.params.sid : null
      }
    },
    watch: {
      '$route': function (to, from) {
        if (to.params.section === from.params.section && to.params.part !== from.params.part) {
          this.init()
        }
      },
      loaded: function (val, old) {
        if (val !== old && this.cls && val === this.skillsData[this.cls.toLowerCase()].length && this.sid !== null)
          this.loadData(this.sid)
      }
    },
    created() {
      this.init()
    },
    methods: {
      ...mapActions({
        setData: 'setSkillsData',
        setPoints: 'setSkillsPoints',
        addPoints: 'addSkillsPoints'
      }),
      init() {
        this.data = {}
        this.setPoints(110)
        this.loaded = 0
        this.existsData = false
        this.shareUrl = ''

        if (this.cls) {
          this.load()
          if (this.skillsData === null) {
            this.$i18n.mergeLanguageAsync('skills').then(() => {
              this.setData(this.$t('skillsData'))
            })
          }
        }
        else if (this.$route.params.section === 'Skills')
          this.$router.replace({ name: 'd2r-knowledge-part', params: { section: 'Skills', part: 'Amazon' } }).catch(() => { })
      },
      complete() {
        this.loaded++
      },
      load() {
        this.clear()
        this.show = true
        this.show2 = false
        this.timer1 = setTimeout(() => {
          this.show = false
        }, 2000)
        this.timer2 = setTimeout(() => {
          this.show2 = true
        }, 2000)
      },
      swapPart(val) {
        this.$router.push({ name: 'd2r-knowledge-part', params: { section: 'Skills', part: val } }).catch(() => { })
      },
      clear() {
        clearTimeout(this.timer1)
        clearTimeout(this.timer2)
      },
      upperCase(val) {
        return val.charAt(0).toUpperCase() + val.slice(1)
      },
      bind() {
        for (let tree in this.data) {
          for (let skill in this.data[tree]) {
            const points = this.data[tree][skill]
            this.data[tree][skill] = 0
            this.choice({ treeId: tree, skillId: skill, points: points })
          }
        }
      },
      choice({ treeId, skillId, points }) {
        const required = this.skill(this.$route.params.part.toLowerCase(), skillId).required || []
        const requiredFilter = required.filter(r => this.data[r.treeId] && this.data[r.treeId][r.skillId] && this.data[r.treeId][r.skillId] > 0)

        if (!this.data[treeId])
          this.data[treeId] = {}

        if (!this.data[treeId][skillId])
          this.data[treeId][skillId] = 0

        if (requiredFilter.length !== required.length) {
          this.data[treeId][skillId] = 0
          points = 0
          return
        }

        let currentPoint = this.data[treeId][skillId]

        if ((currentPoint === 20 && points > 0) || (currentPoint === 0 && points < 0))
          return

        points = points > 999 ? 20 - currentPoint : points < -999 ? -currentPoint : points
        let remain = this.points - points
        const skillRemain = currentPoint + points

        if (remain < 0) {
          points += remain
          remain = 0
        }

        if (this.data[treeId][skillId] + points === 0) {
          for (let tree in this.data) {
            for (let skill in this.data[tree]) {
              const req = (this.skill(this.cls.toLowerCase(), skill).required || []).map(r => r.skillId)
              if (req.includes(skillId))
                this.choice({ treeId: tree, skillId: skill, points: -1000 })
            }
          }
        }

        if (remain >= 0 && skillRemain >= 0 && skillRemain <= 20) {
          this.addPoints(-points)
          this.data[treeId][skillId] += points
        }

        const skillObj = this.$refs[`${treeId}_${skillId}`]
        if (skillObj && skillObj[0]) {
          skillObj[0].update()
          const affected = this.skill(this.cls.toLowerCase(), skillId).affected
          if (affected) {
            affected.forEach(s => {
              const affectedObj = this.$refs[`${s.treeId}_${s.skillId}`]
              if (affectedObj && affectedObj[0])
                affectedObj[0].update()
            })
          }
        }

        this.shareUrl = ''
        this.existsData = Object.keys(this.data).filter(t => Object.keys(this.data[t]).filter(s => this.data[t][s] > 0).length > 0).length > 0
      },
      loadData(sid) {
        if (sid) {
          const vm = this
          this.loading = true
          this.axios
            .get('/d2r/knowledge/skills', {
              params: {
                sid: sid,
              }
            }).then(function (response) {
              if (response.data.length > 0)
                vm.data = response.data[0].data
            })
            .catch(function () { })
            .then(function () {
              vm.loading = false
              vm.bind()
            })
        }
      },
      share() {
        this.shareUrl = ''
        const vm = this
        this.loading = true
        this.axios
          .post('/d2r/knowledge/skillshare', {
            cls: this.cls.toLowerCase(),
            data: JSON.stringify(this.data)
          }).then(function (response) {
            if (response.data && response.data !== '') {
              vm.shareUrl = `${process.env.VUE_APP_D2R_URL}/#/Knowledge/${vm.sec}/${vm.cls}/${response.data}`

              copyToClipboard(vm.shareUrl)
                .then(() => {
                  vm.$q.notify({
                    type: 'positive',
                    color: 'positive',
                    message: vm.$t('d2r.knowledge.skills.message.successClipboard')
                  })
                })
                .catch(() => { })
            }
          })
          .catch(function () { })
          .then(function () {
            vm.loading = false
          })
      },
      // reset() {
      //   this.mobile.max = false
      //   this.mobile.remove = false
      //   this.mobile.info = false

      //   if (this.$children) {
      //     this.$children.forEach(c => {
      //       if (c.points && c.points > 0) {
      //         c.choice(-1000)
      //       }
      //     })
      //   }
      // }
    }
  }
</script>
<style scoped>
  .body--dark .desc img {
    filter: invert(100%);
    -webkit-filter: invert(100%);
    width: 24px;
    height: 24px;
  }

  .no-touch {
    user-select: none !important;
    -moz-user-select: none !important;
    -webkit-user-select: none !important;
    -ms-user-select: none !important;
  }

  .tab {
    color: #999999;
    box-shadow: inset 0 0 0 1px rgba(100, 100, 100, .5);
    border-radius: 0 10px 10px 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }

  .fade-enter,
  .fade-leave-to

  /* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
  }

  .desc {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 1em;
  }

  @media screen and (max-width:599px) {
    .desc {
      font-size: 0.8em !important;
      line-height: 1.6em;
    }

    .desc li {
      margin-bottom: 2px;
    }
  }
</style>