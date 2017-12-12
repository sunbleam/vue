<template>
  <div id="app">
    <Headers @cityData="cityChange"></Headers>
    <Homes :data="city"></Homes>
    <Footers />
  </div>
</template>

<script>
import Headers from './Header'
import Homes from './Home'
import Footers from '../common/Footer'
export default {
  name: 'app',
  data () {
    return {
      city: {cname: '北京'}
    }
  },
  components: {
    Headers,
    Homes,
    Footers
  },
  methods: {
    cityChange (data) {
      this.city = data
    }
  }
}
</script>

<style lang="sass">

</style>
