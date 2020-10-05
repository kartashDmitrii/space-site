<template>
  <section class="reviews container small-container">
    <h5 class="title">Агенция</h5>
    <div class="review-gid" :class="{'small-margin' : reviews.length % 2 === 0}">
      <div class="review-block" v-for="i in reviewsLength" :key="i">
        <SmallReviewBlock v-if="i !== 2" :data=" i > 2 ? reviews[i-2] : reviews[i - 1]"></SmallReviewBlock>
        <ReviewRating v-else></ReviewRating>
      </div>
    </div>
    <CustomButton text="Смотреть все"/>
  </section>
</template>

<script>
import SmallReviewBlock from "@/components/blocks/review/SmallReviewBlock";
import ReviewRating from "@/components/blocks/review/ReviewRating";
import CustomButton from "@/components/global/CustomButton";
export default {
name: "Reviews",
  components: {CustomButton, ReviewRating, SmallReviewBlock},
  data(){
   return {
     reviews: [
       {
         link: '#',
         name: 'Отзыв от Ростислава Валихновского',
         time: '0:52',
         image: 'video-1.png'
       },
       {
         link: '#',
         name: 'Отзыв от Ростислава Валихновского',
         time: '6:11',
         image: 'video-2.png'
       },
       {
         link: '#',
         name: 'Отзыв от Ростислава Валихновского',
         time: '1:52',
         image: 'video-3.png'
       },
     ]
   }
  },
  computed: {
    reviewsLength(){
      return this.reviews.length + 1
    }
  }
}
</script>

<style scoped lang="sass">
.reviews
  padding-bottom: 150px
  border-bottom: 1px solid #4A4848
  margin-bottom: 150px
.title
  margin: 0 0 80px
  font-weight: 300
  font-size: 16px
  line-height: 21px
  color: #CACACA
.review-gid
  display: grid
  grid-template-columns: 1fr 1fr
  grid-column-gap: 275px
  grid-row-gap: 95px
  grid-auto-rows: auto
  align-items: center
  margin-bottom: 165px
  &.small-margin
    margin-bottom: 55px
  .review-block
    &:nth-child(2n + 2):not(:nth-child(2))
      transform: translateY(110px)
</style>