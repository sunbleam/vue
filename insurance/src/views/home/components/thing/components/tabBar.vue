<template>
  <div class="classify">
    <p
      v-for="(v,k) in tab"
      :key="k"
      :class="{active: current == v.product_id}"
      @click="fn(v.product_id)"
    >{{v.plan_title}}</p>
  </div>
</template>
<script>
export default {
  name: 'tabBar',
  props: {
    tab: {
      default: []
    }
  },
  data () {
    return {
      current: this.$route.params.id
    }
  },
  methods: {
    fn (productId) {
      this.current = productId
      this.$emit('classify', productId)
    }
  }
}
</script>
<style lang="less" scoped>
.classify {
  width: 100%;
  height: 50px;
  display: -webkit-flex;
  p {
    flex-basis: 100px;
    text-align: center;
    line-height: 50px;
    &.active {
      border-bottom: 1px solid #ff4774;
      color: #ff4774;
    }
  }
}
</style>
