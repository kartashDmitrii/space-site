<template>
    <div ref="float-image" class="float-image">
      <div class="image">
        <img :src="require(`@/assets/img/${$props.image}`)" alt="123">
      </div>
      <p>{{ $props.desc }}</p>
    </div>
</template>

<script>
export default {
  props: ['desc', 'image'],
  name: "FloatImage",
  created() {
    window.addEventListener('mousemove', this.moveImage)
  },
  destroyed() {
    window.removeEventListener('mousemove', this.moveImage)
  },
  data(){
    return {
    }
  },
  methods: {
    moveImage(event){
      let image = this.$refs['float-image'].querySelector('.image');
      let maxXStep = 100;
      let maxYStep = 50;
      let currX = Math.abs(event.screenX);
      let currY = event.screenY;
      let x = Math.round((currX / Math.abs(screen.width)) * maxXStep)
      let y = Math.round((currY / screen.height) * maxYStep)
      console.log(x,y)
      image.style.setProperty('transform',`translate3d(-${x}px, ${y}px, 0)`)
    }
  }
}
</script>

<style lang="sass">
  .float-image
    position: fixed
    bottom: 110px
    right: 200px
    z-index: 11
    user-select: none
    pointer-events: none
    .image
      position: relative
      overflow: hidden
      img
        display: inline-block
        transition: all .3s
    p
      position: absolute
      bottom: 0
      right: 0
      transform: translate(50%, 50%)
      width: 50%
</style>