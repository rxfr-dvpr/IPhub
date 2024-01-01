<template>
    <section class="sponsors__section dark-bg">
        <div class="container">
            <div class="row">

                <swiper class="sponsors-swiper" :slidesPerView="3.9" :spaceBetween="30" :loop="true" :centeredSlides="true">
                    <swiper-slide class="sponsors-swiper-slide" v-for="(img, idx) in slides" :key="idx">
                        <img :src="img.img" alt="" class="sponsors-img">
                    </swiper-slide>
                </swiper>

            </div>
        </div>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';

export default {
    name: 'Sponsors Section',
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
        return {
            slides: [
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2FAdvantagesSection%2Fbetcity.svg?alt=media&token=b7d903bf-c17e-40d5-9fe1-ad605cfa38ed'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2FAdvantagesSection%2Fdeneb.svg?alt=media&token=657729dc-198f-4e20-8e5c-389b363f9779'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2FAdvantagesSection%2Fdepot.svg?alt=media&token=bc034df6-e032-4103-bde2-ca0445ccf1f6'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2FAdvantagesSection%2Ffish.svg?alt=media&token=ad13ad6b-e756-4fab-8167-bacf54909d20'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2FAdvantagesSection%2Fmetrafraks.svg?alt=media&token=6c7f3ba3-89d3-477f-bf19-17261245db03'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2FAdvantagesSection%2Fmone.svg?alt=media&token=8bc2c21f-1f9c-4b48-8a67-954cf6f31122'
                },
            ]
        }
    }
}

</script>

<style lang="scss" scoped>

.sponsors__section {
    width: 100%;
    padding: 30px 0;

    .sponsors-swiper {
        width: 100%;
    }
}

</style>