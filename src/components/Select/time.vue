<template>
  <div class="selectTime">
    <slot name="time">

    </slot>
    <slot name="weeks" style="vertical:middle;">
      <!-- 查询周期 -->
    </slot>

    <el-date-picker v-model="dataTime" type="daterange" value-format="yyyy-MM-dd" @change="getValue88" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: "select-time",
  data() {
    return {
      dataTime: ""
    };
  },
  methods: {
    getValue88() {
      // console.log(this.dataTime)
      if (this.dataTime !== null) {
        this.$store.commit({ type: "source/guTime", time: this.dataTime })
      }
    }
  },
  mounted() {}
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
  width: 32%;
  
}
.el-date-editor {
  width: 66%;
}
</style>