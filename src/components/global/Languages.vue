<template>
  <div class="lang" :class="hiddenLang">
    <p @click="changeStatus" class="current">Eng</p>
    <ul ref="langList" :style="{maxHeight: langHeight}">
      <li class="current"><a href="">Eng</a></li>
      <li><a href="">Rus</a></li>
      <li><a href="">Ua</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Languages",
  data(){
    return {
      showLang: false
    }
  },
  methods: {
    changeStatus(){
      let hideLanguage = () => {
        this.showLang = false
        window.removeEventListener('click', hideLanguage)
      }
      if (!this.showLang){
        this.showLang = true
        setTimeout( () => {
          window.addEventListener('click', hideLanguage)
        })
      } else {
        this.showLang = false
      }
    }
  },
  computed: {
    langHeight(){
        return this.showLang ? `${this.$refs['langList'].scrollHeight + 10}px` : '';
    },
    hiddenLang(){
      return this.showLang ? 'show' : ''
    }
  }
}
</script>

<style scoped lang="sass">
.lang
  font-size: 18px
  line-height: 23px
  position: relative
  &.show
    ul
      padding: 5px 10px
  p.current
    margin: 0
    position: relative
    padding-right: 18px
    cursor: pointer
    box-sizing: border-box
    &:after
      content: ''
      width: 5px
      height: 5px
      border: solid $white
      border-width: 0 1px 1px 0
      transform: rotate(45deg)
      position: absolute
      top: 0
      bottom: 0
      right: 0
      margin: auto
  ul
    margin: 0
    list-style: none
    position: absolute
    top: calc(100% + 10px)
    left: 0
    background-color: $grey-text
    transition: all .3s
    max-height: 0
    padding: 0 10px
    overflow: hidden
    box-sizing: border-box
    li
      display: flex
      padding-bottom: 5px
      margin-bottom: 5px
      border-bottom: 1px solid $border-color
    a
      text-decoration: none
      color: inherit
</style>