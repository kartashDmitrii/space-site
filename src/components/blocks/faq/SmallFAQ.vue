<template>
  <div class="elem" ref="elem">
    <p class="name" @click="toggleDesc">{{$props.desc.name}}</p>
    <div ref="desc" class="desc">
      <p>
        {{$props.desc.text}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['desc'],
  name: "SmallFAQ",
  mounted() {
    this.heightOfDesc = this.$refs['desc'].scrollHeight;
    this.$refs['elem'].classList.add('hidden')
  },
  data(){
    return {
      heightOfDesc: ''
    }
  },
  methods: {
    toggleDesc(){
      let elem = this.$refs['elem'];
      if (elem.classList.contains('hidden')){
        elem.classList.remove('hidden')
        this.$refs['desc'].style.height = `${this.heightOfDesc}px`
      } else {
        elem.classList.add('hidden')
        this.$refs['desc'].style.height = `0`
      }
    }
  }
}
</script>

<style scoped lang="sass">
.elem
  display: flex
  flex-direction: column
  padding: 25px 12px
  box-sizing: border-box
  border-top: 1px solid #ffffff
  &.hidden
    .desc
      height: 0
    .name:after
      transform: rotate(45deg)
.name
  margin: 0
  font-size: 24px
  line-height: 36px
  position: relative
  cursor: pointer
  &:after
    content: ''
    width: 8px
    height: 8px
    position: absolute
    top: 0
    bottom: 0
    right: 0
    margin: auto
    border: solid #ffffff
    border-width: 0 1px 1px 0
    transform: rotate(-135deg)
    transition: all .3s
.desc
  overflow-y: hidden
  transition: all .3s
  *
    margin: 0 0 15px
    &:last-child
      margin: 0
</style>