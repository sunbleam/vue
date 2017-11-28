<template>
  <div id="app">
    <div class="main" ref="main">
      <Swiper 
        :list="imgUrls"
        dots-position="center"
        :auto="true"
        :loop="true"
      />
      <Sticky>
        <tab active-color="#F75D93">
          <tab-item 
            v-for="(v,k) in tabList"
            :key="k"
            :selected = "k == 0"
            @on-item-click="changePage(v.cat_id)"
          >
            {{v.cat_name}}
          </tab-item>
        </tab>
      </Sticky>
      <Tuijian :productList="productList"/>
      <load-more tip="正在加载" v-show="flag == false"></load-more>
    </div>
    <Footers/>
  </div>
</template>
<script>
import Footers from '@/components/Footer'
import { Swiper, Tab, TabItem, Sticky, LoadMore } from 'vux'
import Tuijian from './components/Tuijian'
export default {
  name: 'home',
  data () {
    return {
      imgUrls: [
        {
          img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
        },
        {
          img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
        },
        {
          img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        }
      ],
      tabList: [],
      productList: [],
      flag: true,
      loadFlag: true,
      page: 0,
      pageSize: 4,
      catId: 0
    }
  },
  components: {
    Swiper,
    Tab,
    TabItem,
    Sticky,
    Footers,
    Tuijian,
    LoadMore
  },
  methods: {
    getHomeIndex () {
      this.$store.dispatch('product/GetHomeIndex').then(res => {
        this.tabList = res.data.cart_list
      })
    },
    getProductList ({page = 0, pageSize = 4, catId = 0}) {
      this.$store.dispatch('product/GetProductList', {
        page,
        pageSize,
        catId
      }).then(res => {
        if (res.data.list.length === 0) {
          this.loadFlag = false
          this.flag = true
          return false
        }
        this.productList = [...this.productList, ...res.data.list]
        this.flag = true
      })
    },
    scroll () {
      let main = this.$refs.main
      if (!this.loadFlag) return false
      if (main.scrollTop + document.body.clientHeight >= main.scrollHeight && this.flag) {
        this.page++
        this.flag = false
        this.getProductList({page: this.page, catId: this.catId})
      }
    },
    scrollBar () {
      this.$refs.main.addEventListener('scroll', this.scroll, false)
    },
    changePage (val) {
      this.productList = []
      this.catId = val
      this.loadFlag = true
      this.page = 0
      this.getProductList({catId: this.catId})
    }
  },
  created () {
    this.getHomeIndex()
    this.getProductList({})
  },
  mounted () {
    this.scrollBar()
  }
}
</script>
<style lang="less" scoped>
</style>
