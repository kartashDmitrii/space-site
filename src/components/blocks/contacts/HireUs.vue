<template>
  <div class="hire-us">
    <h4 class="title custom-grey-text">Нанять нас</h4>
    <div class="form">
      <div class="form-title">Начнем проект?</div>
      <form action="">
        <CustomCheckBox v-bind="customCheckboxPayload"/>
        <div class="line">
          <label>
            <input type="text" name="name" placeholder="Имя" required>
            <span>Имя</span>
          </label>
          <label>
            <input type="tel" name="phone" placeholder="Телефон" required>
            <span>Телефон</span>
          </label>
        </div>
        <label>
          <input type="email" name="email" placeholder="Email" required>
          <span>Email</span>
        </label>
        <label>
          <textarea name="detail" placeholder="Детали проекта"></textarea>
          <span>Детали проекта</span>
        </label>
        <input type="submit" value="Отправить">
      </form>
    </div>
  </div>
</template>

<script>
import CustomCheckBox from "@/components/blocks/form-components/CustomCheckBox";
export default {
  name: "HireUs",
  components: {CustomCheckBox},
  data(){
    return {
      customCheckboxPayload: {
        name: 'Услуги',
        checkboxName: 'Services',
        checkboxArray: [
          {
            name: 'Разработка',
            value: 'development'
          },
          {
            name: 'Маркетинг',
            value: 'marketing'
          },
          {
            name: 'Дизайн',
            value: 'design'
          },
          {
            name: 'Брендинг',
            value: 'branding'
          },
        ]
      }
    }
  },
}
</script>

<style scoped lang="sass">
.hire-us
  width: 100%
.title
  margin-bottom: 64px
.form-title
  font-weight: 300
  font-size: 41px
  line-height: 53px
  color: $white
  margin: 0 0 28px
.form
  display: flex
  flex-direction: column
  width: 100%
form
  display: flex
  flex-direction: column
  width: 100%
  label
    position: relative
    display: flex
    width: 100%
    box-sizing: border-box
    margin: 0 0 35px
    span
      position: absolute
      left: 0
      top: -21px
      display: flex
      align-items: center
      font-weight: 300
      font-size: 12px
      line-height: 23px
      color: $white
      transition: all .3s
  input:not([type='submit']),textarea
    resize: none
    width: 100%
    box-sizing: border-box
    border: solid $grey-text
    border-width: 0 0 1px 0
    font-weight: 300
    font-size: 18px
    line-height: 23px
    color: $white
    background: transparent
    padding: 14px 0
    outline: none
    &::placeholder
      color: transparent
    &:required ~ span:after
      content: '*'
      color: #EC1515
      padding-left: 10px
    &:placeholder-shown ~ span
      top: 14px
      margin: auto
      font-size: 18px
      color: $grey-text
      cursor: text
      user-select: none
  textarea
    &::-webkit-scrollbar
      width: 2px
    &::-webkit-scrollbar-track
      background: #f1f1f1
    &::-webkit-scrollbar-thumb
      background: #888
    &::-webkit-scrollbar-thumb:hover
      background: #555
  input[type="submit"]
    width: 150px
    height: 150px
    background: #737373
    display: flex
    align-items: center
    justify-content: center
    color: $white
    margin-top: 10px
    cursor: pointer
    font-size: 21px
    line-height: 27px
    border-radius: 50%
    border: none
    outline: none
  .line
    display: flex
    justify-content: space-between
    align-items: center
    label
      width: calc(50% - 15px)
</style>