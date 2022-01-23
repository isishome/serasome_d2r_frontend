<template>
  <div>
    <div class="text-h5 q-pa-md">계산기</div>
    <q-separator />
    <q-card>
      <q-card-section>
        <div class="row items-center q-col-gutter-md">
          <div class="col">
            <q-input v-model="input" type="textarea" label="입력" dense outlined />
          </div>
          <div class="col-2 column q-gutter-sm">
            <div class="row justify-center items-center q-gutter-md">
              <q-radio v-model="cType" val="none" label="없음" dense outlined />
              <q-radio v-model="cType" val="sum" label="합" dense outlined />
              <q-radio v-model="cType" val="rate" label="배율" dense outlined />
              <q-radio v-model="cType" val="repeat" label="반복" dense outlined />
            </div>
            <q-input v-model="calc" label="값" dense outlined />
          </div>
          <div class="col-2">
            <q-btn push color="red" label="처리" @click="process" />
          </div>
          <div class="col-9">
            <q-input v-model="result" type="textarea" label="결과" dense outlined />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        input: null,
        cType: 'none',
        calc: 0,
        result: null
      }
    },
    created() {
      this.$q.dark.set(false)
    },
    methods: {
      process() {
        if (this.cType === 'repeat') {
          if (this.calc.indexOf('-') !== -1)
            this.result = JSON.stringify([...Array(21)].map(() => [Number(this.calc.split('-')[0]), Number(this.calc.split('-')[1])]))
          else
            this.result = JSON.stringify([...Array(21)].map(() => Number(this.calc)))

          return false
        }
        else if (this.input !== null) {
          let calcStr = ''
          if (this.cType === 'none') {
            this.result = this.input.replace(/(\d{1,4})-(\d{1,4})/gi, '[$1,$2]').replace(/\t/gi, ',').replace(/^(.*)$/, '[0, $1]')
            return false
          }
          else if (this.cType === 'rate')
            calcStr = this.input.replace(/(\d{1,4})-(\d{1,4})/gi, `[Math.ceil($1 * ${this.calc}),Math.ceil($2 * ${this.calc})]`).replace(/\t/gi, ',').replace(/^(.*)$/, '[0, $1]')
          else if (this.cType === 'sum')
            calcStr = this.input.replace(/(\d{1,4})-(\d{1,4})/gi, `[$1 - ${this.calc},$2 - ${this.calc}]`).replace(/\t/gi, ',').replace(/^(.*)$/, '[0, $1]')

          this.result = JSON.stringify(eval(calcStr))
        }
      }
    }
  }
</script>
<style></style>