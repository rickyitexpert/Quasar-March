<template>
  <q-form class="q-gutter-sm" style="min-width:320px">
    <q-loader></q-loader>
    <h6> Accounting Taxes</h6>
    {{ formData }}
    <q-input label="Tax Name" v-model="formData.tax_name" :rules="[validationMandatory, validationNoSymbols]"></q-input>
    <q-input label="Tax Rate" v-model="formData.tax_rate" :rules="[validationMandatory]"></q-input>
    <div class="q-mt-xl absolute-bottom row q-gutter-sm">
      <q-btn label="Submit" color="primary" @click="submitForm"></q-btn>
      <q-btn label="Close" color="red" @click="$emit('close-form')"></q-btn>
    </div>
    <q-inner-loading :showing="visible">
      <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>
  </q-form>
</template>
<script>
import validationMixins from '../../../mixins/validations.js'
export default {
  mixins: [validationMixins],
  data () {
    return {
      formData: {},
      visible: false
    }
  },
  methods: {
    async submitForm () {
      this.visible = true
      let response = await this.$axios.post('https://gangotri-api.brainysoftwares.com/items/accounting_taxes', this.formData)
      this.$q.dialog({
        message: 'Data Submitted Successfully'
      })
      this.$emit('close-form')
      this.$emit('module-data-changed')
      this.visible = false

    }
  }
}
</script>
