<template>
  <section class="agency container small-container">
    <div class="title-block">
      <h5 class="title custom-grey-text">Агенция</h5>
    </div>
    <div ref="our-works" class="our-works" @mouseenter="showFloatImage = true;" @mouseleave="showFloatImage = false">
      <SmallWorkLink
          v-for="(work, i) in works" :name="work.name"
          :date="work.date"
          :link="work.link"
          :key="i"
          @mouseenter="changeCurrentImage(work, i)"
      />
    </div>
    <CustomButton text="Смотреть все"/>
    <transition name="float-image">
      <FloatImage v-if="showFloatImage" :desc="works[currentElem].imageDesc"
                  :image="works[currentElem].image"
      />
    </transition>
  </section>
</template>

<script>
import SmallWorkLink from "@/components/blocks/our-works/SmallWorkLink";
import CustomButton from "@/components/global/CustomButton";
import FloatImage from "@/components/global/FloatImage";
export default {
  name: "OurWorks",
  components: {FloatImage, CustomButton, SmallWorkLink},
  data(){
    return {
      currentElem: 1,
      currentOffset: 0,
      showFloatImage: false,
      works: [
        {
          name: 'Zlata Ognevich',
          date: '2020',
          link: '#',
          image: 'top-banner.webp',
          imageDesc: `1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus cumque ipsa molestiae
                      neque, nulla odio reiciendis velit veritatis voluptates.`
        },
        {
          name: 'Laskarda',
          date: '2020',
          link: '#',
          image: 'video-2.webp',
          imageDesc: `2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus cumque ipsa molestiae
                      neque, nulla odio reiciendis velit veritatis voluptates.`
        },
        {
          name: 'EvaSad',
          date: '2020',
          link: '#',
          image: 'video-3.webp',
          imageDesc: `3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus cumque ipsa molestiae
                      neque, nulla odio reiciendis velit veritatis voluptates.`
        },
        {
          name: 'Novias',
          date: '2020',
          link: '#',
          image: 'video-1.webp',
          imageDesc: `4Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus cumque ipsa molestiae
                      neque, nulla odio reiciendis velit veritatis voluptates.`
        },
        {
          name: 'Converse',
          date: '2020',
          link: '#',
          image: 'top-banner.webp',
          imageDesc: `5Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus cumque ipsa molestiae
                      neque, nulla odio reiciendis velit veritatis voluptates.`
        },
      ]
    }
  },
  methods: {
    changeCurrentImage(elem,i){
      this.currentOffset = this.$refs['our-works'].querySelectorAll('.work-link')[i].offsetTop
      this.currentElem = i
    }
  },
  computed: {
  }
}
</script>

<style scoped lang="sass">
.float-image-enter-active, .float-image-leave-active
  transition: opacity .5s
.float-image-enter, .float-image-leave-to
  opacity: 0
.agency.container
  position: static
  margin-bottom: 150px
  @media (max-width: 767px)
    margin-bottom: 100px
.title-block
  display: flex
  align-items: flex-end
  margin-bottom: 80px
  .title
    margin: 0 55px 8px 0
.our-works
  display: flex
  flex-direction: column
  margin-bottom: 60px
</style>