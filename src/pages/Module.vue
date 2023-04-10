<template>
  <q-page>
    <div>
      <q-btn class="q-mx-md" :label="'Create ' + collection_name" color="primary" @click="formOpen = true"></q-btn>
    </div>
    <div class="row">
      <q-dialog v-model="formOpen">
        <q-card class="q-ma-md col-4 bg-red-2  position-relative">
          <div class="q-pa-md">
            <h6 class="q-ma-none q-my-md"> Create Account</h6>
          </div>
          <q-form ref="form" class="q-pa-md scroll" style="height:60vh">
            <q-input v-model="formData.account_name" label="Account Name"
              :rules="[val => !!val || 'Mandatory Field', val => !(val.match(/\W/i)) || 'Special Characters Not allowed']" />
            <q-input :rules="[val => !!val || 'Mandatory Field']" v-model="formData.account_address" type="textarea"
              label="Address" />
            <q-input v-model="formData.contact_number" mask="##########" fill-mask label="Contact Number">
              <template v-slot:prepend>
                <span>+91</span>
              </template>
            </q-input>
          </q-form>
          <div class="bg-white q-pa-md">
            <q-btn label="Submit" color="primary" unelevated @click="submit"></q-btn>
          </div>
        </q-card>
      </q-dialog>

      <b-table :collection_name="collection_name"></b-table>

    </div>


  </q-page>
</template>
<script>
import slotComponent from 'components/slot.vue'
import BTable from 'components/BTable.vue'
export default {
  props: ['collection_name'],
  components: { slotComponent, BTable },
  data () {
    return {
      formOpen: false,
      formData: {}
    }
  },

  methods: {

    async submit () {
      let valid = await this.$refs.form.validate()
      if (!valid) {
        return
      }
      let response = await this.$axios.post('https://gangotri-api.brainysoftwares.com/items/accounts', this.formData)
      if (response.status >= 200 && response.status < 400) {
        this.formData = {}
        this.formOpen = false
        this.$q.dialog({
          message: 'Data Submitted Successfully'
        })
      }

    }
  }
}
</script>
