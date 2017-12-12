<template>
  <div id="app">
    <header class="header">
      <h4>个人中心<span @click="changePage">←</span></h4>
      <p>登录&nbsp;|&nbsp;注册</p>
    </header>
    <section class="section">
      <div class="myOrder">
        <span>我的订单</span>
        <p>查询全部></p>
      </div>
      <List />
      <div class="shop">
        <p>购物车<span>></span></p>
        <p>优惠券<span>></span></p>
      </div>
      <div class="shop">
        <p>收藏夹<span>></span></p>
        <p>足迹<span>></span></p>
      </div>
      <div class="shop">
        <p>帮助与客服<span>></span></p>
        <p>下载折800APP<span>></span></p>
      </div>
    </section>
    <Footers />
  </div>
</template>
<script>
import Footers from '../common/Footer'
import List from './List'
export default {
  name: 'index',
  components: {
    Footers,
    List
  },
  methods: {
    changePage () {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="sass" scoped>
@import '../../assets/css/meStyle.sass'
</style>