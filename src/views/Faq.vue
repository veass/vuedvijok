<template>
   <div class="container faq">
     <div class="row d-flex">
       <div class="faq-left col gradient ">
         <h2>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
        <div class="accordion" id="accordionExample">
          <div class="card faq-card">
            <div class="card-header" id="headingOne">
              <h3 class="mb-0">
                <button class="btn  btn-block " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Сворачиваемый групповой элемент #1
                </button>
              </h3>
            </div>

            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div class="card-body">
                Некоторый заполнитель для первой панели аккордеона. Эта панель отображается по умолчанию благодаря классу <code>.show</code>.
              </div>
            </div>
          </div>
          <div class="card faq-card">
            <div class="card-header" id="headingTwo">
              <h3 class="mb-0">
                <button class="btn  btn-block  collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Сворачиваемый групповой элемент #2
                </button>
              </h3>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div class="card-body">
                Некоторый заполнитель для второй панели аккордеона. По умолчанию эта панель скрыта.
              </div>
            </div>
          </div>
          <div class="card faq-card">
            <div class="card-header" id="headingThree">
              <h3 class="mb-0">
                <button class="btn  btn-block  collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Сворачиваемый групповой элемент #3
                </button>
              </h3>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div class="card-body">
                И, наконец, заполнитель для третьей и последней панели аккордеона. По умолчанию эта панель скрыта.
              </div>
            </div>
          </div>
        </div>
       </div>
       <div class="faq-right col d-none d-md-block">
         <img src="@/assets/img/img-faq.jpg" alt="">
       </div>
     </div>


     
   </div>
</template>

<script>


export default {
  
}
</script>

<style lang="sass" scoped>
.faq
  // margin: 50px 0px 0px 0px
.faq-card
  height: auto
  background-color: #c2f18f
  border-radius: 10px 

.faq-right
  padding: 0
.faq-left
  padding: 0
  > h2
    margin: 30px 0px 30px 0px
    color: white
  .accordion
    width: 90%
    margin: 0 auto
button 
  color: black
  text-decoration: none
  text-align: center !important
</style>