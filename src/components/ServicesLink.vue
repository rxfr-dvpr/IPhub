<template>
    <router-link to="/services" class="service-link">{{ serviceLink }}</router-link>
</template>

<script>

export default {
    name: 'Services Link Component',
    data() {
        return {
            serviceLink: 'все услуги'
        }
    }
}

</script>

<style lang="scss" scoped>

.service-link {
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

</style>