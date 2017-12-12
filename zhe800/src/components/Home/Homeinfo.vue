<template>
  <div id="app">
    <div class="info">
      <div class="img">
        <img :src="`./static/img/content/homeinfo${homeinfo.num}.jpg`">
        <div class="img-info">
          <p>{{homeinfo.txt}}</p>
        </div>
      </div>
    </div>
    <Footers />
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import Footers from './Homeinfofooter'
export default {
  name: 'Homeinfo',
  components: {
    Footers
  },
  data () {
    return {
      homeinfo: ''
    }
  },
  methods: {
    getData () {
      axios.get(Vue.config.baseUrl + '/api/homeinfo', {params: {id: this.$route.params.id}})
          .then(res => {
            this.homeinfo = res.data
          })
    }
  },
  mounted () {
    this.getData()
  },
  beforeRouteUpdate (to, from, next) {
    this.getData()
  }
}
</script>
<style lang="sass" scoped>
.info 
  width: 100% 
  -webkit-flex: 1 
  overflow-y: scroll
  .img 
    width: 100% 
    img 
      width: 100%
    .img-info 
      p 
        font-size: .16rem 
        text-indent: .1rem
</style>