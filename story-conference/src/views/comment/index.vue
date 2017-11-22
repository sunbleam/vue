<template>
  <div class="story">
    <responseImg>
      <img src="../../static/img/场景背景.png" alt="" class="scene">
      <img src="../../static/img/太阳.png" alt="" class="sun">
      <img src="../../static/img/云 2.png" alt="" class="cloud2">
      <img src="../../static/img/云 3.png" alt="" class="cloud3">
      <img src="../../static/img/云 1.png" alt="" class="cloud1">
      <img src="../../static/img/鸟 1.png" alt="" class="bird1">
      <img src="../../static/img/鸟 2.png" alt="" class="bird2">
      <div class="car-all">
        <img src="../../static/img/轮子 1.png" alt="" class="wheel-left">
        <img src="../../static/img/轮子 2.png" alt="" class="wheel-right">
        <img src="../../static/img/车身.png" alt="" class="car">   
      </div>
    </responseImg>
    <div class="content">
      <component :is="currentView" @changePage="changePage"></component>
    </div>
  </div>
</template>
<script>
import responseImg from '@/components/HeaderImg'
import search from './components/Serach'
export default {
  name: 'index',
  data () {
    return {
      currentView: search
    }
  },
  components: {
    responseImg,
    search
  },
  methods: {
    changePage (data) {
      this.currentView = data
    }
  }
}
</script>
<style lang="sass" scoped>
@import '../../static/css/img.sass'
.content 
  text-align: center
</style>

