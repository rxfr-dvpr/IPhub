<template>
  <section class="team__section light-bg">
    <div class="container">
        <div class="row">
            <div class="team__descr">
                <h3 class="team__descr-title all-title">{{ descr.title }}</h3>
                <p class="team__descr-txt all-txt">{{ descr.txt }}</p>
            </div>
        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'Team Section',
    data() {
        return {
            descr: {
                title: 'команда экспертов',
                txt: 'наша команда — эксперты в сфере IP. Мы берёмся за работу и доводим дело до конца, потому что понимаем ценности вашего бизнеса'
            }
        }
    }
}

</script>

<style lang="scss" scoped>

.team__section {
    width: 100%;
    padding: 160px 0;

    .row {
        flex-direction: column;
        row-gap: 50px;
    }

    .team__descr {
        max-width: 705px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 15px;

        &-title {
            color: var(--main-black);
        }
    }
}

</style>