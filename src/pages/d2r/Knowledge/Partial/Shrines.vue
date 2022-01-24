<template>
  <div class="full-width">
    <d2r-tap-panel part="none" no-wide>
      <template #panels>
        <q-tab-panel name="none">
          <div class="q-pa-sm">
            <div class="knowledge">
              <d2r-table table-class="wrap" ref="table" :pagination.sync="pagination" mode="none" :columns="columns"
                :data="data" :loading="false" :grid="$q.screen.lt.lg" @request="request">
                <template #header="{props}">
                  <q-tr class="text-title">
                    <q-th v-for="col in props.cols" :key="col.name" :props="props">
                      {{ col.label }}
                    </q-th>
                  </q-tr>
                </template>
                <template #body="{props}">
                  <q-tr class="text-center">
                    <q-td>
                      <img :src='props.row.image' class="q-py-md" />
                    </q-td>
                    <q-td class="table-row text-left">
                      {{props.row.name[locale]}}
                    </q-td>
                    <q-td class="table-row text-left">
                      <div class='column'>
                        <div class="col-12" v-for="(effect, index) in props.row.effect[locale]" :key="index">
                          · {{effect}}
                        </div>
                      </div>
                    </q-td>
                    <q-td class="table-row">
                      {{props.row.regeneration}}
                    </q-td>
                    <q-td class="table-row">
                      {{props.row.duration}}
                    </q-td>
                  </q-tr>
                </template>
                <template #item="{props}">
                  <q-intersection transition="slide-up" once class="q-pa-sm col-xs-12 col-sm-6 example-item">
                    <q-card flat bordered class="table-card">
                      <q-card-section class="text-center">
                        <q-img :src='props.row.image' width="75px" />
                      </q-card-section>
                      <q-card-section class="q-pa-sm">
                        <div class="font-kodia text-subtitle1 text-title text-weight-bold text-center">
                          <span> {{props.row.name[locale]}}</span>
                        </div>
                      </q-card-section>
                      <q-separator />
                      <q-card-section class="q-pa-sm">
                        <div class="text-weight-bold sub-title">{{$t('d2r.knowledge.shrines.effect') }}</div>
                        <div class="text-caption text-right column">
                          <div class="col-12" v-for="(effect, index) in props.row.effect[locale]" :key="index">
                            ㆍ{{effect}}
                          </div>
                        </div>
                      </q-card-section>
                      <q-separator inset />
                      <q-card-section class="q-pa-sm">
                        <div class="text-weight-bold sub-title">
                          {{$t('d2r.knowledge.shrines.regeneration')}}</div>
                        <div class="text-caption text-right">{{ props.row.regeneration}}</div>
                      </q-card-section>
                      <q-separator inset />
                      <q-card-section class="q-pa-sm">
                        <div class="text-weight-bold sub-title">{{$t('d2r.knowledge.shrines.duration') }}</div>
                        <div class="text-caption text-right">{{ props.row.duration}}</div>
                      </q-card-section>
                    </q-card>
                  </q-intersection>
                </template>
              </d2r-table>
              <p class="text-right text-grey-6" style="font-size: 1em;">{{$t('d2r.knowledge.source')}} : <a
                  style="text-decoration: none;" class="text-title" target="_blank"
                  href="http://classic.battle.net/diablo2exp/shrines.shtml">{{$t('d2r.knowledge.arreatSummit')}}</a>
              </p>
            </div>
          </div>
        </q-tab-panel>
      </template>
    </d2r-tap-panel>
  </div>
