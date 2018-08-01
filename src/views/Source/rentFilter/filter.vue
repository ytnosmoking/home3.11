<template>
  <section class="filter">
    <div v-show="list!=='3'" class="first">
      <!-- 筛选类型 -->
      <select-style class="style" :styleOptions="style.options" :placeholder="style.placeholder" :styleName="style.name"></select-style>

      <!-- part -->
      <select-part class="part" :styleName="partMent"></select-part>

      <!-- area -->
      <select-area class="area" ></select-area>

      <!-- important 重视类型 -->
      <select-style class="important" :styleOptions="important.options" :placeholder="important.placeholder" :styleName="important.name"></select-style>

      <!--  来源类型  公司 个人 -->
      <select-style class="origin" :styleOptions="origin.options" :placeholder="origin.placeholder" :styleName="origin.name"></select-style>

      <!-- 来源  委托  网络  -->
      <select-style class="from" :styleOptions="from.options" :placeholder="from.placeholder" :styleName="from.name"></select-style>

      <!-- 全部 正常 我租 他租  -->
      <select-style class="normalRent" :styleOptions="normal.options" :placeholder="normal.placeholder" :styleName="normal.name"></select-style>

      <!-- 需求类型 整租 合租 床位 -->
      <select-style class="all" :styleOptions="all.options" :placeholder="all.placeholder" :styleName="all.name"></select-style>

    </div>
    <div v-show="list!=='3'">
      <select-time style="flex:6">
        <el-select v-model="datatype" placeholder="录入时间" class="time" slot="time" @change="getDatatype">
          <el-option v-for="item in options" :key="item.id" :label="item.key" :value="item.id">
          </el-option>
        </el-select>
      </select-time>

      <select-style class="rent" style="flex:2" :styleOptions="rentTime.options" :placeholder="rentTime.placeholder" :styleName="rentTime.name"></select-style>
      <!-- <select-rent class="rent" style="flex:2"></select-rent> -->

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
import selectStyle from "./select/style"; // filter select
import selectPart from "./select/part";
import selectArea from "./select/area";
import selectImportant from "./select/important";
import selectAll from "./select/all";
import selectTime from "./select/time";
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
      }, // 筛选类型
      partMent: {
        ment: "departmentId",
        userid: "guNowCreateId"
      }, //  部门
      important: {
        name: "guImportanceTypeId",
        placeholder: "重视类型",
        mark: "97efd4f6-c163-4b6d-8bf1-7b4887f45930",
        options: []
      }, // 重视类型
      origin: {
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
      }, // 来源类型
      from: {
        name: "guSourceTypeId",
        placeholder: "来源",
        mark: "44d8d93e-73f2-475e-a854-ec0a0cf513ad",
        options: []
      }, // 来源
      normal: {
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
      }, // 正常 我租 他租 已退 无效
      all: {
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
      }, // 整租 合租 床位
      datatype: "", // 录入时间 跟进时间 入住时间
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
      rentTime: {
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
    getFrom() {
      this.$store
        .dispatch({ type: "sourceRent/getFrom", mark: this.from.mark })
        .then(res => {
          console.log(res.list);
          this.from.options = res.list;
        });
    },
    getImportant() {
      this.$store
        .dispatch({
          type: "sourceRent/getImportant",
          mark: this.important.mark
        })
        .then(res => {
          console.log(res.list);
          this.important.options = res.list;
        });
    },
    getRent() {
      this.$store
        .dispatch({ type: "sourceRent/getRent", mark: this.rentTime.mark })
        .then(res => {
          console.log(res.list);
          res.list.unshift({ mark: "", key: "租期", id: "" });
          this.rentTime.options = res.list;
        });
    },
    getDatatype() {
      this.$store.commit({
        type: "sourceRent/getDatatype",
        dataType: this.datatype
      });
    }
  },
  mounted() {
    this.getFrom();
    this.getImportant();
    this.getRent();
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
