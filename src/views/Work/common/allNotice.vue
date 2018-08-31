<template>
  <el-dialog title="企业公告" top="1vh" :visible.sync="dialogTableVisible" :before-close="handleClose" width="95%">
    <div class="table">
      <div class="filter">
        <!-- 筛选类型 style-->
        <select-style class="style" 
          :styleOptions="peopleType.options" 
          :placeholder="peopleType.placeholder"
          :styleName="peopleType.name" 
          :getChange="getChange"
          style="flex:1">
        </select-style>
        <!-- 部门/人员 -->
        <select-part :styleName='partMent' class="part" style="flex:1">
          
        </select-part>
        <!-- 查询周期 -->
        <select-time class="time" style="flex:2">
           <span slot="weeks"> &nbsp;&nbsp;查询周期:</span>
        </select-time>
        <!-- 标题 -->
        <el-input v-model="title" placeholder="标题" style="flex:1.5"></el-input>
        <!-- 内容 -->
        <el-input v-model="content" placeholder="内容" style="flex:1.5"></el-input>
        <!-- search -->
         <el-button icon="el-icon-search" type="primary" style="font-size:20px" size="mini"></el-button>
        
      </div>
      <div class="content">
        1234
      </div>
    </div>
  </el-dialog>
</template>

<script>
import selectStyle from 'components/Select/style'
import selectPart from 'components/Select/part'
import selectTime from 'components/Select/time'
export default {
  name: '',
  components: {
    selectStyle,
    selectPart,
    selectTime
  },
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
      },
       //  部门
      partMent: {
        ment: 'departmentId',
        userid: 'guNowCreateId'
      },
      title: '',
      content: ''
    };
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
  &~ {
    height: 100%;
  }
  .filter {
    padding: 20px;
    // background: #fff;
    background: #eff2f7;
    display: flex;
    .part {
      background-color: #fff;
    }
    .time {
      background-color: #fff;
    }
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