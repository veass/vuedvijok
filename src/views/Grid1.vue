<template>
<div class="portfolio container d-flex justify-content-center flex-column">
  <h2>ПРИМЕРЫ НАШИХ РАБОТ</h2>
  <div class="grid-container grid1">
    <div class="grid-item item1"><img src="../assets/img/plitka1.jpg" alt=""></div>
    <div class="grid-item item2"><img src="../assets/img/plitka1.jpg" alt=""></div>
    <div class="grid-item item3"><img src="../assets/img/plitka1.jpg" alt=""></div>
    <div class="grid-item item4"><img src="../assets/img/plitka1.jpg" alt=""></div>
    <div class="grid-item item5"><img src="../assets/img/plitka1.jpg" alt=""></div>
    <div class="grid-item item6"><img src="../assets/img/plitka1.jpg" alt=""></div>
  </div>
</div>

</template>

<script>


export default {
  
}
</script>

<style lang="sass" scoped>
.portfolio
  padding: 0px 0px 50px 0px
  h2
    margin: 30px 0px 30px 0px
.grid-container
  display: grid
  grid-gap: 10px
  grid-template-columns: 24% 24% 24% 24%
  grid-template-rows: 230px 230px
  @media screen and (max-width: 768px)
    grid-template-columns: 30% 30% 30%
    grid-template-rows: 230px 230px 230px
  @media screen and (max-width: 575px)
    grid-template-columns: 48% 48% 
    grid-template-rows: 230px 230px 230px 
    .item3, .item6 
      display: none
    .item5
      grid-row: 2
    .item4 
      grid-column: 1/3
.grid-container > div 
  background: #000000ba
  color: white
.item1 
    grid-row: 1 / 3
    @media screen and (max-width: 500px)
      // grid-row: 3
      // grid-column-end: 2
      // grid-column: 1/4
.item4 
  grid-row: 1 / 3
  grid-column-end: 5
  @media screen and (max-width: 768px)
    grid-row: 3
    grid-column-end: 2
    grid-column: 1/4
.grid-item
  img
    object-fit: cover
    width: 100%
    height: 100%
  // max-width: 250px
  // max-height: 230px
</style>
  

