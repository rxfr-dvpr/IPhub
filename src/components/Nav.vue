<template>
  <nav class="nav">
    <div class="container">
        <div class="row">
            <router-link to="/" class="logo-link">
                <img src="@/assets/img/logo.svg" alt="" class="logo-img">
            </router-link>

            <ul class="nav__list">
                <li class="nav__list-item" v-for="(link, idx) in navLinks" :key="idx">
                    <a :href="link.url" class="nav__list-link">{{ link.name }}</a>
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
                    url: '#services'
                },
                {
                    name: 'кейсы',
                    url: '#cases'
                },
                {
                    name: 'fAQ',
                    url: '#faq'
                }
            ]
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
        }
    }
}

</style>