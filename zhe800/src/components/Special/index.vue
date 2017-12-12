<template>
    <div id="app">
        <Headers />
        <Contents />
        <Footers />
    </div>
</template>
<script>
import Headers from './Header'
import Contents from './Content'
import Footers from '../common/Footer'
export default {
  name: 'index',
  components: {
    Headers,
    Contents,
    Footers
  }
}
</script>
<style lang="sass" scoped>

</style>