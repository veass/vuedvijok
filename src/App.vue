<template>
    <Navbar/>
    <Calculator/>
    <Result/>
<router-view/>
</template>

<script>
//Components
import Navbar from '@/views/Navbar'
import Calculator from '@/views/Calculator'
import Result from '@/views/Result'


export default {
  name: 'App',
  components: {
    Navbar,
    Calculator,
    Result
  },
}
</script>

<style lang="sass">

span
  // font-size: 18px
  font-family: 'GothamPro'
  // @include adaptiv-font(18,14) 
</style>