<template>
  <section>
    <ul class="head">
      <li v-for="(item, key) in headState" :key="key">{{item}}</li>
    </ul>
    <ul class="body">
      <li v-for="(liDatas, key) in tableData" :key="key" @click.stop="showRight(liDatas)">
        <span v-for="(value,key) in liDatas" :key="key">{{value}}</span>
      </li>
    </ul>
    <div class="showRight" :class="{'active':showState}" @click.stop>

    </div>
  </section>
</template>

<script>
export default {
  name: "filter-table",
  data() {
    return {
      showState: false,
      headState: [
        "状态",
        "姓名/电话",
        "接受价格/地址",
        "来源类型/来源/录入时间/人",
        "跟进时间/人/方式/内容",
        "操作"
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          address1: "上海市普陀区金沙江路 1518 弄",
          address2: "上海市普陀区金沙江路 1518 弄",
          address3: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          address1: "上海市普陀区金沙江路 1518 弄",
          address2: "上海市普陀区金沙江路 1518 弄",
          address3: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          address1: "上海市普陀区金沙江路 1518 弄",
          address2: "上海市普陀区金沙江路 1518 弄",
          address3: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          address1: "上海市普陀区金沙江路 1518 弄",
          address2: "上海市普陀区金沙江路 1518 弄",
          address3: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          address1: "上海市普陀区金沙江路 1518 弄",
          address2: "上海市普陀区金沙江路 1518 弄",
          address3: "上海市普陀区金沙江路 1518 弄"
        },{
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          address1: "上海市普陀区金沙江路 1518 弄",
          address2: "上海市普陀区金沙江路 1518 弄",
          address3: "上海市普陀区金沙江路 1518 弄"
        },{
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          address1: "上海市普陀区金沙江路 1518 弄",
          address2: "上海市普陀区金沙江路 1518 弄",
          address3: "上海市普陀区金沙江路 1518 弄"
        },{
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          address1: "上海市普陀区金沙江路 1518 弄",
          address2: "上海市普陀区金沙江路 1518 弄",
          address3: "上海市普陀区金沙江路 1518 弄"
        },{
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          address1: "上海市普陀区金沙江路 1518 弄",
          address2: "上海市普陀区金沙江路 1518 弄",
          address3: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    }
  },
  mounted(){
    let that = this
    window.onclick = function (e) {
      that.showState = false
    }
  },
  methods:{
    showRight(value) {
      console.log(value)
      this.showState = true
    }
  }
};
</script>
<style lang="less" scoped>
.head {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  &>li {
    line-height: 40px;
  }
}
.body {
  max-height: 500px;
  overflow: auto;
}
.body > li {
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #f7f7f7;
  }
  &:nth-child(odd){
    background: #f7f7f7;
  }
  &>span {
    line-height:70px;
  }
}
.head > li,
.body > li > span {
  height: 100%;
  
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:nth-child(1) {
    flex: 2;
  }
  &:nth-child(2) {
    flex: 3;
  }
  &:nth-child(3) {
    flex: 4;
  }
  &:nth-child(4) {
    flex: 5;
  }
  &:nth-child(5) {
    flex: 5;
  }
  &:nth-child(6) {
    flex: 2;
  }
  
}
.showRight {
    position: fixed;
    top: 60px;
    right: 0;
    height: calc(100% - 60px);
    overflow: hidden;
    width: 0;
    background-color: #1ad3ca;
    transition: all .3s ease;
    &.active {
      width: 40%;
    }
  }
</style>
