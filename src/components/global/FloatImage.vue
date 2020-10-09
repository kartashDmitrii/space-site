<template>
  <div ref="float-image" class="float-image">
    <div class="image">
      <img v-if="oldImage !== ''" class="new-image" :src="require(`@/assets/img/${oldImage}`)" alt="">
    </div>
    <p class="desc">
      {{$props.desc}}
    </p>
  </div>
</template>

<script>
export default {
  props: ['image', 'desc'],
  name: "FloatImage",
  beforeUpdate() {
    setTimeout( () => {
      this.$refs['float-image'].querySelector('.image .new-image').style.transition = 'none';
      this.$refs['float-image'].querySelector('.image .new-image').style.transform = 'scale(1)';
      this.$refs['float-image'].querySelector('.image .new-image').style.transition = 'all .3s';
      this.$refs['float-image'].querySelector('.image .new-image').style.transform = 'scale(0)';
      setTimeout( () => {
        this.oldImage = this.$props.image
        this.$refs['float-image'].querySelector('.image .new-image').style.transform = 'scale(1)';
      }, 300)
    })
  },
  mounted() {
    this.oldImage = this.$props.image
    window.addEventListener('mousemove', this.moveImage)
  },
  destroyed() {
    window.removeEventListener('mousemove', this.moveImage)
  },
  data(){
    return {
      oldImage: ''
    }
  },
  methods: {
    moveImage(event){
      let image = this.$refs['float-image'].querySelector('.image'),
          xMaxMove = 500,
          yMaxMove = 700

      let xMove = Math.round(xMaxMove / ((event.clientX * 100) / window.screen.width));
      let yMove = Math.round(yMaxMove / ((event.clientY * 100) / window.screen.height));
      image.style.transform = `translate3d(-${xMove}px, -${yMove}px, 0)`
    }
  }
}
</script>

<style scoped lang="sass">
.float-image
  position: fixed
  bottom: 200px
  right: 250px
  user-select: none
  pointer-events: none
  .image
    position: relative
    .new-image
      transition: all .3s
      position: relative
      z-index: 1
  .desc
    width: 50%
    position: absolute
    top: calc(100% - 50px)
    right: 0
    transform: translateX(50%)
    font-size: 24px
    font-weight: 300
    line-height: 28px
    margin: 0
</style>