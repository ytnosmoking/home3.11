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
 
</style>
