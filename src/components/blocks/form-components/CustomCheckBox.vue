<template>
  <div class="custom-checkbox" :class="$props.customClass">
    <p class="name custom-grey-text" v-if="$props.name">{{ $props.name}}</p>
    <div class="checkbox-wrapper">
      <label v-for="(checbox, i) in $props.checkboxArray" :key="i">
        <input type="checkbox" :name="$props.checkboxName" :value="checbox.value">
        <span>{{ checbox.name}}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    customClass: String,
    name: String,
    checkboxName: {
      type: String,
      required: true
    },
    checkboxArray: {
      type: Array,
      required: true
    }
  },
  name: "CustomCheckBox"
}
</script>

<style scoped lang="sass">
  .custom-checkbox
    display: flex
    flex-direction: column
    margin-bottom: 70px
    .name
      margin: 0 0 24px
    .checkbox-wrapper
      display: flex
      label
        display: flex
        margin: 0 10px 0 0
        cursor: pointer
        &:last-child
          margin-right: 0
        span
          border-radius: 42px
          box-sizing: border-box
          border: 1px solid $white
          padding: 14px 35px
          font-weight: 500
          font-size: 18px
          line-height: 23px
          color: $white
          transition: all .3s
        input
          opacity: 0
          display: none
          &:checked ~ span
            background: $white
            color: $body-background

</style>