<template>
  <section class="app-main" style="min-height: 100%">
    <transition name="fade" mode="out-in" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
      <!-- <keep-alive :include="cachedViews"> -->
      <keep-alive >
        <router-view></router-view>
      </keep-alive>
    </transition>
    <component v-bind:is="commonCom" :class="{zoomIn: commonShow,zoomOut:!commonShow}"  class="common animated"></component>
    <!-- <component v-bind:is="commonCom" :class="{zoomIn: commonShow}" v-show="commonShow" class="common animated zoomIn"></component> -->

  </section>
</template>

<script>

import AddDaiban from '@/views/Common/AddDaiban'
import HouseIn from '@/views/Common/HouseIn'
export default {
  name: "app-main",
  data() {
    return {
      isShow: false,
      oldCom:""
    }
  },
  components:{
    AddDaiban,
    HouseIn
  },
  computed: {
    cachedViews() {},
    commonCom() {
      return this.$store.getters.commonCom;
    },
    commonShow() {
      // alert(1)
      console.log(this.$store.getters.commonShow)
      return this.$store.getters.commonShow;
    }
  }
};
</script>
<style scoped>
.app-main {
  background: #ccc;
}
.common {
  position: fixed;
  width: 80%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  transform-origin: left top;
  background-color: gold;
  z-index: 101;
}
</style>
