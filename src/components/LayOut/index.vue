<template>
  <div class="app-wrapper">
    <side-bar class="sidebar-container"></side-bar>
    <div class="main-container">
      <nav-bar ></nav-bar>
      <app-main></app-main>
    </div>
    <div class="mainShadow" v-show="commonShow">

    </div>
  </div>

</template>
<script>
import SideBar from "./Sidebar/SideBar";
import NavBar from "./Navbar/NavBar";
import AppMain from "./AppMain";
export default {
  name: "layout",
  components: {
    SideBar,
    NavBar,
    AppMain
  },
  data() {
    return {};
  },
  computed: {
    commonShow() {
      // alert(1)
      console.log(this.$store.getters.commonShow)
      return this.$store.getters.commonShow;
    }
  }
};
</script>
<style>
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
  z-index: 99;
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
#app .app-main {
  /* background-color: #ccc; */
  display: block;
}
.mainShadow {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .6);
  z-index: 100;
}
</style>

