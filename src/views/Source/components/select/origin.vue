<template>
  <div>
    <el-select v-model="value" placeholder="来源类型">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      value: "来源类型",
      options: [
        {
          value: "0",
          label: "来源类型"
        },
        {
          value: "1",
          label: "公司"
        },
        {
          value: "2",
          label: "个人"
        }
      ]
    };
  }
};
</script>

<style lang='less' scoped>
</style>