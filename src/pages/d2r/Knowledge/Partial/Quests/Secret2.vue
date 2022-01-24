<template>
  <div class="wrap">
    <q-list ref="list" dense>
      <q-item>
        <q-item-section>
          <div class="row justify-center items-center q-col-gutter-x-sm">
            <div>
              <q-img :src="require('@/assets/images/d2r/quests/secret2/uberdia.gif')" width="125px" />
            </div>
          </div>
        </q-item-section>
      </q-item>
      <template v-for="(contents, index) in customize[$i18n.locale]">
        <q-item v-if="contents.label" class="head-title font-kodia text-title" :key="`title_${index}`">
          <q-item-section class="q-ml-sm">
            <q-item-label class="word-keep font-kodia row items-center">
              {{contents.label}}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="quest-info row items-center" :class="$q.screen.lt.sm ? 'q-mb-sm' : 'q-mb-md '"
          :key="`desc_${index}`">
          <q-item-section class="no-margin no-wrap">
            <q-item-label>
              <template v-if="contents.image">
                <img class="quest-image" :src="contents.image" @load="onload($event.target)" />
                <p class="word-keep" v-for="(d, index) in contents.desc" :class="index === 0 ? 'p-margin' : ''"
                  :key="index">{{d}}</p>
              </template>
            </q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </q-list>
    <div class="full-width quest-source">
      <p class="text-right">{{$t('d2r.knowledge.source')}} : <a style="text-decoration: none;" class="text-title"
          target="_blank"
          href="https://diablo-archive.fandom.com/wiki/Uber_Diablo_(Diablo_II)">{{$t('d2r.knowledge.diabloWiki')}}</a>
        & <a style="text-decoration: none;" class=" text-green-4" target="_blank"
          href="https://namu.wiki/w/%EC%9A%B0%EB%B2%84%20%EB%94%94%EC%95%84%EB%B8%94%EB%A1%9C">{{$t('d2r.knowledge.namuWiki')}}</a>
      </p>
    </div>
  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'

  export default {
    data() {
      return {
        customize: {
          'ko': [{
            label: '개요',
            image: require('@/assets/images/d2r/quests/secret2/secret00.jpg'),
            desc: ['사실 Über는 \'위버\'라고 읽는게 옳고 독일어지만 영어의 uber와 대응해서 그냥 우버라고 부르는 편이다. 독일어에선 über가 ~위쪽에, ~위에, ~에 대하여와 같은 뜻으로 쓰이지만 영어에서는 \'최고의\'라는 뜻으로 쓰인다.', '쉽게 말하면 \'강화형 디아블로\'. 생김새는 액트4의 디아블로와 똑같지만 파란색이다. 디아블로와 유사한 패턴의 공격을 하지만 문제는 오리지널 디아블로와 비교도 안될 정도로 킹왕짱 세다. 공격 속도 뿐만 아니라 마법 시전 속도와 이동 속도까지 보통 디아블로보다 훨씬 빠르며 패시브로 드루이드의 광역 스킬인 아마겟돈을 떨어뜨려 근처에 있는 플레이어 캐릭터에게 지속적인 피해를 입힌다.']
          },
          {
            label: '우버디아 소환 방법',
            image: require('@/assets/images/d2r/quests/secret2/secret01.jpg'),
            desc: ['원래는 복사된 조던링을 회수하기 위해 만들어졌으며, 조던링을 상점에 팔다보면 시스템 메시지로 \'XXX개의 조던 링을 상점에 팔았습니다.\' 라는 메시지가 뜬다. 그리고 계속 팔다보면 갑자기 \'디아블로가 이 세계를 배회하고 있다.\' 라는 메시지가 뜨는데, 이때 아무 곳에나 슈퍼 유니크 몬스터(항상 일정한 장소에 스폰되는)가 있는 곳으로 달려가면 유니크 몬스터가 우버 디아블로로 변신한다.']
          },
          {
            label: '보상',
            image: require('@/assets/images/d2r/quests/secret2/Annihilus.png'),
            desc: ['어쨌든 죽이면 "애니힐러스"라는 유니크 참을 드랍한다. 메피스토 소울스톤과 완전히 똑같이 생긴 스몰참이므로, 메피스토 소울스톤을 파괴하는 헬포지 퀘스트를 미루려고 소울스톤 버리다가 실수로 버리는 일 없도록 주의하자. 다른 유니크 참과 마찬가지로 캐릭당 하나밖에 들 수 없으므로, 사냥을 한 후에는 다른 캐릭으로 와서 집어야 한다.', '+1 모드 스킬', '+10-20 모든 속성(다양)', '모든 저항 +10-20 (다양)', '+5-10% 추가 경험치 (다양)', '요구레벨: 70']
          }],
          'en': [{
            label: 'Summary',
            image: require('@/assets/images/d2r/quests/secret2/secret00.jpg'),
            desc: ['Uber Diablo or Diablo Clone is a monster that spawns only on Hell difficulty ladder games on Battle.net when a certain number of Stone of Jordan rings are sold to merchants. A notification is displayed on-screen whenever a Stone of Jordan is sold.', 'ndicating the number that have been sold. Once a certain number of these rings are sold, the whole screen shakes and the words "Diablo Walks the Earth" appear on the screen. This message means that Uber Diablo has spawned.', 'He will spawn at the first Super Unique monster you encounter. So you can basically choose the location to fight Uber Diablo by selecting which Super Unique you want him to replace. He is similar in appearance to Hell level Diablo and is a formidable challenge. When killed, Uber Diablo drops the only unique small charm in the game, the Annihilus. It is recommended to have high lightning and fire resistance and physical damage reduction before taking on Uber Diablo.']
          },
          {
            label: 'How Uber Diablo Spawns',
            image: require('@/assets/images/d2r/quests/secret2/secret01.jpg'),
            desc: ['As mentioned, Uber Diablo spawns when a certain number of Stones of Jordan have been sold to merchants. This was originally intended to combat the rampant duping of SoJ\'s and, though it is now a somewhat antiquated problem, this is still the system used to spawn him.', 'When a game is created in Diablo II, it is randomly created on a server or IP Address, which range from .30 to .180, for a total of 151 possible servers. Each server keeps track of the number of SoJ\'s sold, and Uber Diablo will walk when a certain number have been sold. The exact number is unclear, but it is generally believed to range from 75-150. There are several methods to track which servers are close to spawning Uber Diablo, the easiest of which is likely to join the chat channel Op DClone. The most difficult part of camping an Uber Diablo spawn is landing a game in the correct server. To determine which server your game is on, make sure you are in the game, tab out to your desktop, and click the Start button on your Windows taskbar. Choose (or type in) Run and type in cmd. This will open a command prompt, into which you type:', 'netstat –n | find "4000"', 'This will cause a line of numbers to appear. Your server number is the number that appears directly before :4000 at the end of the line. Now all that\'s left to do is repeat this process until you create a game in the appropriate server. It should be noted that servers are realm specific, so an Uber Diablo spawn on server .45 on USWest will not necessarily correlate to a spawn on .45 on USEast.']
          },
          {
            label: 'Reward',
            image: require('@/assets/images/d2r/quests/secret2/Annihilus.png'),
            desc: ['This item holds the honor of being one of only two items to grant a bonus to earned Experience, the other being Ondal\'s Wisdom.', 'This item uses the sprite for Mephisto\'s Soulstone, despite a sprite for a red-colored "Diablo\'s Soulstone" having existed in the game at the time of creation which could have given it a more unique appearance.', '+1 To All Skills', '+10-20 To All Attributes (varies)', 'All Resistances +10-20 (varies)', '+5-10% To Experience Gained (varies)', 'Required Level: 70']
          }]
        },
        imageList: []
      }
    },
    computed: {
      ...mapGetters({
        images: 'getD2RImages'
      })
    },
    watch: {
      imageList: function (val) {
        if (this.$refs.list.$el.querySelectorAll('img').length === val.length)
          this.setImages(val)
      }
    },
    methods: {
      ...mapActions({
        setImages: 'setD2RImages'
      }),
      onload(el) {
        this.imageList.push({ 'element': el, 'src': el.src })
      }
    }
  }
