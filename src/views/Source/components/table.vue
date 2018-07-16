<template>
  <section>
    <ul class="head">
      <li v-for="(item, key) in headState" :key="key">{{item}}</li>
    </ul>
    <ul class="body">
      <li v-for="(liDatas, key) in tableData" :key="key" @click.stop="showRight(liDatas)">
        <span :class="liDatas.state.type"> {{liDatas.state.value}}</span>
        <span>
          <p>
            <i class="isType">{{liDatas.user.isType}}</i>
            <i>{{liDatas.user.name}}</i>
            <i>{{liDatas.user.gender}}</i>
            <i>{{liDatas.user.from}}</i>
          </p>
          <p>{{liDatas.user.tel}}</p>
        </span>
        <span>
          <p>接收价格：{{liDatas.detail.price}}</p>
          <p>{{liDatas.detail.where}}</p>
        </span>
        <span>
          <p>{{liDatas.from.net}}</p>&nbsp;&nbsp;&nbsp;&nbsp;
          <p>{{liDatas.from.time}}</p>
        </span>
        <span>
          <p v-for="(follow, fIndex) in liDatas.follow" :key="fIndex">{{follow}}&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </span>
        <span>
          <ul class="selectChange">
            <li :value="value.label" v-for="(value, vIndex) in liDatas.control" :key="vIndex" @click.stop>
              {{value.value}}
            </li>
          </ul>
        </span>
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
      currentPage: 1,
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
          state: {
            type: "normal",
            value: "正常"
          },
          user: {
            isType: "重交通",
            name: "222",
            gender: "男",
            tel: "13995694465 ",
            from: "111"
          },
          detail: {
            price: "3000-5000",
            place: "北京市 海淀 中海枫涟山庄"
          },
          from: {
            net: "个人 网络",
            time: "2018-07-04 15:47  宿元豪"
          },
          follow: ["2018-07-10 15:08 高勇 带看", "1234"],
          control: [
            {
              label: 0,
              value: "跟进"
            },
            {
              label: 1,
              value: "指派"
            }
          ]
        },
        {
          state: {
            type: "normal",
            value: "正常"
          },
          user: {
            isType: "重交通",
            name: "222",
            gender: "男",
            tel: "13995694465 ",
            from: "111"
          },
          detail: {
            price: "3000-5000",
            place: "北京市 海淀 中海枫涟山庄"
          },
          from: {
            net: "个人 网络",
            time: "2018-07-04 15:47  宿元豪"
          },
          follow: ["2018-07-10 15:08 高勇 带看", "1234"],
          control: [
            {
              label: 0,
              value: "跟进"
            },
            {
              label: 1,
              value: "指派"
            },
            {
              label: 2,
              value: "指派1"
            },
            {
              label: 3,
              value: "指派2"
            }
          ]
        },
        {
          state: {
            type: "normal",
            value: "正常"
          },
          user: {
            isType: "重交通",
            name: "222",
            gender: "男",
            tel: "13995694465 ",
            from: "111"
          },
          detail: {
            price: "3000-5000",
            place: "北京市 海淀 中海枫涟山庄"
          },
          from: {
            net: "个人 网络",
            time: "2018-07-04 15:47  宿元豪"
          },
          follow: ["2018-07-10 15:08 高勇 带看", "1234"],
          control: [
            {
              label: 0,
              value: "跟进"
            },
            {
              label: 1,
              value: "指派"
            },
            {
              label: 2,
              value: "指派1"
            },
            {
              label: 3,
              value: "指派2"
            }
          ]
        },
        {
          state: {
            type: "normal",
            value: "正常"
          },
          user: {
            isType: "重交通",
            name: "222",
            gender: "男",
            tel: "13995694465 ",
            from: "111"
          },
          detail: {
            price: "3000-5000",
            place: "北京市 海淀 中海枫涟山庄"
          },
          from: {
            net: "个人 网络",
            time: "2018-07-04 15:47  宿元豪"
          },
          follow: ["2018-07-10 15:08 高勇 带看", "1234"],
          control: [
            {
              label: 0,
              value: "跟进"
            },
            {
              label: 1,
              value: "指派"
            },
            {
              label: 2,
              value: "指派1"
            },
            {
              label: 3,
              value: "指派2"
            }
          ]
        },
        {
          state: {
            type: "normal",
            value: "正常"
          },
          user: {
            isType: "重交通",
            name: "222",
            gender: "男",
            tel: "13995694465 ",
            from: "111"
          },
          detail: {
            price: "3000-5000",
            place: "北京市 海淀 中海枫涟山庄"
          },
          from: {
            net: "个人 网络",
            time: "2018-07-04 15:47  宿元豪"
          },
          follow: ["2018-07-10 15:08 高勇 带看", "1234"],
          control: [
            {
              label: 0,
              value: "跟进"
            },
            {
              label: 1,
              value: "指派"
            },
            {
              label: 2,
              value: "指派1"
            },
            {
              label: 3,
              value: "指派2"
            }
          ]
        },
        {
          state: {
            type: "normal",
            value: "正常"
          },
          user: {
            isType: "重交通",
            name: "222",
            gender: "男",
            tel: "13995694465 ",
            from: "111"
          },
          detail: {
            price: "3000-5000",
            place: "北京市 海淀 中海枫涟山庄"
          },
          from: {
            net: "个人 网络",
            time: "2018-07-04 15:47  宿元豪"
          },
          follow: ["2018-07-10 15:08 高勇 带看", "1234"],
          control: [
            {
              label: 0,
              value: "跟进"
            },
            {
              label: 1,
              value: "指派"
            },
            {
              label: 2,
              value: "指派1"
            },
            {
              label: 3,
              value: "指派2"
            }
          ]
        },
        {
          state: {
            type: "normal",
            value: "正常"
          },
          user: {
            isType: "重交通",
            name: "222",
            gender: "男",
            tel: "13995694465 ",
            from: "111"
          },
          detail: {
            price: "3000-5000",
            place: "北京市 海淀 中海枫涟山庄"
          },
          from: {
            net: "个人 网络",
            time: "2018-07-04 15:47  宿元豪"
          },
          follow: ["2018-07-10 15:08 高勇 带看", "1234"],
          control: [
            {
              label: 0,
              value: "跟进"
            },
            {
              label: 1,
              value: "指派"
            },
            {
              label: 2,
              value: "指派1"
            },
            {
              label: 3,
              value: "指派2"
            }
          ]
        },
        {
          state: {
            type: "normal",
            value: "正常"
          },
          user: {
            isType: "重交通",
            name: "222",
            gender: "男",
            tel: "13995694465 ",
            from: "111"
          },
          detail: {
            price: "3000-5000",
            place: "北京市 海淀 中海枫涟山庄"
          },
          from: {
            net: "个人 网络",
            time: "2018-07-04 15:47  宿元豪"
          },
          follow: ["2018-07-10 15:08 高勇 带看", "1234"],
          control: [
            {
              label: 0,
              value: "跟进"
            },
            {
              label: 1,
              value: "指派"
            },
            {
              label: 2,
              value: "指派1"
            },
            {
              label: 3,
              value: "指派2"
            }
          ]
        },
        {
          state: {
            type: "normal",
            value: "正常"
          },
          user: {
            isType: "重交通",
            name: "222",
            gender: "男",
            tel: "13995694465 ",
            from: "111"
          },
          detail: {
            price: "3000-5000",
            place: "北京市 海淀 中海枫涟山庄"
          },
          from: {
            net: "个人 网络",
            time: "2018-07-04 15:47  宿元豪"
          },
          follow: ["2018-07-10 15:08 高勇 带看", "1234"],
          control: [
            {
              label: 0,
              value: "跟进"
            },
            {
              label: 1,
              value: "指派"
            },
            {
              label: 2,
              value: "指派1"
            },
            {
              label: 3,
              value: "指派2"
            }
          ]
        },
        {
          state: {
            type: "normal",
            value: "正常"
          },
          user: {
            isType: "重交通",
            name: "222",
            gender: "男",
            tel: "13995694465 ",
            from: "111"
          },
          detail: {
            price: "3000-5000",
            place: "北京市 海淀 中海枫涟山庄"
          },
          from: {
            net: "个人 网络",
            time: "2018-07-04 15:47  宿元豪"
          },
          follow: ["2018-07-10 15:08 高勇 带看", "1234"],
          control: [
            {
              label: 0,
              value: "跟进"
            },
            {
              label: 1,
              value: "指派"
            },
            {
              label: 2,
              value: "指派1"
            },
            {
              label: 3,
              value: "指派2"
            }
          ]
        }
      ]
    };
  },
  mounted() {
    let that = this;
    window.onclick = function(e) {
      that.showState = false;
    };
  },
  methods: {
    showRight(value) {
      console.log(value);
      this.showState = !this.showState;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
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
  background-color: #fff;
  & > li {
    line-height: 40px;
    text-align: center;
  }
}
.body {
  // max-height: 500px;
  height: 500px;
  overflow: auto;
  background-color: #fff;
  &::-webkit-scrollbar {
    position: absolute;
    right: 0;
    top: 0;
    width: 5px;
    height: 10px;
  }
  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: #e2e2e2;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
}
.body > li {
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #f3f3f3;
  }
  &:nth-child(odd) {
    background: #f7f7f7;
  }
  & > span {
    display: flex;
    flex-wrap: wrap;
    // justify-content: flex-start;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    &:nth-child( n+1) {
      overflow: hidden;
    }
    &:last-child {
      display: inline-block;
      overflow: visible;
    }
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    i {
      text-align: center;
      font-style: normal;
      display: inline-block;
    }
  }
}
.head > li,
.body > li > span {
  font-size: 14px;
  height: 100%;
  
  // overflow: hidden;
  // text-overflow: ellipsis;
  // white-space: nowrap;
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
  height: calc(100% - 120px);
  overflow: hidden;
  width: 0;
  background-color: #1ad3ca;
  transition: all 0.3s ease;
  z-index: 3;
  &.active {
    width: 40%;
  }
}

.isType {
  background-color: #02cab0;
  color: #fff;
  padding: 0 5px;
  border-radius: 3px;
}
.selectChange {
  width: 100px;
  height: 30px;
  overflow: hidden;
  // margin-top: 30px;
  margin-top: 15px;
  border: 1px solid #e6e6e6;
  border-radius: 0 0 2px 2px;
  box-shadow: -3px 0 3px #f6f4ef, /*左边阴影*/ 3px 0 3px #f6f4ef,
    /*右边阴影*/ 0 3px 3px #f6f4ef;
  transition: all 0.3s ease;
  position: relative;
  background: #fff;
  z-index: 1;
  &:before {
    content: "";
    overflow: hidden;
    position: absolute;
    top: 12px;
    right: 10px;
    border-width: 5px;
    border-style: solid;
    border-color: #000 transparent transparent transparent;
  }
  &:hover {
    height: auto;
    z-index: 2;
  }

  & > li {
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
    &:hover {
      background-color: #02cab0;
      color: #ffffff;
    }
  }
}
</style>
