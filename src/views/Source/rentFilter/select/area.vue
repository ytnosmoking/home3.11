<template>
  <div class="areaCont">
    <section class="area" @click="getValue">
      区域
    </section>
    <div class="areaPart clearfix">
      <ul class="fl">
        <li v-for="(item, key) in city" :key="key" @click="getTown(item)">{{item.name}}</li>
      </ul>
      <ul class="fl">
        <li v-for="(item, key) in town" :key="key" @click="getCountry(item)">{{item.name}}</li>
      </ul>
       <ul class="fl">
        <li v-for="(item, key) in country" :key="key" >{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      value: "",
      city: [],
      town: [],
      country: []
    };
  },
  methods: {
    getValue() {
      if (this.city.length === 0) {
        this.$store.dispatch({ type: "sourceRent/getCity" }).then(res => {
          this.city = res.list;
        });
      }
      console.log(this.value);
    },
    getTown(item) {
      this.$store.dispatch({ type: "sourceRent/getTown", value: item.id }).then(res => {
        console.log(res)
        this.town = res.list
      }).catch(err => {
        console.log(err)
      })
    },
    getCountry(item) {
      this.$store.dispatch({ type: "sourceRent/getCountry", value: item.id }).then(res => {
        console.log(res)
        this.country = res.list
      }).catch(err => {
        console.log(err)
      })
    }
  }
};
</script>

<style lang='less' scoped>
.areaCont {
  width: 100%;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  font-size: 14px;
  color: #606266;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  position: relative;
  .areaPart {
    width: 510px;
    position: absolute;
    z-index: 3;
    top: 120%;
    left: 0;
    height: 240px;
    background-color: #fff;
    box-shadow: 2px 2px 5px rgba(128, 128, 128, 0.4);
    overflow: hidden;
    ul {
      padding: 4px 0px;
      height: 100%;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 10px;
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
      &::-webkit-scrollbar-corner,
      &::-webkit-scrollbar-track {
        background-color: #e2e2e2;
      }
    }
    li {
      padding: 0 10px;
      cursor: pointer;
      text-align: left;
      box-sizing: border-box;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      padding: 0px 8px;
      width: 160px;
      box-sizing: border-box;
      font-size: 13px;
      line-height: 35px;
      &:hover {
        background: rgb(228, 232, 242);
      }
      &.active {
        color: rgb(255, 255, 255);
        background: rgb(0, 203, 176);
      }
    }
  }
}
</style>