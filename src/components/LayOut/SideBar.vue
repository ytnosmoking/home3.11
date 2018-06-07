<template>
  <scroll-bar>
    
      <sidebar-item :routes="getRouter"></sidebar-item>

  </scroll-bar>
</template>
<script>
import ScrollBar from "@/components/ScrollBar";
import SidebarItem from "@/components/LayOut/SidebarItem";
export default {
  name: "sidebar",
  components: {
    ScrollBar,
    SidebarItem
  },
  data() {
    return {
      forRouter: true
    };
  },
  computed: {
    isCollapse() {
      return false;
    },
    getRouter() {
      console.log(this.$store.state);
      return this.$store.state.routes.userRouter;
    }
  },
  created() {
    this.getRouters();
  },
  mounted() {
    console.log(this.getRouter);
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    getRouters() {
      this.$store.commit("getRouters");
    }
  }
};
</script>
