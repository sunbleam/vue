<template>
  <footer class="footer">
    <ul>
      <li><span>客服</span></li>
      <li><span>收藏</span></li>
      <li><span>购物车</span></li>
      <li>加入购物车</li>
      <li>立即购买</li>
    </ul>
  </footer>
</template>
<script>
export default {
  name: 'Infofooter'
}
</script>
<style lang="sass" scoped>
.footer 
  height: .5rem 
  ul 
    width: 100% 
    height: 100%
    display: -webkit-flex
    li 
      -webkit-flex: 1 
      display: -webkit-flex 
      justify-content: center 
      align-items: center
      &:nth-of-type(4)
        -webkit-flex: 2 
        background: #ff8b8b
        color: #fff
      &:nth-of-type(5)
        -webkit-flex: 2 
        background: #e60044
        color: #fff
</style>