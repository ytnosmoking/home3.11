<template>
  <div class="partCont">
    <input type="text" placeholder="部门/人员" class="partVal" v-model="partMan" @click.stop="getFocus">
    <div class="partList" v-show="showPart" @click.stop>
      <input type="text" class="partSearch" placeholder="人员" v-model="partMan">
      <i class="el-icon-search partSearch-icon"></i>
      <div class="partUl">
        <part-tree :list="list.children" class="partMent" :func="getValue"></part-tree>
        <ul class="partStaff">

        </ul>
      </div>
      <div class="partReset">
        <span>双击选择部门,单击选择员工</span>
        <el-button type="info" size="small">重置</el-button>
      </div>
    </div>

  </div>
</template>

<script>
import partTree from "./tree";
export default {
  name: "select-part",
  components: {
    partTree
  },
  data() {
    return {
      partMan: "",
      showPart: false,
      value: [],
      list: {
        children: [
          {
            name: 1,
            id: 1,
            open: false,
            children: [
              {
                name: 1.1,
                id: 1.1
              },
              {
                name: 1.2,
                id: 1.2
              },
              {
                name: 1.3,
                id: 1.3
              }
            ]
          },
          {
            name: 2,
            id: 2,
            open: false,
            children: [
              {
                name: 2.1,
                id: 2.1
              },
              {
                name: 2.2,
                id: 2.2
              }
            ]
          },
          {
            name: 3,
            id: 3,
            open: false,
            children: [
              {
                name: 3.1,
                id: 3.1,
                open: false,
                children: [
                  {
                    name: 3.11,
                    id: 3.11
                  },
                  {
                    name: 3.12,
                    id: 3.12,
                    open: false,
                    children: [
                      {
                        name: 3.121,
                        id: 3.121
                      }
                    ]
                  }
                ]
              },
              {
                name: 3.2,
                id: 3.2,
                open: false,
                children: [
                  {
                    name: 3.21,
                    id: 3.21
                  },
                  {
                    name: 3.22,
                    id: 3.22
                  },
                  {
                    name: 3.23,
                    id: 3.23
                  }
                ]
              }
            ]
          }
        ]
      }
    };
  },
  computed: {

  },
  methods: {
    getValue(value) {
      console.log(value);
      this.partMan = value.name;
      this.showPart = false;
      console.log(this.showPart);
    },
    getFocus() {
      this.showPart = true;
      console.log(this.showPart);
    },
    hideShowPart() {
      this.showPart = false;
    }
  },
  mounted() {
    const that = this;
    document.onclick = function() {
      console.log(that.showPart);
      that.showPart = false;
    };
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
  color: #606266;
  box-sizing: border-box;
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