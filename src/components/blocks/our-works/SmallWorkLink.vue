<template>
  <a class="work-link" :href="$props.link">
    <h2 class="name">{{$props.name}}</h2>
    <p class="date custom-grey-text">{{$props.date}}</p>
  </a>
</template>

<script>
export default {
  name: "SmallWorkLink",
  props: ['name', 'date', 'link']
}
</script>

<style scoped lang="sass">
  .work-link
    display: flex
    justify-content: flex-start
    padding: 26px 0
    border-top: 2px solid $white
    text-decoration: none
    color: $white
    &:last-child
      border-bottom: 2px solid $white
    .name
      margin: 0
      font-weight: 300
      font-size: 72px
      line-height: 94px
      @media (max-width: 767px)
        font-size: 41px
        line-height: 53px
    .date
      margin: 14px 0 0 0
</style>