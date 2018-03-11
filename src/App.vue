<template>
  <div id="app">
    <div>test vscode</div>
    <router-link to="/index"> index</router-link>
    <router-link to="/dashboard">dashboard</router-link>
    <transition mode="out-in"
    enter-active-class="animated zoomInLeft"
    leave-active-class="animated zoomOutRight">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
