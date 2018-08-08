<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: 'Tips',
  data() {
    return {};
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