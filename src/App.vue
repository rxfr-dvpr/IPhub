<template>
  <div class="background-img"></div>

  <Nav/>
  
  <router-view/>

  <Footer/>

  <span class="preload"><i class="far fa-spinner"></i></span>
</template>

<script>
import Footer from './components/Footer.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  },
  mounted() {
    document.querySelector('body').style.overflow = 'hidden'

    setTimeout(() => {
      document.querySelector('.preload').style.display = 'none'
      document.querySelector('body').style.overflow = 'auto'
    }, 3000)
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

@keyframes rotateIcon {
  0% {
    transform: rotate(360deg);
  }
}

.preload {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: var(--main-black);
  z-index: 5055;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;

  i {
    animation: rotateIcon 1s infinite linear;
  }
}

</style>