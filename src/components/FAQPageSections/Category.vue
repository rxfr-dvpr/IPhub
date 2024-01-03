<template>
    <section class="category__section dark-bg">
        <div class="container">
            <div class="row">

                <div class="search-bar">
                    <input type="text" class="search-bar-inp" v-model="searchVal"
                    placeholder="Начните вводить слово" maxlength="45">

                    <button class="search-btn"><i class="far fa-search"></i></button>
                </div>

                <div class="categories__list">
                    <p class="list-name">{{ listName }}</p>

                    <span class="categories__list-item" v-for="(item, idx) in categories" 
                    :key="idx" :class="{'active': item.active}" @click="selectActive(idx)">
                        {{ item.type }}
                    </span>
                </div>

                <div class="faq__list">
                    <div class="faq__list-item" v-for="(item, id) in faqJson" :key="id" 
                    :class="{'opened': item.opened}">
                        <p class="item-question frstUpper" @click="openTab(id)">
                            {{ item.question }} 
                            <span class="arrow-icon"><i class="far fa-long-arrow-left"></i></span>
                        </p>

                        <Transition>
                            <p class="item-answer all-txt" v-show="item.opened">{{ item.answer }}</p>
                        </Transition>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'Category Section',
    data() {
        return {
            searchVal: '',
            categories: [
                {
                    active: true,
                    type: 'Все услуги'
                },
                {
                    active: false,
                    type: 'Товарные знаки'
                },
                {
                    active: false,
                    type: 'Патенты'
                },
                {
                    active: false,
                    type: 'Дизайн'
                },
                {
                    active: false,
                    type: 'IT'
                },
                {
                    active: false,
                    type: 'Защита'
                },
                {
                    active: false,
                    type: 'Управление'
                },
                {
                    active: false,
                    type: 'Обучение'
                }
            ],
            listName: 'Категории',
            faqJson: [
                {
                  question: "Что такое патент и что он дает?",
                  answer: "Патент — это охранный документ, предоставляющий владельцу исключительное право на определенный результат интеллектуальной деятельности. Исключительные права включают в себя монополию на использование, производство, распространение или лицензирование изобретения. Патент обеспечивает временную монополию на применение и коммерциализацию новаторских идей.",
                  opened: false
                },
                {
                  question: "Чем подтверждается факт поступления заявки в Роспатент?",
                  answer: "Факт поступления заявки в Роспатент подтверждается выдачей официального удостоверения — 'Квитанции о приеме материалов заявки на интеллектуальную собственность'. Этот документ содержит номер и дату поступления заявки, а также подтверждает, что Роспатент получил необходимые документы и оплату.",
                  opened: false
                },
                {
                  question: "Какие документы необходимо представить для получения патента на изобретение?",
                  answer: "Необходимо представить заявление на выдачу патента, описание изобретения, формулы изобретения, рисунки и соответствующие платежи. Дополнительные документы могут включать доверенность и результаты экспертизы по требованию. Описание должно включать детальное объяснение изобретения, его применение и преимущества перед существующими технологиями.",
                  opened: false
                },
                {
                  question: "Кто может подать заявку?",
                  answer: "Заявку на патент может подать физическое или юридическое лицо, являющееся автором или правопреемником прав на изобретение. Заявитель должен иметь законные права на объект интеллектуальной собственности.",
                  opened: false
                },
                {
                  question: "Каков порядок рассмотрения заявки на выдачу патента на изобретение в Роспатенте?",
                  answer: "После поступления заявки, Роспатент проводит формальную и существенную экспертизу. Формальная экспертиза проверяет правильность формы и наличие всех необходимых документов. Существенная экспертиза оценивает новизну и инновационность изобретения. По результатам экспертизы может быть выдан патент.",
                  opened: false
                },
                {
                  question: "Какие документы необходимо представить для получения патента на полезную модель?",
                  answer: "Основные документы включают заявление на выдачу патента, описание полезной модели, рисунки и платежи. Дополнительные документы могут включать доверенность и результаты экспертизы по требованию. Описание должно содержать подробное объяснение сущности полезной модели и ее отличия от существующих решений.",
                  opened: false
                },
                {
                  question: "Можно ли продлить срок действия исключительного права?",
                  answer: "Да, срок действия исключительного права по патенту может быть продлен за дополнительную плату и соблюдение определенных условий, установленных законодательством. Продление срока может быть предусмотрено в случае выполнения дополнительных условий, таких как поддержание патента в действующем состоянии и уплата соответствующих пошлин.",
                  opened: false
                }
            ]           
        }
    },
    methods: {
        selectActive(idx) {
            this.categories.map(item => item.active = false)
            this.categories[idx].active = true
        },
        openTab(id) {
            this.faqJson[id].opened = this.faqJson[id].opened ? false : true 
        }
    }
}

