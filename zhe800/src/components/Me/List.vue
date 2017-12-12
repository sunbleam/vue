<template>
  <div class="list">
    <dl v-for="(item, k) in ListData" :key="k">
      <dt><i :class="item.icon"></i></dt>
      <dd><span>{{item.text}}</span></dd>
    </dl>
  </div>
</template>
<script>
export default {
  name: 'List',
  data () {
    return {
      ListData: [{
        icon: 'iconfont icon-icon019',
        text: '待付款',
        path: '/'
      }, {
        icon: 'iconfont icon-qian',
        text: '待发货',
        path: 'special'
      }, {
        icon: 'iconfont icon-pintuan-',
        text: '待收货',
        path: 'groupBooking'
      }, {
        icon: 'iconfont icon-gouwuche',
        text: '待评价',
        path: 'shoppingCart'
      }, {
        icon: 'iconfont icon-wode',
        text: '退款/售后',
        path: 'me'
      }]
    }
  }
}
</script>
<style lang="sass" scoped>
.list 
  width: 100%
  display: -webkit-flex 
  height: .5rem 
  border-top: .01rem solid #eee
  border-top: .01rem solid #eee
  padding: .1rem 0
  background: #fff
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