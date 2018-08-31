<template>
  <div>
    <el-dialog title="待办事项" :visible.sync="dialogTableVisible" :before-close="handleClose">
      <el-table :data="gridData">
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'common112341234',
  data() {
    return {
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]

    };
  },
  computed: {
    dialogTableVisible() {
      return this.$store.getters['work/showFlag']
    }
  },
  methods: {
    handleClose(done) {
      // done()
      console.log('hadleClose')
      this.$store.commit({ type: 'work/showFlag' })
    }
  },
  mounted() {

  }
};
</script>

<style lang='less' scoped>
</style>