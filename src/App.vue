<template>
<div>
    <Navbar/>
    <!-- 4 rКолонки 1 строчка -->
    <Calculator/>
    <!-- 2 колонки 1 строка + форма -->
    <Result/>
    <!-- https://www.vuetable.com/ -->
    <!--Table  -->
    <div class="cost-table relative">
      <img src="/img/costs31.jpg" alt="" class="absoluteimg">
      <div class="container">
        <h2>Стоимость укладки тротуарной плитки</h2>
        <Table /> 
      </div>
    </div>
    <!-- 2 Колонки 1 строка + коллапс или аккордион -->
    <Faq />

    <!-- Grid 1 -->
    <Grid1 />
    <Master />
    <Footer />
</div>
<!-- <router-view/> -->
</template>

<script>
//Components
import Navbar from '@/views/Navbar'
import Calculator from '@/views/Calculator'
import Result from '@/views/Result'
import Table from '@/views/Table'
import Faq from '@/views/Faq'
import Grid1 from '@/views/Grid1'
import Master from '@/views/Master'
import Footer from '@/views/Footer'


export default {
  // db,
  name: 'App',
  components: {
    Navbar,
    Result,
    Calculator,
    Table,
    Faq,
    Grid1,
    Master,
    Footer
  },
  data: () => {
    return {

    }
  }
}
</script>

<style lang="sass">
h2 
  text-align: center
  margin: 0px 0px 20px 0px
span
  // font-size: 18px
  font-family: 'GothamPro'
  // @include adaptiv-font(18,14) 
.cost-table
  padding: 0px 0px 50px 0px
</style>