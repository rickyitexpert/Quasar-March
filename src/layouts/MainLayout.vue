<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <div class="column full-height">
        <div class="bg-grey-4" style="height:150px">
        </div>
        <div class="col">
          <drawer-menu></drawer-menu>
        </div>
      </div>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import drawerMenu from 'components/Menu.vue'
export default {
  name: 'MainLayout',
  components: { drawerMenu },
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  }

}

</script>
