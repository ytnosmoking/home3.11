<template>
  <div id="app">
    <transition mode="out-in"
   enter-active-class="animated fadeInLeft"
    leave-active-class="animated fadeOutRight">
      <router-view></router-view>
    </transition>
    <!-- <div>test vscode company</div>
    <router-link to="/index"> index</router-link>
    <router-link to="/dashboard">dashboard</router-link>
    <transition mode="out-in"
    enter-active-class="animated zoomInLeft"
    leave-active-class="animated zoomOutRight">
      <router-view/>
    </transition> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  a, a:focus, a:hover {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
}
  html,body {
    height: 100%;
  }
  #app {
    height: 100%;
    /* overflow: hidden; */
  }
  #app rect {
    fill: #fff;
    color: #fff;
  }
 
</style>
