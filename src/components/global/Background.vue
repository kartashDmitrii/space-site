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
    document.body.addEventListener('mousemove', this.moveMouse)
    this.changeBackgroundCanvas();
    this.buildStars();
    setInterval(this.drawStars, 20)
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
      xCord: '',
      yCord: '',
      allStars: [],
    }
  },
  methods:{
    changeBackgroundCanvas(){
      this.$refs['background'].width = document.body.scrollWidth
      this.$refs['background'].height = document.body.scrollHeight
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
    moveMouse(event){
      this.xCord = event.clientX
      this.yCord = event.clientY
    },
    buildStars(){
      let starCount = document.body.scrollHeight / 20,
          y = document.body.scrollHeight,
          x = document.body.scrollWidth,
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
        let fixX = this.allStars[i].x + ((this.allStars[i].size / 10) * ((this.xCord * 100) / window.screen.width)),
            fixY = this.allStars[i].y + ((this.allStars[i].size / 10) * ((this.yCord * 100) / window.screen.height)),
            fixSize = this.allStars[i].size,
            innerRadius = this.allStars[i].size / 4,
            spikes = 5,
            rot = Math.PI / 2 * 3,
            step = Math.PI / spikes
        for (let j = 0; j < spikes; j++){
          let x = fixX + Math.cos(rot) * fixSize;
          let y = fixY + Math.sin(rot) * fixSize;
          ctx.lineTo(x,y);
          rot += step;

          x = fixX + Math.cos(rot) * innerRadius;
          y = fixY + Math.sin(rot) * innerRadius;
          ctx.lineTo(x,y);
          rot += step;
        }
        ctx.lineTo(fixX, fixY - fixSize);
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