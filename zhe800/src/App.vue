<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
li 
  list-style: none
a 
  color: #000 
  text-decoration: none
html 
  font-size: 625% 
html,body
  width: 100%;
  height: 100% 
body 
  font-size: .14rem
#app 
  width: 100% 
  height: 100% 
  display: -webkit-flex
  flex-direction: column
  overflow: hidden
</style>
