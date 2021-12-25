<template>
  <div>
    <q-table class="bg-transparent" table-class="d2r-table" card-container-class="q-col-gutter-md justify-center"
      :grid="$q.screen.lt.lg" :data="filtering" :columns="columns" row-key="name" :pagination.sync="pagination"
      hide-header hide-pagination>
      <template v-slot:no-data>
        <div class="row justify-center full-width text-body2">{{$t('d2r.knowledge.items.noData')}}</div>
      </template>
      <template v-slot:top>
        <div class="row justify-end full-width">
          <q-input dense debounce="400" :label="$t('btn.search')" color="title" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" color="title" />
            </template>
          </q-input>
        </div>
      </template>
      <template #body="props">
        <q-tr :props="props">
          <q-td key="title" :props="props">
            <div class="font-kodia text-h5 word-keep">{{props.row.title}}</div>
          </q-td>
          <q-td key="desc" :props="props">
            <ul class="column text-subtitle1">
              <li v-for="(n, idx) in props.row.notice" :key="idx" class="col word-keep" v-html="n">
              </li>
            </ul>
          </q-td>
          <q-td key="recipe" :props="props">
            <div class="row justify-around items-center">
              <div v-for="(img, idx) in props.row.recipe" :key="`img_${idx}`"
                :class="`col${props.row.width ? '' : '-2'}`">
                <img :src="require(`@/assets/images/d2r/items/${img}`)"
                  :style="`max-width: ${props.row.width ? props.row.width : '100%'};`" />
              </div>
            </div>
            <div v-if="props.row.desc" class="row justify-center text-left">
              <ul class="column text-subtitle1">
                <li v-for="(d, idx) in props.row.desc" :key="idx" class="col word-keep" v-html="d">
                </li>
              </ul>
            </div>
          </q-td>
        </q-tr>
      </template>
      <template #item="props">
        <div class="col-md-6 col-12">
          <q-card class="d2r-card" bordered>
            <q-card-section class="font-kodia text-h6 word-keep">{{props.row.title}}</q-card-section>
            <q-separator />
            <q-card-section class="no-padding">
              <ul class="no-margin column text-caption">
                <li v-for="(n, idx) in props.row.notice" :key="idx" class="col word-keep" v-html="n">
                </li>
              </ul>
            </q-card-section>
            <q-card-section class="no-padding">
              <div class="row justify-between items-center text-center">
                <div v-for="(img, idx) in props.row.recipe" :key="`img_${idx}`"
                  :class="`col${props.row.width ? '' : '-4'}`">
                  <img :src="require(`@/assets/images/d2r/items/${img}`)"
                    :style="`max-width: ${props.row.width ? props.row.width : '30px'};`" />
                </div>
              </div>
              <div v-if="props.row.desc" class="row justify-center">
                <ul class="column text-caption">
                  <li v-for="(d, idx) in props.row.desc" :key="idx" class="col word-keep" v-html="d">
                  </li>
                </ul>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </template>
    </q-table>
    <div v-if="pagesNumber !== 0" class="mobile-only row justify-center full-width q-mt-md">
      <q-pagination color="title" v-model="pagination.page" :max="pagesNumber" :max-pages="$q.screen.gt.sm ? 5 : 3"
        :ellipses="false" direction-links :boundary-numbers="false" :boundary-links="$q.screen.gt.sm" />
    </div>
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
          rowsPerPage: this.$q.platform.is.mobile ? 10 : 10000
        },
        filter: '',
        columns: [
          { name: 'title', align: 'center', style: 'width:20%' },
          { name: 'desc', align: 'left' },
          { name: 'recipe', align: 'center', style: 'width:25%' }
        ],
        data: []
      }
    },
    watch: {
      'pagination.page': function (val, old) {
        if (val !== old)
          window.scrollTo(0, 0)
      }
    },
    computed: {
      pagesNumber() {
        return Math.ceil(this.filtering.length / this.pagination.rowsPerPage)
      },
      filtering() {
        let result = this.data
        if (this.filter !== '') {
          const terms = this.filter.toLowerCase().split(' ')
          result = result.filter(c => new RegExp(terms.join('|'), 'gi').test(c.title) || new RegExp(terms.join('|'), 'gi').test(c.notice.join('|')) || (c.desc && new RegExp(terms.join('|'), 'gi').test(c.desc.join('|'))))
        }

        return result
      }
    },
    created() {
      this.$i18n.mergeLanguageAsync('cube').then(() => {
        this.data = this.$t('cubeData')
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
</style>