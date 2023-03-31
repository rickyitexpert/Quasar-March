<template>
  <div class="bg-red" style="height:300px;width:300px">
    <q-toggle v-model="p"></q-toggle>
    <slot name="header">
      <h6>
        <slot name="title">Title</slot>
      </h6>
    </slot>
    <slot name="body" v-if="p" v-bind="{ p, test }">
      <p v-if="p" class="text-purple">
        <slot name="description">jhergfuir3oifhr3giv</slot>
      </p>
    </slot>


  </div>
</template>
<script>
export default {
  props: ['title'],
  data () {
    return {
      p: true,
      test: 'abc'
    }
  }
}

</script>

