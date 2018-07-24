<template>
  <ul >
    <li v-for="(item, key) in list" :key="key" >
      <div :data-id="item.id" :data-name="item.name" @dblclick.stop="func(item)" >
        <i v-if="item.children" @click.stop="toggleItem(item,key)"  :ref="item.id"></i>{{item.name}}
      </div>
      <tree-menu v-show="item.open" v-if="item.children" :list="item.children" :func="func"></tree-menu>
    </li>
  </ul>
</template>

<script>
export default {
  name: "treeMenu",
  props: {
    list: {
      type: Array,
      default: []
    },
    func: {
      type: Function
    }
  },
  data() {
    return {

    };
  },
  computed: {
    // isChilren() {
    //   return this.item.children && this.item.children.length
    // }
  },
  methods: {
    toggleItem(item, key) {
      if (!item.children || !item.children.length) {
        return
      }
      // item.open = !item.opent
      console.log(key)
      console.log(item)
      item.open = !item.open
      this.$set(this.list, key, item)
      const activeClass = this.$refs[item.id][0].className
      console.log(this.$refs[item.id])
      if (activeClass.indexOf("active") !== -1) {
        this.$refs[item.id][0].className = activeClass.replace("active", "")
      } else {
        this.$refs[item.id][0].classList = activeClass + "active"
      }
    }

  }
};
</script>

<style lang='less' scoped>
li {
  padding-bottom: 5px;
  position: relative;
 
  &:after {
    content: "";
    position: absolute;
    // z-index: 2;
    width: 11px;
    height: 0px;
    left: -11px;
    margin-right: 1px;
    top: 11px;
    border-top: 1px dashed rgb(220, 221, 223);
  }
  ul {
    padding-left: 20px;
    position: relative; 
    &:after {
      content: "";

      position: absolute;
      z-index: 2;
      left: 5px;
      top: 0px;
      bottom: 15px;
      width: 0px;
      border-left: 1px dashed rgb(220, 221, 223);
    }
  }
}
i {
  width: 11px;
  height: 11px;
  margin-right: 10px;
  box-sizing: border-box;
  border: 1px solid blue;
  display: inline-block;
  position: relative;
  &::before,
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: blue;
    left: 0;
    top: 4px;
    transform-origin: center;
  }
  &:after {
    transform: rotateZ(90deg);
  }
  &.active:after {
    transform: rotateZ(0);
  }
}
</style>