<template>
  <div class="lists">
    <ul>
      <li>
        <ul>
          <li>合租</li>
          <li>
            <strong class="f67">472</strong>合租</li>
          <li>
            <strong class="ffa">472</strong>合租</li>
          <li>
            <strong class="f56">472</strong>合租</li>
          <li>
            <strong class="f61">472</strong>合租</li>
          <li>
            <strong class="b0fc">472</strong>合租</li>
          <li>
            <strong class="f67">472</strong>合租</li>
        </ul>
      </li>
      <li>
        <ul>
          <li>整租</li>
          <li>
            <strong class="f67">472</strong>合租</li>
          <li>
            <strong class="ffa">472</strong>合租</li>
          <li>
            <strong class="f56">472</strong>合租</li>
          <li>
            <strong class="f61">472</strong>合租</li>
          <li>
            <strong class="b0fc">472</strong>合租</li>
          <li>
            <strong class="f67">472</strong>合租</li>
        </ul>
      </li>
      <li>
        <ul>
          <li>集中</li>
          <li>
            <strong class="f67">472</strong>合租</li>
          <li>
            <strong class="ffa">472</strong>合租</li>
          <li>
            <strong class="f56">472</strong>合租</li>
          <li>
            <strong class="f61">472</strong>合租</li>
          <li>
            <strong class="b0fc">472</strong>合租</li>
          <li>
            <strong class="f67">472</strong>合租</li>
        </ul>
      </li>
    </ul>
    <div class="time">
      <v-calendar :attributes="dateNow"></v-calendar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vfooter',
  data() {
    return {
      value12: '',
      dateNow: [
        {
          key: 'today',
          highlight: {
            backgroundColor: '#02cab0'
          },
          contentStyle: {
            color: '#FFF'
          },
          dates: new Date()
        }
      ]
    };
  }
};
</script>

<style lang='less' scoped>
.lists {
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > ul {
    width: calc(95% - 400px);
    background-color: #fff;
    overflow: hidden;
    padding: 0 25px;
    border-radius: 5px;
    & > li {
      height: 95px;
      padding: 10px 0;
      border-bottom: 1px dashed #ecf0f1;
      ul {
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        li {
          &:first-child {
            width: 10%;
            font-size: 18px;
            color: #404040;
          }
          &:not(:first-child) {
            cursor: pointer;
          }
          height: 100%;
          width: 15%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          color: #999;
          &:hover:not(:first-child) {
            color: #404040;
          }
          strong {
            font-size: 26px;
            text-shadow: 0 0 3px #000, -1px -1px 3px #fff;
            // text-shadow:0 0 10px #c06;
          }
        }
      }
    }
  }
  .time {
    // display: flex;
    height: 348px;
    width: 300px;
    padding: 0 47px;
    background: #fff;
    border: 1px solid #ecf0f1;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
      width: 100%;
      background-color: #fff !important;
      border: none !important;
    }
  }
}
</style>