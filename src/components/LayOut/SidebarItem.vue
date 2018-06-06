<template>
  <div>
    <template v-for="item in routes" v-if="item.children">
      <router-link
        v-if="item.children.length===1 && !item.children[0].children"
        :to="item.path+'/'+item.children[0].path" 
        :key="item.children[0].name" tag="li"
        active-class="active">
        <el-menu-item :index="item.path+'/'+item.children[0].path" @click="getInfo(item.children[0].name)">
          <svg-icon v-if="item.children[0].meta&&item.children[0].meta.icon" :icon-class="item.children[0].meta.icon"></svg-icon>
          <span>{{item.children[0].name}}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-else :index="item.name||item.path" :key="item.name">
        <template slot="title">
          <svg-icon v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon"></svg-icon>
          <!-- <i v-if="item.meta&&item.meta.icon" class="el-icon-location"></i> -->
          <span>{{item.meta.icon}}</span>
        </template>

        <template v-for="child in item.children" v-if="!child.hidden">
          <sidebar-item v-if="child.children&&child.children.length>0" :routes="[child]" :key="child.path"></sidebar-item>

          <router-link v-else :to="item.path+'/'+child.path" :key="child.name" tag="li" active-class="active">
            <el-menu-item :index="item.path+'/'+child.path">
              <!-- <i v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></i> -->
              <svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon>
              <span v-if="child.meta&&child.meta.title">{{child.meta.title}}</span>
            </el-menu-item>
          </router-link>
        </template>

      </el-submenu>
    </template>

  </div>
</template>
<script>
export default {
  name: "sidebar-item",
  props: {
    routes: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {};
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
    }
  }
};
</script>
<style scoped>
.el-menu .el-menu--inline {
  background-color: rgba(0, 0, 0, 0)!important;
}
.el-submenu .el-menu-item {
  padding: 0!important;
}
.el-submenu.is-opened {
  background-color: #1f323c ;
}
.el-menu-item.is-active {
  background-color: #1f323c !important;
}
.el-menu-item:hover {
  background-color: #1f323c ;
}
.active {
  background-color: gold;
}
</style>
