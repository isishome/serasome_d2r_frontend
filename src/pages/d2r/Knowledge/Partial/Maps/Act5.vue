<template>
  <div class="word-keep">
    <template v-if="$i18n.locale === 'ko'">
      <q-timeline dense :layout="layout">
        <q-timeline-entry color="brown-5" side="left" icon="foundation">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Harrogath</div>
              </q-card-section>
              <q-img ref="img0" :src="require('@/assets/images/d2r/maps/act5/harrogath01.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 퀘스트 할당을 위해 NPC와 대화</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="red-10" side="right" icon="grass">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Bloody Foothills</div>
              </q-card-section>
              <q-img ref="img1" :src="require('@/assets/images/d2r/maps/act5/bloodyfoothills.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Shenk the Overseer</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="orange" side="left" icon="fas fa-archway">
          <div class="row q-mb-lg">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Frigid Highlands</div>
              </q-card-section>
              <q-img ref="img2" :src="require('@/assets/images/d2r/maps/act5/frigidhighlands.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Imprisoned Soldiers</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : Abaddon</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Abaddon</div>
              </q-card-section>
              <q-img ref="img3" :src="require('@/assets/images/d2r/maps/act5/abaddon.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-9" side="right" icon="fas fa-dungeon">
          <div class="q-mb-lg row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Arreat Plateau</div>
              </q-card-section>
              <q-img ref="img4" :src="require('@/assets/images/d2r/maps/act5/arreatplateau.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : Pit of Acheron</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Pit of Acheron</div>
              </q-card-section>
              <q-img ref="img5" :src="require('@/assets/images/d2r/maps/act5/acheron.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="blue-5" side="left" icon="fas fa-igloo">
          <div class="row q-mb-lg">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Crystalline Passage</div>
              </q-card-section>
              <q-img ref="img6" :src="require('@/assets/images/d2r/maps/act5/crystallinepassage.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : Frozen River</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Frozen River</div>
              </q-card-section>
              <q-img ref="img7" :src="require('@/assets/images/d2r/maps/act5/frozenriver.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Anya</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="title" class="text-h5 text-title text-weight-bold font-kodia" icon="flag">
          액트 V - 파트 I 완료
        </q-timeline-entry>
      </q-timeline>
      <q-timeline dense :layout="layout">
        <q-timeline-entry color="brown-5" side="left" icon="foundation">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Harrogath</div>
              </q-card-section>
              <q-img ref="img8" :src="require('@/assets/images/d2r/maps/act5/harrogath02.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 퀘스트 할당을 위해 NPC와 대화</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="amber-8" side="right" icon="fas fa-gopuram">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Nihlathak's Temple</div>
              </q-card-section>
              <q-img ref="img9" :src="require('@/assets/images/d2r/maps/act5/nihlathaktemple.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="indigo-5" side="left" icon="fas fa-dungeon">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Halls of Anguish</div>
              </q-card-section>
              <q-img ref="img10" :src="require('@/assets/images/d2r/maps/act5/hallsofanguish.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="indigo-7" side="right" icon="fas fa-dungeon">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Halls of Pain</div>
              </q-card-section>
              <q-img ref="img11" :src="require('@/assets/images/d2r/maps/act5/hallsofpain.jpg')" width="100%" />
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
        <q-timeline-entry color="indigo-9" side="left" icon="fas fa-dungeon">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Halls of Vaught</div>
              </q-card-section>
              <q-img ref="img12" :src="require('@/assets/images/d2r/maps/act5/hallsofvaught.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Nihlathak</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="title" class="text-h5 text-title text-weight-bold font-kodia" icon="flag">
          액트 V - 파트 II 완료
        </q-timeline-entry>
      </q-timeline>
      <q-timeline dense :layout="layout">
        <q-timeline-entry color="blue-3" side="left" icon="fas fa-igloo">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Crystalline Passage</div>
              </q-card-section>
              <q-img ref="img13" :src="require('@/assets/images/d2r/maps/act5/crystallinepassage.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : Frozen River</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="blue-7" side="right" icon="fas fa-igloo">
          <div class="row q-mb-lg">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Glacial Trail</div>
              </q-card-section>
              <q-img ref="img14" :src="require('@/assets/images/d2r/maps/act5/glacialtrail.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : Drifter Cavern</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Drifter Cavern</div>
              </q-card-section>
              <q-img ref="img15" :src="require('@/assets/images/d2r/maps/act5/driftercavern.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="blue-5" side="left" icon="lens_blur">
          <div class="row q-mb-lg">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Frozen Tundra</div>
              </q-card-section>
              <q-img ref="img16" :src="require('@/assets/images/d2r/maps/act5/frozentundra.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : Infernal Pit</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Infernal Pit</div>
              </q-card-section>
              <q-img ref="img16" :src="require('@/assets/images/d2r/maps/act5/infernalpit.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="blue-8" side="right" icon="fas fa-igloo">
          <div class="row q-mb-lg">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">The Ancients' Way</div>
              </q-card-section>
              <q-img ref="img17" :src="require('@/assets/images/d2r/maps/act5/ancientsway.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : Icy Cellar</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Icy Cellar</div>
              </q-card-section>
              <q-img ref="img18" :src="require('@/assets/images/d2r/maps/act5/icycellar.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="brown-8" side="left" icon="fas fa-mountain">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Arreat Summit</div>
              </q-card-section>
              <q-img ref="img19" :src="require('@/assets/images/d2r/maps/act5/arreatsummit.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Altar of the Heavens</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-8" side="right" icon="fas fa-dungeon">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Worldstone Keep</div>
              </q-card-section>
              <q-img ref="img20" :src="require('@/assets/images/d2r/maps/act5/worldstonekeep.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : 3</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음 (2층)</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="red-8" side="left" icon="fas fa-dungeon">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Throne of Destruction</div>
              </q-card-section>
              <q-img ref="img21" :src="require('@/assets/images/d2r/maps/act5/throneofdestruction.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Baal's Minions</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="red-10" side="right" icon="fas fa-dungeon">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">The Worldstone Chamber</div>
              </q-card-section>
              <q-img ref="img22" :src="require('@/assets/images/d2r/maps/act5/worldstonechamber.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Baal</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="title" class="text-h5 text-title text-weight-bold font-kodia" icon="flag">
          액트 V - 파트 III 완료
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
                <div class="text-title text-weight-bold font-kodia">Harrogath</div>
              </q-card-section>
              <q-img ref="img0" :src="require('@/assets/images/d2r/maps/act5/harrogath01.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Speak to NPCs for Quest Assignments</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="red-10" side="right" icon="grass">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Bloody Foothills</div>
              </q-card-section>
              <q-img ref="img1" :src="require('@/assets/images/d2r/maps/act5/bloodyfoothills.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Shenk the Overseer</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="orange" side="left" icon="fas fa-archway">
          <div class="row q-mb-lg">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Frigid Highlands</div>
              </q-card-section>
              <q-img ref="img2" :src="require('@/assets/images/d2r/maps/act5/frigidhighlands.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Imprisoned Soldiers</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : Abaddon</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Abaddon</div>
              </q-card-section>
              <q-img ref="img3" :src="require('@/assets/images/d2r/maps/act5/abaddon.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-9" side="right" icon="fas fa-dungeon">
          <div class="q-mb-lg row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Arreat Plateau</div>
              </q-card-section>
              <q-img ref="img4" :src="require('@/assets/images/d2r/maps/act5/arreatplateau.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : Pit of Acheron</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Pit of Acheron</div>
              </q-card-section>
              <q-img ref="img5" :src="require('@/assets/images/d2r/maps/act5/acheron.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="blue-5" side="left" icon="fas fa-igloo">
          <div class="row q-mb-lg">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Crystalline Passage</div>
              </q-card-section>
              <q-img ref="img6" :src="require('@/assets/images/d2r/maps/act5/crystallinepassage.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : Frozen River</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Frozen River</div>
              </q-card-section>
              <q-img ref="img7" :src="require('@/assets/images/d2r/maps/act5/frozenriver.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Anya</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="title" class="text-h5 text-title text-weight-bold font-kodia" icon="flag">
          Act V - Part I Completed
        </q-timeline-entry>
      </q-timeline>
      <q-timeline dense :layout="layout">
        <q-timeline-entry color="brown-5" side="left" icon="foundation">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Harrogath</div>
              </q-card-section>
              <q-img ref="img8" :src="require('@/assets/images/d2r/maps/act5/harrogath02.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Speak to NPCs for Quest Assignments</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="amber-8" side="right" icon="fas fa-gopuram">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Nihlathak's Temple</div>
              </q-card-section>
              <q-img ref="img9" :src="require('@/assets/images/d2r/maps/act5/nihlathaktemple.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="indigo-5" side="left" icon="fas fa-dungeon">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Halls of Anguish</div>
              </q-card-section>
              <q-img ref="img10" :src="require('@/assets/images/d2r/maps/act5/hallsofanguish.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="indigo-7" side="right" icon="fas fa-dungeon">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Halls of Pain</div>
              </q-card-section>
              <q-img ref="img11" :src="require('@/assets/images/d2r/maps/act5/hallsofpain.jpg')" width="100%" />
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
        <q-timeline-entry color="indigo-9" side="left" icon="fas fa-dungeon">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Halls of Vaught</div>
              </q-card-section>
              <q-img ref="img12" :src="require('@/assets/images/d2r/maps/act5/hallsofvaught.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Nihlathak</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="title" class="text-h5 text-title text-weight-bold font-kodia" icon="flag">
          Act V - Part II Completed
        </q-timeline-entry>
      </q-timeline>
      <q-timeline dense :layout="layout">
        <q-timeline-entry color="blue-3" side="left" icon="fas fa-igloo">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Crystalline Passage</div>
              </q-card-section>
              <q-img ref="img13" :src="require('@/assets/images/d2r/maps/act5/crystallinepassage.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : Frozen River</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="blue-7" side="right" icon="fas fa-igloo">
          <div class="row q-mb-lg">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Glacial Trail</div>
              </q-card-section>
              <q-img ref="img14" :src="require('@/assets/images/d2r/maps/act5/glacialtrail.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : Drifter Cavern</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Drifter Cavern</div>
              </q-card-section>
              <q-img ref="img15" :src="require('@/assets/images/d2r/maps/act5/driftercavern.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="blue-5" side="left" icon="lens_blur">
          <div class="row q-mb-lg">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Frozen Tundra</div>
              </q-card-section>
              <q-img ref="img16" :src="require('@/assets/images/d2r/maps/act5/frozentundra.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : Infernal Pit</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Infernal Pit</div>
              </q-card-section>
              <q-img ref="img16" :src="require('@/assets/images/d2r/maps/act5/infernalpit.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="blue-8" side="right" icon="fas fa-igloo">
          <div class="row q-mb-lg">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">The Ancients' Way</div>
              </q-card-section>
              <q-img ref="img17" :src="require('@/assets/images/d2r/maps/act5/ancientsway.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : Icy Cellar</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Icy Cellar</div>
              </q-card-section>
              <q-img ref="img18" :src="require('@/assets/images/d2r/maps/act5/icycellar.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="brown-8" side="left" icon="fas fa-mountain">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Arreat Summit</div>
              </q-card-section>
              <q-img ref="img19" :src="require('@/assets/images/d2r/maps/act5/arreatsummit.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Altar of the Heavens</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-8" side="right" icon="fas fa-dungeon">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Worldstone Keep</div>
              </q-card-section>
              <q-img ref="img20" :src="require('@/assets/images/d2r/maps/act5/worldstonekeep.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : 3</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : Yes (on Level 2)</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="red-8" side="left" icon="fas fa-dungeon">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Throne of Destruction</div>
              </q-card-section>
              <q-img ref="img21" :src="require('@/assets/images/d2r/maps/act5/throneofdestruction.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Baal's Minions</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="red-10" side="right" icon="fas fa-dungeon">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">The Worldstone Chamber</div>
              </q-card-section>
              <q-img ref="img22" :src="require('@/assets/images/d2r/maps/act5/worldstonechamber.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Baal</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="title" class="text-h5 text-title text-weight-bold font-kodia" icon="flag">
          Act V - Part III Completed
        </q-timeline-entry>
      </q-timeline>
    </template>
    <p class="q-mt-xl text-right text-grey-6" :class="$q.screen.lt.md ? 'text-caption' : ''">
      {{$t('d2r.knowledge.source')}} :
      <a style="text-decoration: none;" class="text-title" target="_blank"
        href="http://classic.battle.net/diablo2exp/maps/act5.shtml">{{$t('d2r.knowledge.arreatSummit')}}</a>
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