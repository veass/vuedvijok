<template>
  <div class="menu_btn"><div class="menu_line"></div></div>
</template>

<script>
export default {

// $(".menu_btn").click(function() {
//   $(".menu_btn").toggleClass("menu_btn_active");
// });
}
</script>

<style lang="sass">
.menu_btn 
  height: 30px;
  width: 30px;
  border: 7px solid white;
  border-radius: 3px;
  position: relative;
  display: table-cell;
  vertical-align: middle;
.menu_btn:after 
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: black;
  border-radius: 3px;
  transition: .3s all;
.menu_btn:before 
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: black;
  border-radius: 3px;
  transition: .3s all;

.menu_line 
  height: 3px;
  background-color: black;
  border-radius: 3px;
  transition: .3s all;

.menu_btn_active .menu_line 
  opacity: 0;
  transform: rotate(180deg);

.menu_btn_active:after 
  transform: rotate(45deg);
  transform-origin: left bottom;
  left: 3px;

.menu_btn_active:before 
  transform: rotate(-45deg);
  transform-origin: left top;
  left: 3px;
</style>