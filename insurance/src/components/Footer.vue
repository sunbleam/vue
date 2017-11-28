<template>
  <footer class="footer">
    <dl v-for="(v, k) in list" :key="k" @click="change(v.path)">
      <dt>
        <img :src="v.imgactive" alt="" v-if="bool == v.path">
        <img :src="v.img" alt="" v-else>
      </dt>
      <dd :class="{'active': bool == v.path}">{{v.text}}</dd>
    </dl>
  </footer>
</template>
<script>
export default {
  name: 'footer',
  data () {
    return {
      bool: '/',
      'list': [
        {
          'img': './static/images/icons/home.png',
          'imgactive': './static/images/icons/home-active.png',
          'text': '首页',
          'path': '/'
        },
        {
          'img': './static/images/icons/share.png',
          'imgactive': './static/images/icons/share-active.png',
          'text': '法现',
          'path': '/liulan'
        },
        {
          'img': './static/images/icons/zoom.png',
          'imgactive': './static/images/icons/zoom-active.png',
          'text': '我的',
          path: '/me'
        }
      ]
    }
  },
  methods: {
    change (path) {
      this.$router.push(path)
    }
  },
  mounted () {
    this.bool = this.$route.path
  }
}
</script>
<style lang="sass" scoped>
.footer 
  display: -webkit-flex 
  width: 100% 
  height: 50px
  dl 
    flex: 1 
    dt 
      text-align: center
      img   
        width: 30px;
        height: auto
    dd 
      text-align: center
      font-size: 14px
      margin-top: -5px
      &.active 
        color: #E96185
</style>
