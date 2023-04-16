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
    this.time = new Date()
    let access_token = localStorage.getItem('access_token')
    if (access_token) {
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token
    }
  }
})
</script>
