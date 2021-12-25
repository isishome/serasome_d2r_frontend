<template>
  <div ref="scrollTarget">
    <button class="btn relative-position" :style="`top:${info.top}%;left:${info.left}%`" @click.exact="choice(1)"
      @contextmenu.exact.prevent="choice(-1)" @click.shift.exact="choice(1000)"
      @contextmenu.shift.exact.prevent="choice(-1000)">
      <img class="img no-pointer-events" :class="points > 0 ? 'learned' : ''" :src="src" />
      <q-tooltip v-if="$q.screen.gt.sm" content-class="skill-tooltip font-kodia" :scroll-target="$refs.scrollTarget"
        size="xs" :anchor="`bottom ${tooltip}`" :self="`top ${tooltip}`" :offset="[0,0]" transition-show="none"
        transition-hide="none">
        <div class="full-width column items-center word-keep tooltip-contents"
          :class="[disable ? 'text-red-5' : 'text-grey-4', $q.screen.lt.sm ? 'q-gutter-xs' : 'q-gutter-md']">
          <div v-if="points === 0" class="title d2r-green first-letter">
            {{lang.notLearned}}
          </div>
          <div class="name d2r-green first-letter">
            {{info.name}}
          </div>
          <div class="q-mt-none column items-center">
            <div v-for="(d, idx) in info.desc" :key="idx">{{d}}</div>
            <div v-if="points !== 20" class="first-letter">{{lang.required}} {{Number(info.level) + points}}
            </div>
            <div v-else class="first-letter">{{lang.reached}}</div>
          </div>
          <div v-if="adds.length > 0" class="column items-center">
            <div class="first-letter" v-for="(a, idx) in adds" :key="idx" :calcs="calcs">{{a}}
            </div>
          </div>
          <div v-if="points > 0" class="column items-center">
            <div class="first-letter">{{lang.current}} : {{points}}
            </div>
            <div class="first-letter" v-for="(s, idx) in stats" :key="idx" :calcs="calcs">{{s}}
            </div>
          </div>
          <div v-if="points !== 20" class="column items-center">
            <div class="first-letter">{{points > 0 ? lang.next : lang.first}} {{lang.level}}
            </div>
            <div class="first-letter" v-for="(n, idx) in nexts" :key="idx" :calcs="calcs">{{n}}
            </div>
          </div>
          <div v-if="bonuses.length > 0" class="column items-center q-gutter-y-sm">
            <div class="d2r-green row items-center q-gutter-sm">
              <div class="first-letter">{{info.name}}</div>
              <div class="first-letter" v-for="(l, idx) in lang.bonus.split(' ')" :key="idx">{{l}}</div>
              <div class="q-ml-none">:</div>
            </div>
            <div class="q-mt-none column items-center">
              <div class="first-letter" v-for="(b, idx) in bonuses" :key="idx">{{b}}</div>
            </div>
          </div>
        </div>
      </q-tooltip>
      <template v-else>
        <q-btn v-if="!$q.platform.is.mobile" dense flat round unelevated :ripple="false" text-color="green" icon="info"
          class="absolute-top-right" style="margin-right: -5px;margin-top:-5px;" @click.stop="dialog = true" />
        <q-dialog full-width v-model="dialog" content-class="font-kodia">
          <div class="bg-black full-width no-scroll column items-center word-keep tooltip-contents q-px-none q-py-sm"
            :class="[disable ? 'text-red-5' : 'text-grey-4', 'q-gutter-y-sm']">
            <div v-if="points === 0" class="title d2r-green first-letter">
              {{lang.notLearned}}
            </div>
            <div class="name d2r-green first-letter">
              {{info.name}}
            </div>
            <div class="q-mt-none column items-center">
              <div v-for="(d, idx) in info.desc" :key="idx">{{d}}</div>
              <div v-if="points !== 20" class="first-letter">{{lang.required}} {{Number(info.level) + points}}
              </div>
              <div v-else class="first-letter">{{lang.reached}}</div>
            </div>
            <div v-if="adds.length > 0" class="column items-center">
              <div class="first-letter" v-for="(a, idx) in adds" :key="idx">{{a}}
              </div>
            </div>
            <div v-if="points > 0" class="column items-center">
              <div class="first-letter">{{lang.current}} : {{points}}
              </div>
              <div class="first-letter" v-for="(s, idx) in stats" :key="idx">{{s}}
              </div>
            </div>
            <div v-if="points !== 20" class="column items-center">
              <div class="first-letter">{{points > 0 ? lang.next : lang.first}} {{lang.level}}
              </div>
              <div class="first-letter" v-for="(n, idx) in nexts" :key="idx">{{n}}
              </div>
            </div>
            <div v-if="bonuses.length > 0" class="column items-center q-gutter-y-xs">
              <div class="d2r-green row justify-center items-center q-gutter-xs">
                <div class="first-letter">{{info.name}}</div>
                <div class="first-letter" v-for="(l, idx) in lang.bonus.split(' ')" :key="idx">{{l}}</div>
                <div class="q-ml-none">:</div>
              </div>
              <div class="q-mt-none column items-center">
                <div class="first-letter" v-for="(b, idx) in bonuses" :key="idx">{{b}}</div>
              </div>
            </div>
          </div>
        </q-dialog>
      </template>
    </button>
    <div v-if="points > 0" class="point row justify-center items-center"
      :style="`top:${Number(info.top)+7.4}%;left:${Number(info.left)+15.6}%`">
      {{points}}
    </div>
  </div>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'

  export default {
    name: 'd2r-skill',
    props: {
      clsId: {
        type: String,
        default: 'paladin'
      },
      treeId: {
        type: String,
        default: 'da'
      },
      info: {
        type: Object,
        default: function () {
          return {}
        }
      },
      data: {
        type: Object,
        default: function () {
          return {}
        }
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
        dialog: false,
        points: 0,
        bonuses: [],
        adds: [],
        stats: [],
        nexts: [],
        calcs: {}
      }
    },
    computed: {
      ...mapGetters({
        skill: 'getSkillsSkill',
        totalPoints: 'getSkillsPoints'
      }),
      src() {
        return require(`@/assets/images/d2r/skills/${this.clsId}/${this.treeId}/${this.info.id}.jpg`)
      },
      tooltip() {
        return this.info.tooltip || 'middle'
      },
      disable() {
        return this.points < 1 || this.points >= 20 || this.totalPoints < 1
      }
    },
    created() {
      this.setInfo()
    },
    mounted() {
      this.$parent.loaded++
    },
    methods: {
      setInfo() {
        if (this.info.bonus) {
          this.calcs = {}
          this.info.bonus.some(b => {
            const findSkill = this.skill(this.clsId, b.skillId)
            const findSkillLevel = this.data[b.treeId] && this.data[b.treeId][b.skillId] ? Number(this.data[b.treeId][b.skillId]) : 0

            if (findSkill) {
              b.name = findSkill.name

              if (b.addIdx) {
                for (const i in b.addIdx) {
                  this.info.add[i].text = this.info.add[i].text.replace(/\{n\}/, findSkill.name)
                  const calc = { value: b.value[i], type: b.type[i], stat: findSkill.stat, points: findSkillLevel }

                  if (this.calcs[`add_${b.addIdx[i]}`])
                    this.calcs[`add_${b.addIdx[i]}`] = [...this.calcs[`add_${b.addIdx[i]}`], calc]
                  else
                    this.calcs[`add_${b.addIdx[i]}`] = [calc]
                }
              }
              else if (b.statIdx) {
                for (const i in b.statIdx) {
                  const calc = { value: b.value[i], type: b.type[i], stat: findSkill.stat, points: findSkillLevel }
                  if (this.calcs[`stat_${b.statIdx[i]}`])
                    this.calcs[`stat_${b.statIdx[i]}`] = [...this.calcs[`stat_${b.statIdx[i]}`], calc]
                  else
                    this.calcs[`stat_${b.statIdx[i]}`] = [calc]
                }
              }

              let bonus = null
              if (this.info.bonus.length === this.bonuses.length || (b.hide && b.hide === true))
                return false
              else if (b.text && b.value)
                bonus = b.text.replace(/\{n\}/gi, findSkill.name).format(b.value[0])
              else
                bonus = findSkill.name

              if (this.bonuses.includes(bonus) === false && bonus !== null)
                this.bonuses.push(bonus)
            }
          })
        }

        for (const i in this.info.add) {
          if (this.info.add[i].value)
            this.adds[i] = this.format('add', i, this.info.add[i].text, this.info.add[i].value[this.points])
          else
            this.adds[i] = this.info.add[i].text
        }

        for (const i in this.info.stat) {
          if (this.info.stat[i].value) {
            this.stats[i] = this.format('stat', i, this.info.stat[i].text, this.info.stat[i].value[this.points])
            this.nexts[i] = this.format('stat', i, this.info.stat[i].text, this.info.stat[i].value[this.points + 1])
          }
          else {
            this.stats[i] = this.info.stat[i].text
            this.nexts[i] = this.info.stat[i].text
          }
        }
      },
      format(type, idx, text, val) {
        const calc = this.calcs[`${type}_${idx}`]
        let formatted = type === 'stat' ? this.info.stat[idx].text : type === 'add' ? this.info.add[idx].text : ''
        if (Array.isArray(val)) {
          for (const v in val) {
            const result = [val[v]]
            const rates = []
            if (calc) {
              calc.forEach(c => {
                if (c.type === 'rate')
                  rates.push(c.value * c.points / 100)
                else if (c.type === 'sum')
                  result.push(c.value * c.points)
                else if (c.type === 'per_sum')
                  result.push(c.value[0] * Math.floor(c.points / c.value[1]))
                else if (c.type === 'array')
                  result.push(c.value[c.points])
                else if (c.type === 'rate_array')
                  rates.push(c.stat[c.value].value[c.points] / 100)
              })
            }

            if (rates.length > 0)
              result.push(rates.reduce((sum, x) => sum + x) * val[v])

            formatted = formatted.replace('{' + v + '}', Math.floor(result.reduce((sum, x) => sum + x) * 10) / 10)
          }
        }
        else {
          const result = [val]
          const rates = []
          if (calc) {
            calc.forEach(c => {
              if (c.type === 'rate')
                rates.push(c.value * c.points / 100)
              else if (c.type === 'sum')
                result.push(c.value * c.points)
              else if (c.type === 'per_sum')
                result.push(c.value[0] * Math.floor(c.points / c.value[1]))
              else if (c.type === 'array')
                result.push(c.value[c.points])
              else if (c.type === 'rate_array')
                rates.push(c.stat[c.value].value[c.points] / 100)
            })
          }

          if (rates.length > 0)
            result.push(rates.reduce((sum, x) => sum + x) * val)

          formatted = formatted.replace('{0}', Math.floor(result.reduce((sum, x) => sum + x) * 10) / 10)
        }
        return formatted
      },
      choice(points) {
        if (this.$q.platform.is.mobile) {
          const parentMobileData = this.$parent.mobile
          if (parentMobileData.max === true)
            points = 1000

          if (parentMobileData.remove === true)
            points = -points

          if (parentMobileData.info === true) {
            this.dialog = true
            return
          }
        }
        this.$emit('choice', { treeId: this.treeId, skillId: this.info.id, points: points })
      },
      update() {
        this.points = this.data[this.treeId] && this.data[this.treeId][this.info.id] ? this.data[this.treeId][this.info.id] : 0
        this.$parent.treePoints[this.info.id] = this.points
        this.setInfo()
      }
    }
  }
