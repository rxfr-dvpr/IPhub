<template>
    <button class="consult-btn">{{ consultBtn }}</button>
</template>

<script>

export default {
    name: 'Consult Btn',
    data() {
        return {
            consultBtn: 'Получить индивидуальную консультацию',
        }
    }
}

</script>

<style lang="scss" scoped>

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

</style>