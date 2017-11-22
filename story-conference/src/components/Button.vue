<template>
  <div class="button">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Button'
}
</script>
<style lang="sass" scoped>
.button 
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
</style>
