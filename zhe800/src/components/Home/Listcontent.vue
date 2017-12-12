<template>
  <div class="shopping">
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <li v-for="(v, k) in shopList" class="shopping-list" :key="k">
        <router-link :to="`/homeinfo/${v.id}`">
          <img :src="`./static/img/content/img${v.img}.webp`">
          <p>{{v.title}}</p>
          <div class="price">
            <span><small>¥</small>{{v.price}}</span><s>¥{{v.oldprice}}</s>
            <b>{{v.zhe}}折</b>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import bus from '../../bus'
import { InfiniteScroll } from 'mint-ui'
Vue.use(InfiniteScroll);
export default {
  name: 'Listcontent',
  props: ['citys'],
  data () {
    return {
      shopList: [],
      count: 0
    }
  },
  methods: {
    change () {
      axios.get(Vue.config.baseUrl + '/api/listData', {params: this.citys.cname}).then(res => {
        this.count === 0 ? this.shopList = res.data.shopList0 : this.shopList = res.data.shopList1
      })
    },
    loadMore () {
      this.loading = true
      setTimeout(() => {
        let last = this.shopList[this.shopList.length - 1]
        for (let i = 1; i <= 10; i++) {
          this.shopList.push(last + i);
        }
        this.loading = false;
      }, 2500);
    }
  },
  mounted () {
    bus.$on('changeIndex', data => {
      this.count = data
    })
    this.change()
  },
  watch: {
    count () {
      this.change()
    },
    citys () {
      console.log(this.citys)
      this.change()
    }
  }
}
</script>
<style lang="sass" scoped>
.shopping 
  width: 100% 
  background: #eee
  ul 
    width: 100%
    display: -webkit-flex
    -webkit-flex-wrap: wrap
    .shopping-list 
      background: #fff
      -webkit-flex-basis: 49%
      margin-left: .8%
      margin-bottom: .05rem
      img 
        width: 100% 
        height: auto
      p 
        line-height: .3rem 
        padding-left: .1rem
        margin-bottom: .2rem 
      .price 
        padding-left: .1rem 
        padding-bottom: .05rem
        position: relative
        span 
          color: #ff4545
          font-size: .16rem
        s 
          font-size: .1rem
          margin-left: .05rem 
          color: #9b9b9b
        b 
          position: absolute 
          color: #9b9b9b
          right: .1rem 
          bottom: .08rem 
          font-weight: normal 
          font-size: .12rem
</style>