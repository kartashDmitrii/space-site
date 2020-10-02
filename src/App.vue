<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Popup v-if="$store.getters.popupStatus"/>
    <Background/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Popup from "@/components/global/Popup";
import Background from "@/components/global/Background";
export default {
  components: {Background, Popup, Header},
  mounted() {
    this.$store.watch(
        (state) => state.CHANGE_COLOR_FLAG,
        (newValue) => {
          if (newValue){
            document.body.classList.toggle('dark-theme')
          }
        }
    )
  }
}
</script>

<style lang="sass">

body
  font-family: IBMPlexSans
  color: $white
  position: relative
  min-height: 100vh
  padding-top: calc(100px + 145px)
  box-sizing: border-box
  background: $body-background
  &.dark-theme
    background: #ffffff
  .background-circle
    transition: opacity 1.5s
    position: fixed
    top: 0
    right: 0
    z-index: 3
</style>
