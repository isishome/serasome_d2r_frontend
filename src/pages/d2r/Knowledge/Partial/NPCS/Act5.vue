<template>
  <div class="knowledge">
    <d2r-table table-class="wrap" ref="table" :pagination.sync="pagination" mode="none" :data="data" :loading="false"
      @request="request" :grid="$q.screen.lt.lg">
      <template #body="{props}">
        <q-tr class="text-center npc-top">
          <q-td class="gradient-back2" rowspan="3">
            <q-img v-if="'tyrael' === props.row.voice" :src='props.row.image' width="130px" />
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
        <q-intersection transition="slide-up" once class="q-pa-sm col-xs-12 col-sm-6 example-item">
          <q-card flat bordered class="bg-transparent d2r-card">
            <q-card-section class="text-center">
              <q-img v-if="'tyrael' === props.row.voice" :src='props.row.image' width="100%" />
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
        </q-intersection>
      </template>
    </d2r-table>
    <p class="text-right text-grey-6">{{$t('d2r.knowledge.source')}} : <a style="text-decoration: none;"
        class="text-title" target="_blank"
        href="http://classic.battle.net/diablo2exp/npcs/act5.shtml">{{$t('d2r.knowledge.arreatSummit')}}</a></p>
  </div>
</template>
<script>
  const act5 = [
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
      image: require('@/assets/images/d2r/npcs/larzuk.gif'),
      name: { en: 'Larzuk', ko: '라주크' },
      desc: {
        en: 'Larzuk is a young and passionate firebrand who is determined to stay the course until the bitter end of the war against Baal. He prides himself in his ability to create the finest implements of war, and he toils ceaselessly to supply the army with blade, plate, and mail.',
        ko: '라주크는 젊고 열정적인 선동가로 바알과의 전쟁이 끝날 때까지 그 길을 지키기로 결심했습니다. 그는 최고의 전투 장비를 만들 수 있는 능력에 자부심을 가지고 있으며 군대에 칼, 판금갑옷, 쇠사슬갑옷등을 공급하기 위해 끊임없이 노력합니다.'
      },
      work: {
        en: [
          'Repair - Repair damaged Weapons and Armor for a price.',
          'Trade - Sells Armor, Weapons, Bolts, and Arrows.'],
        ko: [
          '수리 - 파손된 무기와 갑옷을 비용을 지불하면 수리해줍니다.',
          '거래 - 갑옷, 무기, 볼트 그리고 화살을 판매합니다.']
      },
      voice: 'larzuk'
    },
    {
      image: require('@/assets/images/d2r/npcs/malah.gif'),
      name: { en: 'Malah', ko: '말라' },
      desc: {
        en: 'Malah is a kind and inherently optimistic woman who is, nevertheless, worn down by many battles against the forces of evil. Using her lifelong experience as a healer, she is doing her best to help the many wounded and dying. She is plagued, however, by the fear that there may be no ultimate recovery for her people or the world of Sanctuary.',
        ko: '말라는 친절하고 선천적으로 낙관적인 여성임에도 불구하고, 악의 세력에 대항하는 많은 전투로 인해 지쳐있습니다. 그녀는 한평생 치유자로서의 경험을 이용하여, 부상당하거나 죽어가는 많은 사람들을 돕기 위해 최선을 다하고 있습니다. 그러나 그녀는 주변사람들이나 성역의 세계에 완전한 회복이 되지 않을거란 두려움 때문에 괴로워하고 있습니다.'
      },
      work: {
        en: [
          'Heals - Malah will refill your Life, Mana and Stamina for free.',
          'Trade - Sells Armor, Staves, Wands, Scepters, Tomes, Healing Potions, Potions, Keys, Scrolls.'],
        ko: [
          '치유 - 말라는 당신의 생명력, 마나, 체력을 무료로 채워줄 것입니다.',
          '거래 - 갑옷, 지팡이, 마법봉, 셉터, 고서 치유물약, 물약, 열쇠, 스크롤을 판매합니다.']
      },
      voice: 'malah'
    },

    {
      image: require('@/assets/images/d2r/npcs/nihlathak.gif'),
      name: { en: 'Nihlathak', ko: '니라트하크' },
      desc: {
        en: 'As the last surviving clan elder, he has been driven close to madness by his grief over the imminent failure of his clan to protect the Worldstone. Constantly ruminating on the myriad alternate courses the elders could have taken, he lives with the guilt of not dying with his peers.',
        ko: '마지막으로 살아남은 일족의 장로인 그는 그의 일족이 월드스톤을 지키지 못한것에 대한 고통으로 인해 미쳐가고 있었습니다. 장로들이 선택했던 수많은 대체 과정들을 끊임없이 되새기며, 그는 동료들과 함께 죽지 못했다는 죄책감을 안고 살아갑니다.'
      },
      work: {
        en: ['Gamble - For a price, Nihlathak will sell you an unidentified item. Once purchased, the item will be identified and you will see what item you received.'],
        ko: [
          '도박 - 돈을 지불하면 나라트하크가 정체불명의 물건을 당신에게 팔 것입니다. 구입하면 해당 물건이 식별되고 어떤 물건을 받았는지 확인할 수 있습니다.']
      },
      voice: 'nihlathak'
    },
    {
      image: require('@/assets/images/d2r/npcs/anya.gif'),
      name: { en: 'Anya', ko: '앤야' },
      desc: {
        en: 'Anya, the daughter of a clan elder slain by Baal, has been groomed since birth to become the leader of her people. She has a broad education in the history, magic and healing techniques of her clan. Although she grieves for her father in her heart, she knows that she must be strong for her people in this time of need.',
        ko: '바알에 의해 살해된 일족 장로의 딸인 앤야는 태어날 때부터 민족의 지도자가 되기 위해 키워져왔습니다. 그녀는 그녀의 일족의 역사, 마법 그리고 치유 기술에 대해 폭넓은 교육을 받았습니다. 그녀는 마음속으로 아버지의 죽음을 슬퍼하지만, 이런 어려운 시기에 남은 일족을 위해 강해져야 한다는 것을 알고 있습니다.'
      },
      work: {
        en: [
          'Trade - Sells Armor, Weapons (Katars, Throwing Weapons), Keys and Arrows',
          'Gamble - For a price, Anya will sell you an unidentified item. Once purchased, the item will be identified and you will see what item you received.'
        ],
        ko: [
          '거래 - 갑옷, 무기 (카타르등, 투척무기들), 열쇠와 화살을 판매합니다.',
          '도박 - 돈을 지불하면 앤야가 정체불명의 물건을 당신에게 팔 것입니다. 구입하면 해당 물건이 식별되고 어떤 물건을 받았는지 확인할 수 있습니다.']
      },
      voice: 'anya'
    },
    {
      image: require('@/assets/images/d2r/npcs/qual-Kehk.gif'),
      name: { en: 'Qual-Kehk', ko: '퀄 퀘크' },
      desc: {
        en: 'Although tired and battered, the clan\'s Master at Arms still commands the unquestioning respect of his men. His eyes are grimly focused on the horizon, and he has the wistful demeanor of a man who knows he will soon sacrifice his life -- and those of his men -- in a battle that he may not win.',
        ko: '비록 지치고 공격받았지만, 암스 일족의 대장인 그의 부하들은 그를 의심의 여지없이 존경합니다. 그의 눈은 지평선 위에 암울하게 바라보고 있으며, 이길 수 없는 전투에서 자신과 부하들 모두 희생 될 것이라는 것을 인지한 채 비참한 모습을 하고 있습니다.'
      },
      work: {
        en: ['Hire - Allows you to hire Barbarians.'],
        ko: ['고용 - 야만인을 고용 할 수 있습니다. ']
      },
      voice: 'qual-kehk'
    },
    {
      image: require('@/assets/images/d2r/npcs/tyrael.gif'),
      name: { en: 'Tyrael', ko: '티리엘' },
      desc: {
        en: 'The Archangel Tyrael. Tyrael has always been our protector, but even he cannot help us now.',
        ko: '대천사 티리엘. 티리엘은 항상 우리를 보호해 왔지만, 지금은 우리를 도와줄 수 없습니다.'
      },
      work: {
        en: [],
        ko: []
      },
      voice: 'tyrael'
    }
  ]

  const d2rTable = () => import(/* webpackChunkName: "d2r-table" */ '@/components/d2r/Table')

  export default {
    components: {
      'd2r-table': d2rTable
    },
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
        this.data = act5
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