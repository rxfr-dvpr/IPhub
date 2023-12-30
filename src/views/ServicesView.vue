<template>
    <Header :customImg="headerImg" :customTitle="headerTitle" :customTxt="headerTxt"/>
    
    <Test/>
    
    <Banner :customBannerImg="bannerImg"/>
</template>

<script>
import Header from '@/components/HomeSections/Header.vue'
import Banner from '@/components/HomeSections/Banner.vue'
import Test from '@/components/HomeSections/Test.vue'

export default {
    name: 'Services View',
    components: {
        Header,
        Test,
        Banner
    },
    data() {
        return {
            headerTitle: 'Регистрация товарного знака',
            headerTxt: 'Полный цикл регистрации товарного знака от подачи заявки до поддержки после регистрации',
            headerImg: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/ServicesPage%2Fservices-header-img.png?alt=media&token=9e74703c-aa18-4e35-b9b8-b0202fe3beb5',
            bannerImg: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/ServicesPage%2Fservices-banner-img.png?alt=media&token=6af65d75-9295-4756-9fd6-d4a9884eec13'
        }
    }
}

</script>

<style lang="scss" scoped>

</style>