<template>
  <div class="custom-button-block">
    <a ref="button" href="#" class="custom-button">
      {{$props.text}}
    </a>
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
    ref: {
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
        this.$refs['button'].style.setProperty('background-color','#4061F9')
          break
      case 'Grey':
        this.$refs['button'].style.setProperty('background-color','#737373')
          break
    }
  },
  name: "CustomButton"
}
</script>

<style scoped lang="sass">
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
  color: #ffffff
</style>