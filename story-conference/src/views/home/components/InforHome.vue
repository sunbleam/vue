<template>
  <div class="info">
    <div class="img">
      <img src="../../../static/img/21.jpg" alt="">
      <div class="name">
        <h4>周嘉骏</h4>
        <p>5岁</p>
      </div>
    </div>
    <div class="people">
      <p>1640人</p>
      <p>已参加</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InforHome'
}
</script>
<style lang="sass" scoped>
.info
  margin: 0 .2rem
  padding: .4rem 0
  border-bottom: .01rem solid #E0E0E0
  display: -webkit-flex 
  .img 
    -webkit-flex: 1 
    display: -webkit-flex 
    img 
      width: .8rem 
      height: .8rem 
      border-radius: 50%
    .name 
      margin-left: .1rem
      display: -webkit-flex 
      flex-direction: column
      margin-top: .1rem
      h4 
        -webkit-flex: 1
        font-family: PingFangSC-Regular
        font-size: .4rem
        color: #454545
        letter-spacing: 0
        line-height: .2rem
      p 
        -webkit-flex: 1
        width: .56rem 
        height: .32rem
        background: #FD911F
        border-radius: 50px
        font-family: PingFangSC-Regular
        font-size: .2rem
        color: #FFFFFF
        line-height: .32rem
        text-align: center
        margin-top: .1rem
  .people 
    -webkit-flex-basis: .9rem
    font-family: PingFangSC-Regular
    font-size: .28rem
    color: #333333
    letter-spacing: 0
    p 
      line-height: .28rem
      margin-top: .1rem
</style>
