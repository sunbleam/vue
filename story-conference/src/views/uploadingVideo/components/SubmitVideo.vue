<template>
  <div class="content">
    <div class="input">
      <input type="text" placeholder="请输入视屏名称（在读年级+姓名" v-model="info" @keyup="keyup" ref="ipt">
      <span>不超过20个字</span>
    </div>
    <div class="commit">
      <buttons @click.native="submit">提交</buttons>
      <span>重新录制</span>
    </div>
  </div>
</template>
<script>
import buttons from '@/components/Button.vue'
import successPage from '@/views/uploadingVideo/components/SubmitSuccess'
export default {
  name: 'SubmitVideo',
  data () {
    return {
      info: ''
    }
  },
  components: {
    buttons
  },
  methods: {
    submit () {
      this.$http.post('http://39.106.70.14:3000/api/addVideo', {
        name: this.info,
        video_src: localStorage.getItem('src')
      }).then((res) => {
        if (res.statusText === 'OK') {
          this.$emit('changePage', {
            page: successPage,
            info: this.info})
          setTimeout(() => {
            this.$router.push('/comment')
          }, 5000)
        }
      })
    },
    keyup () {
      if (this.info.length > 20) {
        this.$refs.ipt.blur()
        console.log('不能超过20个字')
      }
    }
  }
}
</script>
<style lang="sass" sopced>
.input 
  margin: 0 .2rem
  height: 1rem
  border-bottom: .01rem solid #E0E0E0
  position: relative
  input 
    width: 100%
    height: 50%
    border-width: 0
    outline: none 
    margin-top: -1rem
  span 
    position: absolute 
    right: .1rem 
    bottom: .1rem
    color: #D0D0D0
.commit 
  position: absolute
  bottom: 1rem
  left: 50% 
  text-align: center
  transform: translateX(-50%)
  span
    color: #46C184
    font-size: .14rem
    margin-top: .4rem
    display: block
.video-sub-controller 
  bottom: 1rem
</style>
