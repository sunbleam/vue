<template>
  <div class="box">
    <div class="filter-insure" @click="close" ref="filter-insure"></div>
    <div class="content-insure" ref="content-insure">
      <div class="title">
        <h4>{{array.product.title}}</h4>
        <img :src="array.company.logo" alt="">
      </div>
      <div class="content-list">
        <div class="age" v-for="(v,k) in array.genes" :key="k">
          <div class="age-left">{{v.label}}：</div>
          <div class="age-right">
            <template v-if="v.type == 'fixed'">
              {{v.value}}
            </template>
            <template v-if="v.type=='fixed.jobs'">
              {{v.value}}<b class="work" @click="selectWork">查询职业</b>
            </template>
            <template v-else-if="v.type=='list'">
              <template v-if="JSON.parse(v.options).list">
                <span 
                  v-for="(item,index) in JSON.parse(v.options).list" 
                  :key="index"
                  :class="{active: 0 == index}"
                  @click="changeIndex($event, v)"
                >
                  {{item.value}}
                </span>
              </template>
              <template v-else-if="JSON.parse(v.options).step">
                <label @click="dialog">{{v.value}}</label>
                <dialogs :flag="flag" :copies="JSON.parse(v.options).step" v-model="v.value"/>
              </template>
            </template>
            <template v-else-if="v.type=='list.days'">
              <select name="" id="" @change="change($event, v)" ref="select">
                <option 
                  v-for="(v,k) in JSON.parse(v.options).list"
                  :key="k"
                >
                  {{v.value}}
                </option>
              </select>
            </template>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="price">
          价格：<span>￥{{array.product.price}}</span>
        </div>
        <div class="button" @click="right">立即投保</div>
      </div>
      <notice v-if="flg" :text="text" @changeFlag="changeFlag"/>
      <Heath v-if="flgHeath" :text="text"/>
    </div>
  </div>
</template>
<script>
import notice from './notice'
import dialogs from './dialog'
import Heath from '@/components/Heath'
export default {
  name: 'insure',
  props: {
    array: {
      default: {}
    }
  },
  data () {
    return {
      value: '',
      flag: false,
      flg: false,
      flgHeath: false,
      text: {}
    }
  },
  components: {
    dialogs,
    notice,
    Heath
  },
  methods: {
    close () {
      let filter = this.$refs['filter-insure']
      let content = this.$refs['content-insure']
      filter.classList.add('hide-opacity')
      content.classList.add('hide')
      filter.classList.remove('show-opacity')
      content.classList.remove('show')
    },
    dialog () {
      this.flag = true
      let box = document.querySelector('.dialog-box')
      box.classList.remove('hide')
      box.classList.add('show')
    },
    changeIndex (e, item) {
      var span = e.path[1].getElementsByTagName('span')
      for (let i = 0; i < span.length; i++) {
        span[i].classList.remove('active')
      }
      e.target.classList.add('active')
      item.value = e.target.innerText
    },
    change (e, v) {
      v.value = e.target.value
    },
    getMessage () {
      let message = {}
      this.array.genes.forEach(item => {
        this.$set(message, item.gene_key, item.value)
        this.$watch(() => {
          return item.value
        }, () => {
          console.log(111)
          this.getMessage()
        })
      })
      this.$store.dispatch('product/GetTrialSubmit', {
        product_id: this.array.product.product_id,
        genes: message
      }).then(res => {
        this.array.product.price = res.data.price
      })
    },
    selectWork () {
      this.$store.dispatch('product/GetInsuredJob', {
        product_id: this.array.product.product_id
      }).then(res => {
        this.text = {title: '职业查询', content: res.data}
        this.flg = true
      })
    },
    changeFlag (val) {
      this.flg = val
    },
    right () {
      let needHeath = this.array.options.need_health
      if (needHeath) {
        this.$store.dispatch('product/GetHealthState', {
          product_id: this.array.product.product_id,
          genes: ''
        }).then(res => {
          this.flgHeath = true
          this.text = {data: res.data, array: this.array}
        })
      } else {
        this.$store.dispatch('product/GetInsureAttr', {
          product_id: this.array.product.product_id
        }).then(res => {
          this.flgHeath = false
          this.$router.push({name: 'personalInfo', params: {data: res.data, array: this.array}})
        })
      }
    }
  },
  created () {
    this.getMessage()
  }
}
</script>
<style lang="less" scoped>
.filter-insure {
  position: fixed;
  top: 0;
  bottom: 50px;
  width: 100%;
  background:#000;
  opacity: 0;
  z-index: -9;
}
.content-insure {
  position: fixed;
  bottom: -150%;
  background: #fff;
  width: 100%;
  z-index: 100;
  .title {
    height: 50px;
    width: 100%;
    border-bottom: 1px solid #eee;
    h4 {
      line-height: 50px;
      text-indent: 10px;
      float: left;
    }
    img {
      float: right;
      width: 100px;
      margin-top: 5px;
    }
  }
  .footer {
    width: 100%;
    display: -webkit-flex;
    height: 45px;
    .price {
      flex: 2;
      line-height: 45px;
      color: #FE4673;
      text-indent: 10px;
    }
    .button {
      flex: 1;
      background: #FE4673;
      color: #fff;
      text-align: center;
      line-height: 45px;
    }
  }
  .content-list {
    width: 100%;
    .age {
      display: flex;
      padding: 10px 0;
      border-bottom: 1px solid #eee;
      .age-left {
        flex-basis: 100px;
        text-indent: 10px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: auto;
      }
      .age-right {
        flex: 1;
        position: relative;
        span {
          display: inline-block;
          padding: 3px 8px;
          border: 1px solid #eee;
          font-size: 12px;
          margin-right: 10px;
          margin-bottom: 3px;
        }
      }
    }
  }
}
.active {
  background:#FE4673;
  color: #fff;
}
.work {
  color: #FE4673;
  margin-left: 5px;
  font-size: 12px;
}
</style>
