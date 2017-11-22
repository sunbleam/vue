<template>
  <div class="header">
    <video :src="'http://39.106.70.14:3000/' + src" controls></video>
  </div>
</template>
<script>
export default {
  name: 'Video',
  data () {
    return {
      src: localStorage.getItem('src')
    }
  }
}
</script>
<style lang="sass" scoped>
.header 
  width: 100% 
  max-height: 6rem
  video 
    width: 100%
</style>
