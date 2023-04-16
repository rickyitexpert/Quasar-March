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
export default {
  data () {
    return {
      loginCredentials: {},
      response: null
    }
  },
  methods: {
    async login () {
      let response = await this.$axios.post('https://gangotri-api.brainysoftwares.com/auth/login', this.loginCredentials)
      this.response = response.data

      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.data.access_token

      localStorage.setItem('access_token', response.data.data.access_token)
    }

  }
}
</script>
