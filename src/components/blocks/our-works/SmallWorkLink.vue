<template>
  <a class="work-link" :href="$props.link">
    <h2 class="name">{{$props.name}}</h2>
    <p class="date">{{$props.date}}</p>
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
    border-top: 2px solid #ffffff
    text-decoration: none
    color: #ffffff
    &:last-child
      border-bottom: 2px solid #ffffff
    .name
      margin: 0
      font-weight: 300
      font-size: 72px
      line-height: 94px
    .date
      margin: 14px 0 0 0
      font-weight: 300
      font-size: 16px
      line-height: 21px
      color: #CACACA
</style>