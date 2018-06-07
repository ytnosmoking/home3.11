<template>
  <ul>
    <template v-for=" (item,key) in routes">
      <router-link 
        v-if="item.meta" 
        :to="item.path" 
        :key="key" 
        tag="li" 
        :ref="item" 
        @click.native="saveRoutes(item.path,key)">
        <svg-icon v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon"></svg-icon>
        <span>{{item.name}}</span>
      </router-link>
    </template>
  </ul>
</template>
<script>
export default {
  name: "sidebar-item",
  props: {
    routes: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isShow: false
    };
  },
  mounted() {
    console.log(this.routes);
  },
  methods: {
    getInfo(params) {
      // alert(1)
      if (params === "图书") {
        this.$http.post("/book/1003078").then(res => {
          // console.log(res.data)
        });
      } else if (params == "电影") {
        this.$http.post("/movie/top250").then(res => {
          //  console.log(res.data)
        });
      } else {
        return;
      }
    },
    showChild(ref) {},
    hideChild() {},
    saveRoutes(params,index) {
      // alert(1)
      console.log(index)
      console.log(params)
      if(this.routes[index].path ==params) {
        console.log(this.routes[index].children)
        this.$store.commit('SAVE_CHILD_ROUTES', this.routes[index].children)
      }
    }
  }
};
</script>
<style scoped>
li {
  height: 50px;
  padding-left: 20px;
  font-size: 14px;
  list-style: none;
  line-height: 50px;
  color: #fff;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
}
li:hover {
  background: rgba(0, 0, 0, 0.7);
}
li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  background-color: #02CAB0;
  height: 0;
  transition: all 0.3s ease;
}
li:hover::before {
  height: 100%;
}
.router-link-active {
  background: rgba(0, 0, 0, 0.7);
}
li.router-link-active::before {
  height: 100%;
}
</style>
