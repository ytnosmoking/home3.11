<template>
  <div>
    this is work1

     <el-button type="primary" @click="getHttp">请求</el-button>
    <router-view></router-view>
  </div>
</template>


<script>
  export default {
    name: 'work1',
    data() {
      return {
        
      }
    },
    methods:{
      getBook() {
        return this.$http.post('/book/1003078')
      },
      getMovie() {
       return this.$http.post('/movie/top250')
      },
      getHttp() {
        // this.$http.post('/book/1003078').then( res => {
        //   console.log(res)
        // }).catch( error => {
        //   console.log(error)
        // })
        this.$http.all([this.getBook(), this.getMovie()]).then(this.$http.spread(function (acct, perms) {
          //两个请求现已完成
          console.log(acct.data)
          console.log(perms.data)
        })).catch( error => {
          console.log(error)
        });

      }
    }
  }
</script>