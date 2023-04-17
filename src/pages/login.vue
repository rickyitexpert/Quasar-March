<template>
  <q-page class="bg-grey-4 flex flex-center">
    <q-card style="min-width:320px">
      <q-img
        src="https://thumbs.dreamstime.com/b/login-special-blue-banner-background-abstract-illustration-124712395.jpg"></q-img>
      <q-card-section>
        <q-form class="q-gutter-md">
          <div v-if="false">123</div>
          <div v-show="false">123</div>
          <q-input label="Username" v-model="loginCredentials.email" />
          <q-input label="Password" type="password" v-model="loginCredentials.password" />
          <q-btn class="q-my-md" unelevated color="primary" label="Login" @click="login"></q-btn>
        </q-form>
      </q-card-section>

    </q-card>

  </q-page>
</template>
<script>
import { date } from 'quasar'
export default {
  data () {
    return {
      loginCredentials: {},
      response: null,
      userInactivityTime: 0
    }
  },
  methods: {
    async login () {
      delete this.$axios.defaults.headers.common['Authorization']

      let response = await this.$axios.post('https://gangotri-api.brainysoftwares.com/auth/login', this.loginCredentials)
      console.log(response)
      this.response = response.data
      this.initAuthSession()
      setTimeout(this.refreshToken, response.data.data.expires - 880000)
      this.$router.push('/')
    },
    async refreshToken () {
      console.log('Refresh Token being used to get new access token')
      console.log(this.calculateuserInactivityTime())
      if (this.calculateuserInactivityTime() > 30) {
        setTimeout(this.refreshToken, this.response.data.expires - 880000)
        return
      }
      let response = await this.$axios.post('https://gangotri-api.brainysoftwares.com/auth/refresh', { refresh_token: this.response.data.refresh_token })
      console.log(response)
      this.response = response.data
      this.initAuthSession()
      setTimeout(this.refreshToken, response.data.data.expires - 880000)
    },
    initAuthSession () {
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.response.data.access_token
      localStorage.setItem('access_token', this.response.data.access_token)
    },
    calculateuserInactivityTime () {

      console.log('calculating')
      let currentTimestamp = new Date()
      return date.getDateDiff(currentTimestamp, this.$store.state.app.userTimer, 'seconds')


    }

  }
}
</script>
