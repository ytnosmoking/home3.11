<template>
<div class="style">
  <el-select v-model="value" :placeholder="placeholder" @change="change">
    <el-option v-for="item in styleOptions" :key="item.value" :label="item.label" :value="item.value">
    </el-option>
  </el-select>
  </div>
</template>

<script>
export default {
  name: "select-style",
  props: {
    styleOptions: {
      type: Array,
      default: []
    },
    styleName: {
      type: String
    },
    placeholder: {
      type: String
    }
  },
  data() {
    return {
      value: "0"

    };
  },
  mounted() {
    this.value = this.placeholder
  },
  methods: {
    change() {
      console.log(this.value)
      this.$store.commit({ type: this.styleName, value: this.value })
      // console.log()
    }
  }
};
</script>

<style lang='less' scoped>
  
</style>