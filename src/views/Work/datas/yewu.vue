<template>
  <div>
    <ul class="lists" :class="{'showNav':showNav}">
      <li v-for="(item, key) in type" @click="changeType(key)" :class="{active: key == typeIndex}" :key="key">{{item}}</li>
    </ul>
    <ul class="tips">
      <li class="bgf91">
        <div class="title">出房</div>
        <ul>
          <li>
            <div>9</div>
            <div>今日出房</div>
          </li>
          <li>
            <div>20</div>
            <div>本月出房</div>
          </li>
        </ul>
      </li>
      <li class="bgbe6">
        <div class="title">出房</div>
        <ul>
          <li>
            <div>9</div>
            <div>今日出房</div>
          </li>
          <li>
            <div>20</div>
            <div>本月出房</div>
          </li>
        </ul>
      </li>
      <li class="bge5f">
        <div class="title">出房</div>
        <ul>
          <li>
            <div>9</div>
            <div>今日出房</div>
          </li>
          <li>
            <div>20</div>
            <div>本月出房</div>
          </li>
        </ul>
      </li>
      <li class="bg578">
        <div class="title">出房</div>
        <ul>
          <li>
            <div>9</div>
            <div>今日出房</div>
          </li>
          <li>
            <div>20</div>
            <div>本月出房</div>
          </li>
        </ul>
      </li>
    </ul>
    <ul class="charts">
      <li>
        <div class="title">1234</div>
        <div id="boxBar1"></div>
      </li>
      <li>
        <div class="title">2234</div>
        <div id="boxBar2"></div>
      </li>
    </ul>
  </div>
</template>
<script>
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/bar");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
// let myChart1, myChart2;
export default {
  name: "yewu",
  data() {
    return {
      type: ["合租", "整租", "集中"],
      typeIndex: 0,
      showNav: false,
      myChart1: "",
      myChart2: "",
      option1: {
        title: {
          text: "近6个月收房业务数据 ",
          textStyle: {
            fontWeight: "normal",
            fontSize: 16
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "none"
          }
        },
        legend: {
          data: ["续租", "新收"]
        },
        xAxis: [
          {
            data: 12,
            axisLine: {
              show: !1
            },
            axisTick: {
              show: !1
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "套       ",
            nameGap: 14,
            axisLine: {
              show: !1
            },
            axisTick: {
              show: !1
            }
          }
        ],
        series: [
          {
            name: "续租",
            type: "bar",
            barWidth: 12,
            data: "23",
            itemStyle: {
              normal: {
                color: "#f7b2b4"
              },
              emphasis: {
                color: "#eb3f43"
              }
            }
          },
          {
            name: "新收",
            type: "bar",
            barWidth: 12,
            data: "43",
            itemStyle: {
              normal: {
                color: "#fde2b4"
              },
              emphasis: {
                color: "#fbb643"
              }
            }
          }
        ]
      },
      option2: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: [
            "直接访问",
            "邮件营销",
            "联盟广告",
            "视频广告",
            "搜索引擎",
            "百度",
            "谷歌",
            "必应",
            "其他"
          ]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "邮件营销",
            type: "bar",
            stack: "广告",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "联盟广告",
            type: "bar",
            stack: "广告",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "视频广告",
            type: "bar",
            stack: "广告",
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "搜索引擎",
            type: "bar",
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine: {
              lineStyle: {
                normal: {
                  type: "dashed"
                }
              },
              data: [[{ type: "min" }, { type: "max" }]]
            }
          },
          {
            name: "百度",
            type: "bar",
            barWidth: 5,
            stack: "搜索引擎",
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name: "谷歌",
            type: "bar",
            stack: "搜索引擎",
            data: [120, 132, 101, 134, 290, 230, 220]
          },
          {
            name: "必应",
            type: "bar",
            stack: "搜索引擎",
            data: [60, 72, 71, 74, 190, 130, 110]
          },
          {
            name: "其他",
            type: "bar",
            stack: "搜索引擎",
            data: [62, 82, 91, 84, 109, 110, 120]
          }
        ]
      }
    };
  },
  mounted() {
    this.drawLine();
    let that = this;
    window.onresize = function() {
      that.myChart1.resize();
      that.myChart2.resize();
    };
  },
  methods: {
    changeType(key) {
      console.log(key);
      this.typeIndex = key;
    },
    drawLine() {
      this.myChart1 = echarts.init(document.getElementById("boxBar1"));
      this.myChart2 = echarts.init(document.getElementById("boxBar2"));
      // 绘制图表
      this.myChart1.setOption(this.option1);
      this.myChart2.setOption(this.option2);
    }
  },
  created() {
    this.showNav = true;
  }
};
</script>
<style lang="less" scoped>
@import "../../../assets/css/common.less";

.active {
  color: #02cab0;
}
.lists {
  position: absolute;
  top: 25px;
  font-size: 14px;
  left: 300px;
  color: #999;
  opacity: 0;
  li {
    float: left;
    cursor: pointer;
    margin-right: 30px;
  }
}
.showNav {
  opacity: 1;
}
.tips {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 160px;
  color: #fff;
  .title {
    font-size: 18px;
  }
  & > li {
    display: flex;
    height: 100%;
    width: calc(25% - 15px);
    border-radius: 5px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    & > ul {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 90px;
      & > li {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }
    }
  }
}
.charts {
  margin-top: 20px;
  height: 385px;
  display: flex;
  justify-content: space-between;
  li {
    width: 48%;
    height: 100%;
    border-radius: 5px;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #edf1f2;
    .title {
      height: 18px;
      line-height: 18px;
      font-size: 16px;
      color: #02cab0;
      border-left: 2px solid #02cab0;
      padding-left: 10px;
      overflow: hidden;
      & ~ div {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

