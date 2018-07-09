<template>

  <section>
    <ul class="tips">
      <li class="">
        <div class="tipsForsth">
          <div class="title"> 今日代办</div>
          <ul>
            <li>11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>4</li>
            <li>4</li>
          </ul>
          <div class="more">
            <span> more</span>
          </div>
        </div>
      </li>
      <li>
        <div class="tipsProduce">
          <div class="title"> 今日公告</div>
          <ul>
            <li>21</li>
            <li>22</li>
            <li>23</li>
            <li>24</li>
            <li>24</li>
            <li>24</li>
            <li>24</li>
            <li>24</li>
          </ul>
          <div class="more">
            <span> more</span>
          </div>
        </div>
      </li>
      <li>
        <div class="tipsSale">
          <div class="title"> 今日经营</div>
          <ul>
            <li>
              <span>今日出房</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <strong>15</strong>
            </li>
            <li>
              <span>今日出房</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <strong>15</strong>
            </li>
            <li>
              <span>今日出房</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <strong>15</strong>
            </li>
            <li>
              <span>今日出房</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <strong>15</strong>
            </li>
            <li>
              <span>今日出房</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <strong>15</strong>
            </li>
            <li>
              <span>今日出房</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <strong>15</strong>
            </li>
            <li>
              <span>今日出房</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <strong>15</strong>
            </li>
            <li>
              <span>今日出房</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <strong>15</strong>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <ul class="soon">
      <li>
        <span>待收账单 (7天)</span>
        <strong>98</strong>
      </li>
      <li>
        <span>待收账单 (7天)</span>
        <strong>98</strong>
      </li>
      <li>
        <span>待收账单 (7天)</span>
        <strong>98</strong>
      </li>
      <li>
        <span>待收账单 (7天)</span>
        <strong>98</strong>
      </li>
      <li>
        <span>待收账单 (7天)</span>
        <strong>98</strong>
      </li>
      <li>
        <span>待收账单 (7天)</span>
        <strong>98</strong>
      </li>
    </ul>
  </section>

</template>
<script>
export default {
  name: "workIndex1",
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
@import "../../assets/css/utils.less";

.tips {
  height: 310px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  //  padding: 15px 0;
  & > li {
    height: 100%;
    width: calc(30%);
    position: relative;

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
.soon {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 14px;
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: top;
    flex: 1;
    height: 100%;
    padding-left: 25px;

    border-radius: 5px;
    box-shadow: 0 0 0;
    transition: all 0.5s ease;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);
    strong {
      font-size: 26px;
      color: #fff;
    }
    &:not(:last-child) {
      margin-right: 10px;
    }
    &:nth-child(1) {
      background: linear-gradient(to right, #fb9f62 0, #f57979 100%);
      &:hover {
        box-shadow: 0 0 20px rgba(245, 121, 121, 0.8);
      }
    }
    &:nth-child(2) {
      background: linear-gradient(to right, #5caaf9 0, #577df8 100%);
      &:hover {
        box-shadow: 0 0 20px rgba(87, 125, 248, 0.8);
      }
    }
    &:nth-child(3) {
      background: linear-gradient(to right, #e686b6 0, #f5697e 100%);
      &:hover {
        box-shadow: 0 0 20px rgba(245, 105, 126, 0.8);
      }
    }
    &:nth-child(4) {
      background: linear-gradient(to right, #cc8afc 0, #a05ef3 100%);
      &:hover {
        box-shadow: 0 0 20px rgba(160, 94, 243, 0.8);
      }
    }
    &:nth-child(5) {
      background: linear-gradient(to right, #48cf94 0, #43ca3e 100%);
      &:hover {
        box-shadow: 0 0 20px rgba(67, 202, 62, 0.8);
      }
    }
    &:nth-child(6) {
      background: linear-gradient(to right, #fa9f62 0, #f57979 100%);
      &:hover {
        box-shadow: 0 0 20px rgba(245, 121, 121, 0.8);
      }
    }
  }
}
</style>

