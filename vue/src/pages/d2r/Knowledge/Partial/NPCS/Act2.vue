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
        href="http://classic.battle.net/diablo2exp/npcs/act2.shtml">{{$t('d2r.knowledge.arreatSummit')}}</a></p>
  </div>
</template>
<script>
  const act2 = [
    {
      image: require('@/assets/images/d2r/npcs/atma.gif'),
      name: { en: 'Atma', ko: '아트마' },
      desc: {
        en: 'A comely woman who recently lost her family to the evils that attacked Lut Gholein, she is the owner of the public house. She has a strong spirit that is being consumed by grief and hatred. She is hoping to find a hero to avenge her murdered husband and son.',
        ko: '최근 루트 골레인을 공격한 악마들에게 가족을 잃은 미모의 여인, 그녀는 선술집 주인입니다. 그녀는 슬픔과 증오에 사로잡혀 있는 강한 정신을 가지고 있습니다. 그녀는 살해된 남편과 아들의 원수를 갚을 영웅을 찾기를 바라고 있습니다.'
      },
      work: {
        en: [
          'Heals - Atma will refill your Life, Mana and Stamina for free.'],
        ko: [
          '치유 - 아트마는 당신의 생명력, 마나, 체력을 무료로 채워줄 것입니다']
      },
      voice: 'atma'
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
      image: require('@/assets/images/d2r/npcs/drognan.gif'),
      name: { en: 'Drognan', ko: '드로그난' },
      desc: {
        en: 'An aged wizard of an unknown Mage Clan. A man of few and private words, not many have even heard him speak. If he does, it is for a good reason, and one should listen.',
        ko: '알려지지 않은 마법사 종족의 늙은 마법사입니다. 사적인것을 말하지 않고, 그가 말하는 것을 들은 사람도 많지 않습니다. 만약 무슨말을 한다면, 그것은 좋은 이유일 것이고, 꼭 들어야 합니다.'
      },
      work: {
        en: [
          'Trade - Sells Staves, Scepters, Wands, Tomes, Scrolls, and Potions.'],
        ko: [
          '거래 - 지팡이, 셉터, 마법봉, 고서, 스크롤과 물약을 판매합니다.']
      },
      voice: 'drognan'
    },
    {
      image: require('@/assets/images/d2r/npcs/elzix.gif'),
      name: { en: 'Elzix', ko: '엘직스' },
      desc: {
        en: 'The innkeeper was once a bandit king, but gave up the life after surviving a third assassination attempt. He lost his left eye before fleeing to this city. He then traded key facts regarding the dreaded band to which he formerly belonged for his freedom and the money to found this Inn. He has keen ears, and knows a lot of what goes on in the desert.',
        ko: '여관 주인인 그는 한때 도적왕이었지만 세 번째 암살 시도에서 살아남은 후 삶을 포기했습니다. 그는 이 도시로 도망오기 전에 왼쪽 눈을 잃었습니다. 그리고 그는 이전에 자신이 속해있던 무서운 악단에 관한 주요 사실을 자신의 자유와 여관을 소유하기위한 돈을 위해 교환했습니다. 그는 예민한 귀를 가지고 있으며 사막에서 일어나는 일을 많이 알고 있습니다.'
      },
      work: {
        en: ['Trade - Sells Armor, Weapons, Bolts and Arrows.',
          'Gamble - For a price, Elzix will sell you an unidentified item. Once purchased, the item will be identified and you will see what item you received.'],
        ko: ['거래 - 갑옷, 무기, 볼트와 화살을 판매합니다.',
          '도박 - 돈을 지불하면 엘직스가 정체불명의 물건을 당신에게 팔 것입니다. 구입하면 해당 물건이 식별되고 어떤 물건을 받았는지 확인할 수 있습니다.']
      },
      voice: 'elzix'
    },
    {
      image: require('@/assets/images/d2r/npcs/fara.gif'),
      name: { en: 'Fara', ko: '파라' },
      desc: {
        en: 'Once a Holy warrior for the Church of Light, she retired after learning of corruption and greed within the Church. She now makes a living selling and repairing armor for the city\'s guards and mercenaries.While no longer of Zakarum, she carries forth the ideals of Order and Right. She has a positive attitude and great inner strength.',
        ko: '한때 빛의 교회의 성기사였던 그녀는 교회 내에서 부패와 탐욕을 알게 된 후 은퇴했습니다. 그녀는 이제 도시의 경비병과 용병들을 위해 갑옷을 팔고 수리하며 살아가고 있으며, 더 이상 자카룸의 교리가 아닌 질서와 권리의 이상을 수행하게 되었습니다.그녀는 긍정적인 태도와 강한 내면의 힘을 소유하고 있습니다.'
      },
      work: {
        en: [
          'Heals - Fara will refill your Life, Mana and Stamina for free.',
          'Repair - Repair damaged Weapons and Armor for a price.',
          'Trade - Sells Armor, Weapons, Bolts, and Arrows.'],
        ko: [
          '치유 - 파라는 당신의 생명력, 마나, 체력을 무료로 채워줄 것입니다',
          '수리 - 파손된 무기와 갑옷을 비용을 지불하면 수리해줍니다.',
          '거래 - 갑옷, 무기, 볼트와 화살을 판매합니다.']
      },
      voice: 'fara'
    },
    {
      image: require('@/assets/images/d2r/npcs/geglash.gif'),
      name: { en: 'Geglash', ko: '게글래쉬' },
      desc: {
        en: 'A fearless, drunken blowhard. He is afraid of one thing however, Water, and he will not go near it or ships for any reason.',
        ko: '겁이없는 술취한 허풍쟁이 입니다. 그러나 그가 두려워하는 한가지 있는데 물이며 그런 이유로 물 근처에 가지 않거나 배를 타지 않을 것입니다.'
      },
      work: {
        en: [],
        ko: []
      },
      voice: 'geglash'
    },
    {
      image: require('@/assets/images/d2r/npcs/greiz.gif'),
      name: { en: 'Greiz', ko: '그리즈' },
      desc: {
        en: 'Captain of the town\'s hired guards. He takes crap from no one, and he doesn\'t mind busting a few skulls to make a point. He wears chain armor despite the unbearable heat.',
        ko: '마을의 선장이 고용 한 경비원입니다. 그는 그어떤 헛소리도 용납하지 않으며 거짓을 밝히기 위해 머리통을 부수는것도 개의치 않습니다. 그는 참을 수없는 더위에도 불구하고 사슬 갑옷을 입습니다.'
      },
      work: {
        en: [
          'Hire - Allows you to hire Mercenaries.'],
        ko: [
          '고용 - 용병을 고용할 수 있습니다.']
      },
      voice: 'greiz'
    },
    {
      image: require('@/assets/images/d2r/npcs/jerhyn.gif'),
      name: { en: 'Jerhyn', ko: '제린' },
      desc: {
        en: 'He is trying in vain to devise a strategy against the encroaching evil. But his resources are limited and time is short, without more men his current plan is doomed to failure. He is young, has good leadership ability, and he is well liked by his people.',
        ko: '그는 잠식하는 악에 대항하는 전략을 짜려고 궁리중이었습니다. 그러나 그의 자원은 제한적이며 시간은 부족했고, 더 많은 사람이 없으면 그의 현재 계획은 실패 할 운명에 처했습니다. 그는 젊고 리더십 능력이 뛰어나며 사람들에게 좋은 사랑을 받고 있습니다.'
      },
      work: {
        en: [],
        ko: []
      },
      voice: 'jerhyn'
    },
    {
      image: require('@/assets/images/d2r/npcs/guard.gif'),
      name: { en: 'Kaelan', ko: '캘란' },
      desc: {
        en: 'Guards the entrance to Jerhyn\'s palace.',
        ko: '제린의 궁전입구를 지키는 경비원입니다.'
      },
      work: {
        en: [],
        ko: []
      },
      voice: 'guard'
    },
    {
      image: require('@/assets/images/d2r/npcs/lysander.gif'),
      name: { en: 'Lysander', ko: '라이샌더' },
      desc: {
        en: 'An exclusive potion dealer and alchemist, Lysander is short-tempered and nearly deaf, due to explosive failures in the mixing of ingredients. He will want to know why you are always wasting his time, even if you have never met before.',
        ko: '독점적인 물약 판매상이자 연금술사인 라이샌더는 재료 혼합중 폭발사고로 다혈질에 귀머거리가 됩니다. 그를 전에 만난적 없지만 당신이 항상 시간낭비 하고있는것을 궁금해합니다.'
      },
      work: {
        en: [
          'Trade - Sells Keys and Potions.'],
        ko: [
          '거래 - 열쇠와 물약을 판매합니다.']
      },
      voice: 'lysander'
    },
    {
      image: require('@/assets/images/d2r/npcs/meshif.gif'),
      name: { en: 'Meshif', ko: '메쉬프' },
      desc: {
        en: 'A ship\'s captain, he is friendly, but quite keen for anything of value - gold, gems, and jade statuettes.',
        ko: '배의 선장이며 친절하지만, 금, 보석, 그리고 옥으로 만든 조각상등 가치있는 것을 매우 좋아합니다.'
      },
      work: {
        en: [
          'Sail East - Once Act II has been completed, allows players to travel to Act III.'],
        ko: [
          '동쪽으로 이동 - 액트 II가 완료되면 액트3로 이동할 수 있습니다.']
      },
      voice: 'meshif'
    },
    {
      image: require('@/assets/images/d2r/npcs/warriv-act2.gif'),
      name: { en: 'Warriv', ko: '와리브' },
      desc: {
        en: 'Warriv is a large man with a stern demeanor. Now that the pass from East to West is open, he is bit more friendly.',
        ko: '와리브는 근엄한 태도의 덩치큰 사람입니다. 동쪽에서 서쪽으로 가는 통로가 열리면서 조금더 친해졌습니다.'
      },
      work: {
        en: [
          'Go West - Go west back to the Rogue Encampment.'],
        ko: [
          '서쪽으로 이동 - 도적 야영지가 있는 서쪽으로 돌아갑니다.']
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
        this.data = act2
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