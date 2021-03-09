<template>
<footer>
  <div class="contain-footer">
    <div class="under-footer">
      <div class="footer-one">
        <div class="rights">
          <img src="/img/logo1.png" alt="">
          <p>Римейк 2020. Все права защищены.</p>
        </div>
      </div>
      <div class="hidden-footer-one">
        <div class="footer-two">
          <p><a href="#featuress">Наши преимущества</a></p>
          <p><a href="#calc">Калькулятор расчёта<br> стоимости</a></p>
          <p><a href="#portfolio">Портфолио</a></p>
          <p><a href="#faq">Часто задаваемые <br>вопросы</a></p>
        </div>
        <div class="footer-tree">
          <div class="viber">
            <div class="footer-contacts">
              <img src="/img/icons/phone-receiver.svg" alt="">
              <p>+375 44 760-65-42</p>
            </div>
            <div class="footer-contacts fc2">
              <img src="/img/icons/mail-black-envelope-symbol.svg" alt="">
              <p>ukladka@rimake.by</p>
            </div>
            <div class="footer-contacts fc2">
              <img src="/img/icons/placeholder-filled-point.svg" alt="">
              <p>г.Гомель</p></div>
          </div>
          <div class="soc">
            <div class="footer-contacts fc2">
            <img src="/img/icons/time.svg" alt="">
            <p>Режим работы: <br> пн - пт с 8 до 20.00 <br>сб - вс с 9 до 17.00  </p></div>
          </div>
        </div>
      </div>
        <div class="footer-four">
          <div style="display: flex flex-direction: row"><a><p style="color: #5400ff">Viber,</p></a><a><p style="color: #2cac13">WhatsApp,</p></a><a><p style="color: #0096ec"> Telegram</p></a></div>
          <div class="footer-call"><span>+375 (44) 760-65-42</span></div>
          <div class="footer-soc">
            <div><span>Мы в соц.сетях:</span><a href="https://vk.com/rimeyk_by"><img src="/img/icons/instagram.svg" alt=""></a></div>
          </div>
        </div>
        <div class="footer-five"><button type="submit" class="btn btn-default footer-but button gradient  " style="width: 200px"><span>Заказать звонок</span></button></div>
    </div>
    <div class="under-footer-mobile">
      <div class="footer-one">
        <div class="rights">
          <img src="/img/logo1.png" alt="">
          <p>Римейк 2020. Все права защищены.</p>
        </div>
      </div>
      <div class="footer-tree">
        <div class="viber">
          <div class="footer-contacts"><img src="/img/icons/phone-receiver.svg" alt=""><p><a href="tel:+375447606542">+375 44 760-65-42</a></p></div>
          <div class="footer-contacts fc2"><img src="/img/icons/mail-black-envelope-symbol.svg" alt=""><p>ukladka@rimake.by</p></div>
          <div class="footer-contacts fc2">
            <img src="/img/icons/placeholder-filled-point.svg" alt="">
            <p>г.Гомель</p></div>
        </div>
        <div class="soc">
          <div class="footer-contacts fc2">
            <img src="/img/icons/time.svg" alt="">
            <p>Режим работы: <br> пн - пт с 8 до 20.00 <br>сб - вс с 9 до 17.00  </p></div>
        </div>
      </div>
      <div class="footer-four">
        <div class="column">
          <div style="display: flex flex-direction: row"><a><p style="color: #5400ff">Viber,</p></a><a><p style="color: #2cac13">WhatsApp,</p></a><a><p style="color: #0096ec"> Telegram</p></a></div>								
          <div class="footer-call"><span><a href="tel:+375447606542">+375 (44) 760-65-42</a></span></div>
        </div>
        <div class="footer-soc">
          <div><a href="https://vk.com/rimeyk_by"><img src="/img/icons/instagram.svg" alt=""></a></div>
        </div>
      </div>
      <div class="footer-five"><button type="submit" class="btn btn-default footer-but button gradient " style="width: 200px"><span>Заказать звонок</span></button></div>
    </div>
  </div>
</footer>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
footer 
  width: 100%
  max-height: 100%
  background-color: #e7f0f1
.contain-footer 
  width: 1280px
  max-width: 100%
  margin-left: auto
  margin-right: auto
  height: inherit
.under-footer-mobile a
  color: black !important

.under-footer
  width: auto
  padding: 30px 0 30px 0
  display: flex
  flex-wrap: wrap
  justify-content: space-around

.footer-one
  height: inherit

.rights p
  display: block
  padding-top: 20px
  color: #87919a
  font-size: 16px
  width: 150px

.rights img
  max-width: 215px

.footer-two
  display: flex
  flex-direction: column

.footer-two p
  float: right
  font-size: 16px
  margin-bottom: 8px 
  color: #2cac13 

.footer-two p a
  color: #2cac13

.footer-tree
  padding-left: 50px

.footer-contacts
  display: flex
  height: 22px

.footer-contacts p
  font-family: 'GothamPro'

.fc2
  margin-top: 23px

.footer-tree img
  width: 17px

.footer-tree p
  padding-left: 12px


.footer-four
  display: flex
  flex-direction: column
  justify-content: space-between

.footer-four span
  font-family: 'GothamPro'

.footer-call 
  margin-top: 40px

.footer-soc 
  margin-top: 80px

.footer-call span
  font-weight: 600

.footer-soc a 
  margin-left: 10px

.footer-four img
  width: 30px

.footer-but 
  height: 50px

.footer-but span 
  color: white
  font-size: 15px
  font-family: 'GothamPro'

.footer-five
  padding-left: 50px

.hidden-footer-one
  display: flex

.hidden-footer-two
  display: flex

.under-footer-mobile 
  display: none






</style>