<template>
<div class="style">
  <el-select v-model="value1" placeholder="筛选类型" @change="change">
    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
    </el-option>
  </el-select>
  </div>
</template>

<script>
export default {
  name: "select-style",
  data() {
    return {
      value1: "筛选类型",
      options1: [
        {
          value: "0",
          label: "筛选类型"
        },
        {
          value: "1",
          label: "跟进人"
        },
        {
          value: "2",
          label: "录入人"
        }
      ]
    };
  },
  methods: {
    change() {
      console.log(this.value1)
    }
  }
};
</script>

<style lang='less' scoped>
  
</style>