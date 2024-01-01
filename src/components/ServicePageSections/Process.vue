<template>
  <section class="process__section dark-bg">
    <div class="container">
        <div class="row">
            <div class="process__descr">
                <h3 class="process__descr-title all-title">{{ descr.title }}</h3>
                <p class="process__descr-txt all-txt">{{ descr.txt }}</p>

                <div class="process-btns">
                    <button class="process-btn prev">
                        <span class="btn-icon"><i class="fal fa-long-arrow-left"></i></span>
                    </button>

                    <button class="process-btn next">
                        <span class="btn-icon"><i class="fal fa-long-arrow-right"></i></span>
                    </button>
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
}

</style>