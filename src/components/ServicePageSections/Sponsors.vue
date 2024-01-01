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
                    img: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/ServicesPage%2FSponsorsSection%2Fbetcity.svg?alt=media&token=19417836-68f4-4319-90c8-5da9eb3ae35f'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/ServicesPage%2FSponsorsSection%2Fdeneb.svg?alt=media&token=e3f8ecdf-2cbe-4556-9a49-bb42011a8874'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/ServicesPage%2FSponsorsSection%2Fdepot.svg?alt=media&token=f5ea0f56-e353-4c50-b654-ce5f339f7f74'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/ServicesPage%2FSponsorsSection%2Ffish.svg?alt=media&token=3c5fae96-d845-49f3-9288-2385b0c6e23d'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/ServicesPage%2FSponsorsSection%2Fmetafraks.svg?alt=media&token=079d0d07-5ccb-4724-b8cd-a3b6ee587ac8'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/ServicesPage%2FSponsorsSection%2Fmone.svg?alt=media&token=b80b7c3c-0ec4-4ea4-9eec-0290dd3761b5'
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

        &-slide {
            max-width: 400px;
            width: 100%;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.05);
            padding: 10px 20px;
            display: grid;
            place-items: center;

            .sponsors-img {
                max-width: max-content;
                width: 100%;
                opacity: .5;
                transition: .4s;
            }

            &:hover {
                .sponsors-img {
                    opacity: 1;
                }
            }
        }
    }
}

</style>