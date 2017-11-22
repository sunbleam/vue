<template>
  <div>
    <div class="info">
      <p>感谢您对故事大赛的支持，</p>
      <p>点击下方查阅您的分数和老师独家点评。</p>
    </div>
    <buttons @click.native="watch">查看老师点评</buttons>
  </div>
</template>
<script>
import buttons from '@/components/Button'
import watch from './Watch'
export default {
  name: 'search',
  components: {
    buttons
  },
  methods: {
    watch () {
      this.$emit('changePage', watch)
    }
  }
}
</script>
<style lang="sass" scoped>
.info
  margin-top: 1rem
  p 
    line-height: 2em
    color: #454545
    font-size: .16rem
</style>
