<template>
  <div class="custom-button-block">
    <a ref="button" :href="$props.customRef" class="custom-button">{{text}}</a>
  </div>
</template>

<script>
export default {
  props: {
    customStyle: Array,
    text: {
      type: String,
      required: true
    },
    customRef: {
      type: String,
      default: '#'
    },
    color: {
      type: String,
      default: 'Blue',
      validator: function (value){
        return ['Blue', 'Grey'].indexOf(value) !== -1;
      }
    }
  },
  mounted() {
    if (this.$props.customStyle){
      this.$props.customStyle.forEach( obj => {
        this.$refs['button'].style.setProperty(obj.style, obj.value)
      })
    }
    switch (this.$props.color){
      case 'Blue':
          this.btnColor = '#4061F9'
          break
      case 'Grey':
          this.btnColor = '#737373'
          break
    }
  },
  data(){
    return {
      btnColor: ''
    }
  },
  name: "CustomButton"
}
</script>

<style scoped lang="sass">
@keyframes moveInBottom
  0%
    opacity: 0
    transform: translateY(30px)
  100%
    opacity: 1
    transform: translateY(0)
.custom-button-block
  display: flex
  justify-content: center
.custom-button
  width: 152px
  height: 152px
  border-radius: 50%
  display: flex
  align-items: center
  justify-content: center
  text-decoration: none
  color: $white
  background: $button-color
  transition: all .2s
  position: relative
  animation: moveInBottom .5s ease-out .75s
  animation-fill-mode: backwards
  &:after
    content: ''
    width: 100%
    height: 100%
    position: absolute
    top: 0
    left: 0
    z-index: -1
    transition: all .4s
    border-radius: 50%
    background: $button-color
  &:hover
    box-shadow: 0 10px 20px rgba(255, 255, 255, .2)
    &:after
      transform: scaleX(1.4) scaleY(1.6)
      opacity: 0
  &:active
    box-shadow: 0 5px 10px rgba(255, 255, 255, .2)
</style>