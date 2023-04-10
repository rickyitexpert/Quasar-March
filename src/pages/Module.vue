<template>
  <q-page>
    <div>
      <q-btn class="q-mx-md" :label="'Create ' + collection_name" color="primary" @click="formOpen = true"></q-btn>
    </div>
    <div class="row">
      <!-- <q-dialog v-model="formOpen">


      </q-dialog> -->
      <q-card v-if="formOpen" class="q-pa-md col-4">
        <component :is="formComponent" style="min-height:60vh" @close-form="formOpen = false"
          @module-data-changed="$refs.table.fetchData()">
        </component>
      </q-card>

      <b-table ref="table" :collection_name="collection_name"></b-table>

    </div>


  </q-page>
</template>
<script>
import slotComponent from 'components/slot.vue'
import BTable from 'components/BTable.vue'
import { defineAsyncComponent } from 'vue'
export default {
  props: ['collection_name'],
  components: { slotComponent, BTable },
  data () {
    return {
      formOpen: false,
      formData: {},
      formComponent: false
    }
  },
  watch: {
    collection_name: {
      handler (val) {
        this.formComponent = defineAsyncComponent(() => import(`../components/modules/${this.collection_name}/form.vue`))
      },
      immediate: true
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