</script>
<style scoped>
  .wrap {
    padding: 1em;
  }

  .head-title {
    font-size: 1.8em;
    font-weight: bold;
    padding: 0;
  }

  .quest-info {
    font-size: 1.2em;
    letter-spacing: 0.6px;
    padding: 0;
  }

  .quest-info p {
    text-indent: 0.8em;
    line-height: 1.6em !important;
  }

  .quest-info p.p-margin {
    margin-top: 20px;
  }

  .quest-source {
    font-size: 1em;
  }

  .quest-image {
    margin: 10px 20px 20px 0;
    max-width: 40%;
    float: left;
    box-shadow: -1px -1px 2px 1px rgba(82, 79, 73, 0.6), 1px 1px 2px 1px rgba(100, 85, 50, .5);
    border-radius: 4px;
  }

  @media screen and (max-width:599px) {
    .wrap {
      padding: 0;
    }

    .head-title {
      font-size: 1em;
    }

    .quest-info {
      font-size: 0.8em !important;
    }

    .quest-info p.p-margin {
      margin-top: 6px;
    }

    .quest-source {
      font-size: 0.8em;
    }

    .quest-image {
      margin: 6px;
      margin-top: 0;
      box-shadow: -1px -1px 0 0 rgba(82, 79, 73, 0.6), 1px 1px 0 0 rgba(100, 85, 50, .5);
      max-width: 40%;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s;
  }

  .fade-enter,
  .fade-leave-to

  /* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
  }
</style>