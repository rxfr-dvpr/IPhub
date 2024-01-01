<template>
  <nav class="nav">
    <div class="container">
        <div class="row">
            <router-link to="/" class="logo-link">
                <img src="@/assets/img/logo.svg" alt="" class="logo-img">
            </router-link>

            <div class="nav__contacts">
                <a href="tel:+998998173066" class="nav__contacts-num all-txt">+998 (99) 817-30-66</a>
                <button class="get-consult all-txt">{{ getConsult }}</button>
            </div>

            <ul class="nav__list">
                <li class="nav__list-item" v-for="(link, idx) in navLinks" :key="idx">
                    <router-link :to="`/${link.url}`" class="nav__list-link">{{ link.name }}</router-link>
                </li>
            </ul>
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
            getConsult: 'Получить консультацию'
        }
    }
}

</script>

<style lang="scss" scoped>

.nav {
    width: 100%;
    padding: 20px 0;
    background: #1B1B1B;
    position: sticky;
    top: 0;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
    z-index: 2024;

    .row {
        justify-content: space-between;
        align-items: center;
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
}

</style>