<template>
  <div class="top-banner container">
    <div class="banner">
      <div class="title">Создание cайтов от Google партнеров</div>
      <swiper v-if="desktopVersion" class="swiper-container" :options="swiperOptions">
        <swiper-slide v-for="(image,i) in images" :key="i"><img :src="require(`@/assets/img/${image}`)" alt="123"></swiper-slide>
      </swiper>
      <button class="hire-us" @click="showHireUsPopup" v-if="!desktopVersion">Нанять нас</button>
    </div>
    <div class="info-block">
      <CurrentTime/>
      <div class="social">
        <a href="#" class="link"><img src="@/assets/img/svg/dark-instagram.svg" alt=""></a>
        <a href="#" class="link"><img src="@/assets/img/svg/dark-facebook.svg" alt=""></a>
        <a href="#" class="link"><img src="@/assets/img/svg/dark-youtube.svg" alt=""></a>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import CurrentTime from "@/components/global/CurrentTime";
export default {
  name: "TopBanner",
  components:{
    CurrentTime,
    Swiper,SwiperSlide
  },
  data(){
    return {
      images: ['top-banner.png','top-banner.png','top-banner.png','top-banner.png'],
      swiperOptions: {
        slidesPerView: 1,
        direction: 'vertical',
        grabCursor: true
      }
    }
  },
  computed: {
    desktopVersion(){
      return screen.width > 1023
    }
  },
  methods: {
    showHireUsPopup(){
      this.$store.commit('openPopup')
      this.$store.commit('setCurrentPopup', 'HireUsPopup')
    }
  }
}
</script>

<style scoped lang="sass">
.top-banner
  margin-bottom: 165px
  @media (max-width: 767px)
    margin-bottom: 100px
.banner
  display: flex
  position: relative
  margin-bottom: 92px
  @media (max-width: 1023px)
    flex-direction: column
    align-items: flex-start
    margin-bottom: 100px
  .title
    font-weight: 300
    font-size: 96px
    line-height: 125px
    margin: auto
    position: absolute
    z-index: 1
    top: 0
    left: 0
    bottom: 0
    width: 1070px
    max-width: 100%
    display: flex
    align-items: center
    user-select: none
    pointer-events: none
    @media (max-width: 1023px)
      position: static
      font-size: 61px
      line-height: 110%
      margin-bottom: 60px
  .swiper-container
    width: 760px
    height: 430px
    display: flex
    margin-right: 60px
    position: relative
    z-index: 0
    .swiper-wrapper
      height: 100%
      box-sizing: border-box
    .swiper-slide
      display: flex
      justify-content: center
      align-items: center
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
     width: 170px
.info-block
  display: flex
  height: 105px
  padding-bottom: 50px
  border-bottom: 1px solid $border-color
  align-items: flex-end
  @media (max-width: 1023px)
    height: auto
    justify-content: space-between
  .social
    display: flex
    a
      width: 25px
      height: 25px
      margin-right: 10px
      &:last-child
        margin-right: 0
      img
        width: 100%
        height: auto
</style>