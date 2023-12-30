<template>
  <section class="test__section">
    <div class="container">
        <div class="row">
            <div class="test__descr">
                <h3 class="test__descr-title all-title">{{ customTitle }}</h3>
                <p class="test__descr-txt all-txt">{{ customTxt }}</p>
            </div>

            <div class="bonuses__content">
                <p class="bonuses__content-title">{{ bonuses.title }}</p>

                <div class="bonus__cards">
                    <div class="bonus__cards-item" v-for="(card, idx) in bonuses.cards" :key="idx">
                        <img :src="card.icon" alt="" class="bonus-img" :data-id="++idx">
                        <p class="bonus-txt">{{ card.txt }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'Test Section',
    props: {
        customTitle: {
            type: String,
            default: 'не знаете, что вам нужно?'
        },
        customTxt: {
            type: String,
            default: 'пройдите квиз, чтобы выбрать оптимальное решение для Вашей задачи'
        }
    },
    data() {
        return {
            bonuses: {
                title: 'бонусы после прохождения',
                cards: [
                    {
                        icon: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2FTestSection%2Fbonus-1.svg?alt=media&token=c0a58ead-9158-44f4-a4a8-fdaf4decf916',
                        txt: 'Блиц-Вознаграждение: Успех с уникальным бонусом!'
                    },
                    {
                        icon: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2FTestSection%2Fbonus-2.svg?alt=media&token=25ae23b1-9f18-4ba6-a415-b7daece3e1c4',
                        txt: 'Моментальное удовольствие: Который радует мгновенно!'
                    },
                ]
            }
        }
    }
}

</script>

<style lang="scss" scoped>

.test__section {
    width: 100%;
    background: var(--main-red);
    padding: 160px 0;

    .row {
        flex-direction: column;
        row-gap: 50px;
    }

    .test__descr {
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 15px;

        &-txt {
            max-width: 705px;
            width: 100%;
            color: var(--primary-color);
        }
    }

    .bonuses__content {
        max-width: 805px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 25px;

        &-title {
            font-size: 24px;

            &::first-letter {
                text-transform: uppercase;
            }
        }

        .bonus__cards {
            width: 100%;
            display: flex;
            justify-content: space-between;
            gap: 25px;

            &-item {
                max-width: 390px;
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-radius: 8px;
                background: var(--main-black);
                padding: 15px;
                overflow: hidden;
                gap: 15px;

                .bonus-img {
                    max-width: 85px;
                    display: block;
                    object-fit: cover;

                    &[data-id="2"] {
                        opacity: .55;
                    }
                }

                .bonus-txt {
                    max-width: 100%;
                    font-size: 17px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;

                    &::first-letter {
                        text-transform: uppercase;
                    }
                }
            }
        }
    }
}

</style>