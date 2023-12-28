<template>
  
  <Header/>

  <main class="main">
    <Advantages/>

    <Services/>
  </main>

</template>

<script>
import Header from '@/components/Home/Header.vue'
import Advantages from '@/components/Home/Advantages.vue'
import Footer from '@/components/Footer.vue'
import Services from '@/components/Home/Services.vue'

export default {
  name: 'Home Page',
  components: {
    Header,
    Advantages,
    Services,
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