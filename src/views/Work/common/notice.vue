<template>

  <el-dialog title="公告详情" :visible.sync="dialogTableVisible" :before-close="handleClose" width="70%">
    <div class="noticeBody">
      <h3 class="titleText">
        {{title}}
      </h3>
      <p class="titleTime">{{time}}</p>
      <p class="titleTips" v-html="content">
      
      </p>
    </div>
    <div class="noticeFooter">
      <ul class="noticeObj clearfix">
       <li v-for="(item, index) in departNames" :key="index">{{item}}</li>
      </ul>
      <div class="noticePage">
        <el-button type="primary" @click="goPrev(id)">＜上一篇</el-button>
        <el-button type="primary" @click="goNext(id)">下一篇＞</el-button>
      </div>
    </div>
  </el-dialog>

</template>

<script>
import { getItem } from 'utils/auth'
export default {
  name: 'common',
  data() {
    return {
      title: 'gonggao',
      time: '2018',
      content: '1234',
      departNames: ['1', '2', '3'],
      id: ''
    };
  },
  computed: {
    dialogTableVisible() {
      return this.$store.getters['work/showFlag'];
    },
    noticeId() {
      console.log(this.$store.getters['work/getNoticeId'])
      return this.$store.getters['work/getNoticeId']
    }
  },
  methods: {
    handleClose(done) {
      this.$store.commit({ type: 'work/showFlag' });
    },
    getNotice() {
      this.$store
    .dispatch({ type: 'work/getNotice' })
    .then(res => {
      this.title = res.title
      this.id = res.id
      this.time = res.et
      this.content = res.content
      this.departNames = res.deptNames
    })
    },
    goPrev(id) {
      const noticeList = JSON.parse(getItem('noticeList'))
      const index = noticeList.indexOf(id)
      if (index > 0 && index <= noticeList.length - 1) {
        this.$store.commit({ type: 'work/showNotice', id: noticeList[index - 1] })
      }
    },
    goNext(id) {
      const noticeList = JSON.parse(getItem('noticeList'))
      const index = noticeList.indexOf(id)
      if (index >= 0 && index < noticeList.length - 1) {
        this.$store.commit({ type: 'work/showNotice', id: noticeList[index + 1] })
      }
    }
  },
  mounted() {
    this.getNotice()
  },
  watch: {
    noticeId: function (oldValue, newVale) {
      console.log(oldValue)
      this.getNotice()
    }
  }
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