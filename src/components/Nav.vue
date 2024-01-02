<template>
  <nav class="nav">
    <div class="container">
        <div class="row">
            <router-link to="/" class="logo-link">
                <img src="@/assets/img/logo.svg" alt="" class="logo-img">
            </router-link>

            <div class="nav__collapse" :class="{'showen': mbNavShowen}">
                <span class="gray-span"></span>

                <div class="nav__collapse-content">
                    <div class="nav__contacts">
                        <a href="tel:+998998173066" class="nav__contacts-num all-txt">+998 (99) 817-30-66</a>
                        <span class="get-consult all-txt">{{ getConsult }}</span>
                    </div>

                    <ul class="nav__list">
                        <li class="nav__list-item" v-for="(link, idx) in navLinks" :key="idx">
                            <router-link :to="`/${link.url}`" class="nav__list-link">{{ link.name }}</router-link>
                        </li>
                    </ul>
                </div>

                <button class="close-btn" @click="mbNavShowen = false"><i class="fal fa-times"></i></button>
            </div>

            <button class="open-btn" @click="mbNavShowen = true"><i class="fal fa-bars"></i></button>
        </div>
    </div>
  </nav>
</template>

<script>

export default {
    name: 'Navigation',
    data() {
        return {
            navLinks: [
                {
                    name: 'услуги',
                    url: 'services'
                },
                {
                    name: 'кейсы',
                    url: 'cases'
                },
                {
                    name: 'fAQ',
                    url: 'faq'
                }
            ],
            getConsult: 'Получить консультацию',
            mbNavShowen: false
        }
    }
}

</script>

<style lang="scss" scoped>

.nav {
    width: 100%;
    padding: 20px 0;
    background: #1B1B1B;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
    position: sticky;
    top: 0;
    left: 0;
    z-index: 2024;

    .row {
        justify-content: space-between;
        align-items: center;
        flex-wrap: unset;
        gap: 30px;
    }

    .logo-link {
        max-width: 130px;
        width: 100%;

        .logo-img {
            width: 100%;
            display: block;
            pointer-events: none;
        }
    }

    .nav__contacts {
        max-width: max-content;
        width: 100%;
        display: flex;
        gap: 20px;
        align-items: center;

        &-num {
            color: var(--primary-color);
            transition: .4s;

            &:hover {
                color: var(--main-red);
            }
        }

        .get-consult {
            color: var(--main-red);
            background: transparent;
            border: 0;
        }
    }

    &__list {
        max-width: 210px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &-link {
            font-size: 15px;
            font-weight: 500;
            text-transform: capitalize;
            transition: .4s;

            &:hover {
                color: var(--main-red);
            }

            &.router-link-exact-active {
                color: var(--main-red);
            }
        }
    }

    &__collapse {
        max-width: 805px;
        width: 100%;
        z-index: 3023;

        &-content {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    .close-btn, .open-btn {
        display: none;
    }
}

@media (max-width: 992px) {
    .nav {
        &__collapse {
            max-width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background: #1B1B1B;
            height: 100vh;
            display: flex;
            justify-content: space-between;
            gap: 30px;
            transform: translateX(120%);
            opacity: 0;
            transition: .4s;

            &.showen {
                transform: translateX(0%);
                opacity: 1;
            }

            &-content {
                max-width: 350px;
                width: 100%;
                height: max-content;
                flex-direction: row-reverse;
                justify-content: space-between;
                margin-top: 70px;
            }

            .gray-span {
                width: 15%;
                height: 100vh;
                background: #5C5C5C;
            }
        }

        &__contacts {
            flex-direction: column-reverse;
            justify-content: flex-start;
            align-items: flex-start !important;
        }

        &__list {
            max-width: max-content !important;
            flex-direction: column;
            gap: 20px;
            align-items: flex-start;
            order: 1 !important;

            &-link {
                font-size: calc(22px + (10 + 10 * 0.7) * ((100vw - 320px)/ 1920)) !important;
            }
        }
    }

    .close-btn, .open-btn {
        display: block !important;
        height: max-content;
        margin: 12px 20px 0 0;
        min-width: 45px;
        min-height: 45px;
        background: transparent;
        font-size: 25px;
        border: 0;
        border-radius: 8px;
        overflow: hidden;
        background: rgba($color: #fff, $alpha: .1);
    }

    .open-btn {
        margin: 0 !important;
    }
}

@media (max-width: 500px) {
    .nav {
        &__collapse-content {
            flex-direction: column-reverse;
            align-items: flex-start;
            row-gap: 55px;
            text-align: start;
        }
    }
}

</style>