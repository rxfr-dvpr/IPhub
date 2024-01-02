<template>

  <FAQHeader/>
  
  <main class="main">

    <Banner/>
  </main>
</template>

<script>
import Banner from '@/components/HomeSections/Banner.vue'
import FAQHeader from '@/components/FAQPageSections/FAQHeader.vue'

export default {
  name: 'Faq View',
  components: {
    FAQHeader,
    Banner
  }
}

</script>

<style lang="scss" scoped>

</style>