</script>

<style lang="scss" scoped>

.category__section {
    width: 100%;
    padding-bottom: 150px;

    .row {
        flex-direction: column;
        row-gap: 25px;
    }

    .search-bar {
        max-width: 910px;
        width: 100%;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.05);
        padding: 7px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 35px;

        &-inp {
            width: 100%;
            height: 45px;
            background: transparent;
            border: 0;
            outline: none;
            font-size: 15px;

            &::selection {
                background: var(--main-red);
            }
        }

        .search-btn {
            background: transparent;
            border: 0;
            font-size: 23px;
            outline: none;
        }
    }

    .categories__list {
        width: 100%;
        min-width: 100%;
        display: flex;
        align-items: center; 
        overflow-x: auto;
        padding-bottom: 15px;

        .list-name {
            color: var(--main-gray);
            text-transform: uppercase;
            margin-right: 15px;
        }

        &-item {
            cursor: pointer;
            color: var(--main-gray);
            padding: 10px 15px;
            background: rgba(255, 255, 255, 0.05);
            transition: .4s;
            min-width: max-content;

            &:hover {
                color: var(--primary-color);
                background: rgba(255, 255, 255, 0.15);
            }

            &.active {
                color: var(--primary-color);
                background: rgba(255, 255, 255, 0.15);
            }
        }

        span {
            &:first-of-type {
                border-radius: 8px 0px 0px 8px;   
            }

            &:last-of-type {
                border-radius: 0px 8px 8px 0px;
            }
        }
    }

    .faq__list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        &-item {
            max-width: 595px;
            width: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 5px;

            .item-question {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: calc(14px + 4 * (100vw / 1920));
                color: var(--main-gray);
                gap: 20px;
                border-radius: 8px;
                background: rgba(255, 255, 255, 0.05);
                padding: 20px;
                cursor: pointer;
                transition: .3s;
                overflow: hidden;
                min-height: 64px;

                .arrow-icon {
                    font-size: 20px;
                    transform: rotate(271deg);
                    transition: .3s;

                    i {
                        color: var(--main-red);
                    }
                }
            }

            &.opened {
                .item-question {
                    color: var(--primary-color);
                    background: rgba(255, 255, 255, 0.15);
                }

                .arrow-icon {
                    transform: rotate(91deg);
                }
            }
        }
    }
}

.v-enter-active,
.v-leave-active {
  transition: .3s;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

::-webkit-scrollbar {
    height: 5px;
    background: rgba($color: #0000, $alpha: .9);
}

@media (min-width: 1920px) {
    .item-question {
        font-size: 18px !important;
    }
}

@media (max-width: 1240px) {
    .faq__list {
        &-item {
            max-width: 500px !important;
        }
    }
}

@media (max-width: 1050px) {
    .category__section {
        padding-bottom: 120px;
    }
}

@media (max-width: 1050px) {
    .faq__list {
        &-item {
            max-width: 450px !important;
        }
    }
}

@media (max-width: 975px) {
    .category__section {
        padding-bottom: 80px;
    }

    .faq__list {
        justify-content: center;

        &-item {
            max-width: 350px !important;
        }
    }
}

@media (max-width: 755px) {
    .faq__list {
        flex-direction: column;
        align-items: center;

        &-item {
            max-width: 100% !important;
        }
    }
}


</style>