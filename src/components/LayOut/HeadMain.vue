<template>
  <!-- <div> -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="main-header">
      <el-breadcrumb-item :to="{ path: '/index/user' }" :class="{active:  this.headPath.indexOf('index')!=-1}">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/dashboard'}" :class="{active:  this.headPath.indexOf('dashboard')!=-1}">DashBoard</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  <!-- </div> -->
</template>
<script>
  export default {
    name: 'headMain',
    data() {
      return {
        headPath:''
      }
    },
    watch:{
      $route (to, from) {
        console.log(to)
        this.headPath =to.path
      }
    },
    mounted() {
      
    }
  }
</script>
<style scope>
  .main-header {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .active {
    font-size: 20px;
  }
</style>
