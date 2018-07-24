<template>
  <div>
    <!--  nav  公客 私客 预约 -->
    <ul class="nav">
      <li v-for="(item, key) in navRoute" :key="key" :class="{active:item.to===guRenterType}" @click="changeCom(item.to)">{{item.name}}</li>
    </ul>
    <!-- 全部 待受理 已受理 无效 -->
    <ul class="bookMark" v-show="guRenterType==='3'">
      <li v-for="(item, index) in bookMark" :key="index" :class="{active:item.value == mark}" @click="changeMark(item.value)">{{item.value}}-{{item.number}}</li>
    </ul>
    <!--  filter select -->
    <select-filter :list="guRenterType"></select-filter>
    <!--  table -->
    <select-table class="filterTable" :guRenterType="guRenterType" :tableData ="tableData"></select-table>

    <!--  分页条 -->
    <section class="pageCounts" v-if="totalRecord>10">
      <el-pagination background :current-page="currentPage"
        layout="prev, pager, next"
        :page-count="totalPage"
        :total="totalRecord"
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
import Bus from "./rentFilter/bus.js"
export default {
  name: "rent",
  data() {
    return {
      currentPage: 1,
      guRenterType: "2",
      tableData: [],
      totalPage: 1,
      totalRecord: 1,
      navRoute: [
        {
          name: "私客",
          to: "2"
        },
        {
          name: "公客",
          to: "1"
        },
        {
          name: "预约",
          to: "3"
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
      this.guRenterType = value;
      const tableInfo = Object.assign({}, { typeName: "guRenterType", value: this.guRenterType })
      this.$store.dispatch({ type: "sourceRent/getTable", tableInfo }).then(res => {
        console.log(res)
        this.currentPage = res.pageNo
        this.totalPage = res.totalPage
        this.totalRecord = res.totalRecord
        this.tableData = res.list
      }).catch(err => {
        console.log(err)
      })
    },
    changeMark(value) {
      this.mark = value;
    },
    getCurrent(val) { // 点击页面 跳转
      // console.log(`${val}页`)
      this.currentPage = val
      this.getTable()
    },
    getNext(val) { // 下一页
      this.currentPage = val
      // this.getTable()
    },
    getPrev(val) { // 上一页
      this.currentPage = val
      // this.getTable()
    },
    getTable() { // 刷新 table 表
      const tableInfo = Object.assign({}, { typeName: "pageNo", value: this.currentPage })
      this.$store.dispatch({ type: "sourceRent/getTable", tableInfo }).then(res => {
        console.log(res)
        this.currentPage = res.pageNo
        this.totalPage = res.totalPage
        this.totalRecord = res.totalRecord
        this.tableData = res.list
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {
    console.log("source rent");
    this.getTable()
    const that = this
    Bus.$on("getTableData", function(res) {
      that.currentPage = res.pageNo
      that.totalPage = res.totalPage
      that.totalRecord = res.totalRecord
      console.log(res.list)
      that.tableData = res.list
    })
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


