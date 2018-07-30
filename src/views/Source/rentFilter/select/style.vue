  <template>
<div>
  <el-select v-model="value" :placeholder="placeholder" @change="change">
    <el-option v-for="(item, index) in styleOptions" :key="index" :data-mark="item.mark" :label="item.key" :value="item.id">
    </el-option>
  </el-select>
  </div>
</template>

<script>
// import Bus from "../bus.js"
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
      // console.log(this.value)
      if (this.styleName === "guSourceTypeId" || this.styleName === "guImportanceTypeId") {
        let valueLabel = "";
        this.styleOptions.filter(item => {
          if (item.value === this.value) {
            valueLabel = item.label
            return
          }
        })
        this.$store.commit({ type: "sourceRent/" + this.styleName.replace("Id", "Name"), value: valueLabel })
      }
      const tableInfo = Object.assign({}, { typeName: this.styleName, value: this.value })
      // this.$store.commit({ type: this.styleName, value: this.value })
      this.$store.dispatch({ type: "sourceRent/getTable", tableInfo })
      // .then(res => {
      //   Bus.$emit("getTableData", res)
      // })
    }
  }
};
</script>

<style lang='less' scoped>

</style>
