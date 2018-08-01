<template>
  <section class="filter">
    <div v-show="list==='sike'|| list==='gongke'">

      <select-style class="style"></select-style>

      <select-part class="part"></select-part>

      <select-area class="area"></select-area>

      <select-important class="important"></select-important>

      <select-origin class="origin"></select-origin>

      <select-from class="from"></select-from>

      <select-normal class="normalRent"></select-normal>

      <select-all class="all"></select-all>

    </div>
    <div v-show="list==='sike'|| list==='gongke'">

      <select-time style="flex:5">
        <el-select v-model="value" placeholder="录入时间" class="time" slot="time">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </select-time>

      <select-rent class="rent" style="flex:2"></select-rent>

      <select-price class="price" style="flex:3" price="价格区间" low="最低价格" up="最高价格"></select-price>

      <select-search class="search" style="flex:5"></select-search>

    </div>
    <div v-show="list==='yuyue'">

      <select-all class="all" style="flex:2"></select-all>

      <select-part class="part" style="flex:3"></select-part>

      <select-area class="area" style="flex:3"></select-area>

      <select-time class="selectTime" style="flex:5">
        <span slot="weeks"> &nbsp;&nbsp;查询周期:</span>
      </select-time>

      <select-search class="search" style="flex:6"></select-search>

    </div>
    <div v-show="list ==='sipan'||list ==='gongpan'||list === 'weituo'">
      <select-part class="part" style="flex:3"></select-part>

      <select-area class="area" style="flex:2"></select-area>
      <select-price class="price" style="flex:3" price="面积" low="最小" up="最大"></select-price>
      <select-time style="flex:5">
        <el-select v-model="value" placeholder="申请时间" class="time" slot="time">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </select-time>

      <select-search class="search" style="flex:5"></select-search>

    </div>

  </section>
</template>

<script>
import selectStyle from "./select/style"; // filter select
import selectPart from "./select/part";
import selectArea from "./select/area";
import selectImportant from "./select/important";
import selectOrigin from "./select/origin";
import selectFrom from "./select/from";
import selectNormal from "./select/normal";
import selectAll from "./select/all";
import selectTime from "./select/time";
import selectRent from "./select/rent";
import selectPrice from "./select/price";
import selectSearch from "./select/search"; // filter search

export default {
  name: "select-filter",
  props: {
    list: {
      default: "sike",
      type: String
    }
  },
  data() {
    return {
      value: "",
      options: [
        {
          value: "0",
          label: "跟进时间"
        },
        {
          value: "1",
          label: "入住时间"
        },
        {
          value: "2",
          label: "录入时间"
        }
      ]
    };
  },
  components: {
    selectStyle,
    selectPart,
    selectArea,
    selectImportant,
    selectOrigin,
    selectFrom,
    selectNormal,
    selectAll,
    selectTime,
    selectRent,
    selectPrice,
    selectSearch
  },
  methods: {}
};
</script>

<style lang='less' scoped>
.filter {
  background: #fff;
  padding: 20px;
  // padding-bottom: 0;
  & > div {
    display: flex;
    &:nth-child(2) {
      margin-top: 20px;
    }
    & > div:not(:last-child) {
      margin-right: 10px;
    }
  }
}
.time {
  .el-input__inner {
    border: none;
  }
}
</style>