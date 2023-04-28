<template>
  <div class="column items-center">
    <q-img ratio="1" width="60px" :src="image"></q-img>
    <div class="text-center text-bold">{{ label }}</div>
  </div>
</template>
<script>
export default {
  props: ['image', 'label']
}
</script>

