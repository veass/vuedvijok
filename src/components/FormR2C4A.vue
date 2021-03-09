<template>
  <form class="formr2c4 d-flex flex-column">
    <div class="formr2c4-elem d-flex flex-column flex-lg-row justify-content-center ">
      <div class="form-group">
        <input type="text" class="name radius form-control" id="" placeholder="Ваше имя">
      </div>
      <div class="form-group">
        <input type="text" class="phone radius form-control" id="" placeholder="Телефон">
      </div>
    </div>
    <div class="formr2c4-elem d-flex flex-lg-row justify-content-center">
      <div class="form-group d-flex flex-row">
        <button type="submit" class="raschet radius w310 btn btn-default">Отправить расчёт</button> 
        <div class="w310">
            <input type="checkbox" class="access radius" style="width: 20px">
            <span>Согласен(а) на обработку персональных данных </span>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.name, .phone, textarea, .w310
  width: 310px
  @media screen and (max-width: 767px)
    width: 100%
  
.raschet
  background: #ff6600
  color: white
.result
  padding: 40px 0px 0px 0px
.formr2c4-elem  > div:nth-child(2)
  margin: 0px 0px 0px 10px
@media (max-width: 991px)
  .formr2c4-elem > div:nth-child(2)
    margin: 0px 0px 0px 0px
  textarea 
    margin: 15px 0px 0px 0px
</style>