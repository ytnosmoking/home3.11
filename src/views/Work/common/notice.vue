<template>
 
    <el-dialog
      title="公告详情"
      :visible.sync="dialogTableVisible"
      :before-close="handleClose">
      <div >
        this is  notice
      </div>
    </el-dialog>
 
</template>

<script>
export default {
  name: 'common',
  data() {
    return {

    };
  },
  computed: {
    dialogTableVisible() {
      return this.$store.getters['work/showFlag']
    }
  },
  methods: {
    handleClose(done) {
      this.$store.commit({ type: 'work/showFlag' })
    }
  },
  mounted() {

  }
};
</script>

<style lang='less' scoped>

</style>