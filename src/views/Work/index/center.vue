<template>
  <div>
    <ul class="soon">
      <li>
        <span>待收账单 (7天)</span>
        <strong>{{bill}}</strong>
        <img src="../images/daishou1.png" alt="">
      </li>
      <li>
        <span>即将搬入 (30天)</span>
        <strong>{{moveIn}}</strong>
        <img src="../images/banru1.png" alt="">
      </li>
      <li>
        <span>即将搬出 (30天)</span>
        <strong>{{moveOut}}</strong>
        <img src="../images/banru1.png" alt="">
      </li>
      <li>
        <span>保洁服务 </span>
        <strong>{{clean}}</strong>
        <img src="../images/baojie1.png" alt="">
      </li>
      <li>
        <span>维修服务 </span>
        <strong>{{fix}}</strong>
        <img src="../images/weixiu1.png" alt="">
      </li>
      <li>
        <span>投诉服务 </span>
        <strong>{{complain}}</strong>
        <img src="../images/tousu1.png" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tips',
  data() {
    return {
      bill: 0,
      moveIn: 0,
      moveOut: 0,
      clean: 0,
      fix: 0,
      complain: 0
    };
  },
  methods: {
    getBill() {
      this.$store.dispatch({ type: 'work/getBill' })
      .then(res => {
        console.log(res)
        this.bill = res.count
      })
    },
    getMove() {
      this.$store.dispatch({ type: 'work/getMove' })
      .then(res => {
        this.moveIn = res.jiJiangBanRuCount
        this.moveOut = res.jiJiangBanChuCount
      })
    },
    getClean() {
      this.$store.dispatch({ type: 'work/getClean' })
      .then(res => {
        this.clean = res.daiChuLi
      })
    },
    getFix() {
      this.$store.dispatch({ type: 'work/getFix' })
      .then(res => {
        console.log(res)
        this.fix = res.daiChuLi
      })
    },
    getComplain() {
      this.$store.dispatch({ type: 'work/getComplain' })
      .then(res => {
        console.log(res)
        this.complain = res.daiChuLi
      })
    }
  },
  mounted() {
    this.getBill()
    this.getMove()
    this.getClean()
    this.getFix()
    this.getComplain()
  }
};
</script>

<style lang='less' scoped>
.soon {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 14px;
  li {
    position: relative;
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
    &>img {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
    &:not(:last-child) {
      margin-right: 10px;
    }
    &:nth-child(1) {
      background: linear-gradient(to right, #fb9f62 0, #f57979 100%);
      &:hover {
        box-shadow: 0 0 30px rgba(245, 121, 121, 0.8);
      }
    }
    &:nth-child(2) {
      background: linear-gradient(to right, #5caaf9 0, #577df8 100%);
      &:hover {
        box-shadow: 0 0 30px rgba(87, 125, 248, 0.8);
      }
    }
    &:nth-child(3) {
      background: linear-gradient(to right, #e686b6 0, #f5697e 100%);
      &:hover {
        box-shadow: 0 0 30px rgba(245, 105, 126, 0.8);
      }
    }
    &:nth-child(4) {
      background: linear-gradient(to right, #cc8afc 0, #a05ef3 100%);
      &:hover {
        box-shadow: 0 0 30px rgba(160, 94, 243, 0.8);
      }
    }
    &:nth-child(5) {
      background: linear-gradient(to right, #48cf94 0, #43ca3e 100%);
      &:hover {
        box-shadow: 0 0 30px rgba(67, 202, 62, 0.8);
      }
    }
    &:nth-child(6) {
      background: linear-gradient(to right, #fa9f62 0, #f57979 100%);
      &:hover {
        box-shadow: 0 0 30px rgba(245, 121, 121, 1);
      }
    }
  }
}
</style>