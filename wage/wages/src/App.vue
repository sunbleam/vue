<template>
  <div id="app">
    <template v-if="$route.path !== '/login'">
      <HeaderBar />
      <Contents />
    </template>
    <template v-if="$route.path === '/login'">
      <router-view ></router-view>
    </template>
  </div>
</template>

<script>
import './static/css/reset.css'
import './static/fonts/iconfont.css'
import HeaderBar from '@/components/HeaderBar'
import Contents from '@/components/Content'
export default {
  name: 'app',
  components: {
    HeaderBar,
    Contents
  }
}
</script>

<style lang="sass">
#app
  position: fixed
  top: 0 
  bottom: 0 
  left: 0 
  right: 0
</style>
