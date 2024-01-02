<template>
    <CasesHeader/>

    <main class="main">
        <About/>
        
        <Case :customTitle="caseTitle"/>

        <Banner :customBannerImg="bannerIMG"/>
    </main>

</template>

<script>
import Banner from '@/components/HomeSections/Banner.vue'
import Case from '@/components/HomeSections/Case.vue'
import CasesHeader from '@/components/CasesPageSections/CasesHeader.vue'
import About from '@/components/CasesPageSections/About.vue'

export default {
    name: 'Cases View',
    components: {
        CasesHeader,
        About,
        Banner,
        Case
    },
    data() {
        return {
            caseTitle: 'схожие кейсы',
            bannerIMG: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/CasesPage%2Fcases-banner-img.png?alt=media&token=cf492d22-18ec-4dde-a45a-31c6434afbce'
        }
    }
}

</script>

<style lang="scss">

.main {
    width: 100%;
    display: flex;
    flex-direction: column;
}

</style>