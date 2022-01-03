<template>
  <div class="knowledge">
    <d2r-table table-class="wrap" ref="table" :pagination.sync="pagination" mode="none" :data="data" :loading="false"
      @request="request" :grid="$q.screen.lt.lg">
      <template #body="{props}">
        <q-tr class="text-center npc-top">
          <q-td rowspan="3">
            <q-img :src='props.row.image' width="75px" />
          </q-td>
          <q-td class="font-kodia text-left text-title text-weight-bold" style="font-size: 1.8em;">
            {{props.row.name[locale]}}
          </q-td>
          <q-td rowspan="3">
            <q-btn push glossy icon="headset" color="grey-6" text-color="black" size="md" padding="4px" round dense
              @click="play(props.row.voice, $event)" />
          </q-td>
        </q-tr>
        <q-tr>
          <q-td class="table-row" style="text-indent: 10px;">
            {{props.row.desc[locale]}}
          </q-td>
        </q-tr>
        <q-tr>
          <q-td class="table-row text-grey-6">
            <div v-for="(work, index) in props.row.work[locale]" :key="index">
              {{work}}
            </div>
          </q-td>
        </q-tr>
      </template>
      <template #item="{props}">
        <q-intersection transition="slide-up" once class="q-pa-sm col-xs-12 col-sm-6 example-item">
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
        </q-intersection>
      </template>
    </d2r-table>
    <p class="text-right text-grey-6">{{$t('d2r.knowledge.source')}} : <a style="text-decoration: none;"
        class="text-title" target="_blank"
        href="http://classic.battle.net/diablo2exp/npcs/act1.shtml">{{$t('d2r.knowledge.arreatSummit')}}</a></p>
  </div>
