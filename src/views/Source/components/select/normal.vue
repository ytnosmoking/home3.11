<template>
  <div>
    <el-select v-model="value" placeholder="正常">
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
      value: "正常",
      options: [
        {
          value: "0",
          label: "正常"
        },
        {
          value: "1",
          label: "我租"
        },
        {
          value: "2",
          label: "他租"
        }
      ]
    };
  }
};
</script>

<style lang='less' scoped>
</style>