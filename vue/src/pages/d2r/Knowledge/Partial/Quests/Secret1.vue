<template>
  <div class="wrap">
    <q-list ref="list" dense>
      <q-item>
        <q-item-section>
          <div class="row justify-center items-center q-col-gutter-x-sm">
            <div>
              <q-img :src="require('@/assets/images/d2r/quests/secret1/hellbovine.gif')" width="93px" />
            </div>
            <div class="text-center">
              <q-btn push glossy icon="headset" color="grey-6" text-color="black" :size="$q.screen.lt.sm ? 'sm' : 'md'"
                padding="6px" round @click="play" />
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
          href="http://classic.battle.net/diablo2exp/quests/cow.shtml">{{$t('d2r.knowledge.arreatSummit')}}</a> & <a
          style="text-decoration: none;" class=" text-green-4" target="_blank"
          href="https://namu.wiki/w/%EC%B9%B4%EC%9A%B0%20%EB%A0%88%EB%B2%A8">{{$t('d2r.knowledge.namuWiki')}}</a>
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
            label: '루머의 시작',
            image: require('@/assets/images/d2r/quests/secret1/secret00.jpg'),
            desc: ['이때는 디아블로 1 시절이었는데, 본작의 배경인 트리스트람 마을 북동쪽에는 소 몇마리가 풀을 뜯고 있다. 클릭하면 소 울음 소리를 내는 것 외에는 아무 용도가 없는 놈들인데, 블리자드가 그 소들 앞에서 뭔가 행동을 취하면 \'숨겨진 카우 레벨\'로 가는 포탈이 열린다는 거짓 정보를 퍼뜨리기 시작한 것이다.', '나중에는 1999년 4월 1일 개발중인 디아블로2의 스샷이라면서 두발로 걷는 소떼가 도끼를 들고 사방에서 달려오는 스크린샷을 공개하기도 했다. 당연히 이때까지만 해도 유저들은 \'블리자드가 만우절 낚시는 오지게 잘하는구나\' 하고 웃어넘겼지만…']
          },
          {
            label: '카우 레벨 오픈 방법',
            image: require('@/assets/images/d2r/quests/secret1/secret01.jpg'),
            desc: ['디아블로2에서 실제로 등장하여 유저들을 충격과 공포로 몰아넣었다. 오픈 방법은 우선 디아블로 2를 한번 클리어 해야한다.', '오리지날은 디아블로, 확장팩은 바알을 잡아서 해당 난이도를 한번 클리어 해야한다. 다른 사람이 연 카우 레벨에 입장하는 것은 상관 없다.', '액트2에서 얻는 아이템 조합기인 \'호라드릭 큐브\'에 액트1의 파괴된 트리스트람 마을에서 얻는 워트의 의족과 상점에서 파는 타운포탈 책을 넣는다.', '이때 책에 든 포탈 스크롤의 숫자가 카우 몹의 수, 경험치, 아이템 등과 비례한다는 속설이 있어 꽉 채워 넣은 뒤에 카우 레벨을 열기도 한다. 하지만 0/20이건 20/20이건 아무 상관 없다.']
          },
          {
            label: '카우 레벨 입장',
            image: require('@/assets/images/d2r/quests/secret1/secret02.jpg'),
            desc: ['이렇게 해서 준비물을 모은 다음 액트1의 마을인 로그 캠프 안에서 합치면 빨간 포탈이 열리고, 카우 레벨로 통하게 된다. 다만 로그 캠프에서만 가능하고 다른 마을에서는 불가능하다. 또한 난이도도 반영되는데 사례로 나메로 카우 레벨을 공략하고 싶을 땐 반드시 나메로 한 번 클리어하고 의족을 얻어 만들어야 하며, 만일 노말에서 얻은 의족으로 나메에서는 열기 불가능하니 주의.']
          },
          {
            label: '카우 레벨에 관하여',
            image: require('@/assets/images/d2r/quests/secret1/secret03.jpg'),
            desc: ['카우 레벨의 지형은 스토니 필드를 모티브로 해서 만들어졌지만 스토니 필드와 달리 로그 캠프의 울타리가 있고, 불에 타버린 집과 성소와 우물이 없다는 차이만 있다.']
          },
          {
            label: '카우 레벨에 관하여',
            image: require('@/assets/images/d2r/quests/secret1/secret04.jpg'),
            desc: ['카우 레벨은 말 그대로 할버드를 든 지옥소(Hell Bovine) 떼들이 인해전술처럼 마구 몰려와서 플레이어를 죽이려고 하는 것이다. 이 소들이 다가올 때 내는 소리는 "moo moo"이며 한국식으로 말하자면 "음메 음메"와 같다. 진짜 소의 울음소리가 아니라 사람 목소리로 무미건조하게 "음메음메" 하면서 달려오는 것이다. 덤으로 디아블로의 성우인 빌 로퍼가 지옥소들을 더빙했다고 한다.']
          },
          {
            label: '카우 레벨에 관하여',
            image: require('@/assets/images/d2r/quests/secret1/secret05.jpg'),
            desc: ['확장팩 등장전에는 그야말로 들어가자마자 순식간에 썰려나갈 정도로 흉악하게 어려운 곳이었으나 확장팩이 등장하면서 강력한 장비들이 추가됨에 따라 형세가 역전, 이 소들이 경험치도 잘 주고 숫자도 상당히 많기 때문에 레벨업용 코스로 인기를 얻게 된다. 저레벨 캐릭터를 카우 레벨에 넣어두고 고렙 캐릭터가 소들을 열심히 잡게 하면 순식간에 90 이상의 레벨도 찍을수 있었다.']
          }],
          'en': [{
            label: 'The beginning of a rumor',
            image: require('@/assets/images/d2r/quests/secret1/secret00.jpg'),
            desc: ['Many players of the original Diablo will remember the mysterious rumor that there was a Secret Cow Level. The story went that by clicking on a specific cow in Tristram a certain number of times, you could access a wondrous place known as the Secret Cow Level. There was, of course, no Cow Level in Diablo, but the legend was born. When StarCraft was released, it featured a cheat code, "There is no cow level". This was our way of officially confirming that there was, in fact, no Secret Cow Level.', 'During the production of Diablo II, gamers often asked if there would be any cows to battle in the game. On April 1st, 1999, a Diablo II Screenshot of the Week featured cows fighting. People wondered if the screenshot was an April Fool\'s joke or if there really was a Secret Cow Level planned for Diablo II.When Diablo II was released, a quest item called The Horadric Cube allowed players to combine items to create new items.It wasn\'t long before players were experimenting with Cube combinations, hoping to find the keys to unlock new and powerful secrets. Eventually a recipe was discovered that revealed the most anticipated secret of them all -- the Secret Cow Level in Diablo II!']
          },
          {
            label: 'Traveling to the Secret Cow Level',
            image: require('@/assets/images/d2r/quests/secret1/secret01.jpg'),
            desc: ['To be able to create the red cow portal leading to the Secret Cow Level your character must first complete the "Eve of Destruction" quest (the final quest in Act V) on the same difficulty setting.', 'Go to the Rogue Encampment in Act I. Place one Tome of Town Portal + Wirt\'s Leg into the Horadric Cube and hit the Transmute button. A Red Portal will now open to the Secret Cow Level. You must transmute this combination in the Rogue Encampment for the portal to open. If you hear a message, "I can\'t do that" then you are doing something wrong. Make sure you have completed the last quest in Act V, that you have placed the correct items in the Horadric Cube, and that you are transmuting the items in the correct location.']
          },
          {
            label: 'Enter the Secret Cow Level',
            image: require('@/assets/images/d2r/quests/secret1/secret02.jpg'),
            desc: ['Once you have Wirt\'s Leg, return to the Rogue Encampment and put it and a Tome of Town Portal into your Horadric Cube.The Tome does not need to be filled to work, so if you do not want to use the Tome you have filled with 20 Town Portals, you can simply buy an almost empty one from Akara.']
          },
          {
            label: 'About the Secret Cow Level',
            image: require('@/assets/images/d2r/quests/secret1/secret03.jpg'),
            desc: ['The Secret Cow Level can be very easy or very hard depending on your class, and what skills you use. The first thing you will notice is there are a LOT of cows. Exploring is not a wise idea, as you will quickly have an unbelievable number of Cows on your trail. Try to avoid being surrounded by the Cows at all costs.']
          },
          {
            label: 'About the Secret Cow Level',
            image: require('@/assets/images/d2r/quests/secret1/secret04.jpg'),
            desc: ['Use area effect spells if possible, such as the Necromancer\'s Corpse Explosion. The Sorceress can employ Fire Wall, Chain Lightning, Frozen Orb or Blizzard to great effect. Barbarians can use Grim Wards, Howl and Whirlwind. Amazons can use Freezing Arrows, Decoy and Valkyrie to keep the Cows at bay. Paladins can use Conversion and their Thorns aura. Druids can use Fissure, Tornado, Hurricane and Armageddon. Assassins can use Wake of Inferno, Death Sentry, Claws of Thunder, Blades of Ice, Phoenix Strike and the Shadow Master.']
          },
          {
            label: 'About the Secret Cow Level',
            image: require('@/assets/images/d2r/quests/secret1/secret05.jpg'),
            desc: ['Try to stay in one area until you kill all of the cows in a pack. Try to not run around too much until you have cleared out the cows in your area or you run the risk of attracting too many cows.']
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
      },
      play() {
        var audio = new Audio(require(`@/assets/wavs/d2r/quests/cow${Math.floor(Math.random() * 24) + 1}.wav`));
        audio.play()
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