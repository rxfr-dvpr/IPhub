<template>
  <section class="advantages__section dark-bg">
    <div class="container">
        <div class="row">
            <img :src="advImg" alt="" class="advantages-img">

            <div class="advantages__descr">
                <h3 class="advantages__descr-title scnd-font">{{ descr.title }}</h3>
                <p class="advantages__descr-txt">{{ descr.txt }}</p>
            </div>
        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'Advantages Section',
    data() {
        return {
            advImg: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2Fhome-advantages-img.png?alt=media&token=31180bfc-8387-4b83-b2a5-6f67f7e9a450',
            descr: {
                title: 'Многолетний опыт',
                txt: 'Наша компания была создана в 2019 году специалистами, имеющими опыт работы в сфере интеллектуальной собственности более 20 лет'
            }
        }
    }
}

</script>

<style lang="scss" scoped>

.advantages__section {
    width: 100%;
    height: 100%;
    padding: 50px 0;

    .row {
        justify-content: space-between;
    }

    .advantages-img {
        max-width: 390px;
        width: 100%;
        display: block;
        pointer-events: none;
    }

    .advantages__descr {
        max-width: 800px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 15px;

        &-title {
            font-size: 38px;
            font-weight: 400;
        }

        &-txt {
            color: var(--main-gray);
            font-size: 15px;
        }
    }
}

</style>