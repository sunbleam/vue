<template>
  <div>
    <!-- <Videos></Videos> -->
    <vue-video ref="video1" :options="videoOptions"></vue-video>
      <!-- <my-video :sources="video.sources" :options="video.options"></my-video> -->
    <component :is="currentView" @changePage="changePage" :info="info"></component>
    </div>
  </div>
</template>
<script>
// import Videos from '@/components/Video'
import VueVideo from 'vue-video-module'
// import myVideo from 'vue-video'
import submitVideo from '@/views/uploadingVideo/components/SubmitVideo'
export default {
  name: 'CommitVideo',
  data () {
    return {
      currentView: submitVideo,
      info: '',
      videoOptions: {
        src: 'http://39.106.70.14:3000/' + localStorage.getItem('src'),
        controlBar: true,
        spinner: 'circles',
        fullscreen: true
      }
      // video: {
      //   sources: [{
      //     src: 'http://39.106.70.14:3000/' + localStorage.getItem('src')
      //   }],
      //   options: {
      //     autoplay: false,
      //     volume: 0.6
      //   }
      // }
    }
  },
  components: {
    VueVideo
  },
  methods: {
    changePage (page) {
      this.currentView = page.page
      this.info = page.info
    }
  }
}
</script>
<style lang="sass" scoped>
.content 
  position: absolute 
  top: 6rem
  bottom: 0 
  width: 100% 
</style>
