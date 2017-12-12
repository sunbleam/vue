<template>
  <div class="content">
    <div class="nav">
      <ul>
        <li v-for="(item, k) in navData" :class="{active: currentActive == k}" @click="changeIndex(k)">
          <span>{{item}}</span>
        </li>
      </ul>
    </div>
    <component :is="currentView"></component>
  </div>
</template>
<script>
import choiceness from './listContent/choiceness'
import women from './listContent/women'
export default {
  name: 'Content',
  data () {
    return {
      currentActive: 0,
      currentView: choiceness,
      navData: ['精选', '女装', '居家家纺', '鞋包配饰', '母婴儿童']
    }
  },
  methods: {
    changeIndex (num) {
      this.currentActive = num
      switch (num) {
        case 0:
          this.currentView = choiceness
          break;
        case 1:
          this.currentView = women
          break;
      }
    }
  },
  mounted () {}
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
  height: .4rem 
  ul 
    line-height: .4rem 
    display: -webkit-flex
    li 
      -webkit-flex: 2
      @extend %allcenter
      &:nth-of-type(1) 
        -webkit-flex: 1.2
      &:nth-of-type(2) 
        -webkit-flex: 1.2
      &.active 
        span 
          color: #e30c26
          border-bottom: .02rem solid #e30c26
          height: .4rem 
          display: block
</style>