<template>
  <section class="about__section dark-bg">
    <div class="container">
        <div class="row">
            <div class="about__descr">
                <h3 class="about__descr-title sm-title">{{ descr.title }}</h3>
                <SmLineIcon/>
                
                <p class="about__descr-txt all-txt">{{ descr.txt }}</p>
            </div>

            <img :src="aboutImg" alt="" class="about-img">
        </div>
    </div>
  </section>
</template>

<script>
import SmLineIcon from '../SmLineIcon.vue'

export default {
    name: 'About Section',
    components: {
        SmLineIcon
    },
    data() {
        return {
            descr: {
                title: 'о компании',
                txt: 'CIRKLE – магазин косметических товаров и производитель продукции.'
            },
            aboutImg: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/CasesPage%2FAboutSection%2Fcase-about-img.png?alt=media&token=cdc9c920-29c7-4d3b-b236-a40d23379be2'
        }
    }
}

</script>

<style lang="scss" scoped>

.about__section {
    width: 100%;
    padding-bottom: 50px;

    .row {
        flex-direction: column;
        align-items: flex-end;
        row-gap: 15px;
    }

    .about__descr {
        max-width: 700px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 15px;
    }

    .about-img {
        max-width: 700px;
        width: 100%;
        object-fit: cover;
        filter: grayscale(100%);
        transition: .4s;
    }

    .row:hover {
        .about-img {
            filter: grayscale(0%) !important;
        }
    }
}

</style>