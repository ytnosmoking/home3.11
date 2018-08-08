<template>
  <section class="control">

    <ul class="lists">
      <li class="bgf91">
        <ul>
          <li>
            <span>合租</span> / 间</li>
          <li>
            <span>759</span><br>
            <span>可租</span>
          </li>
          <li>
            <span>759</span><br>
            <span>可租</span>
          </li>
          <li>
            <span>759</span><br>
            <span>可租</span>
          </li>
        </ul>
      </li>
      <li class="bgbe6">
        <ul>
          <li>
            <span>合租</span> / 间</li>
          <li>
            <span>759</span><br>
            <span>可租</span>
          </li>
          <li>
            <span>759</span><br>
            <span>可租</span>
          </li>
          <li>
            <span>759</span><br>
            <span>可租</span>
          </li>
        </ul>
      </li>
      <li class="bge5f">
        <ul>
          <li>
            <span>合租</span> / 间</li>
          <li>
            <span>759</span><br>
            <span>可租</span>
          </li>
          <li>
            <span>759</span><br>
            <span>可租</span>
          </li>
          <li>
            <span>759</span><br>
            <span>可租</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class="charts">
      <div class="title">
        当前空置房屋分析
      </div>
      <ul>
        <li id="circle">1</li>
        <li id="circle-detail">
          <ul>
            <li v-for="(item, key) in vacant" :key="key" :style="item.itemStyle.normal">
            ■ {{item.name}}&nbsp;&nbsp;&nbsp;{{item.value}}间&nbsp;&nbsp;&nbsp;{{item.percent}}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
const echarts = require('echarts/lib/echarts');
// 引入柱状图组件
require('echarts/lib/chart/pie');
// 引入提示框和title组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
export default {
  name: 'kongzhi',
  data() {
    return {
      charts: '',
      vacant: []
    };
  },
  mounted() {
    this.vacant = [
      {
        value: 139,
        percent: '9.94%',
        name: '0-7天',
        itemStyle: {
          normal: {
            color: '#33c575',
            borderColor: '#fff',
            borderWidth: 3
          }
        }
      },
      {
        value: 23,
        percent: '1.64%',
        name: '8-15天',
        itemStyle: {
          normal: {
            color: '#39b6fc',
            borderColor: '#fff',
            borderWidth: 3
          }
        }
      },
      {
        percent: '0.36%',
        value: 5,
        name: '16-20天',
        itemStyle: {
          normal: {
            color: '#ba4deb',
            borderColor: '#fff',
            borderWidth: 3
          }
        }
      },
      {
        value: 18,
        percent: '1.29%',
        name: '21-30天',
        itemStyle: {
          normal: {
            color: '#fdab3d',
            borderColor: '#fff',
            borderWidth: 3
          }
        }
      },
      {
        value: 95,
        percent: '6.79%',
        name: '31-50天',
        itemStyle: {
          normal: {
            color: '#f67135',
            borderColor: '#fff',
            borderWidth: 3
          }
        }
      },
      {
        total: 1399,
        value: 1119,
        percent: '79.99%',
        name: '51天以上',
        itemStyle: {
          normal: {
            color: '#f05155',
            borderColor: '#fff',
            borderWidth: 3
          }
        }
      }
    ];
    const options = {
      title: {},
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      series: [
        {
          name: '空置房',
          type: 'pie',
          radius: ['35%', '95%'],
          data: this.vacant,
          animation: !1,
          label: {
            normal: {
              show: !1,
              position: 'center'
            }
          }
        }
      ]
    };
    this.charts = echarts.init(document.getElementById('circle'));
    this.charts.setOption(options);
  }
};
</script>
<style lang="less" scoped>
@import "../../../assets/css/common.less";
.control {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 370px;
}
.lists,
.charts {
  width: calc(50% - 10px);
  height: 100%;
  box-sizing: border-box;
}
.lists {
  display: flex;
  // flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  // background:rgb(27, 53, 170);
  & > li {
    width: 100%;
    height: 110px;
    & > ul {
      height: 100%;
      display: flex;
      // flex-direction: column;
      justify-content: space-around;
      align-items: center;
      color: #fff;
      & > li {
        font-size: 14px;
        text-align: center;
        & > span:first-child {
          font-size: 20px;
        }
        line-height: 30px;
      }
    }
  }
}
.charts {
  background-color: #fff;

  padding: 20px;
  .title {
    height: 18px;
    line-height: 18px;
    font-size: 16px;
    color: #02cab0;
    border-left: 2px solid #02cab0;
    padding-left: 10px;
    overflow: hidden;
    margin-bottom: 70px;
  }
  &>ul {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    &>li {
      height: 100%;
      flex: 1;
      &>ul {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        font-size: 14px;
      }
    }
  }
}
</style>

