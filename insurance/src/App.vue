<template>
  <div id="app">
    <keep-alive include="home">
      <router-view></router-view>
    </keep-alive>
    <loading v-model="isLoading"></loading>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Loading } from 'vux'
export default {
  name: 'app',
  components: {
    Loading
  },
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading
    })
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import './assets/animation.css';
body,html,#app {
  width: 100%;
  height: 100%;
}
body {
  overflow: hidden
}
#app {
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
  overflow-y: scroll;
}
// body {
//   background-color: #fbf9fe;
// }
</style>
