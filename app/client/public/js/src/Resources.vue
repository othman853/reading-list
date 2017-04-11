<template lang="html">

  <div class="has-margin-top-20">
    <div class="columns">
      <div class="column is-11">
        <button v-on:click="refresh" class="button fa fa-refresh is-black"> </button>
      </div>
    </div>

    <div class="columns is-multiline">
      <resource
        v-for="resource in resources"
        v-bind:key="resource"
        v-bind:title="resource.title"
        v-bind:tags="resource.tags">
      </resource>
    </div>
  </div>

</template>

<script>
import resourcesService from './services/resources'
import resource from './Resource.vue'

const fetch = context => {
  resourcesService.getResources()
  .then(response => context.resources = response.data)
  .catch(error => context.errors.push(error))
}

export default {
  data: () => ({ resources: [], errors: [] }),
  mounted() { fetch(this) },
  methods: { refresh() { fetch(this) } },
  components: { resource }
}
</script>

<style lang="css">
.has-margin-top-20 {
  margin-top: 20px;
}
</style>