</template>
<script>
  const act1 = [
    {
      image: require('@/assets/images/d2r/npcs/akara.gif'),
      name: { en: 'Akara', ko: '아카라' },
      desc: {
        en: 'Rogue Priestess, is a formal woman, who intones rather than speaks. She is naturally suspicious of outsiders, but needs your help.',
        ko: '로그의 여사제이며 말보다는 직감을 가진 격식 있는 여성입니다. 그녀는 원래 외부인을 의심하지만, 당신의 도움이 필요합니다.'
      },
      work: {
        en: [
          'Heals - Akara will refill your Life, Mana and Stamina for free',
          'Trade - Sells Staves, Scepters, Wands, Tomes, Scrolls, Keys, and Potions.'],
        ko: [
          '치유 - 아카라는 당신의 생명력, 마나, 체력을 무료로 채워줄 것입니다',
          '거래 - 지팡이, 셉터, 마법봉, 고서, 스크롤, 열쇠, 물약을 판매합니다.']
      },
      voice: 'akara'
    },
    {
      image: require('@/assets/images/d2r/npcs/charsi.gif'),
      name: { en: 'Charsi', ko: '찰시' },
      desc: {
        en: 'The Rogue Blacksmith, is a somewhat slow-witted simple country gal, but anger enters her voice when she mentions demons.',
        ko: '로그의 대장장이이며 다소 눈치가 둔한 시골 처녀이지만 악마를 언급할 때 그녀의 목소리에 분노가 느껴집니다.'
      },
      work: {
        en: [
          'Repair - Repair damaged Weapons and Armor for a price.',
          'Trade - Sells Armor, Weapons, Bolts, and Arrows.'],
        ko: [
          '수리 - 파손된 무기와 갑옷을 비용을 지불하면 수리해줍니다.',
          '거래 - 갑옷, 무기, 볼트, 화살을 판매합니다.']
      },
      voice: 'charsi'
    },
    {
      image: require('@/assets/images/d2r/npcs/deckardcain.gif'),
      name: { en: 'Deckard Cain', ko: '데커드 케인' },
      desc: {
        en: 'A Horadrim sage, schooled in the most arcane history and lore, who can advise you.',
        ko: '당신에게 조언을 해줄 수있는 가장 신비로운 역사와 지식을 가진 호라드림 현자입니다.'
      },
      work: {
        en: [
          'Deckard Cain is trapped in Tristram. Once rescued he will:',
          'Identify Items - Cain will Identify all of the unidentified Items in your Inventory. If you fail to Rescue Cain before you complete Act I, Cain will be rescued by the Rogues but will always charge you 100 Gold to identify items (in that difficulty level) because you failed to save him! =]'],
        ko: [
          '데커드 케인은 트리스트럼에 갇혀 있습니다. 구조되면 그는:.',
          '아이템 식별 - 케인은 인벤토리에있는 미확인 아이템을 모두 식별합니다. 액트 1을 완료하기 전에 케인을 구출하지 못하면 케인은 로그에 의해 구출되지만 당신은 구출에 실패했기 때문에 아이템을 식별하기 위해 항상 100 골드를 청구합니다 (해당 난이도에서)! =]']
      },
      voice: 'cain'
    },
    {
      image: require('@/assets/images/d2r/npcs/rogue.gif'),
      name: { en: 'Flavie', ko: '플래비' },
      desc: {
        en: 'Warns of dangers beyond the Den of Evil.',
        ko: '악의 소굴 너머의 위험에 대해 경고해줍니다.'
      },
      work: {
        en: [],
        ko: []
      },
      voice: 'rogue'
    },
    {
      image: require('@/assets/images/d2r/npcs/gheed.gif'),
      name: { en: 'Gheed', ko: '기드' },
      desc: {
        en: 'A traveling merchant whose speech reeks of flowers.',
        ko: '사기꾼 냄새가 나는 여행상인입니다.'
      },
      work: {
        en: [
          'Trade - Sells Armor, Weapons, Bolts, Arrows, and Keys.',
          'Gamble - For a price, Gheed will sell you an unidentified item. Once purchased, the item will be identified and you will see what item you received.'],
        ko: [
          '거래 - 갑옷, 무기, 볼트, 화살, 열쇠 판매',
          '도박 - 돈을 지불하면 기드가 정체불명의 물건을 당신에게 팔 것입니다. 구입하면 해당 물건이 식별되고 어떤 물건을 받았는지 확인할 수 있습니다.']
      },
      voice: 'gheed'
    },
    {
      image: require('@/assets/images/d2r/npcs/kashya.gif'),
      name: { en: 'Kashya', ko: '카샤' },
      desc: {
        en: 'The Rogue Mercenary Captain, is hard-as-nails. She doesn\'t shy from talking about blood and gore. She is a bit impatient and curt until you win her trust.',
        ko: '도적 용병 대장이며, 인자강 스타일인 그녀는 잔혹한 얘기를 거침없이 합니다. 그녀의 신뢰를 얻기전에는 짜증 섞이고 퉁명스럽게 대합니다.'
      },
      work: {
        en: [
          'Hire - Allows you to hire Rogues once you have defeated Blood Raven or have reached level 9.'],
        ko: [
          '고용 - 블러드 레이븐을 물리치거나 레벨 9에 도달하면 용병을 고용할 수 있습니다.']
      },
      voice: 'kashya'
    },
    {
      image: require('@/assets/images/d2r/npcs/warriv.gif'),
      name: { en: 'Warriv', ko: '와리브' },
      desc: {
        en: 'The tall, Arabic-looking Caravan Leader, is a dour adage-sayer.',
        ko: '큰키에 아랍인처럼 보이는 카라반 리더이며, 격언을 퍼붓기도 합니다.'
      },
      work: {
        en: [
          'Go East - Allows you to travel to Act II once Act I has been completed.'],
        ko: [
          '동쪽으로 이동 - 액트 I이 완료되면 액트2로 이동할 수 있습니다.']
      },
      voice: 'warriv'
    }
  ]

  export default {
    data() {
      return {
        locale: this.$i18n.locale || 'ko',
        pagination: {
          page: 1,
          rowsPerPage: 100
        },
        data: []
      }
    },
    mounted() {
      setTimeout(() => {
        this.data = act1
      }, 0)
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

  .example-item {
    min-height: 200px;
  }
</style>