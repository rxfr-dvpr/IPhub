<template>
  <section class="patent__section dark-bg">
    <div class="container">
        <div class="row">
            <h3 class="patent-title all-title">{{ titleTxt }}</h3>

            <div class="patent__cards">
                <div class="patent__cards-item" v-for="(card, idx) in cards" :key="idx">
                    <p class="item-name"><span class="item-num">{{ idx + 1 }}</span> {{ card.name }}</p>
                    <p class="item-txt all-txt">{{ card.txt }}</p>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'Patent Section',
    data() {
        return {
            titleTxt: 'зачем регистрировать патент',
            cards: [
                {
                    name: 'Безопасность для бренда',
                    txt: 'Когда товарный знак зарегистрирован, его никто более не может использовать для обозначения своего бренда'
                },
                {
                    name: 'Нематериальный актив',
                    txt: 'Зарегистрированный товарный знак считается нематериальным активом, его можно оценить и увеличить стоимость'
                },
                {
                    name: 'Подготовка выводов и рекомендаций',
                    txt: 'Невозможно случайно нарушить чужие права при регистрации товарного знака'
                },
            ]
        }
    }
}

</script>

<style lang="scss" scoped>

.patent__section {
    width: 100%;
    padding: 130px 0 160px;

    .row {
        flex-direction: column;
        row-gap: 50px;
    }

    .patent__cards {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;

        &-item {
            max-width: 390px;
            width: 100%;
            display: flex;
            flex-direction: column;

            .item-name {
                font-size: 18px;
                display: flex;
                align-items: center;
                gap: 15px;

                &::first-letter {
                    text-transform: uppercase;
                }

                .item-num {
                    font-size: 65px;
                    font-weight: 900;
                    background: linear-gradient(90deg, #DA4533 0%, rgba(218, 69, 51, 0.00) 100%);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-family: var(--scnd-font) !important; 
                }
            }

            .item-txt {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
            }
        }
    }
}

</style>