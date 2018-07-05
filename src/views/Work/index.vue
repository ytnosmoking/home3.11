<template>
  <div>
    <ul class="tips">
      <li>
        <div class="title"></div>
      </li>
      <li>

      </li>
      <li>

      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'workIndex1',
  data() {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
  .tips {
    height: 280px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &>li {
      height: 100%;
      width: 30%;
      position: relative;
      &:nth-child(2) {
        width: 33%;
      }
      background: #fff;
      border-radius: 5px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);
      transition: all .5s ease;
      &:hover {
        box-shadow: 0px 10px 30px rgba(0, 0, 0, .2)
      }
    }
  }
</style>

