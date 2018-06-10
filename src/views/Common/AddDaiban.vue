<template>
  <div>
    <div class="title" @click="closeShadow">
      this is addDaiBan
    </div>
  </div>
</template>
<script>
export default {
  name: 'AddDaiBan',
  data(){
    return {

    }
  },
  methods:{
     closeShadow(){
       this.$store.commit("CHANGE_COMMON", false);
     }
  }
}
</script>
<style>

</style>


