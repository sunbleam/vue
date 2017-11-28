<template>
  <div class="list">
    <div class='content-list' v-for="(item,k) in productList" :key="k">
      <router-link :to="'/thing/' + item.product_id">
      <div class='left'>
        <img :src="item.cover" class='img'>
      </div>
      <div class='right'>
        <div class='title'>{{item.title}}</div>
        <div class='info'>{{item.features}}</div>
        <div class='price'>{{item.price}}元起购买</div>
        <div class='people'>{{item.sale_num}}人购买</div>
      </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tuijian',
  props: {
    productList: {
      default: []
    }
  }
}
</script>
<style lang="sass" scoped>
.content-list 
  padding: 10px 0
  border-bottom: 1px solid #ccc
a 
  display: block 
  width: 100% 
  display: flex
  color: #444
.content-list .right 
  flex: 1.5
  text-align: left
  font-size: 14px
  position: relative
  overflow: hidden
.right .title 
  font-size: 18px
  line-height: 30px
  width: 100% 
  white-space: nowrap
  overflow: hidden
  text-overflow: ellipsis
.right .info 
  color: #ccc
  text-overflow: ellipsis
  display: -webkit-box
  -webkit-line-clamp: 2
  -webkit-box-orient: vertical
  overflow: hidden
.right .price 
  color: red
  line-height: 30px
  position: absolute
  left: 0 
  bottom: 0
.right .people 
  position: absolute
  right: 10px
  bottom: 0
  color: #ccc

.content-list .left 
  flex: 1
  text-align: center
.left .img
  width: 80%
  height: 100px
  vertical-align: middle
</style>
