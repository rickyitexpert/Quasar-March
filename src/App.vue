<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  data: function () {
    return {
      time: null
    }

  },
  created () {
    let self = this
    this.$axios.interceptors.response.use((response) => {
      if (response.config.url.indexOf('/items/') > -1) {
        self.$store.commit('app/resetTime')
      }
      return response
    }, (error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        this.$router.push('/login')
        delete this.$axios.defaults.headers.common['Authorization']
      }
    })
    this.time = new Date()
    let access_token = localStorage.getItem('access_token')
    if (access_token) {
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token
    }
  }
})
</script>
