<template>
  <div>
    <el-select v-model="value" placeholder="整租">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "select-all",
  data() {
    return {
      value: "需求类型",
      options: [
        {
          value: "0",
          label: "整租"
        },
        {
          value: "1",
          label: "合租"
        },
        {
          value: "2",
          label: "床位"
        }
      ]
    };
  }
};
</script>

<style lang='less' scoped>
</style>