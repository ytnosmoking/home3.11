<template>
  <div>
    <el-input class="searchValue" placeholder="姓名，电话，小区" prefix-icon="el-icon-search" v-model="value">
    </el-input>
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
}
</style>