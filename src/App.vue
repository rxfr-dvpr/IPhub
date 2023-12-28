<template>
  <div class="background-img"></div>

  <Nav/>
  
  <router-view/>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  }
}

</script>

<style lang="scss" scoped>

.background-img {
  width: 100%;
  min-height: 100%;
  background-image: url('./assets/img/backgroudBlack.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

</style>