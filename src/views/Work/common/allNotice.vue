<template>
  <el-dialog title="企业公告" top="1vh" :visible.sync="dialogTableVisible" :before-close="handleClose" width="95%">
    <div class="table">
      <div class="filter">
         <!-- 筛选类型 style-->
      <select-style class="style" 
        :styleOptions="peopleType.options" 
        :placeholder="peopleType.placeholder"
        :styleName="peopleType.name" 
        :getChange="getChange">
      </select-style>
      </div>
      <div class="content">
        1234
      </div>
    </div>
  </el-dialog>
</template>

<script>
import selectStyle from 'components/Select/style'
export default {
  name: '',
  data() {
    return {
      mark: '4c7cd39b-0cb0-4aa8-841e-e7496e4a9741',
      peopleType: {
        name: 'peopleType',
        placeholder: '筛选类型',
        options: [
          {
            id: '0',
            key: '筛选类型'
          },
          {
            id: '1',
            key: '跟进人'
          },
          {
            id: '2',
            key: '录入人'
          }
        ]
      }
    };
  },
  components: {
    selectStyle
  },
  computed: {
    dialogTableVisible() {
      return this.$store.getters['work/showFlag'];
    }
  },
  methods: {
    handleClose(done) {
      // done()
      console.log('hadleClose');
      this.$store.commit({ type: 'work/showFlag' });
    },
    getChange(styleName, styleOptions, value) {
      console.log(styleName)
      console.log(styleOptions)
      console.log(value)
    },
    getStyleByMark() {
      console.log(this.mark)
      this.$store.dispatch({ type: 'work/getAllNoticeStyle', mark: this.mark })
      .then(res => {
        console.log(res)
      })
    }
  },
  mounted() {
    this.getStyleByMark()
  }
};
</script>

<style lang='less' scoped>
.table {
  width: auto;
  // min-width: 1200px;
  font-size: 14px;
  color: #404040;
  // padding: 15px;
  
  .filter {
    padding: 20px;
    // background: #fff;
    background: #eff2f7;
  }
  .content {
    width: 100%;
    min-height: 755px;
    
    padding: 15px 20px;
    margin-top: 20px;
    box-sizing: border-box;
    background: #eff2f7;
    // float: left;
    overflow-y: scroll;
  }
}
</style>