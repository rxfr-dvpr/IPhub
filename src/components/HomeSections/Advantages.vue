<template>
  <section class="advantages__section dark-bg">
    <div class="container">
        <div class="row">
            <img :src="advImg" alt="" class="adv-img">

            <div class="adv__descr">
                <h3 class="adv__descr-title all-title">{{ descr.title }}</h3>
                <p class="adv__descr-txt all-txt">{{ descr.txt }}</p>

                <div class="adv__cards">
                    <div class="adv__cards-item" v-for="(card, idx) in advCards" :key="idx">
                        <span class="item-num scnd-font">{{ card.num }}</span>
                        <p class="item-txt">{{ card.txt }}</p>
                    </div>
                </div>

                <div class="adv__partners">
                    <h3 class="adv__partners-title all-title">{{ advPartners.title }}</h3>
                    <p class="adv__partners-txt all-txt">{{ advPartners.txt }}</p>

                    <div class="partners__cards">
                        <div class="partners__cards-item" v-for="(img, idx) in advPartners.cards" :key="idx">
                            <img :src="img.url" alt="" class="partner-img">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'Advantages Section',
    data() {
        return {
            advImg: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2Fhome-advantages-img.png?alt=media&token=31180bfc-8387-4b83-b2a5-6f67f7e9a450',
            descr: {
                title: 'Многолетний опыт',
                txt: 'Наша компания была создана в 2019 году специалистами, имеющими опыт работы в сфере интеллектуальной собственности более 20 лет'
            },
            advCards: [
                {
                    num: ">300",
                    txt: 'Представления интересов в спорах по IP правам в год'
                },
                {
                    num: ">2500",
                    txt: 'Оказаний юридической помощи компаниям в год'
                },
                {
                    num: "1150",
                    txt: 'Завершённых дел по регистрации товарных знаков'
                },
                {
                    num: "61",
                    txt: 'Совокупный опыт экспертов'
                },
                {
                    num: "99%",
                    txt: 'Успех получения патентов'
                },
                {
                    num: "98%",
                    txt: 'Успех регистрации товарных знаков'
                },
            ],
            advPartners: {
                title: 'подтвержденный практикой',
                txt: 'мы и наши клиенты гордимся опытом, который подтверждается нашими результатами от закрепления прав заявителей до успешной защиты интересов',
                cards: [
                    {
                        url: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2FAdvantagesSection%2Fdepot.svg?alt=media&token=bc034df6-e032-4103-bde2-ca0445ccf1f6'
                    },
                    {
                        url: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2FAdvantagesSection%2Fmetrafraks.svg?alt=media&token=6c7f3ba3-89d3-477f-bf19-17261245db03'
                    },
                    {
                        url: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2FAdvantagesSection%2Fdeneb.svg?alt=media&token=657729dc-198f-4e20-8e5c-389b363f9779'
                    },
                    {
                        url: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2FAdvantagesSection%2Fmone.svg?alt=media&token=8bc2c21f-1f9c-4b48-8a67-954cf6f31122'
                    },
                    {
                        url: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2FAdvantagesSection%2Fbetcity.svg?alt=media&token=b7d903bf-c17e-40d5-9fe1-ad605cfa38ed'
                    },
                    {
                        url: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2FAdvantagesSection%2Ffish.svg?alt=media&token=ad13ad6b-e756-4fab-8167-bacf54909d20'
                    }
                ]
            }
        }
    }
}

</script>

<style lang="scss" scoped>

.advantages__section {
    width: 100%;
    height: 100%;
    padding: 50px 0 150px;

    .row {
        justify-content: space-between;
        align-items: flex-start;
    }

    .adv-img {
        max-width: 390px;
        width: 100%;
        display: block;
        pointer-events: none;
    }

    .adv__descr {
        max-width: 800px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 15px;

        .adv__cards {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-top: 35px;

            &-item {
                max-width: 390px;
                width: 100%;
                display: flex;
                flex-direction: column;
                padding: 20px;
                row-gap: 5px;
                border-radius: 8px;
                overflow: hidden;
                background: radial-gradient(circle at 100% 100%, #1b1b1b 0, #1b1b1b 7px, transparent 7px) 0% 0%/8px 8px no-repeat,
                    radial-gradient(circle at 0 100%, #1b1b1b 0, #1b1b1b 7px, transparent 7px) 100% 0%/8px 8px no-repeat,
                    radial-gradient(circle at 100% 0, #1b1b1b 0, #1b1b1b 7px, transparent 7px) 0% 100%/8px 8px no-repeat,
                    radial-gradient(circle at 0 0, #1b1b1b 0, #1b1b1b 7px, transparent 7px) 100% 100%/8px 8px no-repeat,
                    linear-gradient(#1b1b1b, #1b1b1b) 50% 50%/calc(100% - 2px) calc(100% - 16px) no-repeat,
                    linear-gradient(#1b1b1b, #1b1b1b) 50% 50%/calc(100% - 16px) calc(100% - 2px) no-repeat,
                    linear-gradient(340deg, transparent 60%, #da4533 100%);

                .item-num {
                    font-size: 36px;
                }

                .item-txt {
                    max-width: 250px;
                    width: 100%;
                    font-size: 15px;
                    color: var(--main-gray);

                    &::first-letter {
                        text-transform: uppercase;
                    }
                }
            }
        }

        .adv__partners {
            width: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 15px;
            margin-top: 85px;

            .partners__cards {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                gap: 20px;

                &-item {
                    max-width: 390px;
                    width: 100%;
                    border-radius: 8px;
                    background: rgba(255, 255, 255, 0.05);
                    overflow: hidden;
                    display: grid;
                    place-items: center;
                    min-height: 119px;
                    height: 100%;
                    max-height: 119px;

                    .partner-img {
                        max-width: max-content;
                        width: 100%;
                        display: block;
                        pointer-events: none;
                        opacity: .5;
                        transition: .4s;
                    }

                    &:hover {
                        .partner-img {
                            opacity: 1;
                        }
                    }
                }
            }
        }
    }
}

</style>