<template>
  <div>
    <ul class="nav">
      <li v-for="(item, key) in navRoute" :key="key" :class="{active:item.to===com}" @click="changeCom(item.to)">{{item.name}}</li>
    </ul>
    <transition v-show="false" mode="out-in" enter-active-class="animated lightSpeedIn" leave-active-class="animated lightSpeedOut">
      <component :is="com"></component>
    </transition>
  </div>
</template>
<script>
import kongzhi from "./datas/kongzhi";
import quanju from "./datas/quanju";
import yewu from "./datas/yewu";

export default {
  name: "workDatas",
  data() {
    return {
      com: "quanju",
      navRoute: [
        {
          name: "全局数据",
          to: "quanju"
        },
        {
          name: "业务统计",
          to: "yewu"
        },
        {
          name: "空置统计",
          to: "kongzhi"
        }
      ]
    };
  },
  components: {
    quanju,
    yewu,
    kongzhi
  },
  methods: {
    changeCom(value) {
      this.com = value;
    }
  }
};
</script>
<style lang='less' scoped>
@import "../../assets/css/utils.less";
.nav {
  .clear();
  color: #999;
  margin-bottom: 15px;
  & > li {
    float: left;
    line-height: 30px;
    font-size: 14px;
    font-weight: bolder;
    padding-right: 22px;
    float: left;
    cursor: pointer;
    transition: all .3s ease;
    &:hover {
      color: #000;
    }
  }
}
.active {
  color: #02cab0;
}

</style>


