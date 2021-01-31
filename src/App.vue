<template>
    <Navbar/>
    <router-view/>
</template>

<script>
//Components
import Navbar from './views/Navbar'

export default {
  name: 'App',
  components: {
    Navbar,
  },
}
</script>

<style lang="sass">

span
  // font-size: 18px
  font-family: 'GothamPro'
  // @include adaptiv-font(18,14) 
</style>