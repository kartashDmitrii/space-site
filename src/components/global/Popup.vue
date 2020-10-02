<template>
  <div class="popup-wrapper" @click="closePopup">
    <component :is="$store.getters.currentPopup"></component>
  </div>
</template>

<script>
import VideoPopup from "@/components/popups/VideoPopup";
import HireUsPopup from "@/components/popups/HireUsPopup";
export default {
name: "Popup",
  components: {VideoPopup,HireUsPopup},
  methods: {
    closePopup(event){
      if (!event.target.closest('.popup')){
        this.$store.commit('closePopup')
      }
    }
  }
}
</script>

<style scoped lang="sass">
.popup-wrapper
  position: fixed
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  z-index: 10
  background: rgba(0,0,0,.5)
</style>