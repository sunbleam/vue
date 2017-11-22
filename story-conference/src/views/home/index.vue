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
      <InforHome/>
      <ActiveHome/>
      <template>
        <div class="ma" v-if="attention">
          <img src="../../static/img/weima.png" alt="">
          <p>关注21天表达训练营</p>
          <p>专注提高儿童表达能力</p>
        </div>
        <buttons v-else @click.native="join">参加故事大会</buttons>
      </template>
    </div>
  </div>
</template>
<script>
import responseImg from '@/components/HeaderImg'
import InforHome from './components/InforHome'
import ActiveHome from './components/ActiveHome'
import buttons from '@/components/Button'
import inputs from '@/views/login/input'
export default {
  name: 'index',
  data () {
    return {
      attention: false,
      isLogin: true
    }
  },
  components: {
    responseImg,
    InforHome,
    ActiveHome,
    buttons
  },
  methods: {
    join () {
      let that = this
      if (!localStorage.getItem('user')) {
        this.dialog.confirm(inputs, {
          okCallback () {
            console.log('确认')
            that.$router.push('/uploading')
          },
          cancelCallback () {
            console.log('取消')
          }
        })
        // this.dialog.msg('ssssss')
      } else {
        this.$router.push('/uploading')
      }
    }
  },
  mounted () {
    this.dialog.msg('jajaja')
  }
}
</script>
<style lang="sass" scoped>
@import '../../static/css/img.sass'
.ma 
  width: 100%
  margin-top: .3rem
  text-align: center
  p 
    font-family: PingFangSC-Regular
    font-size: .28rem
    color: #999
</style>
