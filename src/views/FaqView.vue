<template>

  <FAQHeader/>

  <main class="main">
    <Category/>
    
    <Banner/>
  </main>
</template>

<script>
import Banner from '@/components/HomeSections/Banner.vue'
import FAQHeader from '@/components/FAQPageSections/FAQHeader.vue'
import Category from '@/components/FAQPageSections/Category.vue'

export default {
  name: 'Faq View',
  components: {
    FAQHeader,
    Category,
    Banner
  }
}

</script>

<style lang="scss" scoped>

</style>