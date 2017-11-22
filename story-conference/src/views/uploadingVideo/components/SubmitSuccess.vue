<template>
  <div>
    <div class="title">
      记录我们绚丽的童年 {{info}}
    </div>
    <div class="info">
      <img src="../../../static/img/成功.png" alt="">
      <p>上传成功！</p>
      <p>活动初赛结果将于11月13日公布，敬请期待！</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SubmitSuccess',
  props: ['info']
}
</script>
<style lang="sass" scoped>
.title 
  width: 6.7rem 
  padding: 3% 0 
  border-bottom: .01rem solid #E0E0E0
  margin: 0 auto
  color: #333333 
  font-size: .16rem
.info 
  width: 100% 
  text-align: center
  margin-top: 30%
  p 
    color: #454545 
    font-size: .14rem
    line-height: 2em
</style>
