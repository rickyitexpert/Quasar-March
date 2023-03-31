<template>
  <q-page>
    <div>
      <q-btn class="q-mx-md" label="Create Account" color="primary" @click="formOpen = true"></q-btn>
    </div>
    <div class="row" v-if="table.data !== null">
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


      <q-table :rows="table.data" class="bg-purple-2 q-ma-md col"></q-table>
    </div>


  </q-page>
</template>
<script>
import slotComponent from 'components/slot.vue'
export default {
  components: { slotComponent },
  data () {
    return {
      formOpen: false,
      formData: {},
      table: {
        data: null,
      }
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

    },
    async fetchData () {
      let response = await this.$axios.get('https://gangotri-api.brainysoftwares.com/items/accounts')
      this.table.data = response.data.data
    }
  },
  async beforeMount () {
    await this.fetchData()
  }
}
</script>
