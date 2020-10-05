<template>
  <div class="hire-us">
    <h4 class="title">Нанять нас</h4>
    <div class="form">
      <div class="form-title">Начнем проект?</div>
      <form action="">
        <CustomCheckBox/>
      </form>
    </div>
  </div>
</template>

<script>
import CustomCheckBox from "@/components/blocks/form-components/CustomCheckBox";
export default {
  name: "HireUs",
  components: {CustomCheckBox}
}
</script>

<style scoped lang="sass">

</style>