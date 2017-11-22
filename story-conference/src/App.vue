<template>
  <div id="app">
    <router-view/>
    <div id="login"></div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
#app 
  position: absolute 
  width: 100% 
  top: 0 
  bottom: 0 
  overflow-x: hiddden
</style>
