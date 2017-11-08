<template>
  <div>
    <el-form status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="账号" prop="pass">
        <el-input type="text" placeholder="请输入姓名" v-model="user.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="checkPass">
        <el-input type="password" placeholder="请输入密码" v-model="user.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="button" @click="loginDo">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import rules from '@/mock/data/rules'
import router, {getRules, routerArr} from '@/router/index'
export default {
  name: 'login',
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    loginDo () {
      localStorage.setItem('user', JSON.stringify(this.user))
      this.$router.replace('/home')
      // this.$http.post('/api/login', this.user).then(res => {
      //   console.log(res)
      //   this.$router.replace('/home')
      // })
      this.$http.post('/api/login', this.user).then(res => {
        let type = res.data
        let arr = []
        localStorage.setItem('type', type)
        for (let item of rules) {
          if (item.type === type) {
            arr.push(item)
            router.options.routes = [...router.options.routes, ...getRules(arr, routerArr)]
          }
        }
      })
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
