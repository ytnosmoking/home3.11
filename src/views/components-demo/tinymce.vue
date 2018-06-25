<template>
  <div class="components-container">
    <code>
      <!-- {{('components.tinymceTips')}} -->
      <a target="_blank" class="link-type" href="https://panjiachen.github.io/vue-element-admin-site/#/rich-editor"> {{('components.documentation')}}</a>
    </code>
    <div>
      <tinymce :height="300" v-model="content"></tinymce>
    </div>
    <div class="editor-content" v-html="content"></div>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'

export default {
  name: 'tinymce-demo',
  components: { Tinymce },
  data() {
    return {
      content:
      ``
    }
  }
}
</script>

<style scoped>
.editor-content{
  margin-top: 20px;
}
</style>


