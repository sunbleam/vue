<template>
  <div class="msg">
    <div class="msg-box">
      <p
        v-for="(v,k) in massage"
        :key="k"
      >
        <b></b>
        <span>{{v}}</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'msg',
  props: {
    massage: {
      default: []
    }
  }
}
</script>
<style lang="less" scoped>
.msg {
  width: 100%;
  height: 40px;
  line-height: 40px;
  overflow: auto;
  .msg-box {
    width: 200%;
    p {
      flex: 1;
      display: inline-block;
      margin-left: 10px;
      b {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: #ff4774;
        display: inline-block;
      }
    }
  }
}
</style>
