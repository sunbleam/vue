<template>
  <div id="app">
    <div class="section"></div>
    <Footers />
  </div>
</template>
<script>
import Footers from '../common/Footer'
export default {
  name: 'index',
  components: {
    Footers
  }
}
</script>
<style lang="sass" scoped>
.section 
  overflow-y: scroll
  -webkit-flex: 1
</style>