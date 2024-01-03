<template>
  <section class="info__section dark-bg">
    <div class="container">
        <div class="row">
            <h3 class="info-title all-title">{{ titleTxt }}</h3>

            <div class="info__cards">
                <div class="info__cards-item" v-for="(card, idx) in cards" :key="idx">
                    <p class="card-name">{{ card.name }}</p>

                    <p class="card-txt all-txt">{{ card.txt }}</p>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'Info Section',
    data() {
        return {
            titleTxt: 'Что дает регистрация патента?',
            cards: [
                {
                    name: 'Расширение бренда',
                    txt: 'Возможность коммерциализации бренда, что позволяет расширить бизнес и дает право другому лицу официально работать под Вашим брендом'
                },
                {
                    name: 'Деловая репутация',
                    txt: 'Наличие товарный знак позволяет привлечь к ответственности тех, кто незаконно зарабатывает на копировании вашего бренда'
                },
                {
                    name: 'Узнаваемость',
                    txt: 'Известность бренда повышает лояльность и доверие покупателей'
                }
            ]
        }
    }
}

</script>

<style lang="scss" scoped>

.info__section {
    width: 100%;
    padding-bottom: 160px;

    .row {
        flex-direction: column;
        row-gap: 50px;
    }

    .info__cards {
        width: 100%;
        display: flex;
        gap: 20px;

        &-item {
            max-width: 390px;
            width: 100%;
            padding: 20px;
            display: flex;
            flex-direction: column;
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

            .card-name {
                font-size: calc(15px + 2 * (100vw / 1920));

                &::first-letter {
                    text-transform: uppercase;
                }
            }
        }
    }
}

@media (min-width: 1920px) {
    .card-name {
        font-size: 17px !important;
    }
}

@media (max-width: 992px) {
    .info__section {
        padding-bottom: 80px;
    }
}

@media (max-width: 768px) {
    .info__cards {
        flex-direction: column;

        &-item {
            max-width: 500px !important;
        }
    }
}

</style>