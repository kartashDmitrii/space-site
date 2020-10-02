<template>
  <a class="work-link" :href="link">
    <h2 class="name"></h2>
    <p class="date"></p>
  </a>
</template>

<script>
export default {
  name: "SmallWorkLink",
  props: ['name', 'date', 'link']
}
</script>

<style scoped lang="sass">

</style>