<template lang="html">

  <div>
    <button v-on:click="ping" class="btn btn-primary"> Get Server Data </button>
    <button v-on:click="clear" class="btn btn-default"> Clear </button>

    <h4>Resources</h4>

    <ol>
      <li v-for="resource in resources"> <a :href="resource.source">{{ resource.title }}</a></li>
    </ol>

    <h4>Errors</h4>

    <ol>
      <li v-for="error in errors" class="red-text">{{ error }}</li>
    </ol>
  </div>

</template>

<script>
import resourcesService from './services/resources'

export default {
  data: () => ({ resources: [], errors: [] }),
  methods: {

    clear() {
      this.resources = [];
      this.errors = [];
    },

    ping() {
      resourcesService.getResources()
        .then(response => {
          this.resources = this.resources.concat(response.data);
        })
        .catch(error => this.errors.push(error));
    }
  }
}
</script>

<style lang="css">
.red-text {
  color: #C92D2D;
}
</style>
