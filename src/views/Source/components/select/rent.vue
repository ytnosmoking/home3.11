<template>
  <div>
    <el-select v-model="value" placeholder="租期">
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
      value: "租期",
      options: [
        {
          value: "0",
          label: "租期"
        },
        {
          value: "1",
          label: "一个月"
        },
        {
          value: "2",
          label: "2个月"
        }
      ]
    };
  }
};
</script>

<style lang='less' scoped>
</style>