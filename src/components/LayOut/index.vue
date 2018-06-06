<template>
  <div class="app-wrapper">
    <side-bar class="sidebar-container"></side-bar>
    <div class="main-container">
      <nav-bar></nav-bar>
      <app-main></app-main>
    </div>
  </div>

  <!-- <el-container class="oneContainer">
      <el-aside width="200px" style="background-color:#545c64">
         <nav-left class="navLeft"></nav-left>
      </el-aside>
      <el-container>
       
          <nav-bar></nav-bar>
          <br>
       
        <el-main>
          <transition mode="out-in"
          enter-active-class="animated bounceInUp"
          leave-active-class="animated bounceOutUp">
            <router-view/>
          </transition>
        </el-main>
      </el-container>
    </el-container> -->

  <!-- <nav-left class="navLeft"></nav-left>
    <transition mode="out-in"
    enter-active-class="animated zoomInLeft"
    leave-active-class="animated zoomOutRight">
      <router-view/>
    </transition> -->

</template>
<script>
import SideBar from "@/components/LayOut/SideBar";
import NavBar from "@/components/LayOut/NavBar";
import AppMain from "@/components/LayOut/AppMain";
export default {
  name: "layout",
  components: {
    SideBar,
    NavBar,
    AppMain
  },
  data() {
    return {};
  }
};
</script>
<style >
#app .el-submenu .el-menu-item {
  min-width: 100px !important;
}

#app .sidebar-container {
  width: 100px !important;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
}
.sidebar-container a {
  display: inline-block;
  width: 100%;
}

.sidebar-container .el-menu {
  border: none;
  width: 100%;
}
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
#app .main-container {
  min-height: 100%;

  margin-left: 100px;
}
</style>

