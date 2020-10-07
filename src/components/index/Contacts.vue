<template>
  <section class="contacts container small-container">
    <div v-if="desktopVersion" class="info">
      <h4 class="title">Контакты</h4>
      <div class="contact-field">
        <p class="phone">+38 (097) 355 11 77</p>
        <p class="mail">info@space-site.com.ua</p>
        <div class="social">
          <a href=""><img src="@/assets/img/svg/telegram.svg" alt=""></a>
          <a href=""><img src="@/assets/img/svg/viber.svg" alt=""></a>
        </div>
      </div>
      <p class="term-of-use">
        Текстовое и графическое содержимое сайта принадлежит Space-site и не может быть использовано другими ресурсами
        без нашего разрешения и без ссылки на источник.
      </p>
    </div>
    <HireUs/>
  </section>
</template>

<script>
import HireUs from "@/components/blocks/contacts/HireUs";
export default {
  name: "Contacts",
  components: {HireUs},
  computed: {
    desktopVersion(){
      return screen.width > 1023
    }
  },
}
</script>

<style scoped lang="sass">
.contacts
  display: grid
  grid-template-columns: 345px auto
  grid-column-gap: 145px
  padding-bottom: 150px
  @media (max-width: 1365px)
    grid-template-columns: 250px auto
    grid-column-gap: 45px
  @media (max-width: 1023px)
    grid-template-columns: 100%
.info
  display: flex
  flex-direction: column
  .title
    font-weight: 300
    font-size: 16px
    line-height: 21px
    color: $grey-text
    margin: 0 0 80px
  .contact-field
    display: flex
    flex: 1
    flex-direction: column
    .phone
      font-size: 26px
      line-height: 34px
      color: $white
      margin: 0 0 15px
      @media (max-width: 1365px)
        font-size: 18px
        line-height: 21px
    .mail
      font-size: 26px
      line-height: 34px
      color: $white
      margin: 0 0 24px
      @media (max-width: 1365px)
        font-size: 18px
        line-height: 21px
    .social
      display: flex
      a
        width: 30px
        height: 30px
        margin-right: 16px
        img
          width: 100%
          height: auto
        &:last-child
          margin-right: 0
  .term-of-use
    font-weight: 300
    font-size: 13px
    line-height: 17px
    color: $grey-text
    margin: 0
</style>