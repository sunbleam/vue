<template>
  <div>
    <div class="filter" @click="changeFlag"></div>
    <div class="notice" ref="content">
      <h4 v-if="text.title">{{text.title}}</h4>
      <span @click="changeFlag">&times;</span>
      <div class="notice-text">
        <div class="wrapper" ref="wrapper">
          <div class="content">
            <template v-if="text.content instanceof Array">
              <div class="work-box">
                <div class="work" v-for="(item,key) in text.content" :key="key">
                  <h5>{{item.name}}</h5>
                  <div class="work-list" v-for="(val, index) in item.child" :key="index">
                    <cell
                      :title='val.name'
                      is-link
                      :border-intent="false"
                      :arrow-direction="currentIndex == (key + '-' + index) ? 'up' : 'down'"
                      @click.native="changeIndex(key + '-' + index)"></cell>
                    <template v-if="val.child && currentIndex == (key + '-' + index)">
                      <cell-box 
                        :border-intent="false" 
                        class="sub-item"
                        v-for="(value, ind) in val.child"
                        :key="ind"
                        >{{value.name}}</cell-box>
                    </template>
                  </div>
                </div>
              </div>
            </template>
            <template v-if="typeof text.content == 'object'">
              <div v-html="text.content.insure_notice" v-if="text.content.insure_notice"></div>
              <div v-if="text.content.main">
                <div class="main">
                  <p>主条款</p>
                  <div class="main-text" v-for="(v,k) in text.content.main" :key="k">
                    {{v.title}}
                  </div>
                </div>
                <div class="other">
                  <p>附加条款</p>
                  <div class="other-text" v-for="(v,k) in text.content.other" :key="k">
                    {{v.title}}
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              {{text.content}}
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>
<script>
import Bscroll from 'better-scroll'
import { Cell, CellBox } from 'vux'
export default {
  name: 'xuzhi',
  props: ['text'],
  data () {
    return {
      currentIndex: -1
    }
  },
  components: {
    Cell,
    CellBox
  },
  methods: {
    changeFlag () {
      this.$emit('changeFlag', false)
    },
    changeIndex (index) {
      if (this.currentIndex === index) {
        this.currentIndex = -1
      } else {
        this.currentIndex = index
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        scrollY: true,
        scrollbar: true
      })
    })
  }
}
</script>
<style lang="less" scoped>
.notice {
  position: fixed;
  top: 50%;
  bottom: 0;
  background: #fff;
  z-index: 2;
  width: 100%;
  // animation: up 1s forwards;
  h4 {
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
  }
  span {
    position: absolute;
    right: 5px;
    top: 15px;
    font-size: 40px;
    line-height: 0;
    color: #9A9A9A;
  }
  .wrapper {
    width: 100%;
    background: #fff;
    overflow: hidden;
    position: absolute;
    top: 50px;
    bottom: 0;
    .content {
      position: absolute;
      padding: 0 10px;
      top: 0;
      left: 0;
      right: 0;
    }
  }
}
.filter {
  position: fixed;
  bottom: 0;
  top: 0;
  width: 100%;
  background: #000;
  opacity: .5;
}
.work-box {
  width: 100%;
  background: #efeff4;
}
.work {
  margin-top: 10px;
  background: #fff;
  h5 {
    width: 100%;
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #eee;
    text-align: center;
  }
  .vux-cell-box {
    background: #fafafa;
    font-size: 12px;
  }
}
@keyframes up {
  from {
    bottom: -60%;
  }
  to {
    bottom: 0;
  }
}
</style>
