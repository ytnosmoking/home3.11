<template>
  <div>
    <!--  nav  公客 私客 预约 -->
    <ul class="nav">
      <li v-for="(item, key) in navRoute" :key="key" :class="{active:item.to===com}" @click="changeCom(item.to)">{{item.name}}</li>
    </ul>
    <!--  filter  -->
    <select-filter :list="com"></select-filter>
    <!--  table -->
    <select-table class="filterTable"></select-table>
    <!-- <transition mode="out-in" enter-active-class="animated lightSpeedIn" leave-active-class="animated lightSpeedOut">
      <select-table class="filterTable"></select-table>
    </transition> -->
  </div>
</template>
<script>
// import sike from "./Rent/sike";
// import gongke from "./Rent/gongke";
// import yuyue from "./Rent/yuyue";

import selectFilter from "./components/filter";
import selectTable from "./components/table";

export default {
  name: "rent",
  data() {
    return {
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
    }
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
</style>


