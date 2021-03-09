<template>
  <div class="result d-flex flex-column container">
    <div class="row">
    <FormR2C4 class="col-12 col-md-8"/>
    <div class="right-result col-12 col-md-4 text-center">
      <div class="center-right-result">
        <div class="img-result">
          <img alt="" data-src="rimake.by/wp-content/themes/remake/assets/img/icons/abacus.svg" class=" lazyloaded" src="rimake.by/wp-content/themes/remake/assets/img/icons/abacus.svg"><noscript><img src="rimake.by/wp-content/themes/remake/assets/img/icons/abacus.svg" alt=""></noscript>
        </div>
        <div class="result-cost">
          <h3>Итоговая стоимость:</h3>
          <p><span class="result-pay"> 0 </span> руб.</p>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
import FormR2C4 from '@/components/FormR2C4'
export default {
  components: {
    FormR2C4
  }
}
</script>

<style lang="sass" scoped>
.result
  padding-top: 50px 


</style>