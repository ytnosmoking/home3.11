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
    <select-table class="filterTable" :guRenterType="guRenterType" :tableData="tableData"></select-table>

    <!--  分页条 -->
    <section class="pageCounts" v-if="totalRecord>10">
      <el-pagination background :current-page="pageNo" layout="prev, pager, next" :page-count="totalPage" :total="totalRecord" @current-change="getCurrent" @prev-click="getPrev" @next-click="getNext">
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
import Bus from "./rentFilter/bus.js";
export default {
  name: "rent",
  data() {
    return {
      guRenterType: "2",
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
  computed: {
    pageNo() {
      return this.$store.getters["sourceRent/pageNo"];
    },
    tableData() {
      return this.$store.getters["sourceRent/tableData"];
    },
    totalPage() {
      return this.$store.getters["sourceRent/totalPage"];
    },
    totalRecord() {
      return this.$store.getters["sourceRent/totalRecord"];
    }
  },
  components: {
    selectFilter,
    selectTable
  },
  methods: {
    changeCom(value) {
      this.guRenterType = value;
      if (value !== "3") {
        const tableInfo = Object.assign({}, { typeName: "guRenterType", value: this.guRenterType }
        );
        this.$store.dispatch({ type: "sourceRent/getTable", tableInfo });
      }
    },
    changeMark(value) {
      this.mark = value;
    },
    getCurrent(val) {
      if (this.value !== "3") {
        this.$store.commit({ type: "sourceRent/pageNo", val });
        this.getTable();
      }
    },
    getNext(val) {
      if (this.value !== "3") {
        this.$store.commit({ type: "sourceRent/pageNo", val });
      }
    },
    getPrev(val) {
      if (this.value !== "3") {
        this.$store.commit({ type: "sourceRent/pageNo", val });
      }
    },
    getTable() {
      if (this.value !== "3") {
        this.$store.dispatch({ type: "sourceRent/getTable" });
      }
    }
  },
  created() {
    console.log(this.pageNo);
  },
  mounted() {
    console.log(this.pageNo);
    this.getTable();
    window.onclick = function() {
      Bus.$emit("hidePart");
    };
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
    margin-right: 10px;
    padding: 0 15px;
    float: left;
    cursor: pointer;
    transition: all 0.3s ease;
    &:nth-child(1) {
      margin-left: 20px;
    }
    &:hover {
      color: #000;
      text-decoration: underline;
    }
    &.active {
      color: #fff;
      background: #00cdb3;
      border-radius: 14px;
    }
  }
}
.bookMark {
  position: absolute;
  top: 20px;
  left: 300px;
  line-height: 30px;
  display: flex;
  font-size: 14px;
  & > li {
    margin-right: 10px;
    cursor: pointer;
     padding: 0 15px;
    float: left;
    cursor: pointer;
    transition: all 0.3s ease;
    &:nth-child(1) {
      margin-left: 20px;
    }
    &:hover {
      color: #000;
      text-decoration: underline;
    }
    &.active {
      color: #fff;
      background: #00cdb3;
      border-radius: 14px;
    }
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


