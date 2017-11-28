<template>
  <div class="dialog-box" v-show="flag" ref="box">
    <div class="title">
      <span @click="cacel">取消</span>
      <span @click="cacel">确定</span>
    </div>
    <picker :data='data' v-model='value'></picker>
  </div>
</template>
<script>
import { Picker } from 'vux'
export default {
  name: 'dialog',
  props: {
    flag: {
      default: false
    },
    copies: {
      default: {}
    }
  },
  data () {
    let data = []
    let {
      min,
      max,
      step
    } = this.copies
    for (var i = min; i <= max; i += step) {
      data.push({
        name: i + this.copies.unit,
        value: i
      })
    }
    return {
      value: ['1'],
      data: [data]
    }
  },
  components: {
    Picker
  },
  methods: {
    cacel () {
      this.$emit('input', this.value[0] + this.copies.unit)
      this.$refs.box.classList.remove('show')
      this.$refs.box.classList.add('hide')
    }
  }
}
</script>
<style lang="less" scoped>
.dialog-box {
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 100;
  .title {
    height: 50px;
    line-height: 50px;
    display: flex;
    span {
      flex: 1;
      &:nth-of-type(1) {
        text-indent: 10px;
        color: #ccc;
      }
      &:nth-of-type(2) {
        text-align: right;
        padding-right: 10px;
        color: orange;
      }
    }
  }
}
</style>