</template>
<script>
  const d2rTapPanel = () => import(/* webpackChunkName: "d2r-tap-panel" */ '@/components/d2r/TapPanel')
  const d2rTable = () => import(/* webpackChunkName: "d2r-table" */ '@/components/d2r/Table')

  export default {
    components: {
      'd2r-tap-panel': d2rTapPanel,
      'd2r-table': d2rTable
    },
    data() {
      return {
        locale: this.$i18n.locale || 'ko',
        pagination: {
          page: 1,
          rowsPerPage: 100
        },
        columns: [
          { name: 'image' },
          { name: 'name', align: 'left', label: this.$t('d2r.knowledge.shrines.name'), headerStyle: 'width:150px;' },
          { name: 'effect', align: 'left', label: this.$t('d2r.knowledge.shrines.effect') },
          { name: 'regeneration', align: 'center', label: this.$t('d2r.knowledge.shrines.regeneration'), headerStyle: 'width:200px;' },
          { name: 'duration', align: 'center', label: this.$t('d2r.knowledge.shrines.duration'), headerStyle: 'width:200px;' }
        ],
        data: [
          {
            image: require('@/assets/images/d2r/shrines/manarecharge.png'),
            name: { en: 'Mana Recharge Shrine', ko: '마나 재충전의 성소' },
            effect: {
              en: ['+ 400% mana recharge rate'],
              ko: ['+ 400% 마나 회복률']
            },
            regeneration: 5,
            duration: 96
          },
          {
            image: require('@/assets/images/d2r/shrines/armor.png'),
            name: { en: 'Armor Boost', ko: '방어의 성소' },
            effect: {
              en: ['+ 100% Defense'],
              ko: ['+ 100% 방어력 상승']
            },
            regeneration: 5,
            duration: 96
          },
          {
            image: require('@/assets/images/d2r/shrines/combat.png'),
            name: { en: 'Combat Boost', ko: '전투의 성소' },
            effect: {
              en: ['+ 200% to Attack Rating', '+ 200% min and max damage'],
              ko: ['+ 200% to 공격등급', '+ 200% 최소, 최대 데미지']
            },
            regeneration: 5,
            duration: 96
          },
          {
            image: require('@/assets/images/d2r/shrines/resistfire.png'),
            name: { en: 'Resist Fire Boost', ko: '파이어 저항력의 성소' },
            effect: {
              en: ['+ 75% to resist fire'],
              ko: ['+ 75% 파이어 저항력 상승']
            },
            regeneration: 5,
            duration: 144
          },
          {
            image: require('@/assets/images/d2r/shrines/resistcold.png'),
            name: { en: 'Resist Cold Boost', ko: '콜드 저항력의 성소' },
            effect: {
              en: ['+ 75% to resist cold'],
              ko: ['+ 75% 콜드 저항력 상승']
            },
            regeneration: 5,
            duration: 144
          },
          {
            image: require('@/assets/images/d2r/shrines/resistlightning.png'),
            name: { en: 'Resist Lightning Boos', ko: '라이트닝 저항력의 성소' },
            effect: {
              en: ['+ 75% to resist lightning'],
              ko: ['+ 75% 라이트닝 저항력 상승']
            },
            regeneration: 5,
            duration: 144
          },
          {
            image: require('@/assets/images/d2r/shrines/resistpoison.png'),
            name: { en: 'Resist Poison Boost', ko: '포이즌 저항력의 성소' },
            effect: {
              en: ['+ 75% to resist poison'],
              ko: ['+ 75% 포이즌 저항력 상승']
            },
            regeneration: 5,
            duration: 144
          },
          {
            image: require('@/assets/images/d2r/shrines/skill.png'),
            name: { en: 'Skill Shrine', ko: '기술의 성소' },
            effect: {
              en: ['+ 2 to all skill levels'],
              ko: ['+ 2 모든 스킬 레벨(활성화된) 업']
            },
            regeneration: 5,
            duration: 96
          },
          {
            image: require('@/assets/images/d2r/shrines/stamina.png'),
            name: { en: 'Stamina Boost', ko: '스태미나의 성소' },
            effect: {
              en: ['Unlimited Stamina'],
              ko: ['스태미나 무제한']
            },
            regeneration: 5,
            duration: 192
          },
          {
            image: require('@/assets/images/d2r/shrines/experience.png'),
            name: { en: 'Experience Boost', ko: '경험의 성소' },
            effect: {
              en: ['50% more experience per kill'],
              ko: ['50% 몬스터 경험치 상승']
            },
            regeneration: 0,
            duration: 144
          },
          {
            image: require('@/assets/images/d2r/shrines/well.png'),
            name: { en: 'Refilling Shrine', ko: '보충의 성소' },
            effect: {
              en: ['Fills health and Mana'],
              ko: ['체력과 마나를 모두 채움']
            },
            regeneration: 2,
            duration: 0
          },
          {
            image: require('@/assets/images/d2r/shrines/shrine-health.png'),
            name: { en: 'Health Shrine', ko: '생명의 성소' },
            effect: {
              en: ['Fully refills Health'],
              ko: ['체력을 모두 체움']
            },
            regeneration: 2,
            duration: 0
          },
          {
            image: require('@/assets/images/d2r/shrines/shrine-mana.png'),
            name: { en: 'Mana Shrine', ko: '마나의 성소' },
            effect: {
              en: ['Fully refills Mana'],
              ko: ['마나를 모두 채움']
            },
            regeneration: 2,
            duration: 0
          },
          {
            image: require('@/assets/images/d2r/shrines/shrine1.png'),
            name: { en: 'Portal Shrine', ko: '포탈의 성소' },
            effect: {
              en: ['Opens a portal to the Town in the act'],
              ko: ['해당 액트의 마을로 가는 포탈 생성']
            },
            regeneration: 0,
            duration: 0
          },
          {
            image: require('@/assets/images/d2r/shrines/shrine2.png'),
            name: { en: 'Fire Shrine', ko: '불의 성소' },
            effect: {
              en: ['All players and monsters lose 1/2 current HP, Fireballs'],
              ko: ['모든 플레이어 몬스터에게 현재 체력의 절반의 데미지를 주는 파이어볼을 사방으로 발사']
            },
            regeneration: 0,
            duration: 0
          },
          {
            image: require('@/assets/images/d2r/shrines/shrine3.png'),
            name: { en: 'Monster Shrine', ko: '몬스터의 성소' },
            effect: {
              en: ['The nearest monster becomes a Unique or Champion monster'],
              ko: ['가장 가까이에 있는 몬스터를 유니크 또는 챔피언 몹으로 변경']
            },
            regeneration: 0,
            duration: 0
          },
          {
            image: require('@/assets/images/d2r/shrines/shrine4.png'),
            name: { en: 'Gem Shrine', ko: '보석의 성소' },
            effect: {
              en: ['Upgrades a Random Gem or Skull in your Inventory', 'gives a chipped Gem or Skull'],
              ko: ['인벤토리에 있는 젬이나 스컬을 한단계 업그레이드', '최하급 ~ 최상급 보석이나 스컬을 하나 지급']
            },
            regeneration: 0,
            duration: 0
          },
          {
            image: require('@/assets/images/d2r/shrines/shrine5.png'),
            name: { en: 'Exploding Shrine', ko: '폭발의 성소' },
            effect: {
              en: ['Gives player 5-10 exploding potions and tosses out 5 exploding potions in random directions/distances'],
              ko: ['플레이어에게 5~10개의 폭발 포션 지급, 성소주변으로 5개의 폭발 포션을 방향/거리 랜덤하게 난사']
            },
            regeneration: 5,
            duration: 96
          },
          {
            image: require('@/assets/images/d2r/shrines/shrine6.png'),
            name: { en: '	Poison Shrine', ko: '독의 성소' },
            effect: {
              en: ['Gives player 5-10 Poison gas Potions', 'Creates ring of Poison gas around shrine.', 'The Poison Shrine also has another (hidden) bonus of making Poison Duration = 0'],
              ko: ['플레이어에게 5~10개의 독 포션 지급', '성소주변으로 독가스 띠 생성', '독의 성소는 독 지속을 0으로 만드는 (숨겨진) 보너스 능력을 가짐']
            },
            regeneration: 5,
            duration: 96
          }
        ]
      }
    },
    created() {
      if (this.$route.params.section === 'Shrines')
        this.$emit('no-left-tabs')
    },
    methods: {
      request({ done }) {
        done()
      }
    }
  }
