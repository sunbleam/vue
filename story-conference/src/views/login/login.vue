<template>
  <div class="layer" :class="{layer1: type == 1, layer2: type== 2, layer3: type== 3}">
    <template v-if="type == 1">
      <div class='layer-mask layer-fadeIn'></div>
      <div class='layer-main layer-scaleIn'>
        <div class='layer-title'> {{title}}</div>
        <div class='layer-content' ref="box">{{content}}</div>
        <template v-if="typeof btns == 'string'">
          <div class="layer-btns">
            <buttons @click.native="success">登录</buttons>
          </div>
        </template>
        <template v-else>
          <div class="layer-btns">
            <buttons @click.native="success">登录</buttons>
          </div>
          <div class="layer-btns">
            <buttons @click.native="cancel">取消</buttons>
          </div>
        </template>
      </div>
    </template>
    <template v-else-if="type == 2">
      <div class='layer-msg layer-fadeIn'>{{content}}</div>
    </template>
    <template v-else-if="type == 3">
      <div class='layer-mask layer-fadeIn'></div>
      <div class='layer-loading layer-fadeIn'></div>
    </template>
  </div>
</template>
<script>
import Vue from 'vue'
import buttons from '@/components/Button'
export default {
  name: 'login',
  data () {
    return {
      type: 2,
      title: '标题',
      content: '',
      time: 0,
      btns: '',
      okCallback: function () {},
      cancelCallback: function () {}
    }
  },
  components: {
    buttons
  },
  mounted () {
    if (typeof this.content === 'object') {
      let Cm = Vue.extend(this.content)
      let newCm = new Cm()
      let box = this.$refs.box
      box.innerHTML = ''
      box.appendChild(newCm.$mount().$el)
    }
    if (this.time !== 0) {
      setTimeout(() => {
        this.close()
      }, 5000)
    }
  },
  methods: {
    close () {
      this.$destroy()
      document.body.removeChild(this.$el)
    },
    success () {
      this.okCallback()
      this.close()
    },
    cancel () {
      this.cancelCallback()
      this.close()
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
