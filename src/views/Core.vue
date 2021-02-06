<template>
  <div class="core relative">
    <img src="../assets/img/section1.jpg" alt="" class="coreimg absoluteimg">
    <div class="core-left col-6">
      <h1>{{core_h1}}</h1>
      <p>{{core_p}}</p>
    </div>
    <div class="core-right col-6"></div>
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
</style>
