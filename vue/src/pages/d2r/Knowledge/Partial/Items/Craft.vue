<template>
  <div>
    <div class="row justify-start items-center word-keep">
      <template v-for="(n, idx) in notice">
        <div :class="[$q.dark.isActive ? 'text-orange' : '', $q.screen.lt.md ? 'text-caption' : 'text-subtitle1']"
          :key="`t_${idx}`">
          {{n.desc}}
        </div>
        <ul
          :class="[$q.dark.isActive ? 'text-amber-4' : 'text-grey-8', $q.screen.lt.md ? 'text-caption' : 'text-body2']"
          :key="`d_${idx}`">
          <li v-for="(d, idx2) in n.detail" :key="`d_${idx}_${idx2}`">
            {{d}}
          </li>
        </ul>
      </template>
    </div>
    <div class="row justify-between items-center q-col-gutter-sm">
      <div class="col-12 col-sm-8 col-md-9">
        <q-checkbox v-for="c in data" :key="c.id" v-model="c.selected" :label="c.name" :color="c.color"
          @input="select" />
      </div>
      <div class="col-12 col-sm-4 col-md-3">
        <q-input dense debounce="400" :label="$t('btn.search')" color="title" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" color="title" />
          </template>
        </q-input>
      </div>
    </div>
    <template v-for="c in filtering">
      <q-table v-if="c.selected === true" :key="c.id" class="q-mt-lg bg-transparent" table-class="d2r-table"
        card-container-class="q-col-gutter-md justify-center" :grid="$q.screen.lt.lg" :data="c.filterList"
        :columns="columns" row-key="name" :pagination.sync="pagination" hide-pagination bordered>
        <template v-slot:no-data>
          <div class="row justify-center full-width text-body2">{{$t('d2r.knowledge.items.noData')}}</div>
        </template>
        <template v-slot:top>
          <div class="row full-width" :class="$q.screen.lt.md ? 'justify-center' : 'justify-start'">
            <div class="font-kodia">
              <q-chip size="18px" :icon="c.icon" :color="c.color" text-color="white">
                {{c.name}}</q-chip>
            </div>
          </div>
        </template>
        <template #body="props">
          <q-tr :props="props">
            <q-td key="material">
              <div class="row justify-center items-center">
                <div class="col-12 font-kodia text-title text-h6 text-center text-weight-bold word-keep">
                  {{materials.find(m => m.no === props.row.material).name}}
                </div>
                <q-badge color="red" v-if="props.row.hot === true">
                  {{$t('d2r.knowledge.items.hot')}}
                </q-badge>
              </div>
            </q-td>
            <q-td key="recipe">
              <div
                class="row no-wrap justify-between items-stretch q-gutter-x-sm full-width text-body2 text-center word-keep q-py-md">
                <div class="col-4 column items-center full-height">
                  <div class="col-6 q-pa-md">
                    <img :src="require(`@/assets/images/d2r/items/${props.row.recipe.equipment.img}`)"
                      style="max-width:80px;max-height: 80px;" />
                  </div>
                  <div class="col-6 column items-center full-height">
                    <div class="col">
                      <q-chip size="12px" class="text-caption" color="indigo-7" text-color="white">
                        {{props.row.recipe.equipment.type}}
                      </q-chip>
                    </div>
                    <div class="col" v-for="(n, idx) in props.row.recipe.equipment.name" :key="idx">
                      {{n}}</div>
                  </div>
                </div>
                <div class="row items-center">
                  <q-icon size="sm" color="grey-8" name="add" />
                </div>
                <template v-for="(cr, idx) in c.common.recipe">
                  <div v-if="idx !== 0" :key="`sp_${idx}`" class="row items-center">
                    <q-icon size="sm" color="grey-8" name="add" />
                  </div>
                  <div class="col column items-center q-gutter-sm" :key="`ct_${idx}`">
                    <div class="col-6 row items-center">
                      <q-img :src="require(`@/assets/images/d2r/items/${cr.img}`)" width="50px" />
                    </div>
                    <div class="col" v-html="cr.name"></div>
                  </div>
                </template>
                <div class="row items-center">
                  <q-icon size="sm" color="grey-8" name="add" />
                </div>
                <div class="col column items-center q-gutter-sm">
                  <div class="col-6 row items-center">
                    <q-img
                      :src="require(`@/assets/images/d2r/items/runes/${runes.find(r => r.no === props.row.recipe.rune).file}.png`)"
                      width="50px" />
                  </div>
                  <div class="col">{{runes.find(r => r.no === props.row.recipe.rune).name}}
                  </div>
                </div>
              </div>
            </q-td>
            <q-td key="effects">
              <ul class="text-subtitle2 word-keep" style="color:rgba(100, 100, 250, 1)">
                <li v-for="(ce, idx) in c.common.effects" :key="`ce_${idx}`">
                  {{ce}}
                </li>
                <li class="text-body1 text-orange-8" v-for="(ef, idx) in props.row.effects" :key="`e_${idx}`">
                  {{ef}}
                </li>
              </ul>
            </q-td>
          </q-tr>
        </template>
        <template #item="props">
          <q-intersection transition="slide-up" once class="col-md-6 col-12 example-item">
            <q-card class="d2r-card text-center word-keep" :class="$q.screen.lt.sm ? 'text-caption' : 'text-body2'"
              bordered>
              <q-card-section class="q-pa-xs bg-yellow-9 text-black">
                <div class="row justify-center items-center q-gutter-x-sm">
                  <div class="font-kodia text-subtitle1 text-weight-bold">
                    {{materials.find(m => m.no === props.row.material).name}}
                  </div>
                  <q-badge color="red" v-if="props.row.hot === true">
                    {{$t('d2r.knowledge.items.hot')}}
                  </q-badge>
                </div>
              </q-card-section>
              <q-separator />
              <q-card-section class="q-pa-xs">
                <div class="column items-center full-width">
                  <div class="col-6 q-pa-md">
                    <img :src="require(`@/assets/images/d2r/items/${props.row.recipe.equipment.img}`)"
                      style="max-width:100px;max-height: 100px;" />
                  </div>
                  <div class="col row no-wrap justify-center items-start q-gutter-x-sm">
                    <div v-for="(n, idx) in props.row.recipe.equipment.name" :key="idx" class="col column items-center">
                      <div>
                        <q-chip size="sm" color="indigo-7" text-color="white">
                          {{props.row.recipe.equipment.type}}
                        </q-chip>
                      </div>
                      <div :class="$q.screen.lt.sm ? 'text-small' : ''">{{n}}</div>
                    </div>
                  </div>
                </div>
              </q-card-section>
              <q-card-section class="q-pa-xs row justify-center">
                <div>
                  <q-icon dense size="12px" color="grey-8" name="add" />
                </div>
              </q-card-section>
              <q-card-section class="q-pa-sm">
                <div class="row justify-center items-stretch q-gutter-x-xs full-width">
                  <template v-for="(cr, idx) in c.common.recipe">
                    <div class="row items-center" v-if="idx !== 0" :key="`sp_${idx}`">
                      <q-icon dense size="12px" color="grey-8" name="add" />
                    </div>
                    <div :key="`cr_${idx}`" class="col column items-center q-gutter-y-sm">
                      <div class="row items-center">
                        <q-img :src="require(`@/assets/images/d2r/items/${cr.img}`)" width="30px" />
                      </div>
                      <div :class="$q.screen.lt.sm ? 'text-small' : ''" v-html="cr.name"></div>
                    </div>
                  </template>
                  <div class="row items-center">
                    <q-icon dense size="12px" color="grey-8" name="add" />
                  </div>
                  <div class="col column items-center q-gutter-y-sm">
                    <div class="row items-center">
                      <q-img
                        :src="require(`@/assets/images/d2r/items/runes/${runes.find(r => r.no === props.row.recipe.rune).file}.png`)"
                        width="30px" />
                    </div>
                    <div :class="$q.screen.lt.sm ? 'text-small' : ''">{{runes.find(r => r.no ===
                      props.row.recipe.rune).name}}
                    </div>
                  </div>
                </div>
              </q-card-section>
              <q-separator />
              <q-card-section class="q-pa-sm row justify-center text-caption">
                <ul class="text-left" style="color:rgba(100, 100, 250, 1)">
                  <li v-for="(ce, idx) in c.common.effects" :key="`ce_${idx}`">
                    {{ce}}
                  </li>
                  <li class="text-orange-8" v-for="(ef, idx) in props.row.effects" :key="`e_${idx}`">
                    {{ef}}
                  </li>
                </ul>
              </q-card-section>
            </q-card>
          </q-intersection>
        </template>
      </q-table>
    </template>
    <p class="q-mt-xl text-right text-grey-6" :class="$q.screen.lt.md ? 'text-caption' : ''">
      {{$t('d2r.knowledge.source')}} :
      <a style="text-decoration: none;" class="text-title" target="_blank"
        href="http://classic.battle.net/diablo2exp/items/crafteditems.shtml">{{$t('d2r.knowledge.arreatSummit')}}</a>
      & <a style="text-decoration: none;" class="text-red-6" target="_blank"
        href="https://www.purediablo.com/diablo-2/crafting-recipes/">{{$t('d2r.knowledge.pureDiablo')}}</a> &
      <a style="text-decoration: none;" class="text-orange-6" target="_blank"
        href="https://diablo2.wiki.fextralife.com/Crafting">{{$t('d2r.knowledge.diabloWiki')}}</a>
    </p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        pagination: {
          page: 1,
          rowsPerPage: 10000
        },
        filter: '',
        columns: [
          { name: 'material', label: this.$t('d2r.knowledge.items.thCraft'), align: 'center', headerStyle: 'width:20%' },
          { name: 'recipe', label: this.$t('d2r.knowledge.items.thRecipe'), align: 'center' },
          { name: 'effects', label: this.$t('d2r.knowledge.items.thFixedStats'), align: 'center', headerStyle: 'width:30%' }
        ],
        materials: this.$t('d2r.knowledge.items.materials'),
        runes: this.$t('d2r.knowledge.items.runeData'),
        notice: this.$t('d2r.knowledge.items.craftNotice'),
        data: []
      }
    },
    watch: {
    },
    created() {
      this.$i18n.mergeLanguageAsync('craft').then(() => {
        setTimeout(() => {
          this.data = this.$t('crafted').map(c => ({ ...c, selected: false }))
          this.data.find(c => c.id === 'caster').selected = true
        }, 0)
      })
    },
    computed: {
      pagesNumber() {
        return Math.ceil(this.filtering.length / this.pagination.rowsPerPage)
      },
      filtering() {
        const vm = this

        if (this.filter !== '') {
          const terms = this.filter.toLowerCase().split(' ')
          const regEx = new RegExp(terms.join('|'), 'gi')
          this.data.forEach(function (sec) {
            sec.filterList = sec.list.filter(l => regEx.test(vm.materials.find(m => m.no === l.material).name) || regEx.test(l.recipe.equipment.name.split('<br>').join('|')) || regEx.test(l.effects.join('|')))
          })
        }
        else
          return this.data.map(d => ({ ...d, filterList: [...d.list] }))

        return this.data
      }
    },
    methods: {
      select(val) {
        if (val === false && this.data.filter(d => d.selected === true).length === 0)
          this.data[0].selected = true
      }
    }
  }
</script>
<style scoped>
  .example-item {
    min-height: 400px;
  }
</style>