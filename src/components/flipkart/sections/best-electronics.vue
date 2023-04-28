<template>
  <q-card class="row" style="height:280px">
    <div class="column items-center justify-center relative-position" style="width:200px">
      <div class="column items-center">
        <div class="text-h4 text-center">Best of Electronics</div>
        <div class="q-my-md"><q-btn class="shadow-3" color="blue-7" unelevated square label="View All"></q-btn></div>
      </div>

      <div class="absolute-bottom"><q-img
          src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg"></q-img></div>
    </div>
    <div class="col row scroll">
      <div class="row q-ma-sm no-wrap q-gutter-sm">
        <q-card flat class="q-pa-sm" v-for="item in items" style="width:220px">
          <q-img height="120px" fit="contain" :src="item.image"></q-img>
          <q-card-section>
            <div class="text-bold ellipsis-2-line" style="min-height:40px">{{ item.product }}</div>
            <div class="text-green-9">{{ item.caption1 }}</div>
            <div class="text-grey ellipsis">{{ item.caption2 }}</div>

          </q-card-section>
        </q-card>
      </div>

    </div>
  </q-card>
</template>
<script>
export default {
  data () {
    return {
      items: [
        { product: 'Projectors', caption1: 'From ₹9999', caption2: 'Zebronics', image: 'https://rukminim1.flixcart.com/image/200/200/l3khsi80/projector/z/h/4/-original-imagenqrzfcgwqk7.jpeg?q=100' },
        { product: 'Printers', caption1: 'From ₹9999', caption2: 'Canon', image: 'https://rukminim1.flixcart.com/image/200/200/kb89ea80/printer/g/q/2/canon-ts307-direct-wifi-original-imafsmk9yu57jagn.jpeg?q=70' },
        { product: 'Top Mirrorless Cameras', caption1: 'Shop Now!', caption2: 'Canon, Sony, Fujifilm', image: 'https://rukminim1.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70' },
        { product: 'Premium PowerBanks', caption1: 'Shop Now!', caption2: 'Mi, Realme & more', image: 'https://rukminim1.flixcart.com/image/200/200/l5jxt3k0/power-bank/b/p/m/power-bank-3-pd-22-5w-10000-rtx2108-realme-original-imagg7jckgt9zgag.jpeg?q=70' },
        { product: 'Monitors', caption1: 'From ₹7949', caption2: 'Lenovo', image: 'https://rukminim1.flixcart.com/image/200/200/l4x2rgw0/monitor/n/y/y/q24i-20-full-hd-23-8-66eegac3in-lenovo-original-imagfpgxzsk8ef26.jpeg?q=70' },
        { product: 'Best of Shavers', caption1: 'From ₹1,649', caption2: 'Philips & Havells', image: 'https://rukminim1.flixcart.com/image/200/200/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=70' },
        { product: 'Best of Shavers', caption1: 'From ₹1,649', caption2: 'Philips & Havells', image: 'https://rukminim1.flixcart.com/image/200/200/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=70' }
      ]

    }
  }
}
</script>
