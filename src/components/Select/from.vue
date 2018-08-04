<template>
 <div>
   <el-select v-model="value" placeholder="来源">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
 </div>
</template>

<script>
  export default {
    name: "",
    data () {
      return {
        value: "来源",
        options: [
          {
            value: "0",
            label: "来源"
          },
          {
            value: "1",
            label: "委托"
          },
          {
            value: "2",
            label: "网络"
          }
        ]
      }
    }
  }
</script>

<style lang='less' scoped>
   
</style>


