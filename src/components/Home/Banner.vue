<template>
  <section class="banner__section">
    <div class="container">
        <div class="row">
            <div class="banner__descr">
                <h3 class="banner__descr-title all-title">{{ descr.title }}</h3>
                <p class="banner__descr-txt all-txt">{{ descr.txt }}</p>
            </div>

            <img :src="bannerImg" alt="" class="banner-img">
        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'Banner Section',
    data() {
        return {
            descr: {
                title: 'оставьте заявку на консультацию и мы вам поможем!',
                txt: 'у нас есть решения для всех ваших потребностей в сфере защиты и регистрации интеллектуальной собственности'
            },
            bannerImg: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2FBannerSection%2Fbanner-img.png?alt=media&token=4ee4ce36-a51b-407c-b3d4-941e5e94daeb'
        }
    }
}

</script>

<style lang="scss" scoped>

.banner__section {
    width: 100%;
    background: var(--main-red);
    padding: 20px 0 60px;

    .row {
        justify-content: space-between;
        align-items: center;
    }

    .banner__descr {
        max-width: 600px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 15px;

        &-txt {
            color: var(--primary-color);
            opacity: .75;
        }
    }
}

</style>