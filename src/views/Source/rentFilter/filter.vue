<template>
  <section class="filter">
    <div v-show="list==='2'|| list==='1'">
      <!-- 筛选类型 -->
      <select-style class="style" :styleOptions="style.options" :placeholder="style.placeholder" :styleName="style.name"></select-style>

      <!-- <select-part class="part"></select-part> -->

      <!-- <select-area class="area"></select-area> -->

      <select-style class="important" :styleOptions="important.options" :placeholder="important.placeholder" :styleName="important.name"></select-style>

      <!--  来源类型  公司 个人 -->
      <select-style class="origin" :styleOptions="origin.options" :placeholder="origin.placeholder" :styleName="origin.name"></select-style>

      <!-- 来源  委托  网络  -->
      <select-style class="from" :styleOptions="from.options" :placeholder="from.placeholder" :styleName="from.name"></select-style>

      <!-- 全部 正常 我租 他租  -->
      <select-style class="normal" :styleOptions="normal.options" :placeholder="normal.placeholder" :styleName="normal.name" ></select-style>

      <!-- 需求类型 整租 合租 床位 -->
      <select-style class="all" :styleOptions="all.options" :placeholder="all.placeholder" :styleName="all.name"></select-style>

    </div>
    <div v-show="list==='2'|| list==='1'">

      <!-- <select-time style="flex:5">
        <el-select v-model="value" placeholder="录入时间" class="time" slot="time">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </select-time>

      <select-rent class="rent" style="flex:2"></select-rent>

      <select-price class="price" style="flex:3" price="价格区间" low="最低价格" up="最高价格"></select-price>

      <select-search class="search" style="flex:5"></select-search> -->

    </div>
    <div v-show="list==='3'">

      <select-all class="all" style="flex:2"></select-all>

      <select-part class="part" style="flex:3"></select-part>

      <select-area class="area" style="flex:3"></select-area>

      <select-time class="selectTime" style="flex:5">
        <span slot="weeks"> &nbsp;&nbsp;查询周期:</span>
      </select-time>

      <select-search class="search" style="flex:6"></select-search>

    </div>

  </section>
</template>

<script>
import selectStyle from "./select/style"; // filter select
import selectPart from "./select/part";
import selectArea from "./select/area";
import selectImportant from "./select/important";
// import selectNormal from "./select/normal";
import selectAll from "./select/all";
import selectTime from "./select/time";
import selectRent from "./select/rent";
import selectPrice from "./select/price";
import selectSearch from "./select/search"; // filter search

export default {
  name: "select-filter",
  props: {
    list: {
      default: "2",
      type: String
    }
  },
  data() {
    return {
      style: {
        name: "peopleType",
        placeholder: "筛选类型",
        options: [
          {
            value: "0",
            label: "筛选类型"
          },
          {
            value: "1",
            label: "跟进人"
          },
          {
            value: "2",
            label: "录入人"
          }
        ]
      }, // 筛选类型
      important: {
        name: "guImportanceTypeId",
        placeholder: "重视类型",
        options: [
          {
            value: "",
            label: "重视类型"
          },
          {
            value: "388dd699-580c-4c83-a78e-8aa8e11f2a9c",
            label: "重环境"
          },
          {
            value: "433d45c9-288d-42bb-a46d-1a50615ef42e",
            label: "重交通"
          },
          {
            value: "8cf32d38-f432-4971-ad1a-3901a5f9bfe3",
            label: "重租金"
          }
        ]
      }, // 来源
      origin: {
        name: "guCustomerSource",
        placeholder: "来源类型",
        options: [
          {
            value: "0",
            label: "来源类型"
          },
          {
            value: "1",
            label: "公司"
          },
          {
            value: "2",
            label: "个人"
          }
        ]
      }, // 来源类型
      from: {
        name: "guSourceTypeId",
        placeholder: "来源",
        options: [
          {
            value: "",
            label: "来源"
          },
          {
            value: "2e447f7b-b362-48b4-9523-9f5cac3fd117",
            label: "委托"
          },
          {
            value: "377de888-b8bf-4be9-8a53-aa61e509001e",
            label: "网络"
          },
          {
            value: "48e628ef-cc06-4674-8cf9-8e8f748d20e2",
            label: "客户介绍"
          }
        ]
      }, // 来源
      normal: {
        name: "guNewStatus",
        placeholder: "正常",
        options: [
          {
            value: "0",
            label: "全部"
          },
          {
            value: "1",
            label: "正常"
          },
          {
            value: "2",
            label: "我租"
          },
          {
            value: "3",
            label: "他租"
          },
          {
            value: "4",
            label: "已退"
          },
          {
            value: "5",
            label: "无效"
          }
        ]
      }, // 正常 我租 他租 已退 无效
      all: {
        name: "guXuqiuZhengZu",
        placeholder: "整租",
        options: [
          {
            value: "",
            label: "全部"
          },
          {
            value: "1",
            label: "整租"
          },
          {
            value: "2",
            label: "合租"
          },
          {
            value: "3",
            label: "床位"
          }
        ]
      }, // 整租 合租 床位
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