</script>
<style scoped>
  .wrap {
    box-shadow: -1px -1px 1px 1px rgba(184, 156, 91, .6), 1px 1px 1px 1px rgba(104, 76, 11, .6), inset 0 0 4px 4px rgba(0, 0, 0, 1);
    background-color: rgba(10, 10, 10, .8) !important;
    border-radius: 4px;
    overflow: hidden;
  }

  .body--light .wrap {
    box-shadow: 0 0 0 1px rgba(180, 180, 180, 1);
    background-color: rgba(245, 245, 245, .8) !important;
  }

  .table-card {
    box-shadow: -1px -1px 1px 1px rgba(184, 156, 91, .6), 1px 1px 1px 1px rgba(104, 76, 11, .6), inset 0 0 4px 4px rgba(0, 0, 0, 1) !important;
    background-color: transparent !important;
  }

  .body--light .table-card {
    box-shadow: 0 0 0 1px rgba(100, 100, 100, .4) !important;
    background-color: transparent !important;
  }

  tbody td {
    font-size: 1.2em;
    line-height: 1.8em;
    white-space: normal !important;
  }

  tbody tr:nth-child(even) {
    background-color: rgba(15, 15, 15, .4) !important;
  }

  .body--light tbody tr:nth-child(even) {
    background-color: rgb(255, 255, 255, .2) !important;
  }

  thead tr {
    box-shadow: inset 0 -1px 0 0 rgba(104, 76, 11, .6), 0 1px 0 1px rgba(184, 156, 91, .6);
  }

  .body--light thead tr {
    box-shadow: inset 0 -1px 0 0 rgba(200, 200, 200, 1), 0 1px 2px 2px rgba(230, 230, 230, 1);
  }

  thead th {
    font-weight: bold !important;
    font-size: 1.2em !important;
    font-family: 'Kodia';
    white-space: normal !important;
  }

  .table-row {
    word-break: keep-all;
    text-overflow: ellipsis;
  }

  .sub-title {
    color: rgba(180, 180, 180, 1);
    text-shadow: 3px 3px 0 rgba(50, 50, 50, 1);
  }

  .body--light .sub-title {
    color: inherit;
    text-shadow: none;
  }

  @media screen and (max-width:1439px) {
    .wrap {
      box-shadow: none;
    }

    .body--light .wrap {
      box-shadow: none;
    }
  }

  .example-item {
    min-height: 300px;
  }
</style>