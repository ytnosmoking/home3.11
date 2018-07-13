<template>
  <div class="selectTime">
    <slot name="time">

    </slot>
    <slot name="weeks" style="vertical:middle;">
      <!-- 查询周期 -->
    </slot>

    <el-date-picker v-model="value88" type="daterange" value-format="yyyy-MM-dd" @change="getValue88" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: "select-time",
  data() {
    return {
      value: "跟进时间",
      value88: "",
      options: [
        {
          value: "0",
          label: "跟进时间"
        },
        {
          value: "1",
          label: "入住时间"
        },
        {
          value: "2",
          label: "录入时间"
        }
      ]
    };
  },
  methods: {
    getValue88() {
      console.log(this.value88);
    }
  },
  mounted() {
    
  }
};
</script>

<style lang='less' scoped>
.selectTime {
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  display: flex;
  justify-content: space-between;
      align-items: center;
  font-size: 14px;
  .el-input__inner {
    border: none;
  }
}
.time {
  width: 34%;

  
}
.el-date-editor {
  width: 64%;
}
</style>