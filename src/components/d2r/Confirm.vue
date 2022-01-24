<template>
  <div>
    <q-dialog v-model="show" @input="change">
      <q-card class="d2r-confirm">
        <q-card-section class="row items-center">
          <q-avatar :color="color" size="md" :text-color="textColor">
            <q-icon :name="icon" size="sm" padding="sm" />
          </q-avatar>
          <span class="col q-ml-sm">{{message}}</span>
        </q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn flat :label="$t('btn.cancel')" @click="cancel" />
          <q-btn flat :label="$t('btn.confirm')" @click="confirm" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
  export default {
    name: 'd2r-confirm',
    props: {
      value: {
        type: Boolean,
        defaut: false
      },
      icon: {
        type: String,
        defaut: null
      },
      color: {
        type: String,
        defaut: null
      },
      textColor: {
        type: String,
        defaut: null
      },
      message: {
        type: String,
        defaut: null
      }
    },
    data() {
      return {
        show: false
      }
    },
    watch: {
      value: function (val) {
        this.show = val
      }
    },
    methods: {
      change() {
        if (this.show === false)
          this.cancel()
      },
      cancel() {
        this.$emit('cancel')
      },
      confirm() {
        this.$emit('confirm');
      }
    }
  }
</script>
<style scoped>
  .body--dark .d2r-confirm {
    background-color: rgba(50, 50, 50, .5) !important;
  }
</style>