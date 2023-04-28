<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <flipkart-header></flipkart-header>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import flipkartHeader from 'components/flipkart/header.vue'

export default {
  components: { flipkartHeader }

}
</script>
