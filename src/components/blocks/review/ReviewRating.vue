<template>
  <div class="review-rating">
    <p class="rating">4.6</p>
    <p class="desc custom-grey-text">На основе <span>123</span> отзывов google</p>
  </div>
</template>

<script>
export default {
  name: "ReviewRating"
}
</script>

<style scoped lang="sass">
.review-rating
  padding: 185px 95px
  box-sizing: border-box
  border: 5px solid $white
  display: flex
  justify-content: center
  flex-direction: column
  align-items: center
  .rating
    font-weight: 300
    font-size: 144px
    line-height: 187px
    margin: 0 0 30px
  .desc
    color: $white
    text-align: center
</style>