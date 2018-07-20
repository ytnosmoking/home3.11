<template>
  <div class="showRight" :class="{'active':showState}" @click.stop>
    <div class="slide-head">
      <span>查看</span>
      <span @click="hideRight">X</span>
    </div>

    <div class="slide-content">

      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="基本信息" name="basic">
          <div style="" class="navCont">

            <el-col :span="8">
              <span>重视类型</span>
              <span>1234</span>
            </el-col>
            <el-col :span="8">
              <span>姓名</span>
              <span>1234</span>
            </el-col>
            <el-col :span="8">
              <span>电话</span>
              <span>1234</span>
            </el-col>

            <el-col :span="8">
              <span>客户来源</span>
              <span>1234</span>
            </el-col>
            <el-col :span="8">
              <span>性别</span>
              <span>1234</span>
            </el-col>
            <el-col :span="8">
              <span>客户类型</span>
              <span>1234</span>
            </el-col>

            <el-col :span="8">
              <span>客源类型</span>
              <span>1234</span>
            </el-col>
            <el-col :span="8">
              <span>微信号</span>
              <span>1234</span>
            </el-col>

            <el-col :span="8">
              <span>录入时间</span>
              <span>1234</span>
            </el-col>

          </div>

          <el-col :span="8">
            <span>区域商圈</span>
            <span>1234</span>
          </el-col>
          <el-col :span="8">
            <span>预约地址</span>
            <span>1234</span>
          </el-col>

          <el-col :span="8">
            <span>需求类型</span>
            <span>1234</span>
          </el-col>
          <el-col :span="8">
            <span>价格区间</span>
            <span>1234</span>
          </el-col>

          <el-col :span="8">
            <span>租房租期</span>
            <span>1234</span>
          </el-col>
          <el-col :span="8">
            <span>备注</span>
            <span>1234</span>
          </el-col>

        </el-tab-pane>
        <el-tab-pane label="跟进详情" name="follow">
          <div class="follow">
            <div class="followTips clearfix">
              <span class="fl">
                time
              </span>
              <span class="fr">
                name
              </span>
            </div>
            <div class="followDetails">
              details
            </div>
          </div>
          <div class="follow">
            <div class="followTips clearfix">
              <span class="fl">
                time
              </span>
              <span class="fr">
                name
              </span>
            </div>
            <div class="followDetails">
              details
            </div>
          </div>
        </el-tab-pane>

      </el-tabs>
    </div>
    <div class="slide-foot">
      <button v-show="activeName=='basic'">编辑信息</button>
      <button v-show="activeName=='follow'">预定</button>
      <button v-show="activeName=='follow'">签约</button>
      <button v-show="activeName=='follow'">跟进</button>
    </div>
  </div>
</template>

<script>
import Bus from "./bus";
export default {
  name: "show-right",
  props: {
    showState: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeName: "basic"
    };
  },
  methods: {
    hideRight() {
      Bus.$emit("hideRight");
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang='less' scoped>
@import "../../../assets/css/utils.less";
.showRight {
  position: fixed;
  top: 60px;
  right: 0;
  height: calc(100% - 60px);
  overflow: hidden;
  width: 0;
  background-color: #fff;
  transition: all 0.3s ease;
  box-shadow: -3px 0 3px #ccc;
  z-index: 3;
  &.active {
    width: 600px;
  }
}
.slide-head {
  padding: 0 10px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
  & > span:nth-child(1) {
    font-size: 16px;
    color: #02cab0;
  }
  & > span:nth-child(2) {
    font-style: normal;
    font-weight: bold;
  }
}
.el-tabs__item.is-active {
  background-color: #ccc;
}
.navCont {
  border-bottom: 1px dashed #ccc;
  padding-bottom: 10px;
  .clear();
}
.slide-content {
  padding: 20px;
  height: calc(100% - 130px);
  box-sizing: border-box;
  overflow: auto;

  .el-col-8 {
    font-size: 14px;
    // height: 36px;
    line-height: 36px;
    position: relative;
    padding-left: 60px;
    & > span:nth-child(1) {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
    & > span:nth-child(2) {
      font-weight: 400;
      color: #999;
    }
  }
  .follow {
    padding: 10px;
    border-bottom: 1px dashed #e6e6e6;
    line-height: 24px;
  }
}
.slide-foot {
  height: 50px;
  background-color: #f2f6f7;
  text-align: right;
  line-height: 50px;
  padding: 0 20px;
  button {
    height: 36px;
    padding: 0 20px;
    font-size: 16px;
    color: #fff;
    border-radius: 2px;
    text-align: center;
    background: #02cab0;
    cursor: pointer;
    opacity: 0.9;
    border: none;
    outline: none;
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
}
</style>