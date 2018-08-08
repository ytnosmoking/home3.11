<template>
  <section>
    <v-top></v-top>
    <v-center></v-center>
    <v-footer></v-footer>
  </section>

</template>
<script>
import vTop from './index/top'
import vCenter from './index/center'
import vFooter from './index/footer'
export default {
  name: 'workIndex1',
  components: {
    vTop,
    vCenter,
    vFooter
  },
  data() {
    return {

    };
  }
};
</script>
<style lang="less" scoped>

</style>

