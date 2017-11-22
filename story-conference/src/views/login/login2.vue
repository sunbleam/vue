<template>
  <div class="box" v-if="flag">
    <div class="filter"></div>
    <div class="login">
      <h4>登录</h4>
      <img src="../../static/img/btn_close@2x.png" alt="" @click="hide">
      <div class="tel">
        <input type="text" placeholder="请输入姓名" v-model="user.username">
        <input type="password" placeholder="请输入密码" v-model="user.password">
      </div>
      <buttons @click.native="login">登录</buttons>
    </div>
  </div>
</template>
<script>
import buttons from '@/components/Button'
export default {
  name: 'login',
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      flag: false
    }
  },
  methods: {
    show () {
      this.flag = true
    },
    hide () {
      this.flag = false
    },
    login () {
      if (this.user.username !== '' && this.user.password !== '') {
        localStorage.setItem('user', this.user.username)
        window.location.href = '/uploading'
        this.dialog.hide()
      } else {
        console.log('请输入用户名或密码')
      }
    }
  },
  components: {
    buttons
  }
}
</script>
<style lang="sass" scoped>
.filter 
  position: absolute 
  left: 0 
  top: 0 
  bottom: 0 
  right: 0 
  background: rgba(0, 0, 0, .5)
.login 
  width: 6.36rem
  height: 6.5rem
  background: #fff
  position: absolute
  left: 50% 
  top: 50% 
  transform: translate(-50%, -50%)
  border-radius: .16rem
  h4 
    width: 100% 
    text-align: center
    color: #454545
    font-size: .4rem
    margin-top: .6rem
    font-family: SFNSDisplay
  img 
    position: absolute
    right: .2rem 
    top: 0
  .tel 
    width: 100%
    input 
      width: 5.32rem
      height: .6rem
      margin-left: .5rem
      margin-top: .3rem
      border-width: 0 
      outline: none
      border-bottom: .01rem solid #ccc
</style>
