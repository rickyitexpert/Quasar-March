<template>
  <q-carousel infinite style="height:260px" :autoplay="2000" transition-prev="slide-right" transition-next="slide-left"
    animated v-model="slideIndex">
    <q-carousel-slide v-for="slide, index in slides" :name="index">
      <q-img width="100%" height="240px" :src="slide.imgUrl"></q-img>
    </q-carousel-slide>
  </q-carousel>
</template>
<script>
export default {
  data () {
    return {
      slideIndex: 0,
      slides: [
        { imgUrl: 'https://rukminim1.flixcart.com/fk-p-flap/1920/240/image/7205c24b49f35001.jpg' },
        { imgUrl: 'https://rukminim1.flixcart.com/fk-p-flap/1920/240/image/3e1cae285c1f7b4e.jpg' },
        { imgUrl: 'https://rukminim1.flixcart.com/fk-p-flap/1920/240/image/982f877988b6f7a2.jpg' },
        { imgUrl: 'https://rukminim1.flixcart.com/fk-p-flap/1920/240/image/59dc63069462fcbf.jpg' }
      ]
    }
  }
}
</script>
