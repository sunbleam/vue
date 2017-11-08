<template>
<div>
  <chart :options="polar"></chart>
  <el-table
    :data="tableData.data"
    style="width: 100%"
    height=300
    :header-row-style="{background: '#f7bb50',color: '#fff'}"
  >
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="所属店铺">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="商品 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="商品分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="商品描述">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      prop="cname">
    </el-table-column>
    <el-table-column
      label="手机号"
      prop="tel">
    </el-table-column>
    <el-table-column
      label="员工状态"
      prop="status"
      :formatter="setStatus"
    >
    </el-table-column>
    <el-table-column
      label="部门"
      prop="team">
    </el-table-column>
    <el-table-column
      label="操作"
    >
    <template slot-scope="scope">
      <el-button
        size="mini"
      >重置密码</el-button>
      <el-button
        size="mini"
        @click.native="remove(scope.row, '1')"
      >离职</el-button>
      <el-button
        size="mini"
        @click.native="remove(scope.row, '2')"
      >开除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage4"
    :page-sizes="[2, 4, 6]"
    layout="total, sizes, prev, pager, next, jumper"
    :page-size="2"
    :total="tableData.count">
  </el-pagination>
</div>
</template>
<script>
export default {
  name: 'TableBar',
  props: ['tableData'],
  data () {
    let data = []
    for (let i = 0; i <= 360; i++) {
      let t = i / 180 * Math.PI
      let r = Math.sin(2 * t) * Math.cos(2 * t)
      data.push([r, i])
    }
    return {
      currentPage4: 1,
      pageSize: 2,
      polar: {
        title: {
          text: '极坐标双数值轴'
        },
        legend: {
          data: ['line']
        },
        polar: {
          center: ['50%', '54%']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: 'value',
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            showSymbol: false,
            data: data
          }
        ],
        animationDuration: 2000
      }
    }
  },
  methods: {
    setStatus (...rest) {
      let statusText = ['在职', '离职', '开除']
      return statusText[rest[2]]
    },
    handleSizeChange (val) {
      this.pageSize = val
      this.$emit('getTableList', {
        pageSize: this.pageSize
      })
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      this.$emit('getTableList', {
        page: val
      })
      console.log(`当前页: ${val}`)
    },
    remove (item, status) {
      this.$http.post('/api/updataList', {
        status,
        id: item.id
      }).then(res => {
        item.status = status
      })
    }
  }
}
</script>
<style lang="sass" scoped>
.demo-table-expand 
  font-size: 0

.demo-table-expand label 
  width: 90px
  color: #99a9bf

.demo-table-expand .el-form-item 
  margin-right: 0
  margin-bottom: 0
  width: 50%
.el-table 
  margin-top: .2rem
  height: 100%
.echarts
  height: 300px
</style>
