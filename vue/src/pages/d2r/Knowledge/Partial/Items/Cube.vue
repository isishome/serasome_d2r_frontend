<template>
  <div>
    <q-table class="bg-transparent" table-class="d2r-table" card-container-class="q-col-gutter-md justify-center"
      :grid="$q.screen.lt.lg" :data="filtering" :columns="columns" row-key="name" :pagination.sync="pagination"
      hide-header hide-pagination>
      <template v-slot:no-data>
        <div class="row justify-center full-width text-body2">{{$t('d2r.knowledge.items.noData')}}</div>
      </template>
      <template v-slot:top>
        <div class="row justify-around q-gutter-x-sm items-end full-width">
          <div class="gt-sm col-9 q-gutter-x-md">
            <q-radio dense :size="$q.screen.lt.md ? 'xs' : 'sm'" v-for="c in classifies" :key="c.value" :val="c.value"
              v-model="classify" :label="c.label" color="title" />
          </div>
          <div class="lt-md col-12 col-sm">
            <q-select color="title" popup-content-style="border:solid 2px #b89c5b" v-model="classify"
              :options="classifies" dropdown-icon="keyboard_arrow_down" :label="$t('d2r.knowledge.items.recipeType')"
              behavior="menu" dense outlined emit-value map-options no-error-icon options-dense />
          </div>
          <div class="col">
            <q-input dense debounce="400" :label="$t('btn.search')" color="title" v-model="filter">
              <template v-slot:append>
                <q-icon name="search" color="title" />
              </template>
            </q-input>
          </div>
        </div>
      </template>
      <template #body="props">
        <q-tr no-hover :props="props">
          <q-td key="title" :props="props" :rowspan="props.row.recipe ? 2 : 1"
            :style="filtering.length-1 === props.rowIndex && props.row.recipe ? 'border:none' : ''">
            <div class="text-title text-h6 text-weight-bold word-keep column">
              <div class="font-kodia">{{props.row.title}}</div>
              <div>
                <q-badge color="yellow" text-color="black" v-if="props.row.version">{{'v'.concat(' ',
                  props.row.version)}}
                </q-badge>
              </div>
            </div>
          </q-td>
          <q-td key="desc" :props="props" :rowspan="props.row.recipe ? 2 : 1"
            :style="filtering.length-1 === props.rowIndex && props.row.recipe ? 'border:none' : ''">
            <ul class="column text-body">
              <li v-for="(d, idx) in props.row.desc" :key="idx" class="col word-keep" v-html="d">
              </li>
            </ul>
          </q-td>
          <q-td key="images" :props="props" :style="props.row.recipe ? 'border: none;' : ''">
            <div class="row justify-center items-center q-gutter-md">
              <q-img v-for="(img, idx) in props.row.images" :key="`img_${idx}`"
                :src="require(`@/assets/images/d2r/items/${img}`)"
                :class="props.row.images.length > 1 ? 'col-2' :  'col-6'" />
            </div>
          </q-td>
        </q-tr>
        <q-tr v-if="props.row.recipe" no-hover :props="props">
          <q-td key="recipe" :props="props">
            <div v-if="props.row.desc" class="row justify-center">
              <ul class="text-body">
                <li v-for="(r, idx) in props.row.recipe" :key="idx" class="word-keep" v-html="r">
                </li>
              </ul>
            </div>
          </q-td>
        </q-tr>
      </template>
      <template #item="props">
        <q-intersection transition="slide-up" once class="col-md-6 col-12 example-item">
          <q-card class="d2r-card" bordered>
            <q-card-section class="font-kodia text-title text-weight-bold text-h6 word-keep text-center">
              {{props.row.title}}
            </q-card-section>
            <q-separator />
            <q-card-section class="no-padding row justify-center">
              <ul class="no-margin text-caption">
                <li v-for="(d, idx) in props.row.desc" :key="idx" class="word-keep" v-html="d">
                </li>
              </ul>
            </q-card-section>
            <q-card-section class="q-pa-sm">
              <div class="row justify-center items-center q-gutter-x-md">
                <q-img v-for="(img, idx) in props.row.images" :key="`img_${idx}`"
                  :src="require(`@/assets/images/d2r/items/${img}`)"
                  :class="props.row.images.length > 1 ? 'col-2' :  'col-6'" />
              </div>
              <div v-if="props.row.recipe" class="row justify-center">
                <ul class="text-caption">
                  <li v-for="(r, idx) in props.row.recipe" :key="idx" class="word-keep" v-html="r">
                  </li>
                </ul>
              </div>
            </q-card-section>
          </q-card>
        </q-intersection>
      </template>
    </q-table>
    <p class="q-mt-xl text-right text-grey-6" :class="$q.screen.lt.md ? 'text-caption' : ''">
      {{$t('d2r.knowledge.source')}} :
      <a style="text-decoration: none;" class="text-green-4" target="_blank"
        href="https://namu.wiki/w/%ED%98%B8%EB%9D%BC%EB%93%9C%EB%A6%BC%EC%9D%98%20%ED%95%A8?from=%ED%98%B8%EB%9D%BC%EB%93%9C%EB%A6%AD%20%ED%81%90%EB%B8%8C">{{$t('d2r.knowledge.namuWiki')}}</a>
      & <a style="text-decoration: none;" class="text-red-6" target="_blank"
        href="https://www.purediablo.com/diablo-2/horadric-cube-recipes/">{{$t('d2r.knowledge.pureDiablo')}}</a>
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
          { name: 'title', align: 'center', style: 'width:20%' },
          { name: 'desc', align: 'left', style: 'width:50%' },
          { name: 'images', align: 'center' },
          { name: 'recipe', align: 'center' },
        ],
        data: [],
        classifies: [],
        classify: 'socket'
      }
    },
    computed: {
      filtering() {
        let result = this.data
        if (this.filter !== '') {
          const terms = this.filter.toLowerCase().split(' ')
          result = result.filter(c => new RegExp(terms.join('|'), 'gi').test(c.title) || new RegExp(terms.join('|'), 'gi').test(c.desc.join('|')) || (c.recipe && new RegExp(terms.join('|'), 'gi').test(c.recipe.join('|'))))
        }

        if (this.classify !== 'all')
          result = result.filter(r => r.classify === this.classify)

        return result
      }
    },
    created() {
      this.$i18n.mergeLanguageAsync('cube').then(() => {
        setTimeout(() => {
          this.classifies = this.$t('cubeClassifies')
          this.data = this.$t('cubeData')
        }, 0)
      })
    }
  }
</script>
<style scoped>
  ul {
    list-style: inside;
    padding: 0;
    padding: 10px 0 10px 10px;
  }

  li {
    padding: 2px;
    list-style-position: inside;
    text-indent: -20px;
    padding-left: 20px;
  }

  .example-item {
    min-height: 210px;
  }
</style>