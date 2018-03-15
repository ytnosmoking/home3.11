<template>
  <div>
    <h2>
      this is MovieView
    </h2>
    <span>{{info.count}}</span>
  </div>
</template>
<script>
  export default {
    name: 'movie',
    data() {
      return {
        info:{}
      }
    },
    methods:{
      getInfo(params) {
        this.$http.post('/movie/top250').then(res=>{
          console.log(res.data)
          this.info = res.data
        })
      }
    },
    created(){
      let params = "电影"
       this.getInfo(params)
    },
  }
</script>
