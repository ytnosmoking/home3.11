<template>
  <div>
    <h2>
      this is MovieView
    </h2>
    <span>{{info.count}}</span>
     <el-button type="success" @click="forNext()">成功按钮</el-button>

     <el-button type="warning" @click="getBook()"> book</el-button>
  </div>
</template>
<script>
    // function makeAnoise(params) {
    //   alert(params)
    // }

  export default {
    name: 'movie',
    data() {
      return {
        info:{}
      }
    },
    methods:{
      forNext() {
        return new Promise((resolve, reject) => {

          resolve()
          console.log('start====1')
          
        }).then(res=> {
          // reject()
          console.log('then====1')

        }).then(res=> {
        
          console.log('then ===2')
          //  resolve()
          
        }).then(res=> {

          // resolve()
          console.log('then===3')
          resolve()
        }).catch(v=> {
          console.log('catch--1')
          // resolve()
          console.log('catch===1')
          // reject()
        }).catch(v=>{

          console.log('catch===2')
        }).then(res => {
          console.log('then-===4')
        })
      },
      // getInfo() {
      //   this.$http.post('/movie/top250')
      //   .then(res=>{
      //     console.log(res.data)
      //     this.info = this.info = {"count": 'movie'}
      //   })
      // },
      getBook() {
        console.log(process.env)
         this.$http.post(process.env.API_HOST+'1003078').then(res=>{
          console.log(res.data)
          this.info = {"count": 'book'}
        })
      },
      getyield (){
        var vm = this
         const getYield = function* (){
          alert(1)
          let res1 = yield vm.getInfo()
          alert(2)
          let res2 = yield vm.getBook()
        }
        return getYield()
      }
    },
    mounted(){
      console.log(process.env)
    },
    created(){
      this.getBook()
      // let params = "电影"
      // let vm  = this
      
      // let toNext = getInfo()
      // toNext.next()
      //  setTimeout(()=>{
      //    toNext.next()
      //  },3000)
      // toNext.next() 
      // toNext.next()
      //  this.getInfo(params)
    }
  }
</script>
