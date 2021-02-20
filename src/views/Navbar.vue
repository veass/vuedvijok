<template>
  <header class="d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-3 header-item center header-logo"><a href=""><img src="../assets/img/logo1.png" alt=""></a></div>
        <div class="col-3 header-item center header-email"><span>{{email}}</span></div>
        <div class="col-3 header-item center header-phone"><img src="../assets/img/icons/auricular-phone-symbol-in-a-circle.svg" alt="" style="width: 20pt"><span>{{phone}}</span></div>
        <div class="col-3 header-item center header-call"><Button class="radius"/></div>
        <!-- xs sm md lg xl -->
      </div>
    </div>
  </header>
  <HeaderMenu/>
  <Core/>
</template>

<script>
import HeaderMenu from '../views/HeaderMenu'
import Core from '../views/Core'
import Button from '../components/Button'

export default {
  data: function(){
    return{
      email: 'ukladka@rimake.by',
      phone: '+375 44 760-65-42'
    } 
  },
  components:{
    HeaderMenu,
    Core,
    Button
  }

}
</script>

<style lang="sass" scoped>

//const

$background-header: rgb(241, 241, 241)

header
  height: $height-header
  background: $background-header
.header-item
   
.header-logo
  padding: 0px 0px 20px 0px
.header-email 

.header-phone 
  span
    padding: 0px 0px 0px 10px
span
  // font-size: 18px
  font-family: 'GothamPro'
  @include adaptiv-font(18,14) 


</style>
