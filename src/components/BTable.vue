<template>
  <q-table :rows="data" class="bg-purple-2 q-ma-md col">
    <template v-slot:top>
      <div class="row justify-between full-width">
        <div>
          <h6>
            {{ this?.collection_name }}
          </h6>
        </div>
        <div>
          <q-input v-model="searchText" Placeholder=" Search" />
        </div>
      </div>

    </template>
  </q-table>
</template>
<script>
export default {
  props: ['collection_name'],
  data () {
    return {
      data: [],
      searchText: '',
      fields: []
    }
  },
  watch: {
    collection_name: {
      handler () {
        this.searchText = ''
        this.fetchFields()
        this.fetchData()
      },
      immediate: true

    },
    searchText: {
      handler (val) {
        this.fetchData()
      }
    }
  },
  methods: {
    async fetchFields () {
      let response = await this.$axios.get('https://gangotri-api.brainysoftwares.com/fields/' + this.collection_name)
      this.fields = response.data.data
    },
    async fetchData () {
      let params = {}
      if (this.searchText) {
        params.filter = { _or: [] }
        this.fields.forEach((field) => {
          if (field.type === 'string') {
            let filter = {}
            filter[field.field] = { _contains: this.searchText }
            params.filter._or.push(filter)
            console.log(filter)
          }
        })
        console.log(params)
      }
      let response = await this.$axios.get('https://gangotri-api.brainysoftwares.com/items/' + this.collection_name, { params })
      this.data = response.data.data
    },
  },

  async beforeMount () {
    console.log(this.collection_name)
    await this.fetchData()
  }
}

</script>
