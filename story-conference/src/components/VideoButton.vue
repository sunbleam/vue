<template>
  <div class="upload">
    <input type="file" ref="file" @change="changeFile" v-if="capture == ''" />
    <input type="file" accept="video/*" @change="changeFile" ref="file" v-else :capture="capture" />
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'VideoButton',
  props: {
    capture: {
      default: ''
    }
  },
  methods: {
    changeFile () {
      let file = this.$refs.file.files[0]
      let formData = new FormData()
      formData.append('test-upload', file)
      this.$http.post('http://39.106.70.14:3000/api/upload', formData).then(res => {
        localStorage.setItem('src', res.data.data.url)
        this.$router.replace({path: '/commitVideo'})
        // this.$router.replace({name: 'commitVideo', params: {url: res.data.data.url}})
        // this.$router.replace({path: '/commitVideo', query: {url: res.data.data.url}})
        // this.$emit('changeData', res.data.data.url)
      })
    }
  }
}
</script>
<style lang="sass" scoped>
.upload 
  background-image: linear-gradient(90deg, #46C18C 0%, #47C372 49%, #6ED552 100%)
  border-radius: 2rem
  width: 5.3rem
  height: .9rem
  text-align: center
  line-height: .9rem 
  color: #fff
  font-size: .3rem
  margin-left: 50% 
  transform: translateX(-50%)
  margin-top: .4rem
  input 
    position: absolute 
    top: 0 
    left: 0
    opacity: 0
</style>
