<template>
  <div class="list">
    <dl v-for="item in listData">
      <dt><img :src="`./static/img/list/specail/list${item.id}.jpg`"></dt>
      <dd>{{item.txt}}</dd>
    </dl>
  </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import { InfiniteScroll } from 'mint-ui'
Vue.use(InfiniteScroll);
export default {
  name: 'List',
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
  padding: .08rem 0
  dl 
    -webkit-flex: 1 
    @extend %allcenter 
    flex-direction: column
    dt 
      @extend %allcenter
      img 
        width: 60%
    dd 
      font-size: .12rem
      margin-top: .1rem
</style>