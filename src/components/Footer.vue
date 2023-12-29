<template>
  <footer class="footer dark-bg">
    <div class="container">
      <div class="row">

        <div class="footer__top">
          <div class="footer-brand">
            <router-link to="/" class="footer-logo">
              <img src="@/assets/img/logo.svg" alt="" class="footer-logo-img">
            </router-link>

            <p class="footer-brand-txt all-txt">{{ footerTop.brandTxt }}</p>
          </div>

          <a href="https://maps.app.goo.gl/Qd9DyzJxE2nq9b4B9" target="_blank" class="footer-location all-txt">{{ footerTop.info.location }}</a>
        </div>

        <span class="gray-line"></span>

        <div class="footer__middle">
          <ul class="footer__list">
            <p class="footer__list-title">{{ footerMiddle.footerMap.title }}</p>

            <li class="footer__list-item" v-for="(link, idx) in footerMiddle.footerMap.list" :key="idx">
              <router-link :to="link.url" class="footer__list-link">{{ link.name }}</router-link>
            </li>
          </ul>

          <ul class="footer__list" v-for="(list, idd) in footerMiddle.footerList" :key="idd">
            <p class="footer__list-title">{{ list.title }}</p>

            <li class="footer__list-item" v-for="(link, id) in list.list" :key="id">
              <a :href="link.url" target="_blank" class="footer__list-link">{{ link.name }}</a>
            </li>
          </ul>
        </div>

        <div class="footer__bottom">
          <p class="footer__bottom-copyright all-txt">
            {{ `© ${new Date().getFullYear()} ${footerBottom.copyright}` }}
          </p>

          <p class="footer__bottom-oferta all-txt">
            {{ footerBottom.oferta }}
          </p>

          <p class="footer__bottom-agreement all-txt">
            {{ footerBottom.agreement }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'Footer',
  data() {
    return {
      footerTop: {
        brandTxt: 'Общество с ограниченной ответственностью «Центр интеллектуальной собственности и инноваций „АйПиХаб“»',
        info: {
          location: '174539, г. Ташкент, Юнусабадская наб., д. 8, стр. 1, эт. 3, п. 1, оф. 10'
        }
      },
      footerMiddle: {
        footerMap: {
          title: 'навигация по сайту:',
          list: [
            {
              name: 'Услуги',
              url: '/services'
            },
            {
              name: 'Кейсы',
              url: '/cases'
            },
            {
              name: 'FAQ',
              url: '/faq'
            }
          ]
        },
        footerList: [
          {
            title: 'наши контакты:',
            list: [
              {
                name: 'rxfr@iphub.com',
                url: 'mailto:saidaliyev.avazbek14@gmail.com'
              },
              {
                name: '+998(99) 817-30-66',
                url: 'tel:+998998173066'
              }
            ]
          },
          {
            title: 'мы в соцсетях:',
            list: [
              {
                name: 'Telegram',
                url: 'https://t.me/redfox4ever'
              },
              {
                name: 'Instagram',
                url: 'https://www.instagram.com/rxfr_dvpr/'
              }
            ]
          },
          {
            title: 'как добраться:',
            list: [
              {
                name: 'Схема проезда',
                url: 'https://maps.app.goo.gl/MjZUVZWq1aqt1mSFA'
              }
            ]
          },
        ]
      },
      footerBottom: {
        copyright: 'IPhub. Все права защищены.',
        oferta: 'Публичная оферта',
        agreement: 'Пользовательское соглашение'
      }
    }
  }
}

</script>

<style lang="scss" scoped>

.footer {
  width: 100%;
  padding: 100px 0 50px;

  .row {
    flex-direction: column;
    row-gap: 50px;
  }

  .footer__top {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 35px;

    .footer-brand {
      max-width: 720px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 15px;
    }
    
    .footer-location {
      max-width: 290px;
      width: 100%;
      text-align: end;
      color: var(--primary-color);
    }
    
  }

  .gray-line {
    width: 100%;
    height: 1px;
    display: block;
    background: linear-gradient(to right, #5C5C5C, #5C5C5C80, #5C5C5C00);
    opacity: .5;
  }

  .footer__middle {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 20px;
    row-gap: 30px;
    
    .footer__list {
      max-width: max-content;
      width: 100%;
      display: flex;
      flex-direction: column;
      row-gap: 20px;

      &-title {
        font-size: 18px;
        color: var(--main-gray);

        &::first-letter {
          text-transform: uppercase;
        }
      }

      &-link {
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

  .footer__bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-oferta, &-agreement {
      color: var(--primary-color);
    }
  }
}

</style>