<template>
  <div>
    <el-dropdown @command="handleCommand1">
      <span class="el-dropdown-link dropDown1">

      </span>
      <el-dropdown-menu slot="dropdown" class="eldropMenu1">
        <el-dropdown-item v-for="(item, key) in dropMenu" :command=item.command class="eldropMenuItem" :class=item.style :key="key">
          <span class="eldropItem">
            <svg-icon :icon-class="item.icon"></svg-icon>
          </span>
          <span>{{item.iconName}}</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        <img src="../../../assets/images/index_touxiang.png" alt="" class="userPic">
        <span style="margin-left:10px">
          修改密码
        </span>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="change">修改密码</el-dropdown-item>
        <el-dropdown-item command="system">系统消息</el-dropdown-item>
        <el-dropdown-item command="out">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { removeItem } from "@/utils/auth";
export default {
  name: "hamburger",
  data() {
    return {
      dropMenu: [
        {
          command: "add-daiban",
          style: "bd15",
          icon: "book",
          iconName: "添加代办"
        },
        {
          command: "house-in",
          style: "bd24",
          icon: "book",
          iconName: "房源录入"
        },
        {
          command: "contract-in",
          style: "bd01",
          icon: "book",
          iconName: "合同录入"
        },
        {
          command: "add-book",
          style: "bdf3",
          icon: "book",
          iconName: "添加预定"
        },
        {
          command: "add-chargeup",
          style: "bdf6",
          icon: "book",
          iconName: "添加记账"
        }
      ],
      isShow: false
    };
  },
  methods: {
    handleCommand(command) {
      if (command === "out") {
        removeItem("token");
        removeItem("navRoutes");
        this.$router.push({ path: "/login" });
      } else {
        this.$message("click on item " + command);
        this.$store.commit("SET_COMMON", command);
        this.$store.commit("CHANGE_COMMON", true);
      }
    },
    handleCommand1(command) {
      // console.log(command)
      // this.isShow = !this.isShow;

      this.$store.commit("SET_COMMON", command);
      // let isShow =!this.isShow
      this.$store.commit("CHANGE_COMMON", true);
    }
  }
};
</script>
<style scoped lang="less">
.dropDown1 {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #02b39a;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  position: relative;
}

.dropDown1::before,
.dropDown1::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 4px;
  background-color: #fff;
  transform: translate(-50%, -50%);
}
.dropDown1::before {
  transform-origin: left top;
  transform: rotateZ(90deg) translate(-50%, -50%);
}
.eldropMenu1 {
  padding-left: 20px;
  padding-top: 0;
  background: none;
  border: none;
  box-shadow: none;
}
.eldropItem {
  display: inline-block;
  line-height: 36px;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  text-align: center;
}

.eldropMenuItem {
  /* height: 40px; */
  margin-top: 10px;
  padding: 0 10px 0 0;
  border-radius: 20px;
  /* border: 1px solid blue; */
  box-sizing: border-box;
}

.el-dropdown {
  width: 133px;
  text-align: center;
  transition: all 0.3s ease;
}
.el-dropdown:hover {
  /* background-color: #e4e7ed; */
  background-color: #f8f8f8;
}
// .el-dropdown-menu {
//   /* width: 133px; */
// }
.userPic {
  width: 30px;
  height: 30px;
  vertical-align: middle;
}
@15: #1569db;
@24: #24b0fc;
@01: #01be6a;
@f3: #f36222;
@f6: #f6b103;
.bd15 {
  border: 1px solid @15;
  color: @15;
  & > span:nth-child(1) {
    background-color: @15;
  }
}
.bd24 {
  border: 1px solid @24;
  color: @24;
  & > span:nth-child(1) {
    background-color: @24;
  }
}
.bd01 {
  border: 1px solid @01;
  color: @01;
  & > span:nth-child(1) {
    background-color: @01;
  }
}
.bdf3 {
  border: 1px solid @f3;
  color: @f3;
  & > span:nth-child(1) {
    background-color: @f3;
  }
}
.bdf6 {
  border: 1px solid @f6;
  color: @f6;
  & > span:nth-child(1) {
    background-color: @f6;
  }
}
</style>

