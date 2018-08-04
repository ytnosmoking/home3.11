<template>
  <div>
    <el-select v-model="value" placeholder="重视类型">
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
      value: "重视类型",
      options: [
        {
          value: "11",
          label: "重视类型"
        },
        {
          value: "0",
          label: "重环境"
        },
        {
          value: "1",
          label: "重交通"
        },
        {
          value: "2",
          label: "重租金"
        },
        {
          value: "3",
          label: "重服务"
        },
        {
          value: "4",
          label: "重美观"
        }
      ]
    };
  }
};
</script>

<style lang='less' scoped>
</style>