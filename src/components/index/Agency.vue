<template>
  <section class="agency container small-container">
    <h5 class="title custom-grey-text">Агенция</h5>
    <div class="text">
      <p>Занимаемся разработкой сайтов для бизнеса с 2013 года. За это время подобрали квалифицированных специалистов, которые готовы помочь клиентам в создании сайта любой
        сложности, а также внедрить в него все необходимые функции для высокой эффективности и результативности ведения
        вашего бизнеса.</p>
    </div>
    <CustomButton :custom-style="[{style: 'margin-left', value: '210px'}]" text="Подробнее"/>
  </section>
</template>

<script>
import CustomButton from "@/components/global/CustomButton";
export default {
name: "Agency",
  components: {CustomButton}
}
</script>

<style scoped lang="sass">
.agency
  display: flex
  flex-direction: column
  padding-bottom: 29px
  border-bottom: 1px solid $border-color
  margin-bottom: 150px
  @media (max-width: 767px)
    margin-bottom: 100px
  .title
    margin: 0
    position: absolute
    top: 20px
    left: 15px
  .text
    font-size: 38px
    line-height: 49px
    margin: 0
    @media (max-width: 767px)
      font-size: 27px
      line-height: 35px
    *
      margin: 0 0 15px
      &:first-child
        text-indent: 125px
      &:last-child
        margin-bottom: 0
    p
      font-size: 38px
      line-height: 49px
      @media (max-width: 767px)
        font-size: 27px
        line-height: 35px
</style>