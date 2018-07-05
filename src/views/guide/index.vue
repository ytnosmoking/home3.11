<template>
  <div class="app-container">
    <p class="warn-content">
      {{'guide.description'}}
      <a href="" target="_black">driver.js</a>
    </p>
    <el-button
     icon="el-icon-question"
     type="primary" @click.prevent.stop="guide">
      {{'guide.button'}}
    </el-button>
  </div>
</template>
<script>

import * as Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import steps from './defineSteps'
export default {
  name: 'guide',
  data() {
    return {
      driver: null
    }
  },
  mounted() {
    this.driver = new Driver()
  },
  methods:{
    guide() {
      this.driver.defineSteps(steps)
      this.driver.start()
    }
  }
}
</script>
<style>

</style>


