<template>
  <div class="content"> 
    <div class="nav">
      <p :class="{pactive: currentIndex === -1}" @click="pchange">推荐</p>
      <div class="nav-list">
        <ul>
          <li v-for="(item, k) in navData" :key="k" :class="{active: currentIndex == k}" @click="changeIndex(k)"><span>{{item}}</span></li>
        </ul>
      </div>
      <p>></p>
    </div>
    <component :datas="data" :is="currentView"></component>
  </div>
</template>
<script>
import HomeContent from './HomeContent'
import women from './homeList/women'
import shoes from './homeList/shoes'
export default {
  name: 'Home',
  props: ['data'],
  data () {
    return {
      currentIndex: -1,
      navData: ['女装', '鞋包', '居家', '母婴儿童', '美妆', '男装'],
      currentView: HomeContent
    }
  },
  methods: {
    changeIndex (num) {
      this.currentIndex = num
      switch (num) {
        case 0:
          this.currentView = women
          break;
        case 1:
          this.currentView = shoes
          break;
      }
    },
    pchange () {
      this.currentIndex = -1
    }
  }
}
</script>
<style lang="sass" scoped>
%allcenter 
  display: -webkit-flex 
  justify-content: center 
  align-items: center 
.content 
	overflow-y: scroll
	flex: 1 
.nav 
  width: 100% 
  display: -webkit-flex 
  p 
    -webkit-flex-basis: .5rem 
    @extend %allcenter
    &.pactive 
      color: #e30c26
  .nav-list 
    -webkit-flex: 1 
    overflow-x: auto
    height: .4rem
    ul 
      width: 3.5rem 
      line-height: .4rem
      li 
        display: inline
        padding: 0 .1rem
        &.active 
          color: #e30c26
</style>