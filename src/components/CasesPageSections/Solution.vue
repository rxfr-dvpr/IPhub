<template>
  <section class="solution__section dark-bg">
    <div class="container">
        <div class="row">

            <div class="solution__descr">
                <h3 class="solution-title sm-title">{{ title }}</h3>
                <SmLineIcon/>

                <p class="solution-txt all-txt" v-for="txt in txtList" :key="txt">{{ txt }}</p>
            </div>

        </div>
    </div>
  </section>
</template>

<script>
import SmLineIcon from '../SmLineIcon.vue'

export default {
    name: 'Solution Section',
    components: {
        SmLineIcon
    },
    data() {
        return {
            title: 'Решение',
            txtList: [
                'По оценке экспертизы выявлено основание для отказа, так как были противопоставлены 7 товарных знаков, которые были признаны сходными до степени смешения.',
                'Нами было доказано, что у потребителя не возникнет смешения брендов, так как деятельность заявителя и правообладателей знаков не пересекается и относится к другим сферам.',
                'Товарный знак был зарегистрированы в отношении косметических товаров и услуг магазина косметики.'
            ]
        }
    }
}

</script>

<style lang="scss" scoped>

.solution__section {
    width: 100%;
    padding-bottom: 50px;

    .row {
        flex-direction: column;
        align-items: flex-end;
    }

    .solution__descr {
        max-width: 700px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 15px;
    }
}

</style>