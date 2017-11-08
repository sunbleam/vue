<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-input v-model="input" placeholder="搜索姓名、手机号" size="mini">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-select v-model="team.status" placeholder="请选择部门" size="mini">
          <el-option label="全部" value=""></el-option>
          <el-option label="在职" value="0"></el-option>
          <el-option label="离职" value="1"></el-option>
          <el-option label="开除" value="2"></el-option>
        </el-select>
        <el-button type="primary" size="mini" @click.native="select">查询</el-button>
      </el-col>
      <el-col :span="12">
        <el-button type="primary" plain size="mini" @click="dialogFormVisible = true">添加员工</el-button>
      </el-col>
    </el-row>
    <el-dialog title="添加成员" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.cname" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="公司名" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="部门" :label-width="formLabelWidth">
          <el-select v-model="form.team" placeholder="请选择部门">
            <el-option label="技术部" value="技术部"></el-option>
            <el-option label="人事部" value="人事部"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="职位" :label-width="formLabelWidth">
          <el-select v-model="form.position" placeholder="请选择职位">
            <el-option label="前端" value="前端"></el-option>
            <el-option label="JAVA工程师" value="JAVA工程师"></el-option>
            <el-option label="php工程师" value="php工程师"></el-option>
            <el-option label="产品经理" value="产品经理"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="薪资" :label-width="formLabelWidth">
          <el-input v-model="form.money" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="form.tel" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addData">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'Tab',
  data () {
    return {
      input: '',
      dialogFormVisible: false,
      dialogTableVisible: false,
      form: {
        name: '',
        cname: '',
        team: '',
        position: '',
        money: '',
        tel: ''
      },
      team: {
        status: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    addData () {
      this.$http.post('/api/addStaff', this.form).then(res => {
        this.$emit('getTableList', {})
      })
      this.dialogFormVisible = false
    },
    select () {
      this.$emit('getTableList', {
        filters: this.team
      })
    }
  }
}
</script>
<style lang="sass" scoped>
div 
  margin-top: .05rem
.el-input
  width: 2rem
</style>
