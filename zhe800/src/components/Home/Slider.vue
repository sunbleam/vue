<template>
    <div class="banner">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(v, k) in bannerImg" :key="k">
          <img :src="v.img.img">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import Vue from 'vue'
import axios from 'axios'
export default {
  name: 'Slider',
  data () {
    return {
      bannerImg: [],
      swiperOption: {
        notNextTick: true,
        autoplay: 3000,
        initialSlide: 1,
        effect: 'coverflow',
        grabCursor: true,
        setWrapperSize: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true
      }
    }
  },
  mounted () {
    axios.get(Vue.config.baseUrl + '/api/sliderData').then(res => {
      this.bannerImg = res.data.slider;
    })
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style lang="sass" scoped>
img
  width: 100%
  height: auto
  display: block
</style>