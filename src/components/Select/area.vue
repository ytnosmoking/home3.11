<template>
  <div class="areaCont">
    <section class="area" @click="getCity">
      {{areaName}}
    </section>
    <div class="areaPart clearfix" :class="{areaTown:town.length!==0,areaCountry:country.length!==0,areaCity:city.length!==0}">
      <ul class="fl">
        <li v-for="(item, key) in city" :key="key" @dblclick.stop.prevent="getCityTable(item)" @click.stop="getTown(item,key)" :class="{active:cityActive===key}">{{item.name}}</li>
      </ul>
      <ul class="fl">
        <li v-for="(item, key) in town" :key="key" @dblclick="getTownTable(item)" @click="getCountry(item,key)" :class="{active:townActive===key}">{{item.name}}</li>
      </ul>
       <ul class="fl">
        <li v-for="(item, key) in country" :key="key" @click="getCountryTable(item)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>

var time = null; // 控制单机双击事件
export default {
  name: "",
  data() {
    return {
      areaName: "区域",
      city: [],
      cityActive: 0,
      town: [],
      townActive: 0,
      country: []
    };
  },
  methods: {
    //  获取 City 列表
    getCity() {
      if (this.city.length === 0) {
        this.$store.dispatch({ type: "source/getCity" }).then(res => {
          this.city = res.list;
          this.town = []
        });
      }
      console.log(this.areaName);
    },
    //  获取Town列表
    getTown(item, key) {
      clearTimeout(time)
      var that = this
      time = setTimeout(function() {
        that.$store.dispatch({ type: "source/getTown", value: item.id }).then(res => {
          console.log(res)
          that.cityActive = key
          that.town = res.list
          that.country = []
        }).catch(err => {
          console.log(err)
        })
      }, 300)
    },
    //  获取 Country 列表
    getCountry(item, key) {
      clearTimeout(time)
      var that = this
      time = setTimeout(function() {
        that.$store.dispatch({ type: "source/getCountry", value: item.id }).then(res => {
          console.log(res)
          that.townActive = key
          that.country = res.list
        }).catch(err => {
          console.log(err)
        })
      }, 300)
    },
    getCityTable(city) {
      clearTimeout(time)
      const tableInfo = Object.assign({}, { typeName: "guCityId", value: city.id })
      const that = this
      this.$store.dispatch({ type: "source/getTable", tableInfo }).then(res => {
        that.areaName = city.name
      })
    },
    getTownTable(town) {
      clearTimeout(time)
      const tableInfo = Object.assign({}, { typeName: "guTownId", value: town.id })
      const that = this
      this.$store.dispatch({ type: "source/getTable", tableInfo }).then(res => {
        that.areaName = town.name
      })
    },
    getCountryTable(country) {
      clearTimeout(time)
      const that = this
      const tableInfo = Object.assign({}, { typeName: "guDistrictId", value: country.id })
      this.$store.dispatch({ type: "source/getTable", tableInfo }).then(res => {
        that.areaName = country.name
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
    // width: 510px;
    width: 0;
    position: absolute;
    z-index: 3;
    top: 120%;
    left: 0;
    height: 240px;
    background-color: #fff;
    box-shadow: 2px 2px 5px rgba(128, 128, 128, 0.4);
    overflow: hidden;
    transition: all .3s ease;
    &.areaCity {
      width: 170px;
    }
    &.areaTown {
      width: 340px;
    }
    &.areaCountry {
      width: 510px;
    }
    ul {
      padding: 4px 0px;
      height: 100%;
      overflow-y: auto;
      // display: inline-block;
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