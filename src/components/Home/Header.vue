<template>
  <header class="header dark-bg">
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

                <div class="header__buttons">
                    <button class="consult-btn">{{ consultBtn }}</button>

                    <router-link to="/services" class="service-link">{{ serviceLink }}</router-link>
                </div>
            </div>

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
            headerImg: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2Fheader-img.png?alt=media&token=df6e8d65-6f7d-4a54-9ed2-1bd5636ed4b2',
            headerTxt: 'индивидуальные правовые решения для защиты и охраны ваших нематериальных активов в России и за рубежом',
            consultBtn: 'Получить индивидуальную консультацию',
            serviceLink: 'все услуги'
        }
    }
}

</script>

<style lang="scss" scoped>

.header {
    width: 100%;
    padding: 30px 0;

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

        .header__buttons {
            width: 100%;
            display: flex;
            gap: 40px;
            align-items: center;
            margin-top: 30px;

            .consult-btn {
                max-width: 300px;
                width: 100%;
                background: var(--main-red);
                font-size: 15px;
                padding: 25px 20px;
                border-radius: 100%;
                border: solid 1px var(--main-red);
                transition: .4s;
                position: relative;

                &::after {
                    content: '';
                    width: 100%;
                    height: 100%;
                    display: block;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: transparent;
                    border-radius: 100%;
                    border: solid 1px var(--primary-color);
                    opacity: 0;
                    transition: .4s;
                    transform: scale(0);
                }

                &:hover::after {
                    transform: scale(1) translate(-5px, -2px) rotate(-7deg);
                    opacity: 1;
                }
            }

            .service-link {
                font-size: 15px;
                font-weight: 500;
                color: var(--main-red);
                border: solid 2px var(--main-red);
                border-radius: 200%;
                padding: 10px 22px 11px;
                position: relative;

                &::first-letter {
                    text-transform: uppercase;
                }

                &::after {
                    content: '⟶';
                    position: absolute;
                    top: 0;
                    right: 0;
                    font-size: 30px;
                    opacity: 0;
                    transition: .4s;
                    transform: translateX(10px);
                }

                &:hover::after {
                    transform: translateX(18px);
                    opacity: 1;
                }
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