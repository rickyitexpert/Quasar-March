<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>
        {{ userInactivityTime }}
        <div><q-btn label="Logout" @click="logout()"></q-btn></div>
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
import { date } from 'quasar'
export default {
  name: 'MainLayout',
  components: { drawerMenu },
  data () {
    return {
      leftDrawerOpen: false,
      userInactivityTime: 0
    }
  },
  methods: {
    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    },
    logout () {
      delete this.$axios.defaults.headers.common['Authorization']
      localStorage.removeItem('access_token')
      this.$router.push('/login')
    },
    calculateuserInactivityTime () {

      console.log('calculating')
      let currentTimestamp = new Date()
      this.userInactivityTime = date.getDateDiff(currentTimestamp, this.$store.state.app.userTimer, 'seconds')


    }
  },
  created () {
    setInterval(this.calculateuserInactivityTime, 1000)
  }

}

</script>
