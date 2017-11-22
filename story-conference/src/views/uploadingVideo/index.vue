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
      <uploading/>
      <div class="up">
        <div class="video">
          <VideoButton>
            <img src="../../static/img/上传.png" alt="">
            上传视频
          </VideoButton>
        </div>
        <div class="video">
          <VideoButton :capture="capture">
            <img src="../../static/img/录制.png" alt="">
            录制视频
          </VideoButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import responseImg from '@/components/HeaderImg'
import uploading from '@/views/home/components/ActiveHome'
import VideoButton from '@/components/VideoButton'
export default {
  name: 'index',
  components: {
    responseImg,
    uploading,
    VideoButton
  },
  data () {
    return {
      capture: 'camera'
    }
  },
  methods: {
    luzhi () {

    }
  }
}
</script>
<style lang="sass" scoped>
@import '../../static/css/img.sass'
.up 
  overflow: hidden
  .video 
    width: 2.6rem
    display: inline-block
    margin-left: 8%
    img 
      vertical-align: middle
    .upload 
      width: 100%
</style>
