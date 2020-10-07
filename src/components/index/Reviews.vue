<template>
  <section class="reviews container small-container">
    <h5 class="title custom-grey-text">Агенция</h5>
    <div class="review-gid" :class="{'small-margin' : reviews.length % 2 === 0}">
      <div class="review-block" v-for="i in reviewsLength" :key="i">
        <SmallReviewBlock v-if="i !== currentReviewPosition" :data=" i > currentReviewPosition ? reviews[i-2] : reviews[i - 1]"></SmallReviewBlock>
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
     reviewPosition: {
       0: 1,
       1024: 2
     },
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
    },
    currentReviewPosition(){
      let pos;
      for (let width in this.reviewPosition){
        if (screen.width >= width){
          pos = this.reviewPosition[width]
        } else {
          return pos
        }
      }
      return pos
    }
  }
}
</script>

<style scoped lang="sass">
.reviews
  padding-bottom: 150px
  border-bottom: 1px solid $border-color
  margin-bottom: 150px
  @media (max-width: 767px)
    padding-bottom: 100px
    margin-bottom: 100px
.title
  margin: 0 0 80px
.review-gid
  display: grid
  grid-template-columns: 1fr 1fr
  grid-column-gap: 275px
  grid-row-gap: 95px
  grid-auto-rows: auto
  align-items: center
  margin-bottom: 165px
  @media (max-width: 1365px)
    grid-column-gap: 50px
  @media (max-width: 1023px)
    grid-template-columns: 100%
  @media (max-width: 767px)
    margin-bottom: 55px
  &.small-margin
    margin-bottom: 55px
  .review-block
    @media (min-width: 1024px)
      &:nth-child(2n + 2):not(:nth-child(2))
        transform: translateY(110px)
</style>