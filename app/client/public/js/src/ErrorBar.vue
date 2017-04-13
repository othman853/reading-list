<template lang="jade">
div(id="error-bar")
  error(
    v-for="(error, index) in $store.state.errors"
    v-bind:key="error"
    v-bind:message="error.body.message"
    v-bind:index="index"
  )
</template>

<script>
  import error from './Error.vue'

  export default {
    components: { error }
  }
</script>
