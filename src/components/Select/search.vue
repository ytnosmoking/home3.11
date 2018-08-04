<template>
  <div>
    <el-input class="searchValue" placeholder="姓名，电话，小区" v-model="value">
    </el-input>
    <button class="el-icon-search searchList" @click="getTable"></button>
    <i :class="[sort? 'el-icon-arrow-down':'el-icon-arrow-up']" @click="changeSort"></i>
    <i class="el-icon-download"></i>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      value: "",
      sort: false
    };
  },
  methods: {
    changeSort() {
      this.sort = !this.sort;
    },
    getTable() {
      this.$store.dispatch({ type: "source/getTable" });
    }
  }
};
</script>

<style lang='less' scoped>
.searchValue {
  width: auto;
  height: 40px;

  & ~ i {
    height: 40px;
    line-height: 40px;
    font-size: 30px;
    vertical-align: middle;
    transition: all 0.3s ease;
  }
  & ~ .searchList {
    cursor: pointer;
    height: 40px;
    line-height: 40px;
    font-size: 30px;
    vertical-align: middle;
    background: rgb(0, 203, 175);
    color: #fff;
    border: none;
    outline: none;
    border-radius: 4px;
    padding: 0 4px;
  }
}
</style>