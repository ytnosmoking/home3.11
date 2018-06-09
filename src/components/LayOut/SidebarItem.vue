<template>
  <ul style="position:relative">
    <template v-for=" (item,key) in routes">
      <router-link v-if="item.meta" :to="item.path" :key="key" tag="li" :ref="key"
       @mouseenter.native="showChild(item.path,key)" 
       @click.native="saveRoutes(item.path,key)">
        <svg-icon v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon"></svg-icon>
        <span>{{item.name}}</span>
      </router-link>
    </template>
    <sidebar-list :style="childStyle" @mouseleave.native="hideChild()" class="sidevarlist"  
    :routes="childRoutes" v-show="isShow"></sidebar-list>
  </ul>
</template>
<script>
import sidebarList from "./sidebarlist";
import { getItem } from "@/utils/auth";
export default {
  name: "sidebar-item",
  props: {
    routes: {
      type: Array,
      default:[]
    }
  },
  components: {
    sidebarList
  },
  data() {
    return {
      isShow: false,
      childStyle: {},
      childRoutes: [],
      fatherRoute:''
    };
  },
  computed: {
  
  },
  mounted() {
    console.log(this.routes);
    // this.$store.commit("SAVE_CHILD_ROUTES", this.routes[0].children)
  },
  methods: {
    showChild(item, ref) {
      this.isShow = true;
      let $dom = this.$refs[ref][0].$el;
      let chilldTop = (ref - 1) * 40 + "px";
      this.childStyle = { top: chilldTop };
      this.childRoutes = this.routes[ref].children;
    },
    hideChild() {
      this.isShow = false;
    },
    //  左侧点击 保存 子路由
    saveRoutes(params, index) {
      if (this.routes[index].path == params) {
        // console.log(this.routes[index].children);
        this.$store.commit("SAVE_CHILD_ROUTES", this.routes[index].children);
      }
    }
  }
};
</script>
<style scoped>
li {
  height: 40px;
  padding-left: 12px;
  font-size: 14px;
  list-style: none;
  line-height: 40px;
  color: #b3bbbb;
  cursor: pointer;
  position: relative;

  transition: all 0.3s ease;
}
li > span {
  margin-left: 8px;
  vertical-align: middle;
}
li:hover {
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
}
li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  background-color: #02cab0;
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
.sidebarlist {
  position: absolute;
  width: 115px;
  left: 100px;
  transition: all .3s ease;
}
</style>
