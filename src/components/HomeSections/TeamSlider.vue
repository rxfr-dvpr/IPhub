<template>
    <swiper class="team__slider" :spaceBetween="20" :slidesPerView="4"  :modules="modules" 
    :navigation="{prevEl:'.team-swiper-btn.prev', nextEl:'.team-swiper-btn.next'}">
        <swiper-slide class="team__slider-slide" v-for="(slide, idx) in slides" :key="idx">

            <div class="slide-img-box">
                <img :src="slide.img" alt="" class="slide-img">
            </div>

            <div class="slide__descr">
                <p class="slide__descr-name">{{ slide.name }}</p>
                <p class="slide__descr-job all-txt">{{ slide.job }}</p>
            </div>

        </swiper-slide>
    </swiper>

    <div class="team-swiper-btns">
        <button class="team-swiper-btn prev"><span class="btn-icon"><i class="fal fa-long-arrow-left"></i></span></button>
        <button class="team-swiper-btn next"><span class="btn-icon"><i class="fal fa-long-arrow-right"></i></span></button>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation } from 'swiper/modules';

export default {
    name: 'Team Slider',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            slides: [
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2FTeamSection%2Flidiya.png?alt=media&token=dce5bccb-2a22-45d3-8c72-242a269271a1',
                    name: 'Раймм Лидия Вячеславовна',
                    job: 'Генеральный директор'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2FTeamSection%2Fgennadiy.png?alt=media&token=8e7dc2d1-490a-44ae-a22f-000439f75155',
                    name: 'Золотов Геннадий Борисович',
                    job: 'Руководитель отдела патентно-юридического делопроизводства'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2FTeamSection%2Fekatirina.png?alt=media&token=5b267cf3-2ff7-4f87-8343-f2392c022832',
                    name: 'Осоргина Екатерина Александровна',
                    job: 'Патентный поверенный РФ'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2FTeamSection%2Fyuliya.png?alt=media&token=b2211e92-a297-4413-a1d5-f54c0996105a',
                    name: 'Рачеева Юлия Геннадьевна',
                    job: 'Патентный поверенный РФ'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2FTeamSection%2Falina.png?alt=media&token=4c2db190-6462-48ed-8022-6fc8aab8df68',
                    name: 'Пахоменко Алина Аликовна',
                    job: 'Адвокат'
                },
            ],
            modules: [Navigation],
        }
    }
}

</script>

<style lang="scss" scoped>

.team__slider {
    width: 100%;

    &-slide {
        max-width: 290px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        height: auto;
        cursor: pointer;

        .slide-img-box {
            width: 100%;
            border-radius: 10px;
            overflow: hidden;
            max-height: 320px;
            height: 100%;

            .slide-img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center center;
                display: block;
                transition: .5s;
                filter: grayscale(100%);
            }
        }

        .slide__descr {
            width: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 5px;

            &-name {
                font-size: 18px;
                font-weight: 500;
                color: var(--main-black);
                text-transform: capitalize;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            &-job {
                font-weight: 500;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        &:hover {
            .slide-img {
                filter: grayscale(0%);
            }
        }
    }
}

.team-swiper-btns {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    .team-swiper-btn {
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