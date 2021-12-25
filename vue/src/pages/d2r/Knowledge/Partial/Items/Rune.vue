<template>
  <div class="full-width">
    <div class="row justify-end fit">
      <q-btn dense icon="clear_all" class="text-weight-bold" padding="4px" :label="$t('d2r.knowledge.items.reset')"
        :size="$q.screen.gt.sm ? 'md' : 'sm'" @click="refresh" />
    </div>
    <div class="row justify-start text-center q-col-gutter-sm rune-wrap full-width non-selectable">
      <div v-for="rune in runes" :key="rune.no" class="rune">
        <q-btn no-caps dense flat class="row fit" :class="rune.selected ? 'selected' : ''"
          :ripple="!$q.platform.is.mobile" @click="selectedRune(rune)">
          <div class="col-12 full-width">
            <img :src="require(`@/assets/images/d2r/items/runes/${rune.file}.png`)"
              style="width: 100%;max-width:50px;max-height:50px;" />
          </div>
          <div class="col-1 full-height full-width word-keep rune-name text-body1">{{rune.name}}</div>
        </q-btn>
      </div>
    </div>
    <q-table dense class="bg-transparent" table-class="d2r-table" card-container-class="q-col-gutter-md justify-center"
      :grid="$q.screen.lt.lg" :data="filtering" :columns="columns" row-key="name" :pagination.sync="pagination"
      :hide-header="$q.screen.lt.sm" hide-pagination>
      <template v-slot:no-data>
        <div class="row justify-center full-width" :class="$q.screen.lt.md ? 'text-caption' : 'text-body2'">
          {{$t('d2r.knowledge.items.noData')}}</div>
      </template>
      <template v-slot:top>
        <div class="row justify-between items-center full-width q-col-gutter-sm">
          <div class="col-12 col-md-8 row justify-start items-center q-col-gutter-sm">
            <div class="col-12 col-lg-3">
              <q-checkbox dense color="amber-10" size="md" v-model="own" class="word-keep"
                :label="$t('d2r.knowledge.items.own')" />
            </div>
            <div class="col-12 col-lg-3">
              <q-select :transition-show="$q.screen.lt.md ? 'slide-up' : 'none'"
                :transition-hide="$q.screen.lt.md ? 'slide-down' : 'none'" menu-self="center left" color="amber-9"
                popup-content-style="border:solid 1px #888888" v-model="selectedMaterial" :options="meterialOptions"
                dropdown-icon="keyboard_arrow_down" :label="$t('d2r.knowledge.items.runewordMaterialType')" dense
                outlined emit-value map-options no-error-icon menu-shrink options-dense />
            </div>
            <div class="col-12 col-lg-3">
              <q-select :transition-show="$q.screen.lt.md ? 'slide-up' : 'none'"
                :transition-hide="$q.screen.lt.md ? 'slide-down' : 'none'" menu-self="center left" color="amber-9"
                popup-content-style="border:solid 1px #888888" v-model="selectedClass" :options="d2rClassOptions"
                :label="$t('d2r.knowledge.items.recommendedClass')" dropdown-icon="keyboard_arrow_down" dense outlined
                emit-value map-options no-error-icon menu-shrink options-dense>
                <template v-slot:option="scope">
                  <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
                    <q-item-section avatar>
                      <q-avatar v-if="scope.opt.src" size="60px" rounded>
                        <q-img :ratio="1" :src="scope.opt.src" />
                      </q-avatar>
                      <q-avatar v-else-if="scope.opt.icon" rounded size="60px" :icon="scope.opt.icon">
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
            </div>
            <div class="col-12 col-lg-2 row items-center" :class="$q.screen.lt.lg ? 'q-pt-xl q-px-lg' : 'q-ml-sm'">
              <q-range dense v-model="socket" color="green-9" label-text-color="text-weight-bold" :min="2" :max="6" snap
                label-always markers />
            </div>
          </div>
          <div class="col-12 col-md-4 row justify-end q-col-gutter-sm">
            <div class="col-12 col-lg-5">
              <q-select :transition-show="$q.screen.lt.md ? 'slide-up' : 'none'"
                :transition-hide="$q.screen.lt.md ? 'slide-down' : 'none'" menu-self="center left" color="amber-9"
                popup-content-style="border:solid 1px #888888" v-model="selectedSort" :options="sortOptions"
                dropdown-icon="keyboard_arrow_down" :label="$t('d2r.knowledge.items.sort')" dense outlined emit-value
                map-options no-error-icon menu-shrink options-dense />
            </div>
            <div class="col-12 col-lg-5">
              <q-input dense debounce="400" :label="$t('btn.search')" color="title" v-model="filter">
                <template v-slot:append>
                  <q-icon name="search" color="title" />
                </template>
              </q-input>
            </div>
          </div>
        </div>
      </template>
      <template #body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            <div class="text-h6 word-keep text-amber-6 column">
              <div class="col">
                {{props.row.name}}
              </div>
              <div v-if="props.row.oldName" class="text-body1 text-brown">({{props.row.oldName}})</div>
              <div class="col text-teal-4 text-subtitle2">clvl
                {{props.row.level}}
              </div>
              <div class="col q-gutter-x-xs">
                <q-badge color="red" v-if="props.row.hot === true">
                  {{$t('d2r.knowledge.items.hot')}}
                </q-badge>
                <q-badge color="blue" v-if="props.row.recc.includes('beginner')">{{$t('d2r.knowledge.items.beginner')}}
                </q-badge>
              </div>
            </div>
          </q-td>
          <q-td key="material" :props="props">
            <div class="text-subtitle1 word-keep column">
              <div class="col" v-for="(m, idx) in parsMaterial(props.row.materials)" :key="idx">{{m}}<span
                  class="text-red-5">({{props.row.runeword.length}})</span>
              </div>
            </div>
          </q-td>
          <q-td key="stats" :props="props">
            <ul class="column text-body2 stats">
              <li v-for="(stat, idx) in props.row.stats" :key="idx" class="col word-keep" v-html="stat">
              </li>
            </ul>
            <ul class="column text-body2 stats">
              <li v-for="(p, idx) in props.row.part" :key="idx" class="col word-keep part" v-html="p">
              </li>
            </ul>
          </q-td>
          <q-td key="runeword" :props="props">
            <div class="row items-baseline">
              <template v-for="(rune, idx) in parsRuneWord(props.row.runeword)">
                <div v-if="idx !== 0" class="word-keep" :key="`name_${idx}`">
                  <q-icon size="sm" color="grey-8" name="add" />
                </div>
                <div class="col column items-center content-center" :key="`img_${idx}`" style="height:140px">
                  <div class="col">
                    <img :src="require(`@/assets/images/d2r/items/runes/${rune.file}.png`)" />
                  </div>
                  <div class="col-4 row items-center text-body1 word-keep">
                    {{rune.name}}
                  </div>
                  <div class="col text-body1 text-title">
                    ({{rune.no}})
                  </div>
                </div>
              </template>
            </div>
          </q-td>
        </q-tr>
      </template>
      <template #item="props">
        <div class="col-md-6 col-12">
          <q-card class="d2r-card text-center" bordered>
            <q-card-section class="text-grey-6 text-h6 word-keep q-pa-xs">
              <div class="text-h6 word-keep text-amber-6 column">
                <div class="col">{{props.row.name}}<span class="text-body1 text-brown" v-if="props.row.oldName">
                    ({{props.row.oldName}})</span></div>
                <div class="col text-teal-4 text-subtitle2">clvl
                  {{props.row.level}}
                </div>
                <div class="col q-gutter-x-xs">
                  <q-badge color="red" v-if="props.row.hot === true">{{$t('d2r.knowledge.items.hot')}}
                  </q-badge>
                </div>
              </div>
            </q-card-section>
            <q-separator />
            <q-card-section class="q-pa-xs">
              <div class="text-subtitle2 word-keep row justify-around">
                <div v-for="(m, idx) in parsMaterial(props.row.materials)" :key="idx">{{m}}<span
                    class="text-red-5">({{props.row.runeword.length}})</span>
                </div>
              </div>
            </q-card-section>
            <q-separator />
            <q-card-section class="q-pa-xs">
              <ul class="column text-caption stats">
                <li v-for="(stat, idx) in props.row.stats" :key="idx" class="col word-keep" v-html="stat">
                </li>
              </ul>
              <ul class="column text-body2 stats" v-if="props.row.part">
                <li v-for="(p, idx) in props.row.part" :key="idx" class="col word-keep part" v-html="p">
                </li>
              </ul>
            </q-card-section>
            <q-separator />
            <q-card-section class="q-pa-xs">
              <div class="row justify-center full-width items-start content-center">
                <template v-for="(rune, idx) in parsRuneWord(props.row.runeword)">
                  <div class="col-2 column items-center content-center" :key="`img_${idx}`">
                    <div class="row items-center">
                      <img :src="require(`@/assets/images/d2r/items/runes/${rune.file}.png`)" style="width:30px" />
                    </div>
                    <div class="row items-center word-keep" style="font-size: 0.6em">
                      {{rune.name}}
                    </div>
                    <div class="row items-center text-caption text-title">
                      ({{rune.no}})
                    </div>
                  </div>
                </template>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </template>
    </q-table>
    <div v-if="pagesNumber.length !== 0" class="mobile-only row justify-center full-width q-mt-md">
      <q-pagination color="title" v-model="pagination.page" :max="pagesNumber" :max-pages="$q.screen.gt.sm ? 5 : 3"
        :ellipses="false" direction-links :boundary-numbers="false" :boundary-links="$q.screen.gt.sm" />
    </div>
    <p class="q-mt-xl text-right text-grey-6" :class="$q.screen.lt.md ? 'text-caption' : ''">
      {{$t('d2r.knowledge.source')}} : <a style="text-decoration: none;" class="text-green-4" target="_blank"
        href="https://namu.wiki/w/%EB%A3%AC%EC%96%B4%20%EC%95%84%EC%9D%B4%ED%85%9C">{{$t('d2r.knowledge.namuWiki')}}</a>
      & <a style="text-decoration: none;" class="text-red-6" target="_blank"
        href="https://www.purediablo.com/diablo-2/runewords/">{{$t('d2r.knowledge.pureDiablo')}}</a>
    </p>
  </div>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'

  export default {
    data() {
      return {
        pagination: {
          page: 1,
          rowsPerPage: this.$q.platform.is.mobile ? 10 : 10000
        },
        filter: '',
        columns: [
          { name: 'name', label: this.$t('d2r.knowledge.items.runewordName'), align: 'center', style: 'width:20%' },
          { name: 'material', label: this.$t('d2r.knowledge.items.runewordMaterial'), align: 'center', style: 'width:10%' },
          { name: 'stats', label: this.$t('d2r.knowledge.items.runewordStats'), align: 'center' },
          { name: 'runeword', label: this.$t('d2r.knowledge.items.runeword'), align: 'center', style: 'width:40%' },
        ],
        runes: this.$t('d2r.knowledge.items.runeData').map(r => ({ ...r, selected: false })),
        own: false,
        selectedMaterial: 0,
        selectedClass: 'all',
        selectedSort: 'hot',
        socket: {
          min: 2,
          max: 6
        },
        materials: this.$t('d2r.knowledge.items.materials'),
        runeWords: [],
        meterialOptions: this.$t('d2r.knowledge.items.materials').map(m => { return { 'label': m.name, 'value': m.no } }),
        sortOptions: [{ 'label': this.$t('d2r.knowledge.items.hot'), 'value': 'hot' }, { 'label': this.$t('d2r.knowledge.items.runewordName'), 'value': 'name' }, { 'label': this.$t('d2r.knowledge.items.level'), 'value': 'level' }]
      }
    },
    watch: {
      'pagination.page': function (val, old) {
        if (val !== old)
          window.scrollTo(0, 0)
      }

    },
    created() {
      this.$i18n.mergeLanguageAsync('rune').then(() => {
        this.runeWords = this.$t('runeWords')
      })
    },
    computed: {
      ...mapGetters({
        d2rClass: 'getD2RClass'
      }),
      d2rClassOptions() {
        return [{ 'value': 'all', 'label': this.$t('d2r.knowledge.items.all'), 'icon': 'groups' }, { 'value': 'beginner', 'label': this.$t('d2r.knowledge.items.beginner'), 'icon': 'person' }, ...this.d2rClass.map(c => ({ value: c.id, label: c.name, src: require(`@/assets/images/d2r/classes/face/${c.id}.png`) })), { 'value': 'mercenary', 'label': this.$t('d2r.knowledge.items.mercenary'), 'src': require('@/assets/images/d2r/items/etc/mercenary.png') }]
      },
      pagesNumber() {
        return Math.ceil(this.filtering.length / this.pagination.rowsPerPage)
      },
      filtering() {
        let result = []
        const selectedRunes = this.runes.filter(r => r.selected === true).map(r => r.no)
        let resultRuneWords = this.selectedMaterial === 0 ? this.runeWords : this.selectedMaterial === 1 ? this.runeWords.filter(r => r.materials.filter(m => ![2, 3, 4, 5].includes(m)).length > 0) : this.runeWords.filter(r => r.materials.includes(this.selectedMaterial))

        resultRuneWords = this.selectedClass === 'all' ? resultRuneWords : resultRuneWords.filter(r => r.recc.includes(this.selectedClass))
        resultRuneWords = resultRuneWords.filter(r => r.runeword.length >= this.socket.min && r.runeword.length <= this.socket.max)

        if (this.selectedSort === 'name')
          resultRuneWords.sort((a, b) => {
            a = a.name.toLowerCase()
            b = b.name.toLowerCase()
            if (a < b) return -1
            if (a > b) return 1
            return 0
          })
        else if (this.selectedSort === 'hot')
          resultRuneWords.sort((a, b) => {
            return (a.hot === b.hot) ? 0 : b.hot === true ? 1 : -1
          })
        else if (this.selectedSort === 'level')
          resultRuneWords.sort((a, b) => { return a.level - b.level })

        if (selectedRunes.length > 0) {
          if (this.own === true)
            result = resultRuneWords.filter(rw => rw.runeword.filter(r => !selectedRunes.includes(r)).length === 0)
          else
            result = resultRuneWords.filter(rw => selectedRunes.filter(r => !rw.runeword.includes(r)).length === 0)
        }
        else
          result = resultRuneWords

        if (this.filter !== '') {
          const terms = this.filter.toLowerCase().split(' ')
          result = result.filter(c => new RegExp(terms.join('|'), 'gi').test(c.name) || (c.oldName && new RegExp(terms.join('|'), 'gi').test(c.oldName)) || new RegExp(terms.join('|'), 'gi').test(c.stats.join('|')))
        }

        return result
      }
    },
    methods: {
      selectedRune(rune) {
        rune.selected = !rune.selected
      },
      refresh() {
        this.runes.filter(r => r.selected === true).forEach(r => { r.selected = false })
        this.own = false
        this.selectedMaterial = 0
        this.selectedClass = 'all'
        this.selectedSort = 'hot'
        this.socket.min = 2
        this.socket.max = 6
        this.filter = ''
      },
      parsRuneWord(runeword) {
        return runeword.map(r => this.runes.find(rl => rl.no === r))
      },
      parsMaterial(material) {
        let result = []
        if (material.includes(2) && material.filter(m => ![3, 4, 5].includes(m)).length > 2)
          result.push(this.$t('d2r.knowledge.items.allWeapon'))

        if (!material.includes(2) && material.filter(m => ![3, 4, 5].includes(m)).length > 3)
          result.push(this.$t('d2r.knowledge.items.meleeWeapon'))

        if (result.length > 0 && material.filter(m => [3, 4, 5].includes(m)).length > 0)
          result = [...result, ...material.filter(m => [3, 4, 5].includes(m)).map(m => this.materials.find(ms => ms.no === m).name)]
        else if (result.length === 0)
          result = material.map(m => this.materials.find(ms => ms.no === m).name)

        return result
      }
    }
  }
</script>
<style scoped>
  .stats {
    padding-left: 0;
    list-style: none;
  }

  .stats li {
    line-height: 1.4em;
    color: rgba(100, 100, 250, 1);
  }

  .stats li.part {
    color: rgba(150, 50, 0, 1);
  }

  .rune .selected {
    border-radius: 10px;
    box-shadow: inset 0 0 0 2px rgba(184, 156, 91, 1);
    background-color: rgba(184, 156, 91, .2);
  }

  .rune .selected .rune-name {
    color: rgba(184, 106, 40, 1);
    font-weight: bold;
  }

  .rune {
    width: 7%;
  }

  @media screen and (max-width:1023px) {
    .rune-name {
      font-size: 0.7em;
      line-height: 1.2em;
    }

    .rune {
      min-width: 10% !important;
    }
  }

  @media screen and (max-width:599px) {
    .rune {
      min-width: 20% !important;
    }

    .rune .selected {
      border-radius: 4px;
      box-shadow: inset 0 0 0 1px rgba(184, 156, 91, 1);
    }
  }
</style>