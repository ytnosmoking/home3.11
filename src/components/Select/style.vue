  <template>
<div>
  <el-select v-model="value" :placeholder="placeholder" @change="getChange(styleName, styleOptions,getVal)">
    <el-option v-for="(item, index) in styleOptions" :key="index" :data-mark="item.mark" :label="item.key" :value="item.id">
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
    },
    getChange: {
      type: Function
    }
  },
  data() {
    return {
      value: "0"
    };
  },
  computed: {
    getVal() {
      return this.value
    }
  },
  mounted() {
    this.value = this.placeholder
  },
  methods: {

  }
};
</script>

<style lang='less' scoped>

</style>
