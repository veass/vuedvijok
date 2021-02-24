<template>
  <form class="formr2c4 d-flex flex-column">
    <div class="d-flex justify-content-center">
      <div class="form-group">
        <input type="text" class="name radius form-control" id="" placeholder="Ваше имя">
      </div>
      <div class="form-group">
        <input type="text" class="phone radius form-control" id="" placeholder="Телефон">
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="form-group">
        <div class="form-group">
          <textarea class="form-control radius" id="" rows="5"  placeholder="Ваши пожелания"></textarea> <!--rows 1 - высота = 24px -->
        </div>
      </div>
      <div class="form-group">
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
  width: 310px !important;
.raschet
  background: #ff6600
  color: white
.result
  padding: 40px 0px 0px 0px
.result > form > div > div:nth-child(2)
  margin: 0px 0px 0px 10px
@media (max-width: 600px)
  .result > form > div > div:nth-child(2)
    margin: 0px 0px 0px 0px
</style>