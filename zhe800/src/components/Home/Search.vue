<template>
  <div id="app">
    <header class="header">
      <span @click="changePage">&lt;</span>
      <span>
        <div class="input">
          <i class="iconfont icon-icon019"></i>
          <input type="text" placeholder="女士外套" ref="input">
        </div>
      </span>
      <span @click="searchThing">搜索</span>
    </header>
    <div class="section">
      <div class="content">
        <p>大家都在搜</p>
        <div class="list">
          <span>新人9块9</span>
          <span>今日秒杀</span>
          <span>衬衫25元</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Search',
  methods: {
    changePage () {
      this.$router.push('/')
    },
    searchThing () {
      let value = this.$refs.input.value
      if (!value) {
        value = this.$refs.input.placeholder
      }
      console.log(value)
    }
  }
}
</script>
<style lang="sass" scoped>
%allcenter 
  display: -webkit-flex 
  justify-content: center 
  align-items: center
#app
  background: #f0f0f0
.header 
  display: -webkit-flex 
  height: .4rem
  span 
    -webkit-flex: 1 
    @extend %allcenter
    &:nth-of-type(2)
      -webkit-flex: 7.5
      .input 
        width: 100% 
        height: 90%
        background: #fff
        display: -webkit-flex 
        i 
          @extend %allcenter
          -webkit-flex-basis: .5rem 
        input 
          -webkit-flex: 1
          border-width: 0
          outline: none
    &:nth-of-type(3)
      -webkit-flex: 1.5
.section 
  -webkit-flex: 1 
  overflow-y: scroll 
  .content 
    background: #fff 
    padding: .2rem 0
    p 
      text-indent: .15rem
    .list 
      margin-top: .1rem
      span 
        display: inline-block 
        padding: .05rem .1rem 
        border: .01rem solid #E60044
        color: #E60044
        margin-left: .15rem
</style>