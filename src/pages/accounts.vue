<template>
  <q-page>
    <div class="row">
      <q-card class="col q-ma-md">
        <q-form class="q-ma-md">
          <q-input label="Account Name" v-model="form.data.account_name" />
          <q-input label="Contact Number" v-model="form.data.contact_number" />
          <q-btn label="Submit" class="q-my-md" color="primary" unelevated @click="insertIntoTable"></q-btn>
        </q-form>
      </q-card>

      <q-table :rows="table.rows" :columns="table.columns" class="col q-ma-md">

      </q-table>
    </div>
    {{ table }}

  </q-page>
</template>
<script>
export default {
  data () {
    return {
      form: {
        data: {}
      },
      table: {
        rows: [],
        columns: [
          { label: 'Account', field: 'account_name' },
          { label: 'Mobile Number', field: 'contact_number' }
        ]
      }
    }
  },
  methods: {
    insertIntoTable () {
      this.table.rows.push(this.form.data)
      this.form.data = {}
    }
  }
}
</script>
