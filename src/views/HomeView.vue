<template>
  
  <Header/>

  <main class="main">
    <Advantages/>

    <Services/>

    <Banner/>
  </main>

</template>

<script>
import Header from '@/components/Home/Header.vue'
import Advantages from '@/components/Home/Advantages.vue'
import Footer from '@/components/Footer.vue'
import Services from '@/components/Home/Services.vue'
import Banner from '@/components/Home/Banner.vue'

export default {
  name: 'Home Page',
  components: {
    Header,
    Advantages,
    Services,
    Banner,
    Footer
  }
}

</script>

<style lang="scss" scoped>

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
}

</style>