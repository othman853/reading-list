<template lang="html">

  <div>
    <navbar />
    <div class="container">
      <resources />
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
