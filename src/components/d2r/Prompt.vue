<template>
  <div>
    <q-dialog v-model="popup" :value="value" :position="$q.screen.lt.md ? 'bottom' : 'standard'"
      :persistent="!noPersistent" @hide="cancel">
      <q-card :dark="dark" bordered class="full-width">
        <q-card-section>
          <div class="text-h6">{{title}}</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input :dark="dark" ref="contents" :color="color" v-model="url" :rules="rules" :prefix="prefix"
            @keyup.enter="ok" autofocus outlined hide-hint dense no-error-icon hide-bottom-space>
            <template v-slot:append>
              <q-icon v-if="url !== ''" name="close" @click="url = ''" class="cursor-pointer" />
            </template>
          </q-input>
        </q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn flat :label="$t('btn.cancel')" @click="cancel" />
          <q-btn flat :label="confirmLabel" @click="ok" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
  export default {
    name: 'ss-prompt',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: 'Confirm'
      },
      contents: {
        type: String,
        default: ''
      },
      prefix: {
        type: String,
        default: ''
      },
      rules: {
        type: Array,
        default: function () {
          return {}
        }
      },
      confirmLabel: {
        type: String,
        default: function () {
          return this.$t('btn.confirm')
        }
      },
      color: {
        type: String,
        default: ''
      },
      dark: {
        type: Boolean,
        default: false
      },
      noPersistent: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        url: null,
        popup: false
      }
    },
    watch: {
      value: function (val) {
        this.popup = val
        this.url = this.contents
      }
    },
    methods: {
      cancel() {
        this.$emit('cancel')
      },
      ok() {
        if (this.$refs.contents.validate())
          this.$emit('ok', this.$refs.contents.$refs.input.value);
      }
    }
  }
</script>
<style scoped>
</style>