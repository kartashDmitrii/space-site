<template>
  <footer>
    <div class="top-block">
      <div class="container">
        <router-link to="/" class="logo">
          <img src="@/assets/img/logo.svg" alt="logo">
          <p v-if="desktopVersion">Space-site</p>
        </router-link>
        <div class="up-btn"></div>
      </div>
    </div>
    <div class="info container">
      <div class="address">
        <div class="content">
          <h4 class="title custom-grey-text">Ждем в гости</h4>
          <p>Street L. Rudenko, 6а. г. Kyiv, Ukraine 02140</p>
        </div>
        <div class="social" v-if="desktopVersion">
          <a href=""><img src="@/assets/img/svg/dark-facebook.svg" alt="fb"></a>
          <a href=""><img src="@/assets/img/svg/dark-twitter.svg" alt="tw"></a>
        </div>
      </div>
      <div class="contacts">
        <h4 class="title custom-grey-text">Контакты</h4>
        <p class="phone">+38 (097) 355 11 77</p>
        <p class="email">info@space-site.com.ua</p>
        <div class="social" v-if="desktopVersion">
          <a href=""><img src="@/assets/img/svg/dark-white-telegram.svg" alt="tg"></a>
          <a href=""><img src="@/assets/img/svg/dark-white-viber.svg" alt="vb"></a>
        </div>
      </div>
      <div class="mobile-social" v-if="!desktopVersion">
        <a href=""><img src="@/assets/img/svg/telegram.svg" alt="tg"></a>
        <a href=""><img src="@/assets/img/svg/viber.svg" alt="vb"></a>
        <a href=""><img src="@/assets/img/svg/messenger.svg" alt="tg"></a>
        <a href=""><img src="@/assets/img/svg/phone.svg" alt="vb"></a>
      </div>
      <div class="menu">
        <div class="links" v-if="desktopVersion">
          <Navigations/>
          <Languages/>
        </div>
        <div class="partners">
          <a href=""><img src="@/assets/img/google-partner.webp" alt="tg"></a>
          <a href=""><img src="@/assets/img/facebook-partner.svg" alt="vb"></a>
        </div>
      </div>
    </div>
    <div class="bottom-block">
      <div class="container">
        <p class="copyright">©2020 Space-Site</p>
        <ul class="links">
          <li><a href="">Terms & Conditions</a></li>
          <li><a href="">Privacy Policy</a></li>
          <li><a href="">Sitemap</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import Navigations from "@/components/global/Navigations";
import Languages from "@/components/global/Languages";
export default {
name: "Foote",
  components: {Languages, Navigations},
  computed: {
    desktopVersion(){
      return screen.width > 1023
    }
  },
}
</script>

<style scoped lang="sass">
footer
  position: relative
  z-index: 1
  .top-block
    padding: 30px 0
    border: solid $border-color
    border-width: 1px 0 1px 0
    .container
      display: flex
      justify-content: space-between
      align-items: center
      .logo
        display: flex
        align-items: center
        text-decoration: none
        img
          margin-right: 55px
        p
          margin: 0
          font-weight: 300
          font-size: 18px
          line-height: 23px
          color: #CACACA
      .up-btn
        position: relative
        cursor: pointer
        padding: 30px
        border-radius: 50%
        background: $body-background
        &:after
          content: ''
          position: absolute
          top: 8px
          right: 0
          bottom: 0
          left: 0
          margin: auto
          width: 16px
          height: 16px
          border: solid $white
          border-width: 1px 1px 0 0
          transform: rotate(-45deg)
  .info
    display: flex
    padding-top: 36px
    padding-bottom: 22px
    min-height: 300px
    box-sizing: border-box
    @media (max-width: 767px)
      flex-direction: column
    .address
      display: flex
      flex-direction: column
      max-width: 215px
      margin-right: 30px
      @media (max-width: 767px)
        max-width: none
        margin-bottom: 35px
      .content
        flex: 1
        display: flex
        flex-direction: column
        .title
          margin-bottom: 21px
        p
          font-weight: 300
          font-size: 18px
          line-height: 23px
          color: $white
          margin: 0
      .social
        display: flex
        a
          width: 25px
          height: 25px
          margin-right: 16px
          &:last-child
            margin-right: 0
          img
            width: 100%
            height: auto
    .contacts
      display: flex
      flex-direction: column
      @media (max-width: 767px)
        margin-bottom: 20px
      .title
        margin-bottom: 21px
      .phone,.email
        font-weight: 300
        font-size: 18px
        line-height: 23px
        color: $white
        margin: 0 0 13px
      .social
        display: flex
        a
          width: 22px
          height: 22px
          margin-right: 13px
          &:last-child
            margin-right: 0
          img
            width: 100%
            height: auto
    .mobile-social
      display: flex
      margin-bottom: 50px
      a
        width: 40px
        height: 40px
        margin-right: 15px
        &:last-child
          margin-right: 0
        img
          width: 100%
          height: auto
    .menu
      flex: 1
      display: flex
      flex-direction: column
      align-items: flex-end
      .links
        display: flex
        align-items: flex-start
        flex: 1
        .navigation
          margin-right: 45px
      .partners
        display: flex
        @media (max-width: 576px)
          width: 100%
          border-top: 1px solid $border-color
          padding: 24px 0
          justify-content: center
        a
          margin-right: 18px
          &:last-child
            margin-right: 0
  .bottom-block
    padding: 25px 0 20px
    border-top: 1px solid $border-color
    .container
      display: flex
      justify-content: space-between
      .copyright
        font-size: 14px
        line-height: 18px
        color: $grey-text
        margin: 0
      .links
        padding: 0
        margin: 0
        display: flex
        align-items: center
        list-style: none
        li
          display: flex
          margin-right: 18px
          &:last-child
            margin-right: 0
          a
            text-decoration: none
            color: inherit
</style>