<template>
    <swiper class="case-slider" :spaceBetween="20" :breakpoints="breakViews"  :modules="modules" :navigation="{prevEl:'.case-swiper-btn.prev', nextEl:'.case-swiper-btn.next'}">
        <swiper-slide class="case-slider-slide" v-for="(slide, idx) in slides" :key="idx">

            <div class="slide-img-box">
                <img :src="slide.img" alt="" class="slide-img">
            </div>

            <div class="slide-descr">
                <span class="arrow-icon"><i class="fal fa-arrow-right"></i></span>

                <p class="slide-title">{{ slide.title }}</p>
                <p class="slide-txt all-txt">{{ slide.txt }}</p>
            </div>

        </swiper-slide>
    </swiper>

    <div class="case-swiper-btns">
        <button class="case-swiper-btn prev"><span class="btn-icon"><i class="fal fa-long-arrow-left"></i></span></button>
        <button class="case-swiper-btn next"><span class="btn-icon"><i class="fal fa-long-arrow-right"></i></span></button>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation } from 'swiper/modules';

export default {
    name: 'Case Slider',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            slides: [
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2FCaseSection%2Fcirckle.svg?alt=media&token=cf579f20-e89a-4729-9d41-2aaf2fc19ee3',
                    title: 'CIRKLE — производитель косметической продукции',
                    txt: 'как в результате защиты  мы зарегистрировали бренд российской косметики при наличии оснований для отказа'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2FCaseSection%2Fcameraiq.svg?alt=media&token=29265c79-49dc-43a8-a79c-b82c1a32907d',
                    title: 'Camera IQ — производитель систем машинного зрения',
                    txt: 'защита прав после ребрендинга. Как провести успешную регистрацию'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2FCaseSection%2Fhands.svg?alt=media&token=5a2a6ad1-cbbe-47d6-8349-af43748693ad',
                    title: 'HANDS — производитель строительных материалов',
                    txt: 'предварительный отказ — не приговор! Как мы защищали монополию российского производителя строительных материалов.'
                },
            ],
            modules: [Navigation],
            breakViews: {
                '992': {
                  slidesPerView: 2,
                },
                '867': {
                  slidesPerView: 1.5,
                },
            }
        }
    }
}

</script>

<style lang="scss" scoped>

.case-slider {
    width: 100%;
    
    &-slide {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        border-radius: 8px;
        overflow: hidden;
        background: rgba(255, 255, 255, 0.05);
        cursor: pointer;
        transition: .4s;

        .slide-img-box {
            max-width: 290px;
            width: 100%;
            height: auto;
            padding: 0 45px;
            display: grid;
            place-items: center;
            background: rgba(255, 255, 255, 0.05);
            transition: .4s;

            .slide-img {
                width: 100%;
                display: block;
            }
        }

        .slide-descr {
            width: 100%;
            padding: 20px 20px 65px;
            display: flex;
            flex-direction: column;
            row-gap: 5px;

            &-title {
                font-size: 16px;
            }

            .arrow-icon {
                margin-left: auto;
                font-size: 30px;
                transform: rotate(-45deg);
                transition: .6s;
                opacity: .5;
                margin-bottom: 30px;
            }
        }

        &:hover {
            background: rgba(255, 255, 255, 0.10);

            .slide-img-box {
                background: #5A5A5A;
            }

            .arrow-icon {
                opacity: 1;
                margin-bottom: 15px;
                transform: rotate(135deg);
            }
        }
    }
}

.case-swiper-btns {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    .case-swiper-btn {
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

@media (max-width: 668px) {
    .slide-img-box {
        max-width: 230px !important;
        padding: 0 30px !important; 
    }
}

@media (max-width: 576px) {
    .case-slider-slide {
        flex-direction: column;
        position: relative;

        .slide-img-box {
            max-width: 100% !important;
            height: 100%;
            padding: 40px 0 !important;

            .slide-img {
                max-width: 200px;
            }
        }

        .slide-descr {
            padding: 35px 15px !important;
        }

        .arrow-icon {
            position: absolute;
            top: 5px;
            right: 10px;
            font-size: 25px !important;
        }
    }
}

</style>