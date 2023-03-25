<template>
  <q-page class="flex flex-center">
    <div class="column">
      Index Page
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import testComponent from 'components/test.vue'
export default defineComponent({
  name: 'IndexPage',
  components: { testComponent },
  data () {
    return {
      price: 0,
      tax_rate: 0,
      discount: 0
    }
  },
  computed: {
    basePrice () {
      return this.price * 100 / (100 + parseFloat(this.tax_rate))
    },
    discountAmount () {
      return this.basePrice * this.discount / 100
    },
    taxAmount () {
      return (this.price - this.discountAmount) * this.tax_rate / 100
    },
    priceAfterDiscount () {
      return this.price - this.discountAmount
    },
    totalAmount () {
      return parseFloat(this.taxAmount) + parseInt(this.priceAfterDiscount)
    }
  }
})
</script>
