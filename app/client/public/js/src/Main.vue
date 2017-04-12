<template lang="html">
  <div>
    <navigationBar />

    <div class="container">
      <errorBar />
      <resources />
    </div>
  </div>
</template>

<script>
import resources from './Resources.vue'
import navigationBar from './NavigationBar.vue'
import errorBar from './ErrorBar.vue'

export default {
  components: { navigationBar, errorBar, resources }
}
</script>

<style lang="css">

</style>
