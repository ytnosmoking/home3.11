const components = {
  state: {
    common:"",
    commonShow:false
  },
  mutations: {
    SET_COMMON:(state,common)=> {
      console.log(1)
      console.log(common)
      state.common = common
    },
    CHANGE_COMMON:(state,boolean) => {
      console.log(2)
      console.log(boolean)
      state.commonShow = boolean
    }
  }
}
export default components