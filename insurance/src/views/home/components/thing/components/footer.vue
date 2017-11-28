<template>
  <footer class="footer">
    <div class="lianxi">
      <i>11</i>
      <span>联系客服</span>
    </div>
    <div class="price">
      {{price}}
    </div>
    <div class="liji" @click="insure">
      立即投保
    </div>
  </footer>
</template>
<script>
export default {
  name: 'footer',
  props: {
    price: {
      default: ''
    }
  },
  methods: {
    insure () {
      let filter = document.querySelector('.filter-insure')
      let content = document.querySelector('.content-insure')
      filter.classList.remove('hide-opacity')
      content.classList.remove('hide')
      filter.classList.add('show-opacity')
      content.classList.add('show')
    }
  }
}
</script>
<style lang="less" scoped>
.footer {
  display: -webkit-flex;
  height: 50px;
  color: #fff;
  .lianxi {
    flex: 1;
    background: #333;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #fff;
    font-size: 12px;
    text-align: center;
    i {
      flex: 2
    }
    span {
      flex: 1
    }
  }
  .price {
    flex: 2.5;
    line-height: 50px;
    background: #333;
    text-indent: 10px;
  }
  .liji {
    flex: 2;
    line-height: 50px;
    text-align: center;
    background: #FE4773;
  }
}
</style>
