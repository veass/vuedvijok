<template>
    <Navbar/>
    <div class="calculator d-flex flex-wrap justify-content-center">
      <Card :class="this.$db.r1c4Item" style="">
        <template #name><h3 class="">АВТОМОБИЛЬНАЯ <br/>ПЛОЩАДКА</h3></template>
        <template #0><R1C2imgtext img='/img/icons/add-circular-outlined-button.svg' p="Подготовка усиленного основания" /></template>
        <template #1><R1C2imgtext img='/img/icons/add-circular-outlined-button.svg' p="Подготовка" /></template>
        <template #2><R1C2imgtext img='/img/icons/no-circular-outlined-button.svg' p="Плитка не входит в стоимость" /></template>
      </Card>
      <Card :class="this.$db.r1c4Item" style="">
        <template #name><h3> ПЕШЕХОДНАЯ <br/> ЗОНА</h3></template>
        <template #0><R1C2imgtext img='/img/icons/add-circular-outlined-button.svg' p="Подготовка основания" /></template>
        <template #1><R1C2imgtext img='/img/icons/add-circular-outlined-button.svg' p="Работы по укладке" /></template>
        <template #2><R1C2imgtext img='/img/icons/no-circular-outlined-button.svg' p="Плитка не входит в стоимость" /></template>
      </Card>
      <Card :class="this.$db.r1c4Item" style="">
        <template #name><h3>НА ГОТОВОЕ <br/> ОСНОВАНИЕ</h3></template>
        <template #0><R1C2imgtext img='/img/icons/add-circular-outlined-button.svg' p="Подготовка основания" /></template>
        <template #1><R1C2imgtext img='/img/icons/add-circular-outlined-button.svg' p="Работы по укладке" /></template>
        <template #2><R1C2imgtext img='/img/icons/no-circular-outlined-button.svg' p="Плитка не входит в стоимость" /></template>
      </Card>
      <!-- <Card :class="this.$db.r1c4Item" style=""></Card> -->
    </div>
    <Result/>

<router-view/>
</template>

<script>
//Components
import Navbar from '@/views/Navbar'
// import Calculator from '@/views/Calculator'
import Result from '@/views/Result'
import Card from '@/components/Card'
import R1C2imgtext from '@/views/default/R1C2imgtext'

export default {
  // db,
  name: 'App',
  components: {
    Navbar,
    Card,
    Result,
    R1C2imgtext
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