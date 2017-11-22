<template>
  <div class="tel">
    <input type="text" placeholder="请输入姓名" v-model="user.username">
    <input type="password" placeholder="请输入密码" v-model="user.password">
  </div>
</template>
<script>
export default {
  name: 'input',
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  }
}
</script>
<style lang="sass" scoped>
 .tel 
  width: 100%
  input 
    width: 5.32rem
    height: .6rem
    margin-left: .5rem
    margin-top: .3rem
    border-width: 0 
    outline: none
    border-bottom: .01rem solid #ccc
</style>
