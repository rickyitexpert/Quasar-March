<template>
  <div class="row justify-between">
    <grid-card v-bind="item" v-for="item, index in items"></grid-card>
  </div>
</template>
<script>
import gridCard from './grid-card.vue'
export default {
  components: { gridCard },
  data () {
    return {
      items: [
        { label: 'Grocery', image: 'https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100' },
        { label: 'Mobile', image: 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100' },
        { label: 'Fashion', image: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100' },
        { label: 'Electronics', image: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' },
        { label: 'Home', image: 'https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100' },
        { label: 'Appliances', image: 'https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100' },
        { label: 'Travel', image: 'https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100' },
        { label: 'Top Offers', image: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100' },
        { label: 'Beauty,Toys & More', image: 'https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100' },
        { label: 'Two Wheelers', image: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100' },
      ]
    }
  }
}
</script>
