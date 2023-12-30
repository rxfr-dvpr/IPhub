<template>
  <Banner :customBannerImg="bannerImg"/>
</template>

<script>
import Banner from '@/components/HomeSections/Banner.vue'

export default {
    name: 'Services View',
    components: {
        Banner
    },
    data() {
        return {
            bannerImg: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/ServicesPage%2Fservices-banner-img.png?alt=media&token=6af65d75-9295-4756-9fd6-d4a9884eec13'
        }
    }
}

</script>

<style lang="scss" scoped>

</style>