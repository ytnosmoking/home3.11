<template>
  <div>
    <!--  nav  公客 私客 预约 -->
    <ul class="nav">
      <li v-for="(item, key) in navRoute" :key="key" :class="{active:item.to===com}" @click="changeCom(item.to)">{{item.name}}</li>
    </ul>
    <!-- 全部 待受理 已受理 无效 -->
    <ul class="bookMark" v-show="com==='yuyue'">
      <li v-for="(item, index) in bookMark" :key="index" :class="{active:item.value == mark}" @click="changeMark(item.value)">{{item.value}}-{{item.number}}</li>
    </ul>
    <!--  filter select -->
    <select-filter :list="com"></select-filter>
    <!--  table -->
    <select-table class="filterTable" :com="com"></select-table>

    <!--  分页条 -->
    <section class="pageCounts">
      <el-pagination background :current-page="currentPage"
        layout="prev, pager, next"
        :page-size="10" 
        :total="879" 
        @current-change="getCurrent" 
        @prev-click="getPrev" 
        @next-click="getNext">
      </el-pagination>
    </section>

  </div>
</template>
<script>
// import sike from "./Rent/sike";
// import gongke from "./Rent/gongke";
// import yuyue from "./Rent/yuyue";

import selectFilter from "./rentFilter/filter";
import selectTable from "./rentFilter/table";

export default {
  name: "rent",
  data() {
    return {
      currentPage: 1,
      com: "sike",
      navRoute: [
        {
          name: "私客",
          to: "sike"
        },
        {
          name: "公客",
          to: "gongke"
        },
        {
          name: "预约",
          to: "yuyue"
        }
      ],
      mark: "全部",
      bookMark: [
        {
          value: "全部",
          number: "(134)"
        },
        {
          value: "待受理",
          number: "(134)"
        },
        {
          value: "已受理",
          number: "(134)"
        },
        {
          value: "无效",
          number: "(134)"
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
    },
    getCurrent(val) {
      console.log(`${val}页`)
    },
    getNext(val) {
      this.currentPage = val
      this.getTable()
      // console.log(`下一 ${val}页`)
    },
    getPrev(val) {
      this.currentPage = val
      this.getTable()
      // console.log(`上一 ${val}页`)
    },
    getTable() {
      // this.$store.dispatch({"getTable", this.currentPage})
      this.$store.dispatch({ type: "sourceRent/getTable", value: this.currentPage })
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


