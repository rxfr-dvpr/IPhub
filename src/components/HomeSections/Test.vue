<template>
  <section class="test__section">
    <div class="container">
        <div class="row">
            <div class="test__descr">
                <h3 class="test__descr-title all-title">{{ customTitle }}</h3>
                <p class="test__descr-txt all-txt">{{ customTxt }}</p>
            </div>

            <div class="test__content">
                <div class="test__content-card" v-for="(card, idx) in testCards" :key="idx" v-show="card.showen">
                    <div class="card-top">
                        <p class="test-question">{{ card.question }}</p>

                        <span class="test-num">
                            <span class="active-num">{{ idx + 1 }}</span>/{{ testCards.length }}
                        </span>
                    </div>

                    <div class="test__options">
                        <span class="test__options-item" title="Выбрать этот вариант" v-for="(option, id) in card.options" :key="id"
                        :class="{'active': option.selected}" @click="selectOption(idx, id)">
                            {{ option.value }}
                        </span>
                    </div>
                </div>

                <div class="test__ctrls">
                    <button class="test-btn prev" @click="moveToPrev()">назад</button>
                    <button class="test-btn next" @click="moveToNext()">далее</button>
                </div>
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

        <img :src="testBorderImg" alt="" class="test-img" v-show="imgVisible">
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
        },
        imgVisible: {
            type: Boolean,
            default: false
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
            },
            testCards: [
                {
                  question: "Какие приоритеты развития в IT-компании?",
                  options: [
                    {value: "Разработка ПО", selected: true},
                    {value: "Внедрение новых технологий", selected: false},
                    {value: "Обеспечение безопасности", selected: false},
                    {value: "Развитие облачных решений", selected: false},
                    {value: "Масштабирование инфраструктуры", selected: false},
                    {value: "Обучение персонала", selected: false},
                    {value: "Управление проектами", selected: false},
                    {value: "Внедрение DevOps", selected: false}
                  ],
                  showen: true
                },
                {
                  question: "Как обеспечиваете кибербезопасность в компании?",
                  options: [
                    {value: "Регулярные аудиты", selected: false},
                    {value: "Обучение сотрудников", selected: false},
                    {value: "Мониторинг активности", selected: false},
                    {value: "Использование антивирусов", selected: true},
                    {value: "Шифрование данных", selected: false},
                    {value: "Многофакторная аутентификация", selected: false},
                    {value: "Защита от DDoS", selected: false},
                    {value: "Актуализация систем", selected: false}
                  ],
                  showen: false
                },
                {
                  question: "Ваши приоритеты в разработке ПО?",
                  options: [
                    {value: "Соблюдение сроков и качества", selected: false},
                    {value: "Автоматизация тестирования", selected: false},
                    {value: "Использование agile", selected: false},
                    {value: "Внедрение CI/CD", selected: false},
                    {value: "Разработка масштабируемых решений", selected: false},
                    {value: "Оптимизация процессов", selected: false},
                    {value: "Использование открытых исходных кодов", selected: true},
                    {value: "Развитие мобильных приложений", selected: false}
                  ],
                  showen: false
                },
                {
                  question: "Как привлекаете и удерживаете IT-специалистов?",
                  options: [
                    {value: "Возможности профессионального роста", selected: false},
                    {value: "Конкурентоспособная зарплата", selected: true},
                    {value: "Участие в конференциях", selected: false},
                    {value: "Гибкий график", selected: false},
                    {value: "Бонусы и премии", selected: false},
                    {value: "Обучение и сертификация", selected: false},
                    {value: "Комфортная рабочая среда", selected: false},
                    {value: "Стажировки", selected: false}
                  ],
                  showen: false
                },
                {
                  question: "Какие шаги по оптимизации инфраструктуры?",
                  options: [
                    {value: "Облачные вычисления", selected: false},
                    {value: "Виртуализация", selected: false},
                    {value: "Мониторинг и аналитика", selected: false},
                    {value: "Резервирование данных", selected: false},
                    {value: "Обновление оборудования", selected: false},
                    {value: "План чрезвычайной ситуации", selected: true},
                    {value: "Современные сетевые технологии", selected: false},
                    {value: "Оптимизация процессов", selected: false}
                  ],
                  showen: false
                },
                {
                  question: "Как внедряете DevOps?",
                  options: [
                    {value: "Автоматизация процессов", selected: false},
                    {value: "Объединение команд", selected: false},
                    {value: "Управление конфигурациями", selected: true},
                    {value: "Мониторинг и анализ", selected: false},
                    {value: "Автоматизация тестирования", selected: false},
                    {value: "Развитие культуры сотрудничества", selected: false},
                    {value: "Использование инструментов CI/CD", selected: false},
                    {value: "Регулярные обновления", selected: false}
                  ],
                  showen: false
                },
                {
                  question: "Какие инновационные технологии рассматриваете?",
                  options: [
                    {value: "Искусственный интеллект", selected: false},
                    {value: "Интернет вещей", selected: false},
                    {value: "Блокчейн", selected: false},
                    {value: "Квантовые вычисления", selected: false},
                    {value: "Биометрия", selected: false},
                    {value: "Робототехника", selected: false},
                    {value: "AR/VR", selected: false},
                    {value: "Big Data", selected: true}
                  ],
                  showen: false
                },
                {
                  question: "Как соблюдаете законодательство по защите данных?",
                  options: [
                    {value: "Разработка политик безопасности", selected: false},
                    {value: "Обучение персонала", selected: false},
                    {value: "Регулярные аудиты", selected: false},
                    {value: "Соблюдение требований по защите данных", selected: false},
                    {value: "Шифрование и резервирование данных", selected: true},
                    {value: "Управление доступом", selected: false},
                    {value: "Соблюдение стандартов отрасли", selected: false},
                    {value: "Реагирование на инциденты", selected: false}
                  ],
                  showen: false
                }
            ],
            testBorderImg: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2FTestSection%2Ftest-img.png?alt=media&token=20e66049-a57c-4854-a343-ef5651b5980f'
        }
    },
    methods: {
        selectOption(idx, id) {
            this.testCards[idx].options.map(item => item.selected = false)
            this.testCards[idx].options[id].selected = true
        },
        moveToPrev() {
            let idx = NaN
            this.testCards.map((cards, id) => cards.showen == true ? idx = id : '')
            
            if (idx != 0 && idx <= this.testCards.length - 1) {
              this.testCards[idx].showen = false
              this.testCards[idx - 1].showen = true 
            }
        },
        moveToNext() {
            let idx = NaN
            this.testCards.map((cards, id) => cards.showen == true ? idx = id : '')
            
            if (idx < this.testCards.length - 1) {
              this.testCards[idx].showen = false
              this.testCards[idx + 1].showen = true 
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
            flex-wrap: wrap;
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

    .test__content {
        max-width: 1040px;
        width: 100%;
        background: var(--main-black);
        border-radius: 10px;
        overflow: hidden;
        padding: 40px;
        display: flex;
        flex-direction: column;
        row-gap: 40px;

        &-card {
            width: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 30px;

            .card-top {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: 15px;

                .test-question {
                    font-size: 22px;

                    &::first-letter {
                        text-transform: uppercase;
                    }
                }

                .test-num {
                    font-size: 36px;
                    font-family: var(--scnd-font);

                    .active-num {
                        font-family: var(--scnd-font);
                        color: var(--main-red);
                    }
                }
            }

            .test__options {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                gap: 15px;

                &-item {
                    max-width: 470px;
                    width: 100%;
                    font-size: 15px;
                    background: rgba(255, 255, 255, 0.05);
                    padding: 18px 20px;
                    cursor: pointer;
                    transition: .3s;

                    &.active {
                        background: var(--main-red);
                    }

                    &::first-letter {
                        text-transform: uppercase;
                    }
                }
            }
        }

        .test__ctrls {
            width: 100%;
            display: flex;
            justify-content: space-between;

            .test-btn {
                max-width: max-content;
                width: 100%;
                font-size: 15px;
                color: var(--main-red);
                font-weight: 500;
                border: solid 2px var(--main-red);
                border-radius: 200%;
                padding: 10px 22px 11px;
                position: relative;
                display: block;
                background: transparent;

                &::first-letter {
                    text-transform: uppercase;
                }

                &.next {
                    &::after {
                        content: '⟶';
                        position: absolute;
                        top: 0;
                        right: 0;
                        font-size: 30px;
                        opacity: 0;
                        transition: .4s;
                        transform: translateX(10px);
                    }

                    &:hover::after {
                        transform: translateX(20px);
                        opacity: 1;
                    }
                }

                &.prev {
                    &::after {
                        content: '⟵';
                        position: absolute;
                        top: 0;
                        left: 0;
                        font-size: 30px;
                        opacity: 0;
                        transition: .3s;
                        transform: translateX(-10px);
                    }

                    &:hover::after {
                        transform: translateX(-20px);
                        opacity: 1;
                    }
                }
            }
        }
    }

    .test-img {
        max-width: 345px;
        width: 100%;
        position: absolute;
        top: -30%;
        right: 0;
        visibility: hidden;
    }
}

@media (min-width: 1100px) {
    .test-img {
        visibility: visible !important;
    }
}

</style>