<template>
  <section class="process__section dark-bg">
    <div class="container">
        <div class="row">
            <div class="process__descr">
                <h3 class="process__descr-title all-title">{{ descr.title }}</h3>
                <p class="process__descr-txt all-txt">{{ descr.txt }}</p>

                <div class="process-btns">
                    <button class="process-btn prev" @click="activePrev">
                        <span class="btn-icon"><i class="fal fa-long-arrow-left"></i></span>
                    </button>

                    <button class="process-btn next" @click="activeNext">
                        <span class="btn-icon"><i class="fal fa-long-arrow-right"></i></span>
                    </button>
                </div>
            </div>

            <div class="process__steps">
                <div class="process__steps-item" v-for="(step, idx) in steps" :key="idx"
                :class="{'active': step.active}">
                    <span class="step-top">
                        <p class="step-num">{{ idx + 1 }}</p>
                        <img :src="stepIcon" alt="" class="step-icon">
                    </span>

                    <p class="step-name all-txt">{{ step.name }}</p>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'Process Section',
    data() {
        return {
            descr: {
                title: 'Процесс работы',
                txt: 'Достаточно емкое описание блока в две строки, позволяющее расскрыть смысл блока, привлечь внимание пользователя и побудить в действию'
            },
            steps: [
                {
                    name: 'Подготовка и подача заявки',
                    active: true
                },
                {
                    name: 'Делопроизводство и сопровождение заявки',
                    active: false
                },
                {
                    name: 'Поддержка после регистрации',
                    active: false
                },
                {
                    name: 'Выдача свидетельства на товарный знак',
                    active: false
                },
                {
                    name: 'Продление товарного знака',
                    active: false
                },
            ],
            stepIcon: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/ServicesPage%2FProcessSection%2Fgr-arrow.svg?alt=media&token=ff0acd1b-cda6-4a93-a8e0-280ad285e5e7'
        }
    },
    methods: {
        activePrev() {
            let idx = NaN
            this.steps.map((step, id) => step.active == true ? idx = id : '')
            
            if (idx != 0 && idx <= this.steps.length - 1) {
              this.steps[idx].active = false
              this.steps[idx - 1].active = true 
            }
        },
        activeNext() {
            let idx = NaN
            this.steps.map((step, id) => step.active == true ? idx = id : '')
            
            if (idx < this.steps.length - 1) {
              this.steps[idx + 1].active = true 
            }
        }
    }
}

</script>

<style lang="scss" scoped>

.process__section {
    width: 100%;
    padding: 160px 0;

    .row {
        flex-direction: column;
        row-gap: 50px;
    }

    .process__descr {
        max-width: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 5px;
        position: relative;

        &-txt {
            max-width: 700px;
            width: 100%;
        }

        .process-btns {
            max-width: max-content;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            position: absolute;
            bottom: 0;
            right: 0;

            .process-btn {
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
    }

    .process__steps {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 30px;

        &-item {
            max-width: 215px;
            width: 100%;
            display: flex;
            flex-direction: column;

            .step-top {
                width: 100%;
                display: flex;
                justify-content: flex-start;
                column-gap: 50px;

                .step-num {
                    font-size: 45px;
                    font-weight: 900;
                    background: linear-gradient(90deg, #FFFFFF, 25%, #FFFFFF00 100%);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    transition: .4s;
                }

                .step-icon {
                    max-width: 95px;
                    width: 100%;
                }
            }

            .step-name {
                color: var(--primary-color);
                transition: .2s;
            }

            &.active {
                .step-num {
                    background: linear-gradient(90deg, #DA4533 0%, rgba(218, 69, 51, 0.00) 100%);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .step-name {
                    color: var(--main-red);
                }
            }
        }
    }
}

</style>