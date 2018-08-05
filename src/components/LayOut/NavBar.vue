<template>
  <div class="navBar">
    <hamburger class="hamburger"></hamburger>

    <router-link v-if="item.name" v-for="(item, k) in getChildRoutes" :key="k" tag="span" :to="item.path">
      {{item.name}}
    </router-link>

  </div>
</template>
<script>
import { setItem, getItem } from '@/utils/auth';
import Hamburger from '@/components/Hamburger';
export default {
  name: 'navbar',
  components: {
    Hamburger
  },
  data() {
    return {
      headPath: ''
      // getChildRoutes:[]
    };
  },
  created() {},
  computed: {
    getChildRoutes() {
      var localRoutes = this.$store.getters.getChildRoutes;
      // console.log(localRoutes);
      if (localRoutes.length !== 0) {
        setItem('navRoutes', JSON.stringify(localRoutes));
      } else {
        localRoutes = JSON.parse(getItem('navRoutes'));
      }
      return localRoutes;
    }
  },
  watch: {},
  mounted() {
    // this.getChildRoutes()
  }
};
</script>
<style scoped>
.navBar {
  height: 60px;
  line-height: 58px;
  padding-left: 15px;
}
.active {
  font-size: 20px;
}
.hamburger {
  position: absolute;
  top: 0;
  right: 0;
}
span {
  display: inline-block;
  height: 100%;
  font-size: 14px;
  padding: 0 15px;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  /* margin-right: 5px; */
}
span::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  background-color: #02cab0;
  z-index: 2;
  height: 2px;

  transition: all 0.3s ease;
}

span.router-link-active {
  color: #02cab0;
}
span:hover::before {
  width: 100%;
}
span.router-link-active::before {
  width: 100%;
}
</style>
