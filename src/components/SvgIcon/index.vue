<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: "svg-icon",
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String
    }
  },
  computed: {
    iconName() {
      // console.log(1)
      // console.log(this.iconClass)
      return `#icon-${this.iconClass}`
    },
    svgClass() {
      // console.log(2)
      // console.log(this.className)
      if (this.className) {
        return "svg-icon " + this.className
      } else {
        return "svg-icon"
      }
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 14px;
  height: 14px;
  fill: currentColor;
  overflow: hidden;
  vertical-align:middle;
}
</style>
