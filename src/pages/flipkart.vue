<template>
  <q-page class="q-pa-sm">
    <div>
      <top-menu></top-menu>
      <carousel-section></carousel-section>
      <best-electronics></best-electronics>
    </div>
  </q-page>
</template>
<script>
import topMenu from 'components/flipkart/menu/top-menu.vue'
import carouselSection from 'components/flipkart/sections/carousel.vue'
import bestElectronics from 'components/flipkart/sections/best-electronics.vue'
export default {
  components: { topMenu, carouselSection, bestElectronics }
}
</script>
