<template>
  <header class="cases-header dark-bg">
    <div class="container">
      <div class="row">
        <div class="header__descr">
          <span class="header__descr-subtitle">ваш ip партнер</span>

          <h3 class="header__descr-title all-title">{{ descr.title }}</h3>

          <p class="header__descr-txt all-txt">{{ descr.txt }}</p>
        </div>


        <img :src="caseImg" alt="" class="cases-header-img">
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Cases Header',
  data() {
    return {
      descr: {
        title: 'Регистрация товарного знака для компании CIRKLE',
        txt: 'Был зарегистрирован товарный знак в отношении косметических товаров.'
      },
      caseImg: 'https://firebasestorage.googleapis.com/v0/b/iphub-ef5c9.appspot.com/o/HomePage%2FCaseSection%2Fcirckle.svg?alt=media&token=cf579f20-e89a-4729-9d41-2aaf2fc19ee3'
    }
  }
}

</script>

<style lang="scss" scoped>

.cases-header {
  width: 100%;
  padding: 115px 0 50px;

  .row {
    border-radius: 10px;
    border: 1px solid #DA4533;
    background: rgba(255, 255, 255, 0.05);
    overflow: hidden;
    padding: 40px;
    justify-content: space-between;
  }

  .header__descr {
    max-width: 760px;
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 15px;

    &-subtitle {
      color: var(--main-gray);
      text-transform: uppercase;
    }
  }

  &-img {
    max-width: 200px;
    width: 100%;
    margin-right: 40px;
  }
}

</style>