<template>
  
  <Header/>

  <main class="main">
    <Advantages/>

    <Services/>

    <Case/>

    <Banner/>
  </main>

</template>

<script>
import Header from '@/components/HomeSections/Header.vue'
import Advantages from '@/components/HomeSections/Advantages.vue'
import Footer from '@/components/Footer.vue'
import Services from '@/components/HomeSections/Services.vue'
import Banner from '@/components/HomeSections/Banner.vue'
import Case from '@/components/HomeSections/Case.vue'

export default {
  name: 'Home Page',
  components: {
    Header,
    Advantages,
    Services,
    Case,
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