<template>
  <section class="tasks__section dark-bg">
    <div class="container">
        <div class="row">
            <img :src="tasksImg" alt="" class="tasks-img">

            <div class="tasks__descr">
                <h3 class="tasks__descr-title sm-title">{{ title }}</h3>
                <SmLineIcon/>

                <ul class="txt-list">
                    <li class="txt-list-item all-txt" v-for="item in txtList" :key="item">{{ item }}</li>
                </ul>

                <div class="product-images">
                    <img :src="item.url" v-for="item in productImages" :key="item" alt="" class="product-images-item">
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import SmLineIcon from '../SmLineIcon.vue'

export default {
    name: 'Tasks Section',
    components: {
        SmLineIcon
    },
    data() {
        return {
            title: 'Задачи',
            txtList: [ 'Подготовка и подача заявки для регистрации товарного знака.', 
            'Подготовка ответа на уведомление для снятия доводов для отказа в регистрации товарного знака.',
            'Получение Свидетельства на товарный.'],
            tasksImg: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/CasesPage%2FTaskSection%2Fcase-tasks-img.png?alt=media&token=bfe6ec6d-eb61-410a-81bc-5681672c56e9',
            productImages: [
                {
                    url: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/CasesPage%2FTaskSection%2Fproduct-1.png?alt=media&token=9ce0115e-f0e4-4ba9-83f1-2dab004b55e4'
                },
                {
                    url: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/CasesPage%2FTaskSection%2Fproduct-2.png?alt=media&token=91399d6d-08cd-4ec3-ae04-4399fedc1149'
                }
            ]
        }
    }
}

</script>

<style lang="scss" scoped>

.tasks__section {
    width: 100%;
    padding-bottom: 50px;

    .row {
        justify-content: space-between;
        gap: 35px;
    }

    .tasks__descr {
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
    }

    .tasks-img {
        max-width: 365px;
        width: 100%;
        filter: grayscale(100%);
        -webkit-filter: grayscale(100%);
        border-radius: 10px;
        overflow: hidden;
        object-fit: cover;
        transition: .4s;
    }

    .product-images {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;

        &-item {
            max-width: 340px;
            width: 100%;
            object-fit: cover;
            filter: grayscale(100%);
            -webkit-filter: grayscale(100%);
            transition: .4s;
        }

        &:hover > .product-images-item {
            filter: grayscale(0%);
            -webkit-filter: grayscale(0%);
        }
    }

    &:hover {
        .tasks-img {
            filter: grayscale(0%);
            -webkit-filter: grayscale(0%);
        }
    }
}

</style>