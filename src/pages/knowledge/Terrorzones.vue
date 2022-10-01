<script setup>
import { inject, ref, reactive, computed, onUnmounted } from 'vue'
import { useQuasar, date } from 'quasar'
import { useI18n } from 'vue-i18n'

const axios = inject('axios')
const $q = useQuasar()
const { t, tm } = useI18n()

const terrorZone = reactive({})
const terrorZones = computed(() => tm('terrorzonesData'))
const immunities = computed(() => tm('immunities'))
const lang = computed(() => tm('terrorzonesLang'))
const hour = 60 * 60 * 1000

const calc = () => {
  const now = Date.now()
  const start = Math.floor(now / hour) * hour
  const span = start + hour - now
  if (span < 2000) {
    setTimeout(() => {
      getInfo()
    }, 3000)
  }
  return date.formatDate(span, 'mm:ss')
}

const timeRemaining = ref(calc())

const time = setInterval(() => {
  timeRemaining.value = calc()
}, 1000)

const getInfo = () => {
  axios.get('/d2r/knowledge/terrorzones')
    .then((response) => {
      if (response && response.data && response.data.terrorZone) {
        const act = response.data.terrorZone.act
        const zone = response.data.terrorZone.zone.split(/\s/).map(z => z.charAt(0).toLowerCase()).join('')
        const findZone = terrorZones.value[act].zones.find(z => z.value === zone)

        if (findZone)
          Object.assign(terrorZone, findZone)
      }
    })
}

onUnmounted(() => {
  clearInterval(time)
})

getInfo()
</script>

<template>
  <div>
    <div class="font-kodia text-center text-h4 text-weight-bold text-primary q-pt-sm q-pb-xl word-keep">
      {{tm('d2r.knowledge.list').find(l => l.value === 'terrorzones').name}}
    </div>
    <q-card v-if="terrorZone.value" class="terror-zone no-shadow text-body2 word-keep">
      <q-card-section horizontal>
        <q-img src="/images/knowledge/terrorzones/back.webp">
          <div class="absolute-bottom">
            <div class="text-h6">{{terrorZone.label}}</div>
            <div class="text-subtitle2">{{terrorZone.superUniques}}</div>
          </div>
        </q-img>
        <q-card-section class="column justify-between items-start q-gutter-y-sm word-keep" style="min-width:120px">
          <div class="row justify-center q-gutter-x-xs text-caption">
            <q-tooltip anchor="top middle" self="center middle">
              {{lang.immunities}}
            </q-tooltip>
            <div v-for="i in terrorZone.immunities" :key="i.value" :style="`color:${immunities[i].color}`">
              {{immunities[i].label}}</div>
          </div>
          <div class="row items-center q-gutter-x-sm no-wrap">
            <q-icon name="inbox" size="sm">
              <q-tooltip anchor="top middle" self="center middle">
                {{lang.bossPacks}}
              </q-tooltip>
            </q-icon>
            <div>{{terrorZone.bossPacks.join(' - ')}}</div>
          </div>
          <div class="row items-center q-gutter-x-sm no-wrap">
            <q-icon color="yellow-8" name="inventory_2" size="sm">
              <q-tooltip anchor="top middle" self="center middle">
                {{lang.sparklyChests}}
              </q-tooltip>
            </q-icon>
            <div>{{terrorZone.sparklyChests === 0 ? '' : terrorZone.sparklyChests}}</div>
          </div>
          <div class="row items-center q-gutter-x-sm no-wrap">
            <q-icon name="schedule" size="sm">
              <q-tooltip anchor="top middle" self="center middle">
                {{lang.timeRemaining}}
              </q-tooltip>
            </q-icon>
            <div class="text-body1">{{timeRemaining}}</div>
          </div>
        </q-card-section>
      </q-card-section>
    </q-card>
    <q-markup-table class="no-shadow knowledge-table text-body2" :wrap-cells="$q.screen.gt.sm" dense bordered
      separator="vertical">
      <thead>
        <tr>
          <th>{{lang.act}}</th>
          <th>{{lang.zone}}</th>
          <th>{{lang.immunities}}</th>
          <th>{{lang.bossPacks}}</th>
          <th>{{lang.superUniques}}</th>
          <th>{{lang.sparklyChests}}</th>
        </tr>
      </thead>
      <tbody v-for="(info, act) in terrorZones" :key="act">
        <tr v-for="(zone, idx) in info.zones" :key="zone.value">
          <th v-if="idx === 0" class="act" :rowspan="info.zones.length">
            {{info.label}}</th>
          <td class="text-subtitle2">{{zone.label}}</td>
          <td class="immunities">
            <div class="row justify-start q-gutter-x-xs text-caption">
              <div v-for="i in zone.immunities" :key="i.value" :style="`color:${immunities[i].color}`">
                {{immunities[i].label.charAt(0)}}</div>
            </div>
          </td>
          <td style="min-width:150px;text-align: center;">{{zone.bossPacks.join(' - ')}}</td>
          <td>{{zone.superUniques}}</td>
          <td style="min-width:150px;text-align: center;">{{zone.sparklyChests === 0 ? '' :zone.sparklyChests}}</td>
        </tr>
      </tbody>
    </q-markup-table>
    <p class="q-mt-xl text-right text-grey-6 text-body2" style="font-size: 1em;">{{t('d2r.knowledge.source')}} : <a
        style="text-decoration: none;color:#e2b34f" target="_blank"
        href="https://d2runewizard.com/terror-zone-tracker">d2runewizard</a>
    </p>
  </div>
</template>
<style scoped>
.terror-zone {
  margin: auto;
  min-width: 200px;
  max-width: 500px;
  margin-bottom: 5em;
  overflow: hidden;
}

.knowledge-table:deep(thead th) {
  font-size: 1.1em !important;
  font-weight: 700;
}

.knowledge-table:deep(thead) {
  background-color: var(--q-dark-cloud);
}

.body--dark .knowledge-table:deep(thead) {
  background-color: var(--q-light-cloud) !important;
}

.knowledge-table:deep(td:first-child) {
  border-left: 1px !important;
  border-left-style: solid !important;
  border-left-color: var(--q-dark-cloud) !important;
}

.body--dark .knowledge-table:deep(td:first-child) {
  border-left-color: var(--q-light-cloud) !important;
}

.knowledge-table:deep(tbody tr:first-child th),
.knowledge-table:deep(tbody tr:first-child td) {
  border-top: 1px !important;
  border-top-style: solid !important;
  border-top-color: var(--q-dark-cloud) !important;
}

.body--dark .knowledge-table:deep(tbody tr:first-child th),
.body--dark .knowledge-table:deep(tbody tr:first-child td) {
  border-top-color: var(--q-light-cloud) !important;
}

.act {
  color: var(--q-primary);
  min-width: 100px;
}

.immunities {
  min-width: 120px;
}
</style>