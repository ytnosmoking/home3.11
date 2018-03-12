<template>
  <div id="app">
    <router-view></router-view>
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
  html,body {
    height: 100%;
  }
  #app {
    height: 100%;
  }
</style>
