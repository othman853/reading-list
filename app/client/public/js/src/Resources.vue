<template lang="jade">
div(class="has-margin-top-20")
  div(class="columns")
    div(class="column is-11")
      button(@click="fetchResources" class="button fa fa-refresh is-black")

    div(class="columns is-multiline")
      resource(
        v-for="resource in $store.state.resources"
        v-bind:key="resource"
        v-bind:title="resource.title"
        v-bind:tags="resource.tags"
      )
</template>

<script>
import resource from './Resource.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters(['resources']),
  methods: mapActions(['fetchResources']),
  components: { resource },
  mounted() { this.fetchResources() }
}
</script>

<style lang="css">
.has-margin-top-20 {
  margin-top: 20px;
}
</style>
