<template>
  <section class="result__section dark-bg">
    <div class="container">
        <div class="row">
            <div class="result__descr">
                <h3 class="result__descr-title sm-title">{{ title }}</h3>
                <SmLineIcon/>

                <ul class="txt-list">
                    <li class="txt-list-item all-txt" v-for="item in txtList" :key="item">{{ item }}</li>
                </ul>

                <img :src="resultImg" alt="" class="result-img">
            </div>

        </div>
    </div>
  </section>
</template>

<script>
import SmLineIcon from '../SmLineIcon.vue'

export default {
    name: 'Result Section',
    components: {
        SmLineIcon
    },
    data() {
        return {
            title: 'Результат',
            txtList: [
                'Успешная регистрация товарного знака за 10 месяцев.',
                'Номер заявки — 2020702165.',
                'Номер государственной регистрации — 787439.'
            ],
            resultImg: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/CasesPage%2FResultSection%2Fcase-result-img.png?alt=media&token=c63e41d7-780b-4f14-8593-dfe3664b7c0e'
        }
    }
}

</script>

<style lang="scss" scoped>

.result__section {
    width: 100%;
    padding-bottom: 50px;

    .row {
        flex-direction: column;
        row-gap: 15px;
        align-items: flex-end;
    }

    .result__descr {
        max-width: 700px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 15px;

        .txt-list {
            width: 100%;
            display: flex;
            flex-direction: column;
            list-style: decimal;
            padding-left: 15px;
        }

        .result-img {
            max-width: max-content;
            width: 100%;
            object-fit: cover;
            border-radius: 10px;
            overflow: hidden;
            filter: grayscale(100%);
            -webkit-filter: grayscale(100%);
            transition: .4s;
        }

        &:hover {
            .result-img {
                filter: grayscale(0%);
                -webkit-filter: grayscale(0%);
            }
        }
    }
}

@media (max-width: 886px) {
    .result__section {
        padding-bottom: 0 !important;
    }
}

</style>