<template>
  <div>
    <Tab @getTableList="getTableList"></Tab>
    <TableBar :tableData="tableData" @getTableList="getTableList"></TableBar>
  </div>
</template>
<script>
import Tab from './components/Tab'
import TableBar from './components/TableBar'
export default {
  name: 'Record',
  data () {
    return {
      tableData: [],
      filters: {}
    }
  },
  components: {
    Tab,
    TableBar
  },
  methods: {
    getTableList ({page = 1, pageSize = 2, filters}) {
      this.filters = !filters ? this.filters : filters
      this.$http.get('/api/tabList', {
        params: {
          page: page - 1,
          pageSize,
          filters: this.filters
        }
      }).then(res => {
        this.tableData = res
      })
    }
  },
  created () {
    this.getTableList({})
  }
}
</script>

<style lang="sass" scoped>

</style>
