<template>
  <div>
    <div class="content">
      <h2>健康告知</h2>
      <div class="content-list" v-for="(v,i) in text.data.questions" :key="i">
        <span>{{v.question_sort}}.</span>{{v.content}}
        <template v-if="v.answers.length > 1">
          <div class="ok" v-for="(val, ind) in v.answers" :key="ind">
            <input 
              type="radio" 
              id="radio" 
              name="radio" 
              v-model="v.control_value"
              :value="val.value"
              >
            <label for="radio">{{val.name}}</label>
          </div>
        </template>
      </div>
      <button @click="next">下一步</button>
    </div>
  </div>  
</template>
<script>
export default {
  name: 'Heath',
  props: {
    text: {
      default: []
    }
  },
  methods: {
    next () {
      this.$store.dispatch('product/PostHealthSubmit', {
        product_id: this.text.array.product.product_id,
        healthy_id: this.text.data.health_id,
        questions: this.text.data.questions,
        genes: this.text.array.genes
      }).then(res => {
        console.log(res)
      })
      this.$store.dispatch('product/GetInsureAttr', {
        product_id: this.text.array.product.product_id
      }).then(res => {
        this.$parent.flgHeath = false
        this.$router.push({name: 'personalInfo', params: {data: res.data, array: this.text.array}})
      })
    }
  }
}
</script>
<style lang="less" scoped>
.content {
  position: fixed;
  bottom: 0;
  top: 0;
  background: #fff;
  z-index: 2;
  width: 100%;
  max-height: 100%;
  overflow-y: scroll;
  h2 {
    text-align: center;
    line-height: 50px;
    font-weight: normal;
    margin-top: 10px;
  }
  .content-list {
    padding: 0 10px;
    font-size: 14px;
    color: #666;
  }
  .ok {
    margin-top: 30px;
    display: inline-block;
    input {
      margin-left: 30px;
    }
  }
  button {
    width: 80%;
    border-radius: 25px;
    height: 40px;
    border-width: 0;
    outline: none;
    color: #fff;
    margin-left: 10%;
    margin-top: 30px;
    background-image: linear-gradient(19deg,#fd2121,#ff2198);
  }
}
.health-hide {
  display: none;
}
</style>

