<template>
  <div class="personal">
    <div class="content">
      <div class="start-date" v-if="msg.data.models[4].attributes[0].type=='date'">
        <div class="start-left">
          <b>*</b><span>{{msg.data.models[4].attributes[0].label}}</span>
        </div>
        <div class="start-right">
          <input type="date">
          <strong>&gt;</strong>
        </div>
      </div>
      <div 
        class="content-list" 
        v-for="(item, index) in msg.data.models" 
        :key="index">
        <p v-if="item.title != '选择起保日期'">{{item.title}}</p>
        <div 
          class="list" 
          v-for="(value, ind) in item.attributes"
          :key="ind">
          <div class="type-text" v-if="value.type == 'text' || value.type=='jobs'">
            <div class="type-text-left">
              <b>*</b><span>{{value.label}}</span>
            </div>
            <div class="type-text-right">
              <input type="text">
            </div>
          </div>
          <div class="type-list" v-if="value.type=='list' || value.type=='radio'">
            <div class="type-list-left">
              <b>*</b><span>{{value.label}}</span>
            </div>
            <div class="type-list-right">
              <!-- <span @click="select(index + '-' + ind)">{{currentValue}}</span> -->
              <select name="" id="">
                <option value="">请选择</option>
                <option value="" v-for="(v, i) in value.list" :key="i">{{v.label}}</option>
              </select>
              <strong>&gt;</strong>
            </div>
            <!-- <div class="list-list" v-if="flag && currentIndex == (index + '-' + ind)">
              <p @touchstart="move(-1, '请选择')" :class="{active: touchIndex == -1}">请选择</p>
              <p 
                v-for="(v, i) in value.list" 
                :key="i" @touchstart="move(i, v.label)"
                :class="{active: touchIndex == i}">{{v.label}}</p>
            </div> -->
          </div>
          <div class="start-date date" v-if="value.type=='date' && value.label != '起保日期'">
            <div class="start-left">
              <b>*</b><span>{{value.label}}</span>
            </div>
            <div class="start-right">
              <input type="date">
              <strong>&gt;</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <span>￥{{msg.array.product.price}}</span>
      <button @click="submit">提交</button>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'PersonalInfo',
  data () {
    return {
      msg: this.$route.params,
      flag: false,
      currentIndex: 0,
      touchIndex: -1,
      currentValue: '请选择'
    }
  },
  methods: {
    select (index) {
      this.currentIndex = index
      this.flag = !this.flag
    },
    move (ind, value) {
      this.touchIndex = ind
      this.currentValue = value
      this.flag = !this.flag
    },
    submit () {
    }
  }
}
</script>
<style lang="less" scoped>
.personal {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  overflow-y: scroll;
  background: #f8f8f8;
  .start-date {
    height: 50px;
    width: 100%;
    background: #fff;
    display: flex;
    margin-top: 15px;
    .start-left {
      line-height: 50px;
      flex-basis: 150px;
      text-indent: 20px;
      font-size: 14px;
      b {
        color:#ff4774
      }
    }
    .start-right {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      input {
        border-width: 0;
        outline: none;
      }
      strong {
        margin-right: 15px;
        color: #ccc;
      }
    }
  }
  .content-list {
    width: 100%;
    text-indent: 20px;
    p {
      line-height: 50px;
    }
    .list {
      width: 100%;
      background: #fff;
      &::after {
        content: '';
        display: block;
        width: 200%;
        height: 2px;
        background: #d9d9d9;
        transform: scale(.5);
        transform-origin: left top;
        position: relative;
        bottom: 0;
      }
      .type-text {
        width: 100%;
        display: flex;
        .type-text-left {
          line-height: 50px;
          flex-basis: 150px;
          text-indent: 20px;
          font-size: 14px;
          b {
            color:#ff4774
          }
        }
        .type-text-right {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          input {
            width: 100%;
            height: 80%;
            outline: none;
            border-width: 0;
            margin-right: 30px;
            text-align: right;
          }
        }
      }
      .type-list {
        width: 100%;
        display: flex;
        position: relative;
        .type-list-left {
          line-height: 50px;
          flex-basis: 170px;
          text-indent: 20px;
          font-size: 14px;
          b {
            color:#ff4774
          }
        }
        .type-list-right {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          strong {
            margin-right: 15px;
            color: #ccc;
          }
          select {
            width: 100px;
            direction: rtl;
            border-width: 0;
            outline: none;
            -webkit-appearance: none;  
            -webkit-tap-highlight-color: #fff;
            option {
              direction: ltr;
            }
          }
        }
        .list-list {
          position: absolute;
          right: 50px;
          top: 40px;
          background: #fff;
          width: 200px;
          border: 1px solid #ddd;
          p {
            line-height: 30px;
            &.active {
              color: #fff;
              background: skyblue;
            }
          }
        }
      }
    }
  }
  .date {
    margin: 0;
  }
}
.footer {
  height: 50px;
  background: red;
  display: flex;
  color: #fff;
  span {
    flex: 2;
    background: #333;
    text-indent: 10px;
    line-height: 50px;
  }
  button {
    flex: 1;
    background: #ff4774;
    border-width: 0;
    outline: none;
    color: #fff;
  }
}
</style>
