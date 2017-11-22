<template>
  <div class="response">
    <div class="response-img">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderImg'
}
</script>
<style lang="sass" scoped>
.response 
  width: 100% 
  height: 100% 
  position: relative
  .response-img
    width: 100% 
</style>
