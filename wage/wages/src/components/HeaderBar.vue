<template>
  <div class="header">
    <el-col :span="12">
      <div class="info">
        <img src="https://gztdd.hrwuu.com/Public/news/img/index/index_header_login.png">
        <b>安心工资条</b>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="info-right">
        <span><i class="iconfont icon-xiaoxi"></i></span>
        <span>
          <img src="../static/img/info.jpeg">
          <b>孙金玉</b>
        </span>
        <span>
          <i class="iconfont icon-tuichu"></i>
        </span>
      </div>
    </el-col>
  </div>
</template>
<script>
  export default {
    name: 'HeaderBar'
  }
</script>
<style lang="sass" scoped>
.header 
  height: .5rem 
  background: #919191
  line-height: .5rem
  .info 
    padding-left: .3rem
    color: #FF9538
    img
      width: .24rem
      vertical-align: middle
  .info-right 
    text-align: right
    color: #fff 
    span 
      margin-right: .1rem
      b 
        color: #FF9538
      i 
        font-size: .24rem
      img 
        width: .4rem
        height: .4rem
        border-radius: 50%
        vertical-align: middle
</style>