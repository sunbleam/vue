<template>
  <div>
    <h4>账号密码登录</h4>
    <div class="form">
      <input type="text" placeholder="请输入用户名/手机号/邮箱">
      <input type="password" placeholder="请输入密码">
      <button @click="login">登录</button>
    </div>
    <div class="info">
      <span>注册账号</span>
      <span>忘记密码</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'index',
  methods: {
    login () {
      this.$store.dispatch('login/GetLogin').then(res => {
        if (res.statusText === 'OK') {
          this.$router.replace('/')
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
h4 {
  font-size: 24px;
  font-weight: normal;
  margin-top: 50px;
  margin-left: 30px;
}
.form {
  padding: 0 30px;
  margin-top: 50px;
  input {
    width: 100%;
    height: 50px;
    border-width: 0;
    outline: none;
    border-bottom: 1px solid #ccc;
  }
  button {
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    background: #FF4774;
    border-width: 0;
    outline: none;
    margin-top: 30px;
  }
}
.info {
  padding: 0 30px;
  margin-top: 20px;
  display: flex;
  span {
    flex: 1;
    display: flex;
    font-size: 12px;
    &:nth-of-type(1) {
      justify-content: flex-start;
    }
    &:nth-of-type(2) {
      justify-content: flex-end;
    }
  }
}
</style>
