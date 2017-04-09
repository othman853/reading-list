<template lang="html">
  <div class>
    <h1>Reading List</h1>
    <paragraph></paragraph>
    <serverData></serverData>
  </div>
</template>

<script>
import paragraph from './Paragraph.vue'
import serverData from './ServerData.vue'

export default {
  components: { paragraph, serverData }
}
</script>

<style lang="css">
</style>
