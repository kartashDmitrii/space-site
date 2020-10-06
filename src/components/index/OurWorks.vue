<template>
  <section class="agency container small-container">
    <div class="title-block">
      <h5 class="title custom-grey-text">Агенция</h5>
    </div>
    <div class="our-works">
      <SmallWorkLink v-for="(work, i) in works" :name="work.name" :date="work.date" :link="work.link" :key="i"/>
    </div>
    <CustomButton text="Смотреть все"/>
  </section>
</template>

<script>
import SmallWorkLink from "@/components/blocks/our-works/SmallWorkLink";
import CustomButton from "@/components/global/CustomButton";
export default {
  name: "OurWorks",
  components: {CustomButton, SmallWorkLink},
  data(){
    return {
      works: [
        {
          name: 'Zlata Ognevich',
          date: '2020',
          link: '#'
        },
        {
          name: 'Laskarda',
          date: '2020',
          link: '#'
        },
        {
          name: 'EvaSad',
          date: '2020',
          link: '#'
        },
        {
          name: 'Novias',
          date: '2020',
          link: '#'
        },
        {
          name: 'Converse',
          date: '2020',
          link: '#'
        },
      ]
    }
  }
}
</script>

<style scoped lang="sass">
.agency
  margin-bottom: 150px
.title-block
  display: flex
  align-items: flex-end
  margin-bottom: 80px
  .title
    margin: 0 55px 8px 0
.our-works
  display: flex
  flex-direction: column
  margin-bottom: 60px

</style>