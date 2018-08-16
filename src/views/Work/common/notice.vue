<template>

  <el-dialog title="公告详情" :visible.sync="dialogTableVisible" :before-close="handleClose" width="70%">
    <div class="noticeBody">
      <h3 class="titleText">
        下载最新版本（iOS版）
      </h3>
      <p class="titleTime">2018-07-30 09:18</p>
      <p class="titleTips">
        注意：苹果版本2.7.6维护截至日期为7月30日,请及时安装以下最新管家助手(如已安装最新版本2.8.0,请忽略)
      </p>
    </div>
    <div class="noticeFooter">
      <ul class="noticeObj clearfix">
        <li>产品部</li>
        <li>产品部</li>
        <li>产品部</li>
      </ul>
      <div class="noticePage">
        <el-button type="primary">＜上一篇</el-button>
        <el-button type="primary">下一篇＞</el-button>
      </div>
    </div>
  </el-dialog>

</template>

<script>
export default {
  name: 'common',
  data() {
    return {};
  },
  computed: {
    dialogTableVisible() {
      return this.$store.getters['work/showFlag'];
    }
  },
  methods: {
    handleClose(done) {
      this.$store.commit({ type: 'work/showFlag' });
    }
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
.noticeBody {
  text-align: center;
  height: 360px;
  overflow-y: scroll;
  padding: 20px;
  .titleText {
    height: auto;
    line-height: 40px;
    font-size: 26px;
  }
  .titleTime {
    height: 30px;
    font-size: 14px;
    color: #aaa;
    line-height: 30px;
    position: relative;
    &:after {
      content: "";
      width: 50px;
      height: 3px;
      background-color: #02cab0;
      position: absolute;
      left: 50%;
      bottom: -3px;
      transform: translate(-50%, 0);
    }
  }
  .titleTips {
    margin: 16px 0;
    text-align: left;
    font-size: 16px;
  }
}
.noticeFooter {
  position: relative;
  padding-top: 20px;
  border-top: 1px solid #eee;
   &::before {
      content: '发布对象';
      overflow: hidden;
      position: absolute;
      left: 10px;
      top: 25px;
    }
  .noticeObj {
    padding-left: 10%;
    position: relative;
   
    li {
      float: left;
      background: #e6ebee;
      margin-right: 10px;
      border-radius: 4px;
      padding: 4px;
      margin-bottom: 4px;
    }
  }
  .noticePage {
    text-align: right;
  }
}
</style>