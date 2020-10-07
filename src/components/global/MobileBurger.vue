<template>
  <div ref="mobile-burger" class="mobile-burger">
    <div class="close" @click="$emit('hide')"></div>
  </div>
</template>

<script>
export default {
name: "MobileBurger"
}
</script>

<style scoped lang="sass">
  .mobile-burger
    position: fixed
    width: 100vw
    height: 100vh
    top: 0
    left: 0
    z-index: 11
    background: rgba(0,0,0,.5)
    display: none
    &.show
      display: block
    .close
      position: absolute
      top: 15px
      right: 15px
      width: 30px
      height: 30px
      cursor: pointer
      background: url("~@/assets/img/svg/close-white.svg") center center / 100% 100% no-repeat
</style>