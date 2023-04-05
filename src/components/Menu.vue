<template>
  <q-list separator>
    <q-expansion-item :content-inset-level="0.25" v-for="item in menu" clickable :label="item.name">
      <q-item v-for="module in item.modules" clickable @click="$router.push('/' + module.collection_name)">{{
        module.display_name
      }}</q-item>
    </q-expansion-item>
  </q-list>
</template>
<script>
export default {
  data () {
    return {
      menu: [],
    }

  },

  methods: {
    async fetchMenu () {

      let response = await this.$axios.get('https://gangotri-api.brainysoftwares.com/items/menu?fields=*.*')
      this.menu = response.data.data
      this.menu.forEach((menu) => {
        menu.modules.forEach((module) => {
          this.$router.addRoute({
            path: '/' + module.collection_name,
            component: () => import('layouts/MainLayout.vue'),
            children: [
              { path: '', component: async () => await import('./../pages/' + module.collection_name + '.vue') }
            ]

          },)
        })
      })

    },

  },
  created () {
    this.fetchMenu()
  }
}
</script>

