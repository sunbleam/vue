<template>
  <div id="app">
    <template v-if="array.product">
      <div class="main">
        <div class="img">
          <img :src="array.product.cover" alt="">
        </div>
        <div class="info">
          <div class="title">
            <h4>{{array.product.title}}</h4>
            <div class="img">
              <img :src="array.company.logo" alt="">
            </div>
          </div>
          <div class="price">
            <div class="money">￥<b>{{price}}</b></div>
            <div class="sela">已售<span>{{array.product.sale_num}}</span></div>
          </div>
          <div class="msg">
            <span v-for="(v,k) in array.genes" :key="k" v-if="v.label=='承保年龄'">{{v.label}}：{{v.value}} |</span>
            <span v-for="(v,k) in array.genes" :key="k" v-if="v.label=='保障期限'">{{v.label}}：{{v.value}}</span>
          </div>
        </div>
        <div class="grey">
          <msg :massage="array.product.features"/>
          <div class="warn">
            右上角分享保险，即可获得1张满保险优惠券
          </div>
        </div>
        <tabBar 
          v-if="array.plan_list.length != 1"
          :tab="array.plan_list"
          @classify="classify"/>
        <cell 
          v-for="(v,k) in array.items" 
          :key="k" 
          :title="v.label" 
          :value="v.value" 
          is-link 
          @click.native="changeContent({title:v.label, content:v.description})"
        ></cell>
        <div class="more">
          更多详情，请阅读<span @click="changeContent({title: '投保须知', content: array.data})">《投保须知》</span>和<span @click="changeTiao(array.data.product_id)">《保险条款》</span>
        </div>
      </div>
      <footers :price="array.product.price"/>
      <notice v-if="flag" :text="text" @changeFlag="changeFlag"/>
      <insure :array="array" ref="insure"/>
    </template>
  </div>
</template>
<script>
import { Group, Cell } from 'vux'
import footers from './components/footer'
import notice from './components/notice'
import tabBar from './components/tabBar'
import msg from './components/msg'
import insure from './components/insure'
export default {
  name: 'index',
  data () {
    return {
      array: {},
      flag: false,
      bool: false,
      text: '',
      price: ''
    }
  },
  components: {
    Group,
    footers,
    notice,
    Cell,
    tabBar,
    msg,
    insure
  },
  methods: {
    changeFlag (val) {
      this.flag = val
    },
    changeContent (text) {
      this.text = text
      this.flag = true
    },
    changeTiao (productId) {
      this.$store.dispatch('product/GetClauseList', {productId}).then(res => {
        this.text = {title: '保险条款', content: res.data}
        this.flag = true
      })
    },
    classify (id) {
      this.$router.push('/thing/' + id)
      this.getView(id)
    },
    getView (id) {
      this.$store.dispatch('product/GetProductView', {
        id: id
      }).then(res => {
        this.array = res.data
        this.price = this.array.product.price
      })
    }
  },
  created () {
    this.getView(this.$route.params.id)
  },
  beforeRouteLeave (to, from, next) {
    if (this.$refs.insure.flgHeath) {
      this.$refs.insure.flgHeath = false
      next(from.path)
      console.log('from')
    } else {
      console.log('next')
      next()
    }
  }
}
</script>
<style lang="less" scoped>
.img {
  width: 100%;
  img {
    width: 100%;
  }
}
.info {
  width: 100%;
  .title {
    width: 100%;
    margin-top: 20px;
    padding: 0 15px;
    box-sizing: border-box;
    display: -webkit-flex;
    h4 {
      flex: 1;
      padding-top: 10px;
      font-size: 18px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .img {
      flex-basis: 120px;
      img {
        width: 100%;
      }
    }
  }
  .price {
    width: 100%;
    display: flex;
    padding: 5px 10px;
    box-sizing: border-box;
    .money {
      flex: 1;
      display: flex;
      justify-content: flex-start; 
      color: #FE4773;
      b {
        font-size: 20px;
      }
    }
    .sela {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      span {
        color: #FE4773;
      }
    }
  }
  .msg {
    padding: 0 10px;
    box-sizing: border-box;
    color: #A599B2;
    font-size: 14px;
  }
}
.grey {
  padding: 20px 0;
  background: #F9F9F9;
  width: 100%;
}
.warn {
  width: 100%;
  text-indent: 10px;
  padding: 15px 0;
  font-size: 16px;
  background: #FEEAEF;
}
.more {
  text-indent: 15px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  color: #999B99;
  span {
    color: #1D50AE;
  }
}
.weui-cell:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #fff;
  color: #D9D9D9;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  left: 15px;
}
</style>
