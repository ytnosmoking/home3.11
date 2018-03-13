<template>
 <section class="app-main" style="min-height: 100%">
    <transition 
    name="fade" 
    mode="out-in" 
    enter-active-class="animated fadeInRight" 
    leave-active-class="animated fadeOutRight">
      <keep-alive :include="cachedViews">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
  export default {
    name: 'app-main',
    data() {
      return {

      }
    },
    computed: {
      cachedViews() {
        
      }
    } 
  }
</script>
