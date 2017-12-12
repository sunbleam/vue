<template>
  <footer class="footer">
    <dl v-for="(item, k) in footerData" :key="k">
      <router-link :to="item.path" active-class="">
        <dt><i :class="item.icon"></i></dt>
        <dd><span>{{item.text}}</span></dd>
      </router-link>
    </dl>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
  data () {
    return {
      count: 0,
      footerData: [{
        icon: 'iconfont icon-icon019',
        text: '今日特卖',
        path: '/'
      }, {
        icon: 'iconfont icon-qian',
        text: '淘特价',
        path: 'special'
      }, {
        icon: 'iconfont icon-pintuan-',
        text: '拼团',
        path: 'groupBooking'
      }, {
        icon: 'iconfont icon-gouwuche',
        text: '购物车',
        path: 'shoppingCart'
      }, {
        icon: 'iconfont icon-wode',
        text: '我的',
        path: 'me'
      }]
    }
  }
}
</script>
<style lang="sass">
%allcenter 
  display: -webkit-flex 
  justify-content: center 
  align-items: center 
.footer 
  width: 100%
  display: -webkit-flex 
  height: .5rem 
  border-top: .01rem solid #eee
  border-top: .01rem solid #eee
  dl 
    -webkit-flex: 1
    dt 
      text-align: center
      margin-top: .05rem
      i 
        font-size: .2rem
    dd 
      text-align: center
    a
      &.router-link-exact-active
        color: #E30C26
</style>