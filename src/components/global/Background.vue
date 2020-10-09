<template>
  <canvas ref="background" class="background"></canvas>
</template>

<script>
export default {
  name: "Background",
  created() {
    window.addEventListener('resize', this.changeBackgroundCanvas)
  },
  mounted() {
    this.changeBackgroundCanvas();
    this.buildStars();
    window.addEventListener('scroll', this.drawStars)
    this.drawStars();
    this.$store.watch(
        (state) => state.DARK_THEME,
        (newValue) => {
          if (newValue){
            this.drawFullCircle('#fff')
          } else {
            this.drawFullCircle('#111010')
          }
        }
    )
  },
  destroyed() {
    window.removeEventListener('resize', this.changeBackgroundCanvas)
  },
  data(){
    return{
      allStars: [],
    }
  },
  methods:{
    changeBackgroundCanvas(){
      let body = document.body;

      this.$refs['background'].width = body.scrollWidth
      this.$refs['background'].height = body.scrollHeight
    },
    drawFullCircle(color){
      this.$store.commit('changeAnimationFlag', false)
      let canvas = document.createElement('canvas')
      canvas.width = window.screen.width;
      canvas.height = window.screen.height;
      canvas.classList.add('background-circle');
      document.body.appendChild(canvas)
      let ctx = canvas.getContext("2d"),
          rad = 25,
          maxRad = Math.max(window.screen.width, window.screen.height) * 1.5,
          frameRate = 60,
          y = document.querySelector('header .change-color').getBoundingClientRect().top + 25,
          x =  document.querySelector('header .change-color').getBoundingClientRect().left + 25;
      let hideCanvasCircle = ()=>{
        canvas.style.opacity = '0'
        this.$store.commit('changeColorFlag', true)
        setTimeout(()=>{
          canvas.remove()
          setTimeout(()=>{
            this.$store.commit('changeAnimationFlag', true)
            this.$store.commit('changeColorFlag', false)
          })
        }, 1500)
      }
      let interval = setInterval( ()=>{
        if (rad <= maxRad){
          ctx.beginPath()
          ctx.strokeStyle = color;
          ctx.fillStyle = color;
          ctx.arc(x, y, rad, 0, 2 * Math.PI)
          ctx.stroke()
          ctx.fill()
          ctx.closePath();
          rad+=(maxRad / frameRate);
        }else {
          clearInterval(interval)
          hideCanvasCircle()
        }
      }, 1000 / frameRate)
    },
    buildStars(){
      let starCount = this.$refs['background'].height / 30,
          y = this.$refs['background'].height,
          x = this.$refs['background'].width,
          maxSize = 7;
      for (let i = 0; i < starCount; i++){

        let randX = Math.round(Math.random() * x);
        let randY = Math.round(Math.random() * y);
        let randSize = Math.ceil(Math.random() * maxSize)
        this.allStars.push({
          x: randX,
          y: randY,
          size: randSize
        })
      }
    },
    drawStars(){
      let ctx = this.$refs['background'].getContext("2d")
      ctx.clearRect(0, 0, this.$refs['background'].width, this.$refs['background'].height);
      for (let i = 0; i < this.allStars.length; i++){
        ctx.beginPath()
        ctx.strokeStyle = '#403C3C';
        ctx.fillStyle = '#403C3C';
        let newY = this.allStars[i].y - (((this.allStars[i].size * 200) / 20) * ((document.documentElement.scrollTop * 100) / document.body.scrollHeight))
        ctx.arc(this.allStars[i].x,newY, this.allStars[i].size, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
      }
    }
  }
}
</script>

<style lang="sass">
  .background
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 0
</style>