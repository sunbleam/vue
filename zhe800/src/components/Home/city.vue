<template>
  <div class="city" v-if="flag">
    <mt-index-list>
      <mt-index-section v-for="(v, k) in cityData" :index="v.province" :key="k">
        <mt-cell v-for="(item, key) in v.city" :title="item.city" :key="key">
          <p @click="select(item.city, item.cid, v.pid)"></p>
        </mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>
<script>
import bus from '../../bus'
import axios from 'axios'
import Vue from 'vue'
import { IndexList, IndexSection } from 'mint-ui'
Vue.component(IndexList.name, IndexList)
Vue.component(IndexSection.name, IndexSection)
export default {
  name: 'City',
  data () {
    return {
      flag: false,
      cityData: []
    }
  },
  methods: {
    select (cname, cid, pid) {
      this.flag = false
      bus.$emit('cityData', {cname: cname, cid: cid, pid: pid})
    }
  },
  mounted () {
    bus.$on('changeCity', data => {
      this.flag = data
    })
    axios.get(Vue.config.baseUrl + '/api/cityData')
          .then(res => {
            this.cityData = res.data.city
          })
  }
}
</script>
<style lang="sass" scoped>
.city 
  position: fixed 
  left: 0 
  top: 0 
  bottom: 0 
  right: 0 
  z-index: 999
  background: rgba(0, 0, 0, .5)
  overflow-y: scroll
  p 
    position: absolute
    top: 0 
    bottom: 0 
    left: 0 
    right: 0
</style>