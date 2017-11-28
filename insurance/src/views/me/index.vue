<template>
<div id="app">
  <div class="main">
    <div class='info'>
      <img src='../../../static/images/head.jpg' class='head'>
      <div class='name'>孙金玉</div>
      <div class='tel'>15011548446</div>
      <canvas id="wave" width="100%" height="100"></canvas>
    </div>
    <div class='content'>
      <div class='dl' v-for="(item,k) in listArr" :key="k">
        <div class='dt'>
          <img :src='item.img'>
        </div>
        <div class='dd'>{{item.text}}</div>
      </div>
    </div>
  </div>
  <Footers/>
</div>
</template>
<script>
import Footers from '@/components/Footer'
export default {
  name: 'index',
  data () {
    return {
      listArr: [
        {
          img: './static/images/icon10.png',
          text: '我的保单'
        },
        {
          img: './static/images/icon5.png',
          text: '投保人信息'
        },
        {
          img: './static/images/icon2.png',
          text: '申请理赔'
        },
        {
          img: './static/images/icon7.png',
          text: '申请退保'
        },
        {
          img: './static/images/icon11.png',
          text: '申请续保'
        },
        {
          img: './static/images/icon12.png',
          text: '销售记录'
        },
        {
          img: './static/images/icon4.png',
          text: '设置'
        }
      ]
    }
  },
  components: {
    Footers
  },
  created () {
    this.$store.dispatch('login/GetUserInfo').then(res => {
      console.log(res)
    })
  },
  mounted () {
    function SiriWave (opt) {
      this.opt = opt || {}
      this.K = 1
      this.F = 15
      this.speed = this.opt.speed || 0.1
      this.noise = this.opt.noise || 30
      this.phase = this.opt.phase || 0
      this.container = this.opt.container || '#canvas'
      if (!window.devicePixelRatio) {
        window.devicePixelRatio = 1
      }
      this.width = devicePixelRatio * (this.opt.width || 320)
      this.height = devicePixelRatio * (this.opt.height || 100)
      this.MAX = (this.height / 2) - 4
      this.canvas = document.querySelector(this.opt.container)
      this.canvas.width = this.width
      this.canvas.height = this.height
      this.canvas.style.width = (this.width / devicePixelRatio) + 'px'
      this.canvas.style.height = (this.height / devicePixelRatio) + 'px'
      this.ctx = this.canvas.getContext('2d')
      this.run = false
    }
    SiriWave.prototype = {
      _globalAttenuationFn (x) {
        return Math.pow(this.K * 4 / (this.K * 4 + Math.pow(x, 4)), this.K * 2)
      },
      _drawLine (attenuation, color, width, noise, F) {
        this.ctx.moveTo(0, 0)
        this.ctx.beginPath()
        this.ctx.strokeStyle = color
        this.ctx.lineWidth = width || 1
        var x, y
        F = F || this.F
        noise = noise * this.MAX || this.noise
        for (var i = -this.K; i <= this.K; i += 0.01) {
          i = parseFloat(parseFloat(i).toFixed(2))
          x = this.width * ((i + this.K) / (this.K * 2))
          y = this.height / 2 + noise * Math.pow(Math.sin(i * 10 * attenuation), 1) * Math.sin(F * i - this.phase)
          this.ctx.lineTo(x, y)
        }
        this.ctx.lineTo(this.width, this.height)
        this.ctx.lineTo(0, this.height)
        this.ctx.fillStyle = color
        this.ctx.fill()
      },
      _clear () {
        this.ctx.globalCompositeOperation = 'destination-out'
        this.ctx.fillRect(0, 0, this.width, this.height)
        this.ctx.globalCompositeOperation = 'source-over'
      },
      _draw () {
        if (!this.run) {
          return
        }
        this.phase = (this.phase + this.speed) % (Math.PI * 64)
        this._clear()
        this._drawLine(0.5, 'pink', 1, 0.35, 6)
        this._drawLine(1, '#fff', 1, 0.25, 6)
        window.clearAnimationFrame = requestAnimationFrame(this._draw.bind(this), 1000)
      },
      start () {
        this.phase = 0
        this.run = true
        this._draw()
      },
      stop () {
        this.run = false
        this._clear()
      },
      setNoise (v) {
        this.noise = Math.min(v, 1) * this.MAX
      },
      setSpeed (v) {
        this.speed = v
      },
      set (noise, speed) {
        this.setNoise(noise)
        this.setSpeed(speed)
      },
      bl (val) {
        return 1920 / 15
      }
    }
    var SW = new SiriWave({
      width: window.innerWidth,
      height: 80,
      container: '#wave'
    })
    SW.setSpeed(0.01)
    SW.start()
  }
}
</script>
<style lang="less" scoped>
canvas {
  position: absolute;
  bottom: -30px;
  left: 0;
  right: 0;
}
.info {
  position: relative;
  text-align: center;
  padding: 30px 0; 
  background: #FE4776;
}
.info img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.info .name {
  color: #fff;
  font-size: 14px;
  margin-top: 10px;
}
.info .tel {
  color: #fff;
  font-size: 14px;
  line-height: 30px;
}
.content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
}
.content .dl {
  flex-basis: 25%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  padding: 30px 0;
}
.dl .dt {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}
.dl .dt  img{
  width: 30px;
  height: 30px;
}
.dl .dd {
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
}

</style>
