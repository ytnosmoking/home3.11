<template>
  <section>
    <v-top></v-top>
    <v-center></v-center>
    <v-footer></v-footer>
    <component :is="window" :v-show="showFlag"></component>
  </section>

</template>
<script>
import common from './common/index'
import vTop from './index/top'
import vCenter from './index/center'
import vFooter from './index/footer'
export default {
  name: 'workIndex1',
  components: {
    common,
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
      console.log(this.$store.getters)
      console.log(this.$store.getters['work/showFlag'])
      // this.$store.getters.work.showFlag
      return this.$store.getters['work/showFlag']
    },
    window() {
      console.log(this.$store.getters['work/window'])
      return this.$store.getters['work/window']
    }
  },
  mounted() {
    console.log(this.$store.getters['work/showFlag'])
  }
};
</script>
<style lang="less" scoped>

</style>

