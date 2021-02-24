<template>
  <div class="card1 d-flex justify-content-between" style="margin-top: 2px">
    <div class="left-calc">
      <p>Метраж плитки, м2</p>
      <p><span>12</span>руб.</p> 
    </div>
    <div class="right-calc d-flex ">
      <div class="event-calc d-flex flex-column">
          <div class="plus center" name="plus">+</div>
          <div class="minus center" name="minus">-</div>
      </div>
      <div class="sum center">
        <input type="text" style="border: none; outline: none; width: 33px" min="0" name="quantity" class="summer" value="0">
      </div>
    </div>
  </div> <!-- card1 -->
</template>

<script>

</script>

<style lang="sass" scoped>
.card1
  display: block
  height: 107px
  padding: 15px 20px 15px 20px
  background: #e7f0f1
  border-radius: 10px
.plus, .minus
  height: 33px
  background-color: white
  width: 50px
.minus
  margin-top: 2px
.left-calc
  width: 90px; 
  // height: 70px
.right-calc 
.event-calc 
.sum 
  width: 56px;
  height: 68px;
  background-color: white
  margin-left: 2px
  font-size: 18px
.summer 

</style>
