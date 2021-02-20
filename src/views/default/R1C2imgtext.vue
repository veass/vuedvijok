<template>
  <div class="r1c2imgtext d-flex">
    <img :src="img"><p>{{p}}</p>
  </div>
</template>

<script>
export default {
  props: ['img', 'p'],
}
</script>

<style lang="sass">
.r1c2imgtext
  img
    width: 15px
  p
    padding: 0px 0px 0px 10px
</style>