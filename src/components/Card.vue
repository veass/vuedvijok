<template>
  <div class="vue-card card">
    <div class="vue-card__item d-flex justify-content-center">
      <img src="@/assets/img/icons/parking1.svg" alt="">
    </div>
    <div class="vue-card__item text-center">
      <!-- <h3 class="">АВТОМОБИЛЬНАЯ <br/>ПЛОЩАДКА</h3> -->
      <slot name="name"></slot>
    </div>
    <div class="vue-card__item d-flex-column">
      <slot name="0" ></slot>
      <slot name="1" ></slot>
      <slot name="2" ></slot>
    </div>
    <div class="vue-card__item">
      <p ><span>от </span><span></span> руб/м<sup>2</sup></p>
    </div>
  </div> 
</template>

<script>
// import R1C2imgtext from '@/views/default/R1C2imgtext'
export default {
  components: {
    // R1C2imgtext,
  }
}
</script>

<style lang="sass" scoped>

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
