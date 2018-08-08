<template>
  <div>
    <!--  nav  公客 私客 预约 -->
    <ul class="nav">
      <li v-for="(item, key) in navRoute" :key="key" :class="{active:item.to===com}" @click="changeCom(item.to)">{{item.name}}</li>
    </ul>
    <!-- 全部 待受理 已受理 无效 -->
    <ul class="bookMark" v-show="com==='yuyue'||com==='weituo'">
      <li v-for="(item, index) in bookMark" :key="index" :class="{active:item.value == mark}" @click="changeMark(item.value)">{{item.value}}-{{item.number}}</li>
    </ul>
    <!--  filter  -->
    <select-filter :list="com"></select-filter>
    <!--  table -->
    <select-table class="filterTable" :com="com"></select-table>

    <section class="pageCounts">
      <el-pagination background layout="prev, pager, next" :page-size="10" :total="879">
      </el-pagination>
    </section>

    <!-- <transition mode="out-in" enter-active-class="animated lightSpeedIn" leave-active-class="animated lightSpeedOut">
      <select-table class="filterTable"></select-table>
    </transition> -->
  </div>
</template>
<script>
// import sike from "./Rent/sike";
// import gongke from "./Rent/gongke";
// import yuyue from "./Rent/yuyue";

import selectFilter from './rentFilter/filter';
import selectTable from './rentFilter/table';

export default {
  name: 'rent',
  data() {
    return {
      com: 'sipan',
      navRoute: [
        {
          name: '私盘',
          to: 'sipan'
        },
        {
          name: '公盘',
          to: 'gongpan'
        },
        {
          name: '线上委托',
          to: 'weituo'
        }
      ],
      mark: '全部',
      bookMark: [
        {
          value: '全部',
          number: '(134)'
        },
        {
          value: '待受理',
          number: '(134)'
        },
        {
          value: '已受理',
          number: '(134)'
        },
        {
          value: '无效',
          number: '(134)'
        }
      ]
    };
  },
  components: {
    selectFilter,
    selectTable
  },
  methods: {
    changeCom(value) {
      this.com = value;
    },
    changeMark(value) {
      this.mark = value;
    }
  },
  mounted() {
    console.log(1111);
  }
};
</script>
<style lang='less' scoped>
@import "../../assets/css/utils.less";
.nav {
  .clear();
  color: #999;
  margin-bottom: 15px;
  & > li {
    float: left;
    line-height: 30px;
    font-size: 14px;
    font-weight: bolder;
    padding-right: 22px;
    float: left;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      color: #000;
    }
  }
}
.bookMark {
  position: absolute;
  top: 20px;
  left: 200px;
  line-height: 30px;
  display: flex;
  font-size: 14px;
  & > li {
    margin-right: 20px;
    cursor: pointer;
  }
}
.active {
  color: #02cab0;
}
.filterTable {
  overflow: hidden;
  padding: 20px;
  box-sizing: border-box;
  background: #ffffff;
  margin-top: 20px;
}
.pageCounts {
  background-color: #fff;
  margin-top: 10px;
  text-align: right;
  padding: 8px;
}
</style>


