<template>
  <section class="agency container small-container">
    <div class="title-block">
      <h5 class="title">Агенция</h5>
      <p>Занимаемся разработкой сайтов для бизнеса с 2013 года.</p>
    </div>
    <div class="text">
      <p>За это время подобрали квалифицированных специалистов, которые готовы помочь клиентам в создании сайта любой
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
  border-bottom: 1px solid #4A4848
  margin-bottom: 150px
  .title-block
    display: flex
    align-items: flex-end
    .title
      margin: 0 55px 8px 0
      font-weight: 300
      font-size: 16px
      line-height: 21px
      color: #CACACA
    p
      margin: 0
      font-size: 38px
      line-height: 49px
  .text
    font-size: 38px
    line-height: 49px
    margin: 0
    *
      margin: 0 0 15px
      &:last-child
        margin-bottom: 0
    p
      font-size: 38px
      line-height: 49px
</style>