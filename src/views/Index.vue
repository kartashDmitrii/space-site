<template>
  <div class="home">
    <TopBanner/>
    <Agency/>
    <OurWorks/>
    <Reviews/>
    <FAQ/>
    <Contacts/>
  </div>
</template>

<script>

import TopBanner from "@/components/index/TopBanner";
import Agency from "@/components/index/Agency";
import OurWorks from "@/components/index/OurWorks";
import Reviews from "@/components/index/Reviews";
import FAQ from "@/components/index/FAQ";
import Contacts from "@/components/index/Contacts";
export default {
  name: 'Home',
  components: {
    Contacts,
    FAQ,
    Reviews,
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
