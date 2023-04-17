<template>
  <q-page class="flex flex-center">
    <div class="column">
      Home Page

      <q-btn label="ResetTimer" @click="$store.commit('app/resetTime')"></q-btn>
      {{ userInactivityTime }}
    </div>
  </q-page>
</template>

<script>

import { defineComponent } from 'vue'
export default defineComponent({
  name: 'IndexPage',

})
</script>
