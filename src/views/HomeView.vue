<template>
  <img src="@/assets/img/backgroudBlack.png" alt="" class="bg-img">

  <Nav/>
  
  <Header/>

</template>

<script>
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'Home Page',
  components: {
    Nav,
    Header
  }
}

</script>

<style lang="scss" scoped>

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  object-fit: cover;
}

</style>