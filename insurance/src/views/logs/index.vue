<template>
  <div id="app">
    <div class="main">
      <!-- <Swiper 
        :list="imgUrls"
        dots-position="center"
        :auto="true"
        :loop="true"
      /> -->
      <scroller lock-y :scrollbar-x=false>
        <div class="box1">
          <div class="box1-item" v-for="(v,k) in imgUrls" :key="k"><img :src="v.img" alt=""></div>
        </div>
      </scroller>
      <div class="content">
        <div class='title'>
          保险课堂
        </div>
        <div class="list" v-for="(item,k) in listData" :key="k">
          <div class="left">
            <div class='list-title'>
              {{item.title}}
            </div>
            <div class='list-contnet'>
              {{item.description}}
            </div>
          </div>
          <div class="right">
            <img :src='item.cover'>
          </div>
        </div>
      </div>
    </div>
    <Footers/>
  </div>
</template>
<script>
import Footers from '@/components/Footer'
import { Swiper, Scroller } from 'vux'
export default {
  name: 'index',
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
      listData: []
    }
  },
  components: {
    Swiper,
    Footers,
    Scroller
  },
  created () {
    this.$store.dispatch('product/GetArticleList').then(res => {
      this.listData = res.data.list
    })
  }
}
</script>
<style lang="less" scoped>
.content {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}
.content .title {
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  color: #B1B1B1;
}
.list {
  width: 100%;
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}
.list .left {
  flex: 1;
  overflow: hidden;
}
.left .list-title {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space:nowrap;
  line-height: 30px;
  font-size: 18px;
}
.left .list-contnet {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow : hidden;
  font-size: 14px;
  line-height: 20px;
  margin-top: 20px;
}
.list .right {
  flex-basis: 100px;
  text-align: center;
}
.right img {
  width: 80%;
  height: 90px;
}
.box1 {
  height: 130px;
  position: relative;
  width: 645px;
  background: #eee;
}
.box1-item {
  width: 200px;
  height: 100px;
  background-color: #ccc;
  display:inline-block;
  margin-left: 15px;
  text-align: center;
  line-height: 100px;
  float: left;
  margin-top: 15px;
}
.box1-item img {
  width: 100%;
  height: 100%;
}
</style>
