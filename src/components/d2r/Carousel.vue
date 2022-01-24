<template>
  <div>
    <q-carousel class="full-width bg-transparent" :height="$q.screen.gt.xs ? '250px' : '150px'" animated
      :autoplay="10000" infinite v-model="slide">
      <q-carousel-slide v-for="(no, index) in $t('d2r.main.carousel')" :key="index" :name="no.name"
        :img-src="require(`@/assets/images/d2r/${ltmd}${no.img}.jpg`)">
        <div class="full-width bg-transparent custom-caption"
          :class="$q.screen.lt.sm ? 'absolute-center no-padding' : 'absolute-center'">
          <div class="d2r-top-title q-mb-sm word-keep" :style="textFlame">{{no.title}}</div>
          <div class="row justify-center">
            <div class="d2r-top-desc col-6 col-xs-10 word-keep" :style="textSub">{{no.sub}}</div>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data() {
      return {
        slide: 'first'
      }
    },
    computed: {
      carouselHeight() {
        const sm = this.$q.screen.lt.md
        return sm ? [0, '130px', '130px', '170px', '200px'][this.step] : [0, '90px', '140px', '190px'][this.step]
      },
      ltmd() {
        return this.$q.screen.lt.sm ? '1024_' : this.$q.screen.lt.md ? '1440_' : this.$q.screen.lt.lg ? '1920_' : ''
      },
      textFlame() {
        return this.$q.screen.lt.sm ? 'font-size:22px;line-height:23px;' : 'font-size:48px;'
      },
      textSub() {
        return this.$q.screen.lt.sm ? 'font-size:12px;line-height:16px;' : 'font-size:20px;'
      }
    }
  }
</script>
<style scoped>
  .custom-caption {
    text-align: center;
    padding: 12px;
    color: white;
    background-color: rgba(0, 0, 0, .3);
  }

  .d2r-top-title {
    font-family: 'Kodia';
    /* font-family: 'New Rocker', 'Do Hyeon', cursive; */
    font-weight: bolder;
    color: #000000 !important;
    text-shadow: 1px 1px 1px rgb(0, 0, 0), 0 0 3px rgb(251, 255, 0), 0 -1px 5px rgb(255, 136, 0), 0 -3px 10px rgb(255, 38, 0);
    filter: invert(90%);
    -webkit-filter: invert(90%);
  }

  @media screen and (max-width:599px) {
    .d2r-top-title {
      text-shadow: 0 0 1px rgb(0, 0, 0), 1px 0 1px rgb(251, 255, 0), -1px -1px 1px rgb(255, 102, 0), 1px -1px 1px rgb(255, 38, 0);
    }
  }

  .d2r-top-desc {
    font-family: 'Kodia';
    /* font-family: 'Nosifer', 'Black Han Sans', cursive; */
    font-weight: bolder;
    text-shadow: 0 0 8px rgba(0, 0, 0, 1);
    color: rgb(240, 156, 0);
    text-shadow: 2px 0 3px rgb(0, 0, 0), 0 2px 3px rgb(0, 0, 0), 0 -2px 3px rgb(0, 0, 0), 0 -2px 3px rgb(0, 0, 0);
  }
</style>