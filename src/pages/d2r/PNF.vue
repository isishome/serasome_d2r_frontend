<template>
  <q-layout>
    <q-list class="column justify-start items-center absolute-center full-width">
      <q-item class="lt-md">
        <q-avatar size="60px" round>
          <q-badge floating transparent color="red" label="404" style="top:4px;right:-10px;" />
          <img src="@/assets/images/d2r.png" />
        </q-avatar>
      </q-item>
      <q-item>
        <q-item-section class="gt-sm" center avatar>
          <q-avatar size="60px" round>
            <q-badge floating transparent color="red" label="404" style="top:4px;right:-10px;" />
            <img src="@/assets/images/d2r.png" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-h6 text-weight-bold">{{$t('pnf.desc1')}}</q-item-label>
          <q-item-label class="text-body q-pt-sm">{{$t('pnf.desc2')}}
          </q-item-label>
          <q-item-label class="text-body">{{$t('pnf.desc3')}}
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-layout>
</template>
<script>
  export default {
    name: 'PageNotFound',
    data() {
      return {
      }
    }
  }
</script>
<style scoped>
  img {
    width: 60px !important;
    height: auto !important;
  }
</style>