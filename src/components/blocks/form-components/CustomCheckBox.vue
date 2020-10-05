<template>
  <div :class="customClass">

  </div>
</template>

<script>
export default {
  props: {
    customClass: {
      type: String,
      default: 'custom-checkbox'
    }
  },
  name: "CustomCheckBox"
}
</script>

<style scoped>

</style>