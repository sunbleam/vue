<template>
    <div 
      class="shop"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <div class="img" v-for="(v, k) in data" :key="k">
        <router-link :to="`/homeinfo/${v.id}`">
          <img  :src="`./static/img/content/speimg${v.count}.webp`">
        </router-link>
      </div>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
export default {
  name: 'Content',
  data () {
    return {
      data: []
    }
  },
  methods: {
    loadMore () {
      this.loading = true
      setTimeout(() => {
        let last = this.data[this.data.length - 1]
        for (let i = 1; i <= 10; i++) {
          this.data.push(last + i);
        }
        this.loading = false;
      }, 2500);
    }
  },
  mounted () {
    axios.get(Vue.config.baseUrl + '/api/speContentData')
          .then(res => {
            this.data = res.data.num
          })
  }
}
</script>
<style lang="sass" scoped>
%allcenter 
  display: -webkit-flex 
  justify-content: center 
  align-items: center 
.shop 
  width: 100%
  display: -webkit-flex 
  flex-wrap: wrap
  .img 
    display: block
    flex-basis: 49% 
    margin-left: .5%
    img 
      width: 100%
      height: auto
</style>