<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger></hamburger>

    <!-- <breadcrumb class="breadcrumb-container"></breadcrumb> -->

    <!-- <div class="right-menu">
      <error-log class="errLog-container right-menu-item"></error-log>

      <el-tooltip effect="dark" :content="$t('navbar.screenfull')" placement="bottom">
        <screenfull class="screenfull right-menu-item"></screenfull>
      </el-tooltip>

      <lang-select class="international right-menu-item"></lang-select>

      <el-tooltip effect="dark" :content="$t('navbar.theme')" placement="bottom">
        <theme-picker class="theme-switch right-menu-item"></theme-picker>
      </el-tooltip>

      <el-dropdown class="avatar-container right-menu-item" trigger="click">
        <div class="avatar-wrapper">
          <img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'">
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>
              {{$t('navbar.dashboard')}}
            </el-dropdown-item>
          </router-link>
          <a target='_blank' href="https://github.com/PanJiaChen/vue-element-admin/">
            <el-dropdown-item>
              {{$t('navbar.github')}}
            </el-dropdown-item>
          </a>
          <el-dropdown-item divided>
            <span @click="logout" style="display:block;">{{$t('navbar.logOut')}}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div> -->
  </el-menu>
</template>
<script>
  import Hamburger from '@/components/Hamburger'
  export default {
    name: 'navbar',
    components: {
      Hamburger
    },
    data() {
      return {
        headPath:''
      }
    },
    watch:{
      $route (to, from) {
        console.log(to)
        // this.headPath =to.path
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
  .navbar {
    height: 50px;
    line-height: 50px;
    border-radius: 0px !important;
  }
  .active {
    font-size: 20px;
  }
</style>
