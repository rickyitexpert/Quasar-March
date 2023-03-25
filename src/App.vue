<template>
  Root App
  {{ value }}
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  data: function () {
    return {
      value: 'test'
    }
  },

})
</script>
