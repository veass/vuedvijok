<template>
  <div class="vue-card-2 card">
    
  </div> 
</template>

<script>
import R1C2imgtext from '@/views/default/R1C2imgtext'
export default {
  components: {
    R1C2imgtext,
  }
}
</script>

<style lang="sass">
.vue-card
  width: 310px
  // max-height: 450px
  border-radius: 10px
  padding: 20px 40px 30px 40px
  background-color: white
  display: flex;
  justify-content: space-between
.vue-card__item
  &:nth-child(1)
    padding: 10px
    img
      width: 50px
    

</style>
