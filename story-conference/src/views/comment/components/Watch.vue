<template>
  <div>
    <div class="title">
      记录我们绚丽的童年 蒋大为 小学五年级 
    </div>
    <div class="info">
      <p><span>宝贝分数：</span><b>98分</b></p>
      <div class="content">
        <span>老师评语：</span>
        <div class="content-info">
          蒋宝宝，你的童年记录太赞了，老师为你感到高兴。不过在自己语言表达的逻蒋宝宝，你的童年记录太赞了，老师为你感到高兴。不过在自己语言表达的逻逻辑顺序，可以在思考后再表达。
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'watch'
}
</script>
<style lang="sass" scoped>
.title 
  width: 6.5rem
  color: #333
  font-size: .16rem 
  height: 1rem 
  border-bottom: .01rem solid #eee
  line-height: 1rem
  text-align: left
  margin: 0 auto
.info 
  width: 6.5rem 
  text-align: left
  margin: 0 auto
  p 
    margin-top: .3rem
    span 
      color: #999
      font-size: .15rem 
    b 
      color: #F25555
  .content 
    display: -webkit-flex 
    margin-top: .3rem
    span 
      -webkit-flex-basis: 1.5rem
      color: #999
      font-size: .15rem 
    .content-info 
      -webkit-flex: 1 
      line-height: 2em  
      color: #333
</style>
