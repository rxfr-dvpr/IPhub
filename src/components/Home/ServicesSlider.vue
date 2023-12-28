<template>
    <swiper class="services-slider" :spaceBetween="20" :slidesPerView="3"  :modules="modules" :navigation="{prevEl:'.swiper-btn.prev', nextEl:'.swiper-btn.next'}">
        <swiper-slide class="services-slider-slide" v-for="(slide, idx) in slides" :key="idx">
            <span class="arrow-icon"><i class="fal fa-arrow-right"></i></span>
            <img :src="slide.img" alt="" class="slide-img">
            <p class="slide-title">{{ slide.title }}</p>
            <p class="slide-txt">{{ slide.txt }}</p>
        </swiper-slide>
    </swiper>

    <div class="swiper-buttons">
        <button class="swiper-btn prev"><span class="btn-icon"><i class="fal fa-long-arrow-left"></i></span></button>
        <button class="swiper-btn next"><span class="btn-icon"><i class="fal fa-long-arrow-right"></i></span></button>
    </div>

</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation } from 'swiper/modules';

export default {
    name: 'Services Slider',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            slides: [
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2FServicesSection%2Fslide-1.svg?alt=media&token=ee6de547-1530-422e-b214-6e2e3e903df6',
                    title: 'регистрация товарного знака в Роспатенте',
                    txt: 'регистрация прав инновационные устройства, способы или технологии'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2FServicesSection%2Fslide-2.svg?alt=media&token=653b343e-cee9-4686-85f7-50286b9715b0',
                    title: 'изобретения и Полезные модели',
                    txt: 'регистрация прав инновационные устройства, способы или технологии'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2FServicesSection%2Fslide-3.svg?alt=media&token=a6ba785b-d05a-42f4-bbce-f230bf7fe9bc',
                    title: 'промышленные образцы',
                    txt: 'регистрация прав инновационные устройства, способы или технологии'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2FServicesSection%2Fslide-4.svg?alt=media&token=e4aa2887-cb36-43d2-bb9a-6acc46d8a283',
                    title: 'программы для ЭВМ и Базы данных',
                    txt: 'регистрация прав инновационные устройства, способы или технологии'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2FServicesSection%2Fslide-5.svg?alt=media&token=98da7b94-b7b3-431d-8a00-6c20ccb3ff76',
                    title: 'представление интересов, суды',
                    txt: 'регистрация прав инновационные устройства, способы или технологии'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2FServicesSection%2Fslide-6.svg?alt=media&token=875cd752-7024-4f13-b30b-7941ad54d237',
                    title: 'лицензии, франчайзинг и отчуждение прав',
                    txt: 'регистрация прав инновационные устройства, способы или технологии'
                },
            ],
            modules: [Navigation],
        }
    }
}

</script>

<style lang="scss" scoped>

.services-slider {
    width: 100%;

    &-slide {
        max-width: 300px;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        row-gap: 5px;
        background: #1B1B1B;
        padding: 20px 25px;
        border-radius: 8px;
        cursor: pointer;
        overflow: hidden;
        max-height: 380px;

        .arrow-icon {
            margin-left: auto;
            font-size: 30px;
            transform: rotate(-45deg);
            transition: .6s;
            opacity: .5;
            margin-bottom: 30px;
        }

        .slide-img {
            max-width: 165px;
            width: 100%;
            object-fit: contain;
            margin: 0 auto;
            transition: .4s;
        }

        .slide-title {
            font-size: 18px;
            font-weight: 500;
            color: var(--main-gray);
            transition: .4s;
            margin-top: 30px;

            &::first-letter {
                text-transform: uppercase;
            }
        }

        .slide-txt {
            font-size: 14px;
            color: var(--main-gray);
            transition: 1s;
            height: 0%;
            opacity: 0;
            margin-top: auto;

            &::first-letter {
                text-transform: uppercase;
            }
        }

        &:hover {
            .slide-img {
                max-width: 145px;
                opacity: .5;
            }

            .arrow-icon {
                opacity: 1;
                margin-bottom: 10px;
                transform: rotate(135deg);
            }

            .slide-title {
                color: var(--primary-color);
                margin-top: 20px;
            }

            .slide-txt {
                height: 100%;
                opacity: 1;
            }
        }
    }
}

.swiper-buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    .swiper-btn {
        min-width: 50px;
        max-width: 50px;
        width: 100%;
        min-height: 50px;
        max-height: 50px;
        height: 100%;
        background: transparent;
        border-radius: 50%;
        border: solid 1px var(--main-red);
        position: relative;
        font-size: 25px;

        .btn-icon {
            position: absolute;
            top: 20%;
            transition: .4s;

            i {
                color: var(--main-red);
            }
        }

        &.prev .btn-icon {
            left: 13px;
        }

        &.next .btn-icon {
            right: 13px;
        }

        &:not(.swiper-button-disabled):hover.prev .btn-icon {  
            left: -15px;
        }

        &:not(.swiper-button-disabled):hover.next .btn-icon {
            right: -15px;
        }
    }
}

</style>