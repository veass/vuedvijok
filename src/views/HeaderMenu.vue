<template>
  <div class="header-menu d-none d-md-block">
    <nav class="container">
      <ul class="row d-flex flex-column flex-sm-column flex-md-column flex-lg-row flex-xl-row">
        <li v-for="item in menu" :key="item" class="col center text-uppercase menu-item ">
          <a :href="item.href">{{item.text}}</a>
        </li>
      </ul>
    </nav>
  </div>
  <MenuButton v-if="visible"/>
  
</template>

<script>
import MenuButton from '../components/MenuButton'
export default {
  data: function(){
    return{
      menu: [
        {text: 'Какую плитку выбрать?', href:'vidy-plitki'},
        {text: 'Цены', href: 'ceni'},
        {text: 'Как мы работаем?', href: 'kak-my-rabotaem'},
        {text: 'Наши работы', href: 'nashi-raboti'},
        {text: 'Личный кабинет', href: 'gdhfv'},
      ],
      visible: false     
    } 
  },
  components: {
    MenuButton
  }


}
</script>

<style lang="sass" scoped>

$background-header-menu: rgb(241, 241, 241)
.menu-item
  @include adaptiv-font(16, 14)
  height: $menu-item
.header-menu
  background: $background-header-menu
  border-top: 1px solid black
</style>
