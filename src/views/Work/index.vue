<template>
  <section>
    <v-top></v-top>
    <v-center></v-center>
    <v-footer></v-footer>
    <transition mode="out-in">
      <component :is="block" :v-show="showFlag"></component>
    </transition>
    
  </section>

</template>
<script>
import commission from './common/commission'
import notice from './common/notice'
import allNotice from './common/allNotice'
import vTop from './index/top'
import vCenter from './index/center'
import vFooter from './index/footer'
export default {
  name: 'workIndex1',
  components: {

    allNotice,
    notice,
    commission,

    vTop,
    vCenter,
    vFooter
  },
  data() {
    return {

    };
  },
  computed: {
    showFlag() {
      return this.$store.getters['work/showFlag']
    },
    block() {
      return this.$store.getters['work/block']
    }
  },
  mounted() {
    console.log(this.$store.getters['work/showFlag'])
  }
};
</script>
<style lang="less" scoped>

</style>

