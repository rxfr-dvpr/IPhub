<template>
  <header class="header dark-bg">
    <div class="container">
        <div class="row">
            <div class="header__descr">
                <span class="header__descr-subtitle all-txt">ваш ip партнер</span>

                <h1 class="header__descr-title scnd-font" v-html="customTitle"></h1>

                <p class="header__descr-txt">{{ customTxt }}</p>

                <div class="header__buttons">
                    <ConsultBtn/>
                    
                    <ServicesLink/>
                </div>
            </div>

            <img :src="customImg" alt="" class="header-img">
        </div>
    </div>
  </header>
</template>

<script>
import ConsultBtn from '../ConsultBtn.vue'
import ServicesLink from '../ServicesLink.vue'

export default {
    name: 'Header',
    components: {
        ServicesLink,
        ConsultBtn
    },
    props: {
        customTitle: {
            type: String,
            default: '<span class="red-quote">‘</span> Интеллектуальная <span class="itlc-wrd">собственность</span> <span class="red-quote">’</span>'
        },
        customTxt: {
            type: String,
            default: 'индивидуальные правовые решения для защиты и охраны ваших нематериальных активов в России и за рубежом'
        },
        customImg: {
            type: String,
            default: "https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2Fheader-img.png?alt=media&token=df6e8d65-6f7d-4a54-9ed2-1bd5636ed4b2"
        }
    }
}

</script>

<style lang="scss" scoped>

.header {
    width: 100%;
    padding: 30px 0;

    .row {
        justify-content: space-between;
        align-items: center;
        flex-wrap: unset;
    }

    .header__descr {
        max-width: 600px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 8px;

        &-subtitle {
            color: var(--main-gray);
            text-transform: uppercase;
        }

        &-title {
            font-size: calc(25px + 30 * (100vw / 1920));
            font-weight: 500;
            
        }

        &-txt {
            font-size: calc(14px + 4 * (100vw / 1920));
            color: var(--main-gray);

            &::first-letter {
                text-transform: uppercase;
            }
        }

        .header__buttons {
            width: 100%;
            display: flex;
            column-gap: 40px;
            row-gap: 20px;
            align-items: center;
            margin-top: 30px;
        }
    }

    .header-img {
        max-width: 545px;
        width: 100%;
        display: block;
        pointer-events: none;
    }
}

@media (min-width: 1920px) {
    .header__descr {
        &-title {
            font-size: 55px !important;
        }

        &-txt {
            font-size: 18px !important;
        }
    }
}

@media (max-width: 1110px) {
    .header-img {
        max-width: 390px !important;
    }
}

@media (max-width: 992px) {
    .header__descr {
        max-width: 465px !important;
    }
}

@media (max-width: 868px) {
    .row {
        flex-direction: column;
    }

    .header__descr {
        align-items: center;
        text-align: center;
    }

    .header__buttons {
        flex-direction: column;
    }

    .header-img {
        display: none !important;
    }
}

</style>