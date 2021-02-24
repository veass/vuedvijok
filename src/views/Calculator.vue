<template>
 <div class="calculator container">
  <h2>Расчет стоимости тротуарной плитки</h2>
  <div class="calculator-row d-flex flex-wrap justify-content-center">
    <div :class="$db.r1c4Item">
      <Card style="">
        <template #name><h3 class="">АВТОМОБИЛЬНАЯ <br/>ПЛОЩАДКА</h3></template>
        <template #0><R1C2imgtext img='/img/icons/add-circular-outlined-button.svg' p="Подготовка усиленного основания" /></template>
        <template #1><R1C2imgtext img='/img/icons/add-circular-outlined-button.svg' p="Подготовка" /></template>
        <template #2><R1C2imgtext img='/img/icons/no-circular-outlined-button.svg' p="Плитка не входит в стоимость" /></template>
      </Card>
    </div>
    <div :class="$db.r1c4Item">
      <Card  style="">
        <template #name><h3> ПЕШЕХОДНАЯ <br/> ЗОНА</h3></template>
        <template #0><R1C2imgtext img='/img/icons/add-circular-outlined-button.svg' p="Подготовка основания" /></template>
        <template #1><R1C2imgtext img='/img/icons/add-circular-outlined-button.svg' p="Работы по укладке" /></template>
        <template #2><R1C2imgtext img='/img/icons/no-circular-outlined-button.svg' p="Плитка не входит в стоимость" /></template>
      </Card>
    </div>
    <div :class="$db.r1c4Item">
      <Card style="">
        <template #name><h3>НА ГОТОВОЕ <br/> ОСНОВАНИЕ</h3></template>
        <template #0><R1C2imgtext img='/img/icons/add-circular-outlined-button.svg' p="Подготовка основания" /></template>
        <template #1><R1C2imgtext img='/img/icons/add-circular-outlined-button.svg' p="Работы по укладке" /></template>
        <template #2><R1C2imgtext img='/img/icons/no-circular-outlined-button.svg' p="Плитка не входит в стоимость" /></template>
      </Card>
    </div>
    <div :class="$db.r1c4Item">

        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />

    </div>
</div> <!-- calculator-row -->
</div>
</template>

<script>
import Card from '@/components/Card'
import R1C2imgtext from '@/views/default/R1C2imgtext'
import Card1 from '@/components/Card1'
export default {
  components: {
    R1C2imgtext,
    Card,
    Card1,
  }
}
</script>

<style lang="sass" scoped>

</style>