<template>
  <div class="small-review">
    <a :href="$props.data['link']" class="image">
      <img :src="require(`@/assets/img/${$props.data.image}`)" alt="alr">
    </a>
    <div class="info">
      <p class="time custom-grey-text">{{ $props.data.time }}</p>
      <a :href="$props.data['link']" class="name">{{ $props.data.name }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  name: "SmallReviewBlock"
}
</script>

<style scoped lang="sass">
.small-review
  display: flex
  flex-direction: column
.image
  margin-bottom: 26px
  img
    width: 100%
    height: auto
.info
  display: flex
  align-items: flex-start
  justify-content: space-between
  @media (max-width: 767px)
    flex-direction: column
  .time
    margin: 0 80px 0 0
    @media (max-width: 767px)
      margin: 0 0 15px
  .name
    text-decoration: none
    color: $white
    min-width: 340px
    font-size: 26px
    line-height: 34px
    margin: 0
</style>