</script>
<style>
  .skill-tooltip {
    background-color: rgba(10, 10, 10, .9) !important;
    border-radius: 0 !important;
  }

  .first-letter:lang(en)::first-letter {
    font-size: 1.4em;
  }
</style>
<style scoped>
  .tooltip-contents {
    font-weight: bold;
    letter-spacing: 0.1em;
    text-align: center;
    font-size: 1.5em;
    line-height: 1.4em;
  }

  .tooltip-contents .title,
  .tooltip-contents .name {
    text-align: center;
    font-size: 1.1em;
  }

  .btn {
    background-color: transparent !important;
    position: absolute;
    width: 14.7707%;
    height: 11.8528%;
    z-index: 2;
    padding: 0;
    margin: 0;
    border: none;
    cursor: pointer;
    outline: none;
    touch-action: manipulation;
  }

  .btn:active {
    transform: scale(95%, 95%);
  }

  .point {
    font-size: 1em;
    width: 8%;
    height: 5%;
    position: absolute;
    color: white;
  }

  .img {
    width: 100%;
    height: 100%;
  }

  .body--light .img {
    filter: brightness(1.4);
    -webkit-filter: brightness(1.4);
  }

  .img.learned {
    filter: brightness(2.5);
    -webkit-filter: brightness(2.5);
  }

  .body--light .img.learned {
    filter: brightness(3);
    -webkit-filter: brightness(3);
  }

  .d2r-green {
    color: rgb(9, 255, 0);
  }

  .first-letter:lang(en)::first-letter {
    font-size: 1.4em;
  }

  @media screen and (max-height:800px) {
    .tooltip-contents {
      font-weight: bold;
      font-size: 1em;
      line-height: 1.4em;
      letter-spacing: 0;
    }

    .tooltip-contents .title,
    .tooltip-contents .name {
      font-size: 1.1em;
    }

    .point {
      font-size: .9em;
      line-height: 1.2em;
    }
  }

  @media screen and (max-width:599px) {
    .tooltip-contents {
      font-weight: bold;
      font-size: .7em;
      line-height: 1.5em;
      letter-spacing: 0;
    }

    .tooltip-contents .title,
    .tooltip-contents .name {
      font-size: .8em;
    }

    .point {
      font-size: .6em;
      line-height: .9em;
      letter-spacing: -1px;
    }
  }

  @media (hover: hover) {
    .img:hover {
      filter: brightness(5);
      -webkit-filter: brightness(5);
    }
  }
</style>