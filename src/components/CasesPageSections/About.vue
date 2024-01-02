<template>
  <section class="about__section dark-bg">
    <div class="container">
        <div class="row">
            <div class="about__descr">
                <h3 class="about__descr-title sm-title">{{ descr.title }}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="186" height="2" viewBox="0 0 186 2" fill="none">
                    <path d="M0 1H186" stroke="url(#paint0_linear_860_1384)"/>
                    <defs>
                    <linearGradient id="paint0_linear_860_1384" x1="0" y1="1" x2="187.617" y2="1" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#DA4533"/>
                    <stop offset="1" stop-color="#DA4533" stop-opacity="0"/>
                    </linearGradient>
                    </defs>
                </svg>

                <p class="about__descr-txt all-txt">{{ descr.txt }}</p>
            </div>

            <img :src="aboutImg" alt="" class="about-img">
        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'About Section',
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
        row-gap: 5px;

        &-txt {
            margin-top: 15px;
        }
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