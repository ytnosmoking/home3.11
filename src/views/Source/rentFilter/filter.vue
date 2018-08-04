<template>
  <section class="filter">
    <div v-show="list!=='3'" class="first">
      <!-- 筛选类型 style-->
      <select-style class="style" 
        :styleOptions="peopleType.options" 
        :placeholder="peopleType.placeholder"
        :styleName="peopleType.name" 
        :getChange="getChange">
      </select-style>

      <!-- 部门/人员 part -->
      <select-part class="part" :styleName="partMent">
      </select-part>

      <!-- 区域 area -->
      <select-area class="area"></select-area>

      <!-- 重视类型 important -->
      <select-style class="important" 
        :styleOptions="guImportanceTypeId.options" 
        :placeholder="guImportanceTypeId.placeholder" 
        :styleName="guImportanceTypeId.name" 
        :getChange="getChange">
      </select-style>

      <!--  来源类型  公司 个人 origin -->
      <select-style class="origin" 
        :styleOptions="guCustomerSource.options" 
        :placeholder="guCustomerSource.placeholder" 
        :styleName="guCustomerSource.name" :getChange="getChange">
      </select-style>

      <!-- 来源  委托  网络  from -->
      <select-style class="from" 
        :styleOptions="guSourceTypeId.options" 
        :placeholder="guSourceTypeId.placeholder" 
        :styleName="guSourceTypeId.name" 
        :getChange="getChange">
      </select-style>

      <!-- 全部 正常 我租 他租 normal-->
      <select-style class="normalRent" 
        :styleOptions="guNewStatus.options" 
        :placeholder="guNewStatus.placeholder" 
        :styleName="guNewStatus.name" 
        :getChange="getChange">
      </select-style>

      <!-- 需求类型 整租 合租 床位 -->
      <select-style class="all" 
        :styleOptions="guXuqiuZhengZu.options" 
        :placeholder="guXuqiuZhengZu.placeholder" 
        :styleName="guXuqiuZhengZu.name" 
        :getChange="getChange">
      </select-style>

    </div>
    <div v-show="list!=='3'">

      <!-- 录入时间 datatype -->
      <select-time style="flex:6">
        <el-select v-model="datatype" placeholder="录入时间" class="time" slot="time" @change="getDatatype">
          <el-option v-for="item in options" :key="item.id" :label="item.key" :value="item.id">
          </el-option>
        </el-select>
      </select-time>

      <!-- 租期 rent -->
      <select-style class="rent"
        style="flex:2" 
        :styleOptions="guXuqiuZuqi.options" 
        :placeholder="guXuqiuZuqi.placeholder" 
        :styleName="guXuqiuZuqi.name" 
        :getChange="getChange">
      </select-style>

      <select-price class="price" style="flex:3" price="价格区间" low="最低价格" up="最高价格"></select-price>

      <select-search class="search" style="flex:5"></select-search>

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
import selectStyle from "components/Select/style"; //
import selectPart from "components/Select/part";
import selectArea from "components/Select/area";
import selectImportant from "components/Select/important";
import selectAll from "components/Select/all";
import selectTime from "components/Select/time";
import selectPrice from "components/Select/price";
import selectSearch from "components/Select/search"; // filter search

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
      actionType: "source",
      // 筛选类型
      peopleType: {
        name: "peopleType",
        placeholder: "筛选类型",
        options: [
          {
            id: "0",
            key: "筛选类型"
          },
          {
            id: "1",
            key: "跟进人"
          },
          {
            id: "2",
            key: "录入人"
          }
        ]
      },
      //  部门
      partMent: {
        ment: "departmentId",
        userid: "guNowCreateId"
      },
      // 重视类型
      guImportanceTypeId: {
        name: "guImportanceTypeId",
        placeholder: "重视类型",
        mark: "97efd4f6-c163-4b6d-8bf1-7b4887f45930",
        options: []
      },
      // 来源类型
      guCustomerSource: {
        name: "guCustomerSource",
        placeholder: "来源类型",
        options: [
          {
            id: "",
            key: "来源类型"
          },
          {
            id: "1",
            key: "公司"
          },
          {
            id: "2",
            key: "个人"
          }
        ]
      },
      // 来源
      guSourceTypeId: {
        name: "guSourceTypeId",
        placeholder: "来源",
        mark: "44d8d93e-73f2-475e-a854-ec0a0cf513ad",
        options: []
      },
      // 正常 我租 他租 已退 无效
      guNewStatus: {
        name: "guNewStatus",
        placeholder: "正常",
        options: [
          {
            id: "0",
            key: "全部"
          },
          {
            id: "1",
            key: "正常"
          },
          {
            id: "2",
            key: "我租"
          },
          {
            id: "3",
            key: "他租"
          },
          {
            id: "4",
            key: "已退"
          },
          {
            id: "5",
            key: "无效"
          }
        ]
      },
      // 整租 合租 床位
      guXuqiuZhengZu: {
        name: "guXuqiuZhengZu",
        placeholder: "整租",
        options: [
          {
            id: "",
            key: "全部"
          },
          {
            id: "1",
            key: "整租"
          },
          {
            id: "2",
            key: "合租"
          },
          {
            id: "3",
            key: "床位"
          }
        ]
      },
      datatype: "",
      // 录入时间 跟进时间 入住时间
      options: [
        {
          id: "0",
          key: "跟进时间"
        },
        {
          id: "1",
          key: "入住时间"
        },
        {
          id: "2",
          key: "录入时间"
        }
      ],
      // 租期
      guXuqiuZuqi: {
        name: "guXuqiuZuqi",
        placeholder: "租期",
        mark: "df5ac7e8-e0d8-4345-83cd-ed30317cca3f",
        options: []
      }
    };
  },
  components: {
    selectStyle,
    selectPart,
    selectArea,
    selectImportant,
    selectAll,
    selectTime,
    selectPrice,
    selectSearch
  },
  methods: {
    getData(data) {
      this.$store
        .dispatch({
          type: `${this.actionType}/${data.name}`,
          mark: data.mark
        })
        .then(res => {
          console.log(res.list);
          if (data.mark === "guXuqiuZuqi") {
            res.list.unshift({ mark: "", key: "租期", id: "" });
          }
          this[data.name].options = res.list;
        });
    },
    // 时间
    getDatatype() {
      this.$store.commit({
        type: this.actionType + "/getDatatype",
        dataType: this.datatype
      });
    },
    // select-style Function
    getChange(styleName, styleOptions, value) {
      console.log(value);
      if (
        styleName === "guSourceTypeId" ||
        styleName === "guImportanceTypeId"
      ) {
        let valueLabel = "";
        styleOptions.filter(item => {
          if (item.value === this.value) {
            valueLabel = item.label;
            return;
          }
        });
        this.$store.commit({
          type: this.actionType + "/" + styleName.replace("Id", "Name"),
          value: valueLabel
        });
      }
      const tableInfo = Object.assign({}, { typeName: styleName, value });
      this.$store.dispatch({ type: this.actionType + "/getTable", tableInfo });
    }
  },
  mounted() {
    this.getData(this.guSourceTypeId)
    this.getData(this.guImportanceTypeId)
    this.getData(this.guXuqiuZuqi)
  }
};
</script>

<style lang='less' scoped>
.filter {
  background: #fff;
  padding: 20px;
  // padding-bottom: 0;
  & > div {
    display: flex;
    &.first {
      & > div {
        flex: 1;
      }
    }
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
    border: none !important;
  }
}
.search {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
