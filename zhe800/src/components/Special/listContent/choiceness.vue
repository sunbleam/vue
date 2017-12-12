<template>
  <div>
    <div class="banner">
      <img src="../../../../static/img/banner-img.jpg">
    </div>
    <List />
    <div class="title">
      限时特卖每天早9点更新
    </div>
    <SpeContent />
  </div>
</template>
<script>
import List from '../List'
import SpeContent from '../SpeContent'
export default {
  name: 'choiceness',
  components: {
    List,
    SpeContent
  }
}
</script>
<style lang="sass" scoped>
.banner 
  width: 100% 
  margin-top: .02rem
  img 
    width: 100% 
    height: auto
.title 
  width: 100% 
  text-align: center 
  line-height: .3rem 
  background: #eee
</style>