<template>
  <ul>
    <router-link v-if="item.name" v-for="(item, k) in routes" :key="k" tag="li" 
    :to="item.path"
     @click.native="saveRoutes(item.path,k)">
      {{item.name}}
    </router-link>
  </ul>
</template>
<script>
export default {
  name: "sidebarlist",
  props: {
    routes: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods:{
     //  左侧点击 保存 子路由
    saveRoutes(params, index) {
      // if (this.routes[index].path == params) {
        // console.log(this.routes[index].children);
        this.$store.commit("SAVE_CHILD_ROUTES", this.routes);
      // }
    }
  }
};
</script>
<style scoped>
li {
  text-align: center;
  background: #1f323c;
  list-style: none;
  text-align: center;
  height: 46px;
  line-height: 46px;
  font-size: 14px;
  color: #b3bbbb;
  cursor: pointer;
  transition: all .3s ease;
}

li:hover {
  color: #fff;
   background: rgba(0, 0, 0, .7)
}
</style>


