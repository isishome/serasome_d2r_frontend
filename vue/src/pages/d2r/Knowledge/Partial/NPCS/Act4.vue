<template>
  <div class="knowledge">
    <d2r-table table-class="wrap" ref="table" :pagination.sync="pagination" mode="none" :data="data" :loading="false"
      @request="request" :grid="$q.screen.lt.lg">
      <template #body="{props}">
        <q-tr class="text-center npc-top">
          <q-td class="gradient-back2" rowspan="3">
            <q-img v-if="'izual' === props.row.voice" :src='props.row.image' width="120px" />
            <q-img v-else-if="'tyrael' === props.row.voice" :src='props.row.image' width="130px" />
            <q-img v-else :src='props.row.image' width="75px" />
          </q-td>
          <q-td class="font-kodia text-left text-title text-weight-bold bg-other" style="font-size: 1.8em;">
            {{props.row.name[locale]}}
          </q-td>
          <q-td rowspan="3">
            <q-btn push glossy icon="headset" color="grey-6" text-color="black" size="md" padding="4px" round dense
              @click="play(props.row.voice, $event)" />
          </q-td>
        </q-tr>
        <q-tr>
          <q-td class="table-row bg-other" style="text-indent: 10px;">
            {{props.row.desc[locale]}}
          </q-td>
        </q-tr>
        <q-tr>
          <q-td class="table-row text-grey-6 bg-other">
            <div v-for="(work, index) in props.row.work[locale]" :key="index">
              {{work}}
            </div>
          </q-td>
        </q-tr>
      </template>
      <template #item="{props}">
        <div class="q-pa-sm col-xs-12 col-sm-6">
          <q-card flat bordered class="bg-transparent d2r-card">
            <q-card-section class="text-center">
              <q-img v-if="'izual' === props.row.voice" :src='props.row.image' width="100%" />
              <q-img v-else-if="'tyrael' === props.row.voice" :src='props.row.image' width="100%" />
              <q-img v-else :src='props.row.image' width="100px" />
              <q-btn push glossy class="absolute-top-right" icon="headset" color="grey-6" text-color="black" size="sm"
                padding="4px" round dense @click="play(props.row.voice, $event)" style="margin: 10px 10px 0 0;" />
            </q-card-section>
            <q-card-section class="no-padding">
              <div class="text-h6 font-kodia text-title row justify-center text-weight-bold">
                <span> {{props.row.name[locale]}}</span>
              </div>
            </q-card-section>
            <q-card-section class="q-pa-sm">
              <div class="text-body row justify-start items-center table-row" style="text-indent: 5px;">
                <div>{{ props.row.desc[locale]}}</div>
              </div>
            </q-card-section>
            <q-popup-proxy v-if="props.row.work[locale].length > 0" :breakpoint="600">
              <div class="work-popup">
                <div class="column q-gutter-md table-row">
                  <div v-for="(work, index) in props.row.work[locale]" :key="index">
                    {{work}}
                  </div>
                </div>
              </div>
            </q-popup-proxy>
          </q-card>
        </div>
      </template>
    </d2r-table>
    <p class="text-right text-grey-6">{{$t('d2r.knowledge.source')}} : <a style="text-decoration: none;"
        class="text-title" target="_blank"
        href="http://classic.battle.net/diablo2exp/npcs/act4.shtml">{{$t('d2r.knowledge.arreatSummit')}}</a></p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        locale: this.$i18n.locale || 'ko',
        pagination: {
          page: 1,
          rowsPerPage: 100
        },
        data: [
          {
            image: require('@/assets/images/d2r/npcs/deckardcain.gif'),
            name: { en: 'Deckard Cain', ko: '데커드 케인' },
            desc: {
              en: 'A Horadrim sage, schooled in the most arcane history and lore, who can advise you.',
              ko: '당신에게 조언을 해줄 수있는 가장 신비로운 역사와 지식을 가진 호라드림 현자입니다.'
            },
            work: {
              en: ['Identify Items - Cain will Identify all of the unidentified Items in your Inventory and Horadric Cube.'],
              ko: ['아이템 식별 - 케인은 인벤토리에있는 미확인 아이템을 모두 식별합니다.']
            },
            voice: 'cain'
          },
          {
            image: require('@/assets/images/d2r/npcs/hadriel.gif'),
            name: { en: 'Hadriel', ko: '하드리엘' },
            desc: {
              en: 'Guards the way into the Chaos Sanctuary.',
              ko: '혼돈의 성지로 들어가는 길을 경비합니다.'
            },
            work: {
              en: [],
              ko: []
            },
            voice: 'hadriel'
          },
          {
            image: require('@/assets/images/d2r/npcs/halbu.gif'),
            name: { en: 'Halbu', ko: '할부' },
            desc: {
              en: 'Male warrior shopkeeper.',
              ko: '남전사용품 가게주인'
            },
            work: {
              en: [
                'Repair - Repair damaged Weapons and Armor for a price.',
                'Trade - Sells Armor, Weapons, Bolts and Arrows.'],
              ko: [
                '수리 - 파손된 무기와 갑옷을 비용을 지불하면 수리해줍니다.',
                '거래 - 갑옷, 무기, 볼트, 화살을 판매합니다.']
            },
            voice: 'halbu'
          },
          {
            image: require('@/assets/images/d2r/npcs/jamella.gif'),
            name: { en: 'Jamella', ko: '자멜라' },
            desc: {
              en: 'Female warrior shopkeeper.',
              ko: '여전사용품 가게주인'
            },
            work: {
              en: ['Heals - Jamella will refill your Life, Mana and Stamina for free.',
                'Trade - Sells Armor, Weapons, Staves, Wands, Scepters, Tomes, Potions, and Scrolls.',
                'Gamble - For a price, Jamella will sell you an unidentified item. Once purchased, the item will be identified and you will see what item you received.'],
              ko: [
                '치유 - 자멜라는 당신의 생명력, 마나, 체력을 무료로 채워줄 것입니다',
                '거래 - 갑옷, 무기, 지팡이, 마법봉, 셉터, 고서, 물약 그리고 스크롤을 판매합니다.',
                '도박 - 돈을 지불하면 자멜라가 정체불명의 물건을 당신에게 팔 것입니다. 구입하면 해당 물건이 식별되고 어떤 물건을 받았는지 확인할 수 있습니다.']
            },
            voice: 'jamella'
          },
          {
            image: require('@/assets/images/d2r/npcs/izual.gif'),
            name: { en: 'Izual', ko: '이주얼' },
            desc: {
              en: 'Once a trusted companion of Tyrael, Izual fell from the graces of heaven. Now trapped within a demonic husk in the forsaken realms beyond the Pandemonium Fortress, you must find and release him to find out the dark secrets he holds.',
              ko: '한때 티리엘의 믿을수 있는 동반자였던 이주얼은 천국에서 떨어졌습니다. 이제 팬더모니엄 요새 너머의 버려진 영토에있는 악마의 껍질에 갇힌 상태의 그가 가지고 있는 어두운 비밀들을 알아내려면 그를 찾아서 풀어줘야 합니다.'
            },
            work: {
              en: [],
              ko: []
            },
            voice: 'izual'
          },
          {
            image: require('@/assets/images/d2r/npcs/tyrael.gif'),
            name: { en: 'Tyrael', ko: '티리엘' },
            desc: {
              en: 'The Archangel Tyrael. He came here to prevent Diablo from freeing his brother, Baal, but he has failed. Now Terror and Destruction roam free throughout the world.',
              ko: '대천사 티리엘. 그는 디아블로가 그의 동생 바알을 풀어주는 것을 막기 위해 이곳에 왔지만, 실패합니다. 이제 공포와 파괴가 세상에 만연하게 됩니다.'
            },
            work: {
              en: [],
              ko: []
            },
            voice: 'tyrael'
          }
        ]
      }
    },
    methods: {
      request({ done }) {
        done()
      },
      play(name, event) {
        event.stopPropagation()

        if (name) {
          var audio = new Audio(require(`@/assets/wavs/d2r/npcs/${name}.wav`));
          audio.play()
        }
      }
    }
  }
