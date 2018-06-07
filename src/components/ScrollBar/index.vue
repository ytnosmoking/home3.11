<template>
  <div class="scroll-container" ref="scrollContainer" @wheel.prevent="handleScroll">
    <div class="scroll-wrapper" ref="scrollWrapper" :style="{top: top+'px'}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  const delta = 15;
  export default {
    name: 'ScrollBar',
    data() {
      return {
        top: 0
      }
    },
    methods: {
      handleScroll(e) {
        const eventDelta = e.wheelDelta || -e.deltaY*3,
        $container = this.$refs.scrollContainer,
        $containerHeight = $container.offsetHeight,
        $wrapper = this.$refs.scrollWrapper,
        $wrapperHeight = $wrapper.offsetHeight;
        if (eventDelta>0) {
          this.top = Math.min(0, this.top + eventDelta)
        }else {
          if ($containerHeight - delta < $wrapperHeight) {
            if(this.top < -($wrapperHeight - $containerHeight +delta)) {
              this.top = this.top
            }else {
              this.top = Math.max(this.top + eventDelta, $containerHeight - $wrapperHeight - delta)
            }
          } else {
            this.top = 0
          }
        }
      }
    }
  }
</script>

<style scoped>
  .scroll-container {
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 50px;
    background-color: #263E4A;
  }
  .scroll-container .scroll-wrapper {
    position: relative;
    width: 100%!important;
  }

</style>

