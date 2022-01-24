<template>
  <div class="word-keep">
    <template v-if="$i18n.locale === 'ko'">
      <q-timeline dense :layout="layout">
        <q-timeline-entry color="brown-5" side="left" icon="foundation">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Kurast Docks</div>
              </q-card-section>
              <q-img ref="img0" :src="require('@/assets/images/d2r/maps/act3/KurastDocks.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 퀘스트 할당을 위해 NPC와 대화</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-10" side="right" icon="fas fa-tree">
          <div class="q-mb-lg row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Spider Forest</div>
              </q-card-section>
              <q-img ref="img1" :src="require('@/assets/images/d2r/maps/act3/SpiderForest.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Jade Figurine</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : Arachnid Lair</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
          <div class="q-mb-lg row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Spider Cavern</div>
              </q-card-section>
              <q-img ref="img2" :src="require('@/assets/images/d2r/maps/act3/SpiderCavern.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : 1</div>
                <div>퀘스트 관련 영역 / 몬스터 : Khalim's Eye</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Great Marsh</div>
              </q-card-section>
              <q-img ref="img3" :src="require('@/assets/images/d2r/maps/act3/GreatMarsh.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-9" side="left" icon="fas fa-dungeon">
          <div class="row q-mb-lg">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Flayer Jungle</div>
              </q-card-section>
              <q-img ref="img4" :src="require('@/assets/images/d2r/maps/act3/FlayerJungle.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : The Gidbinn</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : Swampy Pit (3층)</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Flayer Dungeon</div>
              </q-card-section>
              <q-img ref="img5" :src="require('@/assets/images/d2r/maps/act3/FlayerDungeon.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : 3</div>
                <div>퀘스트 관련 영역 / 몬스터 : Khalim's Brain</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="indigo-10" side="right" icon="fas fa-landmark">
          <div class="q-mb-lg row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Lower Kurast</div>
              </q-card-section>
              <q-img ref="img6" :src="require('@/assets/images/d2r/maps/act3/LowerKurast.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
          <div class="q-mb-lg row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Kurast Bazaar</div>
              </q-card-section>
              <q-img ref="img7" :src="require('@/assets/images/d2r/maps/act3/KurastBazaar.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : Disused Fane - Ruined Temple</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Sewers</div>
              </q-card-section>
              <q-img ref="img8" :src="require('@/assets/images/d2r/maps/act3/Sewers.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : 2</div>
                <div>퀘스트 관련 영역 / 몬스터 : Khalim's Heart</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-6" side="left" icon="fas fa-archway">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Upper Kurast</div>
              </q-card-section>
              <q-img ref="img9" :src="require('@/assets/images/d2r/maps/act3/UpperKurast.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : Forgotten Temple - Forgotten Reliquary</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="brown-5" side="right" icon="fas fa-dungeon">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Kurast Causeway</div>
              </q-card-section>
              <q-img ref="img10" :src="require('@/assets/images/d2r/maps/act3/KurastCauseway.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : Disused Reliquary - Ruined Fane</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-7" side="left" icon="fas fa-kaaba">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Travincal</div>
              </q-card-section>
              <q-img ref="img11" :src="require('@/assets/images/d2r/maps/act3/Travincal.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Khalim's Flail - The Compelling Orb</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="red-10" side="right" icon="fas fa-kaaba">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Durance of Hate</div>
              </q-card-section>
              <q-img ref="img12" :src="require('@/assets/images/d2r/maps/act3/DuranceofHate.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : 3</div>
                <div>퀘스트 관련 영역 / 몬스터 : Mephisto</div>
                <div>웨이포인트 : 있음 (2층)</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="title" class="text-h5 text-title text-weight-bold font-kodia" icon="flag">
          액트 III 완료
        </q-timeline-entry>
      </q-timeline>
    </template>
    <template v-if="$i18n.locale === 'en'">
      <q-timeline dense :layout="layout">
        <q-timeline-entry color="brown-5" side="left" icon="foundation">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Kurast Docks</div>
              </q-card-section>
              <q-img ref="img0" :src="require('@/assets/images/d2r/maps/act3/KurastDocks.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Speak to NPCs for Quest Assignments</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-10" side="right" icon="fas fa-tree">
          <div class="q-mb-lg row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Spider Forest</div>
              </q-card-section>
              <q-img ref="img1" :src="require('@/assets/images/d2r/maps/act3/SpiderForest.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Jade Figurine</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : Arachnid Lair</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
          <div class="q-mb-lg row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Spider Cavern</div>
              </q-card-section>
              <q-img ref="img2" :src="require('@/assets/images/d2r/maps/act3/SpiderCavern.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : 1</div>
                <div>Quest Related Areas / Monsters : Khalim's Eye</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Great Marsh</div>
              </q-card-section>
              <q-img ref="img3" :src="require('@/assets/images/d2r/maps/act3/GreatMarsh.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-9" side="left" icon="fas fa-dungeon">
          <div class="row q-mb-lg">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Flayer Jungle</div>
              </q-card-section>
              <q-img ref="img4" :src="require('@/assets/images/d2r/maps/act3/FlayerJungle.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : The Gidbinn</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : Swampy Pit (3 Levels)</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Flayer Dungeon</div>
              </q-card-section>
              <q-img ref="img5" :src="require('@/assets/images/d2r/maps/act3/FlayerDungeon.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : 3</div>
                <div>Quest Related Areas / Monsters : Khalim's Brain</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="indigo-10" side="right" icon="fas fa-landmark">
          <div class="q-mb-lg row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Lower Kurast</div>
              </q-card-section>
              <q-img ref="img6" :src="require('@/assets/images/d2r/maps/act3/LowerKurast.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
          <div class="q-mb-lg row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Kurast Bazaar</div>
              </q-card-section>
              <q-img ref="img7" :src="require('@/assets/images/d2r/maps/act3/KurastBazaar.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : Disused Fane - Ruined Temple</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Sewers</div>
              </q-card-section>
              <q-img ref="img8" :src="require('@/assets/images/d2r/maps/act3/Sewers.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : 2</div>
                <div>Quest Related Areas / Monsters : Khalim's Heart</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-6" side="left" icon="fas fa-archway">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Upper Kurast</div>
              </q-card-section>
              <q-img ref="img9" :src="require('@/assets/images/d2r/maps/act3/UpperKurast.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : Forgotten Temple - Forgotten Reliquary</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="brown-5" side="right" icon="fas fa-dungeon">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Kurast Causeway</div>
              </q-card-section>
              <q-img ref="img10" :src="require('@/assets/images/d2r/maps/act3/KurastCauseway.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : Disused Reliquary - Ruined Fane</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-7" side="left" icon="fas fa-kaaba">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Travincal</div>
              </q-card-section>
              <q-img ref="img11" :src="require('@/assets/images/d2r/maps/act3/Travincal.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Khalim's Flail - The Compelling Orb</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="red-10" side="right" icon="fas fa-kaaba">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Durance of Hate</div>
              </q-card-section>
              <q-img ref="img12" :src="require('@/assets/images/d2r/maps/act3/DuranceofHate.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : 3</div>
                <div>Quest Related Areas / Monsters : Mephisto</div>
                <div>Waypoint : Yes (on Level 2)</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="title" class="text-h5 text-title text-weight-bold font-kodia" icon="flag">
          Act III Completed
        </q-timeline-entry>
      </q-timeline>
    </template>
    <p class="q-mt-xl text-right text-grey-6" :class="$q.screen.lt.md ? 'text-caption' : ''">
      {{$t('d2r.knowledge.source')}} :
      <a style="text-decoration: none;" class="text-title" target="_blank"
        href="http://classic.battle.net/diablo2exp/maps/act3.shtml">{{$t('d2r.knowledge.arreatSummit')}}</a>
    </p>
  </div>
</template>
<script>
  import {
    mapActions
  } from 'vuex'

  export default {
    computed: {
      layout() {
        return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
      }
    },
    mounted() {
      this.injectImg()
    },
    methods: {
      ...mapActions({
        setImages: 'setD2RImages'
      }),
      injectImg() {
        let images = []
        let i = 0
        while (i < 200) {
          if (this.$refs[`img${i}`]) {
            images.push(this.$refs[`img${i}`])
            i++
          }
          else
            break

        }
        this.setImages(images.map(e => { return { 'element': e.$el, 'src': e.src } }))
      }
    }
  }
</script>
<style scoped>
  .map-card {
    width: 410px;
    max-width: 100%;
  }

  .body--light .map-card {
    background-color: rgba(245, 245, 245, 1) !important;
  }

  @media screen and (max-width:599px) {
    .map-card {
      font-size: 0.7em;
      word-break: keep-all;
      line-height: 1.4em;
    }
  }
</style>