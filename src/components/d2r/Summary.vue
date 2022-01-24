<template>
  <div class="row q-pa-xs justify-start q-col-gutter-md">
    <div v-if="loading" class="non-selectable">
      <q-inner-loading showing size="xs" class="bg-transparent">
        <q-spinner-ball size="xl" color="red" />
      </q-inner-loading>
    </div>
    <div v-for="sec in data" :key="sec.value" class="col-12 col-md-4">
      <div class="summary">
        <q-toolbar dense flat class="row justify-between sub">
          <div class="lt-sm col-4"></div>
          <div class="col-4 text-weight-bold font-kodia" :class="$q.screen.lt.sm ? 'text-center' : ''">{{sec.title}}
          </div>
          <div class="col text-right">
            <q-icon v-if='more === true' name="more_horiz" size="xs" class="cursor-pointer"
              @click="moreClick(sec.value)" />
          </div>
        </q-toolbar>
        <q-list padding :dense="$q.screen.lt.sm" class="text-body">
          <q-item-label v-if="sec.summary.length ===0" class="q-ma-md">
            <div class="row justify-center">
              {{$t('table.noData')}}
            </div>
          </q-item-label>
          <q-item class="no-padding" v-for="summary in sec.summary" :key="summary.pid">
            <q-btn flat unelevated no-caps class="text-body fit" @click="itemClick(summary)">
              <q-item-section top avatar>
                <q-avatar rounded class="outlined">
                  <q-img :ratio="1" style="width:40px" :src="parsThumbnail(summary.thumbnail)" spinner-color="d2r">
                    <template v-if="blank !== null" #error>
                      <q-img no-default-spinner basic :ratio="2/1" :src="require(`@/assets/images/d2r/${blank}`)"
                        class="absolute-center bg-transparent" />
                    </template>
                  </q-img>
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label class="q-py-xs text-body2 ellipsis text-left">{{summary.title}}</q-item-label>
                <q-item-label class="q-py-xs text-caption ellipsis text-left" style="opacity: .5;">
                  {{summary.contents}}
                </q-item-label>
              </q-item-section>
            </q-btn>
          </q-item>
        </q-list>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'd2r-summary',
    props: {
      data: {
        type: Array,
        required: true,
        default: function () {
          return []
        }
      },
      more: {
        type: Boolean,
        default: false
      },
      blank: {
        type: String,
        default: null
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
      }
    },
    methods: {
      parsThumbnail(thumbnail) {
        return decodeURIComponent(thumbnail) === 'null' ? require(`@/assets/images/d2r/${this.blank}`) : decodeURIComponent(thumbnail)
      },
      moreClick(sec) {
        this.$emit('more-click', sec)
      },
      itemClick(item) {
        this.$emit('item-click', item)
      }
    }
  }
</script>
<style scoped>
  .summary {
    background-color: rgba(10, 10, 10, 1);
    border-radius: 10px;
    height: 100%;
  }

  .body--light .summary {
    background-color: rgba(240, 240, 240, 1);
  }

  .sub {
    min-height: 36px;
    font-size: 1em;
    color: rgba(184, 156, 91, 1);
    background-color: rgba(24, 30, 30, 1) !important;
    border-radius: 10px 10px 0 0;
  }

  .body--light .sub {
    color: rgb(100, 100, 100);
    background-color: rgba(24, 30, 30, .2) !important;
  }

  .outlined {
    box-shadow: 0 0 0 1px rgba(45, 45, 45, 1);
  }
</style>