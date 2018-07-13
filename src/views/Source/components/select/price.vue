<template>
  <div class="priceRange">
    <span>价格区间:</span>
    <input type="text" v-model="value.start" placeholder="最低价格" class="el-input__inner">-
    <input type="text" v-model="value.end" placeholder="最低价格" class="el-input__inner">
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      value: {
        start: "",
        end: ""
      }
    };
  },
  methods: {
    
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