<template>
  <div class="top-banner container">
    <div class="banner">
      <div class="title">Создание cайтов от Google партнеров</div>
      <swiper class="swiper-container" :options="swiperOptions">
        <swiper-slide v-for="(image,i) in images" :key="i"><img :src="require(`@/assets/img/${image}`)" alt="123"></swiper-slide>
      </swiper>
    </div>
    <div class="info-block">
      <CurrentTime/>
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
  }
}
</script>

<style scoped lang="sass">
.top-banner
  margin-bottom: 165px
.banner
  display: flex
  position: relative
  margin-bottom: 92px
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
    display: flex
    align-items: center
    user-select: none
    pointer-events: none
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
.info-block
  display: flex
  height: 105px
  padding-bottom: 50px
  border-bottom: 1px solid #4A4848
  align-items: flex-end
  .time

</style>