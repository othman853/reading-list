<template lang="html">

  <div>
    <button v-on:click="refresh" class="glyphicon glyphicon-refresh"> </button>

    <h4>Resources</h4>

    <ol>
      <li v-for="resource in resources"> <a target="_blank" :href="resource.source">{{ resource.title }}</a></li>
    </ol>

  </div>

</template>

<script>
import resourcesService from './services/resources'

const fetch = context => resourcesService.getResources()
  .then(response => {
    context.resources = response.data
  })
  .catch(error => context.errors.push(error))

export default {
  data: () => ({ resources: [], errors: [] }),
  mounted() {
    fetch(this)
  },
  methods: {
    refresh: () => fetch(this)
  }
}
</script>

<style lang="css">

</style>
