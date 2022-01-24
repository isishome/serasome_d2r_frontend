<template>
  <div class="word-keep">
    <template v-if="$i18n.locale === 'ko'">
      <q-timeline :layout="layout">
        <q-timeline-entry color="yellow-9" side="left" icon="store">
          <div class="q-mb-lg row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Lut Gholein</div>
              </q-card-section>
              <q-img ref="img0" :src="require('@/assets/images/d2r/maps/act2/LutGholein.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 퀘스트 할당을 위해 NPC와 대화</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역: 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-10" side="left" icon="fas fa-swimming-pool">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Sewers</div>
              </q-card-section>
              <q-img ref="img1" :src="require('@/assets/images/d2r/maps/act2/Sewers.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : 3</div>
                <div>퀘스트 관련 영역 / 몬스터 : Radament - Horadric Scroll (3층)</div>
                <div>웨이포인트 : 있음 (2층)</div>
                <div>동굴 / 추가구역: 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="yellow-9" side="right" icon="fas fa-mountain">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Rocky Waste</div>
              </q-card-section>
              <q-img ref="img2" :src="require('@/assets/images/d2r/maps/act2/RockyWaste.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역: 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="yellow-10" side="left" icon="fas fa-dungeon">
          <div class="row q-mb-lg">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Dry Hills</div>
              </q-card-section>
              <q-img ref="img3" :src="require('@/assets/images/d2r/maps/act2/DryHills.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역: 없음</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Halls of the Dead</div>
              </q-card-section>
              <q-img ref="img4" :src="require('@/assets/images/d2r/maps/act2/HallsoftheDead.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : 3</div>
                <div>퀘스트 관련 영역 / 몬스터 : Horadric Cube (3층)</div>
                <div>웨이포인트 : 있음 (on Level 2)</div>
                <div>동굴 / 추가구역: 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-5" side="right" icon="fas fa-bug">
          <div class="q-mb-lg row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Far Oasis</div>
              </q-card-section>
              <q-img ref="img5" :src="require('@/assets/images/d2r/maps/act2/FarOasis.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역: 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Maggot Lair</div>
              </q-card-section>
              <q-img ref="img6" :src="require('@/assets/images/d2r/maps/act2/MaggotLair.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : 3</div>
                <div>퀘스트 관련 영역 / 몬스터 : Staff of the Kings</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역: 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-8" side="left" icon="holiday_village">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Lost City</div>
              </q-card-section>
              <q-img ref="img7" :src="require('@/assets/images/d2r/maps/act2/LostCity.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역: Ancient Tunnels (1층)</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="orange-5" side="right" icon="fas fa-university">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Valley of Snakes</div>
              </q-card-section>
              <q-img ref="img8" :src="require('@/assets/images/d2r/maps/act2/ValleyofSnakes.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Claw Viper Temple</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역: Claw Viper Temple (2층)</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="title" class="text-h5 text-title text-weight-bold font-kodia" icon="flag">액트 II - 파트 I
          완료
        </q-timeline-entry>
      </q-timeline>
      <q-timeline :layout="layout">
        <q-timeline-entry color="yellow-9" side="left" icon="store">
          <div class="q-mb-lg row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Lut Gholein</div>
              </q-card-section>
              <q-img ref="img9" :src="require('@/assets/images/d2r/maps/act2/LutGholein.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 퀘스트 할당을 위해 NPC와 대화</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역: 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="purple" side="right" icon="fas fa-church">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Harem</div>
              </q-card-section>
              <q-img ref="img10" :src="require('@/assets/images/d2r/maps/act2/Harem.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역: 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="red-6" side="left" icon="fas fa-church">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">The Palace Cellar</div>
              </q-card-section>
              <q-img ref="img11" :src="require('@/assets/images/d2r/maps/act2/PalaceCellar.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : 3</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음 (1층)</div>
                <div>동굴 / 추가구역: 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="blue-9" side="right" icon="auto_awesome">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Arcane Sanctuary</div>
              </q-card-section>
              <q-img ref="img12" :src="require('@/assets/images/d2r/maps/act2/ArcaneSanctuary.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : The Summoner</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역: 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="orange-5" side="left" icon="fas fa-university">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Canyon of the Magi</div>
              </q-card-section>
              <q-img ref="img13" :src="require('@/assets/images/d2r/maps/act2/ValleyofKings.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역: Tal Rasha's Tombs (6개의 가짜무덤)</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="purple-8" side="right" icon="fas fa-cross">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Tal Rasha's Tomb</div>
              </q-card-section>
              <q-img ref="img14" :src="require('@/assets/images/d2r/maps/act2/TalRashasTomb.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : The Orifice for the Horadric Staff</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역: 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="purple-10" side="left" icon="fas fa-cross">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Tal Rasha's Chamber</div>
              </q-card-section>
              <q-img ref="img15" :src="require('@/assets/images/d2r/maps/act2/DurielsLair.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Duriel</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역: 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="title" class="text-h5 text-title text-weight-bold font-kodia" icon="flag">
          액트 II - 파트 II 완료
        </q-timeline-entry>
      </q-timeline>
    </template>
    <template v-if="$i18n.locale === 'en'">
      <q-timeline :layout="layout">
        <q-timeline-entry color="yellow-9" side="left" icon="store">
          <div class="q-mb-lg row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Lut Gholein</div>
              </q-card-section>
              <q-img ref="img0" :src="require('@/assets/images/d2r/maps/act2/LutGholein.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : Speak to NPCs for Quest Assignments</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-10" side="left" icon="fas fa-swimming-pool">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Sewers</div>
              </q-card-section>
              <q-img ref="img1" :src="require('@/assets/images/d2r/maps/act2/Sewers.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : 3</div>
                <div>Quest Related Areas/Monsters : Radament - Horadric Scroll (on Level 3)</div>
                <div>Waypoint : Yes (on Level 2)</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="yellow-9" side="right" icon="fas fa-mountain">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Rocky Waste</div>
              </q-card-section>
              <q-img ref="img2" :src="require('@/assets/images/d2r/maps/act2/RockyWaste.jpg')" width="100%" />
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
        <q-timeline-entry color="yellow-10" side="left" icon="fas fa-dungeon">
          <div class="row q-mb-lg">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Dry Hills</div>
              </q-card-section>
              <q-img ref="img3" :src="require('@/assets/images/d2r/maps/act2/DryHills.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Halls of the Dead</div>
              </q-card-section>
              <q-img ref="img4" :src="require('@/assets/images/d2r/maps/act2/HallsoftheDead.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : 3</div>
                <div>Quest Related Areas/Monsters : Horadric Cube (on Level 3)</div>
                <div>Waypoint : Yes (on Level 2)</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-5" side="right" icon="fas fa-bug">
          <div class="q-mb-lg row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Far Oasis</div>
              </q-card-section>
              <q-img ref="img5" :src="require('@/assets/images/d2r/maps/act2/FarOasis.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Maggot Lair</div>
              </q-card-section>
              <q-img ref="img6" :src="require('@/assets/images/d2r/maps/act2/MaggotLair.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : 3</div>
                <div>Quest Related Areas/Monsters : Staff of the Kings</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-8" side="left" icon="holiday_village">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Lost City</div>
              </q-card-section>
              <q-img ref="img7" :src="require('@/assets/images/d2r/maps/act2/LostCity.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : Ancient Tunnels (1 Level)</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="orange-5" side="right" icon="fas fa-university">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Valley of Snakes</div>
              </q-card-section>
              <q-img ref="img8" :src="require('@/assets/images/d2r/maps/act2/ValleyofSnakes.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : Claw Viper Temple</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : Claw Viper Temple (2 Levels)</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="title" class="text-h5 text-title text-weight-bold font-kodia" icon="flag">Act II - Part
          I Completed
        </q-timeline-entry>
      </q-timeline>
      <q-timeline :layout="layout">
        <q-timeline-entry color="yellow-9" side="left" icon="store">
          <div class="q-mb-lg row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Lut Gholein</div>
              </q-card-section>
              <q-img ref="img9" :src="require('@/assets/images/d2r/maps/act2/LutGholein.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : Speak to NPCs for Quest Assignments</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="purple" side="right" icon="fas fa-church">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Harem</div>
              </q-card-section>
              <q-img ref="img10" :src="require('@/assets/images/d2r/maps/act2/Harem.jpg')" width="100%" />
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
        <q-timeline-entry color="red-6" side="left" icon="fas fa-church">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">The Palace Cellar</div>
              </q-card-section>
              <q-img ref="img11" :src="require('@/assets/images/d2r/maps/act2/PalaceCellar.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : 3</div>
                <div>Quest Related Areas/Monsters : None</div>
                <div>Waypoint : Yes (on Level 1)</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="blue-9" side="right" icon="auto_awesome">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Arcane Sanctuary</div>
              </q-card-section>
              <q-img ref="img12" :src="require('@/assets/images/d2r/maps/act2/ArcaneSanctuary.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : The Summoner</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="orange-5" side="left" icon="fas fa-university">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Canyon of the Magi</div>
              </q-card-section>
              <q-img ref="img13" :src="require('@/assets/images/d2r/maps/act2/ValleyofKings.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : Tal Rasha's Tombs (6 False Tombs)</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="purple-8" side="right" icon="fas fa-cross">
          <div class="row">
            <q-card bordered class="map-card bg-knowledge text-weight-bold" style="float:left;clear:both;">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Tal Rasha's Tomb</div>
              </q-card-section>
              <q-img ref="img14" :src="require('@/assets/images/d2r/maps/act2/TalRashasTomb.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : The Orifice for the Horadric Staff</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-sm"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="purple-10" side="left" icon="fas fa-cross">
          <div class="row">
            <div class="col gt-sm"></div>
            <q-card bordered class="map-card bg-knowledge text-weight-bold">
              <q-card-section class="text-center">
                <div class="text-title text-weight-bold font-kodia">Tal Rasha's Chamber</div>
              </q-card-section>
              <q-img ref="img15" :src="require('@/assets/images/d2r/maps/act2/DurielsLair.jpg')" width="100%" />
              <q-card-section class="text-left">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : Duriel</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="title" class="text-h5 text-title text-weight-bold font-kodia" icon="flag">
          Act II - Part II Completed
        </q-timeline-entry>
      </q-timeline>
    </template>
    <p class="q-mt-xl text-right text-grey-6" :class="$q.screen.lt.md ? 'text-caption' : ''">
      {{$t('d2r.knowledge.source')}} :
      <a style="text-decoration: none;" class="text-title" target="_blank"
        href="http://classic.battle.net/diablo2exp/maps/act2.shtml">{{$t('d2r.knowledge.arreatSummit')}}</a>
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