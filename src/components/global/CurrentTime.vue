<template>
  <div class="current_time" ref="currentTime">
    <span class="hour">hh</span>:<span class="min">mm</span>:<span class="sec">ss</span>
  </div>
</template>

<script>
export default {
  name: "Current-Time",
  mounted() {
    setInterval(this.timer, 1000)
    this.timer();
  },
  methods: {
    timer(){
      let clock = this.$refs['currentTime'],
          date = new Date();
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours
      clock.children[0].innerText = hours
      let minutes = date.getMinutes();
      if (minutes < 10) minutes = '0' + minutes
      clock.children[1].innerText = minutes
      let seconds = date.getSeconds();
      if (seconds < 10) seconds = '0' + seconds
      clock.children[2].innerText = seconds

    }
  }
}
</script>

<style scoped lang="sass">
.current_time
  font-weight: 200
  font-size: 24px
  line-height: 31px
  color: $grey-text
</style>