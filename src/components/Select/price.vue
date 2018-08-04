<template>
  <div class="priceRange">
    <span>{{price}}:</span>
    <input type="text" v-model="guMinMoney" :placeholder="low" class="el-input__inner" @keyup="getPrice('guMinMoney')">-
    <input type="text" v-model="guMaxMoney" :placeholder="up" class="el-input__inner" @keyup="getPrice('guMaxMoney')">
  </div>
</template>


<script>
export default {
  name: "",
  props: {
    price: {
      type: String,
      default: "价格区间"
    },
    low: {
      type: String,
      default: "最低价格"
    },
    up: {
      type: String,
      default: "最高价格"
    }

  },
  data() {
    return {
      guMaxMoney: "",
      guMinMoney: ""
    };
  },
  methods: {
    getPrice(value) {
      console.log(this[value])
      this.$store.commit({ type: `source/${value}`, value: this[value] })
    }
  }
};
</script>

<style lang='less' scoped>
.priceRange {
     /* display: inline-block; */
    height: 40px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    padding-left: 15px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  & > .el-input__inner {
    display: inline-block;
    border: none;
    width: 30%;
    height: 38px;
    line-height: 38px;
    padding: 0;
  }
}
</style>