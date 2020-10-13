<template>
  <a class="work-link" ref="work-link" :href="$props.link" @mouseenter="enterMethod" @mouseleave="leaveMethod">
    <h2 class="name">{{$props.payload.name}}</h2>
    <p class="date custom-grey-text">{{$props.payload.date}}</p>
    <transition name="float-image" @after-leave="newAnimation">
      <FloatImage v-if="showFloatImage && startAnimation" :desc="$props.payload.imageDesc"
                  :image="$props.payload.image"
      />
    </transition>
  </a>
</template>

<script>
import FloatImage from "@/components/global/FloatImage";
export default {
  name: "SmallWorkLink",
  components: {FloatImage},
  props: ['payload'],
  data(){
    return {
      showFloatImage: false,
      startAnimation: true
    }
  },
  methods: {
    newAnimation(){
      if (this.startAnimation) {
        this.startAnimation = false;
        setTimeout(() => {
          this.startAnimation = true;
        }, 600)
      }
    },
    enterMethod(){
      this.showFloatImage = true;
      this.$emit('mouseenter');
      this.$refs['work-link'].classList.add('active')
    },
    leaveMethod(){
      this.showFloatImage = false;
      this.$emit('mouseleave');
      this.$refs['work-link'].classList.remove('active')
    }
  },
  computed: {
  }
}
</script>

<style lang="sass">
  .float-image-enter-active, .float-image-leave-active
    transition: opacity .5s
  .float-image-enter, .float-image-leave-to
    opacity: 0
  .float-image-enter-active, .float-image-leave-active
    img
      transition: all .5s
  .float-image-enter
    img
      transform: translateX(-100%)
  .float-image-enter-to
    img
      transform: translateX(0)
  .float-image-leave
    img
      transform: translateX(0)
  .float-image-leave-to
    img
      transform: translateX(100%)
  .work-link
    display: flex
    justify-content: flex-start
    padding: 26px 0
    border-top: 2px solid $white
    text-decoration: none
    color: $white
    position: relative
    &:last-child
      border-bottom: 2px solid $white
    .name
      margin: 0
      font-weight: 300
      font-size: 72px
      line-height: 94px
      transition: all .5s
      position: relative
      @media (max-width: 767px)
        font-size: 41px
        line-height: 53px
      &:after
        content: ''
        position: absolute
        bottom: 0
        right: 0
        width: 0
        height: 2px
        transition: all .5s
        background-color: $white
        transform: translateY(-100%)
    .date
      margin: 14px 0 0 0
      transition: all .5s
</style>