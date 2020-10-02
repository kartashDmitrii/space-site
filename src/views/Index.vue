<template>
  <div class="home">
    <TopBanner/>
    <Agency/>
    <OurWorks/>
  </div>
</template>

<script>

import TopBanner from "@/components/index/TopBanner";
import Agency from "@/components/index/Agency";
import OurWorks from "@/components/index/OurWorks";
export default {
  name: 'Home',
  components: {
    OurWorks,
    Agency,
    TopBanner

  }
}
</script>

<style scoped lang="sass">
  .home
    position: relative
    z-index: 1
</style>
