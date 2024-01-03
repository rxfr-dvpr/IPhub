<template>
  <header class="faq-header dark-bg">
    <div class="container">
        <div class="row">
            <h3 class="header-title all-title">{{ title }}</h3>

            <img :src="headerImg" alt="" class="header-img">
        </div>
    </div>
  </header>
</template>

<script>

export default {
    name: 'Header',
    data() {
        return {
            title: 'FAQ',
            headerImg: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/FAQPage%2Ffaq-header-img.png?alt=media&token=0c4f3f26-9f29-4eae-969b-a9708de71f71'
        }
    }
}

</script>

<style lang="scss" scoped>

.faq-header {
    width: 100%;
    padding: 15px 0 50px;

    .row {
        justify-content: space-between;
        align-items: center;
    }

    .header-img {
        max-width: 200px;
        width: 100%;
    }
}

@media (max-width: 480px) {
    .faq-header {
        padding: 35px 0;
    }

    .header-img {
        display: none !important;
    }
}

</style>