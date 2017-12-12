<template>
  <div class="text">
    <ul class="mater-list">
        <li v-for="(item, k) in list" :key="k" @click="clickIndex(k)" :class="{active: index == k}">
          <span>{{item.text}}</span>
        </li>
    </ul>
    <component :is="currentView" :citys="city"></component>
  </div>
</template>
<script>
import Listcontent from './Listcontent'
import bus from '../../bus'
export default {
  name: 'Content',
  props: ['city'],
  components: {
    Listcontent
  },
  data () {
    return {
      index: 0,
      currentView: Listcontent,
      list: [{id: 0, text: '热卖爆款'}, {id: 1, text: '热门品牌'}]
    }
  },
  methods: {
    clickIndex (num) {
      this.index = num;
      bus.$emit('changeIndex', num)
    }
  }
}
</script>
<style lang="sass" scoped>
.text 
  width: 100% 
  background: #eee
.mater-list
  width: 99%
  background: #fff
  display: -webkit-flex
  line-height: .4rem 
  margin-left: .8%
  li 
    -webkit-flex: 1 
    text-align: center
    &.active 
      span
        color: #FF4545
        border-bottom: .02rem solid #FF4545
</style>