</script>
<style scoped>
  .wrap {
    max-width: 100%;
    box-shadow: 0 0 0 1px rgba(30, 30, 30, 1) !important;
    border-radius: 4px;
  }

  .body--light .wrap {
    box-shadow: 0 0 0 1px rgba(200, 200, 200, 1) !important;
  }

  .body--light tbody tr {
    background-color: rgba(245, 245, 245, 1) !important;
  }

  tbody td {
    font-size: 1.2em;
    line-height: 1.8em;
    white-space: normal !important;
  }

  tbody tr>td::before {
    background-color: transparent !important;
  }

  .npc-top td {
    border-top: solid 1px rgba(33, 33, 33, 1);
  }

  .body--light .npc-top td {
    border-top: solid 1px rgba(200, 200, 200, 1);
  }

  thead th {
    font-weight: bold !important;
    font-size: 1.2em !important;
    font-family: 'Kodia';
  }

  .work-popup {
    padding: 20px 10px;
    background-color: rgba(16, 16, 16, 1) !important;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
    color: rgba(184, 156, 91, 1);
    box-shadow: inset 1px 1px 1px 1px rgba(184, 156, 91, 1), inset -1px -1px 1px 1px rgba(184, 156, 91, .6), inset 0 0 4px 4px rgba(0, 0, 0, 1);
    border-radius: 4px;
  }

  .body--light .work-popup {
    background-color: rgb(231, 215, 177) !important;
    color: rgba(10, 10, 10, 1);
    text-shadow: none;
    box-shadow: inset 0 0 0 1px rgba(50, 50, 50, 1);
  }

  .table-row {
    text-align: left;
    word-break: keep-all;
    text-overflow: ellipsis;
  }
</style>