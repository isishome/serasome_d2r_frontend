<template>
  <div class="word-keep">
    <template v-if="$i18n.locale === 'ko'">
      <q-timeline :layout="layout">
        <q-timeline-entry color="green" side="left" icon="grass">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Rogue Encampment</div>
              </q-card-section>
              <q-img ref="img0" :src="require('@/assets/images/d2r/maps/act1/RogueEncampment.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 퀘스트 할당을 위해 NPC와 대화</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가 구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="red-10" side="right" icon="fas fa-dungeon">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Blood Moor</div>
              </q-card-section>
              <q-img ref="img1" :src="require('@/assets/images/d2r/maps/act1/BloodMoor.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Den of Evil</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가 구역 : Den of Evil / Caves (퀘스트 1이 완료된경우)</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="blue" side="left" icon="landscape">
          <div class="row q-mb-lg">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Cold Plains</div>
              </q-card-section>
              <q-img ref="img2" :src="require('@/assets/images/d2r/maps/act1/ColdPlains.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가 구역 : Caves (2층)</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Burial Grounds</div>
              </q-card-section>
              <q-img ref="img3" :src="require('@/assets/images/d2r/maps/act1/BurialGrounds.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Blood Raven</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가 구역 : The Crypt - The Mausoleum</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="red-5" side="right" icon="bar_chart">
          <div class="q-mb-lg row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Stony Field</div>
              </q-card-section>
              <q-img ref="img4" :src="require('@/assets/images/d2r/maps/act1/StoneyField.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Cairn Stones - Tower Tome</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가 구역 : The Underground Passage Entry</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Tristram</div>
              </q-card-section>
              <q-img ref="img5" :src="require('@/assets/images/d2r/maps/act1/Tristram.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Deckard Cain</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가 구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-8" side="left" icon="landscape">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">The Underground Passage</div>
              </q-card-section>
              <q-img ref="img6" :src="require('@/assets/images/d2r/maps/act1/UndergroundPassage.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : 2</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가 구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-5" side="right" icon="fab fa-fort-awesome">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Dark Wood</div>
              </q-card-section>
              <q-img ref="img7" :src="require('@/assets/images/d2r/maps/act1/DarkWood.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Inifuss Tree</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가 구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-8" side="left" icon="fas fa-chess-rook">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Black Marsh</div>
              </q-card-section>
              <q-img ref="img8" :src="require('@/assets/images/d2r/maps/act1/BlackMarsh.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : The Forgotten Tower (5층)</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가 구역 : The Hole (2층)</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-9" side="right" icon="grass">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Tamoe Highland</div>
              </q-card-section>
              <q-img ref="img9" :src="require('@/assets/images/d2r/maps/act1/TamoeHighland.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가 구역 : The Pit (2층)</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-9" side="left" icon="fas fa-chess-rook">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Monastery Gate</div>
              </q-card-section>
              <q-img ref="img10" :src="require('@/assets/images/d2r/maps/act1/MonasteryGate.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가 구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-9" side="right" icon="grass">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Outer Cloister</div>
              </q-card-section>
              <q-img ref="img11" :src="require('@/assets/images/d2r/maps/act1/OuterCloister.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가 구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-9" side="left" icon="fas fa-chess-rook">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Barracks</div>
              </q-card-section>
              <q-img ref="img12" :src="require('@/assets/images/d2r/maps/act1/Barracks.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : The Horadric Malus</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가 구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-10" side="right" icon="view_week">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Jail</div>
              </q-card-section>
              <q-img ref="img13" :src="require('@/assets/images/d2r/maps/act1/Jail.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : 3</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음 (1층)</div>
                <div>동굴 / 추가 구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-10" side="left" icon="grass">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Inner Cloister</div>
              </q-card-section>
              <q-img ref="img14" :src="require('@/assets/images/d2r/maps/act1/InnerCloister.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가 구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="amber-10" side="right" icon="fas fa-church">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Cathedral</div>
              </q-card-section>
              <q-img ref="img15" :src="require('@/assets/images/d2r/maps/act1/Cathedral.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가 구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-8" side="left" icon="fas fa-chess-rook">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Catacombs</div>
              </q-card-section>
              <q-img ref="img16" :src="require('@/assets/images/d2r/maps/act1/Catacombs.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : 4</div>
                <div>퀘스트 관련 영역 / 몬스터 : Andariel (4층)</div>
                <div>웨이포인트 : 있음(2층)</div>
                <div>동굴 / 추가 구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="title" class="text-h5 text-title text-weight-bold font-kodia" icon="flag">액트 I 완료
        </q-timeline-entry>
      </q-timeline>
    </template>
    <template v-if="$i18n.locale === 'en'">
      <q-timeline :layout="layout">
        <q-timeline-entry color="green" side="left" icon="grass">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Rogue Encampment</div>
              </q-card-section>
              <q-img ref="img0" :src="require('@/assets/images/d2r/maps/act1/RogueEncampment.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : Speak to NPCs for Quest Assignments</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="red-10" side="right" icon="fas fa-dungeon">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Blood Moor</div>
              </q-card-section>
              <q-img ref="img1" :src="require('@/assets/images/d2r/maps/act1/BloodMoor.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : Den of Evil</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : Den of Evil / Caves (if Quest I has been completed)</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="blue" side="left" icon="landscape">
          <div class="row q-mb-lg">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Cold Plains</div>
              </q-card-section>
              <q-img ref="img2" :src="require('@/assets/images/d2r/maps/act1/ColdPlains.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : Caves (2 Levels)</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Burial Grounds</div>
              </q-card-section>
              <q-img ref="img3" :src="require('@/assets/images/d2r/maps/act1/BurialGrounds.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : Blood Raven</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : The Crypt - The Mausoleum</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="red-5" side="right" icon="bar_chart">
          <div class="q-mb-lg row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Stony Field</div>
              </q-card-section>
              <q-img ref="img4" :src="require('@/assets/images/d2r/maps/act1/StoneyField.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : Cairn Stones - Tower Tome</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : The Underground Passage Entry</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Tristram</div>
              </q-card-section>
              <q-img ref="img5" :src="require('@/assets/images/d2r/maps/act1/Tristram.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : Deckard Cain</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-8" side="left" icon="landscape">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">The Underground Passage</div>
              </q-card-section>
              <q-img ref="img6" :src="require('@/assets/images/d2r/maps/act1/UndergroundPassage.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : 2</div>
                <div>Quest Related Areas/Monsters : None</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-5" side="right" icon="fab fa-fort-awesome">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Dark Wood</div>
              </q-card-section>
              <q-img ref="img7" :src="require('@/assets/images/d2r/maps/act1/DarkWood.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : Inifuss Tree</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-8" side="left" icon="fas fa-chess-rook">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Black Marsh</div>
              </q-card-section>
              <q-img ref="img8" :src="require('@/assets/images/d2r/maps/act1/BlackMarsh.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : The Forgotten Tower (5 Levels)</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : The Hole (2 Levels)</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-9" side="right" icon="grass">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Tamoe Highland</div>
              </q-card-section>
              <q-img ref="img9" :src="require('@/assets/images/d2r/maps/act1/TamoeHighland.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : None</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : The Pit (2 Levels)</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-9" side="left" icon="fas fa-chess-rook">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Monastery Gate</div>
              </q-card-section>
              <q-img ref="img10" :src="require('@/assets/images/d2r/maps/act1/MonasteryGate.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-9" side="right" icon="grass">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Outer Cloister</div>
              </q-card-section>
              <q-img ref="img11" :src="require('@/assets/images/d2r/maps/act1/OuterCloister.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-9" side="left" icon="fas fa-chess-rook">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Barracks</div>
              </q-card-section>
              <q-img ref="img12" :src="require('@/assets/images/d2r/maps/act1/Barracks.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : The Horadric Malus</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-10" side="right" icon="view_week">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Jail</div>
              </q-card-section>
              <q-img ref="img13" :src="require('@/assets/images/d2r/maps/act1/Jail.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : 3</div>
                <div>Quest Related Areas/Monsters : None</div>
                <div>Waypoint : Yes (on Jail Level 1)</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-10" side="left" icon="grass">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Inner Cloister</div>
              </q-card-section>
              <q-img ref="img14" :src="require('@/assets/images/d2r/maps/act1/InnerCloister.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : None</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="amber-10" side="right" icon="fas fa-church">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Cathedral</div>
              </q-card-section>
              <q-img ref="img15" :src="require('@/assets/images/d2r/maps/act1/Cathedral.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : None</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-8" side="left" icon="fas fa-chess-rook">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Catacombs</div>
              </q-card-section>
              <q-img ref="img16" :src="require('@/assets/images/d2r/maps/act1/Catacombs.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : 4</div>
                <div>Quest Related Areas/Monsters : Andariel (on Catacombs Level 4)</div>
                <div>Waypoint : Yes (on Catacombs Level 2)</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="title" class="text-h5 text-title text-weight-bold font-kodia" icon="flag">
          Act I Completed
        </q-timeline-entry>
      </q-timeline>
    </template>
    <p class="q-mt-xl text-right text-grey-6" :class="$q.screen.lt.md ? 'text-caption' : ''">
      {{$t('d2r.knowledge.source')}} :
      <a style="text-decoration: none;" class="text-title" target="_blank"
        href="http://classic.battle.net/diablo2exp/maps/act1.shtml">{{$t('d2r.knowledge.arreatSummit')}}</a>
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