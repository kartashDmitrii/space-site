<template>
  <nav class="navigation">
    <router-link v-for="(link,i) in allLinks" :to="link.path" :key="i">{{link.name}}</router-link>
  </nav>
</template>

<script>
export default {
  name: "Navigations",
  created() {
    this.$router.options.routes.forEach( route => {
      if (route.onMainMenu) {
        this.allLinks.push({
          name: route.name,
          path: route.path
        })
      }
    });
  },
  data(){
    return {
      allLinks: []
    }
  }
}
</script>

<style scoped lang="sass">
.navigation
  display: flex
  a
    font-size: 18px
    line-height: 23px
    color: $grey-text
    margin-right: 20px
    padding: 0 5px
    text-decoration: none
    @media (max-width: 1366px)
      margin-right: 10px
    &:last-child
      margin-right: 0
</style>