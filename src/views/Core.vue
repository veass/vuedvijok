<template>
  <div class="core relative">
    <img src="../assets/img/section1.jpg" alt="" class="coreimg absoluteimg">
    <div class="core-container container">
      <div class="row">
        <div class="core-left col col-lg-6">
          <h1>{{core_h1}}</h1>
          <p>{{core_p}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: function(){
    return{
        core_h1: 'Укладка тротуарной плитки', 
        core_p: 'Стоимость от 12 рублей. Гарантия 2 года без предоплаты.'
    } 
  },
}
</script>

<style lang="sass" scoped>
//const
.core
  height: $height-core   
.coreimg
  height: $height-core
.core-container
  height: $height-core
.core-left
  display: flex
  flex-direction: column
  justify-content: center
  height: $height-core
</style>
