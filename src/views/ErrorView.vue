<template>
  <section class="error__section">
    <div class="container">
        <div class="row">
            <img :src="errorImg" alt="" class="error-img">

            <p class="error-txt">
                {{ errortxt }}
                <span class="more-txt">Вернитесь на главную</span>
            </p>

            <router-link to="/" class="return-link">{{ returnLink }}</router-link>
        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'Error Page',
    data() {
        return {
            errorImg: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/404Page%2F404-img.png?alt=media&token=2fe5a90c-eeb1-4a35-9d52-7577b9b744d6',
            errortxt: 'К сожалению, страница не найдена.',
            returnLink: 'На главную'
        }
    }
}

</script>

<style lang="scss" scoped>

.error__section {
    width: 100%;
    padding: 40px 0 130px;
    background: rgba($color: #000000, $alpha: .93);

    .row {
        flex-direction: column;
        align-items: center;
        text-align: center;

        .error {
            &-img {
                max-width: 790px;
                width: 100%;
                display: block;
            }

            &-txt {
                max-width: 645px;
                width: 100%;
                font-size: 22px;
                display: flex;
                flex-direction: column;
                align-items: center;
                row-gap: 5px;
                margin-bottom: 30px;
            }
        }

        .return-link {
            max-width: max-content;
            width: 100%;
            font-size: 15px;
            color: var(--main-red);
            font-weight: 500;
            border: solid 2px var(--main-red);
            border-radius: 200%;
            padding: 10px 22px 11px;
            position: relative;
            display: block;

            &::first-letter {
                text-transform: uppercase;
            }

            &::after {
                content: '←';
                position: absolute;
                top: -1.5px;
                left: 0;
                font-size: 30px;
                opacity: 0;
                transition: .4s;
                transform: translateX(-10px);
            }

            &:hover::after {
                transform: translateX(-18px);
                opacity: 1;
            }
        }
    }
}

</style>