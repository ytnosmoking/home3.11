<template>
  <div id="select">
    <input type="text" v-model="itemKey">
    <select @change="chooseMedicine">
      <option 
       v-for="(item, key) in options"
       :key="key" 
       :dataId="item.value"
       @click="getItem(item)">
       {{ item |getObj}}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      // dataId: {},
      itemKey: {}
    };
  },
  filters:{
    getObj(value) {
      let value1 = JSON.parse(JSON.stringify(value))
      return value1.label
    }
  },
  methods: {
    chooseMedicine(e) {
      console.log(e.target.children)
      let children = e.target.children
      let targetChild = Object.keys(children).filter(key => {
        return children[key].selected
        // return key
      })
      console.log(children[targetChild].getAttribute("dataid"))
      console.log(e.target.value)
    },
    getItem(value) {
      console.log(value)
      this.itemKey = value.label
    }
  }
};
</script>