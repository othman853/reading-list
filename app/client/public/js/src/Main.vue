<template lang="html">

  <div>
    <navbar></navbar>
    <div class="container">
      <resources></resources>
    </div>
  </div>
</template>

<script>
import resources from './Resources.vue'
import navbar from './Navbar.vue'

export default {
  components: { navbar, resources }
}
</script>

<style lang="css">

</style>
