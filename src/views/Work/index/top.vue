<template>
  <div>
    <ul class="tips">
      <!-- showCommission -->
      <li class="">
        <div class="tipsForsth">
          <div class="title"> 今日代办</div>
          <ul>
            <li v-for="(item, index) in forSth" :key="index" :data-id="item.id" v-if="item.remindTime">
              <span style="margin-right:20px; font-size:16px; font-weight:bold;">{{item.remindTime| filterHours}}</span>
              {{item.content}}
            </li>
          </ul>
          <div class="more">
            <span @click="showCommission"> more</span>
          </div>
        </div>
      </li>
      <!-- showNotice -->
      <li>
        <div class="tipsProduce">
          <div class="title"> 今日公告</div>
          <ul>
            <li v-for="(item, index) in forProduce" :key="index" :data-id="item.id" @click="showNotice(item.id)">
              <span style="margin-right:10px;color:#02CAB0">• [通知]</span> {{item.title}}
            </li>
          </ul>
          <div class="more">
            <span @click="showMoreNotice"> 更多</span>
          </div>
        </div>
      </li>
      <!-- showSale -->
      <li>
        <div class="tipsSale">
          <div class="title"> 今日经营</div>
          <ul>
            <li>
              <span>今日出房</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <strong>{{forSale.chengzu&&forSale.chengzu.num}}</strong>
            </li>
            <li>
              <span>本月出房</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <strong>{{forSale.chengzu&&forSale.chengzu.monthNum}}</strong>
            </li>
            <li>
              <span>今日收房</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <strong>{{forSale.qianyue&&forSale.qianyue.num}}</strong>
            </li>
            <li>
              <span>本月收房</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <strong>{{forSale.qianyue&&forSale.qianyue.monthNum}}</strong>
            </li>
            <li>
              <span>今日预定</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <strong>{{forSale.renewObject&&forSale.renewObject.num}}</strong>
            </li>
            <li>
              <span>本月预定</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <strong>{{forSale.renewObject&&forSale.renewObject.monthNum}}</strong>
            </li>
            <li>
              <span>今日续约</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <strong>{{forSale.shouding&&forSale.shouding.num}}</strong>
            </li>
            <li>
              <span>本月续约</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <strong>{{forSale.shouding&&forSale.shouding.monthNum}}</strong>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import { filterHours } from 'filters'
import { getTime } from 'utils/common';
export default {
  name: 'today',
  data() {
    return {
      Sth: {
        isFinish: '0',
        likeName: '',
        remindTimeBegin: getTime(),
        remindTimeEnd: getTime()
      },
      forSth: [],
      Produce: {
        pageNo: 1,
        pageSize: 4
      },
      forProduce: [],
      Sale: {
        houseType: '',
        selectDay: getTime()
      },
      forSale: {}
    };
  },
  methods: {
    // 代办 弹窗
    showCommission() {
      this.$store.commit({ type: 'work/showCommission', block: 'commission' })
      setTimeout(() => {
        this.$store.commit({ type: 'work/showFlag' })
      }, 200)
    },
    showNotice(id) {
      console.log(id)
      this.$store.commit({ type: 'work/showNotice', block: 'notice', id })
      setTimeout(() => {
        this.$store.commit({ type: 'work/showFlag' })
      }, 200)
    },
    showMoreNotice() {
      this.$store.commit({ type: 'work/showAllNotice', block: 'allNotice' })
      setTimeout(() => {
        this.$store.commit({ type: 'work/showFlag' })
      }, 200)
    },
    //
    getSth() {
      console.log(this.$store);
      this.$store
        .dispatch({ type: 'work/getSth', value: this.Sth })
        .then(res => {
          this.forSth = res;
        });
    },
    getProduce() {
      this.$store
        .dispatch({ type: 'work/getProduce', value: this.Produce })
        .then(res => {
          this.forProduce = res;
        });
    },
    getSale() {
      this.$store
        .dispatch({ type: 'work/getSale', value: this.Sale })
        .then(res => {
          this.forSale = res;
          console.log(res);
        });
    }
  },
  created() {
    this.getSth();
    this.getProduce();
    this.getSale();
  },
  mounted() {

  }
};
</script>

<style lang='less' scoped>
@import "../../../assets/css/utils.less";
.tips {
  height: 310px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  //  padding: 15px 0;
  & > li {
    height: 100%;
    width: calc(30%);
    position: relative;
    cursor: pointer;
    &:nth-child(2) {
      width: 33%;
    }
    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    transition: all 0.5s ease;
    &:hover {
      box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
    }
    & > div {
      padding: 15px;

      height: 100%;
      box-sizing: border-box;
      position: relative;
      &.tipsForsth,
      &.tipsProduce {
        ul {
          margin-top: 25px;
          height: 220px;
          overflow: hidden;
          overflow-y: auto;
          position: relative;
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
          li {
            height: 50px;
            line-height: 50px;
            border-bottom: 1px dashed #ccc;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        .more {
          text-align: right;
          text-decoration: underline;
          color: #02cab0;
          text-shadow: 0px 0px 2px rgba(2, 202, 176, 0.8);
          span {
            transition: all 0.5s ease;
            cursor: pointer;
            &:hover {
              text-shadow: 0px 2px 2px rgba(17, 48, 44, 0.3);
            }
          }
        }
      }
      &.tipsSale {
        padding: 0;
        ul {
          width: 100%;
          height: 100%;
          font-size: 14px;
          .clear();
          li {
            float: left;
            width: 50%;
            height: 25%;
            box-sizing: border-box;
            border-bottom: 1px dashed #e4e9ea;
            display: flex;
            justify-content: center;
            align-items: center;
            strong {
              font-size: 18px;
            }
            &:nth-child(2n-1) {
              border-right: 1px dashed #e4e9ea;
            }
            &:nth-child(n + 7) {
              border-bottom: none;
            }
          }
        }
      }
      & > .title {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 26px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 15px;
        border-radius: 0 0 5px 5px;
        background-color: #02cab0;
        color: #fff;
        font-size: 14px;
        transition: all 0.5s ease;
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.8);
        &:hover {
          box-shadow: 0 5px 5px rgba(0, 0, 0, 0.4);
        }
      }
    }
  }
}
</style>