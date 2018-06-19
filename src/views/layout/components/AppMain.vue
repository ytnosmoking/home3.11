<template>
  <section class="app-main" style="min-height：100%">
    <transition name="fade-transfrom" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key"></router-view>
      </keep-alive>  
    </transition>

  </section>
</template>
<script>
export default {
  name:"app-main",
  computed:{
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.fullPath
    }
  }
}
</script>
