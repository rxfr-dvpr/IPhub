<template>
  <section class="case__section dark-bg">
    <div class="container">
        <div class="row">

            <div class="case__descr">
                <h3 class="case__descr-title all-title">{{ customTitle }}</h3>
                <p class="case__descr-txt all-txt" v-if="customTxt">{{ customTxt }}</p>

                <span class="case-link"><ServicesLink/></span>
            </div>

            <CaseSlider/>
        </div>
    </div>
  </section>
</template>

<script>
import ServicesLink from '../ServicesLink.vue'
import CaseSlider from './CaseSlider.vue'

export default {
    name: 'Case Section',
    components: {
        ServicesLink,
        CaseSlider
    },
    props: {
        customTitle: {
            type: String,
            default: 'реализованные кейсы'
        },
        customTxt: {
            type: String,
            default: ''
        }
    }
}

</script>

<style lang="scss" scoped>

.case__section {
    width: 100%;
    padding: 160px 0;

    .row {
        flex-direction: column;
        row-gap: 50px;
    }

    .case__descr {
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        position: relative;

        &-txt {
            max-width: 705px;
        }

        .case-link {
            position: absolute;
            bottom: 0;
            right: 0;
            display: block;
        }
    }
}

@media (max-width: 1000px) {
    .case__section {
        padding: 120px 0;
    }
}

@media (max-width: 992px) {
    .case__descr-txt {
        max-width: 500px !important;
    }

    .case-link {
        bottom: 50% !important;
    }
}

@media (max-width: 786px) {
    .case__section {
        padding: 80px 0;
    }

    .case__descr-txt {
        max-width: 400px !important;
    }
}

@media (max-width: 568px) {

    .case__descr-txt {
        max-width: 300px !important;
    }
}

@media (max-width: 486px) {
    .case-link {
        display: none !important;
    }

    .case__descr {
        align-items: center;
        text-align: center;

        &-txt {
            max-width: 100% !important;
        }
    }
}

</style>