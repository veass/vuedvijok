<template>
    <Navbar/>
    <!-- 4 rКолонки 1 строчка -->
    <Calculator/>
    <!-- 2 колонки 1 строка + форма -->
    <Result/>

<router-view/>
</template>

<script>
//Components
import Navbar from '@/views/Navbar'
import Calculator from '@/views/Calculator'
import Result from '@/views/Result'


export default {
  // db,
  name: 'App',
  components: {
    Navbar,
    Result,
    Calculator,
  },
  data: () => {
    return {

    }
  }
}
</script>

<style lang="sass">

span
  // font-size: 18px
  font-family: 'GothamPro'
  // @include adaptiv-font(18,14) 
</style>