<template>
  <section class="services__section">
    <div class="container">
        <div class="row">
            <div class="services__descr">
                <h3 class="services__descr-title all-title">{{ descr.title }}</h3>
                <p class="services__descr-txt all-txt">{{ descr.txt }}</p>

                <span class="srvc-link"><ServicesLink/></span>
            </div>

            <ServicesSlider/>
        </div>
    </div>
  </section>
</template>

<script>
import ServicesLink from '../ServicesLink.vue'
import ServicesSlider from './ServicesSlider.vue'

export default {
    name: 'Services Section',
    components: {
        ServicesLink,
        ServicesSlider
    },
    data() {
        return {
            descr: {
                title: 'решения для вашего бизнеса',
                txt: 'у нас есть все необходимые ресурсы для решения любых ваших потребностей в сфере интеллектуальной собственности'
            }
        }
    }
}

</script>

<style lang="scss" scoped>

.services__section {
    width: 100%;
    padding: 160px 0;
    background: rgba($color: #fff, $alpha: .7);

    .row {
        flex-direction: column;
        row-gap: 50px;
    }

    .services__descr {
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        position: relative;

        &-title {
            color: var(--main-black);
        }

        &-txt {
            max-width: 700px;
            width: 100%;
            font-weight: 500;
        }

        .srvc-link {
            position: absolute;
            bottom: 0;
            right: 0;
        }
    }
}

</style>