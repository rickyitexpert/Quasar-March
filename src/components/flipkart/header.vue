<template>
  <q-toolbar class="row justify-between">
    <div class="row items-center">
      <div class="column">
        <q-img width="80px"
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"></q-img>
        <div>
          <div class="text-italic" style="font-size:10px">Explore <span class="text-yellow-7 text-bold">Plus</span></div>
        </div>
      </div>

    </div>
    <div>
      <q-input dense square bg-color="white" filled placeholder="Search for products, brands and more"
        style="min-width:320px"></q-input>
    </div>

    <div class="row">
      <div>
        <q-btn label="Login" color="white" text-color="primary" square unelevated></q-btn>
      </div>
      <div>
        <q-btn label="Become a Seller" color="white" flat></q-btn>
      </div>
      <div>
        <q-btn-dropdown label="More" color="white" flat></q-btn-dropdown>
      </div>
      <div>
        <q-btn label="Cart" icon="shopping_cart" color="white" flat></q-btn>
      </div>
    </div>


  </q-toolbar>
</template>
<script>
export default {

}
</script>
