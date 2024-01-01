<template>
  <section class="patent__section dark-bg">
    <div class="container">
        <div class="row">
            <h3 class="patent-title all-title">{{ titleTxt }}</h3>
        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'Patent Section',
    data() {
        return {
            titleTxt: 'зачем регистрировать патент'
        }
    }
}

</script>

<style lang="scss" scoped>

.patent__section {
    width: 100%;
    padding: 130px 0 160px;
}

</style>