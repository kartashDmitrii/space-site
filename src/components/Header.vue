<template>
  <header class="header">
    <div class="container">
      <div class="left-side">
        <router-link to="/" class="logo">
          <img src="@/assets/img/logo.svg" alt="logo">
          <p>Space-site</p>
        </router-link>
        <Languages/>
      </div>
      <Navigations/>
      <div class="right-side">
        <button class="change-color" :class="{'dark-theme': $store.getters.darkTheme}" @click="$store.commit('changeDarkTheme')"></button>
        <button class="video" @click="showVideoPopup"></button>
        <button class="hire-us" @click="showHireUsPopup">Нанять нас</button>
      </div>
    </div>
  </header>
</template>

<script>
import Languages from "@/components/global/Languages";
import Navigations from "@/components/global/Navigations";
export default {
  name: "Header",
  components: {Navigations, Languages},
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
  &.dark-theme
    background: $white
  .container
    display: flex
    justify-content: space-between
    align-items: center
    padding-top: 32px
    padding-bottom: 15px
  .left-side
    display: flex
    align-items: center
  .right-side
    display: flex
  .logo
    display: flex
    align-items: center
    text-decoration: none
    margin-right: 60px
    color: inherit
    p
      margin: 0
      padding-left: 14px
      font-weight: 500
      font-size: 27px
      line-height: 35px
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
</style>