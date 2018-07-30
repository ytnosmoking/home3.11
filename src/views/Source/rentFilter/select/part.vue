<template>
  <div class="partCont">
    <div type="text" placeholder="部门/人员" class="partVal"  @click.stop="getFocus">{{partMan|| '部门/人员'}}</div>
    <div class="partList" v-show="showPart" @click.stop>
      <input type="text" class="partSearch" placeholder="人员">
      <i class="el-icon-search partSearch-icon"></i>
      <div class="partUl">
        <part-tree :list="getPartMent" class="partMent" :func="getValue" :getUser="getUser"></part-tree>
        <ul class="partStaff">
          <li v-for="(item, index) in getPartUser" :key="index" :data-id="item.id" @click="getUserid(item)">
            {{item.nickName}}
          </li>
        </ul>
      </div>
      <div class="partReset">
        <span>双击选择部门,单击选择员工</span>
        <el-button type="info" size="small" @click="reset">重置</el-button>
      </div>
    </div>

  </div>
</template>

<script>
import partTree from "./tree";
import Bus from "../bus";
let time = null;
export default {
  name: "select-part",
  components: {
    partTree
  },
  props: {
    styleName: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      partMan: "",
      showPart: false,
      value: []
    };
  },
  computed: {
    getPartMent() {
      return this.$store.getters.getPartMent
    },
    getPartUser() {
      return this.$store.getters.getPartUser
    }
  },
  methods: {
    getValue(value) { // 拿到部门
      clearTimeout(time)
      // alert(1)
      console.log(value);
      this.partMan = value.name;
      this.showPart = false;
      // departmentId
      const tableInfo = Object.assign({}, {
        typeName: this.styleName.ment,
        value: value.id
      })
      this.$store.commit({ type: "sourceRent/" + this.styleName.userid, value: "" })
      this.$store.dispatch({ type: "sourceRent/getTable", tableInfo })
    },
    getUser(value) { // 拿到部门 请求人员
      clearTimeout(time)
      const that = this
      time = setTimeout(() => {
        that.$store.dispatch("getPartUser", value)
      }, 300);
    },
    getFocus() {
      this.showPart = true;
      if (this.getPartMent.length === 0) {
        this.$store.dispatch("getPartMent", {})
      }
    },
    hideShowPart() {
      this.showPart = false;
    },
    getUserid(item) {
      this.partMan = item.nickName
      this.showPart = false
      console.log(item.id)
      // guNowCreateId
      const tableInfo = Object.assign({}, {
        typeName: this.styleName.userid,
        value: item.id
      })
      this.$store.commit({ type: "sourceRent/" + this.styleName.ment, value: "" })
      this.$store.dispatch({ type: "sourceRent/getTable", tableInfo })
    },
    reset() {
      this.partMan = ""
    }
  },

  mounted() {
    const that = this;
    Bus.$on("hidePart", function() {
      that.showPart = false
    })
  }

};
</script>

<style lang='less' scoped>
.partCont {
  position: relative;
}
.partVal {
  width: 100%;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  font-size: 14px;
  color: #606266;
  box-sizing: border-box;
  transition: all .3s ease;
  &:hover {
    border-color: #c0c4cc;
  }
}
.partList {
  width: 330px;
  position: absolute;
  left: 0;
  top: 48px;
  box-shadow: rgba(128, 128, 128, 0.3) 1px 1px 4px;
  background: rgb(255, 255, 255);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(222, 223, 229);
  border-image: initial;
  padding: 8px;
  overflow: hidden;
  z-index: 2;
  .partSearch {
    height: 30px;
    font-size: 14px;
    width: 100%;
    box-sizing: border-box;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    outline: none;
    background: rgb(239, 242, 248);
    padding: 0px 10px;
    padding-right: 30px;
  }
  .partSearch-icon {
    position: absolute;
    right: 15px;
    top: 15px;
    font-size: 20px;
  }
  .partUl {
    display: flex;
    // height: 250px;
    margin-left: 15px;
    padding-top: 15px;
    padding-bottom: 10px;
    .partMent {
      flex: 2;
      border-right: 1px solid rgb(223, 230, 255);
      & > li {
        display: none;
      }
    }
    .partStaff {
      flex: 1;
      line-height: 27px;
      font-size: 12px;
      color:#777a82;
    }
    .partMent,
    .partStaff {
      padding: 0 8px;
      height: 250px;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 10px;
        height: 5px;
      }
      &::-webkit-scrollbar-corner,
      &::-webkit-scrollbar-track {
        background-color: #e2e2e2;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 0;
        background-color: rgba(0, 0, 0, 0.3);
      }
      &::-webkit-scrollbar-corner,
      &::-webkit-scrollbar-track {
        background-color: #e2e2e2;
      }
    }
  }
  .partReset {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 8px 0;
    border-top: 1px solid rgb(230, 230, 230);
    margin-top: 15px;
    font-size: 14px;
    span {
      color: rgb(179, 184, 202);
    }
  }
}
</style>