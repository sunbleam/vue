<template>
  <div>
    <header class="header">
      <span><img src="../../assets/img/search-logo-new.png"></span>
      <span>
        <div class="form">
          <input type="text" placeholder="女士外套" @focus="focus" ref="input">
        </div>
      </span>
      <span @click="changeCity"><img src="../../assets/img/category-icon.png"></span>
    </header>
    <City />
  </div>
</template>
<script>
import City from './city'
import bus from '../../bus'
export default {
  name: 'Header',
  components: {
    City
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    focus () {
      this.$router.push('/search')
    },
    changeCity () {
      bus.$emit('changeCity', 'city')
    }
  },
  mounted () {
    bus.$on('cityData', data => {
      this.$emit('cityData', data)
    })
  }
}
</script>
<style lang="sass" scoped>
%allcenter 
  display: -webkit-flex 
  justify-content: center 
  align-items: center
.header 
    width: 100%
    height: .5rem 
    display: -webkit-flex 
    span 
        -webkit-flex: 1
        @extend %allcenter
        img 
          width: 80%
          max-height: .3rem
        &:nth-of-type(2)
          -webkit-flex: 4
          background: #eee
          height: .3rem
          margin-top: .1rem
          border-radius: .25rem
          overflow: hidden
          .form 
            width: 100% 
            height: 100%
            input 
              width: 100% 
              height: 100%
              border-width: 0 
              outline: none
              background: transparent
              text-align: center
        &:nth-of-type(3)
          img 
            width: 40%
</style>