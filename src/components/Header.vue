<template>
  <header class="header">
    <div class="container">
      <div class="left-side">
        <router-link to="/" class="logo">
          <img src="@/assets/img/logo.svg" alt="logo">
          <p>Space-site</p>
        </router-link>
        <Languages v-if="desktopVersion"/>
      </div>
      <Navigations v-if="desktopVersion"/>
      <div class="right-side">
        <button class="change-color" :class="{'dark-theme': $store.getters.darkTheme}" @click="$store.commit('changeDarkTheme')"></button>
        <button class="video" v-if="desktopVersion" @click="showVideoPopup"></button>
        <a class="call" v-if="!desktopVersion"></a>
        <button class="hire-us" @click="showHireUsPopup" v-if="desktopVersion">Нанять нас</button>
        <button class="burger" @click="showMobileMenu = true" v-if="!desktopVersion"></button>
        <MobileBurger :class="{show: showMobileMenu}" @hide="showMobileMenu = false"/>
      </div>
    </div>
  </header>
</template>

<script>
import Languages from "@/components/global/Languages";
import Navigations from "@/components/global/Navigations";
import MobileBurger from "@/components/global/MobileBurger";
export default {
  name: "Header",
  components: {MobileBurger, Navigations, Languages},
  mounted() {
    this.$store.watch(
        (state) => state.CHANGE_COLOR_FLAG,
        (newValue) => {
          if (newValue){
            document.querySelector('.header').classList.toggle('dark-theme')
          }
        }
    )
  },
  data(){
    return {
      showMobileMenu: false
    }
  },
  methods: {
    showVideoPopup(){
      this.$store.commit('openPopup')
      this.$store.commit('setCurrentPopup', 'VideoPopup')
    },
    showHireUsPopup(){
      this.$store.commit('openPopup')
      this.$store.commit('setCurrentPopup', 'HireUsPopup')
    }
  },
  computed: {
    desktopVersion(){
      return screen.width > 1023
    }
  }
}
</script>

<style lang="sass">
.header
  background: $body-background
  height: 100px
  position: fixed
  top: 0
  left: 0
  right: 0
  margin: auto
  width: 100vw
  box-sizing: border-box
  z-index: 2
  @media (max-width: 767px)
    height: 70px
  &.dark-theme
    background: $white
  .container
    display: flex
    justify-content: space-between
    align-items: center
    padding-top: 32px
    padding-bottom: 15px
    @media (max-width: 767px)
      padding-top: 15px
  .left-side
    display: flex
    align-items: center
  .right-side
    display: flex
    align-items: center
  .logo
    display: flex
    align-items: center
    text-decoration: none
    margin-right: 60px
    color: inherit
    @media (max-width: 1366px)
      margin-right: 20px
    p
      margin: 0
      padding-left: 14px
      font-weight: 500
      font-size: 27px
      line-height: 35px
      @media (max-width: 1366px)
        font-size: 18px
      @media (max-width: 1023px)
        display: none
    img
      width: 61px
      height: 34px
  .change-color
    width: 50px
    height: 50px
    border-radius: 50%
    background: $white
    margin-right: 17px
    cursor: pointer
    border: none
    outline: none
    @media (max-width: 1366px)
      width: 40px
      height: 40px
    &.dark-theme
      background: #000
  .video
    width: 50px
    height: 50px
    border: 1px solid $white
    border-radius: 50%
    cursor: pointer
    background: url("~@/assets/img/svg/play.svg") center center / 10px 12px no-repeat
    margin-right: 17px
    outline: none
    @media (max-width: 1366px)
      background-position: 12px center
      width: 40px
      height: 40px
  .call
    width: 40px
    height: 40px
    background: url("~@/assets/img/svg/call.svg") center center / 18px 18px no-repeat $button-color
    border-radius: 50%
    margin-right: 18px
    cursor: pointer
  .hire-us
    padding: 14px
    border-radius: 42px
    border: 1px solid $white
    display: flex
    align-items: center
    justify-content: center
    font-weight: 500
    font-size: 18px
    line-height: 23px
    color: $white
    background: transparent
    cursor: pointer
    outline: none
    min-width: 170px
    @media (max-width: 1366px)
      padding: 12px
      min-width: 120px
  .burger
    display: flex
    width: 30px
    height: 10px
    background: url("~@/assets/img/svg/burger.svg") center center / 100% 100% no-repeat
    cursor: pointer
    border: none
    outline: none
</style>