<template>

    <el-container class="oneContainer">
      <el-aside width="200px" style="background-color:#545c64">
         <nav-left class="navLeft"></nav-left>
      </el-aside>
      <el-container>
        <el-header>
          <head-main></head-main>
        </el-header>
        <el-main>
          <transition mode="out-in"
          enter-active-class="animated zoomInRight"
          leave-active-class="animated zoomOutRight">
            <router-view/>
          </transition>
        </el-main>
      </el-container>
    </el-container>

    <!-- <nav-left class="navLeft"></nav-left>
    <transition mode="out-in"
    enter-active-class="animated zoomInLeft"
    leave-active-class="animated zoomOutRight">
      <router-view/>
    </transition> -->

</template>
<script>
import NavLeft from '@/components/LayOut/NavLeft'
import HeadMain from '@/components/LayOut/HeadMain'
  export default {
    name: 'layout',
    components:{
      NavLeft,
      HeadMain
    },
    data() {
      return {

      }
    }
  }
</script>
<style>
  .oneContainer {
    height: 100%;
  }
 
</style>

