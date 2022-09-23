<script setup>
import { reactive } from 'vue'
import { useStore } from '@/stores'
import { useI18n } from 'vue-i18n'
import { mergeSection } from '@/i18n'


const store = useStore()
const { t, tm } = useI18n()

const secretData = reactive([])

const onload = (el) => {
  store.addImage({ 'element': el, 'src': el.src })
}

mergeSection('quests', 'secret2').then(() => {
  secretData.push(...tm('questsData')['secret2'])
})
</script>
  
<template>
  <div class="column quests word-keep text-body2">
    <div class="row justify-center items-center">
      <img :src="'/images/knowledge/quests/secret2/uberdia.gif'" style="max-width:125px" />
    </div>
    <div class="column items-start q-gutter-y-lg">
      <div v-for="(contents, index) in secretData" :key="index" class="full-width">
        <div class="text-h5">
          {{contents.label}}
        </div>
        <q-separator class="q-mb-md" />
        <div class="q-mb-xl">
          <img class="float-left q-mr-md q-mb-md box" :src="contents.image" @load="onload($event.target)"
            :style="`width:${contents.width ? contents.width : '16em'}`" />
          <p v-for="(d, idx) in contents.desc" :key="idx">
            {{d}}</p>
          <ul class="inline-block" v-if="contents.extra">
            <li v-for="(e, idx) in contents.extra" :key="idx" :class="contents.class">{{e}}</li>
          </ul>
        </div>
      </div>
    </div>
    <p class="q-mt-xl self-end text-grey-6 text-body2">{{t('d2r.knowledge.source')}} : <a style="text-decoration: none;"
        target="_blank"
        href="https://diablo-archive.fandom.com/wiki/Uber_Diablo_(Diablo_II)">{{t('d2r.knowledge.diabloWiki')}}</a>
      & <a style="text-decoration: none;" class=" text-green-4" target="_blank"
        href="https://namu.wiki/w/%EC%9A%B0%EB%B2%84%20%EB%94%94%EC%95%84%EB%B8%94%EB%A1%9C">{{t('d2r.knowledge.namuWiki')}}</a>
    </p>
  </div>
</template>

<style scoped>

</style>