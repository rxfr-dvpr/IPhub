<template>
  <header class="header">
    <div class="container">
        <div class="row">
            <div class="header__descr">
                <span class="header__descr-subtitle">ваш ip партнер</span>

                <h1 class="header__descr-title scnd-font">
                    <span class="red-quote">‘</span>
                    Интеллектуальная <span class="itlc-wrd">собственность</span>
                    <span class="red-quote">’</span>
                </h1>

                <p class="header__descr-txt">{{ headerTxt }}</p>
            </div>

            <img src="@/assets/img/header/header-img.png" alt="" class="header-img">
        </div>
    </div>
  </header>
</template>

<script>

export default {
    name: 'Header',
    data() {
        return {
            headerTxt: 'индивидуальные правовые решения для защиты и охраны ваших нематериальных активов в России и за рубежом'
        }
    }
}

</script>

<style lang="scss" scoped>

.header {
    width: 100%;
    padding: 30px 0;
    background: rgba($color: #0000, $alpha: .9);

    .row {
        justify-content: space-between;
        align-items: center;
    }

    .header__descr {
        max-width: 600px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 8px;

        &-subtitle {
            font-size: 15px;
            color: var(--main-gray);
            text-transform: uppercase;
        }

        &-title {
            font-size: 55px;
            font-weight: 500;
            
            .red-quote {
                color: var(--main-red);
            }

            .itlc-wrd {
                font-family: var(--scnd-font);
                font-style: italic;
            }
        }

        &-txt {
            font-size: 18px;
            color: var(--main-gray);

            &::first-letter {
                text-transform: uppercase;
            }
        }
    }

    .header-img {
        max-width: 545px;
        width: 100%;
        display: block;
        pointer-events: none;
    }
}

</style>