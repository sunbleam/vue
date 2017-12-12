<template>
  <div class="list-content">
    <Slider />
    <div class="list">
      <dl v-for="item in listData">
        <dt><img :src="`./static/img/list/list${item.id}.png`"></dt>
      <dd>{{item.txt}}</dd>
      </dl>
    </div>
    <div class="info">
      <img src="../../assets/img/info.png">
    </div>
    <div class="title">
      限时特卖每天早9点更新
    </div>
    <ContentHome :city="datas"></ContentHome>
  </div>
</template>
<script>
import Slider from './Slider'
import ContentHome from './ContentHome'
import axios from 'axios'
import Vue from 'vue'
export default {
  name: 'HomeContent',
  props: ['datas'],
  components: {
    Slider,
    ContentHome
  },
  data () {
    return {
      listData: []
    }
  },
  mounted () {
    axios.get(Vue.config.baseUrl + '/api/spelistData')
          .then(res => {
            this.listData = res.data.list
          })
  }
}
</script>
<style lang="sass" scoped>
%allcenter 
  display: -webkit-flex 
  justify-content: center 
  align-items: center 
.list 
  width: 100% 
  display: -webkit-flex 
  padding: .12rem 0
  border-bottom: .01rem solid #eee
  dl 
    -webkit-flex: 1 
    @extend %allcenter 
    flex-direction: column
    dt 
      @extend %allcenter
      img 
        width: 70%
    dd 
      font-size: .12rem
      margin-top: .1rem
.info 
  width: 100% 
  img 
    width: 100% 
    height: auto
    display: block
.title 
  width: 100% 
  text-align: center 
  line-height: .3rem 
  background: #eee
</style>