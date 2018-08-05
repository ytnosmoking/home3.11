<template>
  <section>
    <ul class="head">
      <li v-for="(item, key) in headState" :key="key">{{item}}</li>
    </ul>

    <ul class="body" :class="{bodyActive:guRenterType==='3'||guRenterType ==='6'}">

      <li v-if="tableData!==[]" 
        v-for="(liDatas, key) in tableData"
        :key="key" 
        @click.stop="showRight(liDatas.guId, liDatas.guHouseUserId.phone, liDatas.guHouseUserId.nickname, liDatas.guHouseId, liDatas.guXiaoquName)">
        <!-- 状态 -->
        <span>
          <strong v-if="liDatas.guNewStatus=== 1" class="normal">正常</strong>
          <strong v-else-if="liDatas.guNewStatus=== 2" class="wozu">我租</strong>
          <strong v-else-if="liDatas.guNewStatus=== 3" class="tazu">他租</strong>
          <strong v-else-if="liDatas.guNewStatus=== 4" class="yitui">已退</strong>
          <strong v-else-if="liDatas.guNewStatus=== 5" class="wuxiao">无效</strong>
          <strong v-else class="normal">正常</strong>
        </span>
        <!-- 姓名 电话 -->
        <span>
          <p>
            <i class="importType" v-if="liDatas.guImportanceTypeName && liDatas.guImportanceTypeId.id">
              {{liDatas.guImportanceTypeName}}
            </i>
            <i v-if="liDatas.guHouseUserId.nickname">
              {{liDatas.guHouseUserId.nickname}}
            </i>
            <i v-if="liDatas.guHouseUserId.gender">
              {{liDatas.guHouseUserId.gender===1? "男":"女"}}
            </i>
            <i v-if="liDatas.bStatus===2">
              {{"☞"}}
            </i>
          </p>
          <p>
            {{liDatas.guHouseUserId.phone}}
          </p>
        </span>
        <!-- 接受价格 地址 -->
        <span>
          <p>接收价格：{{liDatas.guMinMoney ? liDatas.guMinMoney:"暂无" }}-{{liDatas.guMaxMoney? liDatas.guMaxMoney+"元":"暂无" }}</p>
          <p>{{liDatas.guCityName}} {{liDatas.guXiaoquName | strParse}} {{liDatas.guTownName| strParse}}</p>
        </span>
        <!-- 来源类型 来源 录入时间 人 -->
        <span>
          <p>
            <i>
              {{liDatas.guCustomerSource==="2"?"个人":"公司"}}
            </i>
            &nbsp;
            <i>
              {{liDatas.guSourceTypeId.key? liDatas.guSourceTypeId.key: "无"}}
            </i>
          </p>
          <p>
            <i>
              {{liDatas.guCt}}
            </i>
            <i>
              {{liDatas.guCreateName}}
            </i>
          </p>
        </span>
        <!-- 跟进时间 人 方式 内容 -->
        <span>
          <p>
            <i>{{liDatas.guFollowTime}}</i>
            <i>{{liDatas.guFollowUserName}}-{{liDatas.guFollowTypeName}}</i>
          </p>
          <p>
            {{liDatas.guFollowInfo| strParse}}
          </p>
        </span>
        <!-- 操作 -->
        <span>
          <ul class="selectChange" @click.stop>
            <li :data-value="liDatas.guId">跟进</li>
            <li :data-value="liDatas.guId">指派</li>
            <li :data-value="liDatas.guId" :data-name="liDatas.guHouseUserId.nickname">{{liDatas.guRenterType| changeCode}}</li>
            <li :data-value="liDatas.guId">编辑信息</li>
            <li :data-value="liDatas.guId">无效</li>
            <li :data-value="liDatas.guId">删除</li>
          </ul>
        </span>
      </li>
    
      <li v-show="tableData.length==0" style="height:100%;flex-direction: column;justify-content: center;margin-bottom:0">
        <i class="el-icon-warning" style="font-size:50px"></i>
        <br>
        <br> 没有匹配的信息!
      </li>
    </ul>

    <show-right :showState="showState"></show-right>
  
  </section>
</template>

<script>
import Bus from '@/StaticBus';
import showRight from './showRight';
export default {
  name: 'filter-table',
  props: {
    guRenterType: {
      type: String,
      default: '2'
    },
    tableData: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  components: {
    showRight
  },
  data() {
    return {
      currentPage: 1,
      showState: false,
      headState: [
        '状态',
        '姓名/电话',
        '接受价格/地址',
        '来源类型/来源/录入时间/人',
        '跟进时间/人/方式/内容',
        '操作'
      ]
    };
  },
  mounted() {
    // console.log(this.guRenterType);
    const that = this;
    window.onclick = function(e) {
      that.showState = false;
    };
    Bus.$on('hideRight', function(e) {
      that.showState = false;
    });
    // console.log(this.tableData);
  },
  methods: {
    showRight(value) {
      console.log(value);
      console.log(this.showState);
      this.showState = !this.showState;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  watch: {
    tableData: function(newValue, oldValue) {
      // console.log(newValue);
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
    // text-align: center;
    padding-left: 10px;
  }
}
.body {
  // max-height: 500px;
  height: 500px;
  overflow: auto;
  background-color: #fff;
  transition: all 0.3s ease;
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
.bodyActive {
  height: 560px;
}
.body > li {
  height: 70px;
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:nth-child(odd) {
    background: #f7f7f7;
    strong:before {
      border-color: transparent #f7f7f7 transparent transparent;
    }
  }
  &:hover {
    background-color: #eef1f7;

    strong:before {
      border-color: transparent #f3f3f3 transparent transparent;
    }
  }
  & > span {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    // justify-content: center;
    align-items: center;
    padding: 0 10px;
    &:nth-child(n + 1) {
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
      width: 100%;
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
.body > li strong {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  width: calc(100% - 20px);
  width: 80px;
  position: relative;
  padding-left: 20px;
  box-sizing: border-box;
  color: #fff;
  &:before {
    position: absolute;
    right: 0;
    top: 0;
    content: "";
    border-style: solid;
    border-width: 15px;
    border-color: transparent #fff transparent transparent;
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
.importType {
  color: #fff;
  background: #02cab0;
  border-radius: 3px;
  padding: 0 5px;
}
</style>
