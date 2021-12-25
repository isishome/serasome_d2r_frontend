<template>
  <div class="knowledge">
    <d2r-table table-class="wrap" ref="table" :pagination.sync="pagination" mode="none" :data="data" :loading="false"
      @request="request" :grid="$q.screen.lt.lg">
      <template #body="{props}">
        <q-tr class="text-center npc-top">
          <q-td class="gradient-back2" rowspan="3">
            <q-img :src='props.row.image' width="75px" />
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
              <q-img :src='props.row.image' width="75px" />
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
        href="http://classic.battle.net/diablo2exp/npcs/act3.shtml">{{$t('d2r.knowledge.arreatSummit')}}</a></p>
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
            image: require('@/assets/images/d2r/npcs/alkor.gif'),
            name: { en: 'Alkor', ko: '알커' },
            desc: {
              en: 'Potion dealer who would rather be somewhere else. He is pleasant, but seems distracted, perhaps even bored- always reading a book and mumbling strange words.',
              ko: '다른 곳에 있는 게 더 나을 것 같은 물약장수입니다. 그는 유쾌하지만, 산만해 보이고, 심지어 지루하기까지 합니다 - 항상 책을 읽고 이상한 말을 중얼거립니다.'
            },
            work: {
              en: [
                'Trade - Sells Potions.',
                'Gamble - For a price, Alkor will sell you an unidentified item. Once purchased, the item will be identified and you will see what item you received.'],
              ko: [
                '거래 - 물약을 판매합니다.',
                '도박 - 돈을 지불하면 알커가 정체불명의 물건을 당신에게 팔 것입니다. 구입하면 해당 물건이 식별되고 어떤 물건을 받았는지 확인할 수 있습니다.']
            },
            voice: 'alkor'
          },
          {
            image: require('@/assets/images/d2r/npcs/asheara.gif'),
            name: { en: 'Asheara', ko: '애쉬라' },
            desc: {
              en: 'This is the leader of the mercenary company known as "The Iron Wolves". She is tough but friendly and is always looking for ways to pay her expenses. She\'s the kind who would be on the front lines with her comrades, and getting into drunken brawls with them at the taverns.',
              ko: '이 사람은 "아이언 울프" 라고 알려진 용병 회사의 리더입니다. 그녀는 과격하지만 친절하고 항상 돈벌 궁리만 합니다. 그녀는 동료들과 함께 앞장서서 술집에서 취한 사람들과 싸움을 벌이는 타입입니다.'
            },
            work: {
              en: [
                'Hire - Allows you to hire Iron Wolves.',
                'Trade - Sells Armor, Weapons, Bolts, and Arrows.'],
              ko: [
                '고용 - 아이언 울프를 고용할 수 있습니다.',
                '거래 - 갑옷, 무기, 볼트, 화살을 판매합니다.']
            },
            voice: 'asheara'
          },
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
            image: require('@/assets/images/d2r/npcs/hratli.gif'),
            name: { en: 'Hratli', ko: '흐라틀리' },
            desc: {
              en: 'This sorcerer has mastered the ability to meld metal with magic. He claims a much higher price than most blacksmiths, but his work is the best of any mortal. Also his tongue is sharp as a blade and quick as a whip.',
              ko: '이 마법사는 금속에 마법의 힘을 불어넣는 능력을 터득했습니다. 그는 대부분의 대장장이들보다 더 높은 비용을 요구하지만, 그의 작품은 그누구보다 최고입니다. 또한 그의 혀는 칼날처럼 날카롭고 채찍처럼 빠르죠.'
            },
            work: {
              en: ['Repair - Repair damaged Weapons and Armor for a price.',
                'Trade - Sells Armor, Weapons, Bolts, Arrows, and Keys.'],
              ko: [
                '수리 - 파손된 무기와 갑옷을 비용을 지불하면 수리해줍니다.',
                '거래 - 갑옷, 무기, 볼트, 화살 그리고 열쇠를 판매합니다.']
            },
            voice: 'hratli'
          },
          {
            image: require('@/assets/images/d2r/npcs/meshif.gif'),
            name: { en: 'Meshif', ko: '메쉬프' },
            desc: {
              en: 'Shocked by the turn of events in Kurast, once the greatest city in the world, and his home-away-from-home.',
              ko: '한때 세계에서 가장 위대한 도시였던 그의 고향 쿠라스트에서 일어난 사건의 변화에 충격을 받았습니다.'
            },
            work: {
              en: [
                'Sail West - Allows players to sail west to Lut Gholein.'],
              ko: [
                '서쪽으로 항해 - 플레이어가 루트골레인이 있는 서쪽으로 항해하도록 도와줍니다.']
            },
            voice: 'meshif'
          },
          {
            image: require('@/assets/images/d2r/npcs/natalya.gif'),
            name: { en: 'Natalya', ko: '나탈랴' },
            desc: {
              en: 'A female assassin on a mercenary mission.',
              ko: '용병 임무를 수행 중인 여성 암살자 입니다.'
            },
            work: {
              en: [],
              ko: []
            },
            voice: 'natalya'
          },
          {
            image: require('@/assets/images/d2r/npcs/ormus.gif'),
            name: { en: 'Ormus', ko: '올머스' },
            desc: {
              en: 'He is known as the mad poet, always talking in rhymes and riddles. He is a member of a mighty order of magi, and has useful information, if you can decipher his riddles.',
              ko: '그는 항상 운율과 수수께끼로 이야기하며 미친 시인으로 알려져 있습니다. 그는 강력한 마법사 계급의 일원이며, 그의 수수께끼를 풀 수 있다면 유용한 정보를 가지고 있습니다.'
            },
            work: {
              en: [
                'Heals - Ormus will refill your Life, Mana and Stamina for free',
                'Trade - Sells Armor, Staves, Wands, Scepters, Tomes, Healing Potions, and Scrolls.'],
              ko: [
                '치유 - 올머스는 당신의 생명력, 마나, 체력을 무료로 채워줄 것입니다',
                '거래 - 갑옷, 지팡이, 마법봉, 셉터, 고서, 치유 물약 그리고 스크롤을 판매합니다.']
            },
            voice: 'ormus'
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